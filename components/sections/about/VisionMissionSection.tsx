import CoreValuesSection from "@/components/sections/about/CoreValuesSection";
import SectionTitle from "@/components/ui/SectionTitle";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Image from "next/image";
import { Eye, Target } from "lucide-react";

const visionMissionItems = [
  {
    index: "01",
    title: "Tầm nhìn",
    icon: Eye,
    desc: "Trở thành nhà phân phối xi măng hàng đầu Việt Nam, là đối tác chiến lược của các nhà máy xi măng, nhà thầu và đại lý lớn.",
  },
  {
    index: "02",
    title: "Sứ mệnh",
    icon: Target,
    desc: "Mang đến cho khách hàng những sản phẩm chất lượng với dịch vụ chuyên nghiệp và hoàn hảo nhất.",
  },
];

export default function VisionMissionSection() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-navy-mid py-14 text-white sm:py-16 lg:py-20">
        <Image src="/images/banner_2.jpeg" alt="" fill className="object-cover opacity-55" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(21,30,44,0.58)_0%,rgba(30,42,58,0.65)_100%)]" />

        <Container className="relative">
          <SectionTitle
            eyebrow="Định hướng phát triển"
            title="Tầm nhìn và sứ mệnh"
            desc="Nghệ Giang định hướng phát triển bền vững, lấy chất lượng sản phẩm, uy tín thương hiệu và hiệu quả vận hành làm nền tảng."
            variant="dark"
          />

          <div className="mt-10 grid gap-5 lg:mt-12 lg:grid-cols-2">
            {visionMissionItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} variant="fade-up" delay={index * 100}>
                  <div className="group relative h-full overflow-hidden rounded-[1.25rem] border border-white/16 bg-white/10 p-7 backdrop-blur-md transition duration-300 hover:bg-white/14 sm:p-8">
                    <div className="absolute top-5 right-5 font-heading text-6xl leading-none font-bold text-white/5 sm:text-7xl">
                      {item.index}
                    </div>

                    <div className="relative">
                      <div className="mb-7 flex items-center justify-between gap-4">
                        <div className="flex size-14 items-center justify-center rounded-2xl bg-brand-blue text-white shadow-[0_4px_16px_rgba(13,21,32,0.2)]">
                          <Icon size={26} />
                        </div>

                        <div className="h-px flex-1 bg-linear-to-r from-brand-gold/40 to-transparent" />
                      </div>

                      <h3 className="font-heading text-2xl font-bold text-brand-gold-light sm:text-3xl">
                        {item.title}
                      </h3>

                      <p className="mt-4 text-sm leading-7 font-medium text-white/85 sm:text-base sm:leading-8">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <CoreValuesSection />
    </>
  );
}
