#!/usr/bin/env node
/**
 * Demo: Test the LLM Rubric Architect agent
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
        console.log('✅ Server initialized\n');

        // Call the LLM Rubric Architect
        const rubricRequest = {
          jsonrpc: '2.0',
          id: ++requestId,
          method: 'tools/call',
          params: {
            name: 'generate_llm_rubric',
            arguments: {
              task_description: 'Evaluate AI chatbot responses for customer support',
              quality_dimensions: [
                { name: 'accuracy', description: 'Factual correctness of information' },
                { name: 'helpfulness', description: 'Utility and actionability of response' },
                { name: 'tone', description: 'Professional and empathetic communication' }
              ],
              scale_type: '1-5',
              output_format: 'markdown'
            }
          }
        };

        console.log('🤖 Calling LLM Rubric Architect...\n');
        console.log('Task: Create rubric for AI chatbot evaluation\n');
        server.stdin.write(JSON.stringify(rubricRequest) + '\n');

      } else if (msg.result && msg.result.content) {
        console.log('📊 RUBRIC GENERATED:\n');
        console.log('='.repeat(80));

        msg.result.content.forEach(item => {
          if (item.type === 'text') {
            console.log(item.text);
          }
        });

        console.log('='.repeat(80));
        console.log('\n✅ Demo complete!');

        server.kill();
        process.exit(0);
      } else if (msg.error) {
        console.error('❌ Error:', msg.error.message);
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
  server.stdin.write(JSON.stringify({
    jsonrpc: '2.0',
    id: requestId,
    method: 'initialize',
    params: {
      protocolVersion: '2024-11-05',
      capabilities: {},
      clientInfo: { name: 'demo-client', version: '1.0.0' }
    }
  }) + '\n');
}, 500);

setTimeout(() => {
  console.error('❌ Timeout');
  server.kill();
  process.exit(1);
}, 15000);
