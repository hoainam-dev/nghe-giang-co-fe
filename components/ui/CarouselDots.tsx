import { cn } from "@/lib/utils";

type CarouselDotsProps = {
    count: number;
    current: number;
    onSelect: (index: number) => void;
    className?: string;
};

export default function CarouselDots({
    count,
    current,
    onSelect,
    className,
}: CarouselDotsProps) {
    if (count <= 1) return null;

    return (
        <div className={cn("flex items-center justify-center gap-3", className)}>
            <div className="flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 shadow-sm ring-1 ring-slate-200 backdrop-blur">
                {Array.from({ length: count }).map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        onClick={() => onSelect(index)}
                        className={cn(
                            "h-2 rounded-full transition-all duration-300",
                            current === index
                                ? "w-8 bg-[#d7a321]"
                                : "w-2 bg-[#0b4ea2]/35 hover:bg-[#0b4ea2]",
                        )}
                        aria-label={`Chuyển đến sản phẩm ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}