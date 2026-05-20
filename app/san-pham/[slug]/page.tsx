import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import CTASection from "@/components/sections/CTASection";
import Reveal from "@/components/ui/Reveal";
import { products } from "@/data/site";

type ProductDetailPageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export function generateStaticParams() {
    return products.map((item) => ({
        slug: item.slug,
    }));
}

export async function generateMetadata({ params }: ProductDetailPageProps) {
    const { slug } = await params;
    const product = products.find((item) => item.slug === slug);

    if (!product) return {};

    return {
        title: product.name,
        description: product.desc,
    };
}

export default async function ProductDetailPage({
    params,
}: ProductDetailPageProps) {
    const { slug } = await params;
    const product = products.find((item) => item.slug === slug);

    if (!product) {
        notFound();
    }

    return (
        <>
            <section className="relative overflow-hidden bg-[#071f45] py-24 text-white">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    priority
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-[#071f45]/85" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#071f45] via-[#0b4ea2]/70 to-transparent" />

                <Container className="relative">
                    <Reveal variant="fade-right">
                        <Link
                            href="/san-pham"
                            className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-blue-100 hover:text-white"
                        >
                            <ArrowLeft size={18} />
                            Quay lại sản phẩm
                        </Link>
                    </Reveal>

                    <Reveal variant="blur">
                        <h1 className="max-w-4xl text-4xl font-black md:text-6xl">
                            {product.name}
                        </h1>
                    </Reveal>

                    <Reveal variant="fade-up" delay={120}>
                        <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-50">
                            {product.desc}
                        </p>
                    </Reveal>
                </Container>
            </section>

            <section className="bg-white py-20">
                <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
                    <Reveal variant="scale-up">
                        <div className="relative overflow-hidden rounded-[2rem]">
                            <Image
                                src={product.image}
                                alt={product.name}
                                width={720}
                                height={520}
                                className="h-[420px] w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-[#0b4ea2]/15" />
                        </div>
                    </Reveal>

                    <div>
                        <Reveal variant="fade-left">
                            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d7a321]">
                                Chi tiết sản phẩm
                            </p>
                        </Reveal>

                        <Reveal variant="blur" delay={100}>
                            <h2 className="mt-3 text-3xl font-black text-[#0b2f66]">
                                Thông tin tổng quan
                            </h2>
                        </Reveal>

                        <Reveal variant="fade-up" delay={180}>
                            <p className="mt-5 text-base leading-8 text-slate-600">
                                {product.content}
                            </p>
                        </Reveal>

                        <div className="mt-8 space-y-4">
                            {product.specs.map((item, index) => (
                                <Reveal key={item} variant="fade-up" delay={index * 100}>
                                    <div className="flex gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                                        <CheckCircle2 className="mt-0.5 text-[#d7a321]" size={22} />
                                        <p className="font-semibold text-slate-700">{item}</p>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            <CTASection />
        </>
    );
}
