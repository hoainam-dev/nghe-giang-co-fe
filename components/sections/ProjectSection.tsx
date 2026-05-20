import SectionTitle from "@/components/ui/SectionTitle";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import Image from "next/image";
import { projects } from "@/data/site";

export default function ProjectSection() {
  return (
    <section className="bg-[#071f45] py-20 text-white">
      <Container>
        <SectionTitle
          center
          eyebrow="Dự án"
          title="Công trình tiêu biểu"
          desc="Khu vực hiển thị dự án đã thực hiện, giúp tăng độ tin cậy với doanh nghiệp và chủ đầu tư."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((item) => (
            <FadeIn key={item.title}>
              <article className="group overflow-hidden rounded-3xl bg-white/10 ring-1 ring-white/15">
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm font-bold uppercase tracking-widest text-[#d7a321]">
                    {item.category}
                  </p>
                  <h3 className="mt-2 text-xl font-bold">{item.title}</h3>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}