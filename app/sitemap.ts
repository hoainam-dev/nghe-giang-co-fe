import { absoluteUrl } from "@/lib/seo";
import { productDetails } from "@/data/site";
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const staticRoutes = ["", "gioi-thieu", "san-pham", "doi-tac", "lien-he"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: absoluteUrl(route ? `/${route}` : "/"),
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  const productPages: MetadataRoute.Sitemap = productDetails.map((product) => ({
    url: absoluteUrl(`/san-pham/${product.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...pages, ...productPages];
}
