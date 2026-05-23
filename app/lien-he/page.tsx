import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";
import { Clock, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { contactInfo } from "@/data/site";

export const metadata = {
  title: "Liên hệ",
  description:
    "Liên hệ với Nghệ Giang để được tư vấn sản phẩm xi măng, báo giá và hỗ trợ vận chuyển.",
};

const contactCards = [
  {
    icon: Phone,
    title: "Hotline",
    value: contactInfo.phone,
    desc: "Tư vấn sản phẩm và hỗ trợ báo giá nhanh chóng.",
    href: `tel:${contactInfo.phone.replaceAll(" ", "")}`,
  },
  {
    icon: Mail,
    title: "Email",
    value: contactInfo.email,
    desc: "Gửi yêu cầu hợp tác, báo giá hoặc thông tin dự án.",
    href: `mailto:${contactInfo.email}`,
  },
  {
    icon: MapPin,
    title: "Khu vực phục vụ",
    value: contactInfo.address,
    desc: "Phân phối xi măng tại miền Trung và Tây Nguyên.",
  },
  {
    icon: Clock,
    title: "Thời gian làm việc",
    value: contactInfo.workingTime,
    desc: "Luôn sẵn sàng hỗ trợ khách hàng trong giờ hành chính.",
  },
];

export default function ContactPage() {
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
                Liên hệ Nghệ Giang
              </p>
            </Reveal>

            <Reveal variant="blur" delay={100}>
              <h1 className="mt-4 text-3xl leading-tight font-black uppercase sm:text-4xl lg:text-6xl">
                Kết nối với chúng tôi để được tư vấn nhanh nhất
              </h1>
            </Reveal>

            <Reveal variant="fade-up" delay={200}>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-blue-50 sm:text-base lg:text-lg lg:leading-8">
                Đội ngũ Nghệ Giang luôn sẵn sàng hỗ trợ khách hàng, nhà thầu và đại lý trong việc
                lựa chọn sản phẩm, báo giá và phương án vận chuyển phù hợp.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-slate-50 py-14 sm:py-16 lg:py-20">
        <Container className="relative">
          <SectionTitle
            eyebrow="Thông tin liên hệ"
            title="Chúng tôi luôn sẵn sàng hỗ trợ"
            desc="Liên hệ với Nghệ Giang để nhận tư vấn chi tiết về sản phẩm, giá bán, năng lực cung ứng và vận chuyển."
          />

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
            {contactCards.map((item, index) => {
              const Icon = item.icon;
              const content = (
                <div className="group relative h-full overflow-hidden rounded-[1.5rem] border border-white/80 bg-white/90 p-5 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-[#d7a321]/60 hover:shadow-xl">
                  <div className="absolute -top-10 -right-10 size-28 rounded-full bg-[#0b4ea2]/5 transition duration-300 group-hover:bg-[#d7a321]/15" />

                  <div className="relative">
                    <div className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-[#0b4ea2]/10 text-[#0b4ea2] transition duration-300 group-hover:bg-[#d7a321] group-hover:text-white">
                      <Icon size={24} />
                    </div>

                    <h3 className="text-base font-black text-[#0b2f66] uppercase">{item.title}</h3>

                    <p className="mt-2 text-sm leading-6 font-bold break-words text-slate-800">
                      {item.value}
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.desc}</p>
                  </div>
                </div>
              );

              return (
                <Reveal key={item.title} variant="zoom-in" delay={index * 70}>
                  {item.href ? (
                    <a href={item.href} className="block h-full">
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {contactInfo.mapEmbedUrl && (
        <section className="bg-slate-50 pb-14 sm:pb-16 lg:pb-20">
          <Container>
            <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-xl">
              <iframe
                src={contactInfo.mapEmbedUrl}
                className="h-[360px] w-full border-0 lg:h-[460px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bản đồ Nghệ Giang"
              />
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
