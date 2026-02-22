import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions for using ProtonNZ websites and services.",
};

export default function TermsPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
          Terms &amp; Conditions
        </h1>
        <p className="text-sm text-zinc-500 mb-12">
          Last updated: February 2026
        </p>

        <div className="prose prose-invert prose-dark max-w-none space-y-8 text-zinc-300">
          <section>
            <h2 className="text-xl font-semibold text-foreground">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using ProtonNZ websites and services
              (&quot;Services&quot;), operated by Badradio Ltd, you agree to be
              bound by these Terms and Conditions. If you do not agree with
              any part of these terms, please do not use our Services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              2. Description of Services
            </h2>
            <p>
              ProtonNZ provides blockchain-based applications and tools built on
              the XPR Network, including but not limited to decentralized
              exchanges, AI agent registries, social platforms, and developer
              tools. Our Services are provided &quot;as is&quot; and &quot;as available&quot;.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              3. Blockchain Interactions
            </h2>
            <p>
              When using our blockchain applications, you acknowledge that:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Blockchain transactions are irreversible once confirmed.
              </li>
              <li>
                You are responsible for managing your own wallet credentials
                and private keys.
              </li>
              <li>
                We cannot recover lost tokens or reverse transactions.
              </li>
              <li>
                Smart contract interactions carry inherent risks.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              4. Intellectual Property
            </h2>
            <p>
              The content, design, and code of our websites are the property of
              Badradio Ltd unless otherwise stated. Open-source projects are
              licensed under their respective licenses as specified in their
              repositories.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              5. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by New Zealand law, Badradio Ltd
              shall not be liable for any indirect, incidental, special, or
              consequential damages arising from your use of our Services,
              including but not limited to loss of digital assets, data, or
              profits.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              6. No Financial Advice
            </h2>
            <p>
              Nothing on our websites or services constitutes financial,
              investment, or trading advice. All blockchain and cryptocurrency
              activities carry risk. Always do your own research before
              interacting with any decentralized application.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              7. Modifications
            </h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes
              will be effective immediately upon posting to this page. Continued
              use of our Services after changes constitutes acceptance of the
              updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              8. Governing Law
            </h2>
            <p>
              These Terms are governed by the laws of New Zealand. Any disputes
              arising from these Terms or your use of our Services shall be
              subject to the jurisdiction of New Zealand courts.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              9. Contact
            </h2>
            <p>
              For questions about these Terms, please contact us via X
              (@protonnz) or Telegram (@paulprotonnz).
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
