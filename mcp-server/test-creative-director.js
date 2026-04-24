#!/usr/bin/env node
/**
 * Demo: Test the Creative Director agent
 * Generate a Cyberpunk Brutalist design system
 */

import { spawn } from 'child_process';

const server = spawn('node', ['dist/index.js'], { stdio: ['pipe', 'pipe', 'inherit'] });

let buffer = '';
let requestId = 1;

server.stdout.on('data', (data) => {
  buffer += data.toString();
  const lines = buffer.split('\n');

  for (let i = 0; i < lines.length - 1; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    try {
      const msg = JSON.parse(line);

      if (msg.result && msg.result.capabilities) {
        console.log('✅ NerdCabalMCP Server initialized\n');
        console.log('🎨 Testing Creative Director v1.2\n');
        console.log('Task: Generate Cyberpunk Brutalist design system');
        console.log('Colors: Neon Red, Cyan, Black, White');
        console.log('Components: Button, Card, Navigation\n');

        // Call the Creative Director
        const designRequest = {
          jsonrpc: '2.0',
          id: ++requestId,
          method: 'tools/call',
          params: {
            name: 'create_design_system',
            arguments: {
              style: 'cyberpunk-brutalist-bauhaus',
              primary_colors: ['#FF0055', '#00FFFF', '#000000', '#FFFFFF'],
              components: ['button', 'card', 'navigation'],
              output_format: 'css'
            }
          }
        };

        server.stdin.write(JSON.stringify(designRequest) + '\n');

      } else if (msg.result && msg.result.content) {
        console.log('🎨 DESIGN SYSTEM GENERATED:\n');
        console.log('='.repeat(80));

        msg.result.content.forEach(item => {
          if (item.type === 'text') {
            console.log(item.text);
          }
        });

        console.log('='.repeat(80));
        console.log('\n✅ Creative Director test complete!');
        console.log('💡 The design system is ready to use in your project\n');

        server.kill();
        process.exit(0);

      } else if (msg.error) {
        console.error('❌ Error:', msg.error);
        server.kill();
        process.exit(1);
      }
    } catch (e) {
      // Not complete JSON yet
    }
  }

  buffer = lines[lines.length - 1];
});

server.on('error', (error) => {
  console.error('❌ Server error:', error.message);
  process.exit(1);
});

// Initialize server
setTimeout(() => {
  console.log('🚀 Starting NerdCabalMCP Server...\n');
  server.stdin.write(JSON.stringify({
    jsonrpc: '2.0',
    id: requestId,
    method: 'initialize',
    params: {
      protocolVersion: '2024-11-05',
      capabilities: {},
      clientInfo: { name: 'creative-director-demo', version: '1.0.0' }
    }
  }) + '\n');
}, 500);

setTimeout(() => {
  console.error('❌ Test timed out after 15 seconds');
  server.kill();
  process.exit(1);
}, 15000);
