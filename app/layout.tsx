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
  alternates: {
    canonical: "./",
  },
  manifest: "/site.webmanifest",
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
  description: SITE_DESCRIPTION,
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      url: SITE_URL + "/contact",
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
