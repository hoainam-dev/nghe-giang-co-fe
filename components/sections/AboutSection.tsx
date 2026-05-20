import SectionTitle from "@/components/ui/SectionTitle";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="bg-white py-20">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <FadeIn>
          <div className="relative overflow-hidden rounded-4xl">
            <Image
              src="/images/mock_company.jpg"
              alt="Nhà máy xi măng"
              width={760}
              height={560}
              className="h-[460px] w-full object-cover"
            />
            <div className="absolute bottom-5 left-5 rounded-2xl bg-white/95 p-5 shadow-xl">
              <p className="text-2xl font-black text-[#0b4ea2]">Nghệ Giang</p>
              <p className="text-sm font-semibold text-slate-600">
                Uy tín - Chất lượng - Đồng hành
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <SectionTitle
            eyebrow="Về chúng tôi"
            title="Đơn vị cung cấp xi măng và giải pháp vật liệu xây dựng tại miền Trung"
            desc="Nghệ Giang hướng đến hình ảnh doanh nghiệp chuyên nghiệp, thân thiện, đồng hành cùng chủ đầu tư, nhà thầu và các công trình dân dụng - công nghiệp."
          />

          <div className="mt-8 space-y-4">
            {[
              "Tập trung vào chất lượng sản phẩm và tiến độ giao hàng.",
              "Phục vụ doanh nghiệp, chủ đầu tư và khách hàng trẻ.",
              "Định hướng xây dựng thương hiệu uy tín tại Đà Nẵng và miền Trung.",
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
