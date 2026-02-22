"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

const stats = [
  { value: "7+", label: "Active Projects" },
  { value: "5+", label: "Years Building" },
  { value: "XPR", label: "Network" },
  { value: "NZ", label: "Based" },
];

export default function StatsSection() {
  return (
    <section className="py-16 border-y border-zinc-800/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold gradient-text">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-zinc-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
