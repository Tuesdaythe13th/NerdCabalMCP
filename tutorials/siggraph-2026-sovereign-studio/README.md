# 🎨 The Sovereign Studio Tutorial

## SIGGRAPH 2026 Long-Form Course

```
    ███████╗ ██████╗ ██╗   ██╗███████╗██████╗ ███████╗██╗ ██████╗ ███╗   ██╗
    ██╔════╝██╔═══██╗██║   ██║██╔════╝██╔══██╗██╔════╝██║██╔════╝ ████╗  ██║
    ███████╗██║   ██║██║   ██║█████╗  ██████╔╝█████╗  ██║██║  ███╗██╔██╗ ██║
    ╚════██║██║   ██║╚██╗ ██╔╝██╔══╝  ██╔══██╗██╔══╝  ██║██║   ██║██║╚██╗██║
    ███████║╚██████╔╝ ╚████╔╝ ███████╗██║  ██║███████╗██║╚██████╔╝██║ ╚████║
    ╚══════╝ ╚═════╝   ╚═══╝  ╚══════╝╚═╝  ╚═╝╚══════╝╚═╝ ╚═════╝ ╚═╝  ╚═══╝

    ███████╗████████╗██╗   ██╗██████╗ ██╗ ██████╗
    ██╔════╝╚══██╔══╝██║   ██║██╔══██╗██║██╔═══██╗
    ███████╗   ██║   ██║   ██║██║  ██║██║██║   ██║
    ╚════██║   ██║   ██║   ██║██║  ██║██║██║   ██║
    ███████║   ██║   ╚██████╔╝██████╔╝██║╚██████╔╝
    ╚══════╝   ╚═╝    ╚═════╝ ╚═════╝ ╚═╝ ╚═════╝
```

> **"The studio is not a workspace. It is a jurisdiction."**
> — ARTIFEX Manifesto

---

## 🎯 What is This?

This is the official tutorial repository for the **SIGGRAPH 2026 Long-Form Course** on building multi-agent MCP servers for IP defense and creative wellness. Over 180 minutes, you'll learn to architect a **local-first creative studio** where:

- 🔒 **You own your data** (no cloud exfiltration)
- 🛡️ **Your IP is protected** (automated style monitoring)
- 💓 **Your wellness is tracked** (burnout detection)
- 🤖 **Your agents serve you** (not surveillance capitalism)

---

## 🏛️ Architecture Overview

