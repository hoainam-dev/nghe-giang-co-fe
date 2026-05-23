import GLink from "@/components/general/GLink";
import { FeaturedProductItem } from "@/types";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { GImage } from "@/components/general/GImage";
import { cn } from "@/lib/utils";

type FeaturedProductCardProps = {
  item: FeaturedProductItem;
};

export default function FeaturedProductCard({ item }: FeaturedProductCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <article
      onClick={() => setFlipped((v) => !v)}
      className="group relative mx-0.5 h-full cursor-pointer overflow-hidden rounded-[2rem] transition duration-500 hover:-translate-y-1"
    >
      <div className="flex min-h-[360px] flex-col items-center justify-center">
        <div className="relative h-[185px] w-[300px] [perspective:1000px] min-[430px]:h-[230px] min-[430px]:w-[350px]">
          <div
            className={cn(
              "relative size-full transition-transform duration-1000 ease-in-out [transform-style:preserve-3d]",
              "md:group-hover:[transform:rotateY(180deg)]",
              flipped && "[transform:rotateY(180deg)]",
            )}
          >
            <div className="absolute inset-0 flex items-center justify-center transition-transform duration-700 [backface-visibility:hidden] group-hover:scale-105">
              <GImage
                src={item.frontImage}
                alt={`${item.name} mặt trước`}
                width={350}
                height={350}
                className="object-contain"
              />
            </div>

            <div className="absolute inset-0 flex [transform:rotateY(180deg)] items-center justify-center transition-transform duration-700 [backface-visibility:hidden] group-hover:scale-105">
              <GImage
                src={item.backImage}
                alt={`${item.name} mặt sau`}
                width={350}
                height={350}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        <GLink href={`/san-pham/${item.slug}#chi-tiet`} onClick={(e) => e.stopPropagation()}>
          <div className="mt-6 text-center">
            <h3 className="mt-2 text-2xl font-black text-[#0b2f66]">{item.name}</h3>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#0b4ea2] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#083b7a]">
              Xem chi tiết <ArrowRight size={16} />
            </div>
          </div>
        </GLink>
      </div>
    </article>
  );
}
