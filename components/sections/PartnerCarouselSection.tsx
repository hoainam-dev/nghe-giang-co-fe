"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import Container from "@/components/ui/Container";
import Autoplay from "embla-carousel-autoplay";
import Reveal from "@/components/ui/Reveal";
import Image from "next/image";
import type { CarouselApi } from "@/components/ui/carousel";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useMemo, useState } from "react";
import { useCarouselDots } from "@/hooks/use-carousel-dots";
import { partners } from "@/data/site";
import { cn } from "@/lib/utils";

export default function PartnerCarouselSection() {
  const [api, setApi] = useState<CarouselApi>();
  const { current, count } = useCarouselDots(api);

  const autoplay = useMemo(
    () =>
      Autoplay({
        delay: 2000,
        stopOnMouseEnter: true,
        stopOnInteraction: false,
      }),
    [],
  );

  if (!partners.length) return null;

  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(173,139,85,0.05),transparent_28%),radial-gradient(circle_at_88%_18%,rgba(47,84,114,0.04),transparent_30%)]" />
      <div className="gold-accent-line absolute top-0 left-0" />

      <Container className="relative">
        <SectionTitle
          center
          eyebrow="Đối tác"
          title="Đối tác đồng hành"
          desc="Nghệ Giang hợp tác cùng các thương hiệu, nhà thầu, đại lý và đơn vị cung ứng uy tín trong lĩnh vực vật liệu xây dựng."
        />

        <Reveal variant="fade-up" delay={120}>
          <div className="relative mx-auto mt-8 max-w-6xl lg:mt-12">
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[autoplay]}
              className="w-full"
            >
              <CarouselContent className="-ml-4 py-4">
                {partners.map((partner) => (
                  <CarouselItem
                    key={partner.name}
                    className="basis-1/2 pl-4 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
                  >
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group card-elevated flex h-28 items-center justify-center p-5 sm:h-32"
                      aria-label={`Xem website ${partner.name}`}
                    >
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={180}
                        height={90}
                        className="max-h-20 w-auto max-w-full object-contain opacity-80 transition duration-300 group-hover:opacity-100"
                      />
                    </a>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            <PartnerDots
              count={count}
              current={current}
              onSelect={(index) => {
                api?.scrollTo(index);
                autoplay.reset();
              }}
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function PartnerDots({
  count,
  current,
  onSelect,
}: {
  count: number;
  current: number;
  onSelect: (index: number) => void;
}) {
  if (count <= 1) return null;

  return (
    <div className="mt-4 flex items-center justify-center gap-3">
      <div className="ring-border/60 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 shadow-[0_2px_12px_rgba(10,31,61,0.06)] ring-1 backdrop-blur">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => onSelect(index)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              current === index
                ? "bg-brand-gold w-7"
                : "bg-brand-blue/30 hover:bg-brand-blue/60 w-1.5",
            )}
            aria-label={`Chuyển đến nhóm đối tác ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
