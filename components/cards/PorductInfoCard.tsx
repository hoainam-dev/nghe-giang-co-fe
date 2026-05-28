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
  iconClassName = "bg-brand-blue/8 text-brand-blue",
}: ProductInfoCardProps) {
  return (
    <div className="card-elevated p-4 sm:p-6 md:p-8">
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
          <p className="eyebrow text-[0.6875rem]! sm:text-xs!">{eyebrow}</p>
          <h3 className="font-heading mt-1 text-lg leading-snug font-bold text-brand-navy sm:text-2xl">
            {title}
          </h3>
        </div>
      </div>

      {children}
    </div>
  );
}
