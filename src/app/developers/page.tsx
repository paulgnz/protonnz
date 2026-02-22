import type { Metadata } from "next";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { ExternalLink, BookOpen, GitBranch, Package, Terminal, FileCode } from "lucide-react";

export const metadata: Metadata = {
  title: "Developers",
  description:
    "Developer resources, SDKs, documentation, and GitHub repositories for XPR Network projects by ProtonNZ.",
};

const resources = [
  {
    icon: Package,
    title: "XPR Agents SDK",
    description:
      "TypeScript/JavaScript SDK for building and integrating AI agents into the XPR Agents ecosystem. Includes agent registration, discovery, and escrow payment utilities.",
    links: [
      { label: "Documentation", href: "https://agents.protonnz.com" },
      { label: "GitHub", href: "https://github.com/paulgnz" },
    ],
  },
  {
    icon: Terminal,
    title: "Smart Contract Examples",
    description:
      "Open-source smart contract templates and examples for the XPR Network. Includes AMM contracts, token contracts, and agent registry contracts.",
    links: [
      { label: "GitHub", href: "https://github.com/paulgnz" },
    ],
  },
  {
    icon: FileCode,
    title: "Proton Link Utilities",
    description:
      "Utility libraries and tools for working with Proton Link and the XPR Network. Simplify wallet integration and transaction signing.",
    links: [
      { label: "Proton Link", href: "https://proton.link" },
    ],
  },
];

const guides = [
  {
    title: "Getting Started with XPR Network",
    description: "Learn the basics of XPR Network development, from setting up your environment to deploying your first smart contract.",
  },
  {
    title: "Building AI Agents on XPR",
    description: "A comprehensive guide to creating, registering, and managing AI agents using the XPR Agents platform.",
  },
  {
    title: "DeFi Development on XPR",
    description: "Build decentralized financial applications leveraging XPR Network's zero-fee transactions and fast finality.",
  },
];

export default function DevelopersPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Developers"
          title="Build on XPR Network"
          description="SDKs, documentation, and resources to help you build decentralized applications on the XPR Network."
        />

        {/* SDKs & Libraries */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {resources.map((resource, i) => (
            <GlassCard key={i} hover>
              <div className="p-2 rounded-lg bg-brand-purple/10 w-fit mb-4">
                <resource.icon className="w-5 h-5 text-brand-purple-light" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {resource.title}
              </h3>
              <p className="text-sm text-zinc-400 mb-4">
                {resource.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {resource.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-brand-purple-light hover:text-brand-pink-light transition-colors"
                  >
                    {link.label}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Guides */}
        <SectionHeading
          label="Guides"
          title="Developer Guides"
          description="Step-by-step guides to help you get started with XPR Network development."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {guides.map((guide, i) => (
            <GlassCard key={i} hover>
              <div className="p-2 rounded-lg bg-brand-purple/10 w-fit mb-4">
                <BookOpen className="w-5 h-5 text-brand-purple-light" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {guide.title}
              </h3>
              <p className="text-sm text-zinc-400">{guide.description}</p>
            </GlassCard>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center glass rounded-xl p-12">
          <div className="p-3 rounded-lg bg-brand-purple/10 w-fit mx-auto mb-4">
            <GitBranch className="w-6 h-6 text-brand-purple-light" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-3">
            Open Source
          </h3>
          <p className="text-zinc-400 max-w-lg mx-auto mb-6">
            Our projects are open source. Explore the code, contribute, or fork
            to build your own applications on the XPR Network.
          </p>
          <Button
            href="https://github.com/paulgnz"
            external
            size="lg"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View on GitHub
          </Button>
        </div>
      </div>
    </div>
  );
}
