#!/usr/bin/env node
import { spawn } from 'child_process';

const server = spawn('node', ['dist/index.js'], { stdio: ['pipe', 'pipe', 'inherit'] });

let buffer = '';
server.stdout.on('data', (data) => {
  buffer += data.toString();
  const lines = buffer.split('\n');

  for (let i = 0; i < lines.length - 1; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    try {
      const msg = JSON.parse(line);
      if (msg.result && msg.result.capabilities) {
        // Initialize complete, now list tools
        server.stdin.write(JSON.stringify({
          jsonrpc: '2.0',
          id: 2,
          method: 'tools/list',
          params: {}
        }) + '\n');
      } else if (msg.result && msg.result.tools) {
        console.log(`\nNerdCabalMCP Tools (${msg.result.tools.length} total):\n`);
        msg.result.tools.forEach((tool, idx) => {
          console.log(`${(idx + 1).toString().padStart(2)}. ${tool.name}`);
          console.log(`    ${tool.description.substring(0, 80)}...`);
        });
        server.kill();
        process.exit(0);
      }
    } catch (e) {}
  }

  buffer = lines[lines.length - 1];
});

setTimeout(() => {
  server.stdin.write(JSON.stringify({
    jsonrpc: '2.0',
    id: 1,
    method: 'initialize',
    params: {
      protocolVersion: '2024-11-05',
      capabilities: {},
      clientInfo: { name: 'list-tools', version: '1.0.0' }
    }
  }) + '\n');
}, 500);

setTimeout(() => { server.kill(); process.exit(1); }, 5000);
