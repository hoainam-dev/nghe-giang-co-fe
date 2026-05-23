import SectionTitle from "@/components/ui/SectionTitle";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      <Image
        src="/images/banner_1.jpeg"
        alt=""
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-white/90" />
      <Container className="grid items-center gap-12 lg:grid-cols-1">
        <FadeIn>
          <SectionTitle
            eyebrow="Về chúng tôi"
            title="Đơn vị phân phối xi măng chuyên nghiệp tại miền Trung và Tây Nguyên"
            desc="Nghệ Giang hướng đến hình ảnh doanh nghiệp chuyên nghiệp, thân thiện, đồng hành cùng chủ đầu tư, nhà thầu và các công trình dân dụng - công nghiệp."
          />

          <div className="mt-8 space-y-4">
            {[
              "Tập trung vào chất lượng sản phẩm và tiến độ giao hàng.",
              "Phục vụ doanh nghiệp, chủ đầu tư và khách hàng trẻ.",
              "Định hướng xây dựng thương hiệu uy tín tại miền Trung và Tây Nguyên.",
            ].map((item) => (
              <div key={item} className="flex gap-3">
                <CheckCircle2 className="mt-1 text-[#d7a321]" size={22} />
                <p className="text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
