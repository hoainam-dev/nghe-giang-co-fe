import ServiceSection from "@/components/sections/ServiceSection";
import CTASection from "@/components/sections/CTASection";
import Container from "@/components/ui/Container";

export default function ServicePage() {
  return (
    <>
      <section className="bg-[#071f45] py-24 text-white">
        <Container>
          <p className="text-sm font-bold tracking-[0.2em] text-[#d7a321] uppercase">Dịch vụ</p>
          <h1 className="mt-4 text-4xl font-black md:text-5xl">
            Dịch vụ cung ứng và tư vấn vật liệu
          </h1>
        </Container>
      </section>

      <ServiceSection />
      <CTASection />
    </>
  );
}
