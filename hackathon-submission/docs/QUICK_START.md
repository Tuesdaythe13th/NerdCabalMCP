# Quick Start Guide

Get your autonomous commerce agent running on Arc in 10 minutes!

---

## 🚀 Step 1: Clone & Install (2 minutes)

```bash
# Clone the repository
git clone https://github.com/Tuesdaythe13th/NerdCabalMCP.git
cd NerdCabalMCP/hackathon-submission/demo

# Install dependencies
npm install
```

---

## ⚙️ Step 2: Configure Environment (3 minutes)

```bash
# Copy environment template
cp .env.example .env

# Edit with your credentials
nano .env
```

### Required Configuration

```bash
# Circle API (get from https://developers.circle.com)
CIRCLE_API_KEY=your_circle_api_key_here
CIRCLE_ENTITY_SECRET=your_entity_secret_here

# Arc Network
ARC_RPC_URL=https://rpc.arc-testnet.com
ARC_CHAIN_ID=12345

# For testing (use Circle Wallets in production!)
TREASURY_ADDRESS=0xYourWalletAddress
TREASURY_PRIVATE_KEY=0xYourPrivateKey  # NEVER commit this!

# Gateway (early access)
GATEWAY_API_URL=https://gateway-api.circle.com
GATEWAY_API_KEY=your_gateway_api_key_here
```

### Get Test USDC

Visit Arc testnet faucet:
```bash
open https://faucet.arc-testnet.com
```

Request testnet USDC for your wallet address.

---

## ▶️ Step 3: Run the Demo (5 minutes)

```bash
# Start development server
npm run dev

# Open in browser
open http://localhost:3000
```

### What You'll See

**💳 Payment Tab**
- Send 10 USDC payment simulation
- View transaction on Arc Explorer
- See Circle Developer Console

**🏦 Treasury Tab**
- Multi-sig treasury: $12,847.32
- Spending limits and policies
- Transaction history

**🛒 Marketplace Tab**
- AI service discovery
- Compare providers
- One-click purchasing

---

## 🌐 Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

You'll get a public URL like: `https://your-app.vercel.app`

---

## 🎯 Example: Send a Payment

```typescript
import { PaymentAgent } from '@nerdcabal/arc-commerce-sdk';

// Initialize agent
const agent = new PaymentAgent({
  rpcUrl: process.env.ARC_RPC_URL,
  privateKey: process.env.TREASURY_PRIVATE_KEY
});

// Send 5 USDC
const tx = await agent.sendPayment({
  to: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
  amount: 5.0,
  memo: 'Payment for AI inference'
});

console.log(`✅ Paid! TX: ${tx.hash}`);
console.log(`View: https://explorer.arc-testnet.com/tx/${tx.hash}`);
```

---

## 🎯 Example: Create Treasury

```typescript
import { TreasuryAgent } from '@nerdcabal/arc-commerce-sdk';

const treasury = new TreasuryAgent();

// Create 2-of-3 multi-sig
const address = await treasury.createTreasury({
  signers: [alice, bob, carol],
  threshold: 2,
  spendingPolicy: {
    dailyLimit: 100,        // $100/day
    perTxLimit: 10,         // $10/tx
    requireApproval: {
      above: 5              // > $5 needs approval
    }
  }
});

console.log(`Treasury created: ${address}`);
```

---

## 🎯 Example: Use Proof to Pay

```typescript
import { ProofToPayClient } from '@nerdcabal/proof-to-pay-client';

const client = new ProofToPayClient({
  gateway: gatewayAgent,
  autoApprove: {
    maxPerRequest: 0.10,   // Auto-pay up to $0.10
    maxPerDay: 10.00       // Max $10/day
  }
});

// Call paid API - payment automatic!
const response = await client.fetch('https://api.example.com/data');
const data = await response.json();

console.log(`Paid $${response.paymentAmount} for data`);
```

---

## 🐛 Troubleshooting

### "Insufficient funds"

**Check balance:**
```bash
npx tsx -e "
import { ethers } from 'ethers';
const provider = new ethers.JsonRpcProvider(process.env.ARC_RPC_URL);
const balance = await provider.getBalance(process.env.TREASURY_ADDRESS);
console.log('Balance:', ethers.formatEther(balance), 'USDC');
"
```

**Get more testnet USDC:**
```bash
open https://faucet.arc-testnet.com
```

### "Connection refused to Arc RPC"

**Test RPC:**
```bash
curl -X POST $ARC_RPC_URL \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}'
```

**Try alternative endpoint:**
```bash
export ARC_RPC_URL=https://rpc-alt.arc-testnet.com
```

### "Circle API authentication failed"

**Verify API key:**
```bash
curl -X GET https://api.circle.com/v1/health \
  -H "Authorization: Bearer $CIRCLE_API_KEY"
```

Regenerate at: https://developers.circle.com

---

## 📚 Next Steps

- **Read Architecture**: `docs/ARCHITECTURE.md`
- **View Examples**: `docs/EXAMPLES.md`
- **API Reference**: `docs/API_REFERENCE.md`
- **Circle Feedback**: `docs/CIRCLE_FEEDBACK.md`

---

## 🎉 You're Ready!

You now have:
- ✅ Demo running locally
- ✅ Environment configured
- ✅ Test USDC in wallet
- ✅ Understanding of agents

**Start building autonomous commerce! 🚀**

---

*For help: GitHub Issues or Circle Discord*