```
                    ┌─────────────────────────────────────────┐
                    │                                         │
                    │         THE ARTIST (YOU)                │
                    │         Root Authority                  │
                    │                                         │
                    └─────────────┬───────────────────────────┘
                                  │
                                  │ Prompts define system
                                  ▼
                    ┌─────────────────────────────────────────┐
                    │       META-ARCHITECT (Phase 0)          │
                    │   ┌─────────────────────────────────┐   │
                    │   │ studio_config.json = truth      │   │
                    │   │ • Transport: stdio (no network) │   │
                    │   │ • Policy: no-egress enforced    │   │
                    │   │ • Tools: hot-reloadable         │   │
                    │   └─────────────────────────────────┘   │
                    └─────────────┬───────────────────────────┘
                                  │
                                  │ Generates
                                  ▼
                    ┌─────────────────────────────────────────┐
                    │          MCP SERVER LAYER               │
                    │      (Python FastMCP / TypeScript)      │
                    │                                         │
                    │  ┌─────────┐  ┌────────────────────┐   │
                    │  │ Tool    │  │ stdio transport    │   │
                    │  │ Registry│  │ (no HTTP/sockets)  │   │
                    │  └─────────┘  └────────────────────┘   │
                    └─────────────┬───────────────────────────┘
                                  │
        ┌─────────────────────────┼─────────────────────────┐
        │                         │                         │
        │                         │                         │
┌───────▼─────────┐    ┌──────────▼────────┐    ┌─────────▼─────────┐
│                 │    │                   │    │                   │
│  HEAD OF        │    │   IP WARDEN       │    │  CREATIVE         │
│  SECURITY       │    │   (The Shield)    │    │  CLINICIAN        │
│  (The Firewall) │    │                   │    │  (The Pulse)      │
│                 │    │  ┌─────────────┐  │    │                   │
│ ┌─────────────┐ │    │  │ CLIP        │  │    │ ┌───────────────┐ │
│ │ No-Egress   │ │    │  │ Embeddings  │  │    │ │ inspiration.  │ │
│ │ Policy      │ │    │  └─────────────┘  │    │ │ jsonl         │ │
│ │             │ │    │  ┌─────────────┐  │    │ │ (heartbeat)   │ │
│ │ Deny:       │ │    │  │ Cosine      │  │    │ └───────────────┘ │
│ │ • cloud_*   │ │    │  │ Similarity  │  │    │                   │
│ │ • upload_*  │ │    │  └─────────────┘  │    │ ┌───────────────┐ │
│ │ • http*     │ │    │  ┌─────────────┐  │    │ │ Drift         │ │
│ └─────────────┘ │    │  │ DMCA        │  │    │ │ Detection     │ │
│                 │    │  │ Generator   │  │    │ │ • vocab_div   │ │
│ Socket blocking:│    │  └─────────────┘  │    │ │ • sentiment   │ │
│ monkeypatch     │    │                   │    │ └───────────────┘ │
│ socket.connect()│    │ Scans scraped/   │    │                   │
└─────────────────┘    │ for style theft   │    │ Recommends        │
                       └───────────────────┘    │ Digital Sabbath   │
                                                └───────────────────┘
                                  │
                                  │
                                  ▼
                    ┌─────────────────────────────────────────┐
                    │     ORCHESTRATION LAYER                 │
                    │  (LangGraph / CrewAI / Custom Router)   │
                    │                                         │
                    │  ┌──────────────┐  ┌──────────────┐    │
                    │  │ Vocal Coach  │  │ PR Lady      │    │
                    │  │              │  │              │    │
                    │  │ • Breathing  │  │ • Social     │    │
                    │  │ • Resonance  │  │ • Reputation │    │
                    │  │ • Mic tech   │  │ • Crisis mgmt│    │
                    │  └──────────────┘  └──────────────┘    │
                    │                                         │
                    │  ┌──────────────┐  ┌──────────────┐    │
                    │  │ Financial    │  │ Archivist    │    │
                    │  │ Advisor      │  │              │    │
                    │  │              │  │ • Versioning │    │
                    │  │ • Contracts  │  │ • Tagging    │    │
                    │  │ • Invoicing  │  │ • Search     │    │
                    │  └──────────────┘  └──────────────┘    │
                    └─────────────────────────────────────────┘
                                  │
                                  │ Hot-reload on demand
                                  │ "I'm starting a podcast"
                                  │ → Generates new tool
                                  ▼
                    ┌─────────────────────────────────────────┐
                    │         NEW AGENT GENERATED             │
                    │     (No server restart required)        │
                    └─────────────────────────────────────────┘
```

---

## 🚀 Quick Start

### **Option 1: Docker (Fastest)**

```bash
# Clone the repo
git clone https://github.com/NerdCabal/NerdCabalMCP.git
cd NerdCabalMCP/tutorials/siggraph-2026-sovereign-studio

# Build the container (includes all dependencies)
docker build -t sovereign-studio:latest -f examples/docker/Dockerfile.sovereign .

# Run with no network access (true no-egress)
docker run --network none \
           -v ./output:/output \
           -v ./assets:/assets:ro \
           sovereign-studio:latest

# Expected output:
# ✅ Server ready on stdio
# ✅ No-Egress firewall active
# ✅ IP Warden initialized
# ✅ Heartbeat logger started
```

### **Option 2: Local Python Setup**

```bash
# Clone and enter directory
git clone https://github.com/NerdCabal/NerdCabalMCP.git
cd NerdCabalMCP/tutorials/siggraph-2026-sovereign-studio

# Create virtual environment
python -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run the tutorial notebook
jupyter notebook notebooks/sovereign_studio_tutorial.ipynb
```

### **Option 3: Google Colab (No Install)**

Click this badge to run in Colab:
[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/NerdCabal/NerdCabalMCP/blob/main/tutorials/siggraph-2026-sovereign-studio/notebooks/sovereign_studio_tutorial.ipynb)

**Note:** Colab runs in the cloud, so true no-egress isn't possible. This is for learning only.

---

## 📚 Course Structure

