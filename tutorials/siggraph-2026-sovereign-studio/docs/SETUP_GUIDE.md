# 🛠️ Setup Guide

## SIGGRAPH 2026 Sovereign Studio Tutorial

```
┌───────────────────────────────────────────────────────────────┐
│                                                               │
│   ███████╗███████╗████████╗██╗   ██╗██████╗                  │
│   ██╔════╝██╔════╝╚══██╔══╝██║   ██║██╔══██╗                 │
│   ███████╗█████╗     ██║   ██║   ██║██████╔╝                 │
│   ╚════██║██╔══╝     ██║   ██║   ██║██╔═══╝                  │
│   ███████║███████╗   ██║   ╚██████╔╝██║                      │
│   ╚══════╝╚══════╝   ╚═╝    ╚═════╝ ╚═╝                      │
│                                                               │
│   Complete Environment Setup for Sovereign Studio             │
│                                                               │
└───────────────────────────────────────────────────────────────┘
```

This guide will help you set up your development environment for the SIGGRAPH 2026 Sovereign Studio tutorial. Follow these steps **before** arriving at the conference to ensure a smooth learning experience.

---

## 📋 Quick Checklist

Before you start, ensure you have:

- [ ] Laptop with 16GB+ RAM (32GB recommended)
- [ ] 10GB+ free disk space (20GB if using local LLMs)
- [ ] Stable internet connection (for initial setup only)
- [ ] Admin/sudo access to install software
- [ ] GitHub account (for cloning the repo)

---

## 🎯 Setup Options

Choose the setup path that matches your technical comfort level:

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  Option 1: Docker (Recommended for beginners)              │
│    Pros: • Fastest setup                                   │
│          • No Python/Node.js version conflicts             │
│          • True no-egress enforcement                      │
│    Cons: • Requires Docker Desktop                         │
│          • Uses more disk space                            │
│                                                             │
│  Option 2: Python Virtual Environment                      │
│    Pros: • Lightweight                                     │
│          • Easier to debug/customize                       │
│    Cons: • Must install Python 3.11+                       │
│          • Potential dependency conflicts                  │
│                                                             │
│  Option 3: Google Colab (No local install)                 │
│    Pros: • Zero installation                               │
│          • Free GPU access                                 │
│    Cons: • Runs in cloud (not true no-egress)             │
│          • Internet required during course                 │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 🐳 Option 1: Docker Setup (Recommended)

### **Step 1: Install Docker Desktop**

#### **Windows**
1. Download Docker Desktop from: https://www.docker.com/products/docker-desktop
2. Run the installer (requires admin rights)
3. Restart your computer when prompted
4. Launch Docker Desktop from Start Menu
5. Wait for Docker Engine to start (whale icon in system tray)

#### **macOS**
1. Download Docker Desktop for Mac (Intel or Apple Silicon)
2. Drag Docker.app to Applications folder
3. Open Docker.app from Applications
4. Grant permissions when prompted (requires admin password)
5. Wait for Docker Engine to start (whale icon in menu bar)

#### **Linux (Ubuntu/Debian)**
```bash
# Update package index
sudo apt-get update

# Install dependencies
sudo apt-get install -y \
    ca-certificates \
    curl \
    gnupg \
    lsb-release

# Add Docker GPG key
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | \
  sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg

# Add Docker repository
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] \
  https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Install Docker Engine
sudo apt-get update
sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin

# Add your user to docker group (no sudo required)
sudo usermod -aG docker $USER

# Log out and log back in for group changes to take effect
```

### **Step 2: Verify Docker Installation**
```bash
# Check Docker version
docker --version
# Expected output: Docker version 24.0.0 or higher

# Test Docker with hello-world
docker run hello-world
# Expected output: "Hello from Docker!" message
```

### **Step 3: Clone the Tutorial Repository**
```bash
# Clone the repo
git clone https://github.com/NerdCabal/NerdCabalMCP.git

# Navigate to tutorial directory
cd NerdCabalMCP/tutorials/siggraph-2026-sovereign-studio
```

### **Step 4: Build the Sovereign Studio Container**
```bash
# Build the Docker image (takes 5-10 minutes)
docker build -t sovereign-studio:latest -f examples/docker/Dockerfile.sovereign .

# Verify the image was created
docker images | grep sovereign-studio
# Expected output: sovereign-studio   latest   ...
```

