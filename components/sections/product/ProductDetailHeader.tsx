import type { ProductDetail } from "@/types";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Image from "next/image";

type ProductDetailProps = {
  product: ProductDetail;
};

export default function ProductDetailHeader({ product }: ProductDetailProps) {
  return (
    <section className="bg-brand-navy-dark relative overflow-hidden py-10 text-white sm:py-14 lg:py-16">
      <Image src="/images/banner_3.jpg" alt="" fill priority className="object-cover" />
      <div className="page-hero-overlay absolute inset-0" />

      <Container className="relative">
        <div className="max-w-4xl">
          <Reveal variant="fade-down">
            <p className="eyebrow">{product.brand}</p>
          </Reveal>

          <Reveal variant="blur" delay={100}>
            <h1 className="heading-display mt-4 text-3xl text-white sm:text-4xl md:text-5xl lg:text-6xl">
              {product.name}
            </h1>
          </Reveal>

          <Reveal variant="fade-up" delay={200}>
            <p className="mt-5 max-w-2xl text-sm leading-7 font-medium text-brand-muted/90 sm:text-base md:text-lg md:leading-8">
              {product.desc}
            </p>
          </Reveal>

          <Reveal variant="fade-up" delay={280}>
            <div className="bg-brand-gold/40 mt-8 h-px w-20" />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
