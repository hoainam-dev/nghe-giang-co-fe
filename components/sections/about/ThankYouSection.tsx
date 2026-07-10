import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";

export default function ThankYouSection() {
  return (
    <section className="section-surface relative overflow-hidden py-20">
      <div className="bg-surface-warm/92 absolute inset-0" />

      <Container className="relative">
        <div className="mx-auto max-w-4xl">
          <SectionTitle
            center
            eyebrow="Lời cảm ơn"
            title="Trân trọng gửi tới Quý khách hàng và Quý đối tác"
            desc="Sự tin tưởng và đồng hành của Quý khách hàng là tài sản quý giá nhất của Nghệ Giang."
            className="max-w-4xl"
            classNameTitle="lg:text-4xl"
          />

          <Reveal variant="fade-up" delay={120}>
            <div className="card-elevated text-brand-text-muted mt-12 space-y-6 p-8 leading-8 font-medium md:p-10">
              <p>
                Công ty chúng tôi xin trân trọng gửi tới Quý khách hàng/Quý đối tác những lời tri ân
                sâu sắc và chân thành nhất đối với sự tin tưởng, hợp tác và hỗ trợ quý báu của Quý
                vị đối với Công ty TNHH Thương Mại và Tư Vấn Nghệ Giang.
              </p>

              <p>
                Được sự ủng hộ, tin tưởng của Quý khách hàng cùng sự nỗ lực không ngừng nghỉ của
                chúng tôi, thời gian qua Công ty TNHH Thương Mại và Tư Vấn Nghệ Giang đã đạt được
                những thành quả rất đáng tự hào, thể hiện ở sự tăng trưởng liên tục và vững chắc.
              </p>

              <p>
                Với Công ty TNHH Thương Mại và Tư Vấn Nghệ Giang, tài sản và giá trị lớn nhất chính
                là lòng tin, là sự ủng hộ của Quý khách hàng/Quý đối tác với những sản phẩm mà chúng
                tôi cung cấp cũng như đối với mối quan hệ hợp tác hiệu quả và chân thành mà chúng
                tôi luôn dành cho khách hàng.
              </p>

              <p className="text-brand-navy font-bold">
                Kính chúc Quý khách hàng/Quý đối tác nhiều sức khỏe, hạnh phúc, thành công và thịnh
                vượng. Công ty TNHH Thương Mại và Tư Vấn Nghệ Giang luôn mong muốn được đồng hành và
                sẵn sàng phục vụ Quý khách hàng/Quý đối tác trên con đường phát triển mạnh mẽ và bền
                vững của mình.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
