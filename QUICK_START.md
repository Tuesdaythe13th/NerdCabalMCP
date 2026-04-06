# 🚀 Quick Start: Use NerdCabalMCP NOW

## Step 1: Add to Claude Desktop Config

Edit your Claude Desktop configuration file:

**macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`
**Windows:** `%APPDATA%\Claude\claude_desktop_config.json`
**Linux:** `~/.config/Claude/claude_desktop_config.json`

Add this configuration:

```json
{
  "mcpServers": {
    "nerdcabal": {
      "command": "node",
      "args": [
        "/home/user/NerdCabalMCP/mcp-server/dist/index.js"
      ],
      "env": {
        "LOG_LEVEL": "info"
      }
    }
  }
}
```

**⚠️ IMPORTANT:** Replace `/home/user/NerdCabalMCP/` with YOUR actual path!

---

## Step 2: Restart Claude Desktop

1. **Completely quit** Claude Desktop (not just close the window)
2. **Reopen** Claude Desktop
3. Wait for MCP to connect (look for the hammer icon 🔨)

---

## Step 3: Start Using the Agents!

In Claude Desktop, you can now use any of the 20 agents:

### Example 1: Design an Experiment
```
Use design_experiment to create an A/B test for chain-of-thought prompting
vs direct answer on math problems. Sample size: 1000, metric: accuracy.
```

### Example 2: Create a Budget
```
Use analyze_research_budget to create an NSF grant budget for $500K over
24 months for an AI research project with 5 team members.
```

### Example 3: IP Analytics
```
Use ip_analytics to analyze copyright infringement patterns in portfolio
PORT-001 for the last 90 days in US jurisdiction.
```

### Example 4: Security Audit
```
Use generate_ciso_notebook to perform a STRIDE threat model for an LLM API
with components: API gateway, model inference, user database.
```

---

## ✨ Available Tools

Type `@` in Claude Desktop to see all 20 tools:

1. `create_paper_agent` - Convert research repos to MCP servers
2. `design_experiment` - Research methodology & experiments
3. `analyze_research_budget` - Grant & investor budgets
4. `ip_analytics` - IP pattern detection & analysis
5. `compliance_check` - GDPR/DMCA compliance validation
6. `archival_system` - Cryptographic evidence storage
7. `generate_ciso_notebook` - STRIDE threat modeling
8. `generate_comptroller_notebook` - Iron Triangle optimization
9. `generate_administrator_notebook` - Org design & SOPs
10. `generate_mlflow_query_plan` - Experiment tracking
11. `generate_dataset_builder_plan` - ML dataset creation
12. `analyze_swarm_and_suggest` - Multi-agent orchestration
13. `create_design_system` - Design systems & CSS
14. `visualize_dataset` - FiftyOne visualizations
15. `analyze_transcript` - Neural forensics (DSMMD)
... and more!

---

## 🔍 Verify Connection

In Claude Desktop:
1. Start a new conversation
2. Type `@` and look for "nerdcabal" tools
3. If you see the tools, you're connected! ✅

---

## 🐛 Troubleshooting

### "Tools not showing up"
1. Check the path in config is absolute (no `~`)
2. Make sure you fully quit and reopened Claude Desktop
3. Check logs: `~/Library/Logs/Claude/mcp*.log` (macOS)

### "Server won't start"
```bash
cd /home/user/NerdCabalMCP/mcp-server
npm run build
node dist/index.js
```
Should output: `Paper2Agent MCP Server running on stdio`

---

## 💡 Pro Tips

- Use natural language - the agents understand context
- Chain multiple agents together for complex workflows
- Check [TOOLS_REFERENCE.md](TOOLS_REFERENCE.md) for all tool names
- See [TEST_RESULTS.md](mcp-server/TEST_RESULTS.md) for verified agents

---

**Ready to roll! 🎉**
