import Link from "next/link"

export default function TermsAndConditions() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="py-12 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="heading-lg mb-8">Terms and Conditions</h1>

            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground">
                Last updated: May 15, 2025
              </p>

              <h2>1. Introduction</h2>
              <p>
                Welcome to Nook. These Terms and Conditions govern your use of our website and services. By accessing or using Nook, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access our services.
              </p>

              <h2>2. Definitions</h2>
              <p>
                <strong>"Nook"</strong> refers to our company, our website, mobile application, and services.<br />
                <strong>"Service"</strong> refers to the financial services provided by Nook, including savings and lending features.<br />
                <strong>"User"</strong> refers to any individual who accesses or uses Nook.<br />
                <strong>"Account"</strong> refers to a registered user profile on Nook.
              </p>

              <h2>3. Account Registration</h2>
              <p>
                To use certain features of our Service, you must register for an account. You must provide accurate, current, and complete information during the registration process. You are responsible for safeguarding your account credentials and for any activities or actions under your account.
              </p>

              <h2>4. Financial Services</h2>
              <p>
                Nook provides services that allow you to earn interest on your funds through decentralized finance (DeFi) protocols. By using our services:
              </p>
              <ul>
                <li>You acknowledge that financial investments carry risk</li>
                <li>You understand that past performance is not indicative of future results</li>
                <li>You agree that you are responsible for any tax implications related to earnings</li>
                <li>You acknowledge that digital assets are not legal tender and are not backed by any government</li>
              </ul>

              <h2>5. Risks</h2>
              <p>
                Using Nook involves various risks, including but not limited to:
              </p>
              <ul>
                <li>Market risk: The value of cryptocurrencies and stablecoins may fluctuate</li>
                <li>Technical risk: DeFi protocols may have vulnerabilities despite security audits</li>
                <li>Regulatory risk: Changes in laws or regulations may affect our services</li>
                <li>Operational risk: Technical issues or outages may impact service availability</li>
              </ul>

              <h2>6. Prohibited Activities</h2>
              <p>
                You agree not to:
              </p>
              <ul>
                <li>Use our Service for any illegal purpose</li>
                <li>Attempt to interfere with the proper functioning of the Service</li>
                <li>Bypass any measures we use to restrict access to the Service</li>
                <li>Use the Service to launder money or finance terrorism</li>
                <li>Provide false or misleading information</li>
              </ul>

              <h2>7. Intellectual Property</h2>
              <p>
                The Service and its original content, features, and functionality are owned by Nook and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>

              <h2>8. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Nook shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the Service.
              </p>

              <h2>9. Termination</h2>
              <p>
                We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever, including but not limited to a breach of the Terms.
              </p>

              <h2>10. Changes to Terms</h2>
              <p>
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect.
              </p>

              <h2>11. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at support@nookapp.xyz.
              </p>
            </div>

            <div className="mt-12 border-t pt-8">
              <p className="text-muted-foreground">
                By using Nook, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
              </p>
              <div className="mt-4">
                <Link href="/" className="text-primary hover:underline">
                  Return to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
