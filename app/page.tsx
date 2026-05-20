import HomeImageSlider from "@/components/sections/HomeImageSlider";
import ProductSection from "@/components/sections/ProductSection";
import ServiceSection from "@/components/sections/ServiceSection";
import ProjectSection from "@/components/sections/ProjectSection";
import AboutSection from "@/components/sections/AboutSection";
import StatsSection from "@/components/sections/StatsSection";
import HeroSection from "@/components/sections/HeroSection";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HomeImageSlider />
      <AboutSection />
      <StatsSection />
      <ProductSection />
      <ServiceSection />
      <ProjectSection />
      <CTASection />
    </>
  );
}