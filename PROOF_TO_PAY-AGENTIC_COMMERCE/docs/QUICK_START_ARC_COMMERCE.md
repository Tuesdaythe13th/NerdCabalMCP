# Quick Start Guide - NerdCabal Commerce Platform

Get up and running with autonomous commerce agents on Arc in 10 minutes.

---

## 🚀 Quick Start (3 Steps)

### Step 1: Install Dependencies (2 minutes)

```bash
# Clone repository
git clone https://github.com/Tuesdaythe13th/NerdCabalMCP.git
cd NerdCabalMCP
git checkout claude/agentic-commerce-usdc-KprTA

# Install Node.js dependencies
cd mcp-server
npm install
npm run build

# Return to root
cd ..
```

### Step 2: Configure Environment (3 minutes)

```bash
# Copy environment template
cp .env.example .env

# Edit .env with your credentials
nano .env
```

**Required Configuration:**

```bash
# Circle API (Get from https://developers.circle.com)
CIRCLE_API_KEY=your_circle_api_key_here
CIRCLE_ENTITY_SECRET=your_entity_secret_here

# Arc Network (Testnet)
ARC_RPC_URL=https://rpc.arc-testnet.com
ARC_CHAIN_ID=12345

# Wallet (For testing only - use Circle Wallets in production!)
TREASURY_ADDRESS=0xYourWalletAddress
TREASURY_PRIVATE_KEY=0xYourPrivateKey  # NEVER commit this!

# Gateway (Early Access)
GATEWAY_API_URL=https://gateway-api.circle.com
GATEWAY_API_KEY=your_gateway_api_key_here
```

**Get Test USDC:**
```bash
# Visit Arc testnet faucet
open https://faucet.arc-testnet.com

# Request testnet USDC for your wallet address
```

### Step 3: Run Your First Transaction (5 minutes)

#### Option A: Using the SDK

```bash
# Create a test script
cat > test-payment.ts << 'EOF'
import { PaymentAgent } from "./mcp-server/dist/agents/payment-agent.js";

async function main() {
  const agent = new PaymentAgent({
    rpcUrl: process.env.ARC_RPC_URL!,
    privateKey: process.env.TREASURY_PRIVATE_KEY!
  });

  // Send 1 USDC payment
  const result = await agent.sendPayment({
    to: "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb", // Example recipient
    amount: 1.0,
    memo: "Test payment from NerdCabal Commerce"
  });

  console.log("✅ Payment sent!");
  console.log(`TX Hash: ${result.txHash}`);
  console.log(`View on Arc Explorer: https://explorer.arc-testnet.com/tx/${result.txHash}`);
}

main();
EOF

# Run the test
npx tsx test-payment.ts
```

#### Option B: Using Claude Desktop (MCP)

1. **Configure Claude Desktop:**

```bash
# Edit Claude Desktop config
# macOS: ~/Library/Application Support/Claude/claude_desktop_config.json
# Windows: %APPDATA%\Claude\claude_desktop_config.json
# Linux: ~/.config/Claude/claude_desktop_config.json

cat >> ~/Library/Application\ Support/Claude/claude_desktop_config.json << EOF
{
  "mcpServers": {
    "nerdcabal-commerce": {
      "command": "node",
      "args": ["$(pwd)/mcp-server/dist/index.js"],
      "env": {
        "CIRCLE_API_KEY": "your_api_key",
        "ARC_RPC_URL": "https://rpc.arc-testnet.com",
        "TREASURY_PRIVATE_KEY": "your_private_key"
      }
    }
  }
}
EOF
```

2. **Restart Claude Desktop**

3. **Test in Claude:**
```
You: "Send 1 USDC to 0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb on Arc"

Claude: I'll send 1 USDC using the payment agent.
        [Calls send_payment tool]
        ✅ Payment sent!
        Transaction: 0xabc123...
        View on Arc Explorer: https://explorer.arc-testnet.com/tx/0xabc123...
```

---

## 📚 Next Steps

### Explore More Agents

#### 1. Treasury Management

```typescript
import { TreasuryAgent } from "./mcp-server/dist/agents/treasury-agent.js";

const treasury = new TreasuryAgent();

// Create a multi-sig treasury
const treasuryAddress = await treasury.createTreasury({
  signers: [address1, address2, address3],
  threshold: 2, // 2-of-3 multi-sig
  spendingPolicy: {
    dailyLimit: 100, // $100 USDC per day
    perTransactionLimit: 10, // $10 per transaction
    requireApproval: { above: 5 } // Amounts > $5 need approval
  }
});

