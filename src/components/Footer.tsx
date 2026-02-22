import Link from "next/link";
import { siteConfig } from "@/lib/constants";
import SocialLinks from "@/components/ui/SocialLinks";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-[#1a1a1d]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {siteConfig.footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Projects
            </h3>
            <ul className="space-y-2">
              {siteConfig.footerLinks.projects.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-400 hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Developers */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Developers
            </h3>
            <ul className="space-y-2">
              {siteConfig.footerLinks.developers.map((link) => (
                <li key={link.href}>
                  {link.href.startsWith("http") ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-zinc-400 hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-400 hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Connect
            </h3>
            <SocialLinks />
            <ul className="mt-4 space-y-2">
              {siteConfig.footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-zinc-800 text-center">
          <p className="text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
