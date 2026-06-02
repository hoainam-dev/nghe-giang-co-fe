import Container from "@/components/ui/Container";
import GLink from "@/components/general/GLink";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="section-surface py-20">
      <Container>
        <div className="overflow-hidden rounded-4xl bg-[linear-gradient(135deg,#0b4ea2,#071f45)] p-8 text-white md:p-12">
          <div className="relative grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <p className="eyebrow mb-4">Liên hệ Nghệ Giang</p>
              <h2 className="heading-display text-3xl text-white md:text-4xl">
                Cần tư vấn xi măng cho công trình của bạn?
              </h2>
              <p className="font-heading text-brand-muted/85 mt-5 max-w-2xl text-base leading-7 font-medium">
                Gửi thông tin để đội ngũ Nghệ Giang hỗ trợ lựa chọn sản phẩm phù hợp.
              </p>
            </div>

            <GLink href="/lien-he#contact" className="btn-gold shrink-0 gap-2">
              Nhận tư vấn <ArrowRight size={17} />
            </GLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
