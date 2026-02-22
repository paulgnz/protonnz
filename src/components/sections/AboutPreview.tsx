"use client";

import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ArrowRight, Shield, Cpu, Globe } from "lucide-react";

const highlights = [
  {
    icon: Cpu,
    title: "AI + Blockchain",
    description: "Combining artificial intelligence with blockchain infrastructure.",
  },
  {
    icon: Shield,
    title: "XPR Network Consortium",
    description: "Active member building production applications on XPR Network.",
  },
  {
    icon: Globe,
    title: "New Zealand Based",
    description: "Operating through Badradio Ltd from New Zealand.",
  },
];

export default function AboutPreview() {
  return (
    <section className="py-20 lg:py-28 bg-[#1a1a1d]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div>
              <p className="text-sm font-semibold tracking-wider uppercase text-brand-purple-light mb-2">
                About
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Meet <span className="gradient-text">Paul Grey</span>
              </h2>
              <p className="text-zinc-400 mb-4 leading-relaxed">
                Blockchain developer and member of the XPR Network Consortium,
                building decentralized applications that push the boundaries of
                what&apos;s possible on-chain.
              </p>
              <p className="text-zinc-400 mb-8 leading-relaxed">
                From AI agent registries to decentralized exchanges, every project
                is designed to demonstrate the power and potential of the XPR
                Network ecosystem.
              </p>
              <Button href="/about">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </ScrollReveal>

          <div className="grid gap-4">
            {highlights.map((item, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <GlassCard hover className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-brand-purple/10">
                    <item.icon className="w-5 h-5 text-brand-purple-light" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-zinc-400">{item.description}</p>
                  </div>
                </GlassCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
