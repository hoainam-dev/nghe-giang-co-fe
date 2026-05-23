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
    <section className="relative overflow-hidden bg-[#f5f8fc] py-14 sm:py-16 lg:py-20">
      <div className="absolute inset-0 [background-image:linear-gradient(rgba(11,78,162,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(11,78,162,0.08)_1px,transparent_1px)] [background-size:44px_44px] opacity-[0.35]" />
      <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[#0b4ea2] via-[#d7a321] to-[#0b4ea2]" />
      <div className="absolute -right-24 bottom-10 size-80 rounded-full bg-[#0b4ea2]/15 blur-3xl" />
      <div className="absolute top-10 left-6 hidden h-24 w-24 rounded-[2rem] border border-[#d7a321]/25 lg:block" />
      <div className="absolute right-8 bottom-12 hidden h-32 w-32 rounded-full border border-[#0b4ea2]/20 lg:block" />

      <Container className="relative">
        <SectionTitle
          eyebrow="Giá trị cốt lõi"
          title="Nền tảng tạo nên uy tín Nghệ Giang"
          desc="Mỗi giá trị là một nguyên tắc vận hành, giúp Nghệ Giang xây dựng quan hệ bền vững với khách hàng, đối tác và đội ngũ."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {coreValues.map((item, index) => {
            const Icon = valueIcons[item.title as keyof typeof valueIcons] ?? Sparkles;

            return (
              <Reveal key={item.title} variant="zoom-in" delay={index * 60}>
                <div className="group relative h-full overflow-hidden rounded-[1.5rem] border border-white/80 bg-white/85 p-5 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[#d7a321]/60 hover:bg-white hover:shadow-[0_24px_60px_rgba(15,23,42,0.14)] sm:p-6">
                  <div className="absolute -top-10 -right-10 size-28 rounded-full bg-[#0b4ea2]/7 transition duration-300 group-hover:bg-[#d7a321]/15" />

                  <div className="relative">
                    <div className="mb-5 flex items-center justify-between gap-4">
                      <div className="flex size-12 items-center justify-center rounded-2xl bg-[#0b4ea2]/10 text-[#0b4ea2] shadow-inner transition duration-300 group-hover:bg-[#d7a321] group-hover:text-white">
                        <Icon size={24} />
                      </div>

                      <span className="text-sm font-black text-[#0b4ea2]/15 transition duration-300 group-hover:text-[#d7a321]/40">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h4 className="text-lg font-black text-[#0b2f66] uppercase">{item.title}</h4>

                    <p className="mt-3 text-sm leading-7 text-slate-600">{item.desc}</p>
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
