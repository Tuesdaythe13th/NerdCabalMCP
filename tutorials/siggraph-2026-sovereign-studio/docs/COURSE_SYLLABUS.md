# 📜 SIGGRAPH 2026 Long-Form Course

```
╔═══════════════════════════════════════════════════════════════════════╗
║                                                                       ║
║   ███████╗ ██████╗ ██╗   ██╗███████╗██████╗ ███████╗██╗ ██████╗ ███╗║
║   ██╔════╝██╔═══██╗██║   ██║██╔════╝██╔══██╗██╔════╝██║██╔════╝ ████║
║   ███████╗██║   ██║██║   ██║█████╗  ██████╔╝█████╗  ██║██║  ███╗████║
║   ╚════██║██║   ██║╚██╗ ██╔╝██╔══╝  ██╔══██╗██╔══╝  ██║██║   ██║████║
║   ███████║╚██████╔╝ ╚████╔╝ ███████╗██║  ██║███████╗██║╚██████╔╝████║
║   ╚══════╝ ╚═════╝   ╚═══╝  ╚══════╝╚═╝  ╚═╝╚══════╝╚═╝ ╚═════╝ ╚═══║
║                                                                       ║
║              STUDIO: Building Multi-Agent MCP Servers                ║
║                  for IP Defense & Creative Wellness                  ║
║                                                                       ║
╚═══════════════════════════════════════════════════════════════════════╝
```

## 🎯 Course Overview

**Title:** The Sovereign Studio: Building Multi-Agent MCP Servers for IP Defense & Creative Wellness

**Format:** Long-Form Course (180 Minutes)

**Level:** Intermediate to Advanced

**Target Audience:** Technical creatives, digital artists, creative technologists, and software engineers working at the intersection of AI and creative production.

---

## 🏛️ The Sovereign Architecture

```
                    ┌─────────────────────────────────────┐
                    │      THE ARTIST (ROOT AUTHORITY)    │
                    │         "The Sovereign Node"        │
                    └──────────────┬──────────────────────┘
                                   │
                    ┌──────────────▼──────────────────────┐
                    │       META-ARCHITECT (Phase 0)      │
                    │    "Prompts generate the system"    │
                    │    studio_config.json = truth       │
                    └──────────────┬──────────────────────┘
                                   │
                    ┌──────────────▼──────────────────────┐
                    │         MCP SERVER LAYER            │
                    │   (Local stdio transport only)      │
                    └──────────────┬──────────────────────┘
                                   │
        ┌──────────────────────────┼──────────────────────────┐
        │                          │                          │
┌───────▼────────┐      ┌─────────▼──────────┐      ┌───────▼────────┐
│  HEAD OF       │      │    IP WARDEN       │      │   CREATIVE     │
│  SECURITY      │      │   (The Shield)     │      │  CLINICIAN     │
│ (The Firewall) │      │  Vision+Embeddings │      │  (The Pulse)   │
│  No-Egress     │      │  DMCA Generator    │      │   Heartbeat    │
└────────────────┘      └────────────────────┘      └────────────────┘
        │                          │                          │
        └──────────────────────────┼──────────────────────────┘
                                   │
                    ┌──────────────▼──────────────────────┐
                    │      ORCHESTRATION LAYER            │
                    │   (LangGraph / CrewAI / Custom)     │
                    │                                     │
                    │  ┌───────────┐  ┌──────────────┐   │
                    │  │ Talent    │  │ PR Lady      │   │
                    │  │ Manager   │  │ Vocal Coach  │   │
                    │  └───────────┘  └──────────────┘   │
                    └─────────────────────────────────────┘
```

---

## 🕒 Course Timeline & Structure

### **Part 1: Foundations of the Sovereign Node (00:00 – 00:30)**

