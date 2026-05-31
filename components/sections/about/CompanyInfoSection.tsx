import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Image from "next/image";
import { CalendarDays, BadgeCheck, UserRound, Building2, MapPin, Phone, Mail } from "lucide-react";
import { companyInfo } from "@/data/site";

export default function CompanyInfoSection() {
  return (
    <section className="relative overflow-hidden bg-white py-14 md:py-20">
      <div className="absolute top-0 right-0 h-32 w-32 rounded-bl-full bg-brand-blue/6" />
      <div className="absolute bottom-0 left-0 h-24 w-24 rounded-tr-full bg-brand-gold/10" />

      <Container className="relative">
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <Reveal variant="fade-right">
            <div className="card-elevated relative min-h-[560px] overflow-hidden p-6 md:p-8">
              <div className="relative">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-blue/8 px-4 py-2 text-sm font-medium text-brand-blue">
                  <BadgeCheck size={17} />
                  Hồ sơ doanh nghiệp
                </div>

                <h2 className="heading-display text-2xl text-brand-navy md:text-3xl xl:text-4xl">
                  {companyInfo.fullName}
                </h2>

                <p className="mt-4 text-sm font-medium tracking-widest text-brand-gold uppercase md:text-base">
                  {companyInfo.internationalName}
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-surface p-5 ring-1 ring-border/60">
                    <CalendarDays size={22} className="text-brand-blue" />
                    <p className="font-heading mt-4 text-2xl font-bold text-brand-navy">
                      {companyInfo.foundedYear}
                    </p>
                    <p className="mt-1 text-sm font-medium text-brand-text-muted">Thành lập</p>
                  </div>

                  <div className="rounded-2xl bg-surface p-5 ring-1 ring-border/60">
                    <Building2 size={22} className="text-brand-blue" />
                    <p className="font-heading mt-4 text-2xl font-bold text-brand-navy">Đà Nẵng</p>
                    <p className="mt-1 text-sm font-medium text-brand-text-muted">Trụ sở chính</p>
                  </div>
                </div>

                <div className="mt-8 rounded-2xl border border-border/80 bg-surface p-5">
                  <div className="flex gap-4">
                    <div className="icon-badge size-12 shrink-0 bg-white! shadow-sm">
                      <UserRound size={21} />
                    </div>

                    <div>
                      <p className="text-sm font-medium text-brand-gold">Người đại diện</p>
                      <p className="mt-1 text-base font-bold text-brand-navy">
                        {companyInfo.representative}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal variant="fade-left">
            <div className="relative overflow-hidden rounded-3xl shadow-[0_20px_60px_rgba(10,31,61,0.12)]">
              <Image
                src="/images/building.png"
                alt="Công ty Nghệ Giang"
                width={680}
                height={760}
                className="h-[560px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-brand-navy-dark/70 via-brand-blue/15 to-transparent" />
            </div>
          </Reveal>
        </div>

        <Reveal variant="fade-up" delay={120}>
          <div className="mt-8 grid overflow-hidden rounded-2xl border border-border/80 bg-white shadow-[0_8px_32px_rgba(10,31,61,0.06)] md:grid-cols-3">
            <a
              href={`tel:${companyInfo.phone}`}
              className="group flex h-full items-center gap-4 border-b border-border/80 p-5 transition hover:bg-brand-blue md:border-r md:border-b-0"
            >
              <div className="icon-badge size-11 shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-sm font-medium text-brand-text-muted transition group-hover:text-white/80">
                  Điện thoại
                </p>
                <p className="mt-1 font-bold text-brand-navy transition group-hover:text-white">
                  {companyInfo.phone}
                </p>
              </div>
            </a>

            <a
              href={`mailto:${companyInfo.email}`}
              className="group flex h-full items-center gap-4 border-b border-border/80 p-5 transition hover:bg-brand-blue md:border-r md:border-b-0"
            >
              <div className="icon-badge size-11 shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm font-medium text-brand-text-muted transition group-hover:text-white/80">
                  Email
                </p>
                <p className="mt-1 font-bold break-all text-brand-navy transition group-hover:text-white">
                  {companyInfo.email}
                </p>
              </div>
            </a>

            <a
              href="https://www.google.com/maps/place/89+L%C3%AA+V%C4%83n+H%C6%B0u,+Ng%C5%A9+H%C3%A0nh+S%C6%A1n,+%C4%90%C3%A0+N%E1%BA%B5ng+550000,+Vi%E1%BB%87t+Nam/@16.0418001,108.2378767,17z/data=!3m1!4b1!4m6!3m5!1s0x3142176059bf4f0b:0x7786c57091417c2c!8m2!3d16.0418001!4d108.2404516!16s%2Fg%2F11rcwllb99?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              className="group flex items-center gap-4 p-5 transition hover:bg-brand-blue"
            >
              <div className="icon-badge size-11 shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-sm font-medium text-brand-text-muted transition group-hover:text-white/80">
                  Địa chỉ
                </p>
                <p className="mt-1 leading-6 font-bold text-brand-navy transition group-hover:text-white">
                  {companyInfo.address}
                </p>
              </div>
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
