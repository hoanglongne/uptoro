import Link from "next/link"

export default function PrivacyPolicy() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="py-12 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="heading-lg mb-8">Privacy Policy</h1>

            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground">
                Last updated: May 15, 2025
              </p>

              <h2>1. Introduction</h2>
              <p>
                At Nook, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services. Please read this privacy policy carefully. By continuing to use our service, you acknowledge that you have read and understand this policy.
              </p>

              <h2>2. Information We Collect</h2>
              <p>
                We collect several types of information from and about users of our platform:
              </p>
              <ul>
                <li>
                  <strong>Personal Information:</strong> Name, email address, phone number, and other identifiers you provide when registering for an account.
                </li>
                <li>
                  <strong>Financial Information:</strong> Bank account details, transaction history, and other financial data necessary to provide our services.
                </li>
                <li>
                  <strong>Usage Data:</strong> Information about how you interact with our website and services, including access times, pages viewed, and the routes by which you access our platform.
                </li>
                <li>
                  <strong>Device Information:</strong> Information about the device you use to access our platform, including IP address, browser type, and operating system.
                </li>
              </ul>

              <h2>3. How We Use Your Information</h2>
              <p>
                We use the information we collect for various purposes, including:
              </p>
              <ul>
                <li>To provide and maintain our service</li>
                <li>To process transactions and manage your account</li>
                <li>To verify your identity and comply with regulatory requirements</li>
                <li>To send you important notifications and updates</li>
                <li>To improve our service and develop new features</li>
                <li>To respond to your requests and customer service needs</li>
                <li>To detect, prevent, and address technical issues or fraudulent activities</li>
              </ul>

              <h2>4. How We Share Your Information</h2>
              <p>
                We may share your information with:
              </p>
              <ul>
                <li>
                  <strong>Service Providers:</strong> Third-party companies that perform services on our behalf, such as payment processing, data analysis, and customer service.
                </li>
                <li>
                  <strong>Financial Partners:</strong> Banking institutions and financial services providers necessary for processing transactions.
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law, such as to comply with a subpoena or similar legal process, or to protect our rights, privacy, safety, or property.
                </li>
                <li>
                  <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, your information may be transferred as a business asset.
                </li>
              </ul>

              <h2>5. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>

              <h2>6. Your Privacy Rights</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul>
                <li>The right to access your personal information</li>
                <li>The right to correct inaccurate information</li>
                <li>The right to delete your personal information</li>
                <li>The right to restrict processing of your information</li>
                <li>The right to data portability</li>
                <li>The right to object to processing of your information</li>
              </ul>
              <p>
                To exercise these rights, please contact us using the information provided at the end of this policy.
              </p>

              <h2>7. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to track activity on our platform and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>

              <h2>8. Children's Privacy</h2>
              <p>
                Our service is not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that we have collected personal information from a child under 18, we will take steps to remove that information.
              </p>

              <h2>9. Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>

              <h2>10. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at privacy@nookapp.xyz.
              </p>
            </div>

            <div className="mt-12 border-t pt-8">
              <p className="text-muted-foreground">
                By using Nook, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.
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
