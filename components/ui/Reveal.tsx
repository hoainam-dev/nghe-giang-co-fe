"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type RevealVariant =
  "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "blur" | "scale-up";

type RevealProps = {
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
  delay?: number;
};

const variantClass: Record<RevealVariant, { hidden: string; show: string }> = {
  "fade-up": {
    hidden: "translate-y-10 opacity-0",
    show: "translate-y-0 opacity-100",
  },
  "fade-down": {
    hidden: "-translate-y-10 opacity-0",
    show: "translate-y-0 opacity-100",
  },
  "fade-left": {
    hidden: "translate-x-10 opacity-0",
    show: "translate-x-0 opacity-100",
  },
  "fade-right": {
    hidden: "-translate-x-10 opacity-0",
    show: "translate-x-0 opacity-100",
  },
  "zoom-in": {
    hidden: "scale-95 opacity-0",
    show: "scale-100 opacity-100",
  },
  blur: {
    hidden: "translate-y-6 opacity-0 blur-md",
    show: "translate-y-0 opacity-100 blur-0",
  },
  "scale-up": {
    hidden: "translate-y-8 scale-90 opacity-0",
    show: "translate-y-0 scale-100 opacity-100",
  },
};

export default function Reveal({
  children,
  className,
  variant = "fade-up",
  delay = 0,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const rect = entry.boundingClientRect;
        const isFullyOut = rect.bottom < -80 || rect.top > window.innerHeight + 80;

        if (entry.isIntersecting) {
          setVisible(true);
          return;
        }

        if (isFullyOut) {
          setVisible(false);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "80px 0px 80px 0px",
      },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-all duration-700 ease-out will-change-transform",
        visible ? variantClass[variant].show : variantClass[variant].hidden,
        className,
      )}
    >
      {children}
    </div>
  );
}
