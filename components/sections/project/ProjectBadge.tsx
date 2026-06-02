type ProjectBadgeProps = { icon: React.ReactNode; label: string };

export default function ProjectBadge({ icon, label }: ProjectBadgeProps) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-bold text-white backdrop-blur">
      {icon}
      {label}
    </span>
  );
}
