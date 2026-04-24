# Using NerdCabalMCP with Claude Code

## Overview

This guide explains how to use the **NerdCabalMCP** server with **Claude Code** and **Claude Desktop**. NerdCabalMCP provides 17 specialized AI agents that assist with research, security, design, finance, operations, and enterprise IP protection.

This MCP server also includes **Paper2Agent**, a multi-agent AI system that automatically transforms research papers into interactive AI agents with minimal human input.

## 🚀 Quick Start with Claude Code

### Step 1: Install and Build the MCP Server

```bash
# Clone the repository
git clone https://github.com/Tuesdaythe13th/NerdCabalMCP.git
cd NerdCabalMCP/mcp-server

# Install dependencies
npm install

# Build the TypeScript code
npm run build
```

### Step 2: Configure Claude Desktop

Add the following to your Claude Desktop configuration file:

**macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`

**Windows:** `%APPDATA%\Claude\claude_desktop_config.json`

**Linux:** `~/.config/Claude/claude_desktop_config.json`

```json
{
  "mcpServers": {
    "nerdcabal": {
      "command": "node",
      "args": [
        "/absolute/path/to/NerdCabalMCP/mcp-server/dist/index.js"
      ],
      "env": {
        "LOG_LEVEL": "info"
      }
    }
  }
}
```

**Important:** Replace `/absolute/path/to/` with the actual absolute path on your system.

### Step 3: Restart Claude Desktop

Completely quit and reopen Claude Desktop for the changes to take effect.

### Step 4: Verify Installation

In Claude Desktop:
1. Start a new conversation
2. Type `@` to see available tools
3. Look for `nerdcabal` tools

You should see tools like:
- `llm-rubric-architect`
- `experimental-designer`
- `budget-agent`
- `creative-director`
- And 13+ more!

---

## 🤖 The 17 Specialized Agents

### Enterprise IP Protection Suite (3 agents)

#### 1. IP Analytics Engine
**Tool:** `ip_analytics`

Analyzes intellectual property patterns, portfolio valuation, and competitive scanning.

**Example usage:**
```
@nerdcabal Use ip_analytics to analyze copyright infringement patterns
for the last 90 days in portfolio PORT-001.
```

#### 2. Compliance Engine
**Tool:** `compliance_check`

Validates GDPR, DMCA, EU Copyright Directive, and AI Act compliance.

**Example usage:**
```
@nerdcabal Use compliance_check to validate GDPR compliance for a system
that processes personal data with consent.
```

#### 3. Archival System
**Tool:** `archival_system`

Stores IP infringement evidence with cryptographic integrity using SHA-256 chain hashing.

**Example usage:**
```
@nerdcabal Use archival_system to store evidence of copyright infringement
from https://example.com/infringement.jpg for case CASE-2026-001.
```

---

### Research & Evaluation Agents (3 agents)

#### 4. LLM Rubric Architect
**Tool:** `llm-rubric-architect`

Creates comprehensive evaluation rubrics for AI systems.

**Example usage:**
```
@nerdcabal Use llm-rubric-architect to create a rubric for evaluating
chatbot responses. Include accuracy, helpfulness, safety, and tone on a 1-5 scale.
```

#### 5. Experimental Designer
**Tool:** `experimental-designer`

Designs controlled experiments with proper methodology and power analysis.

**Example usage:**
```
@nerdcabal Use experimental-designer to design an A/B test.
Hypothesis: Chain-of-thought prompting improves accuracy on math problems.
Sample size: 1000. Metric: accuracy.
```

#### 6. Forensic Analyst
**Tool:** `forensic-analyst`

Detects hallucinations and errors in LLM outputs using DSMMD taxonomy.

**Example usage:**
```
@nerdcabal Use forensic-analyst to analyze this transcript for hallucinations:
[paste transcript here]
```

---

### Financial & Operations Agents (2 agents)

#### 7. Budget Agent
**Tool:** `budget-agent`

Creates budgets for grants, investor pitches, and project planning.

**Example usage:**
```
@nerdcabal Use budget-agent to create an NSF grant budget for an AI research project.
Funding target: $500,000. Timeline: 18 months.
```

#### 8. Comptroller Agent
**Tool:** `comptroller-agent`

Analyzes the Iron Triangle (Speed ⟷ Cost ⟷ Quality) trade-offs.

**Example usage:**
```
@nerdcabal Use comptroller-agent to analyze trade-offs for building a new feature
in 2 weeks with $10,000 budget and production-quality requirements.
```

---

### Governance & Security Agents (2 agents)

#### 9. Administrator Agent
**Tool:** `administrator-agent`

Designs organizational structures, SOPs, and team configurations.

**Example usage:**
```
@nerdcabal Use administrator-agent to design an org chart for a distributed AI team
with 15 people across US East, US West, EU, and Asia timezones.
```

#### 10. CISO Agent
**Tool:** `ciso-agent`

Performs STRIDE threat modeling and security audits.

**Example usage:**
```
@nerdcabal Use ciso-agent to perform a STRIDE threat model for an LLM API
with components: API gateway, model inference, user database.
```

---

### ML Operations Agents (3 agents)

#### 11. MLflow Agent
**Tool:** `mlflow-agent`

Generates MLflow queries for experiment tracking.

**Example usage:**
```
@nerdcabal Use mlflow-agent to create a query that finds the top 10 model runs
with highest accuracy from the last 30 days.
```

#### 12. Dataset Builder
**Tool:** `dataset-builder`

Creates ML training datasets in SFT, DPO, or RLHF formats.

**Example usage:**
```
@nerdcabal Use dataset-builder to create a supervised fine-tuning dataset
for teaching Python code generation. Include 5 examples in HuggingFace format.
```

#### 13. Visual Inspector
**Tool:** `visual-inspector`

Generates FiftyOne scripts for dataset visualization and quality analysis.

**Example usage:**
```
@nerdcabal Use visual-inspector to create a FiftyOne visualization script
for CIFAR-10 to find mislabeled images.
```

---

### Design Agent (1 agent)

#### 14. Creative Director
**Tool:** `creative-director`

Creates design systems, color palettes, and UI/UX specifications.

**Example usage:**
```
@nerdcabal Use creative-director to create a cyberpunk brutalist design system
with colors: black, white, red. Components: buttons, cards, navigation. Output: CSS.
```

---

### Meta-Agent (1 agent)

#### 15. Orchestrator
**Tool:** `orchestrator`

Coordinates multi-agent workflows using ADK patterns (Sequential, Parallel, Loop, Coordinator).

**Example usage:**
```
@nerdcabal Use orchestrator to create a sequential workflow:
1. experimental-designer creates an experiment
2. budget-agent creates a budget
3. administrator-agent designs the team
```

---

### Paper2Agent Infrastructure (2 agents)

#### 16-17. Paper2Agent System

The Paper2Agent system converts research papers into interactive MCP tools.

**Custom Claude Agents** (in `.claude/agents/`):
- `tutorial-scanner` - Identifies tutorial materials in codebases
- `tutorial-executor` - Executes notebooks to generate outputs
- `tutorial-tool-extractor-implementor` - Extracts reusable functions
- `test-verifier-improver` - Creates and validates tests
- `environment-python-manager` - Manages Python environments
- `benchmark-extractor`, `benchmark-judge`, `benchmark-reviewer`, `benchmark-solver` - Benchmark processing

---

## 📖 Paper2Agent Architecture

Paper2Agent is integrated into NerdCabalMCP and uses specialized agents for converting research papers to tools.

### Core Components

1. **Tutorial Scanner** - Identifies and categorizes tutorial materials in research codebases
2. **Tutorial Executor** - Executes notebooks to generate gold-standard outputs
3. **Tool Extractor** - Extracts reusable functions from tutorials
4. **Test Verifier** - Creates and validates test files for extracted functions
5. **MCP Generator** - Creates FastMCP servers from extracted tools

### Output Structure

```
<project_dir>/
├── src/
│   ├── <repo_name>_mcp.py          # Generated MCP server
│   └── tools/                      # Extracted tools from tutorials
├── <repo_name>-env/                # Isolated Python environment
├── repo/<repo_name>/               # Cloned repository
├── reports/                        # Analysis reports
├── tests/                          # Generated test suites
└── notebooks/                      # Executed tutorials
```

## MCP Server Integration

### What is MCP?

Model Context Protocol (MCP) is a standardized protocol for connecting AI models with external tools and data sources. Paper2Agent generates MCP servers using FastMCP that expose research paper functionality as callable tools.

### MCP Server Structure

Paper2Agent generates MCP servers with the following structure:

```python
from fastmcp import FastMCP
from tools.example_tool import example_mcp

