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
          ? "border-slate-200 bg-white/95 shadow-sm backdrop-blur-xl"
          : "border-white/20 bg-white/80 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <GLink href="/" className="group flex items-center gap-1 xl:gap-3">
          <GImage
            width={70}
            height={70}
            alt="Logo"
            src="/images/logo.png"
            className="h-[60x] w-[60px] sm:h-[70x] sm:w-[70px]"
          />
          <div>
            <p className="text-sm sm:text-base font-bold text-[#0b2f66]">{siteConfig.name}</p>
          </div>
        </GLink>

        <nav className="hidden items-center lg:gap-6 xl:gap-8 lg:flex">
          {navItems.map((item, index) => (
            <GLink
              key={item.href}
              href={item.href}
              style={{ transitionDelay: `${index * 80}ms` }}
              className={cn(
                "relative text-sm font-semibold text-slate-700 transition-all duration-500 hover:text-[#0b4ea2] uppercase",
                mounted ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0",
                "after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:bg-[#d7a321] after:transition-all after:duration-300 hover:after:w-full",
              )}
            >
              {item.label}
            </GLink>
          ))}
        </nav>

        <GLink
          href="#lien-he"
          className="hidden rounded-full bg-[#d7a321] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-yellow-700/20 transition duration-300 hover:-translate-y-0.5 hover:bg-[#c39014] lg:inline-flex"
        >
          Liên hệ tư vấn
        </GLink>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-10 items-center justify-center rounded-lg border border-slate-200 lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div
        className={cn(
          "absolute left-0 top-full z-50 grid w-full overflow-hidden border-t border-slate-100 bg-white shadow-xl transition-[grid-template-rows,opacity] duration-500 ease-out lg:hidden",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="min-h-0">
          <nav className="flex flex-col gap-2 px-4 py-4">
            {navItems.map((item, index) => (
              <GLink
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                style={{
                  transitionDelay: open ? `${index * 70}ms` : "0ms",
                }}
                className={cn(
                  "rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 transition-all duration-500 hover:bg-slate-50",
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
