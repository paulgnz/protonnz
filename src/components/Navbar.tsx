"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { siteConfig } from "@/lib/constants";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  useEffect(() => {
    setOpenDropdown(null);
  }, [pathname]);

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
            <Image
              src="/images/logo.png"
              alt="ProtonNZ"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="text-xl font-bold gradient-text">ProtonNZ</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {siteConfig.nav.map((item) => {
              const children = "children" in item ? item.children : undefined;
              const classes = `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                pathname === item.href
                  ? "text-brand-purple-light bg-brand-purple/10"
                  : "text-zinc-400 hover:text-foreground hover:bg-surface/50"
              }`;
              if (children) {
                const open = openDropdown === item.label;
                return (
                  <div key={item.label} className="relative" ref={open ? dropdownRef : undefined}>
                    <button
                      onClick={() => setOpenDropdown(open ? null : item.label)}
                      className={`${classes} inline-flex items-center gap-1`}
                      aria-expanded={open}
                    >
                      {item.label}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
                    </button>
                    {open && (
                      <div className="absolute left-0 mt-2 w-72 glass-strong rounded-xl p-2 shadow-lg shadow-black/20 animate-fade-in-down">
                        {children.map((c) => (
                          <a
                            key={c.href}
                            href={c.href}
                            target={c.href.startsWith("http") ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            className="flex flex-col gap-0.5 px-3 py-2.5 rounded-lg hover:bg-surface/50 transition-colors"
                          >
                            <span className="text-sm font-medium text-foreground">{c.label}</span>
                            <span className="text-xs text-zinc-500">{c.desc}</span>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              const isExternal = item.href.startsWith("http");
              return isExternal ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes}
                >
                  {item.label}
                </a>
              ) : (
                <Link key={item.href} href={item.href} className={classes}>
                  {item.label}
                </Link>
              );
            })}
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
              {siteConfig.nav.map((item) => {
                const children = "children" in item ? item.children : undefined;
                const classes = `px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? "text-brand-purple-light bg-brand-purple/10"
                    : "text-zinc-400 hover:text-foreground hover:bg-surface/50"
                }`;
                if (children) {
                  return (
                    <div key={item.label} className="flex flex-col">
                      <span className="px-4 pt-3 pb-1 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                        {item.label}
                      </span>
                      {children.map((c) => (
                        <a
                          key={c.href}
                          href={c.href}
                          target={c.href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="px-4 py-3 rounded-lg text-sm font-medium text-zinc-400 hover:text-foreground hover:bg-surface/50 transition-colors"
                        >
                          {c.label}
                        </a>
                      ))}
                    </div>
                  );
                }
                const isExternal = item.href.startsWith("http");
                return isExternal ? (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link key={item.href} href={item.href} className={classes}>
                    {item.label}
                  </Link>
                );
              })}
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