# Define the MCP server
mcp = FastMCP(name="ResearchPaper")

# Mount the tools
mcp.mount(example_mcp)

# Run the MCP server
if __name__ == "__main__":
    mcp.run(transport="http", host="127.0.0.1", port=8003)
```

### Installing MCP Servers

#### Local MCP Server

```bash
cd <working_dir>
fastmcp install claude-code <project_dir>/src/<repo_name>_mcp.py \
  --python <project_dir>/<repo_name>-env/bin/python
```

#### Remote MCP Server (Hugging Face)

```bash
bash launch_remote_mcp.sh \
  --working_dir <working_dir> \
  --mcp_name <mcp_name> \
  --mcp_url <remote_mcp_url>
```

Example:
```bash
bash launch_remote_mcp.sh \
  --working_dir analysis_dir \
  --mcp_name alphagenome \
  --mcp_url https://Paper2Agent-alphagenome-mcp.hf.space
```

### Verifying MCP Installation

```bash
# List installed MCP servers
claude mcp list

# Or inside Claude Code
\mcp
```

## Tool Calling Format

### Tool Structure

Each tool extracted by Paper2Agent follows this standardized format:

```python
from fastmcp import FastMCP
from typing import Annotated, Literal

# Create MCP instance for the tool module
tool_mcp = FastMCP(name="tool_name")

