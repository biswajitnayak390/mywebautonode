import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://autonodeai.com"),
  title: {
    default:
      "AutonodeAI | Sitecore, Headless CMS, AI & Modern Website Development",
    template: "%s | AutonodeAI",
  },
  description:
    "AutonodeAI builds modern websites, Sitecore solutions, headless CMS platforms, WordPress builds, AI integrations, and technical SEO foundations for growth-focused brands.",
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
    canonical: "/",
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
    description:
      "Professional websites, Sitecore and headless CMS implementation, AI automation, and technical SEO for brands that want to compete online.",
    url: "https://autonodeai.com",
    siteName: "AutonodeAI",
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
    description:
      "Modern websites, Sitecore CMS, headless platforms, AI features, and technical SEO for growth-focused brands.",
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
  name: "AutonodeAI",
  url: "https://autonodeai.com",
  logo: "https://autonodeai.com/icon.png",
  image: "https://autonodeai.com/images/hero.jpg",
  email: "contact@autonodeai.com",
  description:
    "AutonodeAI builds modern websites, Sitecore and headless CMS solutions, AI-powered digital experiences, and technical SEO foundations.",
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "contact@autonodeai.com",
      areaServed: "Worldwide",
      availableLanguage: ["English"],
    },
  ],
  sameAs: [],
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
      </body>
    </html>
  );
}
