import { siteConfig } from "@/data/site";
import type { Metadata } from "next";

export const siteUrl = `https://${siteConfig.domain}`;

export function absoluteUrl(path = "/"): string {
  if (!path || path === "/") return `${siteUrl}/`;

  const cleanPath = path.replace(/^\/+/, "");

  if (/\.[a-z0-9]+$/i.test(cleanPath)) {
    return `${siteUrl}/${cleanPath}`;
  }

  const withoutTrailing = cleanPath.replace(/\/+$/, "");
  return `${siteUrl}/${withoutTrailing}/`;
}

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

export function createPageMetadata({
  title,
  description,
  path,
  image,
}: PageMetadataOptions): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "vi_VN",
      type: "website",
      images: [
        {
          url: image
            ? image.startsWith("http")
              ? image
              : absoluteUrl(image.replace(/^\//, ""))
            : absoluteUrl("images/og-image.png"),
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
