import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for ProtonNZ and Badradio Ltd services.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-zinc-500 mb-12">
          Last updated: February 2026
        </p>

        <div className="prose prose-invert prose-dark max-w-none space-y-8 text-zinc-300">
          <section>
            <h2 className="text-xl font-semibold text-foreground">
              1. Introduction
            </h2>
            <p>
              ProtonNZ (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is operated by Badradio Ltd, a New Zealand
              registered company. This Privacy Policy explains how we collect,
              use, and protect your information when you use our websites and
              services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              2. Information We Collect
            </h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-foreground">Usage Data:</strong> We
                collect anonymous usage data through Vercel Analytics, including
                page views, browser type, and general geographic location.
              </li>
              <li>
                <strong className="text-foreground">
                  Blockchain Data:
                </strong>{" "}
                When you interact with our blockchain applications, transaction
                data is recorded on the public XPR Network blockchain.
              </li>
              <li>
                <strong className="text-foreground">
                  Voluntary Information:
                </strong>{" "}
                Any information you voluntarily provide through social media
                interactions or direct communications.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              3. How We Use Information
            </h2>
            <p>We use collected information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Improve our websites and services</li>
              <li>Analyze usage patterns and optimize performance</li>
              <li>Respond to inquiries and provide support</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              4. Cookies and Tracking
            </h2>
            <p>
              Our websites use minimal cookies and tracking. Vercel Analytics
              provides privacy-friendly, anonymous analytics without using
              cookies for tracking individual users.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              5. Third-Party Services
            </h2>
            <p>
              Our services may interact with third-party platforms including the
              XPR Network blockchain, wallet providers, and social media
              platforms. Each of these services has their own privacy policies
              that govern their data practices.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              6. Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational measures to
              protect information. However, no method of electronic transmission
              or storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              7. Your Rights
            </h2>
            <p>
              Under the New Zealand Privacy Act 2020, you have the right to
              access and request correction of your personal information. Contact
              us through the channels listed on our Contact page to exercise
              these rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              8. Contact
            </h2>
            <p>
              For privacy-related inquiries, please contact us via X (@protonnz)
              or Telegram (@paulprotonnz).
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
