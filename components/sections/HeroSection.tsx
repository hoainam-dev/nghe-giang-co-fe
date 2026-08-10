import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import GLink from "@/components/general/GLink";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#071f45]">
      <div className="absolute -bottom-24 -left-24 size-80 rounded-full bg-blue-400/20 blur-3xl" />

      <Container className="relative grid min-h-170 items-center gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Reveal variant="fade-down">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/20">
              <ShieldCheck size={17} className="text-brand-gold-light" />
              Vật liệu bền vững cho công trình miền Trung
            </div>
          </Reveal>

          <Reveal variant="blur" delay={120}>
            <h1 className="heading-display max-w-4xl text-4xl text-white uppercase md:text-5xl lg:text-[3.5rem]">
              {siteConfig.name}
            </h1>
          </Reveal>

          <Reveal variant="fade-up" delay={220}>
            <p className="font-heading mt-6 max-w-2xl text-base leading-8 font-medium text-white/85 md:text-lg">
              {siteConfig.description}
            </p>
          </Reveal>

          <Reveal variant="fade-up" delay={320}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <GLink href="/san-pham#danh-sach" className="btn-gold gap-2">
                Xem sản phẩm <ArrowRight size={17} />
              </GLink>
            </div>
          </Reveal>
        </div>

        <Reveal variant="scale-up" delay={260}>
          <div className="sm:rounded-3xl sm:border sm:border-white/14 sm:bg-white/10 sm:p-5 sm:backdrop-blur-md">
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { value: "20+", label: "Năm kinh nghiệm", size: "text-4xl" },
                { value: "Miền Trung &\nTây Nguyên", label: "Khu vực hoạt động", size: "text-xl" },
                { value: "Đà Nẵng", label: "Thị trường trọng điểm", size: "text-3xl" },
                { value: "24/7", label: "Hỗ trợ khách hàng", size: "text-3xl" },
              ].map((stat) => (
                <Reveal key={stat.label} variant="zoom-in" delay={0}>
                  <div className="card-elevated flex min-h-30 flex-col items-center justify-center p-5 text-center">
                    <p
                      className={`font-heading font-bold whitespace-pre-line text-[#0b4ea2] ${stat.size}`}
                    >
                      {stat.value}
                    </p>
                    <p className="text-brand-text-muted mt-2 text-sm font-medium tracking-wide">
                      {stat.label}
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
