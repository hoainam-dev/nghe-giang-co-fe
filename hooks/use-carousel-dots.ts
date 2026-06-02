"use client";

import type { CarouselApi } from "@/components/ui/carousel";
import { useEffect, useState } from "react";

export function useCarouselDots(api: CarouselApi | undefined) {
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    let cancelled = false;

    const sync = () => {
      if (cancelled) return;
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", sync);
    api.on("reInit", sync);

    void Promise.resolve().then(sync);

    return () => {
      cancelled = true;
      api.off("select", sync);
      api.off("reInit", sync);
    };
  }, [api]);

  return { current, count };
}