```
┌─────────────────────────────────────────────────────────────────┐
│ 🎭 THE ARTIST-SOVEREIGN CRISIS                                  │
│ ─────────────────────────────────────────────────────────────── │
│ Timeline: 00:00 – 00:15 (15 minutes)                            │
│                                                                  │
│ Topics Covered:                                                  │
│ • The Extractive AI Problem                                     │
│ • Corporate Surveillance vs. Artist Autonomy                    │
│ • Introduction to ARTIFEX Phase 0 Principles                    │
│ • Case Studies: Recent AI Training Lawsuits                     │
│                                                                  │
│ Learning Outcomes:                                               │
│ ✓ Understand the power dynamics of current AI systems           │
│ ✓ Identify extractive patterns in creative tools                │
│ ✓ Articulate the need for sovereign infrastructure              │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ 🔌 THE MCP REVOLUTION                                           │
│ ─────────────────────────────────────────────────────────────── │
│ Timeline: 00:15 – 00:30 (15 minutes)                            │
│                                                                  │
│ Topics Covered:                                                  │
│ • Model Context Protocol as "USB-C for AI Ethics"               │
│ • Local stdio transport vs. HTTP/WebSocket                      │
│ • Why network-isolated AI is the only secure choice             │
│ • MCP Server Architecture Deep-Dive                             │
│                                                                  │
│ Learning Outcomes:                                               │
│ ✓ Understand MCP protocol specifications                        │
│ ✓ Design local-first AI architectures                           │
│ ✓ Explain transport security to non-technical stakeholders      │
└─────────────────────────────────────────────────────────────────┘
```

---

### **Part 2: Architecting the Entourage (00:30 – 01:15)**