### **Step 5: Test the Container**
```bash
# Run with no network access (true no-egress)
docker run --rm \
           --network none \
           -v $(pwd)/output:/output \
           -v $(pwd)/assets:/assets:ro \
           sovereign-studio:latest \
           python -c "print('✅ Sovereign Studio ready!')"

# Expected output: ✅ Sovereign Studio ready!
```

### **Step 6: Launch Jupyter in Container**
```bash
# Start Jupyter server
docker run -it --rm \
           --network none \
           -p 8888:8888 \
           -v $(pwd):/workspace \
           sovereign-studio:latest \
           jupyter notebook --ip=0.0.0.0 --port=8888 --no-browser --allow-root

# Copy the URL with token (looks like: http://127.0.0.1:8888/?token=...)
# Paste into your browser
```

**🎉 Docker setup complete!** You're ready for the course.

---

## 🐍 Option 2: Python Virtual Environment Setup

### **Step 1: Install Python 3.11+**

#### **Windows**
1. Download Python from: https://www.python.org/downloads/
2. Run installer, **check "Add Python to PATH"**
3. Verify installation:
```cmd
python --version
```

#### **macOS**
```bash
# Using Homebrew (install from https://brew.sh if needed)
brew install python@3.11

# Verify installation
python3.11 --version
```

#### **Linux (Ubuntu/Debian)**
```bash
# Install Python 3.11
sudo apt-get update
sudo apt-get install -y python3.11 python3.11-venv python3.11-dev

# Verify installation
python3.11 --version
```

### **Step 2: Clone the Repository**
```bash
git clone https://github.com/NerdCabal/NerdCabalMCP.git
cd NerdCabalMCP/tutorials/siggraph-2026-sovereign-studio
```

### **Step 3: Create Virtual Environment**
```bash
# Create venv
python3.11 -m venv .venv

# Activate venv
# On Windows:
.venv\Scripts\activate
# On macOS/Linux:
source .venv/bin/activate

# Your prompt should now show (.venv)
```

### **Step 4: Install Dependencies**
```bash
# Upgrade pip
pip install --upgrade pip

# Install course dependencies
pip install -r requirements.txt

# This installs:
# - fastmcp (MCP server framework)
# - anthropic (Claude API client)
# - openai (alternative LLM provider)
# - clip-by-openai (vision embeddings)
# - torch torchvision (CLIP dependencies)
# - jupyter notebook (for tutorial)
# - pytest (for testing)
```

**Note:** Installing PyTorch may take several minutes and ~2GB of disk space.

### **Step 5: Verify Installation**
```bash
# Run the prerequisites checker
python check_prerequisites.py

# Expected output:
# ✅ Python 3.11+ detected
# ✅ Git configured
# ✅ All dependencies installed
# ⚠️  Docker not found (optional)
# 🎉 You're ready for SIGGRAPH 2026!
```

### **Step 6: Launch Jupyter**
```bash
# Start Jupyter server
jupyter notebook

# Browser should open automatically
# Navigate to: notebooks/sovereign_studio_tutorial.ipynb
```

**🎉 Python setup complete!** You're ready for the course.

---

## ☁️ Option 3: Google Colab (No Local Install)

### **Step 1: Open the Notebook in Colab**

