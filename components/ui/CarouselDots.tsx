import { cn } from "@/lib/utils";

type CarouselDotsProps = {
  count: number;
  current: number;
  onSelect: (index: number) => void;
  className?: string;
};

export default function CarouselDots({ count, current, onSelect, className }: CarouselDotsProps) {
  if (count <= 1) return null;

  return (
    <div className={cn("flex items-center justify-center gap-3", className)}>
      <div className="ring-border/60 flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 shadow-[0_2px_12px_rgba(10,31,61,0.06)] ring-1 backdrop-blur">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => onSelect(index)}
            className="flex h-5 w-9 items-center justify-center"
            aria-label={`Chuyển đến sản phẩm ${index + 1}`}
          >
            <span
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                current === index
                  ? "bg-brand-gold w-7"
                  : "bg-brand-blue/30 hover:bg-brand-blue/60 w-1.5",
              )}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