```
┌─────────────────────────────────────────────────────────────────┐
│ 🏗️ THE META-ARCHITECT LOOP                                      │
│ ─────────────────────────────────────────────────────────────── │
│ Timeline: 00:30 – 00:50 (20 minutes)                            │
│                                                                  │
│ Hands-On Lab:                                                    │
│ • Prompt engineering for system generation                       │
│ • Creating studio_config.json as source of truth                │
│ • Auto-generating MCP server boilerplate                        │
│ • Tool manifest design patterns                                 │
│                                                                  │
│ Activity Flow:                                                   │
│   1. Define your creative practice requirements                 │
│   2. Prompt Meta-Architect to generate config                   │
│   3. Review and version control the output                      │
│   4. Initialize the server scaffold                             │
│                                                                  │
│ Deliverables:                                                    │
│ ✓ Working studio_config.json for your domain                    │
│ ✓ MCP server project structure                                  │
│ ✓ Tool registry initialization code                             │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ 🛡️ CODING THE HEAD OF SECURITY                                  │
│ ─────────────────────────────────────────────────────────────── │
│ Timeline: 00:50 – 01:15 (25 minutes)                            │
│                                                                  │
│ Hands-On Lab:                                                    │
│ • Implementing the Python FastMCP firewall                      │
│ • Tool-call deny patterns (save_to_cloud, upload, etc.)         │
│ • Process-level socket blocking (monkeypatch demo)              │
│ • Testing egress restrictions                                   │
│                                                                  │
│ Security Layers:                                                 │
│   Layer 1: Tool name pattern matching                           │
│   Layer 2: Process socket.connect() blocking                    │
│   Layer 3: Container network policy (Docker)                    │
│   Layer 4: Host OS firewall rules                               │
│                                                                  │
│ Code Walkthrough:                                                │
│   • NoEgressPolicy dataclass                                    │
│   • FirewallServer request handler                              │
│   • Socket monkeypatch technique                                │
│                                                                  │
│ Deliverables:                                                    │
│ ✓ Working no-egress firewall module                             │
│ ✓ Test suite for blocked operations                             │
│ ✓ Policy configuration examples                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### **Part 3: Defensive & Multimodal Specialization (01:15 – 02:15)**

```
┌─────────────────────────────────────────────────────────────────┐
│ 👁️ THE IP WARDEN (Vision Deep-Dive)                             │
│ ─────────────────────────────────────────────────────────────── │
│ Timeline: 01:15 – 01:45 (30 minutes)                            │
│                                                                  │
│ Technical Stack:                                                 │
│   Vision Model: CLIP / OpenCLIP                                 │
│   Similarity Metric: Cosine Distance                            │
│   Threshold Tuning: ROC Curve Analysis                          │
│   Output: DMCA Notice Generator                                 │
│                                                                  │
│ Hands-On Lab Flow:                                               │
│                                                                  │
│   Step 1: Create signature_style.txt                            │
│          ↓                                                       │
│   Step 2: Generate embedding (512-dim vector)                   │
│          ↓                                                       │
│   Step 3: Scan candidate folder (scraped images/text)           │
│          ↓                                                       │
│   Step 4: Compute cosine similarity for each item               │
│          ↓                                                       │
│   Step 5: Trigger DMCA draft if threshold exceeded              │
│                                                                  │
│ Activity:                                                        │
│ • Define YOUR artistic signature (text description)             │
│ • Run IP scan on provided test dataset                          │
│ • Tune threshold to balance false positives/negatives           │
│ • Generate automated DMCA notice for violations                 │
│                                                                  │
│ Legal Note:                                                      │
│   DMCA stubs are teaching examples only. Consult legal          │
│   counsel before deploying in production.                       │
│                                                                  │
│ Deliverables:                                                    │
│ ✓ IP Warden MCP tool implementation                             │
│ ✓ Signature embedding for your style                            │
│ ✓ Automated DMCA draft template                                 │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ 💓 THE CREATIVE CLINICIAN (Behavioral Monitoring)               │
│ ─────────────────────────────────────────────────────────────── │
│ Timeline: 01:45 – 02:15 (30 minutes)                            │
│                                                                  │
│ The Problem:                                                     │
│   Creative burnout in AI-assisted workflows often goes          │
│   unnoticed until catastrophic. We need quantifiable            │
│   early warning signals.                                        │
│                                                                  │
│ Hands-On Lab: Building inspiration.jsonl Heartbeat              │
│                                                                  │
│ Data Schema (append-only ledger):                               │
│   {                                                              │
│     "ts": 1704067200.0,         // Unix timestamp               │
│     "frequency": "92bpm",        // Perceived creative pace     │
│     "palette": "black/white",    // Dominant tools/themes       │
│     "notes": "focused ink..."    // Freeform reflection         │
│   }                                                              │
│                                                                  │
│ Drift Detection Heuristics:                                      │
│   1. Vocabulary Diversity (unique tokens / total tokens)        │
│   2. Sentiment Range (positive - negative word frequency)       │
│   3. Repetition Detection (n-gram analysis)                     │
│                                                                  │
│ Thresholds (from studio_config.json):                           │
│   min_vocab_diversity: 0.22                                     │
│   min_sentiment_range: 0.18                                     │
│                                                                  │
│ Output: "Digital Sabbath" Recommendation                         │
│   If drift detected → suggest 48h no-AI break                   │
│                                                                  │
│ Activity:                                                        │
│ • Log 5 demo heartbeat entries                                  │
│ • Run drift analysis on provided dataset                        │
│ • Calibrate thresholds for your practice                        │
│ • Design your own sabbath protocol                              │
│                                                                  │
│ Deliverables:                                                    │
│ ✓ Heartbeat logging tool                                        │
│ ✓ Drift analyzer with configurable heuristics                   │
│ ✓ Personal wellness dashboard concept                           │
└─────────────────────────────────────────────────────────────────┘
```

---

### **Part 4: Orchestration & Deployment (02:15 – 03:00)**

```
┌─────────────────────────────────────────────────────────────────┐
│ 🎬 THE TALENT MANAGER (Orchestration Layer)                     │
│ ─────────────────────────────────────────────────────────────── │
│ Timeline: 02:15 – 02:40 (25 minutes)                            │
│                                                                  │
│ Orchestration Options:                                           │
│   • LangGraph (state machine approach)                          │
│   • CrewAI (role-based agents)                                  │
│   • Custom router (if/else with memory)                         │
│                                                                  │
│ Agent Roster Example:                                            │
│   ┌──────────────┬─────────────────────────────────┐            │
│   │ Agent        │ Responsibilities                │            │
│   ├──────────────┼─────────────────────────────────┤            │
│   │ Vocal Coach  │ Podcast prep, mic technique     │            │
│   │ PR Lady      │ Social media, reputation mgmt   │            │
│   │ Fin. Advisor │ Contract review, invoicing      │            │
│   │ Archivist    │ Version control, asset tagging  │            │
│   └──────────────┴─────────────────────────────────┘            │
│                                                                  │
│ Routing Logic:                                                   │
│   User: "I'm starting a podcast"                                │
│     → Meta-Architect generates Vocal Coach tool                 │
│     → Hot-reload registry without server restart                │
│     → Route future podcast queries to Vocal Coach               │
│                                                                  │
│ Hands-On Lab:                                                    │
│ • Define 3 agents for your creative practice                    │
│ • Implement routing logic (keyword or embedding-based)          │
│ • Test hot-reload workflow                                      │
│ • Add memory/context persistence                                │
│                                                                  │
│ Deliverables:                                                    │
│ ✓ Multi-agent orchestrator                                      │
│ ✓ Hot-reload tool generation pipeline                           │
│ ✓ Context-aware routing system                                  │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ 🐳 DOCKERIZING THE STUDIO                                       │
│ ─────────────────────────────────────────────────────────────── │
│ Timeline: 02:40 – 02:55 (15 minutes)                            │
│                                                                  │
│ Container Design:                                                │
│   • Base image: Python 3.11-slim                                │
│   • No network access (--network none)                          │
│   • Volume mounts for local assets only                         │
│   • Embedded local LLM (Ollama / LM Studio optional)            │
│                                                                  │
│ Dockerfile Key Directives:                                       │
│   FROM python:3.11-slim                                          │
│   WORKDIR /sovereign_studio                                      │
│   COPY studio_config.json .                                      │
│   COPY tools/ ./tools/                                           │
│   RUN pip install --no-cache fastmcp clip-by-openai             │
│   # No EXPOSE (stdio only, no ports)                            │
│   CMD ["python", "mcp_server.py"]                               │
│                                                                  │
│ Network Policy:                                                  │
│   docker run --network none \                                   │
│              -v ./assets:/assets:ro \                           │
│              -v ./output:/output \                              │
│              sovereign-studio:latest                            │
│                                                                  │
│ Hands-On Lab:                                                    │
│ • Write Dockerfile for your entourage                           │
│ • Build and test the container                                  │
│ • Verify no-egress with netstat                                 │
│ • Document deployment instructions                              │
│                                                                  │
│ Deliverables:                                                    │
│ ✓ Production-ready Dockerfile                                   │
│ ✓ One-click deployment script                                   │
│ ✓ Network isolation verification tests                          │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ 🚀 CLOSING & ASPIRATIONAL ROADMAP                               │
│ ─────────────────────────────────────────────────────────────── │
│ Timeline: 02:55 – 03:00 (5 minutes)                             │
│                                                                  │
│ Future-Proofing Strategies:                                      │
│ • Perspectivist Safety Stack (multi-critic evaluation)          │
│ • Federated learning for style evolution (no central server)    │
│ • Cryptographic provenance (blockchain for authenticity)        │
│ • Community MCP tool marketplaces (vetted, local-first)         │
│                                                                  │
│ Call to Action:                                                  │
│ • Share your sovereign architectures on GitHub                  │
│ • Join the NerdCabal community (Discord/Matrix)                 │
│ • Advocate for artist-first AI policy                           │
│                                                                  │
│ Q&A Session Setup (if time permits)                             │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🎓 Learning Outcomes

