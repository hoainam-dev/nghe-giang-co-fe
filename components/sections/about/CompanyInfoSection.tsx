import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Image from "next/image";
import {
  CalendarDays,
  BadgeCheck,
  UserRound,
  Building2,
  FileText,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { companyInfo } from "@/data/site";

export default function CompanyInfoSection() {
  return (
    <section className="relative overflow-hidden bg-white py-14 md:py-20">
      <div className="absolute inset-0 bg-white/90" />
      <div className="absolute top-0 right-0 h-32 w-32 rounded-bl-full bg-[#0b4ea2]/10" />
      <div className="absolute bottom-0 left-0 h-24 w-24 rounded-tr-full bg-[#d7a321]/15" />

      <Container className="relative">
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <Reveal variant="fade-right">
            <div className="relative min-h-[560px] overflow-hidden rounded-[2rem] border border-slate-200 bg-white/95 p-6 shadow-2xl backdrop-blur md:p-6">
              <div className="relative">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#0b4ea2]/10 px-4 py-2 text-sm font-bold text-[#0b4ea2]">
                  <BadgeCheck size={18} />
                  Hồ sơ doanh nghiệp
                </div>

                <h2 className="text-2xl leading-tight font-black text-[#0b2f66] md:text-2xl xl:text-4xl">
                  {companyInfo.fullName}
                </h2>

                <p className="mt-4 text-sm font-semibold tracking-[0.12em] text-[#d7a321] uppercase md:text-base">
                  {companyInfo.internationalName}
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
                    <CalendarDays size={24} />
                    <p className="mt-4 text-2xl font-black text-[#0b2f66]">
                      {companyInfo.foundedYear}
                    </p>
                    <p className="mt-1 text-sm text-slate-500">Thành lập</p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
                    <Building2 size={24} />
                    <p className="mt-4 text-2xl font-black text-[#0b2f66]">Đà Nẵng</p>
                    <p className="mt-1 text-sm text-slate-500">Trụ sở chính</p>
                  </div>
                </div>

                <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <div className="flex gap-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white text-[#0b4ea2] shadow-sm">
                      <UserRound size={22} />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-[#d7a321]">Người đại diện</p>
                      <p className="mt-1 text-base font-bold text-[#0b2f66]">
                        {companyInfo.representative}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal variant="fade-left" className="">
            <div className="relative overflow-hidden rounded-[2rem] shadow-2xl">
              <Image
                src="/images/building.png"
                alt="Công ty Nghệ Giang"
                width={680}
                height={760}
                className="h-[560px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071f45]/70 via-[#0b4ea2]/20 to-transparent" />
            </div>
          </Reveal>
        </div>

        <Reveal variant="fade-up" delay={120}>
          <div className="mt-8 grid overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-xl md:grid-cols-3">
            <a
              href={`tel:${companyInfo.phone}`}
              className="group flex h-full items-center gap-4 border-b border-slate-200 p-5 transition hover:bg-[#0b4ea2] md:border-r md:border-b-0"
            >
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#0b4ea2]/10 text-[#0b4ea2] transition group-hover:bg-white/15 group-hover:text-white">
                <Phone size={21} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-500 transition group-hover:text-blue-100">
                  Điện thoại
                </p>
                <p className="mt-1 font-black text-[#0b2f66] transition group-hover:text-white">
                  {companyInfo.phone}
                </p>
              </div>
            </a>

            <a
              href={`mailto:${companyInfo.email}`}
              className="group flex h-full items-center gap-4 border-b border-slate-200 p-5 transition hover:bg-[#0b4ea2] md:border-r md:border-b-0"
            >
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#0b4ea2]/10 text-[#0b4ea2] transition group-hover:bg-white/15 group-hover:text-white">
                <Mail size={21} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-500 transition group-hover:text-blue-100">
                  Email
                </p>
                <p className="mt-1 font-black break-all text-[#0b2f66] transition group-hover:text-white">
                  {companyInfo.email}
                </p>
              </div>
            </a>

            <a
              href="https://www.google.com/maps/place/89+L%C3%AA+V%C4%83n+H%C6%B0u,+Ng%C5%A9+H%C3%A0nh+S%C6%A1n,+%C4%90%C3%A0+N%E1%BA%B5ng+550000,+Vi%E1%BB%87t+Nam/@16.0418001,108.2378767,17z/data=!3m1!4b1!4m6!3m5!1s0x3142176059bf4f0b:0x7786c57091417c2c!8m2!3d16.0418001!4d108.2404516!16s%2Fg%2F11rcwllb99?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              className="group flex items-center gap-4 p-5 transition hover:bg-[#0b4ea2]"
            >
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#0b4ea2]/10 text-[#0b4ea2] transition group-hover:bg-white/15 group-hover:text-white">
                <MapPin size={21} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-500 transition group-hover:text-blue-100">
                  Địa chỉ
                </p>
                <p className="mt-1 leading-6 font-black text-[#0b2f66] transition group-hover:text-white">
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
