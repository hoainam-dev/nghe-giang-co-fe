import VisionMissionSection from "@/components/sections/about/VisionMissionSection";
import OrganizationSection from "@/components/sections/about/OrganizationSection";
import CompanyInfoSection from "@/components/sections/about/CompanyInfoSection";
import ThankYouSection from "@/components/sections/about/ThankYouSection";
import AboutSection from "@/components/sections/AboutSection";
import CTASection from "@/components/sections/CTASection";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#071f45] py-16 text-white md:py-24">
        <div className="absolute inset-0 bg-[url('/images/about-hero.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-[#071f45]/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071f45] via-[#0b4ea2]/60 to-transparent" />

        <Container className="relative">
          <Reveal variant="fade-down">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d7a321]">
              Giới thiệu
            </p>
          </Reveal>

          <Reveal variant="blur" delay={100}>
            <h1 className="mt-4 max-w-5xl text-3xl font-black leading-tight md:text-5xl">
              Công ty TNHH TM & TV Nghệ Giang
            </h1>
          </Reveal>

          <Reveal variant="fade-up" delay={200}>
            <p className="mt-5 max-w-3xl text-base leading-7 text-blue-50 md:mt-6 md:text-lg md:leading-8">
              Đơn vị phân phối xi măng chuyên nghiệp, đồng hành cùng các công trình tại miền Trung và Tây Nguyên.
            </p>
          </Reveal>
        </Container>
      </section>

      <AboutSection />
      <CompanyInfoSection />
      <VisionMissionSection />
      <OrganizationSection />
      <ThankYouSection />
      <CTASection />
    </>
  );
}
