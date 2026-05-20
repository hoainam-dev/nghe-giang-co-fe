import ProductSection from "@/components/sections/ProductSection";
import CTASection from "@/components/sections/CTASection";
import Container from "@/components/ui/Container";

export default function ProductPage() {
  return (
    <>
      <section className="bg-[#071f45] py-24 text-white">
        <Container>
          <p className="text-sm font-bold tracking-[0.2em] text-[#d7a321] uppercase">Sản phẩm</p>
          <h1 className="mt-4 text-4xl font-black md:text-5xl">Sản phẩm xi măng Nghệ Giang</h1>
          <p className="mt-5 max-w-2xl text-blue-100">
            Danh mục sản phẩm phục vụ công trình dân dụng, công nghiệp và hạ tầng.
          </p>
        </Container>
      </section>

      <ProductSection />
      <CTASection />
    </>
  );
}
