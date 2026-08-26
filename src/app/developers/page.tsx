import type { Metadata } from "next";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import NodePingCard from "@/components/ui/NodePingCard";
import bpJson from "../../../public/bp.json";
import {
  ExternalLink,
  BookOpen,
  GitBranch,
  Package,
  Terminal,
  FileCode,
  Radio,
  Sparkles,
  ArrowRight,
} from "lucide-react";

type BpNode = {
  location?: { name?: string; country?: string };
  ssl_endpoint?: string;
  api_endpoint?: string;
  p2p_endpoint?: string;
  node_type?: string;
  full?: boolean;
  features?: string[];
};

const bpNodes = (bpJson as { nodes: BpNode[] }).nodes;

const queryNodes = bpNodes.filter(
  (n) => n.node_type === "query" && n.ssl_endpoint
);
const seedNodes = bpNodes.filter((n) => n.node_type === "seed" && n.p2p_endpoint);

function queryTitle(features: string[] = []) {
  if (features.includes("hyperion-v2")) return "Hyperion History";
  return "Mainnet Chain API";
}

function queryDescription(features: string[] = [], full = false) {
  if (features.includes("hyperion-v2")) {
    return `Full-history Hyperion API — indexed actions, deltas, transfers, and streaming endpoints. ${full ? "Full history." : ""}`.trim();
  }
  return "Public XPR Network mainnet Chain API — read queries, transaction pushes, and dapp integrations.";
}

function locationLabel(n: BpNode) {
  return n.location?.name ?? "";
}

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
];

const testnetCard = {
  title: "Testnet API",
  endpoint: "https://tn1.protonnz.com",
  location: "Auckland, New Zealand",
  description:
    "Public XPR Network testnet Chain API endpoint operated by ProtonNZ. Point your local wallet or CI here for pre-production testing.",
  features: ["chain-api"],
};

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
          description="ProtonNZ operates public XPR Network nodes. This list is rendered live from our bp.json — endpoints ping from your browser so you can see your latency to each one."
        />

        <div className="flex justify-center mb-8">
          <a
            href="/status"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand-purple-light hover:text-brand-pink-light transition-colors"
          >
            View the full node status page
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {queryNodes.map((n) => (
            <NodePingCard
              key={n.ssl_endpoint}
              title={queryTitle(n.features)}
              endpoint={n.ssl_endpoint!}
              location={locationLabel(n)}
              description={queryDescription(n.features, n.full)}
              features={n.features ?? []}
              icon={n.features?.includes("hyperion-v2") ? "zap" : "server"}
            />
          ))}
          <NodePingCard
            title={testnetCard.title}
            endpoint={testnetCard.endpoint}
            location={testnetCard.location}
            description={testnetCard.description}
            features={testnetCard.features}
          />
        </div>

        {/* P2P Seed Nodes */}
        {seedNodes.length > 0 && (
          <div className="mb-4">
            <p className="text-xs font-semibold tracking-wider uppercase text-zinc-500 mb-3">
              P2P Seed Nodes
            </p>
            <GlassCard>
              <p className="text-sm text-zinc-400 mb-4">
                Public p2p seeds for BPs and node operators syncing XPR Network
                mainnet. Not for browser clients.
              </p>
              <ul className="divide-y divide-zinc-800">
                {seedNodes.map((n) => (
                  <li
                    key={n.p2p_endpoint}
                    className="flex items-center justify-between py-3 gap-4"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <Radio className="w-4 h-4 text-brand-purple-light shrink-0" />
                      <code className="text-sm text-brand-purple-light bg-surface/50 px-2 py-1 rounded truncate">
                        {n.p2p_endpoint}
                      </code>
                    </div>
                    <span className="text-xs text-zinc-500 shrink-0">
                      {locationLabel(n)}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-zinc-500 mt-4">
                Source of truth:{" "}
                <a
                  href="/bp.json"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-purple-light hover:text-brand-pink-light transition-colors"
                >
                  protonnz.com/bp.json
                </a>
              </p>
            </GlassCard>
          </div>
        )}

        <div className="mb-20" />

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