```
┌────────────────────────────────────────────────────────────────┐
│                      180-MINUTE TIMELINE                        │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  00:00 ├─────────────┤  Part 1: Foundations                   │
│  00:30 │             │  • Artist-Sovereign Crisis             │
│        │             │  • MCP Revolution                      │
│        │             │                                        │
│  00:30 ├─────────────┤  Part 2: Architecting the Entourage   │
│  01:15 │             │  • Meta-Architect Loop (hands-on)     │
│        │             │  • Head of Security (coding lab)      │
│        │             │                                        │
│  01:15 ├─────────────┤  Part 3: Defensive Specialization     │
│  02:15 │             │  • IP Warden (CLIP + cosine)          │
│        │             │  • Creative Clinician (heartbeat)     │
│        │             │                                        │
│  02:15 ├─────────────┤  Part 4: Orchestration & Deployment   │
│  03:00 │             │  • Talent Manager (routing)           │
│        │             │  • Dockerizing the Studio             │
│        │             │  • Roadmap & Q&A                      │
│        │             │                                        │
└────────────────────────────────────────────────────────────────┘
```

**Full syllabus:** [`docs/COURSE_SYLLABUS.md`](docs/COURSE_SYLLABUS.md)

---

## 🧩 What You'll Build

By the end of this tutorial, you'll have:

### **1. studio_config.json (Your Ground Truth)**
```json
{
  "transport": {
    "type": "stdio",
    "notes": "No network required. All agent-server comms via stdin/stdout."
  },
  "no_egress": {
    "enabled": true,
    "deny_tool_name_patterns": [
      "save_to_cloud", "upload", "http", "gdrive", "s3"
    ],
    "deny_socket": true,
    "message": "Blocked by Sovereign Studio No-Egress policy."
  },
  "ip_warden": {
    "similarity_threshold": 0.85,
    "embedding": { "type": "clip", "model": "ViT-B/32" }
  },
  "heartbeat": {
    "ledger": "inspiration.jsonl",
    "cadence_hours": 4,
    "drift": {
      "min_vocab_diversity": 0.22,
      "min_sentiment_range": 0.18
    }
  }
}
```

### **2. Head of Security (Firewall)**
```python
@dataclass
class NoEgressPolicy:
    enabled: bool
    deny_tool_name_patterns: List[str]
    deny_socket: bool
    message: str

    def blocks_tool(self, tool_name: str) -> bool:
        if not self.enabled:
            return False
        return any(pat.lower() in tool_name.lower()
                   for pat in self.deny_tool_name_patterns)

# Process-level socket blocking
orig_connect = socket.socket.connect
def blocked_connect(self, address):
    raise OSError(f"{policy.message} (socket blocked): {address}")
socket.socket.connect = blocked_connect
```

### **3. IP Warden (Style Monitoring)**
```python
import clip
import torch

# Load CLIP model
device = "cuda" if torch.cuda.is_available() else "cpu"
model, preprocess = clip.load("ViT-B/32", device=device)

# Your signature style
signature_text = "High-contrast ink linework, bold brushstrokes, ..."
signature_vec = model.encode_text(clip.tokenize([signature_text])).cpu().numpy()

# Scan for infringement
def ip_scan_folder(folder_path: Path, threshold: float = 0.85):
    hits = []
    for img_path in folder_path.glob("*.jpg"):
        image = preprocess(Image.open(img_path)).unsqueeze(0).to(device)
        candidate_vec = model.encode_image(image).cpu().numpy()
        similarity = cosine_similarity(signature_vec, candidate_vec)
        if similarity >= threshold:
            hits.append({"path": str(img_path), "similarity": similarity})
    return hits
```

### **4. Creative Clinician (Heartbeat)**
```python
# Append-only ledger
def heartbeat_append(frequency: str, palette: str, notes: str):
    entry = {
        "ts": time.time(),
        "frequency": frequency,  # e.g., "92bpm"
        "palette": palette,      # e.g., "black/white"
        "notes": notes           # freeform reflection
    }
    with open("inspiration.jsonl", "a") as f:
        f.write(json.dumps(entry) + "\n")

# Drift detection
def heartbeat_analyze(tail: int = 12):
    lines = open("inspiration.jsonl").readlines()[-tail:]
    entries = [json.loads(line) for line in lines]

    texts = [f"{e['frequency']} {e['palette']} {e['notes']}" for e in entries]
    vocab_diversity = mean([len(set(t.split())) / len(t.split()) for t in texts])
    sentiment_range = max(sentiments) - min(sentiments)  # toy heuristic

    drift = (vocab_diversity < 0.22) or (sentiment_range < 0.18)
    return "Digital Sabbath suggested" if drift else "No drift detected"
```

### **5. Orchestration Layer**
```python
from langgraph.graph import StateGraph, END

def route_to_agent(state):
    user_input = state["user_input"]
    if "podcast" in user_input.lower():
        return "vocal_coach"
    elif "contract" in user_input.lower():
        return "financial_advisor"
    else:
        return "general"

workflow = StateGraph()
workflow.add_node("router", route_to_agent)
workflow.add_node("vocal_coach", vocal_coach_agent)
workflow.add_node("financial_advisor", fin_advisor_agent)
workflow.add_edge("router", "vocal_coach")
workflow.add_edge("router", "financial_advisor")
workflow.set_entry_point("router")
```

