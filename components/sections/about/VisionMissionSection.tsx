import CoreValuesSection from "@/components/sections/about/CoreValuesSection";
import SectionTitle from "@/components/ui/SectionTitle";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Image from "next/image";
import { Eye, Target } from "lucide-react";

const visionMissionItems = [
    {
        index: "01",
        title: "Tầm nhìn",
        icon: Eye,
        desc: "Trở thành nhà phân phối xi măng hàng đầu Việt Nam, là đối tác chiến lược của các nhà máy xi măng, nhà thầu và đại lý lớn.",
    },
    {
        index: "02",
        title: "Sứ mệnh",
        icon: Target,
        desc: "Mang đến cho khách hàng những sản phẩm chất lượng với dịch vụ chuyên nghiệp và hoàn hảo nhất.",
    },
];

export default function VisionMissionSection() {
    return (
        <>
            <section className="relative overflow-hidden bg-[#071f45] py-14 text-white sm:py-16 lg:py-20">
                <Image src="/images/banner_2.jpeg" alt="" fill className="object-cover" />
                <div className="absolute inset-0 bg-[#071f45]/72" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#071f45] via-[#0b4ea2]/70 to-[#071f45]" />
                <div className="absolute -right-24 bottom-10 size-80 rounded-full bg-blue-400/10 blur-3xl" />

                <Container className="relative">
                    <SectionTitle
                        eyebrow="Định hướng phát triển"
                        title="Tầm nhìn và sứ mệnh"
                        desc="Nghệ Giang định hướng phát triển bền vững, lấy chất lượng sản phẩm, uy tín thương hiệu và hiệu quả vận hành làm nền tảng."
                        variant="dark"
                    />

                    <div className="mt-8 grid gap-5 lg:mt-12 lg:grid-cols-2">
                        {visionMissionItems.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <Reveal key={item.title} variant="fade-up" delay={index * 100}>
                                    <div className="group relative h-full overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/[0.08] p-6 shadow-2xl backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/[0.12] sm:p-8">
                                        <div className="absolute right-5 top-5 text-6xl font-black leading-none text-white/[0.06] sm:text-7xl">
                                            {item.index}
                                        </div>

                                        <div className="relative">
                                            <div className="mb-7 flex items-center justify-between gap-4">
                                                <div className="flex size-14 items-center justify-center rounded-2xl bg-[#d7a321] text-white shadow-lg shadow-[#d7a321]/20">
                                                    <Icon size={28} />
                                                </div>

                                                <div className="h-px flex-1 bg-gradient-to-r from-[#d7a321]/70 to-transparent" />
                                            </div>

                                            <h3 className="text-2xl font-black uppercase tracking-wide text-[#d7a321] sm:text-3xl">
                                                {item.title}
                                            </h3>

                                            <p className="mt-4 text-sm leading-7 text-blue-50 sm:text-base sm:leading-8">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                </Reveal>
                            );
                        })}
                    </div>
                </Container>
            </section>

            <CoreValuesSection />
        </>
    );
}