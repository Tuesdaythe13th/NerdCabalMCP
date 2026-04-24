# Video Presentation Script - NerdCabal Arc Commerce

**Duration:** 3-5 minutes
**Format:** MP4
**Resolution:** 1920x1080 (Full HD)

---

## 🎬 Video Structure

### Opening (0:00 - 0:30)

**[Screen: Title slide with NerdCabal logo]**

**Narrator:**
> "Hi! I'm presenting NerdCabal Commerce Platform - an autonomous AI agent system for decentralized commerce built on Circle's Arc network with USDC."

**[Transition to problem slide]**

> "The problem: Traditional commerce requires constant human intervention. Micropayments are uneconomical. Cross-chain complexity limits autonomy."

---

### Solution Overview (0:30 - 1:00)

**[Screen: Architecture diagram]**

**Narrator:**
> "Our solution: 8 specialized AI agents that autonomously discover, negotiate, purchase, and deliver services using USDC on Arc."

**[Highlight each component]**

> "We integrate five Circle products:"
> - "Arc - for settlement with sub-second finality"
> - "Circle Wallets - for MPC-secured custody"
> - "Circle Gateway - for unified cross-chain liquidity"
> - "CCTP - for native USDC bridging"
> - "And Proof to Pay - for web-native micropayments"

---

### Live Demo - Part 1: Payment Agent (1:00 - 2:00)

**[Screen: Switch to demo application at localhost:3000]**

**Narrator:**
> "Let me show you the live demo. Here's our commerce platform interface."

**[Click on demo URL]**

> "First, let's send a USDC payment on Arc using our Payment Agent."

**[Show the payment form]**

> "We're sending 10 USDC to an AI inference provider. Notice the recipient address, amount, and memo fields."

**[Click "Send Payment via Payment Agent" button]**

> "When I click send, the Payment Agent springs into action."

**[Show loading animation]**

> "It's now:"
> - "Validating the transaction"
> - "Checking treasury balance"
> - "Estimating gas costs in USDC"
> - "Signing via Circle Wallets' MPC system"
> - "Broadcasting to Arc network"

**[Success state appears]**

> "Success! Look at these results:"

**[Highlight each metric]**

> - "Transaction hash - unique identifier"
> - "Gas used: just 0.0021 USDC - dramatically cheaper than Ethereum"
> - "Block number: 2,847,291"
> - "Finality: 0.8 seconds - near-instant confirmation"

---

### Live Demo - Part 2: Block Explorers (2:00 - 2:45)

**[Click "View on Arc Explorer" button]**

**Narrator:**
> "Now, let's verify this on-chain. Clicking 'View on Arc Explorer' takes us to the Arc blockchain explorer."

**[New tab opens to Arc Explorer]**

> "Here we can see:"
> - "The transaction details"
> - "Block confirmation"
> - "Gas fees paid in USDC, not ETH"
> - "Smart contract interactions"
> - "Complete transparency"

**[Switch back to demo]**

**[Click "Circle Console" button]**

> "And in the Circle Developer Console, we can see:"
> - "The wallet that initiated this transaction"
> - "Our spending policies in action"
> - "Real-time balance updates"
> - "Transaction history"

**[Return to demo application]**

---

### Live Demo - Part 3: Treasury & Marketplace (2:45 - 3:30)

**[Click on "Treasury" tab]**

**Narrator:**
> "Let's look at our multi-sig treasury. This is where the magic happens for autonomous agents."

**[Highlight treasury features]**

> "Our Treasury Agent manages:"
> - "A balance of $12,847 USDC"
> - "Daily spending limit: $500"
> - "Per-transaction limit: $100"
> - "2-of-3 multi-signature approval for large payments"

**[Scroll to spending policy]**

> "Smart policies ensure safety:"
> - "Auto-approve payments below $10"
> - "Require approval above $50"
> - "Only verified recipients allowed"

**[Click on "Marketplace" tab]**

> "The Marketplace Agent discovers AI services automatically."

**[Show service listings]**

> "Here it found three providers:"
> - "OpenRouter GPT-4 at $0.03 per 1000 tokens"
> - "Replicate Stable Diffusion for images"
> - "Claude API with sub-1-second response time"

**[Highlight ratings and purchase buttons]**

> "Each service shows pricing, SLA guarantees, and star ratings. Agents can autonomously purchase based on requirements."

---

### Technical Architecture (3:30 - 4:00)

**[Screen: Switch to architecture slide]**

**Narrator:**
> "Behind the scenes, we have a sophisticated MCP-based architecture."

**[Highlight layers]**

> "8 specialized agents:"
> - "Payment, Treasury, Marketplace, Gateway"
> - "Negotiator, Compliance, Analytics, and Bridge"

> "All connected via Model Context Protocol, making them accessible through Claude Desktop and any MCP-compatible client."

**[Show smart contracts]**

> "On-chain, we deployed:"
> - "Multi-sig Treasury contract"
> - "Escrow service for safe payments"
> - "Marketplace registry"

---

### Hackathon Tracks & Innovation (4:00 - 4:30)

**[Screen: Tracks slide]**

**Narrator:**
> "We're competing in three tracks:"

**[Highlight each track]**

**1. Best Trustless AI Agent:**
> "Our Treasury and Compliance agents demonstrate true trust-minimization with multi-sig governance, policy enforcement, and on-chain audit trails."

**2. Best Dev Tools:**
> "We built a comprehensive SDK, Proof to Pay client library, MCP server, and CLI tools - making it easy for any developer to build autonomous commerce applications."

**3. Best Gateway-Based Micropayments:**
> "Our Proof to Pay implementation enables automatic micropayments for API calls, making sub-dollar transactions economically viable."

---

