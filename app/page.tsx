import ProductSection from "@/components/sections/ProductSection";
import ServiceSection from "@/components/sections/ServiceSection";
import ProjectSection from "@/components/sections/ProjectSection";
import AboutSection from "@/components/sections/AboutSection";
import StatsSection from "@/components/sections/StatsSection";
import HeroSection from "@/components/sections/HeroSection";
import CTASection from "@/components/sections/CTASection";
import HeroSlider from "@/components/sections/HeroSlider";
import PartnerCarouselSection from "@/components/sections/PartnerCarouselSection";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <HeroSection />
      <StatsSection />
      <ProductSection />
      <ServiceSection />
      <ProjectSection />
      <PartnerCarouselSection />
      <CTASection />
    </>
  );
}
