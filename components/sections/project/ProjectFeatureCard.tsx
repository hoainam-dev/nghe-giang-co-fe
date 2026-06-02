import ProjectBadge from "@/components/sections/project/ProjectBadge";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Building2, MapPin } from "lucide-react";
import { featuredProjects } from "@/data/site";

type ProjectFeatureCardProps = { project: (typeof featuredProjects)[number] };

export default function ProjectFeatureCard({ project }: ProjectFeatureCardProps) {
  return (
    <Link
      href={project.website}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block h-full min-h-[420px] overflow-hidden rounded-[2rem] bg-white shadow-2xl"
    >
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover transition duration-700 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-linear-to-t from-[#071f45] via-[#071f45]/55 to-transparent" />

      <div className="absolute top-5 right-5 left-5 flex items-center justify-between gap-4">
        <span className="rounded-full bg-[#d7a321] px-4 py-2 text-xs font-black tracking-wide text-white uppercase shadow-lg">
          Tiêu biểu
        </span>

        <span className="flex size-11 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition group-hover:bg-white group-hover:text-[#0b4ea2]">
          <ArrowUpRight size={22} />
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
        <div className="mb-4 flex flex-wrap gap-2">
          <ProjectBadge icon={<Building2 size={15} />} label={project.category} />
          <ProjectBadge icon={<MapPin size={15} />} label={project.location} />
        </div>

        <h3 className="text-2xl leading-tight font-black text-white sm:text-3xl">
          {project.title}
        </h3>

        <p className="mt-3 line-clamp-3 text-sm leading-7 text-blue-50 sm:text-base">
          {project.desc}
        </p>
      </div>
    </Link>
  );
}
