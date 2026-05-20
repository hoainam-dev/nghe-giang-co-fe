import Container from "@/components/ui/Container";
import GLink from "@/components/general/GLink";

export default function CTASection() {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="overflow-hidden rounded-4xl bg-[linear-gradient(135deg,#0b4ea2,#071f45)] p-8 text-white md:p-12">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d7a321]">
                Liên hệ Nghệ Giang
              </p>
              <h2 className="mt-3 text-3xl font-black md:text-4xl">
                Cần tư vấn xi măng cho công trình của bạn?
              </h2>
              <p className="mt-4 max-w-2xl text-blue-100">
                Gửi thông tin để đội ngũ Nghệ Giang hỗ trợ lựa chọn sản phẩm phù hợp.
              </p>
            </div>

            <GLink
              href="#lien-he"
              className="inline-flex rounded-full bg-[#d7a321] px-7 py-4 text-sm font-bold text-white"
            >
              Nhận tư vấn
            </GLink>
          </div>
        </div>
      </Container>
    </section>
  );
}