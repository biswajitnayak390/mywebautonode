import type { Metadata } from "next";

export const SITE_URL = "https://www.autonodeai.com";
export const SITE_NAME = "AutonodeAI";
export const SITE_DESCRIPTION =
  "AutonodeAI is an independent web engineering practice focused on Sitecore migrations, headless CMS and Next.js development, and AI integrations.";
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;


export function sitePageMetadata(path: string, title: string, description: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      url: path,
      title,
      description,
      images: [{ url: "/images/hero.jpg", alt: SITE_NAME }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/hero.jpg"],
    },
  };
}
