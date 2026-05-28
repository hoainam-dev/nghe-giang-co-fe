import ProductSection from "@/components/sections/ProductSection";
import CTASection from "@/components/sections/CTASection";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Image from "next/image";

export default function ProductPage() {
  return (
    <>
      <section className="bg-brand-navy-dark relative overflow-hidden py-24 text-white">
        <Image src="/images/banner_3.jpg" alt="" fill priority className="object-cover" />
        <div className="page-hero-overlay absolute inset-0" />

        <Container className="relative">
          <div className="max-w-4xl">
            <Reveal variant="fade-down">
              <p className="eyebrow">Sản phẩm</p>
            </Reveal>

            <Reveal variant="blur" delay={100}>
              <h1 className="heading-display mt-5 text-3xl text-white sm:text-4xl lg:text-6xl">
                Sản phẩm xi măng Nghệ Giang
              </h1>
            </Reveal>

            <Reveal variant="fade-up" delay={200}>
              <p className="mt-6 max-w-2xl text-sm leading-7 font-medium text-brand-muted/90 sm:text-base lg:text-lg lg:leading-8">
                Danh mục sản phẩm phục vụ công trình dân dụng, công nghiệp và hạ tầng.
              </p>
            </Reveal>

            <Reveal variant="fade-up" delay={280}>
              <div className="bg-brand-gold/40 mt-8 h-px w-20" />
            </Reveal>
          </div>
        </Container>
      </section>

      <ProductSection />
      <CTASection />
    </>
  );
}
