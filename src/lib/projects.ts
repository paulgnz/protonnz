export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  url: string;
  status: "live" | "beta" | "development" | "demo";
  tags: string[];
  featured: boolean;
  image?: string;
  gradient: string;
  icon: string;
}

export const projects: Project[] = [
  {
    slug: "pulsevm-docs",
    title: "PulseVM",
    description:
      "Docs and marketing site for PulseVM — the open-source execution layer behind A-Chain, the future of XPR Network.",
    longDescription:
      "pulsevm.dev is the developer and institutional home for PulseVM: named accounts, native multisig, sub-second instant finality, and no gas for end users, delivered as a metalgo plugin any institution or consortium can run as its own private network. ProtonNZ designed and built the site — hero, feature grid, docs architecture, brand system — as the public face of the open-source execution layer behind A-Chain, the future of XPR Network.",
    url: "https://pulsevm.dev",
    status: "live",
    tags: ["PulseVM", "A-Chain", "Docs", "Institutional"],
    featured: true,
    image: "/images/pulsevm-preview.png",
    gradient: "from-sky-600/30 via-blue-500/20 to-indigo-500/30",
    icon: "⚡",
  },
  {
    slug: "xpr-pulsevm-migration",
    title: "XPR → PulseVM Migration Tools",
    description:
      "Snapshot and crossover tooling to help XPR Network block producers move state and operations onto PulseVM.",
    longDescription:
      "A toolkit under active development at ProtonNZ for XPR Network block producers preparing for the PulseVM crossover: chain snapshots, account and permission exports, token and contract state migration helpers, and BP-side operational guides for running a PulseVM validator alongside their existing XPR infrastructure. The goal is to make the cutover to A-Chain a routine BP task, not a research project.",
    url: "https://pulsevm.dev",
    status: "development",
    tags: ["PulseVM", "XPR Network", "Block Producers", "Migration", "Tools"],
    featured: true,
    gradient: "from-indigo-600/30 via-blue-500/20 to-sky-500/30",
    icon: "🔀",
  },
  {
    slug: "xpr-tax",
    title: "XPR Tax",
    description:
      "Full-history tax exports for XPR Network accounts — reconciled to the chain and ready for CoinTracking, Koinly or Summ.",
    longDescription:
      "XPR Tax rebuilds an account's entire history directly from the blockchain — every transfer, DEX fill, launchpad claim, staking reward, lending and referral payout — with no 10,000-row explorer limit. It classifies each event, prices XPR Network tokens correctly instead of confusing them with similarly-named coins, and reconciles the totals against your live on-chain balances so nothing is missed. Exports import straight into CoinTracking, Koinly or Summ in your choice of currency, with a reconciliation report and a point-in-time balance time machine for any tax year-end. Pay on-chain, no sign-up. Interface available in nine languages.",
    url: "https://tax.protonnz.com",
    status: "live",
    tags: ["Tax", "XPR Network", "CoinTracking", "Tools"],
    featured: true,
    image: "/images/xpr-tax-preview.jpg",
    gradient: "from-violet-600/30 via-purple-500/20 to-emerald-500/30",
    icon: "🧾",
  },
  {
    slug: "xpr-auth-cleanup",
    title: "XPR Auth Cleanup",
    description:
      "Free security tool to detect and remove wallet-drainer permissions from your XPR account in one click.",
    longDescription:
      "XPR Auth Cleanup is a non-custodial security tool built in response to the xprdrop.com wallet-drainer scam. It audits your account for malicious delegated permissions and removes them in a single transaction you sign yourself. No backend, and it never touches your keys.",
    url: "https://cleanup.protonnz.com",
    status: "live",
    tags: ["Security", "Anti-scam", "XPR Network", "Non-custodial"],
    featured: true,
    gradient: "from-cyan-600/30 via-teal-500/20 to-emerald-500/30",
    icon: "🧹",
  },
  {
    slug: "xpr-agents",
    title: "XPR Agents",
    description:
      "Trustless AI Agent Registry on the XPR Network with KYC trust scores and escrow payments.",
    longDescription:
      "XPR Agents is a decentralized AI agent registry built on the XPR Network. It enables AI agents to be registered, verified, and discovered on-chain with KYC trust scores. Features include escrow-based payment systems for agent services, reputation tracking, and trustless interactions between humans and AI agents.",
    url: "https://agents.protonnz.com",
    status: "live",
    tags: ["AI", "XPR Network", "Smart Contracts", "KYC", "Escrow"],
    featured: true,
    image: "/images/xpr-agents-preview.png",
    gradient: "from-violet-600/30 via-purple-500/20 to-fuchsia-500/30",
    icon: "🤖",
  },
  {
    slug: "shellbook",
    title: "Shellbook",
    description:
      "The first social network built for AI agents, enabling agent-to-agent and agent-to-human interaction.",
    longDescription:
      "Shellbook is a pioneering social platform designed specifically for AI agents. It enables agents to create profiles, share updates, interact with other agents and humans, and build social graphs. Built on blockchain technology for transparent and verifiable agent identities.",
    url: "https://shellbook.io",
    status: "live",
    tags: ["AI", "Social Network", "Agents", "Web3"],
    featured: true,
    image: "/images/shellbook-preview.png",
    gradient: "from-emerald-600/30 via-green-500/20 to-teal-500/30",
    icon: "🐚",
  },
  {
    slug: "proton-link",
    title: "Proton Link",
    description:
      "Essential utility tool for the XPR Network ecosystem.",
    longDescription:
      "Proton Link provides essential utilities for the XPR Network, making it easier for users to interact with the blockchain. A streamlined interface for common XPR Network operations and utilities.",
    url: "https://proton.link",
    status: "live",
    tags: ["XPR Network", "Utility", "Blockchain"],
    featured: true,
    gradient: "from-blue-600/30 via-indigo-500/20 to-cyan-500/30",
    icon: "🔗",
  },
  {
    slug: "simple-dex",
    title: "Simple DEX",
    description:
      "AMM-powered decentralized exchange for swapping tokens on the XPR Network.",
    longDescription:
      "Simple DEX is an automated market maker (AMM) powered decentralized exchange built on the XPR Network. It enables trustless token swaps with deep liquidity, low fees, and instant settlement. Features an intuitive interface designed for both beginners and experienced DeFi users.",
    url: "https://dex.protonnz.com",
    status: "live",
    tags: ["DeFi", "DEX", "AMM", "XPR Network"],
    featured: true,
    image: "/images/simple-dex-preview.png",
    gradient: "from-orange-600/30 via-amber-500/20 to-yellow-500/30",
    icon: "💱",
  },
  {
    slug: "price-battle",
    title: "Price Battle",
    description:
      "Blockchain-based price prediction game where players compete to forecast market movements.",
    longDescription:
      "Price Battle is an engaging blockchain game where players predict cryptocurrency price movements and compete against each other. Built on the XPR Network for transparent and verifiable results, with rewards distributed automatically via smart contracts.",
    url: "#",
    status: "development",
    tags: ["GameFi", "Prediction", "XPR Network", "Smart Contracts"],
    featured: false,
    gradient: "from-red-600/30 via-rose-500/20 to-pink-500/30",
    icon: "⚔️",
  },
  {
    slug: "xpr-slots",
    title: "XPR Slots",
    description:
      "Provably fair blockchain slot machine demo showcasing on-chain randomness.",
    longDescription:
      "XPR Slots is a provably fair slot machine built on the XPR Network. It demonstrates how blockchain technology can be used to create verifiable random outcomes in gaming. Every spin is recorded on-chain, allowing players to independently verify the fairness of results.",
    url: "https://xprslots.com",
    status: "demo",
    tags: ["GameFi", "Provably Fair", "XPR Network", "Demo"],
    featured: false,
    image: "/images/xpr-slots-preview.png",
    gradient: "from-purple-600/30 via-violet-500/20 to-fuchsia-500/30",
    icon: "🎰",
  },
  {
    slug: "xpr-agents-sdk",
    title: "XPR Agents SDK",
    description:
      "Developer tools and SDK for building and integrating AI agents into the XPR Agents ecosystem.",
    longDescription:
      "The XPR Agents SDK provides developers with comprehensive tools to build, deploy, and integrate AI agents into the XPR Agents ecosystem. Includes TypeScript/JavaScript libraries, documentation, examples, and testing utilities for rapid agent development.",
    url: "/developers",
    status: "beta",
    tags: ["SDK", "Developer Tools", "AI", "TypeScript"],
    featured: false,
    gradient: "from-sky-600/30 via-blue-500/20 to-indigo-500/30",
    icon: "🛠️",
  },
];

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
