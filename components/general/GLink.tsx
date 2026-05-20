import Link from "next/link";

import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

export default function GLink({
  className = "",
  ...props
}: ComponentProps<typeof Link> & {
  className?: string;
}) {
  return (
    <Link
      className={cn(
        "inline-flex items-center justify-center text-center text-[16px] leading-6 font-medium tracking-[0.15px] text-white",
        className,
      )}
      {...props}
    />
  );
}