### **6. Dockerized Deployment**
```dockerfile
FROM python:3.11-slim
WORKDIR /sovereign_studio

COPY studio_config.json .
COPY tools/ ./tools/
COPY mcp_server.py .

RUN pip install --no-cache fastmcp clip-by-openai

# No EXPOSE (stdio only, no network ports)
CMD ["python", "mcp_server.py"]
```

Run with:
```bash
docker run --network none \
           -v ./output:/output \
           sovereign-studio:latest
```

---

## 🎓 Learning Outcomes

After completing this course, you will be able to:

| Category | Skills Acquired |
|----------|----------------|
| **🏗️ Architecture** | • Design multi-agent systems with artist as root authority<br>• Implement local-first MCP stdio transport<br>• Build hot-reload tool registration systems |
| **🔒 Security** | • Master no-egress enforcement (process/container/host)<br>• Design policy-driven tool firewalls<br>• Evaluate data exfiltration risks in AI tools |
| **🛡️ IP Defense** | • Build vision-based style matching (CLIP embeddings)<br>• Implement automated IP monitoring pipelines<br>• Generate DMCA notices programmatically |
| **💓 Wellness** | • Quantify creative burnout using telemetry<br>• Design drift detection heuristics<br>• Implement "Digital Sabbath" protocols |
| **🤝 Professional** | • Advocate for artist-first AI policy<br>• Collaborate with legal/ethical stakeholders<br>• Contribute to sovereign infrastructure projects |

---

## 🛠️ Prerequisites

### **Technical Skills (Required)**
- ✅ Python 3.11+ OR TypeScript/Node.js v20+
- ✅ Git basics (clone, commit, push)
- ✅ Command line comfort
- ✅ Basic Docker knowledge

### **Software Setup (Required)**
Install before the course:
```bash
# 1. Docker Desktop
# Download: https://www.docker.com/products/docker-desktop

# 2. Python 3.11+ (if Python track)
python --version  # Should show 3.11+
pip install fastmcp anthropic clip-by-openai

# 3. Node.js v20+ (if TypeScript track)
node --version    # Should show v20+
npm install -g @modelcontextprotocol/sdk

# 4. Local LLM (optional but recommended)
# Ollama: https://ollama.ai
# LM Studio: https://lmstudio.ai
```

### **Hardware Requirements**
- **Laptop:** 16GB RAM (minimum), 32GB recommended
- **Storage:** 10GB free space (20GB if using local LLMs)
- **GPU:** Optional but helpful for CLIP embeddings

### **Knowledge Prerequisites**
Helpful but not required:
- 📖 Familiarity with async programming (Python asyncio or JS Promises)
- 📖 Basic understanding of neural embeddings (CLIP, BERT)
- 📖 Exposure to agent frameworks (LangChain, LangGraph, CrewAI)

**Don't have these?** The course includes brief primers on each topic!

### **Pre-Course Setup Validation**
Run this to check your environment:
```bash
git clone https://github.com/NerdCabal/NerdCabalMCP.git
cd NerdCabalMCP/tutorials/siggraph-2026-sovereign-studio
python check_prerequisites.py

# Expected output:
# ✅ Python 3.11+ detected
# ✅ Docker available
# ✅ Git configured
# ✅ All dependencies installable
# 🎉 You're ready for SIGGRAPH 2026!
```

Full setup guide: [`docs/SETUP_GUIDE.md`](docs/SETUP_GUIDE.md)

---

## 📖 Repository Structure

