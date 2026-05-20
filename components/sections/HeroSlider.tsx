"use client";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const slides = [
  {
    title: "Năng lực cung ứng ổn định",
    desc: "Đồng hành cùng các công trình dân dụng, công nghiệp và hạ tầng tại miền Trung.",
    image: "/images/slide-1.jpg",
  },
  {
    title: "Chất lượng cho công trình bền vững",
    desc: "Tập trung vào sản phẩm xi măng phù hợp nhu cầu nhà thầu và chủ đầu tư.",
    image: "/images/slide-2.jpg",
  },
  {
    title: "Phục vụ thị trường Đà Nẵng",
    desc: "Hướng đến dịch vụ nhanh chóng, thân thiện và chuyên nghiệp.",
    image: "/images/slide-3.jpg",
  },
];

export default function HeroSlider() {
  return (
    <section className="relative h-screen min-h-[640px] overflow-hidden bg-[#071f45]">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 4500,
            stopOnMouseEnter: true,
            stopOnInteraction: false,
          }),
        ]}
        className="h-full"
      >
        <CarouselContent className="h-screen min-h-[640px]">
          {slides.map((slide, index) => (
            <CarouselItem key={slide.title} className="relative h-screen min-h-[640px]">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                className="object-cover"
              />

              <div className="absolute inset-0 bg-[#071f45]/70" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#071f45] via-[#0b4ea2]/55 to-transparent" />

              <Container className="relative z-10 flex h-full items-center">
                <div className="max-w-3xl">
                  <Reveal variant="fade-up">
                    <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#d7a321]">
                      Nghệ Giang
                    </p>
                  </Reveal>

                  <Reveal variant="blur" delay={100}>
                    <h2 className="text-4xl font-black leading-tight text-white md:text-6xl">
                      {slide.title}
                    </h2>
                  </Reveal>

                  <Reveal variant="fade-up" delay={200}>
                    <p className="mt-6 text-lg leading-8 text-blue-50">
                      {slide.desc}
                    </p>
                  </Reveal>
                </div>
              </Container>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-4 z-20 border-white/30 bg-white/15 text-white backdrop-blur hover:bg-white hover:text-[#0b4ea2] md:left-8" />
        <CarouselNext className="right-4 z-20 border-white/30 bg-white/15 text-white backdrop-blur hover:bg-white hover:text-[#0b4ea2] md:right-8" />
      </Carousel>
    </section>
  );
}