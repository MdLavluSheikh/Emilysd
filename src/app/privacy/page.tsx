import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata = {
  title: "Privacy Policy – Emily's Newsletter",
}

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="px-6 py-16">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl font-bold sm:text-4xl">
              Privacy <span className="text-gradient">Policy</span>
            </h1>
            <p className="mt-2 text-sm text-zinc-500">Last updated: June 21, 2026</p>

            <div className="mt-12 space-y-8 text-sm leading-relaxed text-zinc-300">
              <div>
                <h2 className="mb-3 text-lg font-semibold text-white">1. Introduction</h2>
                <p>
                  Emily&apos;s Newsletter (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) operates the website emilys.site.
                  This Privacy Policy explains how we collect, use, and protect your personal information when you subscribe to our newsletter.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-lg font-semibold text-white">2. Data We Collect</h2>
                <p>When you subscribe to our newsletter, we collect only:</p>
                <ul className="mt-2 list-inside list-disc space-y-1 text-zinc-400">
                  <li>Your email address</li>
                  <li>Your name (if provided)</li>
                  <li>Timestamp of subscription</li>
                </ul>
              </div>

              <div>
                <h2 className="mb-3 text-lg font-semibold text-white">3. How We Use Your Data</h2>
                <p>Your information is used exclusively for:</p>
                <ul className="mt-2 list-inside list-disc space-y-1 text-zinc-400">
                  <li>Sending our weekly newsletter via email</li>
                  <li>Delivering occasional updates about our service</li>
                  <li>Improving our content based on subscriber engagement</li>
                </ul>
                <p className="mt-2">We will never sell, rent, or share your personal data with third parties.</p>
              </div>

              <div>
                <h2 className="mb-3 text-lg font-semibold text-white">4. Unsubscribe & Opt-Out</h2>
                <p>
                  Every email we send includes a one-click unsubscribe link at the bottom. You can also
                  unsubscribe at any time by contacting us at{" "}
                  <a href="mailto:hello@emilys.site" className="text-emily-400 underline underline-offset-2">
                    hello@emilys.site
                  </a>
                  .
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-lg font-semibold text-white">5. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your data
                  against unauthorized access, alteration, disclosure, or destruction. All data is
                  stored securely and transmitted over encrypted connections.
                </p>
              </div>

              <div>
                <h2 className="mb-3 text-lg font-semibold text-white">6. Your Rights</h2>
                <p>You have the right to:</p>
                <ul className="mt-2 list-inside list-disc space-y-1 text-zinc-400">
                  <li>Access the personal data we hold about you</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data (right to be forgotten)</li>
                  <li>Withdraw consent at any time (unsubscribe)</li>
                </ul>
              </div>

              <div>
                <h2 className="mb-3 text-lg font-semibold text-white">7. Contact</h2>
                <p>
                  If you have any questions about this Privacy Policy or how we handle your data,
                  please contact us at{" "}
                  <a href="mailto:hello@emilys.site" className="text-emily-400 underline underline-offset-2">
                    hello@emilys.site
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
