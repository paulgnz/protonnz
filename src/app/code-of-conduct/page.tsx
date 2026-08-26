import type { Metadata } from "next";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  Shield,
  Server,
  Eye,
  Vote,
  Scale,
  MessageSquare,
  Users,
  Lock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Block Producer Code of Conduct",
  description:
    "ProtonNZ's block producer commitments — independence, infrastructure standards, security, transparency, and governance participation on XPR Network.",
};

const principles = [
  {
    icon: Shield,
    title: "Independence",
    body: "ProtonNZ operates as an independent block producer. We do not engage in vote trading, block producer collusion, or paid voting arrangements. We accept no compensation for votes and disclose the ownership of Proton NZ LTD publicly.",
  },
  {
    icon: Server,
    title: "Infrastructure",
    body: "Our nodes run on dedicated hardware in geographically distributed data centres, monitored 24/7, with automated failover and off-site backups. We publish a canonical bp.json listing every node we operate, and expose real-time latency for every public endpoint on our developers page.",
  },
  {
    icon: Lock,
    title: "Security",
    body: "Producer signing keys are held in offline, air-gapped storage. Public-facing infrastructure is patched on a defined cadence, hardened against common attack vectors, and audited for exposure. We follow responsible disclosure for any vulnerability we discover in the network or in tooling we maintain.",
  },
  {
    icon: Eye,
    title: "Transparency",
    body: "We keep bp.json accurate and current. Ownership, contact details, jurisdiction (New Zealand), and infrastructure regions are all disclosed on this site. Material changes to our operation — new node locations, endpoint changes, ownership shifts — are reflected in bp.json first, then in our public communications.",
  },
  {
    icon: Vote,
    title: "Governance",
    body: "We participate in XPR Network governance in good faith. We vote on referenda, sign multi-sig proposals that advance the network, review protocol upgrades before signing them, and publish our reasoning when a decision materially affects users.",
  },
  {
    icon: Scale,
    title: "Neutrality",
    body: "We do not censor valid transactions. We produce every block we are scheduled to produce, regardless of the parties or contracts involved, unless doing so would violate applicable law or the protocol's own rules.",
  },
  {
    icon: MessageSquare,
    title: "Communication",
    body: "We respond to legitimate community and operator inquiries via the contact channels published on our site. We publish incident reports for outages we are responsible for, and we do not conduct BP business through private, unverifiable channels.",
  },
  {
    icon: Users,
    title: "Community",
    body: "We build and ship open-source tools for the XPR Network ecosystem, contribute to public infrastructure (public API endpoints, snapshots, dev tooling), and support new builders on the network through documentation, blog posts, and direct engagement.",
  },
];

export default function CodeOfConductPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Block Producer"
          title="Code of Conduct"
          description="The commitments ProtonNZ makes as a block producer on XPR Network. This document is referenced from our bp.json and applies to every node and service we operate."
        />

        <div className="grid gap-6 mb-16">
          {principles.map((p) => (
            <GlassCard key={p.title}>
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-brand-purple/10 shrink-0">
                  <p.icon className="w-5 h-5 text-brand-purple-light" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {p.body}
                  </p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        <GlassCard>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Reporting a breach
          </h3>
          <p className="text-sm text-zinc-400 leading-relaxed">
            If you believe ProtonNZ has breached any of the commitments above,
            or you have a security concern about any endpoint we operate,
            please reach out via the{" "}
            <a
              href="/contact"
              className="text-brand-purple-light hover:text-brand-pink-light transition-colors"
            >
              contact page
            </a>
            . We treat these reports seriously and will acknowledge receipt
            within one business day.
          </p>
        </GlassCard>
      </div>
    </div>
  );
}
