#!/usr/bin/env node
/**
 * Demo: Test the IP Analytics Engine
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
        console.log('📊 Testing IP Analytics Engine\n');
        console.log('Task: Analyze copyright infringement patterns');
        console.log('Jurisdiction: US');
        console.log('Timeframe: Last 90 days\n');

        // Call IP Analytics
        const analyticsRequest = {
          jsonrpc: '2.0',
          id: ++requestId,
          method: 'tools/call',
          params: {
            name: 'ip_analytics',
            arguments: {
              action: 'analyze_patterns',
              data: {
                portfolio_id: 'DEMO-001',
                infringement_count: 15,
                types: ['copyright', 'trademark']
              },
              jurisdiction: 'US',
              timeframe_days: 90
            }
          }
        };

        server.stdin.write(JSON.stringify(analyticsRequest) + '\n');

      } else if (msg.result && msg.result.content) {
        console.log('📊 IP ANALYTICS RESULT:\n');
        console.log('='.repeat(80));

        msg.result.content.forEach(item => {
          if (item.type === 'text') {
            console.log(item.text);
          }
        });

        console.log('='.repeat(80));
        console.log('\n✅ IP Analytics test complete!\n');

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
      clientInfo: { name: 'ip-analytics-demo', version: '1.0.0' }
    }
  }) + '\n');
}, 500);

setTimeout(() => {
  console.error('❌ Test timed out');
  server.kill();
  process.exit(1);
}, 15000);
