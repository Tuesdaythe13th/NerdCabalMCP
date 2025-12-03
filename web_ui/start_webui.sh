#!/usr/bin/env bash

# Paper2Agent Web UI Startup Script
# Starts the Flask web server with proper error handling

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}"
echo "╔══════════════════════════════════════════╗"
echo "║     Paper2Agent Web UI Launcher          ║"
echo "╚══════════════════════════════════════════╝"
echo -e "${NC}"

# Check if Python is installed
if ! command -v python3 &> /dev/null; then
    echo -e "${RED}❌ Error: Python 3 is not installed${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Python 3 found${NC}"

# Check if requirements are installed
echo -e "${YELLOW}📦 Checking dependencies...${NC}"
if ! python3 -c "import flask" 2>/dev/null; then
    echo -e "${YELLOW}⚙️  Installing dependencies...${NC}"
    pip install -r requirements.txt
fi

echo -e "${GREEN}✅ Dependencies installed${NC}"

# Check if port 5000 is available
if lsof -Pi :5000 -sTCP:LISTEN -t >/dev/null 2>&1 ; then
    echo -e "${YELLOW}⚠️  Port 5000 is already in use${NC}"
    echo -e "${YELLOW}   Attempting to use port 5001 instead...${NC}"
    export FLASK_PORT=5001
else
    export FLASK_PORT=5000
fi

# Start the server
echo ""
echo -e "${GREEN}🚀 Starting Paper2Agent Web UI...${NC}"
echo ""
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}   Open your browser and navigate to:${NC}"
echo -e "${BLUE}   http://localhost:${FLASK_PORT}${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo -e "${YELLOW}Press Ctrl+C to stop the server${NC}"
echo ""

# Start Flask
python3 app.py

# Cleanup on exit
trap 'echo -e "\n${YELLOW}👋 Shutting down Paper2Agent Web UI...${NC}"' EXIT
