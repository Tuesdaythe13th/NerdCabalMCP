#!/usr/bin/env node
/**
 * Demo: Test the Experimental Designer - Research Methodology Specialist
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
        console.log('🔬 Testing Experimental Designer\n');
        console.log('Research Question: Does chain-of-thought prompting improve');
        console.log('                   accuracy on mathematical reasoning tasks?\n');
        console.log('Generating experiment design...\n');

        // Call Experimental Designer
        const experimentRequest = {
          jsonrpc: '2.0',
          id: ++requestId,
          method: 'tools/call',
          params: {
            name: 'design_experiment',
            arguments: {
              hypothesis: 'Chain-of-thought prompting increases accuracy on math problems compared to direct answer prompting',
              sample_size: 1000,
              metrics: ['accuracy', 'response_time'],
              constraints: {
                budget: 5000,
                timeline_days: 30
              }
            }
          }
        };

        server.stdin.write(JSON.stringify(experimentRequest) + '\n');

      } else if (msg.result && msg.result.content) {
        console.log('🔬 EXPERIMENT DESIGN:\n');
        console.log('='.repeat(80));

        msg.result.content.forEach(item => {
          if (item.type === 'text') {
            console.log(item.text);
          }
        });

        console.log('='.repeat(80));
        console.log('\n✅ Experimental Designer test complete!');
        console.log('📋 You now have a rigorous experimental methodology\n');

        server.kill();
        process.exit(0);

      } else if (msg.error) {
        console.error('❌ Error:', msg.error);
        console.error('\nFull response:', JSON.stringify(msg, null, 2));
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
  console.log('🚀 Starting NerdCabalMCP Research Architecture...\n');
  server.stdin.write(JSON.stringify({
    jsonrpc: '2.0',
    id: requestId,
    method: 'initialize',
    params: {
      protocolVersion: '2024-11-05',
      capabilities: {},
      clientInfo: { name: 'experimental-designer-demo', version: '1.0.0' }
    }
  }) + '\n');
}, 500);

setTimeout(() => {
  console.error('❌ Test timed out');
  server.kill();
  process.exit(1);
}, 15000);
