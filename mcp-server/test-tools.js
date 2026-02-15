#!/usr/bin/env node

/**
 * Test script to verify all MCP tools are properly registered
 * This script sends an MCP list tools request and validates the response
 */

import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Start the MCP server
const serverPath = join(__dirname, 'dist', 'index.js');
const server = spawn('node', [serverPath], {
  stdio: ['pipe', 'pipe', 'inherit']
});

// Expected tools (17 agents)
const expectedTools = [
  'create_paper_agent',
  'check_agent_status',
  'list_agents',
  'get_agent_info',
  'llm-rubric-architect',
  'experimental-designer',
  'budget-agent',
  'comptroller-agent',
  'administrator-agent',
  'mlflow-agent',
  'dataset-builder',
  'ciso-agent',
  'orchestrator',
  'creative-director',
  'visual-inspector',
  'forensic-analyst',
  'ip_analytics',
  'compliance_check',
  'archival_system'
];

let receivedData = '';
let initSent = false;

server.stdout.on('data', (data) => {
  receivedData += data.toString();

  // Try to parse complete JSON-RPC messages
  const lines = receivedData.split('\n');

  for (let i = 0; i < lines.length - 1; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    try {
      const response = JSON.parse(line);

      if (response.result && response.result.capabilities) {
        console.log('✅ Server initialized successfully');
        console.log('   Protocol version:', response.result.protocolVersion);
        console.log('   Server:', response.result.serverInfo.name, response.result.serverInfo.version);

        // Now request tool list
        const listToolsRequest = {
          jsonrpc: '2.0',
          id: 2,
          method: 'tools/list',
          params: {}
        };

        server.stdin.write(JSON.stringify(listToolsRequest) + '\n');
      } else if (response.result && response.result.tools) {
        const tools = response.result.tools;
        console.log(`\n✅ Found ${tools.length} tools registered\n`);

        // Check each expected tool
        console.log('Tool Verification:');
        console.log('==================\n');

        let allFound = true;
        expectedTools.forEach(expectedTool => {
          const found = tools.find(t => t.name === expectedTool);
          if (found) {
            console.log(`✅ ${expectedTool.padEnd(30)} - ${found.description.substring(0, 50)}...`);
          } else {
            console.log(`❌ ${expectedTool.padEnd(30)} - MISSING`);
            allFound = false;
          }
        });

        // List any extra tools not in our expected list
        const extraTools = tools.filter(t => !expectedTools.includes(t.name));
        if (extraTools.length > 0) {
          console.log('\n⚠️  Additional tools found:');
          extraTools.forEach(t => {
            console.log(`   - ${t.name}`);
          });
        }

        console.log('\n' + '='.repeat(50));
        if (allFound && tools.length === expectedTools.length) {
          console.log('✅ ALL 17 AGENTS VERIFIED - MCP SERVER IS READY!');
          console.log('='.repeat(50));
          process.exit(0);
        } else {
          console.log('❌ VERIFICATION FAILED');
          console.log(`   Expected: ${expectedTools.length} tools`);
          console.log(`   Found: ${tools.length} tools`);
          console.log('='.repeat(50));
          process.exit(1);
        }
      }
    } catch (e) {
      // Not a complete JSON message yet, continue
    }
  }

  // Keep the last incomplete line
  receivedData = lines[lines.length - 1];
});

server.on('error', (error) => {
  console.error('❌ Failed to start server:', error.message);
  process.exit(1);
});

server.on('exit', (code) => {
  if (code !== 0 && code !== null) {
    console.error('❌ Server exited with code:', code);
    process.exit(1);
  }
});

// Give the server a moment to start, then send initialize request
setTimeout(() => {
  const initRequest = {
    jsonrpc: '2.0',
    id: 1,
    method: 'initialize',
    params: {
      protocolVersion: '2024-11-05',
      capabilities: {},
      clientInfo: {
        name: 'test-client',
        version: '1.0.0'
      }
    }
  };

  console.log('🔧 Testing NerdCabalMCP Server\n');
  server.stdin.write(JSON.stringify(initRequest) + '\n');
  initSent = true;
}, 500);

// Timeout after 10 seconds
setTimeout(() => {
  console.error('❌ Test timed out after 10 seconds');
  server.kill();
  process.exit(1);
}, 10000);
