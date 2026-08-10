"use client";

import FeaturedProductCard from "@/components/cards/FeaturedProductCard";
import SectionTitle from "@/components/ui/SectionTitle";
import CarouselDots from "@/components/ui/CarouselDots";
import ProductCard from "@/components/cards/ProductCard";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import {
  CarouselPrevious,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  Carousel,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useCarouselDots } from "@/hooks/use-carousel-dots";
import { featuredProducts, productGroups } from "@/data/site";
import { useState } from "react";

export default function ProductSection() {
  const [featuredApi, setFeaturedApi] = useState<CarouselApi>();
  const { current: featuredCurrent, count: featuredCount } = useCarouselDots(featuredApi);

  const [productApi, setProductApi] = useState<CarouselApi>();
  const { current: productCurrent, count: productCount } = useCarouselDots(productApi);

  return (
    <section id="danh-sach">
      <div className="section-muted relative overflow-hidden py-12 sm:py-16 lg:py-20">
        <div className="bg-surface/90 absolute inset-0" />

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
                <h3 className="eyebrow mb-5 text-center">Các sản phẩm khác</h3>
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
                        <div className="mx-auto max-w-90 sm:mx-px">
                          <ProductCard item={item} />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>

                  <CarouselPrevious
                    size="icon-xl"
                    className="border-brand-blue/20 text-brand-blue hover:bg-brand-blue left-2 z-20 hidden bg-white/95 shadow-[0_4px_16px_rgba(10,31,61,0.08)] backdrop-blur hover:text-white md:flex lg:-left-14"
                  />

                  <CarouselNext
                    size="icon-xl"
                    className="border-brand-blue/20 text-brand-blue hover:bg-brand-blue right-2 z-20 hidden bg-white/95 shadow-[0_4px_16px_rgba(10,31,61,0.08)] backdrop-blur hover:text-white md:flex lg:-right-14"
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
