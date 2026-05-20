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
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import { products } from "@/data/site";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function ProductSection() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20">
      <Image
        src="/images/product-bg.jpg"
        alt=""
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-slate-50/90" />

      <Container className="relative">
        <SectionTitle
          eyebrow="Sản phẩm"
          title="Danh mục xi măng cho nhiều nhu cầu công trình"
          desc="Hiển thị dạng carousel preview 3 sản phẩm trên desktop, phù hợp trang chủ doanh nghiệp."
        />

        <Reveal variant="fade-up" delay={160}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="mt-12"
          >
            <CarouselContent className="-ml-4 py-2">
              {products.map((item) => (
                <CarouselItem
                  key={item.slug}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <article className="group h-full overflow-hidden rounded-[1.5rem] bg-white shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl">
                    <div className="relative flex justify-center overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={200}
                        height={200}
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition group-hover:opacity-100" />
                    </div>

                    <div className="p-6">
                      <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#d7a321]">
                        Nghệ Giang
                      </p>

                      <h3 className="text-xl font-bold text-[#0b2f66]">
                        {item.name}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-slate-600">
                        {item.desc}
                      </p>

                      <Link
                        href={`/san-pham/${item.slug}`}
                        className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#0b4ea2]"
                      >
                        Xem chi tiết <ArrowRight size={16} />
                      </Link>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="-left-4 border-slate-200 bg-white text-[#0b4ea2] hover:bg-[#0b4ea2] hover:text-white md:-left-6" />
            <CarouselNext className="-right-4 border-slate-200 bg-white text-[#0b4ea2] hover:bg-[#0b4ea2] hover:text-white md:-right-6" />
          </Carousel>
        </Reveal>
      </Container>
    </section>
  );
}