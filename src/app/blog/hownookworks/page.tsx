import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HowNookWorksBlog() {
  return (
    <main className="flex min-h-screen flex-col">
      <article className="py-12 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <p className="text-primary font-medium mb-2">02 - Better Savings</p>
              <h1 className="heading-lg mb-4">A better way to save</h1>
              <p className="text-muted-foreground">
                By Joey Isaacson, Co-founder and CEO • May 15, 2025
              </p>
            </div>

            <div className="mb-12 aspect-video relative rounded-lg overflow-hidden">
              <Image
                src="https://framerusercontent.com/images/GZptuvBVzU8FxyTQtpWHdHO7A.png"
                alt="Nook App Interface"
                fill
                className="object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <h2>Why we built Nook</h2>
              <p>
                When was the last time you checked the interest rate on your savings account? If you're like most Americans, you're probably earning between 0.01% and 2% annual percentage yield (APY) on your hard-earned money. Meanwhile, inflation continues to eat away at your purchasing power.
              </p>
              <p>
                This disconnect is what inspired us to build Nook. We saw an opportunity to leverage decentralized finance (DeFi) to provide significantly higher returns without taking on excessive risk. Our goal is simple: to help people earn more on their savings.
              </p>

              <h2>The Nook App Experience</h2>
              <p>
                We designed Nook with simplicity in mind. Here's how it works:
              </p>

              <h3>1. Sign Up and Deposit</h3>
              <p>
                After joining the waitlist and creating your account, you can link your bank account or Coinbase account for easy transfers. Deposits are converted to USDC, a digital dollar that maintains a 1:1 value with the US dollar.
              </p>

              <h3>2. Start Earning Automatically</h3>
              <p>
                Once your funds are deposited, they're automatically deployed to Moonwell, our trusted lending protocol. You'll immediately begin earning interest at rates typically around 8.4% APY (based on the last 12 months of performance).
              </p>

              <h3>3. Watch Your Money Grow</h3>
              <p>
                The Nook app provides real-time updates on your earnings. You'll see interest accruing every 16 seconds, with detailed projections of your future earnings based on current rates.
              </p>

              <h3>4. Withdraw Anytime</h3>
              <p>
                Unlike traditional CDs or term deposits, there are no lockup periods with Nook. You can withdraw your funds at any time, and they'll be sent directly back to your linked account.
              </p>

              <div className="my-8 rounded-lg overflow-hidden">
                <Image
                  src="https://framerusercontent.com/images/5DBDlx1Qcv2udhuxihFuCa7yl8.png"
                  alt="Nook App Earnings Screen"
                  width={600}
                  height={400}
                  className="w-full"
                />
              </div>

              <h2>How Nook Outperforms Traditional Savings</h2>
              <p>
                Let's look at a simple comparison. If you put $10,000 in a typical savings account earning 1% APY, after one year you'd have $10,100. With Nook's average rate of 8.4% APY, that same $10,000 would grow to approximately $10,840—that's $740 more in your pocket.
              </p>
              <p>
                This difference becomes even more dramatic over time. After five years:
              </p>
              <ul>
                <li>Traditional savings account at 1% APY: $10,510</li>
                <li>Nook at 8.4% APY: $15,044</li>
              </ul>
              <p>
                That's a difference of $4,534—almost 50% more than your original investment!
              </p>

              <h2>Safe, Secure, and Transparent</h2>
              <p>
                We understand that higher returns often come with higher risks, which is why we've built Nook with security at its core:
              </p>
              <ul>
                <li>Your funds are deployed to Moonwell, which has processed over 258,036 successful transactions without issues</li>
                <li>All loans are overcollateralized, meaning borrowers must put up more assets than they borrow</li>
                <li>We maintain complete transparency about where your money is and how it's earning returns</li>
                <li>Regular audits and a $250,000 bug bounty program ensure the security of the protocol</li>
              </ul>

              <h2>Join the Financial Revolution</h2>
              <p>
                Nook represents a bridge between traditional finance and the innovative world of DeFi. We're making high-yield savings accessible to everyone, regardless of their technical knowledge or crypto experience.
              </p>
              <p>
                As we prepare for our official launch, we invite you to join our waitlist and be among the first to experience what could be the future of savings. Together, we can make your money work harder for you.
              </p>
            </div>

            <div className="mt-16 flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/sign-up">
                <Button className="btn-primary">
                  Join waitlist
                </Button>
              </Link>
              <Link href="/blog/defi-lending">
                <Button variant="outline" className="rounded-full">
                  Learn about DeFi lending
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}
