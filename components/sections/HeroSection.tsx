import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import GLink from "@/components/general/GLink";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#071f45]">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(11,78,162,0.95),rgba(7,31,69,0.9)),url('/images/hero-cement.jpg')] bg-cover bg-center" />
      <div className="absolute -right-24 top-20 size-72 rounded-full bg-[#d7a321]/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 size-80 rounded-full bg-blue-400/20 blur-3xl" />

      <Container className="relative grid min-h-[720px] items-center gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Reveal variant="fade-down">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/20">
              <ShieldCheck size={18} />
              Vật liệu bền vững cho công trình miền Trung
            </div>
          </Reveal>

          <Reveal variant="blur" delay={120}>
            <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
              {siteConfig.name}
            </h1>
          </Reveal>

          <Reveal variant="fade-up" delay={220}>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-50">
              {siteConfig.description}
            </p>
          </Reveal>

          <Reveal variant="fade-up" delay={320}>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <GLink
                href="/san-pham"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d7a321] px-7 py-4 text-sm font-bold text-white shadow-xl shadow-yellow-950/30 transition hover:-translate-y-1 hover:bg-[#c39014]"
              >
                Xem sản phẩm <ArrowRight size={18} />
              </GLink>
              <GLink
                href="#lien-he"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-white hover:text-[#0b2f66]"
              >
                Liên hệ tư vấn
              </GLink>
            </div>
          </Reveal>
        </div>

        <Reveal variant="scale-up" delay={260}>
          <div className="rounded-4xl border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["10+", "Năm kinh nghiệm"],
                ["Miền Trung", "Khu vực hoạt động"],
                ["Đà Nẵng", "Thị trường trọng điểm"],
                ["24/7", "Hỗ trợ khách hàng"],
              ].map(([value, label], index) => (
                <Reveal key={label} variant="zoom-in" delay={index * 100}>
                  <div className="rounded-3xl bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <p className="text-3xl font-black text-[#0b4ea2]">
                      {value}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-slate-600">
                      {label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
