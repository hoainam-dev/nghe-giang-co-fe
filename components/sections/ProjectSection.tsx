import SectionTitle from "@/components/ui/SectionTitle";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import Image from "next/image";
import { projects } from "@/data/site";

export default function ProjectSection() {
  return (
    <section className="relative overflow-hidden bg-brand-navy-dark py-20 text-white">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,90,158,0.15)_0%,transparent_50%)]" />
      <Container className="relative">
        <SectionTitle
          center
          eyebrow="Dự án"
          title="Công trình tiêu biểu"
          desc="Khu vực hiển thị dự án đã thực hiện, giúp tăng độ tin cậy với doanh nghiệp và chủ đầu tư."
          variant="dark"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {projects.map((item) => (
            <FadeIn key={item.title}>
              <article className="group card-glass overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-brand-navy-dark/80 via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <p className="eyebrow text-[0.6875rem]!">{item.category}</p>
                  <h3 className="mt-2 font-heading text-xl font-bold">{item.title}</h3>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
