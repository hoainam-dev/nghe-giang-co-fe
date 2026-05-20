// import Image from "next/image";
// import GLink from "@/components/general/GLink";
// import { ArrowRight } from "lucide-react";
// import Container from "@/components/ui/Container";
// import SectionTitle from "@/components/ui/SectionTitle";
// import FadeIn from "@/components/ui/FadeIn";
// import { products } from "@/data/site";

// export default function ProductSection() {
//   return (
//     <section className="bg-slate-50 py-20">
//       <Container>
//         <SectionTitle
//           center
//           eyebrow="Sản phẩm"
//           title="Danh mục xi măng cho nhiều nhu cầu công trình"
//           desc="Các sản phẩm được trình bày rõ ràng, dễ xem trên mobile và tối ưu cho SEO từ khóa xi măng, Nghệ Giang, miền Trung."
//         />

//         <div className="mt-12 grid gap-6 md:grid-cols-3">
//           {products.map((item) => (
//             <FadeIn key={item.name}>
//               <article className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl">
//                 <div className="relative h-64 overflow-hidden">
//                   <Image
//                     src={item.image}
//                     alt={item.name}
//                     fill
//                     className="object-cover transition duration-500 group-hover:scale-105"
//                   />
//                 </div>

//                 <div className="p-6">
//                   <h3 className="text-xl font-bold text-[#0b2f66]">{item.name}</h3>
//                   <p className="mt-3 text-sm leading-6 text-slate-600">{item.desc}</p>

//                   <Link
//                     href="/san-pham"
//                     className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#0b4ea2]"
//                   >
//                     Xem chi tiết <ArrowRight size={16} />
//                   </Link>
//                 </div>
//               </article>
//             </FadeIn>
//           ))}
//         </div>
//       </Container>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import GLink from "@/components/general/GLink";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import { products } from "@/data/site";
import { cn } from "@/lib/utils";

export default function ProductSection() {
  const [active, setActive] = useState(0);

  const items = useMemo(() => [...products, ...products], []);

  const maxIndex = Math.max(0, items.length - 3);

  const next = () => {
    setActive((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prev = () => {
    setActive((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="overflow-hidden bg-slate-50 py-20">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionTitle
            eyebrow="Sản phẩm"
            title="Danh mục xi măng cho nhiều nhu cầu công trình"
            desc="Hiển thị dạng carousel preview 3 sản phẩm trên desktop, phù hợp trang chủ doanh nghiệp."
          />

          <Reveal variant="fade-left">
            <div className="flex gap-3">
              <button
                type="button"
                onClick={prev}
                className="flex size-11 items-center justify-center rounded-full border border-slate-200 bg-white text-[#0b4ea2] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#0b4ea2] hover:text-white"
              >
                <ArrowLeft size={20} />
              </button>
              <button
                type="button"
                onClick={next}
                className="flex size-11 items-center justify-center rounded-full border border-slate-200 bg-white text-[#0b4ea2] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#0b4ea2] hover:text-white"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </Reveal>
        </div>

        <Reveal variant="fade-up" delay={160}>
          <div className="mt-12 overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${active * 100}%)`,
              }}
            >
              {items.map((item, index) => (
                <div
                  key={`${item.name}-${index}`}
                  className="w-full shrink-0 px-2 md:w-1/2 lg:w-1/3"
                >
                  <article className="group h-full overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 transition group-hover:opacity-100" />
                    </div>

                    <div className="p-6">
                      <p className="mb-2 text-xs font-bold tracking-[0.18em] text-[#d7a321] uppercase">
                        Nghệ Giang
                      </p>
                      <h3 className="text-xl font-bold text-[#0b2f66]">{item.name}</h3>
                      <p className="mt-3 text-sm leading-6 text-slate-600">{item.desc}</p>

                      <GLink
                        href="/san-pham"
                        className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#0b4ea2]"
                      >
                        Xem chi tiết <ArrowRight size={16} />
                      </GLink>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActive(index)}
              className={cn(
                "h-2.5 rounded-full transition-all",
                active === index ? "w-8 bg-[#0b4ea2]" : "w-2.5 bg-slate-300",
              )}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
