import ProductDetailHeader from "@/components/sections/product/ProductDetailHeader";
import ProductInfoListItem from "@/components/cards/ProductInfoListItem";
import ProductInfoListCard from "@/components/cards/ProductInfoListCard";
import ProductInfoCard from "@/components/cards/PorductInfoCard";
import CTASection from "@/components/sections/CTASection";
import Container from "@/components/ui/Container";
import JsonLd from "@/components/seo/JsonLd";
import Reveal from "@/components/ui/Reveal";
import GLink from "@/components/general/GLink";
import Image from "next/image";
import { PackageCheck, ShieldCheck, BadgeCheck, ArrowLeft, Boxes } from "lucide-react";
import { pcbCommonInfo, productDetails } from "@/data/site";
import { createPageMetadata } from "@/lib/seo";
import { getProductJsonLd } from "@/lib/json-ld";
import { notFound } from "next/navigation";
import { cn } from "@/lib/utils";

type ProductDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return productDetails.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = productDetails.find((item) => item.slug === slug);

  if (!product) return {};

  return createPageMetadata({
    title: product.name,
    description: `${product.desc} Phân phối bởi Nghệ Giang tại miền Trung và Tây Nguyên.`,
    path: `/san-pham/${product.slug}`,
    image: product.frontImage ?? product.image,
  });
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = productDetails.find((item) => item.slug === slug);

  if (!product) notFound();

  return (
    <>
      <JsonLd data={getProductJsonLd(product)} />
      <ProductDetailHeader product={product} />

      <section id="chi-tiet">
        <div className="relative overflow-hidden bg-white py-10 sm:py-14 md:py-20">
          <div className="absolute inset-0 bg-white/92" />

          <Container className="relative">
            <Reveal variant="fade-right">
              <GLink
                href="/san-pham#danh-sach"
                className="text-brand-navy hover:text-brand-blue mb-6 inline-flex items-center gap-2 text-xs font-medium transition sm:mb-8 sm:text-sm"
              >
                <ArrowLeft size={18} />
                Quay lại sản phẩm
              </GLink>
            </Reveal>
            <div className="grid gap-8 xl:grid-cols-[0.90fr_1.10fr] xl:gap-10">
              <Reveal variant="fade-right">
                <div
                  className={cn(
                    "grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-1",
                    !product.packageImage && "mx-auto max-w-[600px] grid-cols-1 md:grid-cols-1",
                  )}
                >
                  {product.packageImage && (
                    <div className="relative flex h-auto w-full items-center justify-center rounded-[1.5rem] xl:p-0 xl:shadow-none">
                      <Image
                        src={product.packageImage}
                        alt={`Vỏ bao ${product.name}`}
                        width={260}
                        height={260}
                        className="h-auto w-fit object-contain drop-shadow-xl sm:w-full"
                      />
                    </div>
                  )}
                  <div className="grid grid-cols-1 gap-4">
                    {product.frontImage && (
                      <div className="relative flex h-auto w-full items-center justify-center rounded-[1.5rem] xl:p-0 xl:shadow-none">
                        <Image
                          src={product.frontImage}
                          alt={`Mặt trước ${product.name}`}
                          width={400}
                          height={400}
                          className="h-auto w-full object-contain drop-shadow-xl"
                        />
                      </div>
                    )}
                    {product.backImage && (
                      <div className="relative flex h-auto w-full items-center justify-center rounded-[1.5rem] xl:p-0 xl:shadow-none">
                        <Image
                          src={product.backImage}
                          alt={`Mặt sau ${product.name}`}
                          width={400}
                          height={400}
                          className="h-auto w-full object-contain drop-shadow-xl"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>

              <div className="space-y-5 sm:space-y-6 lg:space-y-8">
                <Reveal variant="fade-up">
                  <ProductInfoCard
                    icon={<PackageCheck size={22} />}
                    eyebrow="Hướng dẫn sử dụng"
                    title="Bảo quản sản phẩm"
                  >
                    <div className="space-y-3">
                      {product.usage.storage.map((item) => (
                        <ProductInfoListItem key={item} item={item} iconTone="gold" />
                      ))}
                    </div>
                  </ProductInfoCard>
                </Reveal>

                {product.usage.mixRatio && (
                  <Reveal variant="fade-up">
                    <div className="border-border overflow-hidden rounded-[1.25rem] border bg-white shadow-sm sm:rounded-[2rem]">
                      <div className="border-border bg-brand-blue border-b p-4 text-white sm:p-6">
                        <div className="flex items-start gap-3 sm:items-center">
                          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/15 sm:size-12">
                            <Boxes size={22} />
                          </div>

                          <div className="min-w-0">
                            <p className="eyebrow text-[0.6875rem]! sm:text-xs!">Tỷ lệ cấp phối</p>
                            <h3 className="mt-1 text-lg leading-snug font-black sm:text-2xl">
                              Cho 1m³ bê tông, vữa xây
                            </h3>
                          </div>
                        </div>
                      </div>

                      <div className="hidden sm:block">
                        <div className="overflow-x-auto">
                          <table className="w-full min-w-[680px] border-collapse text-left">
                            <thead>
                              <tr className="bg-surface text-brand-navy text-sm uppercase">
                                <th className="border-border border-b px-5 py-4 font-black">
                                  Vật liệu
                                </th>
                                <th className="border-border border-b px-5 py-4 font-black">
                                  Đơn vị
                                </th>
                                <th className="border-border border-b px-5 py-4 font-black">
                                  Bê tông mác 250
                                </th>
                                <th className="border-border border-b px-5 py-4 font-black">
                                  Vữa xây mác 100
                                </th>
                              </tr>
                            </thead>

                            <tbody>
                              {product.usage.mixRatio.map((row) => (
                                <tr key={row.material} className="hover:bg-surface">
                                  <td className="text-brand-navy border-b border-slate-100 px-5 py-4 font-bold">
                                    {row.material}
                                  </td>
                                  <td className="text-brand-text-muted border-b border-slate-100 px-5 py-4">
                                    {row.unit}
                                  </td>
                                  <td className="text-brand-text border-b border-slate-100 px-5 py-4 font-bold">
                                    {row.concrete250}
                                  </td>
                                  <td className="text-brand-text border-b border-slate-100 px-5 py-4 font-bold">
                                    {row.mortar100}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div className="divide-y divide-slate-100 sm:hidden">
                        {product.usage.mixRatio.map((row) => (
                          <div key={row.material} className="p-4">
                            <div className="mb-3 flex items-center justify-between gap-3">
                              <p className="text-brand-navy font-bold">{row.material}</p>
                              <span className="text-brand-text-muted rounded-full bg-slate-100 px-3 py-1 text-xs font-bold">
                                {row.unit}
                              </span>
                            </div>

                            <div className="grid gap-2 text-sm">
                              <div className="bg-surface rounded-xl p-3">
                                <p className="text-brand-text-muted text-xs font-bold tracking-[0.12em] uppercase">
                                  Bê tông mác 250
                                </p>
                                <p className="text-brand-text mt-1 font-bold">{row.concrete250}</p>
                              </div>

                              <div className="bg-surface rounded-xl p-3">
                                <p className="text-brand-text-muted text-xs font-bold tracking-[0.12em] uppercase">
                                  Vữa xây mác 100
                                </p>
                                <p className="text-brand-text mt-1 font-bold">{row.mortar100}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                )}

                {product.usage.advantages && (
                  <Reveal variant="fade-up">
                    <ProductInfoListCard
                      icon={<BadgeCheck size={22} />}
                      eyebrow="Ưu điểm nổi bật"
                      title="Đặc tính sản phẩm"
                      items={product.usage.advantages}
                    />
                  </Reveal>
                )}

                {product.usage.applications && (
                  <Reveal variant="fade-up">
                    <ProductInfoListCard
                      icon={<ShieldCheck size={22} />}
                      eyebrow="Ứng dụng"
                      title="Hạng mục phù hợp"
                      items={product.usage.applications}
                    />
                  </Reveal>
                )}

                {product.isMain && (
                  <Reveal variant="fade-up">
                    <ProductInfoCard
                      icon={<BadgeCheck size={22} />}
                      eyebrow="Thông tin chung"
                      title={pcbCommonInfo.title}
                      iconClassName="bg-brand-gold/15 text-brand-gold"
                    >
                      <div className="space-y-3">
                        {pcbCommonInfo.desc.map((item) => (
                          <ProductInfoListItem key={item} item={item} iconTone="blue" />
                        ))}
                      </div>
                    </ProductInfoCard>
                  </Reveal>
                )}
              </div>
            </div>
          </Container>
        </div>
      </section>

      <CTASection />
    </>
  );
}
