"use client";

import { useEffect, useState } from "react";
import { ArrowUp, Phone } from "lucide-react";

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
        className="group bg-brand-blue relative flex size-12 items-center justify-center rounded-full text-white shadow-[0_4px_16px_rgba(13,21,32,0.2)] transition hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(13,21,32,0.28)]"
        aria-label="Gọi điện"
      >
        <span className="bg-brand-blue absolute inset-0 animate-ping rounded-full opacity-30" />
        <Phone
          className="relative z-10 animate-[phone-shake_1.4s_ease-in-out_infinite]"
          size={21}
        />
      </a>

      <a
        href="https://zalo.me/0394389999"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex size-12 items-center justify-center rounded-full bg-[#0068FF] text-xs font-bold text-white shadow-[0_4px_16px_rgba(13,21,32,0.18)] transition hover:-translate-y-0.5"
        aria-label="Chat Zalo"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#0068FF] opacity-30" />
        <span className="relative z-10 animate-[phone-shake_1.4s_ease-in-out_infinite]">Zalo</span>
      </a>

      {showScrollTop && (
        <button
          type="button"
          onClick={handleScrollTop}
          className="text-brand-blue ring-border/80 hover:bg-surface flex size-12 items-center justify-center rounded-full bg-white shadow-[0_4px_16px_rgba(10,31,61,0.1)] ring-1 transition hover:-translate-y-0.5"
          aria-label="Cuộn lên đầu trang"
        >
          <ArrowUp size={21} />
        </button>
      )}

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
