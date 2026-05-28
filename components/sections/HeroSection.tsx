import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import GLink from "@/components/general/GLink";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-brand-navy-mid">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(21,30,44,0.68)_0%,rgba(47,84,114,0.38)_55%,rgba(21,30,44,0.58)_100%),url('/images/hero-cement.jpg')] bg-cover bg-center" />

      <Container className="relative grid min-h-[680px] items-center gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Reveal variant="fade-down">
            <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/18 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm">
              <ShieldCheck size={17} className="text-brand-gold-light" />
              Vật liệu bền vững cho công trình miền Trung
            </div>
          </Reveal>

          <Reveal variant="blur" delay={120}>
            <h1 className="heading-display max-w-4xl text-4xl text-white md:text-5xl lg:text-[3.5rem]">
              {siteConfig.name}
            </h1>
          </Reveal>

          <Reveal variant="fade-up" delay={220}>
            <p className="mt-6 max-w-2xl text-base leading-8 font-medium text-white/85 md:text-lg">
              {siteConfig.description}
            </p>
          </Reveal>

          <Reveal variant="fade-up" delay={320}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <GLink href="/san-pham" className="btn-gold gap-2">
                Xem sản phẩm <ArrowRight size={17} />
              </GLink>
            </div>
          </Reveal>
        </div>

        <Reveal variant="scale-up" delay={260}>
          <div className="rounded-3xl border border-white/14 bg-white/10 p-5 backdrop-blur-md">
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { value: "20+", label: "Năm kinh nghiệm", size: "text-4xl" },
                { value: "Miền Trung &\nTây Nguyên", label: "Khu vực hoạt động", size: "text-xl" },
                { value: "Đà Nẵng", label: "Thị trường trọng điểm", size: "text-3xl" },
                { value: "24/7", label: "Hỗ trợ khách hàng", size: "text-3xl" },
              ].map((stat) => (
                <Reveal key={stat.label} variant="zoom-in" delay={0}>
                  <div className="card-elevated flex min-h-[120px] flex-col items-center justify-center p-5 text-center">
                    <p
                      className={`font-heading font-bold text-brand-blue whitespace-pre-line ${stat.size}`}
                    >
                      {stat.value}
                    </p>
                    <p className="mt-2 text-xs font-medium tracking-wide text-brand-text-muted">{stat.label}</p>
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
