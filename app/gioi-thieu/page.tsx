import AboutSection from "@/components/sections/AboutSection";
import StatsSection from "@/components/sections/StatsSection";
import CTASection from "@/components/sections/CTASection";
import Container from "@/components/ui/Container";

export default function AboutPage() {
  return (
    <>
      <section className="bg-[#071f45] py-24 text-white">
        <Container>
          <p className="text-sm font-bold tracking-[0.2em] text-[#d7a321] uppercase">Giới thiệu</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black md:text-5xl">
            Công ty TNHH Nghệ Giang
          </h1>
          <p className="mt-5 max-w-2xl text-blue-100">
            Doanh nghiệp định hướng phát triển trong lĩnh vực xi măng, vật liệu xây dựng và giải
            pháp cung ứng cho công trình tại miền Trung.
          </p>
        </Container>
      </section>

      <AboutSection />
      <StatsSection />
      <CTASection />
    </>
  );
}
