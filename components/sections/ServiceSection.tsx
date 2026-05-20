import SectionTitle from "@/components/ui/SectionTitle";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import { Truck, Factory, Handshake, MapPinned } from "lucide-react";

const items = [
  {
    icon: Factory,
    title: "Cung cấp vật liệu",
    desc: "Xi măng và vật liệu xây dựng cho công trình dân dụng, công nghiệp.",
  },
  {
    icon: Truck,
    title: "Vận chuyển",
    desc: "Hỗ trợ giao hàng đến công trình theo khu vực hoạt động.",
  },
  {
    icon: Handshake,
    title: "Tư vấn",
    desc: "Đồng hành cùng chủ đầu tư và nhà thầu trong lựa chọn vật liệu.",
  },
  {
    icon: MapPinned,
    title: "Phân phối",
    desc: "Tập trung thị trường miền Trung và TP Đà Nẵng.",
  },
];

export default function ServiceSection() {
  return (
    <section className="bg-white py-20">
      <Container>
        <SectionTitle
          eyebrow="Dịch vụ"
          title="Giải pháp đồng hành cùng công trình"
          desc="Thiết kế section theo dạng card hiện đại, dễ mở rộng thêm dịch vụ khi khách hàng có nội dung chính thức."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <FadeIn key={item.title}>
                <div className="h-full rounded-3xl border border-slate-200 bg-white p-6 transition hover:border-[#0b4ea2] hover:shadow-xl">
                  <div className="mb-5 flex size-14 items-center justify-center rounded-2xl bg-[#0b4ea2]/10 text-[#0b4ea2]">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-lg font-bold text-[#0b2f66]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.desc}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}