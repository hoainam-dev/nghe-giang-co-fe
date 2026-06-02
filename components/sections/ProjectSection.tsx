import ProjectFeatureCard from "@/components/sections/project/ProjectFeatureCard";
import ProjectSmallCard from "@/components/sections/project/ProjectSmallCard";
import SectionTitle from "@/components/ui/SectionTitle";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { featuredProjects } from "@/data/site";

export default function ProjectSection() {
  const [mainProject, ...otherProjects] = featuredProjects;

  return (
    <section className="relative overflow-hidden bg-[#071f45] py-14 text-white sm:py-16 lg:py-20">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-size-[48px_48px] opacity-[0.14]" />

      <Container className="relative">
        <SectionTitle
          eyebrow="Dự án"
          title="Công trình tiêu biểu"
          desc="Nghệ Giang đồng hành cùng nhiều công trình dân dụng, đô thị, y tế và công nghiệp tại Đà Nẵng, Huế và khu vực miền Trung."
          variant="dark"
        />

        <div className="mt-8 grid gap-5 lg:mt-12 lg:grid-cols-[1fr_1fr]">
          {mainProject && (
            <Reveal variant="fade-right">
              <ProjectFeatureCard project={mainProject} />
            </Reveal>
          )}

          <div className="grid gap-5 sm:grid-cols-2">
            {otherProjects.map((project, index) => (
              <Reveal key={project.slug} variant="fade-up" delay={index * 70}>
                <ProjectSmallCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
