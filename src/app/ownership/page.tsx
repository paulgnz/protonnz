import type { Metadata } from "next";
import GlassCard from "@/components/ui/GlassCard";
import { Building2, Globe, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Ownership",
  description:
    "Ownership disclosure for ProtonNZ — operated by Badradio Ltd, a New Zealand registered company.",
};

export default function OwnershipPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
          Ownership Disclosure
        </h1>
        <p className="text-sm text-zinc-500 mb-12">
          Transparency about who operates ProtonNZ
        </p>

        <div className="space-y-6">
          <GlassCard>
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-brand-purple/10">
                <Building2 className="w-5 h-5 text-brand-purple-light" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-foreground mb-2">
                  Badradio Ltd
                </h2>
                <p className="text-zinc-400 leading-relaxed">
                  ProtonNZ and all associated projects, websites, and services
                  are owned and operated by Badradio Ltd, a company registered
                  in New Zealand. All intellectual property, trademarks, and
                  content are the property of Badradio Ltd unless otherwise
                  stated.
                </p>
              </div>
            </div>
          </GlassCard>

          <GlassCard>
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-brand-purple/10">
                <Globe className="w-5 h-5 text-brand-purple-light" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-foreground mb-2">
                  Operated Projects
                </h2>
                <p className="text-zinc-400 leading-relaxed mb-4">
                  The following domains and services are operated by Badradio
                  Ltd:
                </p>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-purple" />
                    protonnz.com — Main website
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-purple" />
                    agents.protonnz.com — XPR Agents
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-purple" />
                    dex.protonnz.com — Simple DEX
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-purple" />
                    shellbook.io — Shellbook
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-purple" />
                    proton.link — Proton Link
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-purple" />
                    xprslots.com — XPR Slots
                  </li>
                </ul>
              </div>
            </div>
          </GlassCard>

          <GlassCard>
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-brand-purple/10">
                <Shield className="w-5 h-5 text-brand-purple-light" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-foreground mb-2">
                  Transparency Commitment
                </h2>
                <p className="text-zinc-400 leading-relaxed">
                  We believe in transparency and accountability. This disclosure
                  page is maintained to clearly identify the entity responsible
                  for operating ProtonNZ services. For any questions about
                  ownership or operations, please reach out through our Contact
                  page.
                </p>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
