import { companyInfo, contactInfo, siteConfig } from "@/data/site";
import { absoluteUrl } from "@/lib/seo";
import type { ProductDetail } from "@/types";

const organizationId = `${absoluteUrl("/")}#organization`;
const localBusinessId = `${absoluteUrl("/")}#localbusiness`;

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: "89 Lê Văn Hưu, Phường Ngũ Hành Sơn",
  addressLocality: "Đà Nẵng",
  addressRegion: "Đà Nẵng",
  addressCountry: "VN",
};

const geoCoordinates = {
  "@type": "GeoCoordinates",
  latitude: 16.0392,
  longitude: 108.2489,
};

export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": organizationId,
        name: siteConfig.name,
        alternateName: companyInfo.internationalName,
        url: absoluteUrl("/"),
        logo: absoluteUrl("images/logo.png"),
        image: absoluteUrl("images/og-image.png"),
        description: siteConfig.description,
        email: siteConfig.email,
        telephone: siteConfig.phone,
        foundingDate: companyInfo.foundedYear,
        address: postalAddress,
        areaServed: [
          { "@type": "AdministrativeArea", name: "Miền Trung" },
          { "@type": "AdministrativeArea", name: "Tây Nguyên" },
        ],
        sameAs: [],
      },
      {
        "@type": "LocalBusiness",
        "@id": localBusinessId,
        name: siteConfig.name,
        parentOrganization: { "@id": organizationId },
        url: absoluteUrl("/"),
        image: absoluteUrl("images/og-image.png"),
        description: siteConfig.description,
        telephone: siteConfig.phone,
        email: siteConfig.email,
        address: postalAddress,
        geo: geoCoordinates,
        hasMap: contactInfo.mapUrl,
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "07:30",
            closes: "17:30",
          },
        ],
        priceRange: "$$",
      },
      {
        "@type": "WebSite",
        "@id": `${absoluteUrl("/")}#website`,
        url: absoluteUrl("/"),
        name: siteConfig.name,
        description: siteConfig.description,
        publisher: { "@id": organizationId },
        inLanguage: "vi-VN",
      },
    ],
  };
}

export function getProductJsonLd(product: ProductDetail) {
  const productUrl = absoluteUrl(`/san-pham/${product.slug}`);

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.desc,
    image: product.image ? absoluteUrl(product.image.replace(/^\//, "")) : undefined,
    url: productUrl,
    category: "Xi măng",
    brand: {
      "@type": "Brand",
      name: product.brand,
    },
    manufacturer: {
      "@type": "Organization",
      name: product.brand,
    },
  };
}
