import ProductSection from "@/components/sections/ProductSection";
import CTASection from "@/components/sections/CTASection";
import Container from "@/components/ui/Container";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

export default function ProductPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#071f45] py-24 text-white">
        <Image src="/images/banner_3.jpg" alt="" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-[#071f45]/88" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#071f45] via-[#0b4ea2]/65 to-[#071f45]" />
        <div className="absolute -right-24 bottom-10 size-80 rounded-full bg-blue-400/10 blur-3xl" />
        <Container className="relative">
          <div className="max-w-4xl">
            <Reveal variant="fade-down">
              <p className="text-sm font-bold tracking-[0.22em] text-[#d7a321] uppercase">
                Sản phẩm
              </p>
            </Reveal>

            <Reveal variant="blur" delay={100}>
              <h1 className="mt-4 text-3xl leading-tight font-black uppercase sm:text-4xl lg:text-6xl">
                Sản phẩm xi măng Nghệ Giang
              </h1>
            </Reveal>

            <Reveal variant="fade-up" delay={200}>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-blue-50 sm:text-base lg:text-lg lg:leading-8">
                Danh mục sản phẩm phục vụ công trình dân dụng, công nghiệp và hạ tầng.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <ProductSection />
      <CTASection />
    </>
  );
}
