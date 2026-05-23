import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";

export default function ThankYouSection() {
    return (
        <section className="relative overflow-hidden bg-white py-20">
            <div className="absolute inset-0 bg-[url('/images/thank-you-bg.jpg')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-white/90" />

            <Container className="relative">
                <div className="mx-auto max-w-4xl">
                    <SectionTitle
                        center
                        eyebrow="Lời cảm ơn"
                        title="Trân trọng gửi tới Quý khách hàng và Quý đối tác"
                        desc="Sự tin tưởng và đồng hành của Quý khách hàng là tài sản quý giá nhất của Nghệ Giang."
                    />

                    <Reveal variant="fade-up" delay={120}>
                        <div className="mt-10 space-y-5 rounded-[2rem] bg-white p-8 leading-8 text-slate-700 shadow-xl ring-1 ring-slate-200 md:p-10">
                            <p>
                                Công ty chúng tôi xin trân trọng gửi tới Quý khách hàng/Quý đối tác
                                những lời tri ân sâu sắc và chân thành nhất đối với sự tin tưởng,
                                hợp tác và hỗ trợ quý báu của Quý vị đối với Công Ty TNHH Thương mại
                                và Tư vấn Nghệ Giang.
                            </p>

                            <p>
                                Được sự ủng hộ, tin tưởng của Quý khách hàng cùng sự nỗ lực không
                                ngừng nghỉ của chúng tôi, thời gian qua Công Ty TNHH TM và TV Nghệ
                                Giang đã đạt được những thành quả rất đáng tự hào, thể hiện ở sự tăng
                                trưởng liên tục và vững chắc.
                            </p>

                            <p>
                                Với Công Ty TNHH TM và TV Nghệ Giang, tài sản và giá trị lớn nhất
                                chính là lòng tin, là sự ủng hộ của Quý khách hàng/Quý đối tác với
                                những sản phẩm mà chúng tôi cung cấp cũng như đối với mối quan hệ hợp
                                tác hiệu quả và chân thành mà chúng tôi luôn dành cho khách hàng.
                            </p>

                            <p className="font-semibold text-[#0b2f66]">
                                Kính chúc Quý khách hàng/Quý đối tác nhiều sức khỏe, hạnh phúc, thành
                                công và thịnh vượng. Công Ty TNHH TM và TV Nghệ Giang luôn mong muốn
                                được đồng hành và sẵn sàng phục vụ Quý khách hàng/Quý đối tác trên
                                con đường phát triển mạnh mẽ và bền vững của mình.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </Container>
        </section>
    );
}