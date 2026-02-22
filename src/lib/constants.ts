export const siteConfig = {
  name: "ProtonNZ",
  title: "ProtonNZ - #1 Block Producer on XPR Network",
  description:
    "Building the future of blockchain with XPR Network. Explore AI agents, decentralized exchanges, social networks, and developer tools.",
  url: "https://protonnz.com",
  author: "Paul Grey",
  company: "Badradio Ltd",
  social: {
    x: "https://x.com/protonnz",
    telegram: "https://t.me/paulprotonnz",
    github: "https://github.com/paulgnz",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "Developers", href: "/developers" },
    { label: "Contact", href: "/contact" },
  ],
  footerLinks: {
    navigation: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Projects", href: "/projects" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
    projects: [
      { label: "XPR Agents", href: "https://agents.protonnz.com" },
      { label: "Shellbook", href: "https://shellbook.io" },
      { label: "Proton Link", href: "https://proton.link" },
      { label: "Simple DEX", href: "https://dex.protonnz.com" },
    ],
    developers: [
      { label: "XPR Agents SDK", href: "/developers" },
      { label: "Documentation", href: "/developers" },
      { label: "GitHub", href: "https://github.com/paulgnz" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Ownership", href: "/ownership" },
    ],
  },
} as const;
