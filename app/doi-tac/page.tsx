import ProjectSection from "@/components/sections/ProjectSection";
import SectionTitle from "@/components/ui/SectionTitle";
import CTASection from "@/components/sections/CTASection";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import { partners } from "@/data/site";

export const metadata = {
  title: "Các đối tác",
  description: "Mạng lưới đối tác đồng hành cùng Nghệ Giang trong lĩnh vực phân phối xi măng.",
};

const partnerStats = [
  { value: "10+", label: "Đối tác chiến lược" },
  { value: "50+", label: "Đại lý và nhà thầu" },
  { value: "2", label: "Khu vực trọng điểm" },
];

export default function PartnersPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#071f45] py-16 text-white md:py-24">
        <Image src="/images/banner_3.jpg" alt="" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-[#071f45]/75" />
        <div className="absolute inset-0 bg-linear-to-r from-[#071f45] via-[#0b4ea2]/60 to-transparent" />

        <Container className="relative">
          <div className="max-w-4xl">
            <Reveal variant="fade-down">
              <p className="eyebrow">Đối tác Nghệ Giang</p>
            </Reveal>

            <Reveal variant="blur" delay={100}>
              <h1 className="heading-display mt-5 text-3xl text-white sm:text-4xl lg:text-6xl">
                Đồng hành cùng các thương hiệu và đơn vị xây dựng uy tín
              </h1>
            </Reveal>

            <Reveal variant="fade-up" delay={200}>
              <p className="font-heading text-brand-muted/90 mt-6 max-w-2xl text-sm leading-7 font-medium sm:text-[17px] lg:leading-8">
                Nghệ Giang xây dựng mạng lưới hợp tác bền vững với các nhà máy, nhà thầu, đại lý và
                đơn vị logistics nhằm mang đến giải pháp cung ứng xi măng ổn định, chuyên nghiệp.
              </p>
            </Reveal>

            <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
              {partnerStats.map((item, index) => (
                <Reveal key={item.label} variant="zoom-in" delay={260 + index * 80}>
                  <div className="card-glass rounded-2xl p-4">
                    <p className="font-heading text-brand-gold-light text-3xl font-bold">
                      {item.value}
                    </p>
                    <p className="text-brand-muted/85 mt-1 text-sm font-medium">{item.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-muted relative overflow-hidden py-14 sm:py-16 lg:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(201,162,39,0.1),transparent_28%),radial-gradient(circle_at_88%_15%,rgba(12,90,158,0.08),transparent_30%)]" />

        <Container className="relative">
          <SectionTitle
            eyebrow="Mạng lưới hợp tác"
            title="Các đối tác tiêu biểu"
            desc="Nghệ Giang luôn coi trọng quan hệ hợp tác dài hạn, minh bạch và hiệu quả với các đối tác trong chuỗi cung ứng vật liệu xây dựng."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
            {partners.map((partner, index) => (
              <Reveal key={partner.name} variant="fade-up" delay={index * 70}>
                <div className="group card-elevated relative h-full overflow-hidden p-6">
                  <div className="bg-brand-blue/5 group-hover:bg-brand-gold/10 absolute -top-10 -right-10 size-28 rounded-full transition duration-300" />

                  <div className="relative">
                    <div className="bg-surface ring-border/60 mb-5 flex h-20 items-center justify-center rounded-2xl p-4 ring-1">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={180}
                        height={80}
                        className="max-h-20 w-auto object-contain"
                      />
                    </div>

                    <div className="mb-3 flex items-center gap-2">
                      <BadgeCheck size={17} className="text-brand-gold shrink-0" />
                      <h3 className="font-heading text-brand-navy text-lg font-bold">
                        {partner.name}
                      </h3>
                    </div>

                    <p className="text-brand-text-muted text-sm leading-7 font-medium">
                      {partner.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <ProjectSection />

      <CTASection />
    </>
  );
}
