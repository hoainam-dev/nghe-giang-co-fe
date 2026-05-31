import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer id="lien-he" className="bg-[#071f45] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <h3 className="font-heading text-xl font-bold tracking-tight">{siteConfig.name}</h3>
          <p className="mt-5 text-sm leading-7 font-medium text-brand-muted/80">{siteConfig.description}</p>
        </div>

        <div>
          <h4 className="eyebrow mb-5 text-[0.6875rem]! text-brand-gold-light!">Liên hệ</h4>
          <div className="space-y-4 text-sm font-medium text-brand-muted/80">
            <p className="flex items-start gap-3">
              <Phone size={17} className="mt-0.5 shrink-0 text-brand-gold" />
              {siteConfig.phone}
            </p>
            <p className="flex items-start gap-3">
              <Mail size={17} className="mt-0.5 shrink-0 text-brand-gold" />
              {siteConfig.email}
            </p>
            <p className="flex items-start gap-3">
              <MapPin size={17} className="mt-0.5 shrink-0 text-brand-gold" />
              {siteConfig.address}
            </p>
          </div>
        </div>

        <div>
          <h4 className="eyebrow mb-5 text-[0.6875rem]! text-brand-gold-light!">Khu vực hoạt động</h4>
          <p className="text-sm leading-7 font-medium text-brand-muted/80">
            Miền Trung, TP Đà Nẵng và các khu vực lân cận.
          </p>
        </div>
      </div>

      <div className="border-t border-white/8 py-6 text-center text-xs font-medium tracking-wide text-brand-muted/60">
        © 2026 {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
