import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";

const title = "Free Sitecore Migration Review";
const description =
  "Planning a move from Sitecore XP or XM to XM Cloud? Get an initial review of your migration options, risks, and next steps.";

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
            <h1 className="section-title mb-3">Planning a move to Sitecore XM Cloud?</h1>
            <p className="section-copy mb-4">
              Share your current Sitecore setup and the decision you’re facing.
              We’ll help you identify what to check before you scope the migration.
            </p>
            <h2 className="h5 mb-3">What we’ll cover</h2>
            <ul className="section-copy ps-3 mb-4">
              <li>Whether a phased move from Sitecore XP or XM makes sense.</li>
              <li>What to check in your templates, integrations, and publishing workflow.</li>
              <li>Which redirects and language URLs to plan for before launch.</li>
            </ul>
            <p className="mb-0">
              For website owners and agency teams planning a Sitecore migration.
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