@tool_mcp.tool
def example_tool(
    required_param: Annotated[str, "Description of required parameter"],
    optional_param: Annotated[str | None, "Description of optional parameter"] = None,
    enum_param: Annotated[Literal["option1", "option2"], "Parameter with fixed options"] = "option1",
    bool_param: Annotated[bool, "Boolean flag description"] = True,
) -> dict:
    """
    Brief description of what the tool does.
    """
    # Tool implementation

    # Return standardized format
    return {
        "message": "Description of what was done",
        "reference": "https://github.com/repo/tutorial.ipynb",
        "artifacts": [
            {
                "description": "Output file description",
                "path": "/absolute/path/to/output.csv"
            }
        ]
    }
```

### Tool Calling Convention

All Paper2Agent tools return a standardized dictionary with:

- **message**: Human-readable description of the operation result
- **reference**: Link to the original tutorial/paper
- **artifacts**: List of generated files with descriptions and absolute paths

### Example Tool: Batch Variant Scoring

```python
@score_batch_mcp.tool
def score_batch_variants(
    api_key: Annotated[str, "API key for the AlphaGenome model"],
    vcf_file: Annotated[str | None, "Path to VCF/TSV/CSV file with columns: variant_id, CHROM, POS, REF, ALT"] = None,
    organism: Annotated[Literal["human", "mouse"], "Organism to score against"] = "human",
    sequence_length: Annotated[Literal["2KB", "16KB", "100KB", "500KB", "1MB"], "Context window"] = "1MB",
    score_rna_seq: Annotated[bool, "Include RNA-seq signal prediction"] = True,
    score_atac: Annotated[bool, "Include ATAC"] = True,
    out_prefix: Annotated[str | None, "Output file prefix"] = None,
) -> dict:
    """
    Score genetic variants in batch across multiple regulatory modalities using AlphaGenome.
    """
    # Implementation details...

    return {
        "message": f"Scored {len(vcf)} variants and saved results table",
        "reference": "https://github.com/AlphaPOP/blob/main/score_batch.ipynb",
        "artifacts": [
            {
                "description": "Variant scores results table",
                "path": str(download_path.resolve())
            }
        ]
    }
```

### Calling Tools in Claude Code

When the MCP server is connected to Claude Code, tools are automatically discovered and can be called:

```
User: Analyze heart gene expression data with AlphaGenome MCP to identify the
causal gene for the variant chr11:116837649:T>G, associated with
Hypoalphalipoproteinemia.
```

Claude Code will:
1. Detect available MCP tools
2. Select the appropriate tool (e.g., `score_batch_variants`)
3. Format the input data correctly
4. Call the tool with proper parameters
5. Process and present the results

## Running Paper2Agent

### Basic Usage

```bash
cd Paper2Agent

bash Paper2Agent.sh \
  --project_dir <PROJECT_DIR> \
  --github_url <GITHUB_URL>
```

### Advanced Usage

```bash
# Process specific tutorials only
bash Paper2Agent.sh \
  --project_dir <PROJECT_DIR> \
  --github_url <GITHUB_URL> \
  --tutorials <TUTORIALS_URL or TUTORIALS_TITLE>

