import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";
import CTASection from "@/components/sections/CTASection";
import { partners } from "@/data/site";
import {
  BadgeCheck,
  Building2,
  Handshake,
  Network,
  PackageCheck,
  ShieldCheck,
  Truck,
} from "lucide-react";

export const metadata = {
  title: "Các đối tác",
  description: "Mạng lưới đối tác đồng hành cùng Nghệ Giang trong lĩnh vực phân phối xi măng.",
};

const partnerStats = [
  {
    value: "10+",
    label: "Đối tác chiến lược",
  },
  {
    value: "50+",
    label: "Đại lý và nhà thầu",
  },
  {
    value: "2",
    label: "Khu vực trọng điểm",
  },
];

const cooperationItems = [
  {
    icon: ShieldCheck,
    title: "Uy tín",
    desc: "Ưu tiên hợp tác với các thương hiệu, nhà máy và đơn vị có năng lực cung ứng ổn định.",
  },
  {
    icon: PackageCheck,
    title: "Chất lượng",
    desc: "Sản phẩm được kiểm soát theo tiêu chuẩn, phù hợp cho nhiều loại công trình.",
  },
  {
    icon: Truck,
    title: "Tiến độ",
    desc: "Phối hợp vận tải và kho bãi để đảm bảo giao hàng đúng thời gian cam kết.",
  },
];

export default function PartnersPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#071f45] py-16 text-white sm:py-20 lg:py-24">
        <Image src="/images/banner_3.jpg" alt="" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-[#071f45]/88" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#071f45] via-[#0b4ea2]/65 to-[#071f45]" />
        <div className="absolute -right-24 bottom-10 size-80 rounded-full bg-blue-400/10 blur-3xl" />

        <Container className="relative">
          <div className="max-w-4xl">
            <Reveal variant="fade-down">
              <p className="text-sm font-bold tracking-[0.22em] text-[#d7a321] uppercase">
                Đối tác Nghệ Giang
              </p>
            </Reveal>

            <Reveal variant="blur" delay={100}>
              <h1 className="mt-4 text-3xl leading-tight font-black uppercase sm:text-4xl lg:text-6xl">
                Đồng hành cùng các thương hiệu và đơn vị xây dựng uy tín
              </h1>
            </Reveal>

            <Reveal variant="fade-up" delay={200}>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-blue-50 sm:text-base lg:text-lg lg:leading-8">
                Nghệ Giang xây dựng mạng lưới hợp tác bền vững với các nhà máy, nhà thầu, đại lý và
                đơn vị logistics nhằm mang đến giải pháp cung ứng xi măng ổn định, chuyên nghiệp.
              </p>
            </Reveal>

            <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
              {partnerStats.map((item, index) => (
                <Reveal key={item.label} variant="zoom-in" delay={260 + index * 80}>
                  <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                    <p className="text-3xl font-black text-[#d7a321]">{item.value}</p>
                    <p className="mt-1 text-sm font-semibold text-blue-50">{item.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-slate-50 py-14 sm:py-16 lg:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(215,163,33,0.16),transparent_28%),radial-gradient(circle_at_88%_15%,rgba(11,78,162,0.12),transparent_30%)]" />

        <Container className="relative">
          <SectionTitle
            eyebrow="Mạng lưới hợp tác"
            title="Các đối tác tiêu biểu"
            desc="Nghệ Giang luôn coi trọng quan hệ hợp tác dài hạn, minh bạch và hiệu quả với các đối tác trong chuỗi cung ứng vật liệu xây dựng."
          />

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
            {partners.map((partner, index) => (
              <Reveal key={partner.name} variant="fade-up" delay={index * 70}>
                <div className="group relative h-full overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#d7a321]/60 hover:shadow-xl sm:p-6">
                  <div className="absolute -top-10 -right-10 size-28 rounded-full bg-[#0b4ea2]/5 transition duration-300 group-hover:bg-[#d7a321]/15" />

                  <div className="relative">
                    <div className="mb-5 flex h-20 items-center justify-center rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-100">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={180}
                        height={80}
                        className="max-h-20 w-auto object-contain"
                      />
                    </div>

                    <div className="mb-3 flex items-center gap-2">
                      <BadgeCheck size={18} className="shrink-0 text-[#d7a321]" />
                      <h3 className="text-lg font-black text-[#0b2f66]">{partner.name}</h3>
                    </div>

                    <p className="text-sm leading-7 text-slate-600">{partner.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <Reveal variant="fade-right">
              <div>
                <p className="text-sm font-bold tracking-[0.2em] text-[#d7a321] uppercase">
                  Tiêu chí hợp tác
                </p>
                <h2 className="mt-3 text-2xl leading-tight font-black text-[#0b2f66] uppercase sm:text-3xl lg:text-4xl">
                  Hợp tác dựa trên uy tín, chất lượng và hiệu quả vận hành
                </h2>
                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                  Chúng tôi hướng đến xây dựng hệ sinh thái phân phối xi măng chuyên nghiệp, nơi mỗi
                  đối tác đều đóng vai trò quan trọng trong việc đảm bảo chất lượng sản phẩm và tiến
                  độ cung ứng.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {cooperationItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Reveal key={item.title} variant="fade-up" delay={index * 80}>
                    <div className="flex gap-4 rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 transition duration-300 hover:border-[#0b4ea2]/30 hover:bg-white hover:shadow-lg">
                      <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[#0b4ea2]/10 text-[#0b4ea2]">
                        <Icon size={24} />
                      </div>

                      <div>
                        <h3 className="text-lg font-black text-[#0b2f66]">{item.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-600">{item.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
