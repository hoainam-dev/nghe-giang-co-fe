import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

type ProductInfoListItemProps = {
  item: string;
  iconTone: "gold" | "blue";
};

export default function ProductInfoListItem({ item, iconTone }: ProductInfoListItemProps) {
  return (
    <div className="flex gap-3">
      <CheckCircle2
        size={18}
        className={cn(
          "mt-1 shrink-0 sm:size-5",
          iconTone === "gold" ? "text-brand-gold" : "text-brand-blue",
        )}
      />
      <p className="text-brand-text text-sm leading-7 sm:text-base">{item}</p>
    </div>
  );
}
