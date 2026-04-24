# NerdCabalMCP Tools Reference

## ✅ Server Status: WORKING

**Total Tools:** 20
**Build Status:** ✅ Compiled successfully
**Server Status:** ✅ Running on stdio

---

## 📋 All Available Tools

### Paper2Agent Infrastructure (5 tools)

#### 1. `create_paper_agent`
Create a new Paper2Agent from a research repository. Clones repo, scans tutorials, extracts tools, and creates an MCP server.

**Usage:**
```
Use create_paper_agent to convert the repository at https://github.com/example/research-repo
```

#### 2. `get_pipeline_status`
Get the current status of the Paper2Agent pipeline for a project. Shows which steps are completed and overall progress.

#### 3. `list_paper_agents`
List all Paper2Agent projects with their status, tool counts, and configuration.

#### 4. `get_agent_info`
Get detailed information about a specific Paper2Agent including tools, tutorials, and MCP server path.

#### 5. `launch_agent`
Launch a Paper2Agent by installing its MCP server in Claude Code and opening Claude.

---

### Core Research & ML Agents (12 tools)

#### 6. `generate_llm_rubric`
**Agent:** LLM Rubric Architect

Generate a complete LLM-Rubric evaluation pipeline for a phenomenon. Creates JSON schema, Python runtime, dashboard specs, and prompt templates based on Perspectivist Safety methodology.

**Usage:**
```
Use generate_llm_rubric to create a rubric for evaluating chatbot responses
on accuracy, helpfulness, safety, and tone using a 1-5 scale.
```

#### 7. `design_experiment`
**Agent:** Experimental Designer

Analyze a research paper and design a new experiment based on its limitations. Extracts metadata, identifies future work, designs experimental study, and creates technical implementation plan.

**Usage:**
```
Use design_experiment to design an A/B test.
Hypothesis: Chain-of-thought prompting improves accuracy on math problems.
Sample size: 1000. Metric: accuracy.
```

#### 8. `analyze_research_budget`
**Agent:** Budget Agent

Analyze and generate research budgets for AI/ML projects. Supports grant proposals and investor decks with detailed cost breakdowns, ROI projections, and best practices guidance.

**Usage:**
```
Use analyze_research_budget to create an NSF grant budget for an AI research project.
Funding target: $500,000. Timeline: 18 months.
```

#### 9. `generate_comptroller_notebook`
**Agent:** Comptroller Agent (The COO Algorithm)

Generate a Google Colab notebook for The Comptroller. Implements Iron Triangle optimization (Speed ⟷ Cost ⟷ Quality) with constraint programming, market search, and burn rate analysis. A2A protocol compliant.

**Usage:**
```
Use generate_comptroller_notebook to analyze trade-offs for building a new feature
in 2 weeks with $10,000 budget and production-quality requirements.
```

#### 10. `generate_administrator_notebook`
**Agent:** Administrator Agent (Governance Architect)

Generate a Google Colab notebook for The Administrator. Synthesizes organizational structures, optimizes distributed team communication across timezones, generates SOPs, and creates constitutional frameworks. A2A protocol compliant.

**Usage:**
```
Use generate_administrator_notebook to design an org chart for a distributed AI team
with 15 people across US East, US West, EU, and Asia timezones.
```

#### 11. `generate_mlflow_query_plan`
**Agent:** MLflow Agent

Generate an optimized MLflow MCP query plan for experiment tracking and trace management. Translates natural language tasks into MLflow API calls with field selection and filtering strategies. Supports debugging, performance analysis, evaluation workflows, and data cleanup.

**Usage:**
```
Use generate_mlflow_query_plan to create a query that finds the top 10 model runs
with highest accuracy from the last 30 days.
```

#### 12. `generate_dataset_builder_plan`
**Agent:** Dataset Builder

Generate a comprehensive plan for constructing AI/ML training datasets. Supports single-turn and multi-turn conversations with conversion to SFT, DPO, and input formats. Integrates with CollabLLM and HuggingFace ecosystems.

