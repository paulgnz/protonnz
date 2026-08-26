import GlassCard from "@/components/ui/GlassCard";
import { Download, HardDrive, ExternalLink } from "lucide-react";

interface SnapshotDef {
  network: "Mainnet" | "Testnet";
  metaUrl: string;
  downloadZst: string;
  downloadUncompressed?: string;
  approxSize: string;
  refreshCadence: string;
}

const SNAPSHOTS: SnapshotDef[] = [
  {
    network: "Mainnet",
    metaUrl: "https://p2p2.protonnz.com/snapshots/latest.json",
    downloadZst: "https://p2p2.protonnz.com/snapshots/latest-snapshot.bin.zst",
    approxSize: "~510 MB",
    refreshCadence: "Refreshed daily",
  },
  {
    network: "Testnet",
    metaUrl: "https://tn1.protonnz.com/snapshots/latest.json",
    downloadZst: "https://tn1.protonnz.com/snapshots/latest-snapshot.bin.zst",
    downloadUncompressed:
      "https://tn1.protonnz.com/snapshots/latest-snapshot.bin",
    approxSize: "~21 MB (zstd) · ~180 MB uncompressed",
    refreshCadence: "Refreshed every 6 hours",
  },
];

interface Meta {
  head_block_num?: number;
  created_utc?: string;
  size_bytes?: number;
  sha256?: string;
  chain_id?: string;
}

async function loadMeta(url: string): Promise<Meta | null> {
  try {
    const r = await fetch(url, { next: { revalidate: 300 } });
    if (!r.ok) return null;
    return (await r.json()) as Meta;
  } catch {
    return null;
  }
}

function fmtBytes(n?: number): string {
  if (!n || !Number.isFinite(n)) return "—";
  const mb = n / 1024 / 1024;
  if (mb >= 1024) return `${(mb / 1024).toFixed(2)} GB`;
  return `${mb.toFixed(1)} MB`;
}

function fmtBlock(n?: number): string {
  if (!n) return "—";
  return n.toLocaleString("en-US");
}

function fmtUtc(iso?: string): string {
  if (!iso) return "—";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toISOString().replace("T", " ").replace(/:\d\d\.\d+Z$/, " UTC");
}

export default async function SnapshotSection() {
  const metas = await Promise.all(SNAPSHOTS.map((s) => loadMeta(s.metaUrl)));

  return (
    <div className="mb-20">
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {SNAPSHOTS.map((snap, i) => {
          const meta = metas[i];
          return (
            <GlassCard key={snap.network}>
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 rounded-lg bg-brand-purple/10">
                  <HardDrive className="w-5 h-5 text-brand-purple-light" />
                </div>
                <span className="text-xs font-medium px-2 py-1 rounded-full border bg-emerald-500/15 text-emerald-300 border-emerald-500/30">
                  {snap.network}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1">
                XPR {snap.network} Snapshot
              </h3>
              <p className="text-xs text-zinc-500 mb-4">
                {snap.refreshCadence} · {snap.approxSize}
              </p>

              <dl className="text-xs mb-4 space-y-1.5">
                <div className="flex justify-between gap-4">
                  <dt className="text-zinc-500">Head block</dt>
                  <dd className="text-foreground font-mono">
                    {fmtBlock(meta?.head_block_num)}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-zinc-500">Created</dt>
                  <dd className="text-foreground font-mono">
                    {fmtUtc(meta?.created_utc)}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-zinc-500">Size</dt>
                  <dd className="text-foreground font-mono">
                    {fmtBytes(meta?.size_bytes)}
                  </dd>
                </div>
                {meta?.sha256 && (
                  <div>
                    <dt className="text-zinc-500 mb-1">SHA-256</dt>
                    <dd>
                      <code className="text-[10px] text-brand-purple-light bg-surface/50 px-1.5 py-0.5 rounded break-all block">
                        {meta.sha256}
                      </code>
                    </dd>
                  </div>
                )}
              </dl>

              <div className="flex flex-wrap gap-2">
                <a
                  href={snap.downloadZst}
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-brand-purple/20 hover:bg-brand-purple/30 border border-brand-purple/40 text-sm font-medium text-brand-purple-light transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download (.zst)
                </a>
                {snap.downloadUncompressed && (
                  <a
                    href={snap.downloadUncompressed}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-zinc-700 hover:border-zinc-500 text-sm font-medium text-zinc-300 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Legacy uncompressed
                  </a>
                )}
                <a
                  href={snap.metaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-zinc-400 hover:text-brand-purple-light transition-colors"
                >
                  latest.json
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </GlassCard>
          );
        })}
      </div>

      {/* Restore instructions */}
      <GlassCard>
        <h3 className="text-sm font-semibold text-foreground mb-3">
          Restoring from a snapshot
        </h3>
        <ol className="text-sm text-zinc-400 space-y-2 leading-relaxed">
          <li>
            <span className="text-zinc-500 mr-2">1.</span>
            Verify the download against the SHA-256 in{" "}
            <code className="text-brand-purple-light text-xs bg-surface/50 px-1.5 py-0.5 rounded">
              latest.json
            </code>
            :{" "}
            <code className="text-brand-purple-light text-xs bg-surface/50 px-1.5 py-0.5 rounded">
              sha256sum latest-snapshot.bin.zst
            </code>
          </li>
          <li>
            <span className="text-zinc-500 mr-2">2.</span>
            Decompress:{" "}
            <code className="text-brand-purple-light text-xs bg-surface/50 px-1.5 py-0.5 rounded">
              zstd -d latest-snapshot.bin.zst
            </code>
          </li>
          <li>
            <span className="text-zinc-500 mr-2">3.</span>
            Start nodeos with a fresh data dir:{" "}
            <code className="text-brand-purple-light text-xs bg-surface/50 px-1.5 py-0.5 rounded">
              nodeos --snapshot latest-snapshot.bin --data-dir /path/to/fresh/data ...
            </code>
          </li>
        </ol>
        <p className="text-xs text-zinc-500 mt-4">
          Filenames are stable — only the contents update on each refresh. Safe
          to script:{" "}
          <code className="text-brand-purple-light bg-surface/50 px-1.5 py-0.5 rounded">
            curl -O
          </code>{" "}
          the same URL each run.
        </p>
      </GlassCard>
    </div>
  );
}
