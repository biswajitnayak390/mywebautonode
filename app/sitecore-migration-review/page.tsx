import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";

const title = "Free Sitecore Migration Readiness Review";
const description =
  "Considering a Sitecore XP upgrade or a move to SitecoreAI (XM Cloud)? Get an initial review of your publishing, integration, and URL migration risks.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/sitecore-migration-review" },
  openGraph: {
    title,
    description,
    url: "/sitecore-migration-review",
    type: "website",
  },
  twitter: { card: "summary", title, description },
};

export default function SitecoreMigrationReviewPage() {
  return (
    <main className="section-pad section-soft">
      <div className="container">
        <div className="row g-5 align-items-start">
          <div className="col-lg-6">
            <span className="eyebrow mb-3">Free initial review</span>
            <h1 className="section-title mb-3">Sitecore migration readiness review</h1>
            <p className="section-copy mb-4">
              Share your Sitecore version, one representative website URL, and a
              workflow or integration you need to keep. We’ll help you identify
              what to check before you upgrade XP or move to SitecoreAI (XM Cloud).
            </p>
            <h2 className="h5 mb-3">What we’ll cover</h2>
            <ul className="section-copy ps-3 mb-4">
              <li>Whether a phased move from Sitecore XP or XM makes sense.</li>
              <li>What to check in your templates, integrations, and publishing workflow.</li>
              <li>Which redirects and language URLs to plan for before launch.</li>
            </ul>
            <p className="mb-0">
              Compare the{" "}
              <Link href="/blog/sitecore-xp-upgrade-vs-sitecoreai-migration">
                XP upgrade and SitecoreAI migration options
              </Link>{" "}
              before the review. Use the{" "}
              <Link href="/blog/sitecore-xm-cloud-migration-checklist">migration checklist</Link>{" "}
              when you’re ready to inventory the site.
            </p>
          </div>
          <section className="col-lg-6" aria-labelledby="review-request-title">
            <div className="cta-banner">
              <h2 id="review-request-title" className="h4 mb-2">Request your review</h2>
              <p className="text-muted mb-4">A short summary of your project is enough to get started.</p>
              <LeadForm source="sitecore-migration-review" />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
