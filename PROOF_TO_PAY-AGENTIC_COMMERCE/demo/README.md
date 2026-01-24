# NerdCabal Arc Commerce - Demo Application

Beautiful interactive demo showcasing autonomous commerce agents on Circle's Arc network.

## 🎨 Demo Features

- **Interactive Payment Flow**: Simulate USDC payments on Arc
- **Multi-Sig Treasury**: View treasury management with spending policies
- **Service Marketplace**: Browse AI services with agent-powered discovery
- **Real-Time Stats**: Live agent status and network statistics
- **Circle Integration**: Links to Circle Developer Console and Arc Explorer

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Build for Production

```bash
# Build optimized production bundle
npm run build

# Start production server
npm start
```

## 🌐 Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Tuesdaythe13th/NerdCabalMCP/tree/claude/agentic-commerce-usdc-KprTA/demo)

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd demo
vercel

# Deploy to production
vercel --prod
```

## 📁 Project Structure

```
demo/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx            # Main demo page
├── styles/
│   └── globals.css         # Global styles and Tailwind
├── public/                 # Static assets
├── package.json            # Dependencies
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── next.config.js          # Next.js configuration
```

## 🎯 Demo Highlights

### 1. Send Payment Tab
- Interactive USDC payment form
- Simulated transaction with realistic delays
- Success state showing:
  - Transaction hash
  - Links to Arc Block Explorer
  - Links to Circle Developer Console
  - Gas usage stats
  - Block confirmation details
  - Sub-second finality

### 2. Treasury Tab
- Treasury balance display
- Spending limits (daily & per-transaction)
- Multi-sig configuration (2-of-3)
- Spending policy rules
- Recent transaction history
- Visual progress bars

### 3. Marketplace Tab
- AI service listings with:
  - Provider name and service type
  - Pricing per unit
  - Star ratings
  - SLA guarantees
- Purchase buttons for each service
- Real-time marketplace discovery

### 4. Agent Status Panel
- 8 active commerce agents
- Transaction counts per agent
- Live status indicators
- Network statistics:
  - Total transactions
  - Total volume
  - Average finality time
  - Gas savings vs. Ethereum

## 🎨 Design Features

### Color Scheme
- **Background**: Dark gradient (gray-900 → blue-900 → gray-900)
- **Primary**: Blue-500 to Cyan-500 gradients
- **Accents**: Green (success), Purple (info), Red (alerts)
- **Glass Effects**: Frosted glass with backdrop blur

### Components
- **Glassmorphism**: Translucent cards with blur effects
- **Gradient Buttons**: Smooth hover transitions
- **Responsive Grid**: Adapts to mobile, tablet, desktop
- **Icon System**: Lucide React icons throughout

### Animations
- Loading spinners during transactions
- Pulse effects on status indicators
- Hover scale transforms
- Smooth color transitions

## 🔗 External Links

The demo includes links to:

- **Arc Block Explorer**: `https://explorer.arc-testnet.com/tx/[hash]`
- **Circle Developer Console**: `https://developers.circle.com/console`
- **Circle Documentation**: `https://developers.circle.com`
- **GitHub Repository**: Your repo URL
- **Circle Discord**: `https://discord.gg/circle`

## 📱 Responsive Design

- **Desktop**: Full 3-column layout
- **Tablet**: 2-column layout
- **Mobile**: Single column, stacked layout

## 🎥 Video Recording Tips

When recording the demo for submission:

1. **Start Clean**: Refresh page before recording
2. **Explain Features**: Voice-over each section
3. **Show Transaction Flow**:
   - Click "Send Payment"
   - Wait for loading animation
   - Show success state with links
   - Click "View on Arc Explorer" (opens in new tab)
   - Click "Circle Console" (opens in new tab)
4. **Highlight Stats**: Show agent status and network metrics
5. **Demo Other Tabs**: Switch to Treasury and Marketplace
6. **Keep It Short**: 3-5 minutes total

## 🛠️ Customization

### Update Transaction Details

Edit `demo/app/page.tsx`:

```typescript
// Change demo transaction hash
const DEMO_TX_HASH = 'your_actual_tx_hash_here';

// Change demo wallet address
const DEMO_WALLET = 'your_wallet_address_here';

// Update Arc Explorer URL for mainnet
const ARC_EXPLORER_URL = 'https://explorer.arc.com';
```

### Add Real API Integration

Replace the `simulateTransaction` function with actual Circle API calls:

```typescript
import { CircleWallets } from '@circle-fin/wallets-sdk';

const sendRealPayment = async () => {
  const wallets = new CircleWallets({
    apiKey: process.env.CIRCLE_API_KEY
  });

  const tx = await wallets.sendTransaction({
    to: recipientAddress,
    amount: amount,
    // ... other params
  });

  setTxHash(tx.hash);
  setSuccess(true);
};
```

## 📊 Analytics

The demo tracks:
- Total transactions (demo: 2,026)
- Total volume (demo: $45,892)
- Average finality (demo: 0.7s)
- Gas saved vs. Ethereum (demo: $127.43)

Update these values with your actual metrics!

## 🐛 Troubleshooting

### Port Already in Use

```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
npm run dev -- -p 3001
```

### Build Errors

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules
npm install

# Rebuild
npm run build
```

### Styling Issues

```bash
# Rebuild Tailwind
npx tailwindcss -i ./styles/globals.css -o ./styles/output.css
```

## 📝 Submission Checklist

For hackathon submission:

- [ ] Demo deployed to Vercel
- [ ] Application URL added to submission
- [ ] Video recorded showing demo features
- [ ] Screenshots captured for slides
- [ ] External links verified (Arc Explorer, Circle Console)
- [ ] Responsive design tested on mobile/tablet/desktop
- [ ] Loading states work correctly
- [ ] All tabs functional
- [ ] GitHub repository public

## 🎬 Next Steps

1. **Test Locally**: Run `npm run dev` and verify everything works
2. **Deploy**: Push to Vercel for production hosting
3. **Record Video**: Screen capture the demo in action
4. **Take Screenshots**: Capture for slide deck
5. **Submit**: Add demo URL to hackathon submission

---

**Built with Next.js 14, React 18, Tailwind CSS 3, and TypeScript**

**For Agentic Commerce on Arc Hackathon 2026**