console.log(`Treasury created: ${treasuryAddress}`);
```

#### 2. Marketplace Discovery

```typescript
import { MarketplaceAgent } from "./mcp-server/dist/agents/marketplace-agent.js";

const marketplace = new MarketplaceAgent(paymentAgent);

// Find AI inference services
const providers = await marketplace.findService({
  type: "ai-inference",
  model: "gpt-4",
  maxPrice: 0.05, // $0.05 per request
  sla: { responseTime: "< 2s" }
});

console.log(`Found ${providers.length} providers`);
providers.forEach(p => {
  console.log(`${p.name}: $${p.price} - ${p.rating}⭐`);
});
```

#### 3. Cross-Chain Payments (Gateway)

```typescript
import { GatewayAgent } from "./mcp-server/dist/agents/gateway-agent.js";

const gateway = new GatewayAgent({
  apiKey: process.env.GATEWAY_API_KEY!,
  walletAddress: treasuryAddress
});

// Check unified balance
const balance = await gateway.getUnifiedBalance();
console.log(`Total USDC: $${balance.total}`);
console.log(`Arc: $${balance.byChain.arc}`);
console.log(`Ethereum: $${balance.byChain.ethereum}`);

// Send cross-chain payment
await gateway.sendCrosschainPayment({
  to: "0xRecipientOnEthereum",
  amount: 50,
  targetChain: "ethereum",
  sourceChain: "arc" // Pay from Arc balance
});
```

#### 4. x402 Micropayments

```typescript
import { X402Client } from "./mcp-server/dist/x402/client.js";

const x402 = new X402Client({
  facilitatorUrl: process.env.X402_FACILITATOR_URL!,
  paymentAgent: paymentAgent
});

// Call a paid API - payment happens automatically
const response = await x402.fetch("https://api.example.com/data", {
  maxPrice: 0.01, // Auto-pay up to $0.01
  autoApprove: true
});

const data = await response.json();
console.log(`Paid $${response.paymentAmount} for data`);
```

---

## 🎯 Example Use Cases

### Use Case 1: Autonomous API Budget

```typescript
// Set up a treasury for API spending
const treasury = await treasuryAgent.createTreasury({
  signers: [adminWallet, backupWallet],
  threshold: 1,
  spendingPolicy: {
    dailyLimit: 50, // $50/day budget
    categories: {
      "ai-inference": { dailyLimit: 30 },
      "data-access": { dailyLimit: 15 },
      "compute": { dailyLimit: 5 }
    }
  }
});

// Agent automatically purchases services within budget
const marketplace = new MarketplaceAgent(treasuryAgent);
const service = await marketplace.buyService({
  type: "ai-inference",
  provider: "openrouter",
  quantity: 100 // 100 requests
});

console.log(`Purchased 100 AI requests for $${service.totalCost}`);
```

### Use Case 2: Multi-Chain Commerce

```typescript
// Accept payments on Arc, pay providers on Ethereum
async function processOrder(order) {
  // Receive payment on Arc (low fees)
  const payment = await paymentAgent.receivePayment({
    from: order.customer,
    amount: order.total
  });

  // Use Gateway to pay provider on Ethereum
  await gatewayAgent.sendCrosschainPayment({
    to: order.provider,
    amount: order.providerCost,
    targetChain: "ethereum",
    sourceChain: "arc"
  });

  console.log(`Order processed: Received $${order.total} on Arc, paid $${order.providerCost} on Ethereum`);
}
```

### Use Case 3: Usage-Based API Monetization

```typescript
// Provider side: Monetize your API with x402
import { X402Server } from "./mcp-server/dist/x402/server.js";

const server = new X402Server({
  facilitatorUrl: process.env.X402_FACILITATOR_URL!,
  pricing: {
    "/api/data": 0.01, // $0.01 per request
    "/api/compute": 0.05 // $0.05 per request
  }
});

app.use(server.middleware());

app.get("/api/data", async (req, res) => {
  // Middleware verifies payment before this runs
  res.json({ data: "expensive data" });
});

// Consumer side: Automatically pay for API usage
const data = await x402Client.fetch("https://provider.com/api/data");
// Payment handled automatically, receives data
```

---

## 🛠️ Development Workflow

### 1. Local Development

```bash
# Start development server with hot reload
cd mcp-server
npm run dev

# Run tests
npm test

# Type check
npm run type-check

