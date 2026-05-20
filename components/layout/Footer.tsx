import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer id="lien-he" className="bg-[#071f45] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <h3 className="text-xl font-bold">{siteConfig.name}</h3>
          <p className="mt-4 text-sm leading-6 text-blue-100">
            {siteConfig.description}
          </p>
        </div>

        <div>
          <h4 className="font-bold">Liên hệ</h4>
          <div className="mt-4 space-y-3 text-sm text-blue-100">
            <p className="flex gap-2"><Phone size={18} /> {siteConfig.phone}</p>
            <p className="flex gap-2"><Mail size={18} /> {siteConfig.email}</p>
            <p className="flex gap-2"><MapPin size={18} /> {siteConfig.address}</p>
          </div>
        </div>

        <div>
          <h4 className="font-bold">Khu vực hoạt động</h4>
          <p className="mt-4 text-sm leading-6 text-blue-100">
            Miền Trung, TP Đà Nẵng và các khu vực lân cận.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-sm text-blue-100">
        © 2026 {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}