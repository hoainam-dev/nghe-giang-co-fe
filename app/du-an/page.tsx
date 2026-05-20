import ProjectSection from "@/components/sections/ProjectSection";
import CTASection from "@/components/sections/CTASection";
import Container from "@/components/ui/Container";

export default function ProjectPage() {
  return (
    <>
      <section className="bg-[#071f45] py-24 text-white">
        <Container>
          <p className="text-sm font-bold tracking-[0.2em] text-[#d7a321] uppercase">Dự án</p>
          <h1 className="mt-4 text-4xl font-black md:text-5xl">Công trình đã thực hiện</h1>
        </Container>
      </section>

      <ProjectSection />
      <CTASection />
    </>
  );
}
