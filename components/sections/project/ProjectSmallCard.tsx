import Image from "next/image";
import Link from "next/link";
import { featuredProjects } from "@/data/site";
import { MapPin } from "lucide-react";

type ProjectSmallCardProps = {
  project: (typeof featuredProjects)[number];
};

export default function ProjectSmallCard({ project }: ProjectSmallCardProps) {
  return (
    <Link
      href={project.website}
      target="_blank"
      rel="noopener noreferrer"
      className="group block h-full overflow-hidden rounded-[1.5rem] border border-white/15 bg-white/10 shadow-lg backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-2xl"
    >
      <div className="relative h-44 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-[#071f45]/70 to-transparent" />
      </div>

      <div className="p-5">
        <p className="mb-2 text-xs font-bold tracking-[0.16em] text-[#d7a321] uppercase">
          {project.category}
        </p>

        <h3 className="text-lg leading-snug font-black text-white transition group-hover:text-[#0b2f66]">
          {project.title}
        </h3>

        <div className="mt-3 flex items-start gap-2 text-sm text-blue-50 transition group-hover:text-slate-600">
          <MapPin size={16} className="mt-0.5 shrink-0 text-[#d7a321]" />
          <span>{project.location}</span>
        </div>

        <p className="mt-3 line-clamp-2 text-sm leading-6 text-blue-50 transition group-hover:text-slate-600">
          {project.desc}
        </p>
      </div>
    </Link>
  );
}
