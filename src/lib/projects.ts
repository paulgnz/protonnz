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
    featured: false,
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
