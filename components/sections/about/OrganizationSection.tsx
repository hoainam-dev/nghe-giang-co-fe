"use client";

import OrgChartFullscreen from "@/components/sections/about/OrgChartFullscreen";
import SectionTitle from "@/components/ui/SectionTitle";
import Container from "@/components/ui/Container";
import OrgChart from "@/components/sections/about/OrgChart";
import Reveal from "@/components/ui/Reveal";
import Image from "next/image";
import { useState } from "react";

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

      <OrgChartFullscreen open={openFullscreen} onClose={() => setOpenFullscreen(false)} />
    </section>
  );
}
