import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const pages: { path: string; lastModified?: string }[] = [
  { path: "/", lastModified: "2026-11-15" },
  { path: "/services", lastModified: "2026-11-15" },
  { path: "/technologies", lastModified: "2026-11-15" },
  { path: "/about", lastModified: "2026-11-15" },
  { path: "/contact", lastModified: "2026-11-15" },
  { path: "/sitecore-development", lastModified: "2026-11-15" },
  { path: "/sitecore-xm-cloud-development", lastModified: "2026-11-15" },
  { path: "/sitecore-migration-review", lastModified: "2026-11-15" },
  { path: "/headless-cms-development", lastModified: "2026-11-15" },
  { path: "/ai-chatbot-development", lastModified: "2026-11-15" },
  { path: "/ai-chatbot-websites", lastModified: "2026-11-14" },
  { path: "/ai-modern-web-development", lastModified: "2026-11-14" },
  { path: "/blog", lastModified: "2026-11-15" },
  { path: "/blog/sitecore-cms-guide", lastModified: "2026-11-15" },
  { path: "/blog/sitecore-nextjs-published-page-404", lastModified: "2026-11-15" },
  { path: "/blog/sitecore-xp-upgrade-vs-sitecoreai-migration", lastModified: "2026-11-15" },
  { path: "/blog/sitecore-xm-cloud-migration-checklist", lastModified: "2026-11-15" },
  { path: "/blog/sitecore-xm-cloud-migration-estimate", lastModified: "2026-11-15" },
  { path: "/blog/headless-cms-seo-checklist", lastModified: "2026-11-15" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ path, lastModified }) => ({
    url: path === "/" ? SITE_URL : new URL(path, SITE_URL).href,
    lastModified,
  }));
}
