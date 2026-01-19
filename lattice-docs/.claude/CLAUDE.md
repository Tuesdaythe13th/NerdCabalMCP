# LATTICE Documentation - Mintlify

## Project context

- **Platform:** LATTICE (L4TT1C3) - Live AI Threat Tracking & Interpretability Coordination Engine
- **Format:** MDX files with YAML frontmatter
- **Config:** mint.json for navigation
- **Documentation platform:** Mintlify (https://mintlify.com)
- **Unique selling point:** Redis MCP integration (emphasize this!)
- **Repository:** https://github.com/Tuesdaythe13th/lattice
- **Platform infrastructure:** https://github.com/Tuesdaythe13th/NerdCabalMCP

## Content strategy

- **Target audience:** AI safety researchers, security engineers, enterprise developers
- **Tone:** Technical but accessible, not condescending
- **Emphasize competitive advantages:**
  - Redis MCP (natural language → database operations)
  - Real-time threat detection (sub-second latency)
  - A2UI generative UI (Agent-to-Agent interfaces)
  - Interpretability marketplace (Inspect, Docent, Neuronpedia)
- **Always include working code examples**
- **Link to interactive demo when relevant:** `/competitions/ai-explorer/AI_Explorer_Hackathon_Demo.ipynb`

## Key concepts to maintain consistency

### Terminology

- **"Specimens"** not "samples" or "data points"
  - Specimens are AI interactions uploaded for analysis
  - Examples: chat logs, multimodal outputs, agent tool calls

- **"Incidents"** not "anomalies" or "threats" (except in context)
  - Incidents are confirmed security/safety issues
  - Anomalies are potential issues detected by scoring

- **"LATTICE"** or **"L4TT1C3"** (stylized), never "Lattice"
  - Full name: Live AI Threat Tracking & Interpretability Coordination Engine

- **Redis MCP** is the "secret weapon"
  - Competitive advantage #1
  - Always mention when discussing architecture or performance

- **Sub-second latency** when discussing performance
  - All Redis operations: <1ms
  - Specimen ingestion → anomaly scoring: <100ms

### Capitalization

- LATTICE (all caps or L4TT1C3)
- Redis MCP (MCP in caps)
- A2UI (Agent-to-Agent UI)
- UK AISI (when referring to Inspect)

### Code Example Standards

#### Python Examples

```python
# ✓ Good: Use lattice-ai SDK
from lattice import LATTICE

client = LATTICE()
specimen = client.specimens.ingest(...)
```

```python
# ✗ Bad: Don't use hypothetical/unofficial SDKs
import lattice_client  # Wrong package name
```

#### TypeScript Examples

```typescript
// ✓ Good: ESM imports
import { LATTICE } from '@lattice-ai/sdk';

// ✗ Bad: CommonJS
const { LATTICE } = require('@lattice-ai/sdk');
```

#### Always Show

1. **Error handling:**
   ```python
   from lattice import LATTICE, LATTICEError

   try:
       specimen = client.specimens.ingest(...)
   except LATTICEError as e:
       print(f"Error: {e.message}")
   ```

2. **Rate limit handling:**
   ```python
   from lattice import RateLimitError
   import time

   try:
       specimen = client.specimens.ingest(...)
   except RateLimitError as e:
       time.sleep(e.retry_after)
   ```

3. **Authentication:**
   ```python
   # Environment variable (recommended)
   export LATTICE_API_KEY=sk_lattice_...
   client = LATTICE()

   # Direct (for examples only)
   client = LATTICE(api_key="sk_lattice_...")
   ```

#### Tag All Code Blocks

```python
# Python code here
```

```typescript
// TypeScript code here
```

```bash
# Bash commands here
```

```json
{
  "json": "here"
}
```

#### Test All Examples Before Publishing

Every code example must:
- Be runnable without modification (except API keys)
- Use real LATTICE API patterns
- Include necessary imports
- Show expected output when helpful

## Navigation Standards

### Grouping

- **Group related content** (don't scatter MCP docs across multiple sections)
- Example: All Redis MCP pages in `mcp/` directory

### Icons

Use Mintlify icons for visual hierarchy:

```mdx
<CardGroup cols={2}>
  <Card title="Setup" icon="gear">
    ...
  </Card>
  <Card title="Examples" icon="code">
    ...
  </Card>
</CardGroup>
```

Common icons:
- `rocket` - Getting started, launching
- `database` - Redis, data storage
- `shield` - Security, safety
- `code` - API, SDK
- `book` - Documentation, guides
- `microscope` - Analysis, interpretability
- `bell` - Alerts, notifications
- `trophy` - Leaderboards, rankings

### Top-Level Navigation

Keep to 6-8 items:
1. Get Started
2. Core Features
3. Guides
4. Redis MCP Integration
5. API Documentation
6. SDKs
7. Integrations
8. Resources

### Deep Linking

When referencing other docs, link to specific sections:

```mdx
[Learn more about leaderboards →](/mcp/use-cases/leaderboards#performance)
```

Not:
```mdx
[Learn more](/mcp)
```

## Redis MCP Documentation Priority

**This is LATTICE's unique differentiator.** Every Redis use case gets dedicated treatment:

### Required Elements for Each Use Case Page

1. **What it does** (1 sentence)
2. **Why it matters** (business impact)
3. **Redis feature used** (technical detail)
4. **Performance benchmarks** (numbers!)
5. **Code example** (working code)
6. **Natural language query example** (show MCP in action)
7. **When to use** (decision criteria)

### Example Structure

```mdx
---
title: 'Leaderboards'
description: 'Live incident rankings using Redis Sorted Sets'
---

## What are Leaderboards?

LATTICE uses Redis Sorted Sets (ZSET) to maintain real-time incident rankings by severity.

## Why It Matters

**Business Impact:** Sub-second threat prioritization enables security teams to respond to the most critical incidents first.

**Performance:** <1ms per operation, even with millions of incidents.

## Redis Feature: Sorted Sets (ZSET)

[Technical explanation]

## Code Example

[Working code with output]

## Natural Language Query

[MCP example in Claude Desktop]

## When to Use

[Decision criteria]
```

### Performance Benchmarks

Always include numbers:

- "Sub-second" → "<1ms per operation"
- "Fast" → "10K+ specimens/second"
- "Real-time" → "Sub-100ms ingestion → scoring → alert"

### Link to Demo Notebook

When discussing Redis MCP features, link to the demo:

```mdx
See this in action: [AI Explorer Demo Notebook](https://github.com/Tuesdaythe13th/NerdCabalMCP/blob/main/competitions/ai-explorer/AI_Explorer_Hackathon_Demo.ipynb)
```

## Do NOT

### Absolute URLs for Internal Links

```mdx
# ✗ Bad
[Quickstart](https://docs.lattice.ai/quickstart)

# ✓ Good
[Quickstart](/quickstart)
```

### Skip Frontmatter

Every MDX file needs:

```mdx
---
title: 'Page Title'
description: 'Brief description for SEO and previews'
---
```

### Make Claims Without Benchmarks

```mdx
# ✗ Bad
"LATTICE is fast and scales well."

# ✓ Good
"LATTICE handles 10K+ specimens/second with sub-second latency (<1ms per Redis operation)."
```

### Assume Reader Knows What MCP Is

Always explain or link:

```mdx
Redis MCP ([Model Context Protocol](https://modelcontextprotocol.io/introduction)) enables natural language queries to Redis databases without custom APIs.
```

### Copy Competitor Documentation Style

LATTICE documentation should be:
- **Specific** (numbers, examples, benchmarks)
- **Actionable** (working code, clear next steps)
- **Honest** (acknowledge limitations, show error handling)

Not:
- Generic marketing speak
- Vague performance claims
- Oversimplified examples that don't work in production

## Git Workflow

### Branch Naming

```bash
docs/feature-name
docs/redis-mcp-use-cases
docs/python-sdk-update
```

### Commit Message Format

```
docs: description

Examples:
- docs: add leaderboards use case page
- docs: update Python SDK authentication section
- docs: fix typo in quickstart guide
```

### Never Skip Pre-commit Hooks

If there are linting errors, fix them before committing.

## Mintlify-Specific Components

### Cards

```mdx
<CardGroup cols={2}>
  <Card title="Title" icon="icon-name" href="/link">
    Description
  </Card>
</CardGroup>
```

### Accordions

```mdx
<AccordionGroup>
  <Accordion title="Question" icon="question">
    Answer
  </Accordion>
</AccordionGroup>
```

### Steps

```mdx
<Steps>
  <Step title="First step">
    Instructions
  </Step>
  <Step title="Second step">
    More instructions
  </Step>
</Steps>
```

### Warnings/Notes

```mdx
<Warning>
  Important warning message
</Warning>

<Note>
  Helpful note
</Note>

<Info>
  Additional context
</Info>
```

### Code Groups

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

## OpenAPI Integration

The API reference is auto-generated from `api-reference/openapi.yaml`.

### Keep OpenAPI Spec Updated

When adding new endpoints:

1. Update `openapi.yaml` with endpoint definition
2. Run Mintlify preview to verify auto-generation
3. Add manual examples if needed in separate MDX files

### Schema References

Use `$ref` for reusable schemas:

```yaml
responses:
  '200':
    description: Success
    content:
      application/json:
        schema:
          $ref: '#/components/schemas/Specimen'
```

## Quality Checklist

Before publishing any documentation page:

- [ ] Frontmatter includes title and description
- [ ] All code examples tested and working
- [ ] Links use relative paths (not absolute URLs)
- [ ] Redis MCP mentioned when relevant
- [ ] Performance claims include numbers
- [ ] No typos (run spell checker)
- [ ] Icons used consistently
- [ ] Navigation updated in mint.json if new page
- [ ] OpenAPI spec updated if API changes
- [ ] Cross-links to related pages included
- [ ] Next steps / related pages section at bottom

## Common Patterns

### Quickstart Page

1. Authentication setup
2. Installation
3. Minimal working example
4. Next steps (4 cards)

### Guide Page

1. Introduction (problem statement)
2. Prerequisites
3. Step-by-step instructions with code
4. Troubleshooting accordion
5. Next steps

### API Reference Page

1. Endpoint description
2. Parameters table
3. Request example
4. Response example
5. Error codes

### Use Case Page

1. What it is (1 sentence)
2. Why it matters (business impact)
3. Technical implementation
4. Code example
5. Natural language query example
6. When to use
7. Performance benchmarks

## Resources

- **Mintlify Docs:** https://mintlify.com/docs
- **MCP Protocol:** https://modelcontextprotocol.io/introduction
- **Redis Commands:** https://redis.io/commands/
- **LATTICE Repo:** https://github.com/Tuesdaythe13th/lattice
- **Platform Repo:** https://github.com/Tuesdaythe13th/NerdCabalMCP
- **Demo Notebook:** `/competitions/ai-explorer/AI_Explorer_Hackathon_Demo.ipynb`

## Support

Questions about documentation? Contact:
- **Discord:** https://discord.gg/lattice
- **Email:** docs@lattice.ai
- **GitHub Issues:** https://github.com/Tuesdaythe13th/lattice/issues

---

**Remember:** LATTICE documentation should reflect our competitive advantages—Redis MCP, sub-second latency, and interpretability marketplace. Every page should reinforce why LATTICE is different and better.