By the end of this course, participants will be able to:

### **1. System Design & Architecture**
- ✅ Design multi-agent systems where the artist remains the root authority
- ✅ Implement local-first MCP server architectures with stdio transport
- ✅ Create policy-driven firewalls for tool execution control
- ✅ Build hot-reload systems for dynamic tool registration

### **2. Security & Privacy Literacy**
- ✅ Master "Secure-by-Design" principles for creative AI systems
- ✅ Implement multi-layer no-egress enforcement (process/container/host)
- ✅ Evaluate and mitigate data exfiltration risks in AI tools
- ✅ Design network-isolated development environments

### **3. IP Defense & Legal Tech**
- ✅ Build vision-based style matching systems using CLIP embeddings
- ✅ Implement automated IP monitoring pipelines
- ✅ Generate legally-structured DMCA takedown notices
- ✅ Design early-warning systems for copyright violations

### **4. Algorithmic Wellness & Ethics**
- ✅ Quantify creative burnout using behavioral telemetry
- ✅ Implement drift detection heuristics (vocab diversity, sentiment analysis)
- ✅ Design "Digital Sabbath" protocols for AI-assisted work
- ✅ Build self-monitoring systems that respect artist autonomy

### **5. Professional Development**
- ✅ Navigate the socio-technical landscape of AI ethics in creative work
- ✅ Advocate for artist-first AI policy using technical evidence
- ✅ Collaborate with legal/ethical stakeholders on AI governance
- ✅ Contribute to open-source sovereign infrastructure projects

