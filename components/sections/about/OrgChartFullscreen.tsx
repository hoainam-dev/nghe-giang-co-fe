import OrgChartContent from "@/components/sections/about/OrgChartContent";
import { useEffect } from "react";
import { X } from "lucide-react";

type OrgChartFullscreenProps = {
  open: boolean;
  onClose: () => void;
};

export default function OrgChartFullscreen({ open, onClose }: OrgChartFullscreenProps) {
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

      <div className="fixed top-1/2 left-1/2 h-[100dvw] w-[100dvh] -translate-x-1/2 -translate-y-1/2 rotate-90 overflow-auto bg-slate-50 p-4 lg:inset-0 lg:h-auto lg:w-auto lg:translate-x-0 lg:translate-y-0 lg:rotate-0">
        <div className="mb-4 pr-12 lg:pr-0">
          <p className="text-xs font-bold tracking-[0.16em] text-[#d7a321] uppercase">
            Sơ đồ tổ chức
          </p>
          <h3 className="text-base font-black text-[#0b2f66]">Bộ máy vận hành</h3>
        </div>

        <div className="w-max md:mx-auto">
          <OrgChartContent />
        </div>
      </div>
    </div>
  );
}
