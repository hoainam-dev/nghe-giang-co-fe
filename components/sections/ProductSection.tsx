"use client";

import FeaturedProductCard from "@/components/cards/FeaturedProductCard";
import SectionTitle from "@/components/ui/SectionTitle";
import CarouselDots from "@/components/ui/CarouselDots";
import ProductCard from "@/components/cards/ProductCard";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  CarouselPrevious,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  Carousel,
} from "@/components/ui/carousel";
import { featuredProducts, productGroups } from "@/data/site";
import { useEffect, useState } from "react";

export default function ProductSection() {
  const [featuredApi, setFeaturedApi] = useState<CarouselApi>();
  const [featuredCurrent, setFeaturedCurrent] = useState(0);
  const [featuredCount, setFeaturedCount] = useState(0);

  const [productApi, setProductApi] = useState<CarouselApi>();
  const [productCurrent, setProductCurrent] = useState(0);
  const [productCount, setProductCount] = useState(0);

  useEffect(() => {
    if (!featuredApi) return;

    const updateCurrent = () => {
      setFeaturedCurrent(featuredApi.selectedScrollSnap());
    };

    setFeaturedCount(featuredApi.scrollSnapList().length);
    updateCurrent();

    featuredApi.on("select", updateCurrent);
    featuredApi.on("reInit", updateCurrent);

    return () => {
      featuredApi.off("select", updateCurrent);
      featuredApi.off("reInit", updateCurrent);
    };
  }, [featuredApi]);

  useEffect(() => {
    if (!productApi) return;

    const updateCurrent = () => {
      setProductCurrent(productApi.selectedScrollSnap());
    };

    setProductCount(productApi.scrollSnapList().length);
    updateCurrent();

    productApi.on("select", updateCurrent);
    productApi.on("reInit", updateCurrent);

    return () => {
      productApi.off("select", updateCurrent);
      productApi.off("reInit", updateCurrent);
    };
  }, [productApi]);

  return (
    <section id="danh-sach">
      <div className="relative overflow-hidden section-muted py-12 sm:py-16 lg:py-20">
        <div className="absolute inset-0 bg-surface/90" />

        <Container className="relative w-full">
          <SectionTitle center eyebrow="Sản phẩm" title="Sản phẩm tiêu biểu" />

          <Reveal variant="fade-up" delay={120}>
            <div className="relative mx-auto mt-6 max-w-5xl">
              <Carousel
                setApi={setFeaturedApi}
                opts={{
                  align: "center",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-4 py-3">
                  {featuredProducts.map((item) => (
                    <CarouselItem key={item.slug} className="pl-4 md:basis-1/2">
                      <FeaturedProductCard item={item} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>

              <CarouselDots
                count={featuredCount}
                current={featuredCurrent}
                onSelect={(index) => featuredApi?.scrollTo(index)}
                className="mt-4"
              />
            </div>
          </Reveal>

          <Reveal variant="fade-up" delay={200}>
            <div className="section-divider mt-10 w-full" />
          </Reveal>

          <Reveal variant="fade-up" delay={200}>
            <div className="mx-auto mt-10 max-w-5xl sm:mt-12">
              <Reveal variant="fade-down">
                <h3 className="eyebrow mb-5 text-center">
                  Các sản phẩm khác
                </h3>
              </Reveal>

              <div className="relative">
                <Carousel
                  setApi={setProductApi}
                  opts={{
                    align: "start",
                  }}
                  className="w-full"
                >
                  <CarouselContent className="-ml-4 py-3">
                    {productGroups.map((item) => (
                      <CarouselItem
                        key={item.slug}
                        className="basis-full pl-4 sm:basis-1/2 lg:basis-1/3"
                      >
                        <div className="mx-auto max-w-[360px] sm:mx-px">
                          <ProductCard item={item} />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>

                  <CarouselPrevious
                    size="icon-xl"
                    className="left-2 z-20 hidden border-brand-blue/20 bg-white/95 text-brand-blue shadow-[0_4px_16px_rgba(10,31,61,0.08)] backdrop-blur hover:bg-brand-blue hover:text-white md:flex lg:-left-14"
                  />

                  <CarouselNext
                    size="icon-xl"
                    className="right-2 z-20 hidden border-brand-blue/20 bg-white/95 text-brand-blue shadow-[0_4px_16px_rgba(10,31,61,0.08)] backdrop-blur hover:bg-brand-blue hover:text-white md:flex lg:-right-14"
                  />
                </Carousel>

                <CarouselDots
                  count={productCount}
                  current={productCurrent}
                  onSelect={(index) => productApi?.scrollTo(index)}
                  className="mt-4"
                />
              </div>
            </div>
          </Reveal>
        </Container>
      </div>
    </section>
  );
}
