"use client"

import { useState } from "react"
import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Logo from "../../public/logo.png"
import Image from "next/image"
export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="relative md:sticky top-0 z-50 w-full bg-white">
      <div className="container max-w-7xl mx-auto px-4 md:px-8 flex h-20 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image src={Logo} alt="Logo" width={96} height={96} />
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/sign-up" className="inline-flex">
            <button className="rounded-full bg-[#f1f1f1] text-[#0c056c] transition-all duration-300 hover:bg-[#e9e8e8] text-[13px] px-6 py-2.5 font-bold flex items-center">
              Join waitlist
              <svg className="ml-1.5 h-3 w-3" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </Link>

          {/* Mobile Menu - Hidden on mobile */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="hidden">
              <button className="rounded-md p-1.5">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6H20M4 12H20M4 18H20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="sr-only">Toggle menu</span>
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[385px]">
              <div className="flex flex-col gap-6 pt-10">
                <div className="mb-4">
                  <p className="text-base font-medium">Save more of your money</p>
                </div>
                <Link
                  href="/"
                  className="flex items-center gap-2 px-2 py-1 text-lg font-medium hover:text-[#6eb88e]"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about-us"
                  className="flex items-center gap-2 px-2 py-1 text-lg font-medium hover:text-[#6eb88e]"
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="/blog/defi-lending"
                  className="flex items-center gap-2 px-2 py-1 text-lg font-medium hover:text-[#6eb88e]"
                  onClick={() => setIsOpen(false)}
                >
                  How It Works
                </Link>
                <Link
                  href="/sign-up"
                  className="mt-4"
                  onClick={() => setIsOpen(false)}
                >
                  <button className="w-full rounded-full bg-[#6eb88e] text-white px-4 py-1.5">
                    Join waitlist
                    <svg className="ml-1.5 h-3 w-3 inline" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
