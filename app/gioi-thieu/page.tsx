import VisionMissionSection from "@/components/sections/about/VisionMissionSection";
import CompanyInfoSection from "@/components/sections/about/CompanyInfoSection";
import ThankYouSection from "@/components/sections/about/ThankYouSection";
import AboutSection from "@/components/sections/AboutSection";
import CTASection from "@/components/sections/CTASection";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#071f45] py-16 text-white md:py-24">
        <Image src="/images/banner_3.jpg" alt="" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-[#071f45]/75" />
        <div className="absolute inset-0 bg-linear-to-r from-[#071f45] via-[#0b4ea2]/60 to-transparent" />

        <Container className="relative">
          <Reveal variant="fade-down">
            <p className="eyebrow">Giới thiệu</p>
          </Reveal>

          <Reveal variant="blur" delay={100}>
            <h1 className="heading-display mt-5 max-w-5xl text-3xl text-white md:text-5xl">
              Công ty TNHH TM & TV Nghệ Giang
            </h1>
          </Reveal>

          <Reveal variant="fade-up" delay={200}>
            <p className="font-heading text-brand-muted/90 mt-6 max-w-2xl text-sm leading-7 font-medium sm:text-[17px] lg:leading-8">
              Đơn vị phân phối xi măng chuyên nghiệp, đồng hành cùng các công trình tại miền Trung
              và Tây Nguyên.
            </p>
          </Reveal>

          <Reveal variant="fade-up" delay={280}>
            <div className="bg-brand-gold/40 mt-8 h-px w-20" />
          </Reveal>
        </Container>
      </section>

      <AboutSection />
      <CompanyInfoSection />
      <VisionMissionSection />
      <ThankYouSection />
      <CTASection />
    </>
  );
}
