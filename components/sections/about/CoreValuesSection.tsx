import SectionTitle from "@/components/ui/SectionTitle";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import {
  ShieldCheck,
  BadgeCheck,
  Handshake,
  Lightbulb,
  Sparkles,
  Network,
  Leaf,
} from "lucide-react";
import { coreValues } from "@/data/site";

const valueIcons = {
  "Hệ thống": Network,
  "Chất lượng": BadgeCheck,
  "Uy tín": ShieldCheck,
  "Sáng tạo": Lightbulb,
  "Hợp tác": Handshake,
  "Bền vững": Leaf,
};

export default function CoreValuesSection() {
  return (
    <section className="section-muted relative overflow-hidden py-14 sm:py-16 lg:py-20">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(47,84,114,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(47,84,114,0.035)_1px,transparent_1px)] bg-size-[48px_48px]" />
      <div className="gold-accent-line absolute top-0 left-0" />

      <Container className="relative">
        <SectionTitle
          eyebrow="Giá trị cốt lõi"
          title="Nền tảng tạo nên uy tín Nghệ Giang"
          desc="Mỗi giá trị là một nguyên tắc vận hành, giúp Nghệ Giang xây dựng quan hệ bền vững với khách hàng, đối tác và đội ngũ."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {coreValues.map((item, index) => {
            const Icon = valueIcons[item.title as keyof typeof valueIcons] ?? Sparkles;

            return (
              <Reveal key={item.title} variant="zoom-in" delay={index * 60}>
                <div className="group card-elevated relative h-full overflow-hidden p-6">
                  <div className="bg-brand-blue/5 group-hover:bg-brand-gold/10 absolute -top-10 -right-10 size-28 rounded-full transition duration-300" />

                  <div className="relative">
                    <div className="mb-5 flex items-center justify-between gap-4">
                      <div className="icon-badge size-12">
                        <Icon size={23} />
                      </div>

                      <span className="font-heading text-brand-blue/15 group-hover:text-brand-gold/40 text-sm font-bold transition duration-300">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h4 className="font-heading text-brand-navy text-xl font-bold">{item.title}</h4>

                    <p className="text-brand-text-muted mt-3 text-sm leading-7 font-medium">
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
  );
}
