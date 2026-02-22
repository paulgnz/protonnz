import type { Metadata } from "next";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { Send, MessageCircle, Mail } from "lucide-react";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Paul Grey. Reach out via X (Twitter) or Telegram for questions about XPR Network projects.",
};

const channels = [
  {
    icon: () => (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    title: "X (Twitter)",
    description: "Follow for updates and reach out via DM.",
    handle: "@protonnz",
    href: siteConfig.social.x,
    cta: "Follow on X",
  },
  {
    icon: Send,
    title: "Telegram",
    description: "Direct message for quick conversations.",
    handle: "@paulprotonnz",
    href: siteConfig.social.telegram,
    cta: "Message on Telegram",
  },
  {
    icon: () => (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    title: "GitHub",
    description: "Open issues or contribute to our projects.",
    handle: "paulgnz",
    href: siteConfig.social.github,
    cta: "View on GitHub",
  },
];

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Contact"
          title="Get in Touch"
          description="Have a question, collaboration idea, or just want to chat about XPR Network? Reach out through any of these channels."
        />

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {channels.map((channel, i) => (
            <a
              key={i}
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <GlassCard hover className="text-center h-full">
                <div className="p-3 rounded-lg bg-brand-purple/10 w-fit mx-auto mb-4 text-brand-purple-light group-hover:bg-brand-purple/20 transition-colors">
                  <channel.icon />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {channel.title}
                </h3>
                <p className="text-sm text-zinc-500 mb-3">{channel.handle}</p>
                <p className="text-sm text-zinc-400 mb-4">
                  {channel.description}
                </p>
                <span className="text-sm font-medium text-brand-purple-light group-hover:text-brand-pink-light transition-colors">
                  {channel.cta} &rarr;
                </span>
              </GlassCard>
            </a>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 max-w-2xl mx-auto text-center">
          <GlassCard>
            <div className="flex items-center justify-center gap-2 mb-3">
              <MessageCircle className="w-5 h-5 text-brand-purple-light" />
              <h3 className="font-semibold text-foreground">
                Prefer Email?
              </h3>
            </div>
            <p className="text-sm text-zinc-400">
              For business inquiries related to Badradio Ltd or partnership
              opportunities, please reach out via X or Telegram and we can
              arrange a more formal communication channel.
            </p>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
