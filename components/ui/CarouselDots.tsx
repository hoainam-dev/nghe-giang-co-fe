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
      <div className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 shadow-[0_2px_12px_rgba(10,31,61,0.06)] ring-1 ring-border/60 backdrop-blur">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => onSelect(index)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              current === index ? "w-7 bg-brand-gold" : "w-1.5 bg-brand-blue/30 hover:bg-brand-blue/60",
            )}
            aria-label={`Chuyển đến sản phẩm ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
