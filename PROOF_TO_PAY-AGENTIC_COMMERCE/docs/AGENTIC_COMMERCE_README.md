# NerdCabal Commerce Platform
## Agentic Commerce on Arc with USDC

**Autonomous AI Agents for Decentralized Commerce powered by Circle's Arc Network**

---

## 🎯 Hackathon Submission

**Event:** Agentic Commerce on Arc
**Dates:** January 9-24, 2026
**Team:** NerdCabal
**Tracks:**
- 🤖 Best Trustless AI Agent
- 🧰 Best Dev Tools
- 🪙 Best Gateway-Based Micropayments Integration

---

## 📋 Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Key Features](#key-features)
- [Circle Products Used](#circle-products-used)
- [Commerce Agents](#commerce-agents)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [Transaction Flow Demo](#transaction-flow-demo)
- [Circle Product Feedback](#circle-product-feedback)
- [Technical Stack](#technical-stack)
- [Repository Structure](#repository-structure)
- [Contributing](#contributing)
- [License](#license)

---

## 🌟 Overview

**NerdCabal Commerce Platform** transforms the original NerdCabalMCP Co-Scientist Platform into a comprehensive **agentic commerce ecosystem** on Arc. We've adapted our multi-agent AI system to enable autonomous economic agents that can:

- **Transact autonomously** using USDC on Arc
- **Manage onchain treasuries** with multi-sig and policy guardrails
- **Execute micropayments** via Gateway and x402 protocol
- **Negotiate and coordinate** using Agent-to-Agent (A2A) protocol
- **Provide commerce APIs** via Model Context Protocol (MCP)

### What Problem Does This Solve?

Traditional commerce systems require constant human intervention for:
- Payment processing
- Contract negotiation
- Service provisioning
- Budget management
- Compliance verification

Our platform enables **fully autonomous commerce agents** that can:
1. **Purchase API access** on-demand with micropayments
2. **Sell data and compute services** dynamically
3. **Manage treasury operations** with built-in compliance
4. **Execute cross-chain transactions** seamlessly
5. **Provide developer tools** for building commerce dApps

---

## 🏗️ Architecture

### High-Level System Design

```
┌─────────────────────────────────────────────────────────────┐
│                    Client Applications                       │
│         (Claude Desktop, Web Apps, Mobile Apps)              │
└────────────────────────┬────────────────────────────────────┘
                         │ MCP Protocol (JSON-RPC 2.0)
                         ▼
┌─────────────────────────────────────────────────────────────┐
│              NerdCabal Commerce MCP Server                   │
│                                                              │
│  ┌────────────────────────────────────────────────────┐    │
│  │         Commerce Agent Orchestra                    │    │
│  ├────────────────────────────────────────────────────┤    │
│  │  • Payment Agent      • Treasury Agent              │    │
│  │  • Marketplace Agent  • Gateway Agent               │    │
│  │  • Negotiator Agent   • Compliance Agent            │    │
│  │  • Analytics Agent    • Bridge Agent                │    │
│  └────────────────────────────────────────────────────┘    │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                Circle Infrastructure Layer                   │
│                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │   Circle     │  │   Circle     │  │   Circle     │     │
│  │   Wallets    │  │   Gateway    │  │  Bridge Kit  │     │
│  └──────────────┘  └──────────────┘  └──────────────┘     │
│                                                              │
│  ┌──────────────────────────────────────────────────┐      │
│  │        x402 Micropayment Facilitator             │      │
│  └──────────────────────────────────────────────────┘      │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                    Arc Network (L1)                          │
│                                                              │
│  • EVM-Compatible Smart Contracts                           │
│  • USDC as Native Gas Token                                 │
│  • Sub-second Finality                                      │
│  • Deterministic Settlement                                 │
└─────────────────────────────────────────────────────────────┘
```

### Agent Architecture (A2A Protocol Compliant)

Each commerce agent implements the **AgentCard** specification and supports:

- **Sequential Workflows**: Purchase → Verify → Release Payment
- **Parallel Execution**: Multi-marketplace price discovery
- **Loop Patterns**: Iterative negotiation
- **Coordinator Patterns**: Central treasury management

---

## ✨ Key Features

### 🤖 Autonomous Commerce Agents

**1. Payment Agent**
- Execute USDC transfers on Arc
- Handle gas fee estimation and optimization
- Support for batched micropayments
- Real-time transaction monitoring

**2. Treasury Agent**
- Multi-signature wallet management
- Policy-based spending controls
- Budget allocation and tracking
- Automated rebalancing

**3. Marketplace Agent**
- API service discovery
- Dynamic pricing negotiation
- Service level agreement (SLA) enforcement
- Provider reputation scoring

**4. Gateway Agent**
- Cross-chain USDC balance management
- Unified liquidity access
- Instant settlement coordination
- Multi-chain payment routing

**5. Negotiator Agent**
- Price discovery and optimization
- Contract term negotiation
- Escrow service coordination
- Dispute resolution facilitation

**6. Compliance Agent**
- Transaction monitoring
- AML/KYC verification
- Regulatory reporting
- Audit trail generation

**7. Analytics Agent**
- Spending pattern analysis
- ROI calculation
- Market trend detection
- Performance optimization

**8. Bridge Agent**
- Cross-chain USDC transfers via CCTP
- Bridge Kit integration
- Route optimization
- Slippage protection

### 🪙 Gateway-Based Micropayments

**x402 Protocol Implementation**
- HTTP 402 "Payment Required" status handling
- Automatic payment verification
- Sub-cent micropayment support
- Usage-based API monetization

**Use Cases:**
- Pay-per-API-call for AI inference
- Data access micropayments
- Compute resource provisioning
- Content delivery networks

### 🔒 Trust-Minimized Design

**Security Features:**
- Hardware wallet integration (via Circle Wallets)
- Multi-sig treasury controls
- Time-locked spending policies
- Emergency pause mechanisms
- Rate limiting and circuit breakers

**Identity & Verification:**
- DID (Decentralized Identifier) support
- Verifiable credentials
- Reputation-based trust scoring
- On-chain transaction history

### 🛠️ Developer Tools

**MCP SDK Extensions**
- `@nerdcabal/arc-commerce-sdk` - TypeScript SDK for commerce agents
- `@nerdcabal/x402-client` - x402 payment protocol client
- `@nerdcabal/gateway-tools` - Circle Gateway integration utilities
- `@nerdcabal/agent-templates` - Pre-built agent templates

**CLI Tools**
```bash
# Deploy a new commerce agent
nerdcabal-commerce init --agent-type=payment

# Test micropayment flows
nerdcabal-commerce test-payment --amount=0.01 --provider=openai-api

# Monitor treasury balance
nerdcabal-commerce treasury status

# Execute cross-chain transfer
nerdcabal-commerce bridge --from=ethereum --to=arc --amount=100
```

---

## 🔵 Circle Products Used

### 1. Arc (Layer-1 Blockchain)

**Why Arc?**
- **Native USDC**: No wrapped tokens, true stablecoin settlement
- **Predictable Fees**: USDC-denominated gas fees eliminate volatility
- **Sub-second Finality**: Critical for real-time commerce
- **EVM Compatibility**: Leverage existing Solidity tooling

**What We Built:**
- Smart contracts for escrow services
- Multi-sig treasury implementations
- Automated payment processors
- Oracle integrations for external data

### 2. Circle Wallets

**Why Circle Wallets?**
- **Programmable Security**: Set spending policies programmatically
- **MPC Architecture**: No single point of failure
- **API-First Design**: Perfect for autonomous agents
- **Enterprise-Grade**: Production-ready infrastructure

**What We Built:**
- Agent wallet provisioning system
- Policy engine for spending controls
- Multi-agent treasury coordination
- Recovery mechanisms for compromised wallets

### 3. Circle Gateway

**Why Gateway?**
- **Unified Liquidity**: Single USDC balance across all chains
- **Instant Settlement**: No waiting for cross-chain confirmations
- **Simplified UX**: Agents don't manage chain-specific balances
- **Gas Abstraction**: Pay for everything in USDC

**What We Built:**
- Cross-chain payment router
- Liquidity optimization engine
- Failover mechanisms for chain outages
- Real-time balance synchronization

### 4. Circle CCTP / Bridge Kit

**Why CCTP?**
- **Native USDC**: Burn-and-mint instead of lock-and-mint
- **Trust-Minimized**: No third-party bridges
- **Fast Settlement**: Minutes instead of hours
- **Composable**: Easy integration with DeFi protocols

**What We Built:**
- Automated bridge transactions
- Route optimization (CCTP vs. Gateway)
- Slippage protection for large transfers
- Emergency withdrawal mechanisms

### 5. x402 Facilitator (Early Access)

**Why x402?**
- **Web-Native**: Standard HTTP protocol extension
- **Micropayments**: Sub-dollar transactions economically viable
- **Backward Compatible**: Works with existing HTTP infrastructure
- **Programmable**: Agents can pay for APIs autonomously

**What We Built:**
- x402 client library for agents
- Payment verification middleware
- Usage-based pricing engine
- Provider reputation system

---

## 🤖 Commerce Agents

### Payment Agent

**Purpose:** Execute and monitor USDC transactions on Arc

**Capabilities:**
```typescript
interface PaymentAgentCapabilities {
  // Core payment operations
  sendPayment(to: string, amount: number, memo?: string): Promise<TxHash>;
  batchPayments(payments: Payment[]): Promise<TxHash[]>;

  // Gas optimization
  estimateGas(tx: Transaction): Promise<GasEstimate>;
  optimizeFee(tx: Transaction): Promise<Transaction>;

  // Monitoring
  trackPayment(txHash: string): Promise<PaymentStatus>;
  getPaymentHistory(filters: PaymentFilters): Promise<Payment[]>;
}
```

**Example Usage:**
```typescript
// Pay for API access
const paymentAgent = new PaymentAgent(walletAddress);
const tx = await paymentAgent.sendPayment(
  "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb", // API provider
  0.05, // $0.05 in USDC
  "OpenAI API - 1000 tokens"
);
```

### Treasury Agent

**Purpose:** Manage multi-sig treasuries with policy enforcement

**Capabilities:**
```typescript
interface TreasuryAgentCapabilities {
  // Treasury management
  createTreasury(config: TreasuryConfig): Promise<TreasuryAddress>;
  setSpendingPolicy(policy: SpendingPolicy): Promise<void>;

  // Multi-sig operations
  proposeTransaction(tx: Transaction): Promise<ProposalId>;
  approveTransaction(proposalId: string): Promise<void>;
  executeTransaction(proposalId: string): Promise<TxHash>;

  // Budget management
  allocateBudget(category: string, amount: number): Promise<void>;
  trackSpending(category: string): Promise<SpendingReport>;
}
```

**Example Usage:**
```typescript
// Create a treasury with spending limits
const treasuryAgent = new TreasuryAgent();
const treasury = await treasuryAgent.createTreasury({
  signers: [agent1, agent2, agent3],
  threshold: 2, // 2-of-3 multi-sig
  spendingPolicy: {
    dailyLimit: 100, // $100 USDC per day
    requireApproval: { above: 10 }, // Amounts > $10 need approval
    allowedRecipients: ["verified"] // Only pay verified providers
  }
});
```

### Marketplace Agent

**Purpose:** Discover and purchase API services autonomously

**Capabilities:**
```typescript
interface MarketplaceAgentCapabilities {
  // Service discovery
  findService(requirements: ServiceRequirements): Promise<Provider[]>;
  compareProviders(providers: Provider[]): Promise<Comparison>;

  // Negotiation
  negotiatePrice(provider: Provider, service: Service): Promise<Quote>;
  acceptQuote(quote: Quote): Promise<Contract>;

  // Execution
  executeService(contract: Contract, params: any): Promise<Result>;
  verifyDelivery(contract: Contract, result: Result): Promise<boolean>;
}
```

**Example Usage:**
```typescript
// Find and purchase image generation service
const marketplaceAgent = new MarketplaceAgent(treasuryAgent);
const providers = await marketplaceAgent.findService({
  type: "image-generation",
  quality: "high",
  maxPrice: 0.10,
  sla: { responseTime: "< 5s" }
});

const bestProvider = providers[0];
const quote = await marketplaceAgent.negotiatePrice(bestProvider, {
  quantity: 100,
  commitmentPeriod: "30d"
});

const contract = await marketplaceAgent.acceptQuote(quote);
```

### Gateway Agent

**Purpose:** Manage cross-chain USDC balances via Circle Gateway

**Capabilities:**
```typescript
interface GatewayAgentCapabilities {
  // Balance management
  getUnifiedBalance(): Promise<USDCBalance>;
  getBalanceByChain(): Promise<ChainBalances>;

  // Cross-chain payments
  sendCrosschainPayment(params: CrosschainPayment): Promise<TxHash>;

  // Optimization
  optimizeLiquidity(target: LiquidityTarget): Promise<RebalancePlan>;
  executeRebalance(plan: RebalancePlan): Promise<TxHash[]>;
}
```

**Example Usage:**
```typescript
// Pay a provider on Ethereum from Arc balance
const gatewayAgent = new GatewayAgent(walletAddress);
const unifiedBalance = await gatewayAgent.getUnifiedBalance();
console.log(`Total USDC: $${unifiedBalance.total}`);

await gatewayAgent.sendCrosschainPayment({
  to: "0xProviderAddressOnEthereum",
  amount: 50,
  targetChain: "ethereum",
  sourceChain: "arc" // Use Arc balance
});
```

### Negotiator Agent

**Purpose:** Optimize pricing and contract terms

**Capabilities:**
```typescript
interface NegotiatorAgentCapabilities {
  // Price discovery
  discoverMarketPrice(service: Service): Promise<PriceRange>;

  // Negotiation strategies
  negotiateFixed(provider: Provider, target: number): Promise<Quote>;
  negotiateVolume(provider: Provider, quantity: number): Promise<Quote>;
  negotiateSubscription(provider: Provider, term: string): Promise<Quote>;

  // Contract optimization
  optimizeTerms(contract: Contract): Promise<Contract>;
}
```

### Compliance Agent

**Purpose:** Monitor transactions and ensure regulatory compliance

**Capabilities:**
```typescript
interface ComplianceAgentCapabilities {
  // Transaction screening
  screenTransaction(tx: Transaction): Promise<ComplianceCheck>;

  // Reporting
  generateAuditTrail(period: DateRange): Promise<AuditReport>;
  exportTransactions(format: "csv" | "json"): Promise<File>;

  // Risk scoring
  scoreCounterparty(address: string): Promise<RiskScore>;
  setRiskPolicy(policy: RiskPolicy): Promise<void>;
}
```

### Analytics Agent

**Purpose:** Analyze spending patterns and optimize costs

**Capabilities:**
```typescript
interface AnalyticsAgentCapabilities {
  // Spending analysis
  analyzeSpending(period: DateRange): Promise<SpendingAnalysis>;
  identifyOptimizations(): Promise<Optimization[]>;

  // ROI calculation
  calculateROI(investment: Investment): Promise<ROIReport>;

  // Forecasting
  forecastSpending(horizon: string): Promise<Forecast>;
}
```

### Bridge Agent

**Purpose:** Execute cross-chain USDC transfers via CCTP

**Capabilities:**
```typescript
interface BridgeAgentCapabilities {
  // Bridge operations
  bridgeUSDC(params: BridgeParams): Promise<BridgeTx>;

  // Route optimization
  getBestRoute(from: Chain, to: Chain, amount: number): Promise<Route>;

  // Monitoring
  trackBridge(txHash: string): Promise<BridgeStatus>;
}
```

---

## 🚀 Installation

### Prerequisites

- **Node.js** v22.0.0 or higher
- **npm** or **yarn**
- **Circle Developer Account** (create at https://developers.circle.com)
- **Arc Wallet** with testnet USDC (get from faucet)
- **Claude Desktop** (optional, for MCP integration)

### Step 1: Clone the Repository

```bash
git clone https://github.com/Tuesdaythe13th/NerdCabalMCP.git
cd NerdCabalMCP
git checkout claude/agentic-commerce-usdc-KprTA
```

### Step 2: Install Dependencies

```bash
# Install MCP server dependencies
cd mcp-server
npm install
npm run build

# Return to root
cd ..
```

### Step 3: Configure Environment

```bash
# Copy environment template
cp .env.example .env

# Edit .env with your credentials
nano .env
```

**Required Environment Variables:**

```bash
# Circle API
CIRCLE_API_KEY=your_circle_api_key_here
CIRCLE_ENTITY_SECRET=your_entity_secret_here

# Arc Network
ARC_RPC_URL=https://rpc.arc-testnet.com
ARC_CHAIN_ID=12345

# Wallet Configuration
TREASURY_ADDRESS=0x...
TREASURY_PRIVATE_KEY=0x... # Never commit this!

# Gateway Configuration
GATEWAY_API_URL=https://gateway-api.circle.com
GATEWAY_API_KEY=your_gateway_api_key_here

# x402 Configuration (if available)
X402_FACILITATOR_URL=https://x402-facilitator.circle.com
```

### Step 4: Deploy Smart Contracts (Optional)

```bash
# Deploy treasury and escrow contracts to Arc testnet
npm run deploy:contracts

# This will output contract addresses - add them to .env
```

### Step 5: Configure Claude Desktop (for MCP)

Edit `~/Library/Application Support/Claude/claude_desktop_config.json` (macOS) or equivalent:

```json
{
  "mcpServers": {
    "nerdcabal-commerce": {
      "command": "node",
      "args": ["/absolute/path/to/NerdCabalMCP/mcp-server/dist/index.js"],
      "env": {
        "CIRCLE_API_KEY": "your_api_key",
        "ARC_RPC_URL": "https://rpc.arc-testnet.com"
      }
    }
  }
}
```

Restart Claude Desktop.

---

## ⚡ Quick Start

### Example 1: Send a Payment

```typescript
import { PaymentAgent } from "@nerdcabal/arc-commerce-sdk";

const agent = new PaymentAgent({
  rpcUrl: process.env.ARC_RPC_URL,
  privateKey: process.env.TREASURY_PRIVATE_KEY
});

// Send 5 USDC to an API provider
const tx = await agent.sendPayment(
  "0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb",
  5.0,
  "Payment for AI inference"
);

console.log(`Transaction: ${tx.hash}`);
console.log(`View on Arc Explorer: https://explorer.arc-testnet.com/tx/${tx.hash}`);
```

### Example 2: Purchase API Service

```typescript
import { MarketplaceAgent, TreasuryAgent } from "@nerdcabal/arc-commerce-sdk";

// Initialize agents
const treasury = new TreasuryAgent(treasuryAddress);
const marketplace = new MarketplaceAgent(treasury);

// Find image generation service
const providers = await marketplace.findService({
  type: "image-generation",
  maxPrice: 0.10
});

// Purchase service
const quote = await marketplace.negotiatePrice(providers[0], {
  quantity: 10
});

const contract = await marketplace.acceptQuote(quote);

// Execute service
const result = await marketplace.executeService(contract, {
  prompt: "A futuristic city on Mars",
  style: "photorealistic"
});

console.log(`Image URL: ${result.url}`);
```

### Example 3: Cross-Chain Payment via Gateway

```typescript
import { GatewayAgent } from "@nerdcabal/arc-commerce-sdk";

const gateway = new GatewayAgent({
  apiKey: process.env.GATEWAY_API_KEY,
  walletAddress: treasuryAddress
});

// Check unified balance
const balance = await gateway.getUnifiedBalance();
console.log(`Total USDC across all chains: $${balance.total}`);

// Pay provider on Ethereum from Arc balance
await gateway.sendCrosschainPayment({
  to: "0xProviderOnEthereum",
  amount: 100,
  targetChain: "ethereum",
  sourceChain: "arc"
});
```

### Example 4: x402 Micropayment

```typescript
import { X402Client } from "@nerdcabal/x402-client";

const client = new X402Client({
  facilitatorUrl: process.env.X402_FACILITATOR_URL,
  paymentAgent: paymentAgent
});

// Call a paid API
const response = await client.fetch("https://api.example.com/expensive-endpoint", {
  method: "POST",
  body: JSON.stringify({ data: "..." }),
  paymentOptions: {
    maxPrice: 0.01, // Max $0.01 per request
    autoApprove: true
  }
});

const data = await response.json();
console.log(`Paid ${response.paymentAmount} USDC for API call`);
```

### Example 5: Using via Claude Desktop (MCP)

In Claude Desktop, you can now use natural language:

```
User: "Purchase 1000 tokens of GPT-4 API access using our treasury"

Claude: I'll use the marketplace agent to find and purchase GPT-4 API access.
        [Calls marketplace-agent tool]
        Found 3 providers. Best price: $0.05 per 1000 tokens from OpenRouter.
        [Calls treasury-agent to approve spending]
        [Calls payment-agent to execute transaction]

        ✅ Purchase complete!
        Transaction: 0xabc123...
        API Key: sk-proj-...
        Valid until: 2026-02-24
```

---

## 🎥 Transaction Flow Demo

### Required: Video Demonstration

Our submission includes a complete video demonstration showing:

1. **Circle Developer Console**
   - Creating a wallet via Circle Wallets API
   - Configuring spending policies
   - Initiating a USDC transfer

2. **Arc Block Explorer**
   - Verifying the transaction on Arc testnet
   - Showing sub-second finality
   - Displaying USDC gas fees

3. **End-to-End Flow**
   - Agent discovers API service
   - Negotiates pricing
   - Executes payment via Gateway
   - Receives service delivery
   - Verifies completion onchain

**Video Link:** [YouTube/Loom Link - To be added]

### Step-by-Step Transaction Flow

```
┌─────────────────────────────────────────────────────────────┐
│ 1. Service Discovery                                        │
│    Marketplace Agent queries available services             │
└─────────────────────────┬───────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│ 2. Price Negotiation                                        │
│    Negotiator Agent optimizes terms                         │
└─────────────────────────┬───────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│ 3. Compliance Check                                         │
│    Compliance Agent screens transaction                     │
└─────────────────────────┬───────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│ 4. Treasury Approval                                        │
│    Treasury Agent validates against spending policy         │
└─────────────────────────┬───────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│ 5. Payment Execution                                        │
│    Gateway Agent routes payment via Circle Gateway          │
│    → Circle Developer Console shows transaction             │
└─────────────────────────┬───────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│ 6. Onchain Settlement                                       │
│    Payment settles on Arc in < 1 second                     │
│    → Arc Block Explorer shows confirmed transaction         │
└─────────────────────────┬───────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│ 7. Service Delivery                                         │
│    Provider delivers API access                             │
└─────────────────────────┬───────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────┐
│ 8. Verification                                             │
│    Marketplace Agent confirms delivery                      │
│    Analytics Agent updates ROI metrics                      │
└─────────────────────────────────────────────────────────────┘
```

---

## 💬 Circle Product Feedback

### Products Used

1. **Arc (Layer-1 Blockchain)**
2. **Circle Wallets (Programmable Wallets API)**
3. **Circle Gateway (Unified USDC Liquidity)**
4. **Circle CCTP / Bridge Kit (Cross-Chain Transfer Protocol)**
5. **x402 Facilitator (Micropayment Standard)** - Early Access

---

### 1. Arc Blockchain

#### Why We Chose Arc

Arc was the obvious choice for our agentic commerce platform because:

- **Native USDC as Gas**: Eliminates the complexity of managing ETH/native tokens alongside USDC. Agents can budget entirely in dollars.
- **Predictable Fees**: USDC-denominated fees mean agents can accurately forecast costs without worrying about volatile gas tokens.
- **Sub-second Finality**: Critical for real-time commerce where agents need immediate confirmation.
- **EVM Compatibility**: Allowed us to reuse Solidity expertise and existing tooling.

#### What Worked Well

✅ **Deployment Experience**: Using standard Hardhat/Foundry workflows was seamless
✅ **Gas Fee Predictability**: Agents can confidently execute micropayments knowing exact costs
✅ **Transaction Speed**: Sub-second finality enables true real-time commerce
✅ **Block Explorer**: Arc testnet explorer provided excellent transaction visibility
✅ **Faucet**: Easy to get testnet USDC for development

#### What Could Be Improved

⚠️ **Documentation Gaps**:
- Limited examples of smart contract patterns optimized for USDC-as-gas
- Would benefit from Arc-specific best practices guide (e.g., gas optimization strategies)
- No official SDK/library for TypeScript - we had to use generic ethers.js

⚠️ **Tooling**:
- Missing official Hardhat plugin for Arc-specific features
- Would love a `@circle/arc-sdk` npm package with TypeScript types
- CLI tool for common operations (deploy, verify, interact) would speed development

⚠️ **Testnet Stability**:
- Occasional RPC rate limiting during testing
- Would benefit from multiple RPC endpoints for failover

#### Recommendations

1. **Create Official SDKs**: Publish `@circle/arc-sdk` for TypeScript/JavaScript and `arc-python-sdk`
2. **Enhanced Documentation**: Add "Building on Arc" guide with:
   - Gas optimization patterns for USDC-denominated fees
   - Security best practices for commerce dApps
   - Integration examples with Circle Wallets and Gateway
3. **Developer Tooling**: Build Arc-specific Hardhat plugin and Foundry extensions
4. **Testnet Infrastructure**: Provide public RPC load balancer and dedicated testnet block explorer API
5. **Contract Templates**: Provide audited templates for common patterns:
   - Escrow contracts
   - Subscription managers
   - Marketplace contracts
   - Multi-sig treasuries

**Overall Arc Rating**: 9/10 - Excellent product, would benefit from enhanced developer experience.

---

### 2. Circle Wallets (Programmable Wallets)

#### Why We Chose Circle Wallets

Circle Wallets are essential for autonomous agents because:

- **Programmable Security**: Set spending policies that agents must follow
- **MPC Architecture**: No single point of failure, perfect for high-value treasuries
- **API-First**: Designed for programmatic access, not manual human interaction
- **Enterprise-Grade**: Production-ready with built-in compliance features

#### What Worked Well

✅ **API Design**: Clean, RESTful API with excellent error messages
✅ **Documentation**: Comprehensive API reference with code examples
✅ **MPC Security**: Peace of mind knowing private keys are distributed
✅ **Webhook Support**: Real-time notifications for wallet events
✅ **Multi-Chain Support**: Same wallet works across chains (though we focused on Arc)

#### What Could Be Improved

⚠️ **Policy Engine Limitations**:
- Spending policies are basic (daily limits, allowlists)
- Would love more sophisticated rules:
  - Time-based budgets (monthly, quarterly)
  - Category-based spending (e.g., $100/day for API costs, $50/day for data)
  - Velocity limits (e.g., max 10 transactions per hour)
  - Amount-based approval workflows (auto-approve < $10, require multi-sig > $100)

⚠️ **Agent-Specific Features**:
- No built-in support for agent identity (DID integration would be amazing)
- Missing "agent recovery" flow for compromised agents
- No support for delegated signing (agent authorizes sub-agents)

⚠️ **SDK Gaps**:
- Official SDK is JavaScript-only
- TypeScript types are good but could be auto-generated from OpenAPI spec
- No Python SDK (critical for AI/ML agents often written in Python)
- No Rust SDK (for high-performance agents)

⚠️ **Testing**:
- Testnet wallet creation is sometimes slow (30+ seconds)
- Would benefit from a "mock mode" for local development
- Limited ability to simulate failures for resilience testing

#### Recommendations

1. **Enhanced Policy Engine**:
   ```json
   {
     "policies": [
       {
         "name": "API Budget",
         "category": "api_costs",
         "limits": {
           "daily": 100,
           "monthly": 2000,
           "perTransaction": 10
         },
         "approvalRules": {
           "autoApprove": { "below": 10 },
           "requireApprovers": { "above": 10, "count": 2 }
         }
       }
     ]
   }
   ```

2. **Agent Identity Integration**:
   - Support W3C Decentralized Identifiers (DIDs)
   - Verifiable credentials for agent capabilities
   - Agent authorization chains (parent agent → child agents)

3. **Multi-Language SDKs**:
   - Official Python SDK (`pip install circle-wallets`)
   - Rust SDK for high-performance use cases
   - Go SDK for backend services

4. **Developer Experience**:
   - Local wallet emulator for testing (like Ganache)
   - Wallet factory pattern for creating many wallets quickly
   - Batch operations API (create 100 wallets in one request)

5. **Monitoring & Analytics**:
   - Dashboard for wallet spending patterns
   - Anomaly detection (unusual transaction patterns)
   - Cost optimization recommendations

**Overall Circle Wallets Rating**: 8.5/10 - Excellent foundation, needs agent-specific enhancements.

---

### 3. Circle Gateway (Unified USDC Liquidity)

#### Why We Chose Gateway

Gateway solves a critical problem for autonomous agents:

- **Unified Balance**: Agents don't manage per-chain balances
- **Instant Settlement**: No waiting for cross-chain confirmations
- **Gas Abstraction**: Pay for everything in USDC, even on non-Arc chains
- **Simplified UX**: One API call instead of complex bridge flows

#### What Worked Well

✅ **Concept**: The "unified USDC balance" abstraction is brilliant
✅ **Speed**: Cross-chain payments are dramatically faster than traditional bridges
✅ **API Design**: Clean and intuitive
✅ **Documentation**: Clear explanation of the architecture

#### What Could Be Improved

⚠️ **Early Access Limitations**:
- Limited testnet support during our testing period
- Some features documented but not yet available
- Unclear which chains are supported in production

⚠️ **Cost Transparency**:
- Documentation doesn't clearly explain fee structure
- Hard to predict costs for cross-chain operations
- Would benefit from fee estimation API

⚠️ **Agent Optimization**:
- No API to query current liquidity distribution
- Can't proactively rebalance based on anticipated needs
- Missing "prefetch" mechanism (e.g., "I'll need $500 on Ethereum tomorrow")

⚠️ **Error Handling**:
- Limited guidance on handling cross-chain failures
- What happens if destination chain is congested?
- No retry mechanism documentation

⚠️ **Rate Limits**:
- Unclear what rate limits apply
- No burst capacity documentation
- Agents need to know this for planning

#### Recommendations

1. **Cost Estimation API**:
   ```typescript
   const estimate = await gateway.estimateCrosschainPayment({
     from: "arc",
     to: "ethereum",
     amount: 100
   });
   console.log(`Fee: ${estimate.fee} USDC, ETA: ${estimate.eta}s`);
   ```

2. **Liquidity Management**:
   - API to view current balance distribution
   - Proactive rebalancing based on agent predictions
   - Webhook alerts for low liquidity on specific chains

3. **Advanced Agent Features**:
   - Batch cross-chain payments
   - Scheduled payments ("send $100 to Ethereum daily at 9am UTC")
   - Conditional payments ("if ETH price > $3000, send payment")

4. **Monitoring & Observability**:
   - Dashboard showing cross-chain payment history
   - Latency metrics per chain
   - Success rate analytics

5. **Documentation**:
   - Production chain support matrix
   - Fee structure and pricing
   - Rate limits and quotas
   - Best practices for agents

**Overall Gateway Rating**: 8/10 - Transformative concept, needs production-ready docs and tooling.

---

### 4. Circle CCTP / Bridge Kit

#### Why We Chose CCTP

For scenarios where Gateway wasn't available or optimal:

- **Native USDC**: Burn-and-mint preserves USDC native status
- **Trust-Minimized**: Circle attestations instead of third-party bridges
- **Composable**: Can integrate with DeFi protocols mid-flight

#### What Worked Well

✅ **Reliability**: Attestations are fast and consistent
✅ **Documentation**: Clear explanation of burn-mint mechanism
✅ **Bridge Kit**: Pre-built UI components saved development time
✅ **Security**: Trust-minimized design is perfect for autonomous agents

#### What Could Be Improved

⚠️ **Agent-Specific SDK**:
- Bridge Kit is UI-focused (React components)
- Agents need a headless SDK
- Would love `@circle/cctp-agent-sdk` with:
  - Automatic retry logic
  - Gas optimization
  - Slippage protection
  - Status monitoring

⚠️ **Arc Integration**:
- Documentation focuses on mainnet EVM chains
- Arc-specific examples would help
- Unclear if Arc has any chain-specific considerations

⚠️ **Timing Predictability**:
- Hard to predict exact completion time
- Agents need SLA guarantees for planning
- Would benefit from "estimated completion" API

⚠️ **Fee Optimization**:
- No guidance on optimizing for gas costs
- Could batching help?
- When is Gateway cheaper than CCTP?

#### Recommendations

1. **Headless Agent SDK**:
   ```typescript
   import { CCTPAgent } from "@circle/cctp-agent-sdk";

   const agent = new CCTPAgent({
     sourceChain: "arc",
     autoRetry: true,
     slippageProtection: 0.01
   });

   const transfer = await agent.bridge({
     to: "ethereum",
     amount: 1000,
     recipient: "0x..."
   });

   // Auto-polls until complete
   await transfer.waitForCompletion();
   ```

2. **Cost Comparison Tool**:
   - API that compares CCTP vs Gateway vs direct bridge
   - Recommends optimal route based on amount, urgency, destination

3. **Arc Documentation**:
   - Arc-specific CCTP guide
   - Example contracts for Arc ↔ Ethereum flows
   - Gas optimization tips for Arc

4. **SLA & Predictability**:
   - Real-time completion estimates
   - Historical performance metrics per route
   - Webhook notifications at each stage

**Overall CCTP Rating**: 8/10 - Solid product, needs agent-focused tooling.

---

### 5. x402 Facilitator (Early Access)

#### Why We Chose x402

x402 is the future of micropayments:

- **Web-Native**: Standard HTTP protocol extension
- **Automatic**: No manual payment approvals
- **Micropayments**: Sub-dollar transactions are economical
- **Universal**: Works with any HTTP API

#### What Worked Well

✅ **Vision**: HTTP 402 "Payment Required" is brilliant
✅ **Agent-First**: Designed for autonomous systems
✅ **Simplicity**: Easy conceptual model

#### What Could Be Improved

⚠️ **Early Access Limitations**:
- Documentation is sparse (expected for early access)
- Limited working examples
- Unclear which APIs support x402 currently

⚠️ **Provider Ecosystem**:
- Need more x402-enabled API providers
- Hard to test without real providers
- Would benefit from "x402 Provider Registry"

⚠️ **SDK Maturity**:
- Reference implementation is basic
- Missing advanced features like:
  - Payment bundling (pay once for 100 requests)
  - Subscription mode (unlimited for $X/month)
  - Tiered pricing
  - Refund mechanisms

⚠️ **Verification**:
- Unclear how agents verify service delivery
- What if provider doesn't deliver after payment?
- Need dispute resolution mechanism

#### Recommendations

1. **Comprehensive SDK**:
   ```typescript
   import { X402Client } from "@circle/x402-client";

   const client = new X402Client({
     wallet: circleWallet,
     autoApprove: {
       maxPerRequest: 0.10,
       maxPerDay: 10.00
     },
     bundling: {
       enabled: true,
       bundleSize: 100 // Pay once per 100 requests
     }
   });

   // Automatic payment handling
   const response = await client.fetch("https://api.example.com/data");
   ```

2. **Provider Registry**:
   - Public directory of x402-enabled APIs
   - Provider reputation scores
   - SLA tracking
   - Dispute resolution

3. **Payment Modes**:
   - Pay-per-request (current)
   - Pay-per-bundle (100 requests for $1)
   - Subscription (unlimited for $10/month)
   - Tiered pricing (first 1000 free, then $0.01 each)

4. **Smart Verification**:
   - Escrow integration (pay only after delivery verification)
   - Partial refunds for incomplete/poor service
   - Reputation-based trust (trusted providers get paid upfront)

5. **Developer Tools**:
   - x402 server middleware for API providers
   - Testing tools (mock x402 providers)
   - Analytics dashboard

**Overall x402 Rating**: 7/10 (Early Access) - Huge potential, needs ecosystem development.

---

### General Circle Product Feedback

#### What Circle Does Best

1. **Vision**: Circle understands that stablecoins are the foundation for autonomous economies
2. **Developer-First**: APIs and documentation are clearly designed by developers for developers
3. **Innovation**: Gateway and x402 are genuinely novel solutions to hard problems
4. **Reliability**: Enterprise-grade infrastructure gives confidence for production use
5. **Composability**: Products work well together (Wallets + Gateway + CCTP + Arc)

#### Cross-Product Recommendations

1. **Unified SDK**:
   ```typescript
   import { CircleCommerce } from "@circle/commerce-sdk";

   const commerce = new CircleCommerce({
     apiKey: process.env.CIRCLE_API_KEY,
     wallet: walletConfig,
     gateway: { enabled: true },
     arc: { rpcUrl: "https://rpc.arc.com" }
   });

   // All Circle products unified
   await commerce.payment.send({ to, amount });
   await commerce.gateway.crosschain({ from, to, amount });
   await commerce.x402.fetch(url);
   ```

2. **Agent Templates**:
   - Pre-built agent templates for common use cases
   - "Payment Agent Starter Kit"
   - "Marketplace Agent Template"
   - "Treasury Manager Template"

3. **Testing Infrastructure**:
   - Unified testnet across all products
   - Mock/simulation mode for local development
   - Load testing tools
   - Chaos engineering helpers (simulate failures)

4. **Monitoring & Observability**:
   - Unified dashboard for all Circle products
   - Real-time spending analytics
   - Anomaly detection
   - Cost optimization recommendations

5. **Education & Examples**:
   - "Building Autonomous Commerce Agents" guide
   - Video tutorials for each product
   - Reference implementations (open source)
   - Best practices for production deployment

#### Production Readiness Checklist

For each product, clearly document:

- [ ] Supported chains/networks (mainnet & testnet)
- [ ] Rate limits and quotas
- [ ] SLA guarantees (uptime, latency)
- [ ] Fee structure and pricing
- [ ] Security audit reports
- [ ] Incident response procedures
- [ ] Deprecation policy
- [ ] Migration guides for breaking changes

---

### Summary

Circle's products provide an excellent foundation for building autonomous commerce systems. The combination of Arc (settlement layer), Circle Wallets (custody), Gateway (liquidity), and CCTP (bridging) creates a comprehensive stack.

**Key Strengths:**
- Innovative product vision
- Strong technical architecture
- Developer-friendly APIs

**Key Opportunities:**
- Agent-specific SDKs and tooling
- Enhanced documentation and examples
- Production readiness transparency
- Cross-product integration

**What Would Make Circle the Dominant Platform for Agentic Commerce:**
1. Unified agent SDK across all products
2. Agent identity and authorization framework
3. Provider ecosystem for x402
4. Production-ready documentation and SLAs
5. Advanced policy engine for wallets
6. Cost optimization tools

We're excited to continue building on Circle and look forward to seeing these products mature!

---

## 🛠️ Technical Stack

### Blockchain & Settlement
- **Arc** - EVM-compatible L1 with native USDC
- **Solidity** 0.8.20+ - Smart contract language
- **Hardhat** - Development framework
- **ethers.js** v6 - Blockchain interaction library

### Circle Infrastructure
- **Circle Wallets API** - Programmable wallet custody
- **Circle Gateway** - Cross-chain USDC liquidity
- **Circle CCTP** - Cross-Chain Transfer Protocol
- **x402 Protocol** - HTTP micropayment standard

### Agent Framework
- **Model Context Protocol (MCP)** - Agent communication standard
- **Agent-to-Agent (A2A) Protocol** - Multi-agent coordination
- **Anthropic Design Kit (ADK)** - Agent design patterns
- **Claude API** - LLM for agent intelligence

### Backend
- **Node.js** v22+ - JavaScript runtime
- **TypeScript** v5.7+ - Type-safe development
- **Express** - API server
- **Redis** - Caching and pub/sub

### Frontend (Demo App)
- **React** 18 - UI framework
- **Next.js** 14 - React framework
- **Tailwind CSS** - Styling
- **shadcn/ui** - Component library

### Testing & Quality
- **Jest** - Unit testing
- **Playwright** - E2E testing
- **Hardhat Network** - Smart contract testing
- **Circle Testnet** - Integration testing

---

## 📁 Repository Structure

```
NerdCabalMCP/
├── mcp-server/                      # MCP server implementation
│   ├── src/
│   │   ├── index.ts                 # Main server entry
│   │   ├── agents/                  # Commerce agents
│   │   │   ├── payment-agent.ts
│   │   │   ├── treasury-agent.ts
│   │   │   ├── marketplace-agent.ts
│   │   │   ├── gateway-agent.ts
│   │   │   ├── negotiator-agent.ts
│   │   │   ├── compliance-agent.ts
│   │   │   ├── analytics-agent.ts
│   │   │   └── bridge-agent.ts
│   │   ├── circle/                  # Circle integrations
│   │   │   ├── wallets.ts
│   │   │   ├── gateway.ts
│   │   │   ├── cctp.ts
│   │   │   └── x402.ts
│   │   ├── arc/                     # Arc blockchain
│   │   │   ├── client.ts
│   │   │   ├── contracts.ts
│   │   │   └── utils.ts
│   │   └── types/                   # TypeScript types
│   └── package.json
├── contracts/                       # Smart contracts
│   ├── Treasury.sol                 # Multi-sig treasury
│   ├── Escrow.sol                   # Payment escrow
│   ├── Marketplace.sol              # Service marketplace
│   └── Subscription.sol             # Subscription manager
├── sdk/                             # SDK packages
│   ├── arc-commerce-sdk/            # Main SDK
│   ├── x402-client/                 # x402 client library
│   └── gateway-tools/               # Gateway utilities
├── demo/                            # Demo application
│   ├── app/                         # Next.js app
│   ├── components/                  # React components
│   └── lib/                         # Utilities
├── docs/                            # Documentation
│   ├── ARCHITECTURE.md              # System architecture
│   ├── API.md                       # API reference
│   ├── AGENTS.md                    # Agent documentation
│   ├── DEPLOYMENT.md                # Deployment guide
│   └── CIRCLE_INTEGRATION.md        # Circle product integration
├── scripts/                         # Utility scripts
│   ├── deploy-contracts.ts          # Contract deployment
│   ├── setup-treasury.ts            # Treasury initialization
│   └── test-payment-flow.ts         # Integration tests
├── test/                            # Tests
│   ├── unit/                        # Unit tests
│   ├── integration/                 # Integration tests
│   └── e2e/                         # End-to-end tests
├── .env.example                     # Environment template
├── hardhat.config.ts                # Hardhat configuration
├── package.json                     # Project dependencies
├── tsconfig.json                    # TypeScript configuration
├── AGENTIC_COMMERCE_README.md       # This file
├── SUBMISSION.md                    # Hackathon submission
└── LICENSE                          # MIT License
```

---

## 🤝 Contributing

We welcome contributions! This project is being developed for the Agentic Commerce on Arc hackathon, but we plan to continue development afterward.

### Development Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Write/update tests
5. Run tests (`npm test`)
6. Commit your changes (`git commit -m 'Add amazing feature'`)
7. Push to the branch (`git push origin feature/amazing-feature`)
8. Open a Pull Request

### Code Style

- Follow TypeScript best practices
- Use ESLint and Prettier (configured in repo)
- Write JSDoc comments for public APIs
- Add unit tests for new features

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

All submissions must be open source and MIT licensed per hackathon requirements.

---

## 🙏 Acknowledgments

### Hackathon Partners

- **Circle** - For Arc, USDC, and Circle products
- **lablab.ai** - For hosting the hackathon
- **Google & Google DeepMind** - For Gemini AI support
- **MindsDB SF AI Collective** - For hosting on-site events

### Technologies & Open Source

- **Anthropic** - For Claude API and MCP protocol
- **Hardhat** - For smart contract development
- **ethers.js** - For blockchain interactions
- **OpenZeppelin** - For secure contract libraries

### Community

- Circle Discord community for support
- Arc testnet validators
- Fellow hackathon participants

---

## 📞 Contact & Links

- **GitHub**: https://github.com/Tuesdaythe13th/NerdCabalMCP
- **Demo Video**: [Link to be added]
- **Live Demo**: [Link to be added]
- **Documentation**: https://nerdcabal-commerce.docs.dev (to be published)

### Team

- **Lead Developer**: [Your Name]
- **Architecture**: NerdCabal Team
- **Smart Contracts**: [Team Member]
- **Frontend**: [Team Member]

---

## 🏆 Hackathon Tracks

This submission targets three tracks:

### 🤖 Best Trustless AI Agent

Our treasury and compliance agents demonstrate:
- Multi-sig governance
- Policy-based spending controls
- On-chain audit trails
- Identity verification
- Emergency pause mechanisms

### 🧰 Best Dev Tools

Our SDKs and MCP server provide:
- `@nerdcabal/arc-commerce-sdk` - TypeScript SDK
- `@nerdcabal/x402-client` - x402 client library
- `@nerdcabal/gateway-tools` - Gateway utilities
- MCP server for Claude Desktop integration
- CLI tools for common operations

### 🪙 Best Gateway-Based Micropayments Integration

Our x402 implementation enables:
- Automatic API micropayments
- Usage-based pricing
- Provider verification
- Reputation scoring
- Batched payment optimization

---

## 🚀 What's Next?

### Post-Hackathon Roadmap

1. **Production Deployment** - Deploy to Arc mainnet
2. **Provider Network** - Onboard API providers to x402 marketplace
3. **Mobile SDK** - React Native SDK for mobile agents
4. **Advanced Policies** - ML-based spending optimization
5. **DeFi Integration** - Yield generation for idle treasury funds
6. **Insurance** - Smart contract insurance for agent transactions
7. **Analytics Dashboard** - Real-time monitoring and insights

### Join Us

We're building the infrastructure for autonomous economies. Whether you're:
- An API provider interested in x402 monetization
- A developer building autonomous agents
- An enterprise exploring agentic commerce
- A researcher studying autonomous economic systems

**Get in touch!** We'd love to collaborate.

---

**Built with ❤️ for the Agentic Commerce on Arc Hackathon**
**Powered by Circle, Arc, and USDC**

---

*Last Updated: January 24, 2026*
