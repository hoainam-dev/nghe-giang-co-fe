import ProductSection from "@/components/sections/ProductSection";
import CTASection from "@/components/sections/CTASection";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Image from "next/image";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Sản phẩm xi măng",
  description:
    "Danh mục sản phẩm xi măng Nghệ Giang: Hoàng Thạch, Hải Vân, Kaito, Vicem Wall Cem PCB30, PCB40 phục vụ công trình dân dụng, công nghiệp và hạ tầng.",
  path: "/san-pham",
});

export default function ProductPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#071f45] py-16 text-white md:py-24">
        <Image
          src="/images/banner_3.jpg"
          alt="Banner sản phẩm xi măng Nghệ Giang"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#071f45]/75" />
        <div className="absolute inset-0 bg-linear-to-r from-[#071f45] via-[#0b4ea2]/60 to-transparent" />

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
              <p className="font-heading text-brand-muted/90 mt-6 max-w-2xl text-sm leading-7 font-medium sm:text-[17px] lg:leading-8">
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
