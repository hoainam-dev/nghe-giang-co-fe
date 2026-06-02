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
    <section className="relative overflow-hidden bg-white py-20">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(47,84,114,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(47,84,114,0.035)_1px,transparent_1px)] bg-size-[48px_48px]" />

      <Container className="relative">
        <SectionTitle
          eyebrow="Dịch vụ"
          title="Giải pháp đồng hành cùng công trình"
          desc="Thiết kế section theo dạng card hiện đại, dễ mở rộng thêm dịch vụ khi khách hàng có nội dung chính thức."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <FadeIn key={item.title}>
                <div className="group card-elevated h-full p-7">
                  <div className="icon-badge mb-6 size-14">
                    <Icon size={26} />
                  </div>
                  <h3 className="font-heading text-brand-navy text-xl font-bold">{item.title}</h3>
                  <p className="text-brand-text-muted mt-3 text-sm leading-7 font-medium">
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
