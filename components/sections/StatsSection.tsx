import Container from "@/components/ui/Container";

export default function StatsSection() {
  return (
    <section className="bg-[#0b4ea2] py-12">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03)_0%,transparent_100%)]" />
      <Container>
        <div className="relative grid gap-8 text-center text-white md:grid-cols-3">
          {[
            ["20+", "Năm kinh nghiệm"],
            ["Miền Trung", "Khu vực trọng điểm"],
            ["24/7", "Hỗ trợ tư vấn"],
          ].map(([value, label]) => (
            <div key={label} className="group">
              <p className="font-heading text-4xl font-bold tracking-tight md:text-5xl">{value}</p>
              <div className="mx-auto mt-3 h-px w-8 bg-brand-gold/50 transition-all duration-300 group-hover:w-16" />
              <p className="mt-3 text-sm font-medium tracking-wide text-brand-muted/85">{label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
