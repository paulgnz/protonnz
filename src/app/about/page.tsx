import type { Metadata } from "next";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { Shield, Cpu, Globe, Zap, Code, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Paul Grey, XPR Network Consortium member, and the mission behind ProtonNZ and Badradio Ltd.",
};

const values = [
  {
    icon: Shield,
    title: "Trustless Systems",
    description:
      "Building applications where trust is established by code, not intermediaries.",
  },
  {
    icon: Cpu,
    title: "AI + Blockchain",
    description:
      "Pioneering the intersection of artificial intelligence and decentralized infrastructure.",
  },
  {
    icon: Globe,
    title: "Open Source",
    description:
      "Contributing to the open-source ecosystem and sharing tools with the developer community.",
  },
  {
    icon: Zap,
    title: "Zero-Fee Transactions",
    description:
      "Leveraging XPR Network's fee-less architecture for accessible decentralized applications.",
  },
  {
    icon: Code,
    title: "Developer First",
    description:
      "Creating SDKs and tools that make blockchain development accessible to all developers.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description:
      "Actively participating in the XPR Network Consortium to shape the future of the ecosystem.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold tracking-wider uppercase text-brand-purple-light mb-2">
            About
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Meet <span className="gradient-text">Paul Grey</span>
          </h1>
          <p className="text-lg text-zinc-400 leading-relaxed">
            Blockchain developer, XPR Network Consortium member, and founder of
            Badradio Ltd. Based in New Zealand, building decentralized
            applications that push the boundaries of what&apos;s possible on-chain.
          </p>
        </div>

        {/* Bio section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Background
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                Paul Grey is a blockchain developer focused on the XPR Network
                ecosystem. As a member of the XPR Network Consortium, Paul works
                on production-ready decentralized applications spanning DeFi,
                AI agents, social networks, and developer tools.
              </p>
              <p>
                Operating through Badradio Ltd, a New Zealand registered
                company, Paul has built and deployed multiple live applications
                on the XPR Network, from the XPR Agents trustless AI registry
                to Simple DEX, an AMM-powered decentralized exchange.
              </p>
              <p>
                With a focus on combining AI and blockchain technology, Paul is
                pioneering new approaches to AI agent identity, verification,
                and interaction through platforms like Shellbook and the XPR
                Agents SDK.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              XPR Network Consortium
            </h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                The XPR Network is a next-generation blockchain featuring
                zero-fee transactions, WebAuthn-based authentication, and a
                growing ecosystem of decentralized applications.
              </p>
              <p>
                As a Consortium member, Paul contributes to the network&apos;s
                growth through application development, community engagement,
                and ecosystem tooling. The Consortium plays a vital role in
                governance and development of the XPR Network.
              </p>
            </div>

            <GlassCard className="mt-6">
              <h3 className="font-semibold text-foreground mb-2">
                Badradio Ltd
              </h3>
              <p className="text-sm text-zinc-400">
                New Zealand registered company operating all ProtonNZ projects
                and services. Committed to transparency, compliance, and
                building sustainable blockchain infrastructure.
              </p>
            </GlassCard>
          </div>
        </div>

        {/* Mission & Values */}
        <SectionHeading
          label="Mission"
          title="What Drives Us"
          description="Our core values and principles that guide every project we build."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((item, i) => (
            <GlassCard key={i} hover>
              <div className="p-2 rounded-lg bg-brand-purple/10 w-fit mb-4">
                <item.icon className="w-5 h-5 text-brand-purple-light" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-zinc-400">{item.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
}