---

## 🛠️ Technical Prerequisites

### **Required Skills**
- **Programming:** Proficiency in **Python 3.11+** OR **TypeScript/Node.js v20+**
- **Version Control:** Git fundamentals (clone, commit, branch, push)
- **Command Line:** Comfortable with terminal/shell operations
- **Containerization:** Basic Docker knowledge (build, run, volume mounts)

### **Development Environment**
Participants should arrive with a laptop configured with:

1. **Docker Desktop** (latest stable version)
   - Download: https://www.docker.com/products/docker-desktop

2. **Python 3.11+** (if choosing Python track)
   ```bash
   python --version  # Should show 3.11 or higher
   pip install fastmcp anthropic
   ```

3. **Node.js v20+** (if choosing TypeScript track)
   ```bash
   node --version    # Should show v20 or higher
   npm install -g @modelcontextprotocol/sdk
   ```

4. **Local LLM Runner** (optional but recommended)
   - **Ollama** (https://ollama.ai) for CPU-only inference
   - **LM Studio** (https://lmstudio.ai) for user-friendly GPU setup
   - **llama.cpp** for advanced users

5. **Code Editor**
   - VS Code with Python/TypeScript extensions
   - OR JetBrains PyCharm/WebStorm
   - OR Cursor (AI-native IDE)

### **API Keys** (if not using local-only inference)
- **Anthropic API Key** for Claude 3.5/3.7 Sonnet
  - Sign up at: https://console.anthropic.com
- **OpenAI API Key** for GPT-4o (alternative orchestrator)
  - Sign up at: https://platform.openai.com

**Note:** We strongly encourage local-only setups for privacy, but cloud API access is provided as a fallback for resource-constrained devices.

### **Pre-Course Setup Validation**
Run this validation script before the conference:

```bash
# Clone the tutorial repo
git clone https://github.com/NerdCabal/sovereign-studio-siggraph-2026.git
cd sovereign-studio-siggraph-2026

# Run setup checker
python check_prerequisites.py

# Expected output:
# ✅ Python 3.11+ detected
# ✅ Docker available
# ✅ Git configured
# ✅ All dependencies installable
# 🎉 You're ready for SIGGRAPH 2026!
```

---

## 📚 Recommended Pre-Reading

### **Essential (Read Before Course)**
1. **Model Context Protocol Specification** (15 min read)
   - https://modelcontextprotocol.io/specification

2. **"The Artist vs. The Algorithm" (2025)** - arXiv preprint (30 min)
   - Analysis of power asymmetries in generative AI training

3. **ARTIFEX Phase 0 Whitepaper** (20 min)
   - https://github.com/NerdCabal/ARTIFEX/blob/main/docs/phase0.md

### **Supplementary (Skim for Context)**
4. **FastMCP Documentation** - Python MCP framework
   - https://github.com/jlowin/fastmcp

5. **CLIP Paper (Radford et al., 2021)** - Vision embeddings
   - "Learning Transferable Visual Models From Natural Language Supervision"

6. **LangGraph Guide** - Agent orchestration patterns
   - https://langchain-ai.github.io/langgraph/

### **Video Resources**
7. **"Building MCP Servers" Tutorial** (32 min)
   - https://www.youtube.com/watch?v=S7RFkiMRom8
   - Essential for understanding stdio transport mechanics

---

## 📖 Course Materials & Deliverables

### **What You'll Receive**
- ✅ Complete Jupyter notebook with all code examples
- ✅ Reference `studio_config.json` for multiple creative domains
- ✅ Pre-built Docker images for quick deployment
- ✅ DMCA template (legally reviewed, jurisdiction-neutral)
- ✅ Drift detection dataset (synthetic burnout signals)
- ✅ Test image corpus for IP Warden calibration

### **What You'll Build**
During the 3-hour course, you'll create:
1. **A working MCP server** with your custom entourage
2. **No-egress firewall** (tested with socket blocking)
3. **IP Warden tool** calibrated to your artistic style
4. **Heartbeat logger** with personalized drift thresholds
5. **Dockerized deployment** ready for production use

### **Post-Course Support**
- 🔗 GitHub repo with issue tracker
- 💬 Discord server for peer collaboration
- 📧 Instructor office hours (2 weeks post-conference)
- 📝 Follow-up blog series on advanced topics

---

## 🎨 Example Topics of Interest (SIGGRAPH Alignment)

This course addresses the following SIGGRAPH 2026 themes:

### **Interactivity & Engagement**
- **Real-time style monitoring** as interactive IP defense
- **Conversational agents** for creative workflow automation

### **Professional Development**
- **Career trajectory evolution** for AI-native artists
- **Navigating ethical AI** in commercial creative work

### **Technology Overviews**
- **MCP protocol** as foundational infrastructure for ethical AI
- **Local-first LLMs** for privacy-preserving creative tools

### **AI & MLOps Applications**
- **Vision embeddings** for style-based IP protection
- **Behavioral telemetry** for algorithmic wellness

### **Design & Creation Platforms**
- **Prompt-generated system architecture** (Meta-Architect pattern)
- **Hot-reload tool ecosystems** for adaptive creative workflows

### **Digital Twins & Simulations**
- **Creative persona modeling** (your entourage as a digital twin)
- **Burnout simulation** for preventative wellness interventions

### **Open Source Contributions**
- **FastMCP** extensions for creative use cases
- **ARTIFEX** framework development
- **Community tool library** for sovereign studios

---

## 👥 Instructor Biographies

### **Tuesday (Primary Instructor)**
Tuesday is the architect of the NerdCabal ARTIFEX project and a long-time advocate for artist sovereignty in AI systems. They specialize in multi-agent orchestration, cryptographic provenance, and perspectivist safety frameworks. Previously a research engineer at [Company], Tuesday now focuses on building open-source tools for creative autonomy.

**Contact:** tuesday@nerdcabal.org

---

## 🎟️ Registration Information

- **Format:** In-Person at SIGGRAPH 2026
- **Duration:** 180 minutes (3 hours)
- **Capacity:** 60 participants (hands-on hardware constraints)
- **Hardware:** Each participant station equipped with:
  - Desktop workstation (16GB RAM, GPU optional)
  - Pre-configured Docker environment
  - Offline copy of all course materials
  - USB drive with local LLM models (if opted in)

**BYOD (Bring Your Own Device):** Participants may use their own laptops if they meet the prerequisites outlined above.

---

## 🧭 Navigation Guide

```
tutorials/siggraph-2026-sovereign-studio/
│
├── docs/
│   ├── COURSE_SYLLABUS.md         ← YOU ARE HERE
│   ├── SETUP_GUIDE.md
│   ├── ARCHITECTURE_DEEP_DIVE.md
│   └── FAQ.md
│
├── notebooks/
│   └── sovereign_studio_tutorial.ipynb
│
├── examples/
│   ├── studio_configs/
│   │   ├── visual_artist.json
│   │   ├── musician.json
│   │   └── writer.json
│   ├── entourage_agents/
│   │   ├── vocal_coach.py
│   │   ├── pr_manager.py
│   │   └── financial_advisor.py
│   └── docker/
│       └── Dockerfile.sovereign
│
└── assets/
    ├── diagrams/
    │   └── architecture.svg
    └── test_data/
        ├── scraped_images/
        └── heartbeat_samples.jsonl
```

---

## 📞 Questions & Contact

- **Course Chairs:** Callie Holderman & Nora Wixom (courses@siggraph.org)
- **Instructor:** tuesday@nerdcabal.org
- **GitHub Issues:** https://github.com/NerdCabal/sovereign-studio-siggraph-2026/issues
- **Discord Community:** https://discord.gg/nerdcabal

---

## 📜 License & Code of Conduct

All course materials are released under **MIT License** for code and **CC BY-SA 4.0** for documentation.

We are committed to fostering an inclusive, respectful learning environment. By participating in this course, you agree to uphold the [SIGGRAPH Code of Conduct](https://www.siggraph.org/code-of-conduct).

---

```
╔════════════════════════════════════════════════════════════════╗
║                                                                ║
║  "The studio is not a workspace. It is a jurisdiction."       ║
║                                                                ║
║                                        — ARTIFEX Manifesto     ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝
```

**Last Updated:** 2026-01-14
**Version:** 1.0.0
**Course Code:** SIGGRAPH2026-COURSE-SOVEREIGN-STUDIO
