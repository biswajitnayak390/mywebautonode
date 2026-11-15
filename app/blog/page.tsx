import { sitePageMetadata } from "@/lib/site";
import Link from "next/link";

export const metadata = sitePageMetadata(
  "/blog",
  "Sitecore and Headless CMS Guides",
  "Compare Sitecore XP upgrades and SitecoreAI migrations, troubleshoot Next.js 404s, and test headless CMS websites before launch.",
);

const articles = [
  {
    href: "/blog/sitecore-xp-upgrade-vs-sitecoreai-migration",
    title: "Sitecore XP Upgrade vs. SitecoreAI Migration",
    description: "Compare an XP upgrade, a SitecoreAI pilot, and a phased move. Use a representative page to test the choice.",
  },
  {
    href: "/blog/sitecore-xm-cloud-migration-estimate",
    title: "How to Estimate a Sitecore XP to XM Cloud Migration",
    description: "Use a pilot, reusable components, and integration checks to build a migration estimate.",
  },
  {
    href: "/blog/sitecore-nextjs-published-page-404",
    title: "Why a Published Sitecore Page Returns 404 in Next.js",
    description: "Find the cause by tracing the site name, language, published route, and frontend response.",
  },
  {
    href: "/blog/sitecore-xm-cloud-migration-checklist",
    title: "Sitecore XP to XM Cloud Migration Checklist",
    description: "Scope the move, test a publishing pilot, and protect redirects and enquiries.",
  },
  {
    href: "/blog/headless-cms-seo-checklist",
    title: "Headless CMS SEO Checklist for Next.js",
    description: "Use a worked URL map to check redirects, canonicals, multilingual pages, and publishing before launch.",
  },
  {
    href: "/blog/sitecore-cms-guide",
    title: "What Is Sitecore CMS? XP, XM, and XM Cloud Explained",
    description: "Compare the products and see how editorial and delivery workflows differ.",
  },
  {
    href: "/ai-chatbot-websites",
    title: "How to Use a Website Chatbot to Capture Qualified Leads",
    description: "Choose the questions, define the handoff, and measure the leads your team can use.",
  },
  {
    href: "/ai-modern-web-development",
    title: "Where AI Fits in Next.js and Headless CMS Websites",
    description: "Choose a first AI feature and test the answers and enquiries it produces.",
  },
];

export default function BlogPage() {
  return (
    <main className="section-pad">
      <div className="container">
        <h1 className="section-title mb-4">Sitecore, Headless CMS, and Website Lead Guides</h1>
        <ul className="list-unstyled row g-4">
          {articles.map((article) => (
            <li className="col-md-6" key={article.href}>
              <article className="service-card-light p-4 h-100">
                <h2 className="h5">
                  <Link className="text-link" href={article.href}>{article.title}</Link>
                </h2>
                <p className="section-copy mb-0">{article.description}</p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
