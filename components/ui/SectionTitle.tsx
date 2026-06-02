import Reveal from "@/components/ui/Reveal";
import { useMemo } from "react";
import { cn } from "@/lib/utils";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  desc?: string;
  center?: boolean;
  variant?: "light" | "dark";
  className?: string;
  classNameTitle?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  desc,
  center = false,
  variant = "light",
  className,
  classNameTitle,
}: SectionTitleProps) {
  const isDark = useMemo(() => variant === "dark", [variant]);
  return (
    <div className={cn(center ? "mx-auto max-w-3xl text-center" : "max-w-3xl", className)}>
      {eyebrow && (
        <Reveal variant="fade-down">
          <p className="eyebrow mb-4">{eyebrow}</p>
        </Reveal>
      )}

      <Reveal variant="blur" delay={100}>
        <h2
          className={cn(
            "heading-display text-3xl md:text-4xl lg:text-[2.75rem]",
            isDark ? "text-white" : "text-brand-navy",
            classNameTitle,
          )}
        >
          {title}
        </h2>
      </Reveal>

      {desc && (
        <Reveal variant="fade-up" delay={180}>
          <p
            className={cn(
              "mt-5 text-base leading-relaxed font-medium md:text-[1.05rem] md:leading-8",
              isDark ? "text-brand-muted/90" : "text-brand-text-muted",
            )}
          >
            {desc}
          </p>
        </Reveal>
      )}

      {!isDark && (
        <Reveal variant="fade-up" delay={220}>
          <div className={cn("bg-brand-gold/40 mt-6 h-px w-16", center && "mx-auto")} />
        </Reveal>
      )}
    </div>
  );
}
