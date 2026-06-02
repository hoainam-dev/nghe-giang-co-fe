"use client";

import GLink from "@/components/general/GLink";
import { navItems, siteConfig } from "@/data/site";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { GImage } from "@/components/general/GImage";
import { cn } from "@/lib/utils";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
      setScrolled(window.scrollY > 20);
    }, 10);

    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-500",
        mounted ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0",
        scrolled
          ? "border-border/80 bg-white/97 shadow-[0_2px_20px_rgba(10,31,61,0.06)] backdrop-blur-xl"
          : "border-transparent bg-white/90 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <GLink href="/" className="group flex items-center gap-2.5 xl:gap-3.5">
          <GImage
            width={70}
            height={70}
            alt="Logo"
            src="/images/logo.png"
            className="h-[52px] w-[52px] transition-transform duration-300 group-hover:scale-105 sm:h-[60px] sm:w-[60px]"
          />
          <div>
            <p className="font-heading text-brand-navy text-sm leading-snug font-bold sm:text-[0.95rem]">
              {siteConfig.name}
            </p>
          </div>
        </GLink>

        <nav className="hidden items-center lg:flex lg:gap-1 xl:gap-2">
          {navItems.map((item, index) => (
            <GLink
              key={item.href}
              href={item.href}
              style={{ transitionDelay: `${index * 80}ms` }}
              className={cn(
                "text-brand-text-muted hover:text-brand-blue relative px-4 py-2 text-[0.8125rem] font-bold tracking-wide transition-all duration-300",
                mounted ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0",
                "after:bg-brand-gold after:absolute after:bottom-0 after:left-4 after:h-px after:w-0 after:transition-all after:duration-300 hover:after:w-[calc(100%-2rem)]",
              )}
            >
              {item.label}
            </GLink>
          ))}
        </nav>

        <GLink
          href="/lien-he"
          className="btn-gold hidden! px-5! py-2.5! text-[0.8125rem]! lg:inline-flex"
        >
          Liên hệ tư vấn
        </GLink>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="border-border/80 text-brand-navy hover:border-brand-blue/30 hover:bg-surface inline-flex size-10 items-center justify-center rounded-xl border transition lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div
        className={cn(
          "absolute top-full left-0 z-50 grid w-full overflow-hidden border-t border-slate-100 bg-white/98 shadow-[0_8px_32px_rgba(10,31,61,0.08)] backdrop-blur-xl transition-[grid-template-rows,opacity] duration-500 ease-out lg:hidden",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="min-h-0">
          <nav className="flex flex-col gap-1 px-4 py-4">
            {navItems.map((item, index) => (
              <GLink
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                style={{
                  transitionDelay: open ? `${index * 70}ms` : "0ms",
                }}
                className={cn(
                  "text-brand-text hover:bg-surface hover:text-brand-blue rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-500",
                  open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0",
                )}
              >
                {item.label}
              </GLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
