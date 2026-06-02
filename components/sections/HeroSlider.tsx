"use client";

import Container from "@/components/ui/Container";
import Autoplay from "embla-carousel-autoplay";
import Reveal from "@/components/ui/Reveal";
import Image from "next/image";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  CarouselPrevious,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  Carousel,
} from "@/components/ui/carousel";
import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";

const slides = [
  {
    title: "Nhà phân phối xi măng chuyên nghiệp",
    desc: "Đồng hành cùng các công trình dân dụng, công nghiệp và hạ tầng tại miền Trung và Tây Nguyên.",
    image: "/images/banner_2.jpeg",
  },
  {
    title: "Chất lượng cho công trình bền vững",
    desc: "Tập trung vào sản phẩm xi măng phù hợp nhu cầu nhà thầu và chủ đầu tư.",
    image: "/images/banner_1.jpeg",
  },
];

export default function HeroSlider() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const autoplay = useMemo(
    () =>
      Autoplay({
        delay: 4500,
        stopOnMouseEnter: true,
        stopOnInteraction: false,
      }),
    [],
  );

  return (
    <section className="relative w-full overflow-hidden bg-[#071f45]">
      <Carousel
        setApi={(carouselApi) => {
          setApi(carouselApi);
          setCurrent(carouselApi?.selectedScrollSnap() ?? 0);

          carouselApi?.on("select", () => {
            setCurrent(carouselApi.selectedScrollSnap());
          });
        }}
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[autoplay]}
        className="h-full min-h-[360px] w-full lg:h-[calc(100vh-4.5rem)] lg:min-h-[640px]"
      >
        <CarouselContent className="h-full">
          {slides.map((slide, index) => (
            <CarouselItem key={slide.title} className="relative h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                className="h-full object-cover"
              />

              <div className="absolute inset-0 bg-[#071f45]/75" />
              <div className="absolute inset-0 bg-linear-to-r from-[#071f45] via-[#0b4ea2]/55 to-transparent" />

              <Container className="relative z-10 flex h-full min-h-[360px] items-center md:min-h-[640px]">
                <div className="max-w-3xl">
                  <Reveal variant="fade-up">
                    <p className="eyebrow mb-5 md:mb-6">Nghệ Giang</p>
                  </Reveal>

                  <Reveal variant="blur" delay={100}>
                    <h2 className="heading-display text-3xl text-white uppercase sm:text-4xl md:text-5xl lg:text-[3.25rem]">
                      {slide.title}
                    </h2>
                  </Reveal>

                  <Reveal variant="fade-up" delay={200}>
                    <p className="font-heading text-brand-muted/90 mt-5 max-w-2xl text-sm leading-7 font-medium md:mt-7 md:text-lg md:leading-8">
                      {slide.desc}
                    </p>
                  </Reveal>

                  <Reveal variant="fade-up" delay={300}>
                    <div className="bg-brand-gold/40 mt-8 h-px w-20" />
                  </Reveal>
                </div>
              </Container>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious
          size="icon-xl"
          className="hover:text-brand-blue left-4 z-20 hidden border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:border-white/40 hover:bg-white md:flex lg:left-8"
        />
        <CarouselNext
          size="icon-xl"
          className="hover:text-brand-blue right-4 z-20 hidden border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:border-white/40 hover:bg-white md:flex lg:right-8"
        />

        <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur-md md:bottom-10">
          <div className="flex items-center gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.title}
                type="button"
                onClick={() => {
                  api?.scrollTo(index);
                  autoplay.reset();
                }}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  current === index ? "bg-brand-gold w-7" : "w-1.5 bg-white/50 hover:bg-white/80",
                )}
                aria-label={`Chuyển đến slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Carousel>
    </section>
  );
}