```
tutorials/siggraph-2026-sovereign-studio/
│
├── README.md                          ← YOU ARE HERE
│
├── docs/
│   ├── COURSE_SYLLABUS.md             ← Full 180-min breakdown
│   ├── SETUP_GUIDE.md                 ← Step-by-step environment setup
│   ├── ARCHITECTURE_DEEP_DIVE.md      ← Technical details for each agent
│   ├── FAQ.md                         ← Common questions & troubleshooting
│   └── LEGAL_DISCLAIMER.md            ← DMCA template usage guidelines
│
├── notebooks/
│   └── sovereign_studio_tutorial.ipynb  ← Main hands-on notebook
│
├── examples/
│   ├── studio_configs/
│   │   ├── visual_artist.json         ← Example config for painters/illustrators
│   │   ├── musician.json              ← Example for audio producers
│   │   ├── writer.json                ← Example for authors/poets
│   │   └── filmmaker.json             ← Example for video creators
│   │
│   ├── entourage_agents/
│   │   ├── vocal_coach.py             ← Voice training agent
│   │   ├── pr_manager.py              ← Social media / reputation agent
│   │   ├── financial_advisor.py       ← Contract review / invoicing
│   │   └── archivist.py               ← Version control / asset tagging
│   │
│   ├── docker/
│   │   ├── Dockerfile.sovereign       ← Production-ready container
│   │   └── docker-compose.yml         ← Multi-agent orchestration
│   │
│   └── orchestration/
│       ├── langgraph_router.py        ← LangGraph state machine example
│       ├── crewai_entourage.py        ← CrewAI role-based example
│       └── custom_router.py           ← Minimal if/else router
│
├── assets/
│   ├── diagrams/
│   │   ├── architecture.svg           ← System architecture diagram
│   │   ├── firewall_flow.svg          ← Security layer visualization
│   │   └── drift_detection.svg        ← Heartbeat analysis chart
│   │
│   └── test_data/
│       ├── scraped_images/            ← Sample corpus for IP Warden
│       │   ├── sample_1.jpg
│       │   ├── sample_2.jpg
│       │   └── sample_3.jpg
│       │
│       └── heartbeat_samples.jsonl    ← Pre-generated heartbeat data
│
├── tests/
│   ├── test_firewall.py               ← No-egress policy tests
│   ├── test_ip_warden.py              ← Style matching tests
│   └── test_heartbeat.py              ← Drift detection tests
│
├── requirements.txt                   ← Python dependencies
├── package.json                       ← Node.js dependencies (TypeScript track)
├── check_prerequisites.py             ← Environment validation script
└── LICENSE                            ← MIT License for code
```

---

## 🎨 Example Use Cases

### **1. Visual Artist (Illustrator / Painter)**
```json
{
  "entourage": [
    "IP Warden (CLIP-based style monitoring)",
    "Social Media Manager (auto-watermark, credit tracking)",
    "Gallery Liaison (submission tracking, contract review)",
    "Creative Clinician (burnout detection for commission work)"
  ],
  "tools": [
    "style_signature_generator (from portfolio analysis)",
    "dmca_draft_generator (for takedown notices)",
    "commission_tracker (deadlines, invoicing)",
    "sabbath_scheduler (enforces 48h breaks)"
  ]
}
```

### **2. Music Producer / Composer**
```json
{
  "entourage": [
    "Vocal Coach (breathing, resonance, mic technique)",
    "Sample Librarian (organizes stems, tags by mood)",
    "Sync Licensing Advisor (contract review, royalty tracking)",
    "Creative Clinician (detects loop fatigue, suggests breaks)"
  ],
  "tools": [
    "audio_fingerprinting (detects unauthorized sample use)",
    "stem_tagger (auto-categorizes by genre/BPM/key)",
    "contract_analyzer (flags exploitative clauses)",
    "heartbeat_logger (tracks session energy via DAW metrics)"
  ]
}
```

### **3. Writer / Novelist**
```json
{
  "entourage": [
    "IP Warden (text embedding similarity for plagiarism)",
    "Editor Agent (style consistency, continuity checking)",
    "Publisher Liaison (submission tracking, contract negotiation)",
    "Creative Clinician (detects repetitive phrasing, writer's block)"
  ],
  "tools": [
    "prose_fingerprinting (sentence-level BERT embeddings)",
    "continuity_checker (character/plot inconsistency detection)",
    "contract_redliner (auto-flags bad terms in publishing deals)",
    "drift_analyzer (vocabulary diversity over time)"
  ]
}
```

### **4. Filmmaker / Video Creator**
```json
{
  "entourage": [
    "IP Warden (frame-level style matching via CLIP)",
    "Color Grading Assistant (LUT recommendations)",
    "Distribution Advisor (festival deadlines, platform specs)",
    "Creative Clinician (editing session burnout detection)"
  ],
  "tools": [
    "frame_embedding_scanner (detects style theft in uploaded clips)",
    "lut_matcher (finds cinematic references for grading)",
    "festival_tracker (submission deadlines, fee tracking)",
    "session_analyzer (monitors edit duration, suggests breaks)"
  ]
}
```

---

## 🧠 Key Concepts

