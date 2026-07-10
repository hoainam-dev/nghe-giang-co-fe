import PartnerCarouselSection from "@/components/sections/PartnerCarouselSection";
import ProductSection from "@/components/sections/ProductSection";
import ServiceSection from "@/components/sections/ServiceSection";
import ProjectSection from "@/components/sections/ProjectSection";
import HeroSection from "@/components/sections/HeroSection";
import CTASection from "@/components/sections/CTASection";
import HeroSlider from "@/components/sections/HeroSlider";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/site";

const homeTitle = `${siteConfig.name} | Xi măng miền Trung`;

export const metadata = {
  ...createPageMetadata({
    title: homeTitle,
    description: `${siteConfig.description} ${siteConfig.slogan}.`,
    path: "/",
  }),
  title: {
    absolute: homeTitle,
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <HeroSection />
      <ProductSection />
      <ServiceSection />
      <ProjectSection />
      <PartnerCarouselSection />
      <CTASection />
    </>
  );
}
