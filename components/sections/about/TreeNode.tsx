import { cn } from "@/lib/utils";

type TreeNodeProps = {
  label: string;
  tone?: "default" | "primary" | "gold";
};

export default function TreeNode({ label, tone = "default" }: TreeNodeProps) {
  return (
    <div
      className={cn(
        "mx-auto flex min-h-12 w-fit min-w-[110px] items-center justify-center rounded-xl border px-3 py-3 text-center text-[11px] leading-snug font-black uppercase shadow-sm sm:min-w-[120px] sm:px-4 sm:text-xs md:min-w-[130px] md:text-sm",
        tone === "primary"
          ? "border-[#0b4ea2] bg-[#0b4ea2] text-white"
          : tone === "gold"
            ? "border-[#d7a321] bg-[#d7a321] text-white"
            : "border-slate-300 bg-white text-[#0b2f66]",
      )}
    >
      {label}
    </div>
  );
}