### **The Meta-Architect Pattern**
```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  Traditional Development:                               │
│    Human writes code → Compiles → Runs                 │
│                                                         │
│  Meta-Architect Pattern (ARTIFEX Phase 0):             │
│    Human writes prompt → LLM generates code → Runs     │
│                                                         │
│  Advantage: System architecture becomes conversational │
│              and can self-evolve based on new needs    │
│                                                         │
└─────────────────────────────────────────────────────────┘

Example:
  User: "I'm starting a podcast. I need vocal coaching."
    ↓
  Meta-Architect generates vocal_coach.py
    ↓
  Server hot-reloads new tool (no restart)
    ↓
  Future requests routed to Vocal Coach
```

### **No-Egress Policy (Multi-Layer Defense)**
```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  Layer 1: Tool Name Pattern Matching                   │
│    Blocks: save_to_cloud, upload_*, http*, gdrive_*    │
│                                                         │
│  Layer 2: Process-Level Socket Blocking                │
│    Monkeypatch: socket.socket.connect = blocked_fn     │
│                                                         │
│  Layer 3: Container Network Policy                     │
│    Docker: --network none                              │
│                                                         │
│  Layer 4: Host OS Firewall                             │
│    iptables: DROP all outbound from container          │
│                                                         │
└─────────────────────────────────────────────────────────┘

Why all 4 layers?
  Defense in depth. If one fails (e.g., tool rename),
  others still enforce no-egress guarantee.
```

### **IP Warden (Vision-Based Style Matching)**
```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  Step 1: Define Signature                              │
│    "High-contrast ink linework, bold brushstrokes..."  │
│                                                         │
│  Step 2: Embed Signature (CLIP ViT-B/32)               │
│    signature_vec = model.encode_text(signature)        │
│    → 512-dimensional vector                            │
│                                                         │
│  Step 3: Scan Candidates                               │
│    For each image in scraped/:                         │
│      candidate_vec = model.encode_image(img)           │
│      similarity = cosine(signature_vec, candidate_vec) │
│                                                         │
│  Step 4: Threshold Trigger                             │
│    If similarity >= 0.85:                              │
│      → Generate DMCA notice draft                      │
│      → Alert artist                                    │
│                                                         │
└─────────────────────────────────────────────────────────┘

Tuning the threshold:
  • Too low (0.7): Many false positives
  • Too high (0.95): Misses subtle infringement
  • Sweet spot: 0.80-0.85 for most artists
  • Use ROC curve analysis on validation set
```

### **Creative Clinician (Drift Detection)**
```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│  Heartbeat Entry (every 4 hours):                      │
│    {                                                    │
│      "ts": 1704067200.0,                               │
│      "frequency": "92bpm",  ← Perceived creative pace  │
│      "palette": "black/white", ← Dominant themes       │
│      "notes": "focused ink studies, steady..."         │
│    }                                                    │
│                                                         │
│  Drift Signals (computed over last 12 entries):        │
│    1. Vocabulary Diversity (unique / total words)      │
│       Threshold: < 0.22 indicates repetitive work      │
│                                                         │
│    2. Sentiment Range (pos - neg word frequency)       │
│       Threshold: < 0.18 indicates flat affect          │
│                                                         │
│    3. Repetition Detection (n-gram overlap)            │
│       Threshold: > 60% indicates creative rut          │
│                                                         │
│  Output: Digital Sabbath Recommendation                │
│    "Drift detected. Suggest 48h no-AI break."          │
│                                                         │
└─────────────────────────────────────────────────────────┘

Why this matters:
  AI-assisted work can mask burnout. By tracking
  subtle linguistic/behavioral signals, we catch
  drift early before catastrophic exhaustion.
```

---

## 🔬 Technical Deep-Dives

### **How stdio Transport Works (vs. HTTP)**
```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│  HTTP Transport (Traditional):                          │
│                                                          │
│    Agent ──http://──▶ Server ──http://──▶ External API  │
│           request              response                  │
│                                                          │
│  Problems:                                               │
│    • Network-observable traffic                         │
│    • MITM attack surface                                │
│    • Accidental cloud exfiltration                      │
│                                                          │
├──────────────────────────────────────────────────────────┤
│                                                          │
│  stdio Transport (MCP):                                  │
│                                                          │
│    Agent ──stdin/stdout──▶ Server (same process)        │
│                                                          │
│  Advantages:                                             │
│    • Zero network exposure                              │
│    • Cannot accidentally call external APIs             │
│    • Runs in --network none containers                  │
│    • Perfect for air-gapped / no-egress environments    │
│                                                          │
└──────────────────────────────────────────────────────────┘

Example MCP Server (Python FastMCP):
  from mcp import FastMCP

  mcp = FastMCP("Sovereign Studio")

  @mcp.tool()
  def heartbeat_append(frequency: str, notes: str):
      # Tool implementation
      return {"ok": True}

  # Runs on stdio by default (no --host or --port)
  mcp.run()
```

