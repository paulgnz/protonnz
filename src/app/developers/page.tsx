import type { Metadata } from "next";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import {
  ExternalLink,
  BookOpen,
  GitBranch,
  Package,
  Terminal,
  FileCode,
  Server,
  Lock,
  Zap,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Developers",
  description:
    "SDKs, open-source repositories, public API nodes, and docs for building on XPR Network and PulseVM — from ProtonNZ.",
};

const resources = [
  {
    icon: Package,
    title: "XPR Agents",
    description:
      "Trustless AI agent registry on XPR Network — identity, reputation, validation, and escrow contracts. TypeScript SDK plus the OpenClaw MCP plugin exposing 55 tools to agents.",
    links: [
      { label: "GitHub", href: "https://github.com/XPRNetwork/xpr-agents" },
      { label: "xpragents.com", href: "https://xpragents.com" },
    ],
  },
  {
    icon: Terminal,
    title: "Pulse Cutover",
    description:
      "Programmatic Antelope → PulseVM cutover agent. BP / API / Hyperion modes, snapshot ceremony with byte-exact verification, zero read downtime, federated history continuity. Rehearsed 22/22 against live XPR testnet state.",
    links: [
      { label: "GitHub", href: "https://github.com/paulgnz/pulse-cutover" },
    ],
  },
  {
    icon: FileCode,
    title: "PulseVM Docs",
    description:
      "Developer and institutional docs for PulseVM — named accounts, native multisig, sub-second finality, no-gas resource model. The open-source execution layer behind A-Chain.",
    links: [
      { label: "pulsevm.dev", href: "https://pulsevm.dev" },
    ],
  },
  {
    icon: FileCode,
    title: "Proton Link",
    description:
      "Wallet linking and transaction signing for XPR Network apps — the utility layer most Proton dapps build on.",
    links: [
      { label: "proton.link", href: "https://proton.link" },
    ],
  },
  {
    icon: GitBranch,
    title: "protonnz.com",
    description:
      "This site. Open source Next.js — fork it, use the ProjectCard / GlassCard / SectionHeading components as a starting point for your own XPR project site.",
    links: [
      { label: "GitHub", href: "https://github.com/paulgnz/protonnz" },
    ],
  },
];

const nodes = [
  {
    icon: Server,
    title: "Mainnet API",
    endpoint: "https://api.protonnz.com",
    description:
      "Public XPR Network mainnet Chain API endpoint operated by ProtonNZ. Use for read queries, transaction pushes, and dapp integrations.",
    badge: "Public",
    badgeColor: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  },
  {
    icon: Server,
    title: "Testnet API",
    endpoint: "https://tn1.protonnz.com",
    description:
      "Public XPR Network testnet Chain API endpoint operated by ProtonNZ. Point your local wallet or CI here for pre-production testing.",
    badge: "Public",
    badgeColor: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  },
  {
    icon: Zap,
    title: "Hyperion History",
    endpoint: "Contact us for access",
    description:
      "Full Hyperion history API covering XPR mainnet — indexed actions, deltas, transfers, and streaming endpoints. Access is gated; reach out via the contact page for API keys or a dedicated endpoint.",
    badge: "Gated",
    badgeColor: "bg-amber-500/15 text-amber-300 border-amber-500/30",
    contactLink: "/contact",
  },
];

const docs = [
  {
    title: "XPR Network Docs",
    description: "Core protocol documentation — accounts, contracts, wallets, and the developer tooling maintained by the network.",
    href: "https://docs.xprnetwork.org",
  },
  {
    title: "PulseVM Docs",
    description: "Everything on the PulseVM execution layer — accounts, permissions, finality, resource model, and running your own network.",
    href: "https://pulsevm.dev",
  },
  {
    title: "XPR Agents Docs",
    description: "Registering agents, posting jobs, escrow flows, trust scores, and the OpenClaw MCP plugin for LLM-driven agents.",
    href: "https://xpragents.com",
  },
];

