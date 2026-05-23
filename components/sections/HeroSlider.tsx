"use client";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { useRef, useState } from "react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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

  const autoplayRef = useRef(
    Autoplay({
      delay: 4500,
      stopOnMouseEnter: true,
      stopOnInteraction: false,
    }),
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
        plugins={[autoplayRef.current]}
        className="h-full min-h-[320px] w-full lg:h-[calc(100vh-80px)] lg:min-h-[640px]"
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

              <div className="absolute inset-0 bg-[#071f45]/70" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#071f45] via-[#0b4ea2]/55 to-transparent" />

              <Container className="relative z-10 flex h-full min-h-[320px] items-center md:min-h-[640px]">
                <div className="max-w-3xl">
                  <Reveal variant="fade-up">
                    <p className="mb-3 text-lg font-bold tracking-[0.2em] text-[#d7a321] uppercase md:mb-4 md:text-sm">
                      Nghệ Giang
                    </p>
                  </Reveal>

                  <Reveal variant="blur" delay={100}>
                    <h2 className="text-2xl leading-tight font-black text-white uppercase sm:text-3xl md:text-4xl lg:text-5xl">
                      {slide.title}
                    </h2>
                  </Reveal>

                  <Reveal variant="fade-up" delay={200}>
                    <p className="mt-4 max-w-2xl text-sm leading-6 text-blue-50 md:mt-6 md:text-lg md:leading-8">
                      {slide.desc}
                    </p>
                  </Reveal>
                </div>
              </Container>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious
          size="icon-xl"
          className="left-4 z-20 hidden border-white/30 bg-white/15 text-white backdrop-blur hover:bg-white hover:text-[#0b4ea2] md:flex lg:left-8"
        />
        <CarouselNext
          size="icon-xl"
          className="right-4 z-20 hidden border-white/30 bg-white/15 text-white backdrop-blur hover:bg-white hover:text-[#0b4ea2] md:flex lg:right-8"
        />

        <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 rounded-full bg-white/15 px-4 py-2 backdrop-blur-md md:bottom-8">
          <div className="flex items-center gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.title}
                type="button"
                onClick={() => {
                  api?.scrollTo(index);
                  autoplayRef.current.reset();
                }}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  current === index ? "w-8 bg-[#d7a321]" : "w-2 bg-white/60 hover:bg-white",
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
