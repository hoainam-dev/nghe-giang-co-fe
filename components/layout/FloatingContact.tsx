import { MessageCircle, Phone } from "lucide-react";

export default function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href="tel:0900000000"
        className="flex size-12 items-center justify-center rounded-full bg-[#0b4ea2] text-white shadow-lg"
        aria-label="Gọi điện"
      >
        <Phone size={22} />
      </a>
      <a
        href="https://zalo.me/0900000000"
        target="_blank"
        className="flex size-12 items-center justify-center rounded-full bg-[#d7a321] text-white shadow-lg"
        aria-label="Zalo"
      >
        Zalo
      </a>
      <a
        href="https://m.me/"
        target="_blank"
        className="flex size-12 items-center justify-center rounded-full bg-[#1877f2] text-white shadow-lg"
        aria-label="Messenger"
      >
        <MessageCircle size={22} />
      </a>
    </div>
  );
}