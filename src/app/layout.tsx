import "./globals.css"
import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import Header from "@/components/header"
import Link from "next/link"
import { FaTelegram } from "react-icons/fa"

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Uptoro",
  description: "Earn up to 8.4% annual percentage yield (APY) by lending your funds, offering one of the most competitive returns in the market",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={nunito.variable}>
      <body className="font-nunito min-h-screen bg-white antialiased">
        <Header />
        {children}
        <footer className="py-6">
          <div className="container max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
              <div className="flex items-center mb-2 md:mb-0">
                <Link href="/" className="font-bold uppercase text-sm">UPTORO</Link>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-gray-900 hover:text-gray-700 font-medium text-sm">Follow us on</span>
                  <a href="https://twitter.com/nooksavings" className="text-gray-900 hover:text-gray-700 font-medium text-sm">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor" />
                    </svg>
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <a href="https://t.me/nooksavings" className="text-gray-900 hover:text-gray-700 flex items-center font-medium text-sm">
                    Telegram
                    <FaTelegram className="ml-1" size={20} />
                  </a>
                </div>

                <div className="font-medium text-sm text-gray-400">
                  © NOOK {new Date().getFullYear()}
                </div>
              </div>
            </div>

            <div className="mt-8 md:mt-10 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-2 text-sm text-gray-600">
              <Link href="/terms-and-conditions" className="hover:text-black underline font-medium">
                Terms and Conditions
              </Link>
              <div className="hidden md:block text-gray-800">·</div>
              <Link href="/privacy-policy" className="hover:text-black underline font-medium">
                Privacy policy
              </Link>
              <div className="hidden md:block text-gray-800">·</div>
              <Link href="/about-us" className="hover:text-black underline font-medium">
                About us
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