### Impact & Future (4:30 - 4:50)

**[Screen: Impact slide]**

**Narrator:**
> "The impact potential is massive:"

> - "Enable autonomous economies where AI agents transact freely"
> - "Democratize access to APIs and services through micropayments"
> - "Reduce friction in cross-border commerce"
> - "Provide infrastructure for the next generation of autonomous systems"

**[Screen: Roadmap slide]**

> "Post-hackathon, we're planning:"
> - "Production deployment on Arc mainnet"
> - "Onboarding API providers to our marketplace"
> - "Mobile SDK for React Native"
> - "DeFi integrations for treasury yield"

---

### Closing (4:50 - 5:00)

**[Screen: Thank you slide with links]**

**Narrator:**
> "Thank you for watching! We're excited about the future of autonomous commerce on Arc."

> "Check out our GitHub repository for the full source code, documentation, and examples."

> "We'd love to hear your feedback and collaborate with developers, API providers, and enterprises interested in agentic commerce."

> "Built with ❤️ for the Agentic Commerce on Arc Hackathon. Powered by Circle."

**[Fade to black]**

---

## 📹 Recording Instructions

### Setup
1. **Screen Resolution**: Set to 1920x1080
2. **Browser**: Use Chrome or Firefox (latest version)
3. **Close Tabs**: Close unnecessary browser tabs
4. **Demo Running**: Have `npm run dev` running at localhost:3000
5. **Pre-open Links**: Have Arc Explorer and Circle Console tabs ready
6. **Audio**: Use good quality microphone, quiet room
7. **Recording Software**: OBS Studio, Loom, or Camtasia

### Recording Settings (OBS Studio)
```
Resolution: 1920x1080
Frame Rate: 30 FPS
Bitrate: 5000 Kbps
Audio: 192 Kbps AAC
Format: MP4
```

### Tips for Great Video

**Voice-Over:**
- Speak clearly and at moderate pace
- Enthusiasm in your voice!
- Pause between sections
- Smile while talking (it comes through!)

**Screen Recording:**
- Move mouse slowly and deliberately
- Highlight important elements with mouse cursor
- Use browser zoom (Cmd/Ctrl + +) for small text
- Keep cursor visible but not distracting

**Pacing:**
- Don't rush - 3-5 minutes is perfect
- Allow time for viewers to see results
- Pause on success states for 2-3 seconds
- Let transactions complete fully

**Editing:**
- Add smooth transitions between sections
- Include background music (low volume, non-distracting)
- Add text overlays for key points
- Highlight important UI elements with circles/arrows
- Include captions for accessibility

### B-Roll Footage Ideas

- Code snippets from GitHub
- Architecture diagrams zooming in/out
- Terminal showing deployment
- Circle logo and Arc logo animations
- Transaction flowing through system diagram

### Background Music Suggestions

- [YouTube Audio Library](https://www.youtube.com/audiolibrary) - Free music
- Look for: "Tech", "Upbeat", "Corporate", "Innovation"
- Keep volume at 10-15% of voice-over
- Fade out during important demonstrations

---

## 🎥 Alternative: Slide-Based Presentation

If you prefer slides over live demo recording:

### Slide 1: Title
- NerdCabal logo
- "Autonomous Commerce on Arc"
- Presenter name

### Slide 2-3: Problem & Solution
- Problem statement with visuals
- Solution overview
- Architecture diagram

### Slide 4-7: Screenshots
- Payment transaction (before, during, after)
- Arc Block Explorer screenshot
- Circle Developer Console screenshot
- Treasury and Marketplace tabs

### Slide 8-9: Technical Details
- Agent architecture
- Smart contracts
- Circle integration points

### Slide 10: Impact
- Use cases
- Market opportunity
- Future vision

### Slide 11: Thank You
- Contact info
- GitHub link
- Demo link

---

## 📊 Video Checklist

Before submitting:

- [ ] Duration: 3-5 minutes ✅
- [ ] Format: MP4 ✅
- [ ] Resolution: 1920x1080 or higher ✅
- [ ] Audio: Clear and professional ✅
- [ ] Shows demo application ✅
- [ ] Shows Circle Developer Console ✅
- [ ] Shows Arc Block Explorer ✅
- [ ] Explains Circle products used ✅
- [ ] Demonstrates transaction flow ✅
- [ ] Includes call-to-action ✅
- [ ] Uploaded to YouTube/Loom ✅
- [ ] Link added to submission ✅

---

## 🔗 Video Upload

### YouTube (Recommended)
1. Create unlisted video
2. Title: "NerdCabal Arc Commerce - Hackathon Demo"
3. Description: Include GitHub link, demo link, hackathon info
4. Tags: "Arc", "Circle", "USDC", "AI Agents", "Web3"
5. Copy video URL

### Loom (Alternative)
1. Record directly in browser
2. Auto-uploads to cloud
3. Get shareable link
4. No editing required

### File Upload
If lablab.ai accepts direct uploads:
1. Export as MP4
2. Max file size: Check submission guidelines
3. Compress if needed (HandBrake)

---

## 💡 Pro Tips

### Make It Memorable
- Start with a hook: "What if AI agents could pay for services autonomously?"
- Use analogies: "Like having a personal assistant that never sleeps"
- End with impact: "This is the future of commerce"

### Show, Don't Tell
- Let the demo speak for itself
- Point out specific numbers (0.8s finality!)
- Highlight cost savings
- Show real transaction hashes

### Polish
- Practice voice-over 2-3 times before recording
- Record in segments, then stitch together
- Remove "ums" and long pauses in editing
- Add fade-in/fade-out for professional touch

---

**Good luck with your video! 🎬**

**Remember: Enthusiasm and clarity matter more than perfection!**
