"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface BalanceDisplayProps {
  balance: number
  interestRate: number
  ticker?: string
  time: string
  animated?: boolean
}

const BalanceDisplay = ({ balance, interestRate, ticker = "USDC", time, animated = true }: BalanceDisplayProps) => {
  const [animatedBalance, setAnimatedBalance] = useState(balance)

  useEffect(() => {
    if (!animated) {
      setAnimatedBalance(balance)
      return
    }

    // Calculate tiny increments for a smooth animation effect
    const increment = (balance * interestRate / 100) / (365 * 24 * 60 * 60) // Annual rate broken down to per second
    const interval = setInterval(() => {
      setAnimatedBalance(prev => prev + increment)
    }, 1000) // Update every second

    return () => clearInterval(interval)
  }, [balance, interestRate, animated])

  // Format balance with 4 decimal places
  const formattedBalance = animatedBalance.toFixed(4)
  // Split balance into dollars and cents
  const [dollars, cents] = formattedBalance.split('.')

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg w-full max-w-sm mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="text-xs font-bold text-primary">N</span>
          </div>
          <span className="text-sm font-medium">Nook Savings</span>
        </div>
        <div className="text-xs text-muted-foreground">{time}</div>
      </div>

      <div className="mb-4">
        <div className="text-sm text-muted-foreground mb-1">Current Balance</div>
        <div className="flex items-end">
          <span className="text-3xl font-bold">${dollars}.</span>
          <span className={`text-2xl font-semibold ${animated ? 'text-primary' : ''}`}>{cents}</span>
        </div>
      </div>

      <div className="flex items-center mb-6">
        <div className="h-2 w-2 rounded-full bg-primary mr-2"></div>
        <span className="text-sm">Live rate is {interestRate}% APY</span>
      </div>

      <div className="bg-muted rounded-lg p-3">
        <div className="flex justify-between items-center">
          <div className="text-sm text-muted-foreground">Deposited</div>
          <div className="text-sm font-medium">${balance.toFixed(2)}</div>
        </div>
      </div>
    </div>
  )
}

export function InteractiveAppDemo() {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <Tabs defaultValue="dashboard" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto mb-8 grid-cols-3">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="earnings">Earnings</TabsTrigger>
          <TabsTrigger value="deposit">Deposit</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard" className="mt-0">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2">
              <h3 className="heading-md mb-4">Watch your money grow in real-time</h3>
              <p className="text-muted-foreground mb-6">
                With Nook, you can see your interest accruing every second.
                No need to wait for monthly statements – your earnings are transparent and always accessible.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Live updates every 16 seconds</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Clear breakdown of your balance</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Transparent fee structure (spoiler: zero fees)</span>
                </li>
              </ul>
            </div>

            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="animate-float">
                  <BalanceDisplay
                    balance={805.89}
                    interestRate={8.4}
                    time="9:41 AM"
                  />
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="earnings" className="mt-0">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2">
              <h3 className="heading-md mb-4">Track your growth over time</h3>
              <p className="text-muted-foreground mb-6">
                Nook provides detailed projections and historical performance of your investments.
                Visualize how compound interest will grow your savings over weeks, months, and years.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Interactive growth charts</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Customizable future projections</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Downloadable statements for your records</span>
                </li>
              </ul>
            </div>

            <div className="w-full md:w-1/2 flex justify-center">
              <div className="animate-float">
                <Image
                  src="https://framerusercontent.com/images/5DBDlx1Qcv2udhuxihFuCa7yl8.png"
                  alt="Nook App Earnings Screen"
                  width={300}
                  height={600}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="deposit" className="mt-0">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2">
              <h3 className="heading-md mb-4">Simple deposits and withdrawals</h3>
              <p className="text-muted-foreground mb-6">
                Moving money in and out of Nook is seamless. Connect your bank account or Coinbase account for instant transfers with no hidden fees.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>No minimum deposit requirements</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Withdraw anytime with no penalties</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Simple, secure bank connections</span>
                </li>
              </ul>
            </div>

            <div className="w-full md:w-1/2 flex justify-center">
              <div className="animate-float">
                <Image
                  src="https://framerusercontent.com/images/BXnH998xGI6ChLETanq1edoVZMQ.png"
                  alt="Nook App Deposit Screen"
                  width={300}
                  height={600}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
