"use client";

import { useEffect, useState, useRef } from "react";
import { Circle, Radio } from "lucide-react";

export interface CheckableNode {
  label: string;
  endpoint: string;
  location: string;
  features: string[];
}

export interface P2pNode {
  endpoint: string;
  location: string;
}

interface Props {
  queryNodes: CheckableNode[];
  seedNodes: P2pNode[];
  intervalMs?: number;
}

type Status =
  | { kind: "loading" }
  | { kind: "up"; ms: number; checkedAt: number }
  | { kind: "down"; checkedAt: number };

function timeAgo(ts: number, now: number): string {
  const s = Math.max(0, Math.floor((now - ts) / 1000));
  if (s < 5) return "just now";
  if (s < 60) return `${s}s ago`;
  const m = Math.floor(s / 60);
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  return `${h}h ago`;
}

async function pingChain(endpoint: string): Promise<number | null> {
  const start = performance.now();
  try {
    const r = await fetch(`${endpoint}/v1/chain/get_info`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: "{}",
    });
    if (!r.ok) return null;
    return Math.round(performance.now() - start);
  } catch {
    return null;
  }
}

export default function StatusTable({
  queryNodes,
  seedNodes,
  intervalMs = 30_000,
}: Props) {
  const [statuses, setStatuses] = useState<Record<string, Status>>(() =>
    Object.fromEntries(queryNodes.map((n) => [n.endpoint, { kind: "loading" } as Status]))
  );
  const [now, setNow] = useState<number>(() => Date.now());
  const [nextCheckIn, setNextCheckIn] = useState<number>(intervalMs);
  const cancelled = useRef(false);

  useEffect(() => {
    cancelled.current = false;
    async function checkAll() {
      const t = Date.now();
      const entries = await Promise.all(
        queryNodes.map(async (n) => {
          const ms = await pingChain(n.endpoint);
          return [
            n.endpoint,
            ms === null
              ? { kind: "down" as const, checkedAt: t }
              : { kind: "up" as const, ms, checkedAt: t },
          ] as const;
        })
      );
      if (cancelled.current) return;
      setStatuses((prev) => {
        const next = { ...prev };
        for (const [k, v] of entries) next[k] = v;
        return next;
      });
      setNextCheckIn(intervalMs);
    }
    void checkAll();
    const id = setInterval(() => void checkAll(), intervalMs);
    return () => {
      cancelled.current = true;
      clearInterval(id);
    };
  }, [queryNodes, intervalMs]);

  useEffect(() => {
    const tick = setInterval(() => {
      setNow(Date.now());
      setNextCheckIn((v) => Math.max(0, v - 1000));
    }, 1000);
    return () => clearInterval(tick);
  }, []);

  const upCount = Object.values(statuses).filter((s) => s.kind === "up").length;
  const totalQuery = queryNodes.length;

  return (
    <div className="space-y-8">
      {/* Summary */}
      <div className="glass rounded-xl p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3">
          <Circle
            className={`w-4 h-4 fill-current ${
              upCount === totalQuery
                ? "text-emerald-400"
                : upCount === 0
                ? "text-red-400"
                : "text-amber-400"
            }`}
          />
          <div>
            <div className="text-sm font-semibold text-foreground">
              {upCount === totalQuery
                ? "All systems operational"
                : upCount === 0
                ? "All checked endpoints down"
                : `${upCount} of ${totalQuery} endpoints up`}
            </div>
            <div className="text-xs text-zinc-500">
              Checks run from your browser · next check in {Math.ceil(nextCheckIn / 1000)}s
            </div>
          </div>
        </div>
      </div>

      {/* Query nodes table */}
      <div>
        <h2 className="text-xs font-semibold tracking-wider uppercase text-zinc-500 mb-3">
          Query Endpoints
        </h2>
        <div className="glass rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm min-w-[720px]">
              <thead>
                <tr className="text-left text-xs uppercase tracking-wider text-zinc-500 border-b border-zinc-800">
                  <th className="px-4 py-3 font-medium">Endpoint</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                  <th className="px-4 py-3 font-medium">Latency</th>
                  <th className="px-4 py-3 font-medium">Location</th>
                  <th className="px-4 py-3 font-medium">Checked</th>
                </tr>
              </thead>
              <tbody>
                {queryNodes.map((n) => {
                  const s = statuses[n.endpoint];
                  const isUp = s?.kind === "up";
                  const isDown = s?.kind === "down";
                  return (
                    <tr
                      key={n.endpoint}
                      className="border-b border-zinc-800/50 last:border-0"
                    >
                      <td className="px-4 py-3">
                        <div className="text-foreground font-medium">{n.label}</div>
                        <code className="text-xs text-zinc-500 break-all">
                          {n.endpoint}
                        </code>
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-flex items-center gap-2 text-xs font-medium px-2 py-1 rounded-full border ${
                            isUp
                              ? "bg-emerald-500/15 text-emerald-300 border-emerald-500/30"
                              : isDown
                              ? "bg-red-500/15 text-red-300 border-red-500/30"
                              : "bg-zinc-500/15 text-zinc-400 border-zinc-500/30"
                          }`}
                        >
                          <Circle className="w-2 h-2 fill-current" />
                          {isUp ? "Up" : isDown ? "Down" : "Checking"}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-zinc-300">
                        {s?.kind === "up" ? `${s.ms} ms` : "—"}
                      </td>
                      <td className="px-4 py-3 text-zinc-400">{n.location}</td>
                      <td className="px-4 py-3 text-zinc-500 text-xs">
                        {s && s.kind !== "loading"
                          ? timeAgo(s.checkedAt, now)
                          : "…"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Seed nodes */}
      {seedNodes.length > 0 && (
        <div>
          <h2 className="text-xs font-semibold tracking-wider uppercase text-zinc-500 mb-3">
            P2P Seed Nodes
          </h2>
          <div className="glass rounded-xl p-4">
            <p className="text-xs text-zinc-500 mb-4">
              P2P seeds are TCP:9876 — not reachable from a browser. Node
              operators can verify them with{" "}
              <code className="text-brand-purple-light">nc -vz host 9876</code>.
            </p>
            <ul className="divide-y divide-zinc-800/50">
              {seedNodes.map((n) => (
                <li
                  key={n.endpoint}
                  className="flex items-center justify-between gap-4 py-3"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <Radio className="w-4 h-4 text-brand-purple-light shrink-0" />
                    <code className="text-sm text-brand-purple-light bg-surface/50 px-2 py-1 rounded truncate">
                      {n.endpoint}
                    </code>
                  </div>
                  <span className="text-xs text-zinc-500 shrink-0">
                    {n.location}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <p className="text-xs text-zinc-500 text-center">
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
    </div>
  );
}
