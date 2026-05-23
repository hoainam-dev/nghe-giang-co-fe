import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import GLink from "@/components/general/GLink";
import type { ProductDetail } from "@/types";
import { ArrowLeft } from "lucide-react";

type ProductDetailProps = {
    product: ProductDetail;
};

export default function ProductDetailHeader({ product }: ProductDetailProps) {
    return (
        <section className="relative overflow-hidden bg-[#071f45] py-10 text-white sm:py-14 lg:py-16">
            <div className="absolute inset-0 bg-[#071f45]/88" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#071f45] via-[#0b4ea2]/60 to-transparent" />

            <Container className="relative">
                <div className="max-w-4xl">
                    <Reveal variant="fade-down">
                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#d7a321] sm:text-sm sm:tracking-[0.2em]">
                            {product.brand}
                        </p>
                    </Reveal>

                    <Reveal variant="blur" delay={100}>
                        <h1 className="mt-3 text-[30px] font-black leading-[1.15] sm:mt-4 sm:text-4xl md:text-5xl lg:text-6xl">
                            {product.name}
                        </h1>
                    </Reveal>

                    <Reveal variant="fade-up" delay={200}>
                        <p className="mt-4 max-w-2xl text-sm leading-7 text-blue-50 sm:mt-6 sm:text-base md:text-lg md:leading-8">
                            {product.desc}
                        </p>
                    </Reveal>
                </div>
            </Container>
        </section>
    )
}
