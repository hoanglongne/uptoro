import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutUs() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="heading-xl mb-6">About Us</h1>
            <p className="text-xl mb-8 text-muted-foreground max-w-3xl mx-auto">
              We're a team of former Coinbase builders with the goal to bring you a higher savings rate
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="relative w-52 h-52 mb-6 overflow-hidden rounded-lg">
                <Image
                  src="https://framerusercontent.com/images/ttgTKBBxjwYg3ky5fTKI46LqZE.png"
                  alt="Joey Isaacson - CEO"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="heading-md mb-2">Joey Isaacson</h3>
              <p className="text-primary font-semibold mb-4">CEO & Co-founder</p>
              <p className="text-muted-foreground mb-4">
                Former Coinbase engineer focused on making high-yield savings accessible to everyone.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="relative w-52 h-52 mb-6 overflow-hidden rounded-lg">
                <Image
                  src="https://framerusercontent.com/images/VmQprydZZYonLSIc2K6U9RUPXiU.png"
                  alt="Kenzan Boo - CTO"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="heading-md mb-2">Kenzan Boo</h3>
              <p className="text-primary font-semibold mb-4">CTO & Co-founder</p>
              <p className="text-muted-foreground mb-4">
                Former Coinbase technical lead with expertise in blockchain infrastructure and security.
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="relative w-52 h-52 mb-6 overflow-hidden rounded-lg">
                <Image
                  src="https://framerusercontent.com/images/qln2WLDq69VOKn1cwLcVGh1w.png"
                  alt="Sohail Khanifar - CPO"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="heading-md mb-2">Sohail Khanifar</h3>
              <p className="text-primary font-semibold mb-4">CPO & Co-founder</p>
              <p className="text-muted-foreground mb-4">
                Former Coinbase product leader obsessed with creating intuitive financial products.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="nook-section bg-muted">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-6">Our Mission</h2>
              <p className="text-muted-foreground mb-6">
                We believe everyone should have access to higher savings rates. Traditional banks often provide minimal returns on savings accounts, while the DeFi ecosystem offers much higher yields.
              </p>
              <p className="text-muted-foreground mb-6">
                Our mission is to bridge this gap, making it easy for anyone to access these higher rates without needing to understand the complexities of blockchain technology.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="https://framerusercontent.com/images/GZptuvBVzU8FxyTQtpWHdHO7A.png"
                alt="Nook App Interface"
                width={320}
                height={600}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="nook-section bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">Our Values</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              These core principles guide everything we do at Nook
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col p-6 border rounded-lg">
              <div className="text-primary font-semibold mb-4">01</div>
              <h3 className="heading-sm mb-4">Accessibility</h3>
              <p className="text-muted-foreground">
                We make complex financial systems accessible to everyone, regardless of their technical knowledge.
              </p>
            </div>

            <div className="flex flex-col p-6 border rounded-lg">
              <div className="text-primary font-semibold mb-4">02</div>
              <h3 className="heading-sm mb-4">Transparency</h3>
              <p className="text-muted-foreground">
                We're committed to being open about how our platform works, the risks involved, and where your money goes.
              </p>
            </div>

            <div className="flex flex-col p-6 border rounded-lg">
              <div className="text-primary font-semibold mb-4">03</div>
              <h3 className="heading-sm mb-4">Security</h3>
              <p className="text-muted-foreground">
                Your security is our top priority. We implement the highest standards of protection for your funds and data.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="nook-section bg-muted">
        <div className="container text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="heading-lg mb-6">Join our journey</h2>
            <p className="text-muted-foreground mb-8">
              We're building the future of savings, and we'd love for you to be a part of it.
            </p>
            <Link href="/sign-up">
              <Button className="btn-primary">
                Join waitlist
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