export default function DevelopersPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Developers"
          title="Build on XPR Network"
          description="SDKs, open-source repos, public API nodes, and docs for building on XPR Network and PulseVM."
        />

        {/* Featured: XPR Network Dev Skill */}
        <div className="relative mb-20 overflow-hidden rounded-2xl border border-brand-purple/30 bg-gradient-to-br from-brand-purple/20 via-brand-purple/5 to-brand-pink/10 p-8 md:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(168,85,247,0.15),_transparent_60%)] pointer-events-none" />
          <div className="relative flex flex-col lg:flex-row lg:items-center gap-8">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/20 border border-brand-purple/40 text-xs font-semibold text-brand-purple-light mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                Featured — Claude Code Skill
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                XPR Network Dev Skill
              </h2>
              <p className="text-zinc-300 leading-relaxed mb-6 max-w-2xl">
                The fastest way to build on XPR Network with Claude Code.
                A drop-in skill covering smart contracts, CLI, web SDK, DeFi,
                NFTs, and infrastructure — install it once and let Claude write,
                test, and deploy real XPR code with the network&apos;s conventions
                baked in.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button
                  href="https://github.com/XPRNetwork/xpr-network-dev-skill"
                  external
                >
                  Install from GitHub
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <a
                  href="https://github.com/XPRNetwork/xpr-network-dev-skill#readme"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-brand-purple-light hover:text-brand-pink-light transition-colors"
                >
                  Read the docs
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
            <div className="hidden lg:block shrink-0">
              <div className="w-32 h-32 rounded-2xl bg-brand-purple/20 border border-brand-purple/40 flex items-center justify-center">
                <Sparkles className="w-16 h-16 text-brand-purple-light" />
              </div>
            </div>
          </div>
        </div>

        {/* SDKs & Repos */}
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
              <div className="flex flex-wrap gap-4">
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

        {/* Public Nodes */}
        <SectionHeading
          label="Infrastructure"
          title="Public Nodes & APIs"
          description="ProtonNZ operates public XPR Network nodes for mainnet and testnet, and a gated Hyperion history API for teams that need it."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {nodes.map((node) => (
            <GlassCard key={node.title} hover>
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 rounded-lg bg-brand-purple/10">
                  <node.icon className="w-5 h-5 text-brand-purple-light" />
                </div>
                <span
                  className={`text-xs font-medium px-2 py-1 rounded-full border ${node.badgeColor}`}
                >
                  {node.badge}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {node.title}
              </h3>
              <div className="mb-3">
                <code className="text-sm text-brand-purple-light bg-surface/50 px-2 py-1 rounded break-all inline-flex items-center gap-1">
                  {node.endpoint === "Contact us for access" && (
                    <Lock className="w-3 h-3" />
                  )}
                  {node.endpoint}
                </code>
              </div>
              <p className="text-sm text-zinc-400 mb-4">{node.description}</p>
              {node.contactLink && (
                <a
                  href={node.contactLink}
                  className="inline-flex items-center gap-1 text-sm text-brand-purple-light hover:text-brand-pink-light transition-colors"
                >
                  Request access →
                </a>
              )}
            </GlassCard>
          ))}
        </div>

        {/* Docs & Resources */}
        <SectionHeading
          label="Docs"
          title="Documentation & Resources"
          description="External docs we lean on when building — for the protocol, the execution layer, and the agent ecosystem."
        />

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {docs.map((doc) => (
            <a
              key={doc.href}
              href={doc.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <GlassCard hover className="h-full">
                <div className="p-2 rounded-lg bg-brand-purple/10 w-fit mb-4">
                  <BookOpen className="w-5 h-5 text-brand-purple-light" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-brand-purple-light transition-colors">
                  {doc.title}
                </h3>
                <p className="text-sm text-zinc-400 mb-4">{doc.description}</p>
                <span className="inline-flex items-center gap-1 text-sm text-brand-purple-light">
                  Open docs
                  <ExternalLink className="w-3 h-3" />
                </span>
              </GlassCard>
            </a>
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
            Most of what we ship is open source — fork the code, run your own
            node, contribute a fix, or use the repos as a starting point for
            your own XPR Network project.
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
