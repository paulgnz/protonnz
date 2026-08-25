"use client";

import { useEffect, useState } from "react";
import GlassCard from "./GlassCard";
import { Server, Zap } from "lucide-react";

interface Props {
  title: string;
  endpoint: string;
  location: string;
  description: string;
  features: string[];
  icon?: "server" | "zap";
}

type PingState =
  | { status: "loading" }
  | { status: "ok"; ms: number }
  | { status: "error" };

export default function NodePingCard({
  title,
  endpoint,
  location,
  description,
  features,
  icon = "server",
}: Props) {
  const [state, setState] = useState<PingState>({ status: "loading" });

  useEffect(() => {
    const start = performance.now();
    let cancelled = false;
    fetch(`${endpoint}/v1/chain/get_info`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: "{}",
    })
      .then((r) => {
        if (cancelled) return;
        if (r.ok) {
          setState({ status: "ok", ms: Math.round(performance.now() - start) });
        } else {
          setState({ status: "error" });
        }
      })
      .catch(() => {
        if (!cancelled) setState({ status: "error" });
      });
    return () => {
      cancelled = true;
    };
  }, [endpoint]);

  const Icon = icon === "zap" ? Zap : Server;

  return (
    <GlassCard hover>
      <div className="flex items-start justify-between mb-4">
        <div className="p-2 rounded-lg bg-brand-purple/10">
          <Icon className="w-5 h-5 text-brand-purple-light" />
        </div>
        <span className="text-xs font-medium px-2 py-1 rounded-full border bg-emerald-500/15 text-emerald-300 border-emerald-500/30">
          Public
        </span>
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <div className="mb-2">
        <code className="text-sm text-brand-purple-light bg-surface/50 px-2 py-1 rounded break-all">
          {endpoint}
        </code>
      </div>
      <div className="text-xs text-zinc-500 mb-3 min-h-[1rem]">
        {state.status === "loading" && (
          <>
            <span className="text-zinc-400">pinging…</span> · {location}
          </>
        )}
        {state.status === "ok" && (
          <>
            <span className="text-emerald-400 font-medium">{state.ms} ms</span>{" "}
            from you · {location}
          </>
        )}
        {state.status === "error" && (
          <>
            <span className="text-red-400">unreachable</span> · {location}
          </>
        )}
      </div>
      <p className="text-sm text-zinc-400 mb-4">{description}</p>
      {features.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {features.map((f) => (
            <span
              key={f}
              className="text-xs px-2 py-0.5 rounded bg-brand-purple/10 text-brand-purple-light"
            >
              {f}
            </span>
          ))}
        </div>
      )}
    </GlassCard>
  );
}
