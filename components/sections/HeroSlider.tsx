"use client";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

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
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="bg-white py-16">
      <Container>
        <Reveal variant="fade-up">
          <div className="relative overflow-hidden rounded-4xl bg-[#071f45] shadow-2xl">
            <div className="relative h-[320px] md:h-[520px]">
              {slides.map((slide, index) => (
                <div
                  key={slide.title}
                  className={cn(
                    "absolute inset-0 transition-all duration-1000",
                    active === index ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
                  )}
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    priority={index === 0}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-r from-[#071f45]/90 via-[#071f45]/50 to-transparent" />

                  <div className="absolute inset-0 flex items-center">
                    <div className="max-w-2xl px-6 md:px-12">
                      <p className="mb-4 text-sm font-bold tracking-[0.2em] text-[#d7a321] uppercase">
                        Nghệ Giang
                      </p>
                      <h2 className="text-3xl font-black text-white md:text-5xl">{slide.title}</h2>
                      <p className="mt-5 text-base leading-7 text-blue-50 md:text-lg">
                        {slide.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute bottom-6 left-6 flex gap-2 md:left-12">
              {slides.map((slide, index) => (
                <button
                  key={slide.title}
                  type="button"
                  onClick={() => setActive(index)}
                  className={cn(
                    "h-2.5 rounded-full transition-all",
                    active === index ? "w-10 bg-[#d7a321]" : "w-2.5 bg-white/60",
                  )}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
