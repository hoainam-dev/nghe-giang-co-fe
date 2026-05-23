import GLink from "@/components/general/GLink";
import { ProductItem } from "@/types";
import { ArrowRight } from "lucide-react";
import { GImage } from "@/components/general/GImage";

type ProductCardProps = {
    item: ProductItem;
}

export default function ProductCard({ item }: ProductCardProps) {
    return (
        <article className="group h-full overflow-hidden rounded-[1.25rem] transition hover:-translate-y-1 hover:shadow-xl">
            <GLink href={`/san-pham/${item.slug}#chi-tiet`} className="w-full">
                <div className="w-full">
                    <div className="relative flex h-[210px] items-center justify-center overflow-hidden">
                        <GImage
                            src={item.image}
                            alt={item.name}
                            width={200}
                            height={200}
                            className="object-contain transition duration-500 group-hover:scale-105"
                        />
                    </div>

                    <div className="p-5">
                        <h3 className="text-lg font-bold text-[#0b2f66]">{item.name}</h3>
                    </div>
                </div>
            </GLink>
        </article>
    );
}