# With API key for private repositories
bash Paper2Agent.sh \
  --project_dir <PROJECT_DIR> \
  --github_url <GITHUB_URL> \
  --api <API_KEY>
```

### Examples

#### AlphaGenome Agent

```bash
bash Paper2Agent.sh \
  --project_dir AlphaGenome_Agent \
  --github_url https://github.com/google-deepmind/alphagenome \
  --api <ALPHAGENOME_API_KEY>
```

#### Scanpy Agent

```bash
bash Paper2Agent.sh \
  --project_dir Scanpy_Agent \
  --github_url https://github.com/scverse/scanpy \
  --tutorials "Preprocessing and clustering"
```

## Available Paper MCP Servers

Pre-built MCP servers hosted on Hugging Face:

- **AlphaGenome**: https://Paper2Agent-alphagenome-mcp.hf.space
- **Scanpy**: https://Paper2Agent-scanpy-mcp.hf.space
- **TISSUE**: https://Paper2Agent-tissue-mcp.hf.space

## Multi-Agent System

Paper2Agent uses specialized agents for different pipeline stages:

1. **tutorial-scanner** - Scans codebase for tutorial materials
2. **tutorial-executor** - Executes notebooks with proper environment setup
3. **tutorial-tool-extractor-implementor** - Extracts and implements tools from tutorials
4. **test-verifier-improver** - Creates and validates test files
5. **environment-python-manager** - Manages isolated Python environments

Each agent is invoked automatically during the Paper2Agent pipeline.

## Type Annotations and Parameters

### Supported Types

Paper2Agent tools use Python type hints with `Annotated` for documentation:

- **String**: `Annotated[str, "Description"]`
- **Optional**: `Annotated[str | None, "Description"] = None`
- **Enum**: `Annotated[Literal["opt1", "opt2"], "Description"]`
- **Boolean**: `Annotated[bool, "Description"] = True`
- **Integer**: `Annotated[int, "Description"]`
- **Float**: `Annotated[float, "Description"]`

### File Path Conventions

- Input files: Relative or absolute paths accepted
- Output files: Generated in `PROJECT_ROOT/tmp/outputs/`
- Environment variables can override default directories:
  - `{TOOL_NAME}_INPUT_DIR`
  - `{TOOL_NAME}_OUTPUT_DIR`

## Best Practices

### When Creating Tools

1. **Use clear parameter descriptions** - The annotation string helps Claude understand the tool
2. **Provide sensible defaults** - Optional parameters should have good default values
3. **Return standardized format** - Always include message, reference, and artifacts
4. **Validate inputs** - Check file existence and parameter validity
5. **Use absolute paths** - Return absolute paths in artifacts for reliability

### When Using Paper Agents

1. **Verify MCP connection** - Use `\mcp` in Claude Code to confirm server is loaded
2. **Provide complete data** - Include all required input files
3. **Check artifacts** - Review generated output files in the artifacts list
4. **Reference original papers** - Use the reference URLs to understand tool behavior
5. **Monitor execution** - Check logs and reports in the reports/ directory

## Code Quality and Coverage

Paper2Agent includes automated testing and quality checks:

### Coverage Reports

Located in `reports/coverage/`:
- `coverage.xml` - CI/CD format
- `coverage.json` - Machine-readable format
- `coverage_summary.txt` - Quick metrics
- `coverage_report.md` - Detailed analysis
- `htmlcov/` - Interactive HTML dashboard

### Quality Reports

Located in `reports/quality/pylint/`:
- `pylint_report.txt` - Full analysis
- `pylint_scores.txt` - Per-file scores
- `pylint_issues.md` - Issues breakdown

### Combined Report

`reports/coverage_and_quality_report.md` provides comprehensive metrics for all generated tools.

## Prerequisites

- **Python**: 3.10 or higher
- **Claude Code**: Install from [anthropic.com/claude-code](https://www.anthropic.com/claude-code)
- **FastMCP**: `pip install fastmcp`

## Installation

```bash
# Clone repository
git clone https://github.com/jmiao24/Paper2Agent.git
cd Paper2Agent

# Install dependencies
pip install fastmcp

