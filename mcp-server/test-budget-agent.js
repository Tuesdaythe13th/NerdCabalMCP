#!/usr/bin/env node
/**
 * Demo: Test the Budget Agent for research funding
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
        console.log('💰 Testing Budget Agent\n');
        console.log('Scenario: NSF Grant Proposal for AI Research');
        console.log('Funding Target: $500,000');
        console.log('Timeline: 24 months\n');
        console.log('Generating detailed budget...\n');

        // Call Budget Agent
        const budgetRequest = {
          jsonrpc: '2.0',
          id: ++requestId,
          method: 'tools/call',
          params: {
            name: 'analyze_research_budget',
            arguments: {
              project_type: 'research_grant',
              funding_source: 'NSF',
              total_budget: 500000,
              duration_months: 24,
              team_size: 5,
              include_equipment: true,
              include_travel: true
            }
          }
        };

        server.stdin.write(JSON.stringify(budgetRequest) + '\n');

      } else if (msg.result && msg.result.content) {
        console.log('💰 RESEARCH BUDGET:\n');
        console.log('='.repeat(80));

        msg.result.content.forEach(item => {
          if (item.type === 'text') {
            console.log(item.text);
          }
        });

        console.log('='.repeat(80));
        console.log('\n✅ Budget Agent test complete!');
        console.log('📊 Your grant budget is ready for submission\n');

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
  console.log('🚀 Starting NerdCabalMCP Budget Agent...\n');
  server.stdin.write(JSON.stringify({
    jsonrpc: '2.0',
    id: requestId,
    method: 'initialize',
    params: {
      protocolVersion: '2024-11-05',
      capabilities: {},
      clientInfo: { name: 'budget-agent-demo', version: '1.0.0' }
    }
  }) + '\n');
}, 500);

setTimeout(() => {
  console.error('❌ Test timed out');
  server.kill();
  process.exit(1);
}, 15000);
