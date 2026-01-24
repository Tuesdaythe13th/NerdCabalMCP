'use client';

import { useState } from 'react';
import { Wallet, Send, Shield, TrendingUp, Zap, CheckCircle, ExternalLink, Copy, ArrowRight } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('payment');
  const [txHash, setTxHash] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Demo data
  const DEMO_TX_HASH = '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb1234567890abcdef';
  const DEMO_WALLET = '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063';
  const ARC_EXPLORER_URL = 'https://explorer.arc-testnet.com';

  const simulateTransaction = async () => {
    setLoading(true);
    setSuccess(false);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    setTxHash(DEMO_TX_HASH);
    setSuccess(true);
    setLoading(false);
  };

  const features = [
    {
      icon: <Wallet className="w-6 h-6" />,
      title: "Circle Wallets",
      description: "MPC-secured wallets with programmable policies",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Settlement",
      description: "Sub-second finality on Arc network",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Trust-Minimized",
      description: "Multi-sig treasury with policy controls",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Cross-Chain",
      description: "Gateway-powered unified liquidity",
      color: "from-orange-500 to-red-500"
    }
  ];

  const agents = [
    { name: "Payment Agent", status: "active", txCount: 1247 },
    { name: "Treasury Agent", status: "active", txCount: 89 },
    { name: "Marketplace Agent", status: "active", txCount: 456 },
    { name: "Gateway Agent", status: "active", txCount: 234 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <div>
                <h1 className="text-white font-bold text-xl">NerdCabal Commerce</h1>
                <p className="text-gray-400 text-sm">Autonomous Agents on Arc</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="px-3 py-1.5 bg-green-500/20 border border-green-500/30 rounded-full">
                <span className="text-green-400 text-sm font-medium">Arc Testnet</span>
              </div>
              <div className="px-3 py-1.5 bg-blue-500/20 border border-blue-500/30 rounded-full">
                <span className="text-blue-400 text-sm font-medium">Connected</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white mb-4">
            Autonomous Commerce on{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
              Arc
            </span>
          </h2>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            AI agents that discover, negotiate, and transact using USDC on Circle's Arc network
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Main Demo Section */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Panel - Agent Controls */}
          <div className="lg:col-span-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6">
            <div className="flex space-x-2 mb-6 border-b border-white/10 pb-4">
              <button
                onClick={() => setActiveTab('payment')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  activeTab === 'payment'
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                Send Payment
              </button>
              <button
                onClick={() => setActiveTab('treasury')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  activeTab === 'treasury'
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                Treasury
              </button>
              <button
                onClick={() => setActiveTab('marketplace')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  activeTab === 'marketplace'
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                Marketplace
              </button>
            </div>

            {/* Payment Tab */}
            {activeTab === 'payment' && (
              <div className="space-y-4">
                <h3 className="text-white text-xl font-semibold mb-4">Send USDC Payment on Arc</h3>

                <div>
                  <label className="text-gray-300 text-sm mb-2 block">Recipient Address</label>
                  <input
                    type="text"
                    value="0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb"
                    readOnly
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white font-mono text-sm"
                  />
                </div>

                <div>
                  <label className="text-gray-300 text-sm mb-2 block">Amount (USDC)</label>
                  <input
                    type="number"
                    value="10.00"
                    readOnly
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white"
                  />
                </div>

                <div>
                  <label className="text-gray-300 text-sm mb-2 block">Memo</label>
                  <input
                    type="text"
                    value="Payment for AI inference service"
                    readOnly
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white"
                  />
                </div>

                <button
                  onClick={simulateTransaction}
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Processing Transaction...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Payment via Payment Agent</span>
                    </>
                  )}
                </button>

                {success && txHash && (
                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 space-y-3">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-green-400 font-semibold">Transaction Successful!</span>
                    </div>

                    <div>
                      <p className="text-gray-400 text-sm mb-1">Transaction Hash:</p>
                      <div className="flex items-center space-x-2">
                        <code className="text-white font-mono text-sm bg-black/30 px-3 py-2 rounded flex-1 overflow-hidden text-ellipsis">
                          {txHash}
                        </code>
                        <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                          <Copy className="w-4 h-4 text-gray-400" />
                        </button>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <a
                        href={`${ARC_EXPLORER_URL}/tx/${txHash}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-lg text-blue-400 font-medium transition-colors"
                      >
                        <span>View on Arc Explorer</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <a
                        href="https://developers.circle.com/console"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 rounded-lg text-purple-400 font-medium transition-colors"
                      >
                        <span>Circle Console</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mt-4">
                      <div className="bg-black/30 rounded-lg p-3">
                        <p className="text-gray-400 text-xs mb-1">Gas Used</p>
                        <p className="text-white font-semibold">0.0021 USDC</p>
                      </div>
                      <div className="bg-black/30 rounded-lg p-3">
                        <p className="text-gray-400 text-xs mb-1">Block</p>
                        <p className="text-white font-semibold">2,847,291</p>
                      </div>
                      <div className="bg-black/30 rounded-lg p-3">
                        <p className="text-gray-400 text-xs mb-1">Finality</p>
                        <p className="text-green-400 font-semibold">0.8s</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Treasury Tab */}
            {activeTab === 'treasury' && (
              <div className="space-y-4">
                <h3 className="text-white text-xl font-semibold mb-4">Multi-Sig Treasury</h3>

                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-300">Treasury Balance</span>
                    <span className="text-3xl font-bold text-white">$12,847.32</span>
                  </div>
                  <div className="text-gray-400 text-sm">USDC on Arc Network</div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <p className="text-gray-400 text-sm mb-1">Daily Limit</p>
                    <p className="text-white font-semibold text-lg">$500.00</p>
                    <div className="mt-2 bg-gray-700 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '45%'}}></div>
                    </div>
                    <p className="text-gray-400 text-xs mt-1">$225 / $500 used today</p>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <p className="text-gray-400 text-sm mb-1">Per-TX Limit</p>
                    <p className="text-white font-semibold text-lg">$100.00</p>
                    <div className="mt-2 flex items-center space-x-1">
                      <Shield className="w-4 h-4 text-blue-400" />
                      <span className="text-blue-400 text-xs">2-of-3 Multi-Sig</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-3">Spending Policy</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-lg p-3">
                      <span className="text-gray-300">Auto-approve below</span>
                      <span className="text-green-400 font-semibold">$10.00</span>
                    </div>
                    <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-lg p-3">
                      <span className="text-gray-300">Require approval above</span>
                      <span className="text-yellow-400 font-semibold">$50.00</span>
                    </div>
                    <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-lg p-3">
                      <span className="text-gray-300">Allowed recipients</span>
                      <span className="text-blue-400 font-semibold">Verified Only</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-3">Recent Transactions</h4>
                  <div className="space-y-2">
                    {[
                      { to: 'OpenRouter API', amount: '-$15.00', status: 'Completed', time: '2 min ago' },
                      { to: 'Data Provider', amount: '-$8.50', status: 'Completed', time: '15 min ago' },
                      { from: 'Treasury Deposit', amount: '+$500.00', status: 'Completed', time: '1 hour ago' }
                    ].map((tx, idx) => (
                      <div key={idx} className="flex items-center justify-between bg-white/5 border border-white/10 rounded-lg p-3 hover:bg-white/10 transition-colors">
                        <div>
                          <p className="text-white font-medium">{tx.to || tx.from}</p>
                          <p className="text-gray-400 text-sm">{tx.time}</p>
                        </div>
                        <div className="text-right">
                          <p className={`font-semibold ${tx.amount.startsWith('+') ? 'text-green-400' : 'text-white'}`}>
                            {tx.amount}
                          </p>
                          <p className="text-green-400 text-sm">{tx.status}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Marketplace Tab */}
            {activeTab === 'marketplace' && (
              <div className="space-y-4">
                <h3 className="text-white text-xl font-semibold mb-4">Service Marketplace</h3>

                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                  <p className="text-blue-400 text-sm">
                    🤖 Marketplace Agent discovering AI services...
                  </p>
                </div>

                <div className="space-y-3">
                  {[
                    {
                      name: 'OpenRouter - GPT-4',
                      price: '$0.03',
                      unit: 'per 1K tokens',
                      rating: 4.9,
                      sla: '< 2s response'
                    },
                    {
                      name: 'Replicate - Stable Diffusion',
                      price: '$0.08',
                      unit: 'per image',
                      rating: 4.7,
                      sla: '< 5s response'
                    },
                    {
                      name: 'Anthropic Claude API',
                      price: '$0.025',
                      unit: 'per 1K tokens',
                      rating: 5.0,
                      sla: '< 1s response'
                    }
                  ].map((service, idx) => (
                    <div key={idx} className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 hover:border-blue-500/30 transition-all cursor-pointer">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="text-white font-semibold">{service.name}</h4>
                          <p className="text-gray-400 text-sm">{service.sla}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-green-400 font-bold">{service.price}</p>
                          <p className="text-gray-400 text-xs">{service.unit}</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1">
                          <span className="text-yellow-400">⭐</span>
                          <span className="text-white text-sm">{service.rating}</span>
                        </div>
                        <button className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded-lg transition-colors flex items-center space-x-1">
                          <span>Purchase</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Panel - Agent Status */}
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6">
              <h3 className="text-white font-semibold mb-4 flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Active Agents</span>
              </h3>

              <div className="space-y-3">
                {agents.map((agent, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-white text-sm font-medium">{agent.name}</span>
                      <span className="px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded-full">
                        {agent.status}
                      </span>
                    </div>
                    <p className="text-gray-400 text-xs">{agent.txCount.toLocaleString()} transactions</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6">
              <h3 className="text-white font-semibold mb-4">Network Stats</h3>

              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-gray-400 text-sm">Total Transactions</span>
                    <span className="text-white font-semibold">2,026</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-gray-400 text-sm">Total Volume</span>
                    <span className="text-white font-semibold">$45,892</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-gray-400 text-sm">Avg. Finality</span>
                    <span className="text-green-400 font-semibold">0.7s</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-gray-400 text-sm">Gas Saved</span>
                    <span className="text-blue-400 font-semibold">$127.43</span>
                  </div>
                  <p className="text-gray-500 text-xs">vs. Ethereum mainnet</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">Powered by Circle</h3>
              <p className="text-gray-300 text-sm mb-4">
                Arc, USDC, Wallets, Gateway & x402
              </p>
              <div className="flex space-x-2">
                <a
                  href="https://developers.circle.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-3 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white text-sm text-center transition-colors"
                >
                  Docs
                </a>
                <a
                  href="https://github.com/Tuesdaythe13th/NerdCabalMCP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-3 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white text-sm text-center transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/20 backdrop-blur-md mt-12">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <p className="text-gray-400 text-sm">
              Built for Agentic Commerce on Arc Hackathon 2026
            </p>
            <div className="flex items-center space-x-4">
              <a href="https://developers.circle.com" className="text-gray-400 hover:text-white transition-colors text-sm">
                Circle Docs
              </a>
              <a href="https://github.com/Tuesdaythe13th/NerdCabalMCP" className="text-gray-400 hover:text-white transition-colors text-sm">
                GitHub
              </a>
              <a href="https://discord.gg/circle" className="text-gray-400 hover:text-white transition-colors text-sm">
                Discord
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
