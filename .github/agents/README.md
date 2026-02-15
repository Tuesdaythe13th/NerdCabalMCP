# NerdCabalMCP Agent Files

This directory contains agent.md files for each of the 20 specialized MCP agents.

## 📂 Agent Files

### Core Research & ML Agents
- **[llm-rubric-architect.md](./llm-rubric-architect.md)** - Evaluation framework designer
- **[experimental-designer.md](./experimental-designer.md)** - Research methodology specialist
- **[ciso-agent.md](./ciso-agent.md)** - Security & STRIDE threat modeling
- **[creative-director.md](./creative-director.md)** - Design systems architect

### Coming Soon
- budget-agent.md - Financial planning & budgets
- comptroller-agent.md - Iron Triangle optimization
- administrator-agent.md - Organizational design
- mlflow-agent.md - Experiment tracking
- dataset-builder.md - ML dataset creation
- orchestrator.md - Multi-agent workflows
- visual-inspector.md - FiftyOne dataset visualization
- forensic-analyst.md - Neural forensics (DSMMD)
- ip-analytics.md - IP pattern detection
- compliance-engine.md - GDPR/DMCA compliance
- archival-system.md - Cryptographic evidence storage

## 🎯 Purpose

Each agent.md file provides:
- **Clear persona** - Who the agent is and what they specialize in
- **Executable commands** - Tools the agent can run
- **Project knowledge** - Tech stack and file structure
- **Code standards** - Examples of good vs bad output
- **Boundaries** - Always do / Ask first / Never do rules

## 📖 Format

All agent files follow this structure:

```markdown
---
name: agent_name
description: One-sentence description
---

You are [persona]...

## Your Role
[What the agent specializes in]

## Tools You Can Use
[Executable commands]

## Standards
[Code style, conventions, examples]

## Boundaries
- ✅ Always: [...]
- ❓ Ask first: [...]
- ❌ Never: [...]
```

## 🔗 Integration

These agents are part of the **NerdCabalMCP** server with **20 specialized tools** accessible via the Model Context Protocol (MCP).

See [TOOLS_REFERENCE.md](../../TOOLS_REFERENCE.md) for complete tool documentation.

---

**Built with ❤️ by TUESDAY and the OG NerdCabal**
