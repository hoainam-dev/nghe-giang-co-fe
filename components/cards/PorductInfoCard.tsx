import { cn } from "@/lib/utils";

type ProductInfoCardProps = {
  icon: React.ReactNode;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  iconClassName?: string;
};

export default function ProductInfoCard({
  icon,
  eyebrow,
  title,
  children,
  iconClassName = "bg-[#0b4ea2]/10 text-[#0b4ea2]",
}: ProductInfoCardProps) {
  return (
    <div className="rounded-[1.25rem] border border-slate-200 bg-white p-4 shadow-sm sm:rounded-[2rem] sm:p-6 md:p-8">
      <div className="mb-5 flex items-start gap-3 sm:mb-6 sm:items-center">
        <div
          className={cn(
            "flex size-10 shrink-0 items-center justify-center rounded-xl sm:size-12",
            iconClassName,
          )}
        >
          {icon}
        </div>

        <div className="min-w-0">
          <p className="text-xs font-bold tracking-[0.14em] text-[#d7a321] uppercase sm:text-sm sm:tracking-[0.18em]">
            {eyebrow}
          </p>
          <h3 className="mt-1 text-lg leading-snug font-black text-[#0b2f66] sm:text-2xl">
            {title}
          </h3>
        </div>
      </div>

      {children}
    </div>
  );
}
