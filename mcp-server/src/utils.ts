/**
 * Utility functions for Paper2Agent MCP
 */

import { spawn } from 'child_process';
import { readdir, readFile, stat, access } from 'fs/promises';
import { join, dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import type { ExecutionResult, PipelineStatus, AgentInfo, StepStatus } from './types.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Only allow alphanumeric, underscore, hyphen, dot — no slashes or shell metacharacters
const PROJECT_DIR_PATTERN = /^[a-zA-Z0-9][a-zA-Z0-9_.-]{0,127}$/;
// Strict GitHub HTTPS URL — owner/repo path only
const GITHUB_URL_PATTERN = /^https:\/\/github\.com\/[a-zA-Z0-9_.-]+\/[a-zA-Z0-9_.-]+(\.git)?\/?$/;

/**
 * Validate and return a safe project directory name.
 * Throws if the name contains path separators, traversal sequences, or other disallowed characters.
 */
export function validateProjectDir(dir: unknown): string {
  if (!dir || typeof dir !== 'string') {
    throw new Error('project_dir is required and must be a string');
  }
  const trimmed = dir.trim();
  if (!PROJECT_DIR_PATTERN.test(trimmed)) {
    throw new Error(
      'project_dir must start with an alphanumeric character and contain only ' +
      'alphanumeric characters, underscores, hyphens, or dots (max 128 chars)'
    );
  }
  return trimmed;
}

/**
 * Validate and return a safe GitHub repository URL.
 * Only https://github.com/<owner>/<repo> format is accepted.
 */
export function validateGitHubUrl(url: unknown): string {
  if (!url || typeof url !== 'string') {
    throw new Error('github_url is required and must be a string');
  }
  const trimmed = url.trim();
  if (!GITHUB_URL_PATTERN.test(trimmed)) {
    throw new Error(
      'github_url must be a valid GitHub repository URL ' +
      '(e.g., https://github.com/owner/repo)'
    );
  }
  return trimmed;
}

/**
 * Resolve a sub-path relative to a base directory and verify it stays within that base.
 * Throws if the resolved path escapes the base directory (path traversal).
 */
export function resolveSafePath(base: string, subPath: string): string {
  const resolvedBase = resolve(base);
  const resolvedTarget = resolve(base, subPath);
  if (resolvedTarget !== resolvedBase && !resolvedTarget.startsWith(resolvedBase + '/')) {
    throw new Error('Path traversal detected: access outside of allowed directory is not permitted');
  }
  return resolvedTarget;
}

export const PAPER2AGENT_ROOT = join(__dirname, '..', '..');

/**
 * Execute a command and return the result.
 * shell is intentionally disabled to prevent injection via argument values.
 */
export async function executeCommand(
  command: string,
  args: string[],
  cwd?: string,
  env?: NodeJS.ProcessEnv
): Promise<ExecutionResult> {
  return new Promise((resolve) => {
    const proc = spawn(command, args, {
      cwd: cwd || PAPER2AGENT_ROOT,
      shell: false,
      env: env ?? process.env,
    });

    let stdout = '';
    let stderr = '';

    proc.stdout?.on('data', (data) => {
      stdout += data.toString();
    });

    proc.stderr?.on('data', (data) => {
      stderr += data.toString();
    });

    proc.on('close', (exitCode) => {
      resolve({
        success: exitCode === 0,
        stdout,
        stderr,
        exitCode,
      });
    });

    proc.on('error', (error) => {
      resolve({
        success: false,
        stdout,
        stderr: stderr + '\n' + error.message,
        exitCode: null,
      });
    });
  });
}

/**
 * Check if a file or directory exists
 */
export async function exists(path: string): Promise<boolean> {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

/**
 * Get pipeline status for a project
 */
export async function getPipelineStatus(projectDir: string): Promise<PipelineStatus> {
  const fullPath = resolveSafePath(PAPER2AGENT_ROOT, projectDir);
  const pipelineDir = join(fullPath, '.pipeline');

  const stepMarkers = {
    setup: '01_setup_done',
    clone: '02_clone_done',
    folders: '03_folders_done',
    context: '04_context7_done',
    step1_setup_env: '05_step1_done',
    step2_execute_tutorials: '05_step2_done',
    step3_extract_tools: '05_step3_done',
    step4_wrap_mcp: '05_step4_done',
    step5_coverage_quality: '05_step5_done',
    launch_mcp: '06_mcp_done',
  };

  const steps: Record<string, StepStatus> = {};
  let completedSteps = 0;

  for (const [key, marker] of Object.entries(stepMarkers)) {
    const markerPath = join(pipelineDir, marker);
    const isDone = await exists(markerPath);

    steps[key] = {
      name: key,
      status: isDone ? 'completed' : 'pending',
    };

    if (isDone) {
      completedSteps++;
      try {
        const stats = await stat(markerPath);
        steps[key].timestamp = stats.mtime.toISOString();
      } catch {
        // Ignore stat errors
      }
    }
  }

  const totalSteps = Object.keys(stepMarkers).length;
  const overallProgress = Math.round((completedSteps / totalSteps) * 100);

  return {
    projectDir,
    steps: steps as PipelineStatus['steps'],
    overallProgress,
    isComplete: completedSteps === totalSteps,
  };
}

/**
 * List all Paper2Agent projects
 */
export async function listAgents(): Promise<AgentInfo[]> {
  const agents: AgentInfo[] = [];

  try {
    const entries = await readdir(PAPER2AGENT_ROOT, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.isDirectory() && !entry.name.startsWith('.') && entry.name !== 'mcp-server') {
        const projectDir = entry.name;
        const pipelineMarker = join(PAPER2AGENT_ROOT, projectDir, '.pipeline');

        if (await exists(pipelineMarker)) {
          const agentInfo = await getAgentInfo(projectDir);
          if (agentInfo) {
            agents.push(agentInfo);
          }
        }
      }
    }
  } catch (error) {
    // Return empty array if root directory doesn't exist or can't be read
  }

  return agents;
}

/**
 * Get detailed information about a specific agent
 */
export async function getAgentInfo(projectDir: string): Promise<AgentInfo | null> {
  const fullPath = resolveSafePath(PAPER2AGENT_ROOT, projectDir);

  if (!(await exists(fullPath))) {
    return null;
  }

  const status = await getPipelineStatus(projectDir);
  const srcDir = join(fullPath, 'src');
  const toolsDir = join(srcDir, 'tools');

  let repoName = 'unknown';
  let mcpServerPath: string | undefined;
  let toolsCount = 0;
  let tutorialsProcessed = 0;

  // Try to find MCP server file
  if (await exists(srcDir)) {
    const srcFiles = await readdir(srcDir);
    const mcpFile = srcFiles.find(f => f.endsWith('_mcp.py'));
    if (mcpFile) {
      repoName = mcpFile.replace('_mcp.py', '');
      mcpServerPath = join(srcDir, mcpFile);
    }
  }

  // Count tools
  if (await exists(toolsDir)) {
    const toolFiles = await readdir(toolsDir);
    toolsCount = toolFiles.filter(f => f.endsWith('.py') && f !== '__init__.py').length;
  }

  // Try to read tutorial scanner output
  const scannerOutput = join(fullPath, 'claude_outputs', 'step1_output.json');
  if (await exists(scannerOutput)) {
    try {
      const content = await readFile(scannerOutput, 'utf-8');
      const data = JSON.parse(content);
      if (data.tutorials) {
        tutorialsProcessed = Array.isArray(data.tutorials) ? data.tutorials.length : 0;
      }
    } catch {
      // Ignore parsing errors
    }
  }

  let agentStatus: AgentInfo['status'] = 'incomplete';
  if (status.isComplete) {
    agentStatus = 'ready';
  }

  return {
    name: projectDir,
    projectDir,
    repoName,
    mcpServerPath,
    toolsCount,
    tutorialsProcessed,
    status: agentStatus,
  };
}

/**
 * Read and parse JSON file
 */
export async function readJsonFile<T>(path: string): Promise<T | null> {
  try {
    const content = await readFile(path, 'utf-8');
    return JSON.parse(content) as T;
  } catch {
    return null;
  }
}