# Install and configure Claude Code
npm install -g @anthropic-ai/claude-code
claude
```

## Citation

```bibtex
@misc{miao2025paper2agent,
  title={Paper2Agent: Reimagining Research Papers As Interactive and Reliable AI Agents},
  author={Jiacheng Miao and Joe R. Davis and Jonathan K. Pritchard and James Zou},
  year={2025},
  eprint={2509.06917},
  archivePrefix={arXiv},
  primaryClass={cs.AI},
  url={https://arxiv.org/abs/2509.06917},
}
```

---

## 💡 How to Use Agents in Claude Code

### Basic Usage Pattern

Every agent follows this simple pattern:

```
@nerdcabal Use [agent-name] to [describe task]
```

### Multi-Agent Workflows

You can chain multiple agents together:

```
@nerdcabal Let's plan a complete research project:

1. Use experimental-designer to design an A/B test for prompt engineering
2. Use budget-agent to create a 6-month budget for $200k
3. Use administrator-agent to design a team of 5 people
4. Use ciso-agent to identify security risks
```

Claude will execute each agent sequentially, passing context between them.

### Checking Available Tools

In Claude Code or Claude Desktop:

```
Type @ to see all available tools
Look for tools starting with the nerdcabal prefix
```

Or use the MCP command:

```
\mcp
```

---

## 🧪 Testing Your Setup

See the comprehensive [TESTING.md](./TESTING.md) guide for:
- Quick verification tests
- Individual agent test cases
- Integration testing scenarios
- Troubleshooting common issues

### Quick Verification Test

Try this in Claude Desktop:

```
@nerdcabal Use llm-rubric-architect to create a simple rubric for
evaluating AI assistants on helpfulness and accuracy. Use a 1-3 scale.
```

If you get a well-formatted rubric back, your MCP is working perfectly!

---

## 🔧 Troubleshooting

### "Tools not appearing in Claude Desktop"

1. **Check configuration file path:**
   - macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
   - Windows: `%APPDATA%\Claude\claude_desktop_config.json`
   - Linux: `~/.config/Claude/claude_desktop_config.json`

2. **Verify absolute path:**
   ```json
   "args": ["/Users/yourname/NerdCabalMCP/mcp-server/dist/index.js"]
   ```
   NOT:
   ```json
   "args": ["~/NerdCabalMCP/mcp-server/dist/index.js"]  // ❌ Won't work
   ```

3. **Completely restart Claude Desktop:**
   - Quit the application entirely (not just close window)
   - Reopen Claude Desktop

4. **Check logs:**
   ```bash
   # macOS
   tail -f ~/Library/Logs/Claude/mcp*.log

   # Linux
   tail -f ~/.config/Claude/logs/mcp*.log
   ```

### "Server not starting"

1. **Rebuild the server:**
   ```bash
   cd mcp-server
   npm run build
   ```

2. **Test standalone:**
   ```bash
   node dist/index.js
   ```
   Should output: `MCP server running on stdio`

3. **Check Node.js version:**
   ```bash
   node --version  # Should be v18.0.0 or higher
   ```

### "Agent returns error"

1. Verify you're using correct agent name (see list above)
2. Check input format matches the agent's schema
3. Enable debug logging in config:
   ```json
   "env": {
     "LOG_LEVEL": "debug"
   }
   ```

---

## 📚 Additional Resources

### NerdCabalMCP Documentation
- **Main README:** [README.md](./README.md) - Complete feature documentation
- **Testing Guide:** [TESTING.md](./TESTING.md) - Comprehensive testing instructions
- **MCP Server Guide:** [docs/MCP_SERVER_GUIDE.md](docs/MCP_SERVER_GUIDE.md)
- **Quick Start:** [docs/QUICK_START.md](docs/QUICK_START.md)

### External Resources
- **Paper2Agent Repository**: https://github.com/jmiao24/Paper2Agent
- **Paper2Agent Benchmarking**: https://github.com/joed3/Paper2AgentBench
- **Claude Code**: https://www.anthropic.com/claude-code
- **FastMCP**: https://github.com/jlowin/fastmcp
- **MCP Protocol**: https://modelcontextprotocol.io
- **Anthropic MCP Docs**: https://docs.anthropic.com/claude/docs/mcp

---

## 🎯 Next Steps

1. **Test individual agents:** Use [TESTING.md](./TESTING.md) to verify each agent works
2. **Try multi-agent workflows:** Combine agents for complex tasks
3. **Explore Paper2Agent:** Convert research papers to MCP tools
4. **Read the docs:** Check [docs/](./docs/) for detailed guides
5. **Join discussions:** https://github.com/Tuesdaythe13th/NerdCabalMCP/discussions

---

**Built with ❤️ by TUESDAY and the OG NerdCabal**

*WE RESPECT THE RULES OF THE SEA.*