### **CLIP Embedding Mathematics**
```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│  CLIP Architecture:                                      │
│                                                          │
│    Text Encoder (Transformer)                           │
│         ↓                                                │
│    "High-contrast ink linework..."                      │
│         ↓                                                │
│    512-dim embedding: [0.23, -0.41, 0.87, ...]          │
│         ↓                                                │
│    L2 normalize: v / ||v||                              │
│         ↓                                                │
│    signature_vec                                         │
│                                                          │
│    Image Encoder (Vision Transformer ViT-B/32)          │
│         ↓                                                │
│    [image pixels]                                        │
│         ↓                                                │
│    512-dim embedding: [0.19, -0.38, 0.91, ...]          │
│         ↓                                                │
│    L2 normalize                                          │
│         ↓                                                │
│    candidate_vec                                         │
│                                                          │
│  Cosine Similarity:                                      │
│    cos(θ) = (signature_vec · candidate_vec) /           │
│             (||signature_vec|| × ||candidate_vec||)     │
│                                                          │
│    Since both are L2-normalized:                        │
│    cos(θ) = signature_vec · candidate_vec               │
│                                                          │
│  Interpretation:                                         │
│    1.0  = Identical style                               │
│    0.85 = Very similar (typical infringement threshold) │
│    0.5  = Somewhat related                              │
│    0.0  = Orthogonal (no similarity)                    │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

### **Hot-Reload Mechanism**
```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│  Traditional Server:                                     │
│    1. Write new_tool.py                                 │
│    2. Restart server (downtime)                         │
│    3. New tool available                                │
│                                                          │
│  Meta-Architect Hot-Reload:                             │
│    1. User: "I need a vocal coach"                      │
│    2. Meta-Architect generates vocal_coach.py           │
│    3. Dynamic import:                                    │
│         spec = importlib.util.spec_from_file_location(  │
│             "vocal_coach", "./tools/vocal_coach.py"     │
│         )                                                │
│         mod = importlib.util.module_from_spec(spec)     │
│         spec.loader.exec_module(mod)                    │
│    4. Register tool:                                     │
│         registry.register("vocal_coach", mod.vocal_coach)│
│    5. Tool immediately available (zero downtime)        │
│                                                          │
│  Safety:                                                 │
│    • Generated code passes through firewall             │
│    • No-egress policy still enforced                    │
│    • All tools are sandboxed                            │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

---

## 🧪 Testing & Validation

### **Running the Test Suite**
```bash
# Run all tests
pytest tests/

# Test firewall (no-egress enforcement)
pytest tests/test_firewall.py -v

# Test IP Warden (style matching)
pytest tests/test_ip_warden.py -v

# Test Creative Clinician (drift detection)
pytest tests/test_heartbeat.py -v
```

### **Example Test: Firewall Blocks Cloud Upload**
```python
def test_firewall_blocks_upload():
    policy = NoEgressPolicy(
        enabled=True,
        deny_tool_name_patterns=["upload", "save_to_cloud"],
        deny_socket=True,
        message="Blocked by policy"
    )
    server = FirewallServer(registry, policy)

    # Attempt to call blocked tool
    response = server.handle({
        "id": "test1",
        "tool": "save_to_cloud",
        "args": {"path": "secret.wav"}
    })

    assert response["ok"] == False
    assert response["blocked"] == True
    assert "Blocked by policy" in response["error"]
```

### **Example Test: IP Warden Detects Infringement**
```python
def test_ip_warden_detects_style_theft():
    # Setup signature
    signature_text = "High-contrast ink, bold brushstrokes..."
    signature_vec = hash_embedding(signature_text)

    # Candidate that's very similar (should trigger)
    candidate_text = "High-contrast ink linework with bold strokes and analog grain"
    candidate_vec = hash_embedding(candidate_text)

    similarity = cosine(signature_vec, candidate_vec)
    threshold = 0.85

    assert similarity >= threshold, f"Expected hit, got {similarity}"
```

---

## 🤝 Contributing

We welcome contributions from the community! Here's how:

