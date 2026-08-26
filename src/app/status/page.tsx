import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import StatusTable, {
  type CheckableNode,
  type P2pNode,
} from "@/components/status/StatusTable";
import bpJson from "../../../public/bp.json";

export const metadata: Metadata = {
  title: "Node Status",
  description:
    "Live status of ProtonNZ's public XPR Network nodes — mainnet, testnet, and Hyperion history — checked from your browser.",
};

type BpNode = {
  location?: { name?: string };
  ssl_endpoint?: string;
  p2p_endpoint?: string;
  node_type?: string;
  features?: string[];
};

const bpNodes = (bpJson as { nodes: BpNode[] }).nodes;

function queryLabel(features: string[] = []): string {
  if (features.includes("hyperion-v2")) return "Hyperion History";
  return "Mainnet Chain API";
}

const queryNodes: CheckableNode[] = [
  ...bpNodes
    .filter((n) => n.node_type === "query" && n.ssl_endpoint)
    .map((n) => ({
      label: queryLabel(n.features),
      endpoint: n.ssl_endpoint!,
      location: n.location?.name ?? "",
      features: n.features ?? [],
    })),
  {
    label: "Testnet Chain API",
    endpoint: "https://tn1.protonnz.com",
    location: "Auckland, New Zealand",
    features: ["chain-api"],
  },
];

const seedNodes: P2pNode[] = bpNodes
  .filter((n) => n.node_type === "seed" && n.p2p_endpoint)
  .map((n) => ({
    endpoint: n.p2p_endpoint!,
    location: n.location?.name ?? "",
  }));

export default function StatusPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Infrastructure"
          title="Node Status"
          description="Live health of every public endpoint we operate — checked from your browser every 30 seconds. Latency shown is your ping, not ours."
        />

        <StatusTable
          queryNodes={queryNodes}
          seedNodes={seedNodes}
          intervalMs={30000}
        />
      </div>
    </div>
  );
}
