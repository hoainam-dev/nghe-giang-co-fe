"use client";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useRef, useState } from "react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";
import { cn } from "@/lib/utils";
import type { CarouselApi } from "@/components/ui/carousel";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import { partners } from "@/data/site";

export default function PartnerCarouselSection() {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    const autoplayRef = useRef(
        Autoplay({
            delay: 2000,
            stopOnMouseEnter: true,
            stopOnInteraction: false,
        }),
    );

    useEffect(() => {
        if (!api) return;

        const updateCurrent = () => {
            setCurrent(api.selectedScrollSnap());
        };

        setCount(api.scrollSnapList().length);
        updateCurrent();

        api.on("select", updateCurrent);
        api.on("reInit", updateCurrent);

        return () => {
            api.off("select", updateCurrent);
            api.off("reInit", updateCurrent);
        };
    }, [api]);

    if (!partners.length) return null;

    return (
        <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(215,163,33,0.12),transparent_28%),radial-gradient(circle_at_88%_18%,rgba(11,78,162,0.1),transparent_30%)]" />
            <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#0b4ea2] via-[#d7a321] to-[#0b4ea2]" />

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
                            plugins={[autoplayRef.current]}
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
                                            className="group flex h-28 items-center justify-center rounded-[1.25rem] border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#d7a321]/60 hover:shadow-xl sm:h-32"
                                            aria-label={`Xem website ${partner.name}`}
                                        >
                                            <Image
                                                src={partner.logo}
                                                alt={partner.name}
                                                width={180}
                                                height={90}
                                                className="max-h-24 w-auto max-w-full object-contain transition duration-300 group-hover:grayscale-0"
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
                                autoplayRef.current.reset();
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
            <div className="flex items-center gap-2 rounded-full bg-white/85 px-4 py-2 shadow-sm ring-1 ring-slate-200 backdrop-blur">
                {Array.from({ length: count }).map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        onClick={() => onSelect(index)}
                        className={cn(
                            "h-2 rounded-full transition-all duration-300",
                            current === index
                                ? "w-8 bg-[#d7a321]"
                                : "w-2 bg-[#0b4ea2]/35 hover:bg-[#0b4ea2]",
                        )}
                        aria-label={`Chuyển đến nhóm đối tác ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}