### **Types of Contributions**
1. **New Entourage Agents** (Vocal Coach, PR Manager, etc.)
2. **Studio Configs** for different creative domains
3. **Firewall Policies** (industry-specific deny patterns)
4. **Drift Detection Heuristics** (better burnout signals)
5. **Documentation** improvements
6. **Bug Reports** and feature requests

### **Contribution Workflow**
```bash
# 1. Fork the repo
# 2. Create a feature branch
git checkout -b feature/new-agent-composer

# 3. Make your changes
# 4. Run tests
pytest tests/

# 5. Commit with clear message
git commit -m "Add Composer agent for music theory tasks"

# 6. Push and create PR
git push origin feature/new-agent-composer
```

### **Contribution Guidelines**
- ✅ All agents must respect no-egress policy
- ✅ Include tests for new functionality
- ✅ Update documentation for new features
- ✅ Use type hints (Python) or TypeScript for static analysis
- ✅ Follow existing code style (Black for Python, Prettier for TS)

---

## 📞 Support & Community

### **Getting Help**
- 📖 **Documentation:** [`docs/`](docs/)
- 🐛 **Bug Reports:** [GitHub Issues](https://github.com/NerdCabal/NerdCabalMCP/issues)
- 💬 **Community Chat:** [Discord](https://discord.gg/nerdcabal) or [Matrix](https://matrix.to/#/#nerdcabal:matrix.org)
- 📧 **Instructor Contact:** tuesday@nerdcabal.org

### **Office Hours (Post-SIGGRAPH)**
Tuesday will hold office hours for 2 weeks after the conference:
- **Dates:** August 11-22, 2026
- **Time:** Tuesdays & Thursdays, 2-4pm PT
- **Format:** Zoom (link shared with attendees)

### **Community Resources**
- 🎥 **Video Tutorials:** [YouTube Playlist](https://youtube.com/@nerdcabal)
- 📝 **Blog Series:** Advanced topics & case studies
- 🗂️ **Tool Library:** Community-contributed agents

---

## 📜 License & Legal

### **Code License**
All code in this repository is licensed under the **MIT License**.
See [`LICENSE`](LICENSE) for details.

### **Documentation License**
Documentation and course materials are licensed under **CC BY-SA 4.0**.

### **DMCA Template Disclaimer**
The DMCA notice generator is a **teaching tool only**. Do not use generated notices without review by legal counsel. The authors are not attorneys and this is not legal advice.

Full legal disclaimer: [`docs/LEGAL_DISCLAIMER.md`](docs/LEGAL_DISCLAIMER.md)

---

## 🌟 Acknowledgments

This course builds on the work of:
- **Anthropic** for the Model Context Protocol (MCP)
- **OpenAI** for CLIP (vision embeddings)
- **LangChain team** for LangGraph orchestration
- **FastMCP** (jlowin) for Python MCP framework
- **The NerdCabal community** for ARTIFEX architecture

Special thanks to:
- **Callie Holderman & Nora Wixom** (SIGGRAPH Courses Co-Chairs)
- **SIGGRAPH 2026 jury** for accepting this submission
- **Beta testers** who helped refine the curriculum

---

## 🚀 What's Next?

### **After This Course**
1. **Deploy your studio** in production
2. **Share your config** with the community
3. **Contribute agents** to the tool library
4. **Join the movement** for artist sovereignty in AI

### **Advanced Topics (Future Courses)**
- **Perspectivist Safety Stack** (multi-critic evaluation)
- **Federated Style Learning** (privacy-preserving evolution)
- **Cryptographic Provenance** (blockchain for authenticity)
- **MCP Marketplace Design** (vetted, local-first tool sharing)

### **Stay Connected**
- ⭐ Star this repo on GitHub
- 🐦 Follow [@NerdCabal](https://twitter.com/nerdcabal) on Twitter/X
- 📬 Subscribe to our newsletter: https://nerdcabal.org/subscribe
- 🎤 Join us at future conferences!

---

```
╔═══════════════════════════════════════════════════════════════╗
║                                                               ║
║  "The studio is not a workspace. It is a jurisdiction."      ║
║                                                               ║
║  Your art. Your data. Your sovereignty.                      ║
║                                                               ║
║                                     — ARTIFEX Manifesto       ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝
```

---

**Last Updated:** 2026-01-14
**Version:** 1.0.0
**Course Code:** SIGGRAPH2026-COURSE-SOVEREIGN-STUDIO
**Repository:** https://github.com/NerdCabal/NerdCabalMCP
**License:** MIT (code) + CC BY-SA 4.0 (docs)
