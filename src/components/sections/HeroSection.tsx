"use client";

import Button from "@/components/ui/Button";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 animated-gradient-bg" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-[10%] w-64 h-64 rounded-full bg-brand-purple/10 blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 right-[10%] w-80 h-80 rounded-full bg-brand-pink/10 blur-3xl animate-float"
        style={{ animationDelay: "3s" }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-zinc-300 mb-8">
            <Sparkles className="w-4 h-4 text-brand-purple-light" />
            Building on XPR Network
          </div>
        </div>

        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-fade-in-up"
          style={{ animationDelay: "0.1s", opacity: 0 }}
        >
          Building the Future of{" "}
          <span className="gradient-text">Blockchain</span>
        </h1>

        <p
          className="mt-6 text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto animate-fade-in-up"
          style={{ animationDelay: "0.2s", opacity: 0 }}
        >
          AI agents, decentralized exchanges, social networks, and developer
          tools &mdash; all powered by XPR Network.
        </p>

        <div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.3s", opacity: 0 }}
        >
          <Button href="/projects" size="lg">
            Explore Projects
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button href="/about" variant="secondary" size="lg">
            About ProtonNZ
          </Button>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
