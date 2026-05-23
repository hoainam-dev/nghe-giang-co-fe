import OrgChartContent from "@/components/sections/about/OrgChartContent";
import { Maximize2 } from "lucide-react";

type OrgChartProps = {
  onOpenFullscreen: () => void;
};

export default function OrgChart({ onOpenFullscreen }: OrgChartProps) {
  return (
    <div className="relative rounded-[1.5rem] bg-white/90 p-4 shadow-xl ring-1 ring-slate-200 backdrop-blur md:rounded-[2rem] md:p-6">
      <button
        type="button"
        onClick={onOpenFullscreen}
        className="absolute top-3 left-3 z-20 inline-flex size-10 items-center justify-center rounded-full bg-[#0b4ea2] text-white shadow-lg transition hover:bg-[#083b7a] lg:hidden"
        aria-label="Phóng to sơ đồ tổ chức"
      >
        <Maximize2 size={18} />
      </button>

      <div className="overflow-x-auto pt-10 pb-2 md:pt-0">
        <OrgChartContent />
      </div>

      <p className="mt-3 text-center text-xs font-medium text-slate-500 md:hidden">
        Vuốt ngang hoặc bấm nút phóng to để xem toàn bộ sơ đồ
      </p>
    </div>
  );
}
