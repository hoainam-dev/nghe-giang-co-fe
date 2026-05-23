"use client";

import { ArrowUp, MessageCircle, Phone } from "lucide-react";
import { useEffect, useState } from "react";

export default function FloatingContact() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col gap-3 sm:right-5 sm:bottom-5">
      <a
        href="tel:0394389999"
        className="group relative flex size-12 items-center justify-center rounded-full bg-[#0b4ea2] text-white shadow-lg"
        aria-label="Gọi điện"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#0b4ea2] opacity-40" />
        <Phone
          className="relative z-10 animate-[phone-shake_1.4s_ease-in-out_infinite]"
          size={22}
        />
      </a>

      <a
        href="https://zalo.me/0394389999"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex size-12 items-center justify-center rounded-full bg-[#d7a321] text-xs font-black text-white shadow-lg"
        aria-label="Zalo"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#d7a321] opacity-40" />
        <span className="relative z-10 animate-[phone-shake_1.4s_ease-in-out_infinite]">Zalo</span>
      </a>
      <button
        type="button"
        onClick={handleScrollTop}
        className="flex size-12 items-center justify-center rounded-full bg-white text-[#0b4ea2] shadow-lg ring-1 ring-slate-200 transition hover:-translate-y-1 hover:bg-slate-50"
        aria-label="Cuộn lên đầu trang"
      >
        <ArrowUp size={22} />
      </button>

      <style jsx>{`
        @keyframes phone-shake {
          0%,
          100% {
            transform: rotate(0deg) scale(1);
          }

          10% {
            transform: rotate(-12deg) scale(1.06);
          }

          20% {
            transform: rotate(12deg) scale(1.06);
          }

          30% {
            transform: rotate(-10deg) scale(1.06);
          }

          40% {
            transform: rotate(10deg) scale(1.06);
          }

          50% {
            transform: rotate(0deg) scale(1);
          }
        }
      `}</style>
    </div>
  );
}
