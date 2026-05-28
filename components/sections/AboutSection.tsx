import SectionTitle from "@/components/ui/SectionTitle";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden section-surface py-20">
      <Image src="/images/banner_1.jpeg" alt="" fill className="object-cover opacity-30" />
      <div className="absolute inset-0 bg-surface-warm/92" />
      <Container className="relative grid items-center gap-12 lg:grid-cols-1">
        <FadeIn>
          <SectionTitle
            eyebrow="Về chúng tôi"
            title="Đơn vị phân phối xi măng chuyên nghiệp tại miền Trung và Tây Nguyên"
            desc="Nghệ Giang hướng đến hình ảnh doanh nghiệp chuyên nghiệp, thân thiện, đồng hành cùng chủ đầu tư, nhà thầu và các công trình dân dụng - công nghiệp."
          />

          <div className="mt-10 space-y-5">
            {[
              "Tập trung vào chất lượng sản phẩm và tiến độ giao hàng.",
              "Phục vụ doanh nghiệp, chủ đầu tư và cửa hàng vật liệu xây dựng.",
              "Định hướng xây dựng thương hiệu uy tín tại miền Trung và Tây Nguyên.",
            ].map((item) => (
              <div key={item} className="flex gap-4">
                <CheckCircle2 className="mt-0.5 shrink-0 text-brand-gold" size={20} />
                <p className="text-base font-medium leading-7 text-brand-text-muted">{item}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
