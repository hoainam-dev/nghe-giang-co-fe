import SectionTitle from "@/components/ui/SectionTitle";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Image from "next/image";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
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
      <section className="relative overflow-hidden bg-brand-navy-dark py-16 text-white sm:py-20 lg:py-24">
        <Image src="/images/banner_3.jpg" alt="" fill priority className="object-cover" />
        <div className="page-hero-overlay absolute inset-0" />

        <Container className="relative">
          <div className="max-w-4xl">
            <Reveal variant="fade-down">
              <p className="eyebrow">Liên hệ Nghệ Giang</p>
            </Reveal>

            <Reveal variant="blur" delay={100}>
              <h1 className="heading-display mt-5 text-3xl text-white sm:text-4xl lg:text-6xl">
                Kết nối với chúng tôi để được tư vấn nhanh nhất
              </h1>
            </Reveal>

            <Reveal variant="fade-up" delay={200}>
              <p className="mt-6 max-w-2xl text-sm leading-7 font-medium text-brand-muted/90 sm:text-base lg:text-lg lg:leading-8">
                Đội ngũ Nghệ Giang luôn sẵn sàng hỗ trợ khách hàng, nhà thầu và đại lý trong việc
                lựa chọn sản phẩm, báo giá và phương án vận chuyển phù hợp.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden section-muted py-14 sm:py-16 lg:py-20">
        <Container className="relative">
          <SectionTitle
            eyebrow="Thông tin liên hệ"
            title="Chúng tôi luôn sẵn sàng hỗ trợ"
            desc="Liên hệ với Nghệ Giang để nhận tư vấn chi tiết về sản phẩm, giá bán, năng lực cung ứng và vận chuyển."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
            {contactCards.map((item, index) => {
              const Icon = item.icon;
              const content = (
                <div className="group card-elevated relative h-full overflow-hidden p-6">
                  <div className="absolute -top-10 -right-10 size-28 rounded-full bg-brand-blue/5 transition duration-300 group-hover:bg-brand-gold/10" />

                  <div className="relative">
                    <div className="icon-badge mb-5 size-12">
                      <Icon size={23} />
                    </div>

                    <h3 className="font-heading text-base font-bold text-brand-navy">{item.title}</h3>

                    <p className="mt-2 text-sm leading-6 font-medium wrap-break-word text-brand-text">
                      {item.value}
                    </p>

                    <p className="mt-2 text-sm leading-6 font-medium text-brand-text-muted">{item.desc}</p>
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
        <section className="section-muted pb-14 sm:pb-16 lg:pb-20">
          <Container>
            <div className="card-elevated overflow-hidden">
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
