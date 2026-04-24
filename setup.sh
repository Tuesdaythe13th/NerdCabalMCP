#!/usr/bin/env bash
# setup.sh — One-shot setup for NerdCabalMCP
# Run from the repo root: bash setup.sh

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
MCP_SERVER="$REPO_ROOT/mcp-server"

# ── Colours ────────────────────────────────────────────────────────────────
GREEN='\033[0;32m'; YELLOW='\033[1;33m'; RED='\033[0;31m'; NC='\033[0m'
ok()   { echo -e "${GREEN}✔${NC} $*"; }
warn() { echo -e "${YELLOW}⚠${NC}  $*"; }
fail() { echo -e "${RED}✖${NC} $*"; exit 1; }

echo ""
echo "══════════════════════════════════════════"
echo "   NerdCabalMCP — Setup"
echo "══════════════════════════════════════════"
echo ""

# ── 1. Check Node.js ────────────────────────────────────────────────────────
if ! command -v node &>/dev/null; then
  fail "Node.js not found. Install Node.js >= 18 from https://nodejs.org/"
fi

NODE_MAJOR=$(node -e "process.stdout.write(String(process.versions.node.split('.')[0]))")
if [ "$NODE_MAJOR" -lt 18 ]; then
  fail "Node.js >= 18 required (found $(node --version)). Update at https://nodejs.org/"
fi
ok "Node.js $(node --version)"

# ── 2. Check npm ────────────────────────────────────────────────────────────
if ! command -v npm &>/dev/null; then
  fail "npm not found. It should ship with Node.js."
fi
ok "npm $(npm --version)"

# ── 3. Install dependencies ─────────────────────────────────────────────────
echo ""
echo "Installing npm dependencies..."
cd "$MCP_SERVER"
npm install --silent
ok "Dependencies installed"

# ── 4. Build TypeScript ─────────────────────────────────────────────────────
echo ""
echo "Building TypeScript..."
npm run build
ok "Build succeeded → dist/"

# ── 5. Smoke-test the server ────────────────────────────────────────────────
echo ""
echo "Smoke-testing MCP server..."
# The server runs on stdio and blocks; we just check it starts cleanly.
if timeout 3 node dist/index.js 2>&1 | grep -q "running on stdio"; then
  ok "Server starts successfully"
else
  # Some versions write to stderr; accept exit 124 (timeout) as success too.
  EXIT=$?
  if [ "$EXIT" -eq 124 ]; then
    ok "Server starts successfully (timeout expected)"
  else
    warn "Could not confirm server output — check manually: node mcp-server/dist/index.js"
  fi
fi

# ── 6. Create .env if missing ───────────────────────────────────────────────
cd "$REPO_ROOT"
if [ ! -f ".env" ] && [ -f ".env.example" ]; then
  cp .env.example .env
  warn "Created .env from .env.example — fill in your API keys before use"
elif [ -f ".env" ]; then
  ok ".env already exists"
else
  warn "No .env.example found — create .env manually if your agents need API keys"
fi

# ── 7. Print Claude Desktop config ──────────────────────────────────────────
DIST_PATH="$REPO_ROOT/mcp-server/dist/index.js"

echo ""
echo "══════════════════════════════════════════"
echo "   Setup complete!"
echo "══════════════════════════════════════════"
echo ""
echo "Add this to your Claude Desktop config file:"
echo ""
echo "  macOS:   ~/Library/Application Support/Claude/claude_desktop_config.json"
echo "  Windows: %APPDATA%\\Claude\\claude_desktop_config.json"
echo "  Linux:   ~/.config/Claude/claude_desktop_config.json"
echo ""
cat <<EOF
{
  "mcpServers": {
    "nerdcabal": {
      "command": "node",
      "args": ["$DIST_PATH"]
    }
  }
}
EOF
echo ""
echo "Then restart Claude Desktop and look for the 🔨 icon."
echo ""
echo "Quick commands:"
echo "  npm run dev       — run in development mode (no build needed)"
echo "  npm run build     — compile TypeScript"
echo "  npm start         — run compiled server"
echo "  npm run typecheck — type-check without compiling"
echo ""
