import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function DefiLendingBlog() {
  return (
    <main className="flex min-h-screen flex-col">
      <article className="py-12 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <p className="text-primary font-medium mb-2">01 - How Nook works</p>
              <h1 className="heading-lg mb-4">How Nook leverages DeFi</h1>
              <p className="text-muted-foreground">
                By Sohail Khanifar, Co-founder and CPO • May 15, 2025
              </p>
            </div>

            <div className="mb-12 aspect-video relative rounded-lg overflow-hidden">
              <Image
                src="https://framerusercontent.com/images/qln2WLDq69VOKn1cwLcVGh1w.png"
                alt="DeFi lending concept"
                fill
                className="object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <h2>Understanding DeFi Lending</h2>
              <p>
                Decentralized Finance, or DeFi, is revolutionizing the way lending and borrowing work. Unlike traditional banks, DeFi platforms operate on blockchain technology, eliminating intermediaries and creating more efficient, transparent systems.
              </p>
              <p>
                At Nook, we leverage these DeFi protocols to provide you with higher yields than traditional savings accounts. When you deposit funds into your Nook account, we convert them to USDC (a stablecoin pegged 1:1 to the US dollar) and lend them through a trusted protocol called Moonwell.
              </p>

              <h2>How We Generate Higher Returns</h2>
              <p>
                Traditional banks typically offer savings rates around 0.5-2% APY. They take your deposits, lend them out at higher rates (think mortgages at 5-7%), and keep most of the profit. With DeFi lending, we can eliminate these middlemen and inefficiencies.
              </p>
              <p>
                Moonwell has consistently provided returns of 8-10% APY for lenders. These returns come from borrowers who pay interest to access funds for various financial activities. By connecting you directly to these lending markets, we can offer you returns that are 3-4x higher than traditional banks.
              </p>

              <h2>Security and Risk Management</h2>
              <p>
                Safety is our top priority. Here's how we protect your funds:
              </p>
              <ul>
                <li>
                  <strong>Overcollateralization:</strong> All loans on Moonwell are overcollateralized, meaning borrowers must deposit more assets than they borrow (typically 150% or more). This provides a safety buffer against market volatility.
                </li>
                <li>
                  <strong>Smart Contract Auditing:</strong> Moonwell's smart contracts have undergone multiple security audits by leading firms in the industry. Additionally, they maintain a $250,000 bug bounty program with Halborn.
                </li>
                <li>
                  <strong>Risk Analytics:</strong> Our team continuously monitors protocol health metrics, liquidity levels, and market conditions to ensure the safety of user funds.
                </li>
                <li>
                  <strong>Stablecoin Focus:</strong> By using USDC, a regulated stablecoin with transparent reserves, we minimize exposure to crypto market volatility.
                </li>
              </ul>

              <h2>The Nook Advantage</h2>
              <p>
                While DeFi offers incredible financial opportunities, it has historically been difficult for average users to access due to technical complexity. Nook solves this by providing:
              </p>
              <ul>
                <li>A simple, intuitive interface that hides the technical complexity</li>
                <li>Seamless conversions between USD and crypto</li>
                <li>Real-time tracking of your interest earnings</li>
                <li>Institutional-grade security and risk management</li>
                <li>No lockup periods—withdraw your funds anytime</li>
              </ul>

              <h2>Looking Ahead</h2>
              <p>
                As DeFi continues to evolve, we're committed to bringing you the best risk-adjusted returns available. Our team constantly evaluates new protocols and strategies to ensure we're offering optimal solutions while maintaining the highest security standards.
              </p>
              <p>
                By joining Nook, you're not just accessing higher savings rates—you're participating in the future of finance, one that's more open, efficient, and accessible to everyone.
              </p>
            </div>

            <div className="mt-16 flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/sign-up">
                <Button className="btn-primary">
                  Join waitlist
                </Button>
              </Link>
              <Link href="/">
                <Button variant="outline" className="rounded-full">
                  Learn more about Nook
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}
