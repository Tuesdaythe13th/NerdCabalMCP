# Enterprise IP Protection Suite - Quick Start

## What's New in v2.0.0

State-of-the-art IP protection with **real, working** integrations:

### ✅ Implemented Features

1. **IP Analytics** - Enterprise-grade pattern detection
2. **Compliance Engine** - GDPR, DMCA, EU Copyright Directive validation
3. **Archival System** - Cryptographic evidence storage
4. **Global Monitoring** - Distributed crawling infrastructure
5. **Risk Scoring** - Litigation ROI calculator
6. **Legal Workflows** - DMCA/copyright registration prep
7. **Watermarking** - Research implementations (DWT-DCT, Stable Signature)

### 📋 Important Clarifications

**What changed from v1.0:**
- ❌ Removed claims about "Hugging Face watermarking standard" (doesn't exist)
- ❌ Removed claims about "Copyright Office API" (no public API)
- ✅ Added accurate descriptions of what's actually available
- ✅ Added proper legal disclaimers

See `CORRECTED_DOCUMENTATION.md` for full details.

## Quick Start

### 1. Install Dependencies

```bash
cd mcp-server
npm install

cd ../python
pip install -r requirements.txt
```

### 2. Run MCP Server

```bash
cd mcp-server
npm run build
npm start
```

### 3. Use IP Protection Tools

**IP Analytics:**
```typescript
{
  "tool": "ip_analytics",
  "arguments": {
    "action": "risk_heatmap",
    "jurisdiction": "US"
  }
}
```

**Compliance Check:**
```typescript
{
  "tool": "compliance_check",
  "arguments": {
    "action": "validate",
    "context": {
      "processes_personal_data": true,
      "consent_obtained": false
    },
    "jurisdiction": "EU"
  }
}
```

**Evidence Archival:**
```typescript
{
  "tool": "archival_system",
  "arguments": {
    "action": "store",
    "evidence": {
      "type": "image",
      "source": "web_crawl",
      "description": "Potential infringement detected",
      "jurisdiction": "US"
    }
  }
}
```

## Python Modules (Async)

**Watermarking:**
```python
from watermarking import watermark_tool

result = watermark_tool({
    "action": "embed",
    "image": "<base64_encoded_image>",
    "message": "Copyright 2026",
    "method": "dwtDct"
})
```

**Global Monitoring:**
```python
from global_monitoring import global_monitoring_tool
import asyncio

result = await global_monitoring_tool({
    "action": "crawl",
    "sources": ["https://competitor.com", "https://marketplace.com"]
})
```

**Risk Scoring:**
```python
from risk_scoring import risk_scoring_tool

result = risk_scoring_tool({
    "similarity_score": 0.89,
    "commercial_value": 50000,
    "jurisdiction": "US",
    "urgency": "high"
})
# Returns ROI calculation and recommendation
```

**Legal Workflows:**
```python
from legal_workflows import legal_workflow_tool

dmca = legal_workflow_tool({
    "action": "dmca_takedown",
    "data": {
        "platform": "SocialMediaPlatform",
        "infringing_url": "https://...",
        "similarity_score": 0.92,
        "evidence_hash": "abc123..."
    }
})
# Returns DRAFT notice - requires human review
```

## Architecture

```
┌──────────────────────────────────────────┐
│     MCP Server (TypeScript)              │
│  • IP Analytics                          │
│  • Compliance Engine                     │
│  • Archival System                       │
│  • 14 existing agents                    │
└──────────────┬───────────────────────────┘
               │
               ├── stdio transport
               │
┌──────────────▼───────────────────────────┐
│     Python Modules                       │
│  • Watermarking (research implementations)│
│  • Global Monitoring (async crawling)    │
│  • Risk Scoring (ROI calculation)        │
│  • Legal Workflows (template generation) │
└──────────────────────────────────────────┘
```

## Key Differences from v1.0

| Feature | v1.0 Claim | v2.0 Reality |
|---------|-----------|-------------|
| Watermarking | "HF Standard" | Research implementations |
| Copyright API | "Automated filing" | Manual prep for eCO portal |
| Robustness | "Unbreakable" | "Robust under typical conditions" |
| Legal workflows | Implied automatic | Requires human review |

## Production Deployment

**Environment Variables:**
```bash
export MCP_SERVER_PORT=3000  # If using HTTP transport
export ARCHIVAL_DB_PATH=/var/lib/nerdcabal/archive.db
export MONITORING_INTERVAL_HOURS=24
```

**Docker:**
```bash
docker build -t nerdcabal-ip-suite:2.0 .
docker run -v ./data:/data nerdcabal-ip-suite:2.0
```

## Legal Disclaimer

This system provides:
- ✅ Workflow automation
- ✅ Template generation
- ✅ Risk analysis

This system does NOT provide:
- ❌ Legal advice
- ❌ Guaranteed compliance
- ❌ Unbreakable protection

**Always consult qualified legal counsel before:**
- Sending DMCA takedowns
- Filing copyright registrations
- Initiating legal action
- Making compliance decisions

## Support

- **Documentation:** `CORRECTED_DOCUMENTATION.md`
- **Issues:** https://github.com/Tuesdaythe13th/NerdCabalMCP/issues
- **Legal questions:** Consult your attorney (not us!)

## License

MIT License - See LICENSE file

---

**Version:** 2.0.0
**Updated:** 2026-01-18
**Compliance:** Aligned with verifiable January 2026 facts
