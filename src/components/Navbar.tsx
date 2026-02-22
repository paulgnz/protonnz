"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/constants";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-strong shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-xl font-bold gradient-text">ProtonNZ</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? "text-brand-purple-light bg-brand-purple/10"
                    : "text-zinc-400 hover:text-foreground hover:bg-surface/50"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={siteConfig.social.x}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-3 py-2 rounded-lg text-sm font-medium text-zinc-400 hover:text-foreground hover:bg-surface/50 transition-colors"
              aria-label="Follow on X"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-foreground hover:bg-surface/50 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {isMobileOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-40">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setIsMobileOpen(false)}
          />
          <div className="relative glass-strong animate-fade-in-down mx-4 mt-2 rounded-xl p-4">
            <div className="flex flex-col gap-1">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? "text-brand-purple-light bg-brand-purple/10"
                      : "text-zinc-400 hover:text-foreground hover:bg-surface/50"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={siteConfig.social.x}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium text-zinc-400 hover:text-foreground hover:bg-surface/50 transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                Follow on X
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
