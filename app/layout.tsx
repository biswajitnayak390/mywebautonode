import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SimpleChatBot from "@/components/SimpleChatbot";
import { Analytics } from "@vercel/analytics/next";
import { ORGANIZATION_ID, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "AutonodeAI | Sitecore, Headless CMS, AI & Modern Website Development",
    template: "%s | AutonodeAI",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "AutonodeAI",
    "Sitecore development company",
    "Sitecore CMS services",
    "headless CMS development",
    "WordPress website agency",
    "Contentful development",
    "Strapi development",
    "Next.js web development",
    ".NET development services",
    "AI website automation",
    "technical SEO services",
    "digital experience platform development",
  ],
  alternates: {
    canonical: "./",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },
  openGraph: {
    title:
      "AutonodeAI | Sitecore, Headless CMS, AI & Modern Website Development",
    description: SITE_DESCRIPTION,
    url: "./",
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "AutonodeAI enterprise website, CMS, and AI services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AutonodeAI | Sitecore, Headless CMS, AI & Modern Website Development",
    description: SITE_DESCRIPTION,
    images: ["/images/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/icon.png`,
  image: `${SITE_URL}/images/hero.jpg`,
  email: "contact@autonodeai.com",
  description: SITE_DESCRIPTION,
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "contact@autonodeai.com",
      areaServed: "Worldwide",
      availableLanguage: ["English"],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Header />
        {children}
        <Footer />
        <SimpleChatBot />
        <Analytics />
      </body>
    </html>
  );
}
