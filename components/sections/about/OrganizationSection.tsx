"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Image from "next/image";
import { Maximize2, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

function TreeNode({
    label,
    tone = "default",
}: {
    label: string;
    tone?: "default" | "primary" | "gold";
}) {
    return (
        <div
            className={cn(
                "mx-auto flex min-h-12 w-fit min-w-[110px] items-center justify-center rounded-xl border px-3 py-3 text-center text-[11px] font-black uppercase leading-snug shadow-sm sm:min-w-[120px] sm:px-4 sm:text-xs md:min-w-[130px] md:text-sm",
                tone === "primary"
                    ? "border-[#0b4ea2] bg-[#0b4ea2] text-white"
                    : tone === "gold"
                        ? "border-[#d7a321] bg-[#d7a321] text-white"
                        : "border-slate-300 bg-white text-[#0b2f66]",
            )}
        >
            {label}
        </div>
    );
}

function OrgChartContent() {
    return (
        <div className="w-[800px] md:w-[925px] mx-auto">
            <TreeNode label="CT HĐTV" tone="gold" />
            <div className="mx-auto h-8 w-px bg-slate-300" />

            <TreeNode label="Giám đốc" tone="primary" />
            <div className="mx-auto h-8 w-px bg-slate-300" />

            <div className="relative mx-auto h-8 max-w-[760px]">
                <div className="absolute left-[8%] right-[8%] top-0 h-px bg-slate-300" />
                <div className="absolute left-[8%] top-0 h-8 w-px bg-slate-300" />
                <div className="absolute left-1/2 top-0 h-8 w-px bg-slate-300" />
                <div className="absolute right-[8%] top-0 h-8 w-px bg-slate-300" />
            </div>

            <div className="grid grid-cols-3 gap-8">
                <div>
                    <TreeNode label="P. Kế toán tài chính" />
                </div>

                <div>
                    <TreeNode label="P. Kinh doanh" />
                    <div className="mx-auto h-8 w-px bg-slate-300" />

                    <div className="relative mx-auto h-8 max-w-[260px]">
                        <div className="absolute left-[25%] right-[25%] top-0 h-px bg-slate-300" />
                        <div className="absolute left-[25%] top-0 h-8 w-px bg-slate-300" />
                        <div className="absolute right-[25%] top-0 h-8 w-px bg-slate-300" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <TreeNode label="QLKV Tây Nguyên" />
                            <div className="mx-auto h-6 w-px bg-slate-300" />
                            <TreeNode label="NVTT các địa bàn" />
                        </div>

                        <div>
                            <TreeNode label="QLKV Miền Trung" />
                            <div className="mx-auto h-6 w-px bg-slate-300" />
                            <TreeNode label="NVTT các địa bàn" />
                        </div>
                    </div>
                </div>

                <div>
                    <TreeNode label="P. Logistics" />
                    <div className="mx-auto h-8 w-px bg-slate-300" />

                    <div className="relative mx-auto h-8 max-w-[260px]">
                        <div className="absolute left-[25%] right-[25%] top-0 h-px bg-slate-300" />
                        <div className="absolute left-[25%] top-0 h-8 w-px bg-slate-300" />
                        <div className="absolute right-[25%] top-0 h-8 w-px bg-slate-300" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <TreeNode label="QL đội xe tải lớn" />
                            <div className="mx-auto h-6 w-px bg-slate-300" />
                            <TreeNode label="Hệ thống kho Tây Nguyên" />
                        </div>

                        <div>
                            <TreeNode label="QL đội xe tải nhỏ" />
                            <div className="mx-auto h-6 w-px bg-slate-300" />
                            <TreeNode label="Hệ thống kho Miền Trung" />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

function OrgChart({
    onOpenFullscreen,
}: {
    onOpenFullscreen: () => void;
}) {
    return (
        <div className="relative rounded-[1.5rem] bg-white/90 p-4 shadow-xl ring-1 ring-slate-200 backdrop-blur md:rounded-[2rem] md:p-6">
            <button
                type="button"
                onClick={onOpenFullscreen}
                className="absolute left-3 top-3 z-20 inline-flex size-10 items-center justify-center rounded-full bg-[#0b4ea2] text-white shadow-lg transition hover:bg-[#083b7a] lg:hidden"
                aria-label="Phóng to sơ đồ tổ chức"
            >
                <Maximize2 size={18} />
            </button>

            <div className="overflow-x-auto pb-2 pt-10 md:pt-0">
                <OrgChartContent />
            </div>

            <p className="mt-3 text-center text-xs font-medium text-slate-500 md:hidden">
                Vuốt ngang hoặc bấm nút phóng to để xem toàn bộ sơ đồ
            </p>
        </div>
    );
}

function OrgChartFullscreen({
    open,
    onClose,
}: {
    open: boolean;
    onClose: () => void;
}) {
    useEffect(() => {
        if (!open) return;

        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = originalOverflow;
        };
    }, [open]);

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-[100] bg-slate-50">
            <button
                type="button"
                onClick={onClose}
                className="fixed right-3 bottom-3 z-[120] inline-flex size-10 items-center justify-center rounded-full bg-white text-[#0b2f66] shadow-lg ring-1 ring-slate-200 transition hover:bg-slate-100"
                aria-label="Đóng sơ đồ toàn màn hình"
            >
                <X size={20} />
            </button>

            <div className="fixed left-1/2 top-1/2 h-[100dvw] w-[100dvh] -translate-x-1/2 -translate-y-1/2 rotate-90 overflow-auto bg-slate-50 p-4 lg:inset-0 lg:h-auto lg:w-auto lg:translate-x-0 lg:translate-y-0 lg:rotate-0">
                <div className="mb-4 pr-12 lg:pr-0">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#d7a321]">
                        Sơ đồ tổ chức
                    </p>
                    <h3 className="text-base font-black text-[#0b2f66]">
                        Bộ máy vận hành
                    </h3>
                </div>

                <div className="w-max md:mx-auto">
                    <OrgChartContent />
                </div>
            </div>
        </div>
    );
}

export default function OrganizationSection() {
    const [openFullscreen, setOpenFullscreen] = useState(false);

    return (
        <section className="relative overflow-hidden bg-slate-50 py-14 md:py-20">
            <Image src="/images/org-bg.jpg" alt="" fill className="object-cover" />
            <div className="absolute inset-0 bg-slate-50/92" />

            <Container className="relative">
                <SectionTitle
                    eyebrow="Sơ đồ tổ chức"
                    title="Bộ máy vận hành rõ ràng, chuyên nghiệp"
                    desc="Cơ cấu tổ chức được xây dựng theo hướng tối ưu vận hành kinh doanh, tài chính và logistics."
                />

                <div className="mt-8 md:mt-12">
                    <Reveal variant="fade-up" delay={120}>
                        <OrgChart onOpenFullscreen={() => setOpenFullscreen(true)} />
                    </Reveal>
                </div>
            </Container>

            <OrgChartFullscreen
                open={openFullscreen}
                onClose={() => setOpenFullscreen(false)}
            />
        </section>
    );
}