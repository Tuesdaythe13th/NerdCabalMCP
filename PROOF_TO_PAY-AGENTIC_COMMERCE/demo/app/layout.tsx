import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NerdCabal Arc Commerce | Autonomous AI Agents',
  description: 'Autonomous AI agents for decentralized commerce on Circle Arc with USDC',
  keywords: 'Arc, Circle, USDC, AI Agents, Autonomous Commerce, Blockchain, Web3',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
