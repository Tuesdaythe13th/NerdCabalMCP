# NerdCabal Commerce Platform - Technical Architecture

**Autonomous Commerce on Arc with USDC - Detailed Technical Design**

---

## Table of Contents

1. [System Overview](#system-overview)
2. [Architecture Principles](#architecture-principles)
3. [Component Architecture](#component-architecture)
4. [Agent Design](#agent-design)
5. [Circle Integration Layer](#circle-integration-layer)
6. [Smart Contract Architecture](#smart-contract-architecture)
7. [Security Model](#security-model)
8. [Transaction Flow](#transaction-flow)
9. [Data Flow](#data-flow)
10. [Scalability & Performance](#scalability--performance)
11. [Deployment Architecture](#deployment-architecture)

---

## 1. System Overview

### Vision

Build a **trust-minimized, autonomous commerce platform** where AI agents can discover, negotiate, purchase, and deliver services using USDC on Arc, with Circle's infrastructure providing enterprise-grade security, liquidity, and compliance.

### Key Goals

1. **Autonomous Operations**: Agents operate without human intervention
2. **Trust-Minimized**: Minimize reliance on centralized parties
3. **Economically Rational**: Optimize for cost and performance
4. **Composable**: Easy integration with existing systems
5. **Production-Ready**: Enterprise-grade reliability and security

### System Capabilities

```
┌─────────────────────────────────────────────────────────────────┐
│                    Agent Capabilities                            │
├─────────────────────────────────────────────────────────────────┤
│  Discovery    → Find services matching requirements             │
│  Negotiation  → Optimize pricing and terms                      │
│  Payment      → Execute USDC transfers on Arc                   │
│  Verification → Confirm service delivery                        │
│  Compliance   → Monitor regulatory requirements                 │
│  Analytics    → Track spending and optimize                     │
│  Treasury     → Manage multi-sig funds with policies            │
│  Bridge       → Move USDC across chains                         │
└─────────────────────────────────────────────────────────────────┘
```

---

## 2. Architecture Principles

### Principle 1: Agent-First Design

Every component is designed for **programmatic access by autonomous agents**, not humans:

- **No UI assumptions**: All operations available via API
- **Deterministic**: Same inputs always produce same outputs
- **Idempotent**: Safe to retry operations
- **Stateless**: Agents don't maintain session state
- **Event-driven**: React to blockchain events

### Principle 2: Trust Minimization

Minimize trust assumptions at every layer:

```
Trust Hierarchy (least trust → most trust)

1. Blockchain Consensus (Arc validators)
   ↓
2. Smart Contracts (audited, open source)
   ↓
3. Circle Infrastructure (regulated, transparent)
   ↓
4. MCP Agents (policy-constrained, auditable)
   ↓
5. External APIs (reputation-scored, escrow-protected)
```

### Principle 3: Economic Rationality

Agents optimize for total cost of ownership:

- **Gas Optimization**: Batch operations, optimize contract calls
- **Liquidity Optimization**: Use Gateway vs CCTP based on cost
- **Price Discovery**: Multi-provider comparison
- **Risk-Adjusted Returns**: Factor in provider reputation

### Principle 4: Composability

Each component is independently usable:

```typescript
// Use agents independently
const payment = await paymentAgent.send({ to, amount });

// Or compose them
const marketplace = new MarketplaceAgent(paymentAgent, treasuryAgent);
const purchase = await marketplace.buy(service);
```

### Principle 5: Fail-Safe Defaults

When in doubt, err on the side of safety:

- **Deny by default**: Explicit approval required
- **Rate limits**: Prevent runaway spending
- **Circuit breakers**: Auto-pause on anomalies
- **Recovery mechanisms**: Graceful degradation

---

## 3. Component Architecture

### 3.1 High-Level Architecture

```
┌───────────────────────────────────────────────────────────────────┐
│                         Client Layer                              │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐              │
│  │   Claude    │  │  Custom     │  │   Mobile    │              │
│  │  Desktop    │  │  Web App    │  │     App     │              │
│  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘              │
└─────────┼────────────────┼────────────────┼────────────────────────┘
          │                │                │
          └────────────────┴────────────────┘
                           │
                           │ MCP Protocol (JSON-RPC 2.0)
                           │
┌───────────────────────────▼───────────────────────────────────────┐
│                      MCP Server Layer                              │
│  ┌────────────────────────────────────────────────────────────┐  │
│  │                   Agent Orchestrator                        │  │
│  │  • Request routing      • Response formatting              │  │
│  │  • Error handling       • Logging & monitoring             │  │
│  └─────────────────────────┬──────────────────────────────────┘  │
│                            │                                      │
│  ┌─────────────────────────▼──────────────────────────────────┐  │
│  │              Agent Layer (8 Core Agents)                    │  │
│  ├────────────────────────────────────────────────────────────┤  │
│  │  Payment   │ Treasury │ Marketplace │ Gateway               │  │
│  │  Negotiator│ Compliance│ Analytics  │ Bridge                │  │
│  └─────────────────────────┬──────────────────────────────────┘  │
└────────────────────────────┼───────────────────────────────────────┘
                             │
                             │ Circle SDKs / ethers.js
                             │
┌─────────────────────────────▼──────────────────────────────────────┐
│                   Circle Infrastructure Layer                       │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐              │
│  │   Circle     │ │   Circle     │ │   Circle     │              │
│  │   Wallets    │ │   Gateway    │ │  Bridge Kit  │              │
│  │     API      │ │     API      │ │   / CCTP     │              │
│  └──────┬───────┘ └──────┬───────┘ └──────┬───────┘              │
│         │                │                │                        │
│  ┌──────▼────────────────▼────────────────▼───────┐              │
│  │         x402 Micropayment Facilitator           │              │
│  └──────────────────────┬──────────────────────────┘              │
└─────────────────────────┼─────────────────────────────────────────┘
                          │
                          │ JSON-RPC / HTTP
                          │
┌──────────────────────────▼────────────────────────────────────────┐
│                     Blockchain Layer                               │
│  ┌────────────────────────────────────────────────────────────┐  │
│  │                    Arc Network (L1)                         │  │
│  │  • EVM-Compatible Smart Contracts                          │  │
│  │  • USDC as Native Gas Token                                │  │
│  │  • Sub-second Finality                                     │  │
│  │  • Deterministic Settlement                                │  │
│  └────────────────────────────────────────────────────────────┘  │
│                                                                    │
│  ┌────────────────────────────────────────────────────────────┐  │
│  │               Smart Contract Layer                          │  │
│  │  Treasury.sol │ Escrow.sol │ Marketplace.sol │ Subscription │  │
│  └────────────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────────────┘
```

### 3.2 MCP Server Architecture

```typescript
// index.ts - Main MCP server entry point

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

// Import agents
import { PaymentAgent } from "./agents/payment-agent.js";
import { TreasuryAgent } from "./agents/treasury-agent.js";
// ... other agents

// Initialize server
const server = new Server({
  name: "nerdcabal-commerce",
  version: "1.0.0"
}, {
  capabilities: {
    tools: {}
  }
});

// Register tools
server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: "send_payment",
      description: "Send USDC payment on Arc",
      inputSchema: {
        type: "object",
        properties: {
          to: { type: "string", description: "Recipient address" },
          amount: { type: "number", description: "Amount in USDC" },
          memo: { type: "string", description: "Payment memo" }
        },
        required: ["to", "amount"]
      }
    },
    // ... other tools
  ]
}));

// Handle tool calls
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  switch (name) {
    case "send_payment":
      return await paymentAgent.sendPayment(args);
    case "create_treasury":
      return await treasuryAgent.createTreasury(args);
    // ... other handlers
  }
});

// Start server
const transport = new StdioServerTransport();
await server.connect(transport);
```

### 3.3 Agent Communication (A2A Protocol)

Agents communicate using the **Agent-to-Agent (A2A) Protocol** from Anthropic Design Kit:

```typescript
interface AgentMessage {
  from: AgentId;
  to: AgentId;
  type: "request" | "response" | "notification";
  payload: any;
  metadata: {
    timestamp: number;
    correlationId: string;
    replyTo?: string;
  };
}

// Example: Marketplace Agent → Payment Agent
const message: AgentMessage = {
  from: "marketplace-agent",
  to: "payment-agent",
  type: "request",
  payload: {
    action: "send_payment",
    params: { to: "0x...", amount: 10 }
  },
  metadata: {
    timestamp: Date.now(),
    correlationId: "purchase-123"
  }
};
```

### 3.4 Data Flow

```
User Request
    │
    ▼
┌────────────────────┐
│   MCP Client       │
│  (Claude Desktop)  │
└─────────┬──────────┘
          │ MCP Protocol
          ▼
┌────────────────────┐
│   MCP Server       │
│  (Orchestrator)    │
└─────────┬──────────┘
          │
          ├──→ Agent Selection (route to appropriate agent)
          │
          ▼
┌────────────────────┐
│   Agent Layer      │
│  (e.g., Marketplace)
└─────────┬──────────┘
          │
          ├──→ Call other agents (A2A protocol)
          │    • Negotiator (price optimization)
          │    • Compliance (transaction screening)
          │    • Treasury (budget check)
          │    • Payment (execute transaction)
          │
          ▼
┌────────────────────┐
│  Circle Layer      │
│  (Wallets, Gateway)│
└─────────┬──────────┘
          │
          ▼
┌────────────────────┐
│  Arc Blockchain    │
│  (Smart Contracts) │
└─────────┬──────────┘
          │
          ▼
    Transaction Confirmed
          │
          ├──→ Events emitted
          │
          ▼
    Agents update state
          │
          ▼
    Response to user
```

---

## 4. Agent Design

### 4.1 Agent Architecture Pattern

Each agent follows this pattern:

```typescript
// Base agent interface
interface IAgent {
  name: string;
  version: string;
  capabilities: string[];

  // Core methods
  initialize(config: AgentConfig): Promise<void>;
  execute(request: AgentRequest): Promise<AgentResponse>;
  shutdown(): Promise<void>;

  // Agent-to-Agent communication
  sendMessage(to: AgentId, message: AgentMessage): Promise<void>;
  receiveMessage(message: AgentMessage): Promise<AgentResponse>;

  // Health & monitoring
  healthCheck(): Promise<HealthStatus>;
  getMetrics(): Promise<Metrics>;
}

// Example: Payment Agent
class PaymentAgent implements IAgent {
  name = "payment-agent";
  version = "1.0.0";
  capabilities = ["send_payment", "batch_payment", "track_payment"];

  constructor(
    private arcClient: ArcClient,
    private circleWallets: CircleWalletsClient
  ) {}

  async sendPayment(params: SendPaymentParams): Promise<PaymentResult> {
    // 1. Validate parameters
    this.validateParams(params);

    // 2. Check balance
    const balance = await this.circleWallets.getBalance();
    if (balance < params.amount) {
      throw new InsufficientBalanceError();
    }

    // 3. Estimate gas
    const gasEstimate = await this.arcClient.estimateGas({
      to: params.to,
      value: params.amount
    });

    // 4. Execute transaction
    const tx = await this.arcClient.sendTransaction({
      to: params.to,
      value: params.amount,
      gasLimit: gasEstimate * 1.1 // 10% buffer
    });

    // 5. Wait for confirmation
    const receipt = await tx.wait();

    // 6. Return result
    return {
      txHash: receipt.transactionHash,
      blockNumber: receipt.blockNumber,
      gasUsed: receipt.gasUsed.toString(),
      status: receipt.status === 1 ? "success" : "failed"
    };
  }
}
```

### 4.2 Agent Lifecycle

```
┌──────────────┐
│ Initialized  │  ← Agent created, config loaded
└──────┬───────┘
       │
       ▼
┌──────────────┐
│    Ready     │  ← Agent ready to receive requests
└──────┬───────┘
       │
       ▼
┌──────────────┐
│  Processing  │  ← Agent executing request
└──────┬───────┘
       │
       ├──→ Success → Return result
       ├──→ Failure → Handle error
       │
       ▼
┌──────────────┐
│    Ready     │  ← Return to ready state
└──────┬───────┘
       │
       ▼
┌──────────────┐
│  Shutdown    │  ← Agent cleanup
└──────────────┘
```

### 4.3 Agent Composition Patterns

#### Pattern 1: Sequential (Pipeline)

```typescript
// Execute agents in sequence
async function purchaseService(service: Service) {
  // Step 1: Negotiate price
  const quote = await negotiatorAgent.negotiate(service);

  // Step 2: Check compliance
  const complianceCheck = await complianceAgent.screen(quote);
  if (!complianceCheck.approved) {
    throw new ComplianceError(complianceCheck.reason);
  }

  // Step 3: Get treasury approval
  const approval = await treasuryAgent.approve(quote);
  if (!approval.approved) {
    throw new BudgetError(approval.reason);
  }

  // Step 4: Execute payment
  const payment = await paymentAgent.send({
    to: quote.provider,
    amount: quote.price
  });

  return payment;
}
```

#### Pattern 2: Parallel (Fan-Out)

```typescript
// Execute agents in parallel
async function findBestProvider(service: Service) {
  const providers = await marketplaceAgent.findProviders(service);

  // Query all providers in parallel
  const quotes = await Promise.all(
    providers.map(provider =>
      negotiatorAgent.getQuote(provider, service)
    )
  );

  // Select best quote
  const bestQuote = quotes.reduce((best, current) =>
    current.price < best.price ? current : best
  );

  return bestQuote;
}
```

#### Pattern 3: Coordinator

```typescript
// Central coordinator manages communication
class OrchestratorAgent {
  async executePurchase(request: PurchaseRequest) {
    // Coordinator manages all sub-agents
    const session = this.createSession(request);

    try {
      // Step 1: Discovery
      const providers = await this.callAgent("marketplace", {
        action: "find_providers",
        params: request.requirements
      });

      // Step 2: Negotiation (parallel)
      const quotes = await this.callAgentsParallel("negotiator",
        providers.map(p => ({ provider: p, service: request.service }))
      );

      // Step 3: Selection
      const bestQuote = this.selectBest(quotes);

      // Step 4: Compliance
      await this.callAgent("compliance", { quote: bestQuote });

      // Step 5: Payment
      const payment = await this.callAgent("payment", {
        to: bestQuote.provider,
        amount: bestQuote.price
      });

      return this.completeSession(session, payment);
    } catch (error) {
      return this.failSession(session, error);
    }
  }
}
```

---

## 5. Circle Integration Layer

### 5.1 Circle Wallets Integration

```typescript
// circle/wallets.ts

import { CircleWalletsClient } from "@circle-fin/wallets-sdk";

export class CircleWalletsService {
  private client: CircleWalletsClient;

  constructor(config: CircleWalletsConfig) {
    this.client = new CircleWalletsClient({
      apiKey: config.apiKey,
      entitySecret: config.entitySecret
    });
  }

  async createWallet(params: CreateWalletParams): Promise<Wallet> {
    const response = await this.client.createWallet({
      name: params.name,
      blockchain: "ARC",
      accountType: "SCA", // Smart Contract Account
      metadata: params.metadata
    });

    return {
      id: response.walletId,
      address: response.address,
      blockchain: response.blockchain
    };
  }

  async setSpendingPolicy(
    walletId: string,
    policy: SpendingPolicy
  ): Promise<void> {
    await this.client.createPolicy({
      walletId,
      type: "spending_limit",
      config: {
        dailyLimit: policy.dailyLimit,
        perTransactionLimit: policy.perTransactionLimit,
        allowedRecipients: policy.allowedRecipients
      }
    });
  }

  async signTransaction(
    walletId: string,
    tx: Transaction
  ): Promise<SignedTransaction> {
    const signature = await this.client.signTransaction({
      walletId,
      transaction: {
        to: tx.to,
        value: tx.value,
        data: tx.data,
        chainId: tx.chainId
      }
    });

    return {
      ...tx,
      signature: signature.signature,
      v: signature.v,
      r: signature.r,
      s: signature.s
    };
  }
}
```

### 5.2 Circle Gateway Integration

```typescript
// circle/gateway.ts

export class CircleGatewayService {
  private apiUrl: string;
  private apiKey: string;

  async getUnifiedBalance(
    walletAddress: string
  ): Promise<UnifiedBalance> {
    const response = await fetch(`${this.apiUrl}/balance`, {
      headers: {
        "Authorization": `Bearer ${this.apiKey}`,
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({ address: walletAddress })
    });

    const data = await response.json();

    return {
      total: data.total,
      byChain: data.chains.reduce((acc, chain) => ({
        ...acc,
        [chain.name]: chain.balance
      }), {})
    };
  }

  async sendCrosschainPayment(
    params: CrosschainPaymentParams
  ): Promise<PaymentResult> {
    const response = await fetch(`${this.apiUrl}/crosschain-transfer`, {
      headers: {
        "Authorization": `Bearer ${this.apiKey}`,
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({
        from: params.sourceChain,
        to: params.targetChain,
        recipient: params.recipient,
        amount: params.amount
      })
    });

    const data = await response.json();

    return {
      transferId: data.id,
      status: data.status,
      estimatedCompletion: data.eta
    };
  }
}
```

### 5.3 CCTP / Bridge Kit Integration

```typescript
// circle/cctp.ts

import { ethers } from "ethers";

export class CCTPService {
  private sourceProvider: ethers.Provider;
  private destinationProvider: ethers.Provider;
  private tokenMessenger: ethers.Contract;

  async bridgeUSDC(params: BridgeParams): Promise<BridgeResult> {
    // 1. Approve TokenMessenger to spend USDC
    const usdc = new ethers.Contract(
      params.sourceUSDCAddress,
      USDC_ABI,
      params.signer
    );

    const approveTx = await usdc.approve(
      this.tokenMessenger.address,
      params.amount
    );
    await approveTx.wait();

    // 2. Call depositForBurn
    const burnTx = await this.tokenMessenger.depositForBurn(
      params.amount,
      params.destinationDomain,
      params.recipient,
      params.sourceUSDCAddress
    );

    const receipt = await burnTx.wait();

    // 3. Extract message bytes from event
    const messageBytes = this.extractMessageBytes(receipt);

    // 4. Wait for Circle attestation
    const attestation = await this.waitForAttestation(messageBytes);

    // 5. Relay to destination chain
    const mintTx = await this.relayToDestination(
      messageBytes,
      attestation,
      params.destinationChain
    );

    return {
      sourceTxHash: receipt.transactionHash,
      destinationTxHash: mintTx.transactionHash,
      amount: params.amount,
      status: "completed"
    };
  }

  private async waitForAttestation(
    messageBytes: string
  ): Promise<string> {
    const messageHash = ethers.keccak256(messageBytes);

    // Poll Circle attestation API
    let attempts = 0;
    while (attempts < 60) { // 5 minutes max
      const response = await fetch(
        `https://iris-api.circle.com/attestations/${messageHash}`
      );

      if (response.status === 200) {
        const data = await response.json();
        return data.attestation;
      }

      await new Promise(resolve => setTimeout(resolve, 5000));
      attempts++;
    }

    throw new Error("Attestation timeout");
  }
}
```

### 5.4 x402 Protocol Integration

```typescript
// circle/x402.ts

export class X402Client {
  private facilitatorUrl: string;
  private paymentAgent: PaymentAgent;

  async fetch(
    url: string,
    options: X402FetchOptions = {}
  ): Promise<X402Response> {
    // 1. Make initial request
    let response = await fetch(url, options);

    // 2. Check if payment required (HTTP 402)
    if (response.status === 402) {
      // 3. Parse payment details from header
      const paymentDetails = this.parsePaymentHeader(
        response.headers.get("X-Payment-Required")
      );

      // 4. Verify price is acceptable
      if (paymentDetails.price > options.maxPrice) {
        throw new Error(`Price ${paymentDetails.price} exceeds max ${options.maxPrice}`);
      }

      // 5. Execute micropayment
      const payment = await this.paymentAgent.sendPayment({
        to: paymentDetails.recipient,
        amount: paymentDetails.price,
        memo: `x402: ${url}`
      });

      // 6. Get payment proof from facilitator
      const proof = await this.getPaymentProof(
        payment.txHash,
        paymentDetails.nonce
      );

      // 7. Retry request with payment proof
      response = await fetch(url, {
        ...options,
        headers: {
          ...options.headers,
          "X-Payment-Proof": proof
        }
      });
    }

    return {
      ...response,
      paymentAmount: response.status === 402
        ? this.parsePaymentHeader(response.headers.get("X-Payment-Required")).price
        : undefined
    };
  }

  private async getPaymentProof(
    txHash: string,
    nonce: string
  ): Promise<string> {
    const response = await fetch(`${this.facilitatorUrl}/verify`, {
      method: "POST",
      body: JSON.stringify({ txHash, nonce })
    });

    const data = await response.json();
    return data.proof;
  }
}
```

---

## 6. Smart Contract Architecture

### 6.1 Treasury Contract

```solidity
// contracts/Treasury.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

/**
 * @title Treasury
 * @dev Multi-sig treasury with policy-based spending controls
 */
contract Treasury is AccessControl {
    bytes32 public constant OWNER_ROLE = keccak256("OWNER_ROLE");
    bytes32 public constant SPENDER_ROLE = keccak256("SPENDER_ROLE");

    IERC20 public immutable usdc;

    struct SpendingPolicy {
        uint256 dailyLimit;
        uint256 perTransactionLimit;
        mapping(address => bool) allowedRecipients;
        bool requireApprovalAbove;
        uint256 approvalThreshold;
    }

    struct Transaction {
        address to;
        uint256 amount;
        string memo;
        uint256 approvals;
        mapping(address => bool) approved;
        bool executed;
        uint256 timestamp;
    }

    SpendingPolicy public policy;
    mapping(uint256 => Transaction) public transactions;
    uint256 public transactionCount;

    uint256 public dailySpent;
    uint256 public lastResetDay;

    event TransactionProposed(uint256 indexed txId, address to, uint256 amount);
    event TransactionApproved(uint256 indexed txId, address approver);
    event TransactionExecuted(uint256 indexed txId, bytes32 txHash);
    event PolicyUpdated();

    constructor(
        address _usdc,
        address[] memory _owners,
        uint256 _dailyLimit,
        uint256 _perTxLimit
    ) {
        usdc = IERC20(_usdc);

        // Grant owner role to all owners
        for (uint256 i = 0; i < _owners.length; i++) {
            _grantRole(OWNER_ROLE, _owners[i]);
        }

        // Set initial policy
        policy.dailyLimit = _dailyLimit;
        policy.perTransactionLimit = _perTxLimit;
        policy.requireApprovalAbove = true;
        policy.approvalThreshold = _perTxLimit / 10; // 10% of per-tx limit

        lastResetDay = block.timestamp / 1 days;
    }

    /**
     * @dev Propose a new transaction
     */
    function proposeTransaction(
        address to,
        uint256 amount,
        string calldata memo
    ) external onlyRole(SPENDER_ROLE) returns (uint256) {
        require(amount <= policy.perTransactionLimit, "Exceeds per-transaction limit");

        // Reset daily counter if new day
        uint256 currentDay = block.timestamp / 1 days;
        if (currentDay > lastResetDay) {
            dailySpent = 0;
            lastResetDay = currentDay;
        }

        require(dailySpent + amount <= policy.dailyLimit, "Exceeds daily limit");

        uint256 txId = transactionCount++;
        Transaction storage txn = transactions[txId];
        txn.to = to;
        txn.amount = amount;
        txn.memo = memo;
        txn.timestamp = block.timestamp;

        emit TransactionProposed(txId, to, amount);

        // Auto-execute if below approval threshold
        if (amount < policy.approvalThreshold) {
            _executeTransaction(txId);
        }

        return txId;
    }

    /**
     * @dev Approve a pending transaction
     */
    function approveTransaction(uint256 txId) external onlyRole(OWNER_ROLE) {
        Transaction storage txn = transactions[txId];
        require(!txn.executed, "Already executed");
        require(!txn.approved[msg.sender], "Already approved");

        txn.approved[msg.sender] = true;
        txn.approvals++;

        emit TransactionApproved(txId, msg.sender);

        // Execute if threshold met (2-of-N multi-sig)
        uint256 requiredApprovals = 2;
        if (txn.approvals >= requiredApprovals) {
            _executeTransaction(txId);
        }
    }

    /**
     * @dev Internal: Execute approved transaction
     */
    function _executeTransaction(uint256 txId) internal {
        Transaction storage txn = transactions[txId];
        require(!txn.executed, "Already executed");

        txn.executed = true;
        dailySpent += txn.amount;

        require(
            usdc.transfer(txn.to, txn.amount),
            "Transfer failed"
        );

        emit TransactionExecuted(txId, keccak256(abi.encode(txId)));
    }

    /**
     * @dev Update spending policy
     */
    function updatePolicy(
        uint256 newDailyLimit,
        uint256 newPerTxLimit,
        uint256 newApprovalThreshold
    ) external onlyRole(OWNER_ROLE) {
        policy.dailyLimit = newDailyLimit;
        policy.perTransactionLimit = newPerTxLimit;
        policy.approvalThreshold = newApprovalThreshold;

        emit PolicyUpdated();
    }

    /**
     * @dev Get treasury balance
     */
    function balance() external view returns (uint256) {
        return usdc.balanceOf(address(this));
    }
}
```

### 6.2 Escrow Contract

```solidity
// contracts/Escrow.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

/**
 * @title Escrow
 * @dev Holds payment until service delivery is confirmed
 */
contract Escrow {
    IERC20 public immutable usdc;

    struct Agreement {
        address buyer;
        address seller;
        uint256 amount;
        string serviceDescription;
        uint256 deadline;
        bool buyerApproved;
        bool sellerDelivered;
        bool completed;
        bool refunded;
    }

    mapping(uint256 => Agreement) public agreements;
    uint256 public agreementCount;

    event AgreementCreated(uint256 indexed agreementId, address buyer, address seller, uint256 amount);
    event ServiceDelivered(uint256 indexed agreementId);
    event PaymentReleased(uint256 indexed agreementId);
    event RefundIssued(uint256 indexed agreementId);

    constructor(address _usdc) {
        usdc = IERC20(_usdc);
    }

    /**
     * @dev Create new escrow agreement
     */
    function createAgreement(
        address seller,
        uint256 amount,
        string calldata serviceDescription,
        uint256 durationDays
    ) external returns (uint256) {
        require(
            usdc.transferFrom(msg.sender, address(this), amount),
            "Transfer failed"
        );

        uint256 agreementId = agreementCount++;
        Agreement storage agreement = agreements[agreementId];

        agreement.buyer = msg.sender;
        agreement.seller = seller;
        agreement.amount = amount;
        agreement.serviceDescription = serviceDescription;
        agreement.deadline = block.timestamp + (durationDays * 1 days);

        emit AgreementCreated(agreementId, msg.sender, seller, amount);

        return agreementId;
    }

    /**
     * @dev Seller marks service as delivered
     */
    function markDelivered(uint256 agreementId) external {
        Agreement storage agreement = agreements[agreementId];
        require(msg.sender == agreement.seller, "Not seller");
        require(!agreement.completed, "Already completed");
        require(block.timestamp <= agreement.deadline, "Deadline passed");

        agreement.sellerDelivered = true;

        emit ServiceDelivered(agreementId);
    }

    /**
     * @dev Buyer approves delivery and releases payment
     */
    function approveAndRelease(uint256 agreementId) external {
        Agreement storage agreement = agreements[agreementId];
        require(msg.sender == agreement.buyer, "Not buyer");
        require(agreement.sellerDelivered, "Not delivered");
        require(!agreement.completed, "Already completed");

        agreement.buyerApproved = true;
        agreement.completed = true;

        require(
            usdc.transfer(agreement.seller, agreement.amount),
            "Transfer failed"
        );

        emit PaymentReleased(agreementId);
    }

    /**
     * @dev Refund buyer if deadline passed without delivery
     */
    function claimRefund(uint256 agreementId) external {
        Agreement storage agreement = agreements[agreementId];
        require(msg.sender == agreement.buyer, "Not buyer");
        require(!agreement.completed, "Already completed");
        require(!agreement.sellerDelivered || block.timestamp > agreement.deadline, "Cannot refund");

        agreement.refunded = true;
        agreement.completed = true;

        require(
            usdc.transfer(agreement.buyer, agreement.amount),
            "Transfer failed"
        );

        emit RefundIssued(agreementId);
    }
}
```

---

## 7. Security Model

### 7.1 Threat Model

**Trust Assumptions:**
1. Arc validators are honest (Byzantine fault tolerance)
2. Circle infrastructure is reliable and secure
3. Smart contracts are correctly implemented (audited)
4. Agents follow programmed policies (no malicious code)

**Attack Vectors:**
1. **Compromised Agent Keys**: Mitigated by MPC wallets, spending limits
2. **Malicious Providers**: Mitigated by escrow, reputation systems
3. **Smart Contract Bugs**: Mitigated by audits, formal verification
4. **Replay Attacks**: Mitigated by nonces, timestamps
5. **Front-Running**: Mitigated by private mempools (if available)
6. **Denial of Service**: Mitigated by rate limits, circuit breakers

### 7.2 Security Controls

```typescript
// Security control layers

// Layer 1: Input Validation
function validatePayment(params: PaymentParams) {
  if (!ethers.isAddress(params.to)) {
    throw new Error("Invalid address");
  }
  if (params.amount <= 0 || params.amount > MAX_AMOUNT) {
    throw new Error("Invalid amount");
  }
  // ... more checks
}

// Layer 2: Authorization
function checkAuthorization(agent: AgentId, action: Action) {
  const policy = getPolicy(agent);
  if (!policy.allows(action)) {
    throw new Error("Unauthorized");
  }
}

// Layer 3: Rate Limiting
class RateLimiter {
  private requests: Map<string, number[]> = new Map();

  checkLimit(key: string, limit: number, window: number): boolean {
    const now = Date.now();
    const requests = this.requests.get(key) || [];

    // Remove old requests
    const recent = requests.filter(t => now - t < window);

    if (recent.length >= limit) {
      return false; // Rate limit exceeded
    }

    recent.push(now);
    this.requests.set(key, recent);
    return true;
  }
}

// Layer 4: Circuit Breaker
class CircuitBreaker {
  private failures = 0;
  private state: "closed" | "open" | "half-open" = "closed";

  async execute<T>(fn: () => Promise<T>): Promise<T> {
    if (this.state === "open") {
      throw new Error("Circuit breaker open");
    }

    try {
      const result = await fn();
      this.onSuccess();
      return result;
    } catch (error) {
      this.onFailure();
      throw error;
    }
  }

  private onFailure() {
    this.failures++;
    if (this.failures >= FAILURE_THRESHOLD) {
      this.state = "open";
      setTimeout(() => {
        this.state = "half-open";
      }, RECOVERY_TIME);
    }
  }

  private onSuccess() {
    this.failures = 0;
    this.state = "closed";
  }
}
```

---

## 8. Transaction Flow

### End-to-End Purchase Flow

```
1. Service Discovery
   │
   ├─→ User: "Find image generation service under $0.10"
   │
   └─→ MarketplaceAgent.findService({
        type: "image-generation",
        maxPrice: 0.10
      })
        │
        ├─→ Query provider registry
        ├─→ Filter by capabilities
        ├─→ Filter by price
        └─→ Return: [Provider1, Provider2, Provider3]

2. Price Negotiation (Parallel)
   │
   └─→ NegotiatorAgent.negotiateAll(providers)
        │
        ├─→ getQuote(Provider1) ────┐
        ├─→ getQuote(Provider2) ────┤
        └─→ getQuote(Provider3) ────┤
                                     │
                                     └─→ Return: Best quote ($0.08)

3. Compliance Check
   │
   └─→ ComplianceAgent.screen(quote)
        │
        ├─→ Check provider reputation
        ├─→ Screen recipient address
        ├─→ Verify transaction limits
        └─→ Return: ✅ Approved

4. Treasury Approval
   │
   └─→ TreasuryAgent.approve(quote)
        │
        ├─→ Check daily budget remaining
        ├─→ Check per-transaction limit
        ├─→ Verify spending policy
        └─→ Return: ✅ Approved

5. Payment Execution
   │
   └─→ PaymentAgent.send({
        to: provider.address,
        amount: 0.08,
        memo: "Image generation"
      })
        │
        ├─→ CircleWallets.signTransaction()
        │    │
        │    ├─→ MPC signing
        │    └─→ Return: Signed TX
        │
        ├─→ ArcClient.sendTransaction()
        │    │
        │    ├─→ Broadcast to Arc network
        │    └─→ Return: TX hash
        │
        └─→ Wait for confirmation
             │
             └─→ Return: Receipt (< 1 second)

6. Service Delivery
   │
   └─→ Provider delivers image
        │
        └─→ Return: { url: "https://cdn.example.com/image.png" }

7. Verification
   │
   └─→ MarketplaceAgent.verifyDelivery(contract, result)
        │
        ├─→ Check image exists
        ├─→ Verify quality
        └─→ Mark contract complete

8. Analytics Update
   │
   └─→ AnalyticsAgent.recordTransaction({
        category: "api_costs",
        provider: "Provider1",
        amount: 0.08,
        service: "image-generation"
      })
        │
        └─→ Update spending metrics
```

---

## 9. Scalability & Performance

### Performance Targets

| Metric | Target | Current |
|--------|--------|---------|
| Transaction Confirmation | < 1s | ~500ms |
| Agent Response Time | < 200ms | ~150ms |
| Throughput | 1000 tx/s | Limited by Arc |
| Cross-chain Settlement (Gateway) | < 5s | ~3s |
| Cross-chain Settlement (CCTP) | < 2min | ~90s |

### Optimization Strategies

1. **Batching**: Group multiple operations
2. **Caching**: Cache provider data, balances
3. **Parallel Execution**: Run independent tasks concurrently
4. **Connection Pooling**: Reuse RPC connections
5. **Gas Optimization**: Optimize contract calls

---

## 10. Deployment Architecture

### Production Deployment

```
┌─────────────────────────────────────────────────────────┐
│                    Load Balancer                         │
│                   (NGINX / HAProxy)                      │
└────────────────┬────────────────────────────────────────┘
                 │
        ┌────────┴────────┐
        │                 │
┌───────▼──────┐  ┌───────▼──────┐
│ MCP Server 1 │  │ MCP Server 2 │  (Horizontal scaling)
└───────┬──────┘  └───────┬──────┘
        │                 │
        └────────┬────────┘
                 │
        ┌────────▼────────┐
        │  Redis Cluster  │  (Shared state, caching)
        └─────────────────┘
                 │
        ┌────────▼────────┐
        │  PostgreSQL     │  (Transaction history, analytics)
        └─────────────────┘
```

---

**Last Updated**: January 24, 2026
**Version**: 1.0.0
**License**: MIT
