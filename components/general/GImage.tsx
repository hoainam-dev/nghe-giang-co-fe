"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

type GImageProps = ImageProps & {
  fallback?: React.ReactNode;
  fallbackClassName?: string;
  enableFallback?: boolean;
};

function toSrcKey(src: ImageProps["src"]) {
  if (typeof src === "string") return src;
  if (src && typeof src === "object" && "src" in src) return src.src;
  return String(src);
}

export function GImage({
  fallback,
  fallbackClassName,
  enableFallback = true,
  onError,
  src,
  ...props
}: GImageProps) {
  const srcKey = toSrcKey(src);
  const isEmptySrc = typeof src === "string" && src.trim().length === 0;
  const [failedSrcKey, setFailedSrcKey] = useState<string | null>(null);
  const shouldShowFallback = enableFallback && (isEmptySrc || failedSrcKey === srcKey);

  if (shouldShowFallback) {
    return (
      fallback ?? <div aria-hidden className={cn("h-full w-full bg-zinc-200", fallbackClassName)} />
    );
  }

  return (
    <Image
      {...props}
      src={src}
      alt={props.alt ?? ""}
      onError={(event) => {
        setFailedSrcKey(srcKey);
        onError?.(event);
      }}
    />
  );
}