# Lint
npm run lint
```

### 2. Deploy Smart Contracts

```bash
# Deploy to Arc testnet
npx hardhat run scripts/deploy-contracts.ts --network arc-testnet

# Verify contracts
npx hardhat verify --network arc-testnet DEPLOYED_ADDRESS

# Add contract addresses to .env
echo "TREASURY_CONTRACT=0xDeployedTreasuryAddress" >> .env
echo "ESCROW_CONTRACT=0xDeployedEscrowAddress" >> .env
```

### 3. Test End-to-End Flow

```bash
# Run integration tests
npm run test:integration

# Test specific agent
npm run test -- --grep "PaymentAgent"

# Test transaction flow
npm run test:e2e
```

---

## 🐛 Troubleshooting

### Issue: "Insufficient funds"

**Solution:**
```bash
# Check balance
npx tsx -e "
import { ethers } from 'ethers';
const provider = new ethers.JsonRpcProvider(process.env.ARC_RPC_URL);
const balance = await provider.getBalance(process.env.TREASURY_ADDRESS);
console.log(\`Balance: \${ethers.formatEther(balance)} USDC\`);
"

# Get more testnet USDC from faucet
open https://faucet.arc-testnet.com
```

### Issue: "Connection refused to Arc RPC"

**Solution:**
```bash
# Test RPC connection
curl -X POST $ARC_RPC_URL \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}'

# Try alternative RPC endpoint
export ARC_RPC_URL=https://rpc-alt.arc-testnet.com
```

### Issue: "Circle API authentication failed"

**Solution:**
```bash
# Verify API key
curl -X GET https://api.circle.com/v1/health \
  -H "Authorization: Bearer $CIRCLE_API_KEY"

# Regenerate API key at https://developers.circle.com
```

### Issue: "MCP server not connecting in Claude Desktop"

**Solution:**
1. Check Claude Desktop logs:
   ```bash
   # macOS
   tail -f ~/Library/Logs/Claude/mcp*.log

   # Linux
   tail -f ~/.config/Claude/logs/mcp*.log
   ```

2. Verify server runs standalone:
   ```bash
   node mcp-server/dist/index.js
   # Should output: MCP server running...
   ```

3. Check config path is absolute (not relative)

---

## 📖 Learn More

### Documentation
- [Architecture Overview](./ARC_COMMERCE_ARCHITECTURE.md)
- [API Reference](./docs/API.md)
- [Agent Guide](./docs/AGENTS.md)
- [Smart Contracts](./docs/CONTRACTS.md)

### Examples
- [Payment Examples](./examples/payments/)
- [Treasury Examples](./examples/treasury/)
- [Marketplace Examples](./examples/marketplace/)
- [Cross-Chain Examples](./examples/cross-chain/)

### Circle Resources
- [Arc Documentation](https://developers.circle.com/arc)
- [Circle Wallets Guide](https://developers.circle.com/wallets)
- [Gateway Documentation](https://developers.circle.com/gateway)
- [CCTP Guide](https://developers.circle.com/cctp)

### Community
- [Discord](https://discord.gg/circle)
- [GitHub Discussions](https://github.com/Tuesdaythe13th/NerdCabalMCP/discussions)
- [Twitter](https://twitter.com/NerdCabal)

---

## 🎓 Tutorials

### Tutorial 1: Build Your First Commerce Agent (15 min)

**Goal:** Create an agent that monitors prices and auto-buys when under threshold

```typescript
import { MarketplaceAgent, PaymentAgent } from "@nerdcabal/arc-commerce-sdk";

class AutoBuyerAgent {
  constructor(
    private marketplace: MarketplaceAgent,
    private payment: PaymentAgent
  ) {}

  async monitorAndBuy(
    serviceType: string,
    maxPrice: number,
    quantity: number
  ) {
    console.log(`Monitoring ${serviceType} for prices under $${maxPrice}...`);

    setInterval(async () => {
      const providers = await this.marketplace.findService({
        type: serviceType,
        maxPrice: maxPrice
      });

      if (providers.length > 0) {
        const best = providers[0]; // Cheapest option
        console.log(`Found ${best.name} at $${best.price}!`);

        const quote = await this.marketplace.negotiatePrice(best, {
          quantity: quantity
        });

        if (quote.price <= maxPrice) {
          const purchase = await this.marketplace.acceptQuote(quote);
          console.log(`✅ Purchased! TX: ${purchase.txHash}`);
        }
      }
    }, 60000); // Check every minute
  }
}

// Usage
const autoBuyer = new AutoBuyerAgent(marketplaceAgent, paymentAgent);
autoBuyer.monitorAndBuy("ai-inference", 0.03, 1000);
```

### Tutorial 2: Multi-Sig Treasury for Team Budget (20 min)

**Goal:** Set up a treasury with spending rules for a team

```typescript
async function setupTeamTreasury() {
  // 1. Create treasury with 3 team members (2-of-3 multi-sig)
  const treasury = await treasuryAgent.createTreasury({
    signers: [
      "0xAlice...", // Developer
      "0xBob...",   // Designer
      "0xCarol..."  // Manager
    ],
    threshold: 2, // Any 2 must approve
    spendingPolicy: {
      dailyLimit: 200,
      perTransactionLimit: 50,
      categories: {
        "development": {
          dailyLimit: 100,
          allowedRecipients: ["verified"],
          autoApprove: { below: 10 }
        },
        "design": {
          dailyLimit: 75,
          requireApproval: { above: 20 }
        },
        "general": {
          dailyLimit: 25
        }
      }
    }
  });

  console.log(`Team treasury created: ${treasury.address}`);

  // 2. Fund treasury
  await paymentAgent.sendPayment({
    to: treasury.address,
    amount: 1000 // $1000 USDC
  });

  // 3. Allocate budgets
  await treasuryAgent.allocateBudget("development", 500);
  await treasuryAgent.allocateBudget("design", 300);
  await treasuryAgent.allocateBudget("general", 200);

  console.log("✅ Treasury funded and budgets allocated!");

  return treasury;
}
```

### Tutorial 3: Cross-Chain Arbitrage Bot (30 min)

**Goal:** Find price differences and profit from arbitrage

```typescript
class ArbitrageBot {
  async findArbitrage() {
    // 1. Check prices on Arc
    const arcPrice = await this.getPrice("arc", "ETH-USDC");

    // 2. Check prices on Ethereum
    const ethPrice = await this.getPrice("ethereum", "ETH-USDC");

    // 3. Calculate profit opportunity
    const spread = Math.abs(arcPrice - ethPrice);
    const profitThreshold = 0.5; // $0.50 minimum profit

    if (spread > profitThreshold) {
      console.log(`Arbitrage opportunity! Spread: $${spread}`);

      // 4. Execute arbitrage
      if (arcPrice < ethPrice) {
        // Buy on Arc, sell on Ethereum
        await this.executeTrade("arc", "buy", 1); // Buy 1 ETH
        await this.bridgeAsset("arc", "ethereum", 1);
        await this.executeTrade("ethereum", "sell", 1); // Sell 1 ETH

        console.log(`Profit: $${spread}`);
      }
    }
  }

  private async bridgeAsset(from: string, to: string, amount: number) {
    // Use Gateway for instant settlement
    await gatewayAgent.sendCrosschainPayment({
      sourceChain: from,
      targetChain: to,
      amount: amount
    });
  }
}
```

---

## 🚀 Production Checklist

Before deploying to mainnet:

- [ ] Audit smart contracts
- [ ] Switch to mainnet RPC URLs
- [ ] Use Circle Wallets (not private keys!)
- [ ] Set conservative spending limits
- [ ] Enable monitoring & alerts
- [ ] Test with small amounts first
- [ ] Set up emergency pause mechanism
- [ ] Configure backup RPC endpoints
- [ ] Enable transaction logging
- [ ] Set up compliance monitoring

---

## 💡 Pro Tips

1. **Start Small:** Test with $1-10 USDC before larger amounts
2. **Use Testnet:** Always develop on Arc testnet first
3. **Monitor Gas:** Arc uses USDC for gas, budget accordingly
4. **Batch Operations:** Group multiple payments to save gas
5. **Use Gateway:** For cross-chain, Gateway is faster than CCTP
6. **Set Limits:** Always configure spending limits
7. **Enable Alerts:** Monitor for unusual spending patterns
8. **Keep Logs:** Log all transactions for auditing
9. **Backup Keys:** Store recovery keys securely
10. **Read Docs:** Review Circle's documentation thoroughly

---

## 🎉 You're Ready!

You now have a working autonomous commerce platform on Arc. Explore the documentation, try the examples, and start building!

**Need Help?**
- [GitHub Issues](https://github.com/Tuesdaythe13th/NerdCabalMCP/issues)
- [Discord Community](https://discord.gg/circle)
- [Circle Developer Support](https://support.circle.com)

**Happy Building! 🚀**

---

*Last Updated: January 24, 2026*
