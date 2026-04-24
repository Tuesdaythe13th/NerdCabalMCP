# 🧪 Testing Guide for NerdCabalMCP

This guide provides comprehensive instructions for testing the NerdCabalMCP server and all 17 specialized agents.

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [Quick Start Testing](#quick-start-testing)
- [Testing Individual Agents](#testing-individual-agents)
- [Integration Testing](#integration-testing)
- [Troubleshooting](#troubleshooting)
- [Test Scenarios](#test-scenarios)

---

## 🔧 Prerequisites

Before testing, ensure you have:

1. **Node.js 18+** installed
   ```bash
   node --version  # Should be v18.x.x or higher
   ```

2. **Built the MCP server**
   ```bash
   cd mcp-server
   npm install
   npm run build
   ```

3. **Claude Desktop** installed (for MCP client testing)
   - Download from: https://claude.ai/download

4. **Configured Claude Desktop** with the MCP server
   - See [Quick Start](README.md#quick-start) for configuration details

---

## 🚀 Quick Start Testing

### Method 1: Standalone Server Test

Test the server runs without errors:

```bash
cd mcp-server
node dist/index.js
```

**Expected output:**
```
MCP server running on stdio
```

If you see this, the server is working! Press `Ctrl+C` to stop.

### Method 2: Health Check Test

Test the server responds to basic requests:

```bash
cd mcp-server
echo '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2024-11-05","capabilities":{},"clientInfo":{"name":"test","version":"1.0.0"}}}' | node dist/index.js
```

**Expected:** JSON response with server capabilities

### Method 3: Claude Desktop Test

1. **Restart Claude Desktop** (completely quit and reopen)
2. **Open a new chat**
3. **Type `@`** to see available tools
4. **Look for `nerdcabal` tools**

If you see tools like `llm-rubric-architect`, `experimental-designer`, etc., the MCP is working!

---

## 🤖 Testing Individual Agents

### 1. LLM Rubric Architect

**Purpose:** Creates evaluation rubrics for AI systems

**Test Prompt in Claude Desktop:**
```
@nerdcabal Use llm-rubric-architect to create a rubric for evaluating chatbot responses.
Include these dimensions: accuracy, helpfulness, safety, and tone. Use a 1-5 scale.
```

**Expected Output:**
- Markdown rubric with 4 dimensions
- Clear criteria for each score (1-5)
- Examples for each level

---

### 2. Experimental Designer

**Purpose:** Designs controlled experiments

**Test Prompt:**
```
@nerdcabal Use experimental-designer to design an A/B test comparing two prompting strategies.
Hypothesis: Chain-of-thought prompting improves accuracy on math problems.
Baseline: Direct answer prompts
Intervention: Chain-of-thought prompts
Metric: Accuracy
Sample size: 1000
```

**Expected Output:**
- Hypothesis statement (H0 and H1)
- Methodology description
- Power analysis
- Success criteria

---

### 3. Budget Agent

**Purpose:** Creates financial budgets and projections

**Test Prompt:**
```
@nerdcabal Use budget-agent to create a budget for an AI research project.
Project: LLM fine-tuning research
Funding target: $500,000
Timeline: 18 months
Categories: personnel, compute, equipment
Format: NSF
```

**Expected Output:**
- Detailed budget breakdown
- Personnel costs
- Compute/GPU costs
- Equipment and supplies
- Indirect costs

---

### 4. Comptroller Agent

**Purpose:** Operations management and Iron Triangle optimization

**Test Prompt:**
```
@nerdcabal Use comptroller-agent to analyze the trade-offs for a project.
Project: Build a new feature for our app
Timeline: 2 weeks
Budget: $10,000
Quality requirements: Production-ready, full test coverage
```

**Expected Output:**
- Iron Triangle analysis
- Trade-off recommendations
- Resource allocation strategy

---

### 5. Administrator Agent

**Purpose:** Organizational design and SOPs

**Test Prompt:**
```
@nerdcabal Use administrator-agent to design an org chart for a distributed AI team.
Team size: 15 people
Timezones: US East, US West, EU, Asia
Roles needed: engineers, researchers, designers, product managers
```

**Expected Output:**
- Org chart structure
- Timezone distribution
- Meeting schedule recommendations
- Communication protocols

---

### 6. MLflow Agent

**Purpose:** Experiment tracking queries

**Test Prompt:**
```
@nerdcabal Use mlflow-agent to generate a query that finds the top 10 model runs
with the highest accuracy from the last 30 days.
```

**Expected Output:**
- MLflow API query syntax
- Filter parameters
- Sorting logic

**Note:** Requires MLflow server running for full functionality

---

### 7. Dataset Builder

**Purpose:** Creates training datasets for ML

**Test Prompt:**
```
@nerdcabal Use dataset-builder to create a supervised fine-tuning (SFT) dataset
for teaching a model to write Python code.
Include 5 examples with prompts and completions.
Output format: HuggingFace compatible
```

**Expected Output:**
- Dataset in HuggingFace format
- 5 prompt-completion pairs
- Metadata and schema

---

### 8. CISO Agent

**Purpose:** Security threat modeling

**Test Prompt:**
```
@nerdcabal Use ciso-agent to perform a STRIDE threat model for an LLM API.
Components: API gateway, model inference server, user database
Framework: STRIDE
```

**Expected Output:**
- STRIDE analysis for each component
- Threat descriptions
- Mitigation strategies
- Risk levels (HIGH/MEDIUM/LOW)

---

### 9. Orchestrator

**Purpose:** Multi-agent workflow coordination

**Test Prompt:**
```
@nerdcabal Use orchestrator to create a sequential workflow:
1. Use experimental-designer to create an experiment plan
2. Use budget-agent to budget the experiment
3. Use administrator-agent to staff the team
```

**Expected Output:**
- Workflow execution plan
- Agent sequencing
- Data flow between agents

---

### 10. Creative Director

**Purpose:** Design systems and UI/UX

**Test Prompt:**
```
@nerdcabal Use creative-director to create a design system.
Style: cyberpunk-brutalist-bauhaus
Colors: black, white, red
Components: buttons, cards, navigation
Output format: CSS
```

**Expected Output:**
- CSS variables for colors
- Component styles
- Typography system
- Spacing/layout utilities

---

### 11. Visual Inspector

**Purpose:** Dataset visualization and quality analysis

**Test Prompt:**
```
@nerdcabal Use visual-inspector to generate a FiftyOne visualization script
for analyzing an image classification dataset.
Dataset: CIFAR-10
Tasks: Find mislabeled images, detect outliers
```

**Expected Output:**
- FiftyOne Python script
- Quality analysis queries
- Visualization commands

**Note:** Requires FiftyOne installed for execution

---

### 12. Forensic Analyst

**Purpose:** Neural forensics for LLM analysis

**Test Prompt:**
```
@nerdcabal Use forensic-analyst to analyze this transcript for hallucinations:

"User: What's the capital of France?
Assistant: The capital of France is Paris, which was founded in 1850 by Napoleon Bonaparte
and has a population of 50 million people."

Use DSMMD taxonomy to detect confabulation, metadata leakage, or semantic drift.
```

**Expected Output:**
- DSMMD analysis
- Identified issues (wrong founding date, wrong population)
- Issue categorization
- Severity assessment

---

### 13-14. Enterprise IP Protection Suite

#### IP Analytics Engine

**Test Prompt:**
```
@nerdcabal Use ip_analytics to analyze copyright infringement patterns.
IP type: copyright
Timeframe: last 90 days
Portfolio IDs: PORT-001, PORT-002
Jurisdiction: US
```

**Expected Output:**
- Pattern analysis
- Risk scoring
- Geographic heatmap data
- Infringement trend analysis

#### Compliance Engine

**Test Prompt:**
```
@nerdcabal Use compliance_check to validate GDPR compliance.
Context:
- Processes personal data: yes
- Consent obtained: yes
- Data retention policy: 2 years
- Right to deletion: implemented
Jurisdiction: EU
```

**Expected Output:**
- Compliance checklist
- GDPR article references
- Identified gaps
- Remediation recommendations

#### Archival System

**Test Prompt:**
```
@nerdcabal Use archival_system to store evidence of IP infringement.
Evidence type: image
Source URL: https://example.com/infringement.jpg
Description: Unauthorized use of copyrighted work
Jurisdiction: US
Case ID: CASE-2026-001
```

**Expected Output:**
- SHA-256 hash
- Timestamp
- Chain-of-custody record
- Storage confirmation

---

## 🔗 Integration Testing

### Test 1: Multi-Agent Workflow

**Scenario:** Complete research project planning

**Steps:**
1. Use `experimental-designer` to create experiment plan
2. Use `budget-agent` to create budget
3. Use `administrator-agent` to design team structure
4. Use `ciso-agent` to assess security risks

**Prompt:**
```
@nerdcabal Let's plan a research project step by step:

1. First, use experimental-designer to design an experiment for testing a new prompting technique
2. Then use budget-agent to create a 6-month budget for $200k
3. Then use administrator-agent to design a team of 5 people
4. Finally, use ciso-agent to identify security risks
```

---

### Test 2: Creative + Technical Workflow

**Scenario:** Design and validate a UI component

**Steps:**
1. Use `creative-director` to create design system
2. Use `ciso-agent` to review for security issues
3. Use `dataset-builder` to create training data for UI testing

---

### Test 3: IP Protection Workflow

**Scenario:** Detect, validate, and archive infringement

**Steps:**
1. Use `ip_analytics` to detect infringement patterns
2. Use `compliance_check` to validate enforcement actions
3. Use `archival_system` to store evidence

---

## 🐛 Troubleshooting

### Issue: Tools not appearing in Claude Desktop

**Solutions:**
1. Verify `claude_desktop_config.json` has correct **absolute path**
2. Check the path in config matches your actual file location
3. **Completely restart** Claude Desktop (quit entirely, not just close window)
4. Check logs:
   ```bash
   # macOS
   cat ~/Library/Logs/Claude/mcp*.log

   # Windows
   type %APPDATA%\Claude\Logs\mcp*.log

   # Linux
   cat ~/.config/Claude/logs/mcp*.log
   ```

---

### Issue: Server not responding

**Solutions:**
1. Test server runs standalone:
   ```bash
   cd mcp-server
   node dist/index.js
   ```
2. Check for errors in terminal output
3. Rebuild the server:
   ```bash
   npm run build
   ```

---

### Issue: Agent returns error

**Solutions:**
1. Verify input matches the agent's required schema (see [README.md](README.md))
2. Check you're using the correct tool name (e.g., `llm-rubric-architect` not `rubric-architect`)
3. Enable debug logging:
   ```bash
   LOG_LEVEL=debug node dist/index.js
   ```

---

### Issue: External integrations failing

**MLflow:**
```bash
# Start MLflow server
mlflow server --host 0.0.0.0 --port 5000

# Set environment variable
export MLFLOW_TRACKING_URI=http://localhost:5000
```

**FiftyOne:**
```bash
# Install FiftyOne
pip install fiftyone

# Start FiftyOne app
fiftyone app launch
```

**HuggingFace:**
```bash
# Login to HuggingFace
huggingface-cli login

# Verify
huggingface-cli whoami
```

---

## 📊 Test Scenarios

### Scenario 1: Academic Researcher

**Goal:** Plan a research project for a grant proposal

**Agents to use:**
1. `experimental-designer` - Design the experiment
2. `budget-agent` - Create NSF grant budget
3. `dataset-builder` - Plan training data
4. `mlflow-agent` - Setup experiment tracking

---

### Scenario 2: Security Auditor

**Goal:** Audit an AI system for security issues

**Agents to use:**
1. `ciso-agent` - STRIDE threat model
2. `forensic-analyst` - Analyze outputs for issues
3. `ip_analytics` - Check for IP compliance
4. `compliance_check` - Validate regulatory compliance

---

### Scenario 3: Product Designer

**Goal:** Design and launch a new feature

**Agents to use:**
1. `creative-director` - Create design system
2. `comptroller-agent` - Analyze speed/cost/quality tradeoffs
3. `administrator-agent` - Design team structure
4. `ciso-agent` - Security review

---

### Scenario 4: Enterprise IP Manager

**Goal:** Monitor and protect intellectual property

**Agents to use:**
1. `ip_analytics` - Detect infringement patterns
2. `compliance_check` - Validate enforcement actions
3. `archival_system` - Store evidence
4. `ciso-agent` - Security audit

---

## ✅ Verification Checklist

Use this checklist to verify all agents are working:

- [ ] Server builds without errors (`npm run build`)
- [ ] Server runs without errors (`node dist/index.js`)
- [ ] Tools appear in Claude Desktop (`@` shows nerdcabal tools)
- [ ] `llm-rubric-architect` creates rubrics
- [ ] `experimental-designer` creates experiment plans
- [ ] `budget-agent` creates budgets
- [ ] `comptroller-agent` analyzes Iron Triangle
- [ ] `administrator-agent` creates org charts
- [ ] `mlflow-agent` generates queries
- [ ] `dataset-builder` creates datasets
- [ ] `ciso-agent` performs threat modeling
- [ ] `orchestrator` coordinates workflows
- [ ] `creative-director` creates design systems
- [ ] `visual-inspector` generates FiftyOne scripts
- [ ] `forensic-analyst` detects hallucinations
- [ ] `ip_analytics` analyzes IP patterns
- [ ] `compliance_check` validates compliance
- [ ] `archival_system` stores evidence

---

## 📚 Additional Resources

- **Main README:** [README.md](README.md)
- **MCP Server Guide:** [docs/MCP_SERVER_GUIDE.md](docs/MCP_SERVER_GUIDE.md)
- **Quick Start:** [docs/QUICK_START.md](docs/QUICK_START.md)
- **API Reference:** See [README.md#api-reference](README.md#api-reference)
- **Claude Code Guide:** [CLAUDE.MD](CLAUDE.MD)

---

## 🤝 Getting Help

- **GitHub Issues:** https://github.com/Tuesdaythe13th/NerdCabalMCP/issues
- **Documentation:** https://github.com/Tuesdaythe13th/NerdCabalMCP/tree/main/docs
- **MCP Protocol:** https://modelcontextprotocol.io

---

**Happy Testing! 🧪**

Built with ❤️ by TUESDAY and the OG NerdCabal
