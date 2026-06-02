import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer id="lien-he" className="bg-[#071f45] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <h3 className="font-heading text-xl font-bold tracking-tight">{siteConfig.name}</h3>
          <p className="text-brand-muted/80 mt-5 text-sm leading-7 font-medium">
            {siteConfig.description}
          </p>
        </div>

        <div>
          <h4 className="eyebrow text-brand-gold-light! mb-5 text-[0.6875rem]!">Liên hệ</h4>
          <div className="text-brand-muted/80 space-y-4 text-sm font-medium">
            <p className="flex items-start gap-3">
              <Phone size={17} className="text-brand-gold mt-0.5 shrink-0" />
              {siteConfig.phone}
            </p>
            <p className="flex items-start gap-3">
              <Mail size={17} className="text-brand-gold mt-0.5 shrink-0" />
              {siteConfig.email}
            </p>
            <p className="flex items-start gap-3">
              <MapPin size={17} className="text-brand-gold mt-0.5 shrink-0" />
              {siteConfig.address}
            </p>
          </div>
        </div>

        <div>
          <h4 className="eyebrow text-brand-gold-light! mb-5 text-[0.6875rem]!">
            Khu vực hoạt động
          </h4>
          <p className="text-brand-muted/80 text-sm leading-7 font-medium">
            Miền Trung, TP Đà Nẵng và các khu vực lân cận.
          </p>
        </div>
      </div>

      <div className="text-brand-muted/60 border-t border-white/8 py-6 text-center text-xs font-medium tracking-wide">
        © 2026 {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