**Usage:**
```
Use generate_dataset_builder_plan to create a supervised fine-tuning dataset
for teaching Python code generation. Include 5 examples in HuggingFace format.
```

#### 13. `generate_ciso_notebook`
**Agent:** CISO Agent (Chief Information Security Officer)

Generate a Google Colab notebook for The CISO. Operates on Zero Trust model with Security by Design and Safety by Design principles. Includes threat modeling (STRIDE), incident response protocols, cryptographic hygiene, and social engineering defense. A2A protocol compliant.

**Usage:**
```
Use generate_ciso_notebook to perform a STRIDE threat model for an LLM API
with components: API gateway, model inference, user database.
```

#### 14. `analyze_swarm_and_suggest`
**Agent:** Orchestrator

Analyze current agent swarm composition, identify capability gaps, suggest new agents, and recommend optimal execution patterns (Sequential, Parallel, Loop, Coordinator) per ADK standards.

**Usage:**
```
Use analyze_swarm_and_suggest to create a sequential workflow:
1. design_experiment creates an experiment
2. analyze_research_budget creates a budget
3. generate_administrator_notebook designs the team
```

#### 15. `create_design_system`
**Agent:** Creative Director v1.2

The Creative Director: Strategic Design Engine. Generates color palettes, typography systems, component libraries, and CSS frameworks following Cyberpunk Brutalist Bauhaus aesthetic or custom styles.

**Usage:**
```
Use create_design_system to create a cyberpunk brutalist design system
with colors: black, white, red. Components: buttons, cards, navigation. Output: CSS.
```

#### 16. `visualize_dataset`
**Agent:** Visual Inspector v1.0

The Visual Inspector: FiftyOne-powered dataset visualization and quality assessment. Creates interactive visualizations, detects outliers, identifies mislabeled data, and generates quality reports.

**Usage:**
```
Use visualize_dataset to create a FiftyOne visualization script
for CIFAR-10 to find mislabeled images.
```

#### 17. `analyze_transcript`
**Agent:** Forensic Analyst v1.0

The Forensic Analyst: Neural forensics for LLM transcript analysis using DSMMD taxonomy (Data, Semantics, Methods, Metadata, Discourse). Detects confabulation, context collapse, metadata leakage, and semantic drift.

**Usage:**
```
Use analyze_transcript to analyze this transcript for hallucinations:
[paste transcript here]
```

---

### Enterprise IP Protection Suite (3 tools)

#### 18. `ip_analytics`
**Agent:** IP Analytics Engine

Enterprise IP analytics: pattern detection, risk heatmaps, portfolio valuation, competitive scanning across patent/trademark/copyright datasets.

**Usage:**
```
Use ip_analytics to analyze copyright infringement patterns
for the last 90 days in portfolio PORT-001.
```

#### 19. `compliance_check`
**Agent:** Compliance Engine

Validate actions against GDPR, DMCA, EU Copyright Directive, AI Act. Advisory only - not legal advice.

**Usage:**
```
Use compliance_check to validate GDPR compliance for a system
that processes personal data with consent.
```

#### 20. `archival_system`
**Agent:** Archival System

Cryptographically secure evidence storage with tamper-proof chain for legal admissibility using SHA-256 chain hashing.

**Usage:**
```
Use archival_system to store evidence of copyright infringement
from https://example.com/infringement.jpg for case CASE-2026-001.
```

---

## 🧪 Testing

### Quick Test

To verify all tools are registered:

```bash
cd mcp-server
node list-tools.js
```

Expected output: **20 tools**

### Manual Test

```bash
cd mcp-server
node dist/index.js
```

Should output: `Paper2Agent MCP Server running on stdio`

---

## 📚 Additional Documentation

- **Main README:** [README.md](../README.md)
- **Testing Guide:** [TESTING.md](../TESTING.md)
- **Claude Code Guide:** [CLAUDE.MD](../CLAUDE.MD)
- **MCP Server Guide:** [docs/MCP_SERVER_GUIDE.md](../docs/MCP_SERVER_GUIDE.md)

---

**Last Updated:** 2026-02-15
**Server Version:** 1.0.0
**MCP Protocol:** 2024-11-05