Click this badge:
[![Open In Colab](https://colab.research.google.com/assets/colab-badge.svg)](https://colab.research.google.com/github/NerdCabal/NerdCabalMCP/blob/main/tutorials/siggraph-2026-sovereign-studio/notebooks/sovereign_studio_tutorial.ipynb)

### **Step 2: Copy to Your Drive**
1. Click **File → Save a copy in Drive**
2. This creates your own editable version

### **Step 3: Enable GPU (Optional but Recommended)**
1. Click **Runtime → Change runtime type**
2. Set **Hardware accelerator** to **GPU**
3. Click **Save**

### **Step 4: Run the First Cell**
The first code cell installs dependencies:
```python
# This cell runs in Colab automatically
!pip install fastmcp anthropic clip-by-openai
```

**⚠️ Important Note:**
Colab runs in the cloud, so you won't have true no-egress enforcement. This is **for learning only**. For production use, deploy locally with Docker.

**🎉 Colab setup complete!** You can start the tutorial immediately.

---

## 🔑 API Keys (Optional)

### **When Do You Need API Keys?**
- ✅ **Local LLM (Ollama/LM Studio):** No API keys needed
- ❌ **Cloud LLM (Claude/GPT-4):** API keys required

### **Getting Anthropic API Key (Claude)**
1. Sign up at: https://console.anthropic.com
2. Navigate to **API Keys**
3. Click **Create Key**
4. Copy the key (starts with `sk-ant-...`)
5. Set environment variable:
```bash
# Linux/macOS
export ANTHROPIC_API_KEY="sk-ant-..."

# Windows (PowerShell)
$env:ANTHROPIC_API_KEY="sk-ant-..."

# Windows (CMD)
set ANTHROPIC_API_KEY=sk-ant-...
```

### **Getting OpenAI API Key (GPT-4)**
1. Sign up at: https://platform.openai.com
2. Navigate to **API Keys**
3. Click **Create new secret key**
4. Copy the key (starts with `sk-...`)
5. Set environment variable:
```bash
# Linux/macOS
export OPENAI_API_KEY="sk-..."

# Windows (PowerShell)
$env:OPENAI_API_KEY="sk-..."
```

### **Storing Keys Securely**
**DO NOT** commit API keys to Git! Add to `.env` file:
```bash
# .env (in tutorial directory)
ANTHROPIC_API_KEY=sk-ant-your-key-here
OPENAI_API_KEY=sk-your-key-here
```

Then load in Python:
```python
from dotenv import load_dotenv
load_dotenv()  # Reads .env file
```

---

## 🦙 Local LLM Setup (Recommended for Privacy)

### **Option A: Ollama (Easiest)**

#### **Install Ollama**
```bash
# macOS/Linux
curl -fsSL https://ollama.ai/install.sh | sh

# Windows (download from https://ollama.ai)
```

#### **Download a Model**
```bash
# Lightweight model (4GB)
ollama pull llama3.2:3b

# Full-featured model (14GB, recommended)
ollama pull llama3.3:70b

# Test the model
ollama run llama3.2:3b "Hello, world!"
```

#### **Use in Tutorial**
```python
# In the notebook
from ollama import Client

client = Client()
response = client.chat(model="llama3.2:3b", messages=[
    {"role": "user", "content": "Generate a vocal coach tool"}
])
print(response["message"]["content"])
```

### **Option B: LM Studio (GUI-Friendly)**

1. Download from: https://lmstudio.ai
2. Install and launch
3. Navigate to **Discover** tab
4. Search for `llama-3.2-3b-instruct-GGUF`
5. Click **Download**
6. Switch to **Local Server** tab
7. Click **Start Server** (runs on http://localhost:1234)

#### **Use in Tutorial**
```python
# LM Studio exposes OpenAI-compatible API
from openai import OpenAI

client = OpenAI(base_url="http://localhost:1234/v1", api_key="lm-studio")
response = client.chat.completions.create(
    model="llama-3.2-3b-instruct",
    messages=[{"role": "user", "content": "Generate a vocal coach tool"}]
)
print(response.choices[0].message.content)
```

---

## 🧪 Verification Tests

### **Test 1: Python Environment**
```bash
python check_prerequisites.py
```

Expected output:
```
✅ Python 3.11+ detected (3.11.6)
✅ Git configured (2.42.0)
✅ Virtual environment active
✅ fastmcp installed (0.2.1)
✅ anthropic installed (0.8.0)
✅ torch installed (2.1.0)
✅ CLIP available
⚠️  Docker not found (optional)
🎉 You're ready for SIGGRAPH 2026!
```

### **Test 2: Docker Environment**
```bash
docker run --rm sovereign-studio:latest python -c "
import fastmcp
import torch
import clip
print('✅ All imports successful')
"
```

### **Test 3: Jupyter Notebook**
```bash
jupyter notebook --version
# Expected: notebook 7.0.0 or higher
```

### **Test 4: CLIP Embeddings**
```bash
python -c "
import clip
import torch

device = 'cuda' if torch.cuda.is_available() else 'cpu'
model, preprocess = clip.load('ViT-B/32', device=device)
print(f'✅ CLIP loaded on {device}')
"
```

### **Test 5: No-Egress Socket Block**
```python
# In Python REPL
import socket

# Monkeypatch socket.connect
orig_connect = socket.socket.connect
def blocked_connect(self, address):
    raise OSError(f"Blocked: {address}")
socket.socket.connect = blocked_connect

# Try to connect (should fail)
try:
    s = socket.socket()
    s.connect(("google.com", 80))
    print("❌ Socket block FAILED")
except OSError as e:
    print(f"✅ Socket block working: {e}")
```

---

## 🚨 Troubleshooting

### **Problem: Docker Won't Start on Windows**
**Solution:**
1. Ensure Hyper-V is enabled:
   - Open **Turn Windows features on or off**
   - Check **Hyper-V** and **Virtual Machine Platform**
   - Restart computer
2. Or use WSL 2 backend:
   - Install WSL 2: `wsl --install`
   - In Docker Desktop settings, enable **Use WSL 2 based engine**

### **Problem: Python Version Too Old**
**Solution (macOS/Linux):**
```bash
# Use pyenv to install Python 3.11
curl https://pyenv.run | bash

# Add to ~/.bashrc or ~/.zshrc:
export PATH="$HOME/.pyenv/bin:$PATH"
eval "$(pyenv init --path)"

# Install Python 3.11
pyenv install 3.11.6
pyenv global 3.11.6
```

**Solution (Windows):**
Download Python 3.11 from https://www.python.org/downloads/windows/

### **Problem: CLIP Installation Fails**
**Solution:**
```bash
# Install PyTorch first (with CPU or CUDA support)
# For CPU only:
pip install torch torchvision --index-url https://download.pytorch.org/whl/cpu

# For CUDA 11.8:
pip install torch torchvision --index-url https://download.pytorch.org/whl/cu118

# Then install CLIP
pip install clip-by-openai
```

### **Problem: Out of Disk Space**
**Solution:**
- Free up 10GB minimum (20GB recommended)
- For Docker: Clean old images with `docker system prune -a`
- For Python: Use `pip cache purge`

### **Problem: Git Clone Fails**
**Solution:**
```bash
# If HTTPS fails, try SSH
git clone git@github.com:NerdCabal/NerdCabalMCP.git

# Or download ZIP directly
curl -L https://github.com/NerdCabal/NerdCabalMCP/archive/refs/heads/main.zip -o nerdcabal.zip
unzip nerdcabal.zip
cd NerdCabalMCP-main/tutorials/siggraph-2026-sovereign-studio
```

### **Problem: Jupyter Kernel Won't Start**
**Solution:**
```bash
# Install ipykernel in your venv
pip install ipykernel

# Register the kernel
python -m ipykernel install --user --name=sovereign-studio

# In Jupyter, select: Kernel → Change Kernel → sovereign-studio
```

---

## 📞 Getting Help

If you encounter issues not covered here:

1. **Check FAQ:** [`docs/FAQ.md`](FAQ.md)
2. **GitHub Issues:** https://github.com/NerdCabal/NerdCabalMCP/issues
3. **Discord:** https://discord.gg/nerdcabal (channels: `#siggraph-2026` and `#tech-support`)
4. **Email Instructor:** tuesday@nerdcabal.org (please include error logs)

---

## ✅ Final Checklist

Before the course, confirm:

- [ ] Docker OR Python 3.11+ installed and tested
- [ ] Repository cloned successfully
- [ ] Dependencies installed (run `check_prerequisites.py`)
- [ ] Jupyter notebook opens (try opening `notebooks/sovereign_studio_tutorial.ipynb`)
- [ ] (Optional) API keys configured for cloud LLMs
- [ ] (Optional) Local LLM (Ollama/LM Studio) installed and tested
- [ ] At least 10GB free disk space
- [ ] Laptop fully charged (bring your charger!)

---

## 🎉 You're Ready!

See you at SIGGRAPH 2026! 🚀

Questions during setup? Ask in Discord: https://discord.gg/nerdcabal

---

**Last Updated:** 2026-01-14
**Version:** 1.0.0
**Maintainer:** tuesday@nerdcabal.org
