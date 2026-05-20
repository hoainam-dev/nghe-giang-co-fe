import Container from "@/components/ui/Container";

export default function StatsSection() {
  return (
    <section className="bg-[#0b4ea2] py-12">
      <Container>
        <div className="grid gap-6 text-center text-white md:grid-cols-4">
          {[
            ["10+", "Năm kinh nghiệm"],
            ["100+", "Khách hàng & đối tác"],
            ["Miền Trung", "Khu vực trọng điểm"],
            ["24/7", "Hỗ trợ tư vấn"],
          ].map(([value, label]) => (
            <div key={label}>
              <p className="text-3xl font-black">{value}</p>
              <p className="mt-2 text-sm text-blue-100">{label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
