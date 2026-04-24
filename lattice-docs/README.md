# LATTICE Documentation

Official developer documentation for LATTICE (L4TT1C3) - Live AI Threat Tracking & Interpretability Coordination Engine.

## 📚 Documentation Site

**Coming soon:** https://docs.lattice.ai

Built with [Mintlify](https://mintlify.com) for beautiful, searchable, and interactive documentation.

## 🗂️ Repository Structure

```
lattice-docs/
├── mint.json                    # Mintlify configuration
├── introduction.mdx             # Main landing page
├── quickstart.mdx               # 5-minute getting started guide
├── concepts.mdx                 # Core concepts (TBD)
├── authentication.mdx           # API authentication guide (TBD)
│
├── mcp/                         # Redis MCP Integration
│   ├── overview.mdx             # MCP introduction and competitive advantage
│   ├── setup-claude-desktop.mdx # Claude Desktop configuration
│   ├── natural-language-queries.mdx (TBD)
│   └── use-cases/               # 6 Redis use cases (TBD)
│       ├── leaderboards.mdx
│       ├── messaging.mdx
│       ├── fast-data-ingest.mdx
│       ├── caching.mdx
│       ├── auth-tokens.mdx
│       └── deduplication.mdx
│
├── api-reference/               # API Documentation
│   ├── openapi.yaml             # OpenAPI 3.1 specification
│   ├── overview.mdx (TBD)
│   ├── authentication.mdx (TBD)
│   ├── errors.mdx (TBD)
│   ├── rate-limits.mdx (TBD)
│   ├── specimens/               # Specimen endpoints (auto-generated)
│   ├── incidents/               # Incident endpoints (auto-generated)
│   └── tools/                   # Interpretability tools (auto-generated)
│
├── sdks/                        # SDK Documentation
│   ├── python.mdx               # Python SDK reference
│   ├── typescript.mdx (TBD)
│   └── examples.mdx (TBD)
│
├── guides/                      # How-to Guides (TBD)
│   ├── ingesting-specimens.mdx
│   ├── detecting-sycophancy.mdx
│   ├── detecting-prompt-infiltration.mdx
│   ├── running-interpretability-tools.mdx
│   ├── setting-up-alerts.mdx
│   ├── analyzing-incidents.mdx
│   └── enterprise-deployment.mdx
│
├── features/                    # Core Features (TBD)
│   ├── specimen-ingestion.mdx
│   ├── threat-detection.mdx
│   ├── interpretability-marketplace.mdx
│   ├── real-time-alerts.mdx
│   └── leaderboards.mdx
│
├── integrations/                # Platform Integrations (TBD)
│   ├── claude-desktop.mdx
│   ├── slack.mdx
│   ├── discord.mdx
│   └── pagerduty.mdx
│
├── resources/                   # Additional Resources (TBD)
│   ├── glossary.mdx
│   ├── faq.mdx
│   ├── changelog.mdx
│   └── roadmap.mdx
│
└── .claude/
    └── CLAUDE.md                # Documentation standards for Claude Code
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Local Development

1. **Install Mintlify CLI:**
   ```bash
   npm i -g mintlify
   ```

2. **Preview documentation:**
   ```bash
   cd lattice-docs
   mintlify dev
   ```

3. **Open browser:**
   Navigate to http://localhost:3000

### Building for Production

```bash
mintlify build
```

## 📝 Writing Documentation

### File Format

All documentation files use MDX (Markdown + React components).

**Frontmatter required:**
```mdx
---
title: 'Page Title'
description: 'Brief description for SEO'
---
```

### Mintlify Components

**Cards:**
```mdx
<CardGroup cols={2}>
  <Card title="Title" icon="icon-name" href="/link">
    Description
  </Card>
</CardGroup>
```

**Code Groups:**
```mdx
<CodeGroup>
```python Python
# Python code
```

```typescript TypeScript
// TypeScript code
```
</CodeGroup>
```

**Steps:**
```mdx
<Steps>
  <Step title="First step">
    Instructions
  </Step>
</Steps>
```

**Warnings/Notes:**
```mdx
<Warning>Important warning</Warning>
<Note>Helpful note</Note>
<Info>Additional context</Info>
```

### Documentation Standards

See [.claude/CLAUDE.md](./.claude/CLAUDE.md) for comprehensive standards including:

- Terminology (Specimens, Incidents, LATTICE vs Lattice)
- Code example requirements
- Navigation patterns
- Redis MCP documentation priority
- Quality checklist

**Key Principles:**

1. **Always show working code** - Test all examples
2. **Include error handling** - Show RateLimitError, AuthenticationError, etc.
3. **Use numbers for performance** - "Sub-second" → "<1ms per operation"
4. **Emphasize Redis MCP** - Our competitive advantage
5. **Link to related pages** - Help users navigate

## 🔧 Configuration

### mint.json

Main configuration file for Mintlify. Controls:

- Navigation structure
- Branding (colors, logo, favicon)
- Tabs (API Reference, MCP Integration, SDKs)
- Anchors (external links)
- Analytics

**To add a new page:**

1. Create the MDX file
2. Add to `navigation` array in `mint.json`:
   ```json
   {
     "group": "Group Name",
     "pages": [
       "path/to/new-page"
     ]
   }
   ```

### OpenAPI Specification

API reference is auto-generated from `api-reference/openapi.yaml`.

**To add a new endpoint:**

1. Update `openapi.yaml` with endpoint definition
2. Mintlify will auto-generate the reference page
3. Optionally add manual examples in separate MDX

## 📊 Content Roadmap

### Phase 1: MVP (Completed ✓)
- [x] introduction.mdx
- [x] quickstart.mdx
- [x] mcp/overview.mdx
- [x] mcp/setup-claude-desktop.mdx
- [x] api-reference/openapi.yaml
- [x] sdks/python.mdx
- [x] mint.json configuration
- [x] .claude/CLAUDE.md standards

### Phase 2: Core Features (Week 3-4)
- [ ] All "Get Started" pages (concepts.mdx, authentication.mdx)
- [ ] All Redis MCP use case pages (6 pages)
- [ ] guides/ingesting-specimens.mdx
- [ ] guides/detecting-sycophancy.mdx
- [ ] Update OpenAPI spec with all endpoints

### Phase 3: Developer Experience (Week 5-6)
- [ ] sdks/typescript.mdx
- [ ] integrations/claude-desktop.mdx
- [ ] integrations/slack.mdx
- [ ] sdks/examples.mdx
- [ ] Interactive code playground

### Phase 4: Enterprise & Scale (Week 7-8)
- [ ] guides/enterprise-deployment.mdx
- [ ] All remaining integration pages
- [ ] resources/glossary.mdx
- [ ] resources/changelog.mdx
- [ ] Search optimization
- [ ] Analytics setup

## 🎨 Branding

### Colors

- **Primary:** `#FF6B6B` (red/coral)
- **Light:** `#4ECDC4` (teal)
- **Dark:** `#2C3E50` (navy)

### Logo

Place logo files in:
- `/logo/dark.svg` - For light mode
- `/logo/light.svg` - For dark mode
- `/favicon.svg` - Browser favicon

## 📈 Analytics

Configure in `mint.json`:

```json
{
  "analytics": {
    "posthog": {
      "apiKey": "phc_..."
    }
  }
}
```

Track:
- Page views
- Search queries
- Popular sections
- User flows

## 🔗 Links

- **LATTICE Product:** https://github.com/Tuesdaythe13th/lattice
- **Platform Infrastructure:** https://github.com/Tuesdaythe13th/NerdCabalMCP
- **AI Explorer Submission:** `/competitions/ai-explorer/`
- **Demo Notebook:** `/competitions/ai-explorer/AI_Explorer_Hackathon_Demo.ipynb`
- **Mintlify Docs:** https://mintlify.com/docs
- **MCP Protocol:** https://modelcontextprotocol.io/introduction

## 💡 Tips

1. **Use Mintlify preview** - See changes instantly at localhost:3000
2. **Test all code examples** - Run them before publishing
3. **Link liberally** - Help users discover related content
4. **Show, don't just tell** - Working code > long explanations
5. **Performance numbers** - Always include benchmarks
6. **Emphasize MCP** - It's our competitive advantage

## 📞 Support

- **Discord:** https://discord.gg/lattice
- **Email:** docs@lattice.ai
- **GitHub Issues:** https://github.com/Tuesdaythe13th/lattice/issues

---

**Ready to deploy:** Once Phase 1 is reviewed and approved, this documentation will be published to https://docs.lattice.ai via Mintlify's hosting platform.
