import Reveal from "@/components/ui/Reveal";
import { useMemo } from "react";
import { cn } from "@/lib/utils";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  desc?: string;
  center?: boolean;
  variant?: "light" | "dark"
  className?: string;
};

export default function SectionTitle({ eyebrow, title, desc, center = false, variant = "light", className }: SectionTitleProps) {
  const isDark = useMemo(() => variant === "dark", [variant])
  return (
    <div className={cn(center ? "mx-auto max-w-3xl text-center" : "max-w-3xl", className)}>
      {eyebrow && (
        <Reveal variant="fade-down">
          <p className="mb-3 text-sm font-bold tracking-[0.2em] text-[#d7a321] uppercase">
            {eyebrow}
          </p>
        </Reveal>
      )}

      <Reveal variant="blur" delay={100}>
        <h2 className={cn(
          "text-3xl font-bold tracking-tight md:text-4xl",
          isDark ? "text-white" : "text-[#0b2f66]"
        )}>{title}</h2>
      </Reveal>

      {desc && (
        <Reveal variant="fade-up" delay={180}>
          <p className={cn(
            "mt-4 text-base leading-7",
            isDark ? "text-blue-50" : "text-slate-600"
          )}>{desc}</p>
        </Reveal>
      )}
    </div>
  );
}
