import Container from "@/components/ui/Container";
import GLink from "@/components/general/GLink";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="section-surface py-20">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-brand-navy-dark p-8 md:p-14">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(47,84,114,0.12)_0%,transparent_55%)]" />

          <div className="relative grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <p className="eyebrow mb-4">Liên hệ Nghệ Giang</p>
              <h2 className="heading-display text-3xl text-white md:text-4xl">
                Cần tư vấn xi măng cho công trình của bạn?
              </h2>
              <p className="mt-5 max-w-2xl text-base font-medium leading-7 text-brand-muted/85">
                Gửi thông tin để đội ngũ Nghệ Giang hỗ trợ lựa chọn sản phẩm phù hợp.
              </p>
            </div>

            <GLink href="/lien-he" className="btn-gold shrink-0 gap-2">
              Nhận tư vấn <ArrowRight size={17} />
            </GLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
