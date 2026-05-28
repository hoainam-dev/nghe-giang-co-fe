import GLink from "@/components/general/GLink";
import { ProductItem } from "@/types";
import { GImage } from "@/components/general/GImage";

type ProductCardProps = {
  item: ProductItem;
};

export default function ProductCard({ item }: ProductCardProps) {
  return (
    <article className="group card-elevated h-full overflow-hidden">
      <GLink href={`/san-pham/${item.slug}#chi-tiet`} className="w-full">
        <div className="w-full">
          <div className="relative flex h-[210px] items-center justify-center overflow-hidden bg-surface/50">
            <GImage
              src={item.image}
              alt={item.name}
              width={200}
              height={200}
              className="object-contain transition duration-500 group-hover:scale-105"
            />
          </div>

          <div className="border-t border-slate-100 p-5">
            <h3 className="font-heading text-lg font-bold text-brand-navy">{item.name}</h3>
          </div>
        </div>
      </GLink>
    </article>
  );
}
