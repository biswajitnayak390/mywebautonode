import Link from "next/link";
import BlogArticle, { articleMetadata } from "@/components/BlogArticle";

const article = {
  path: "/blog/sitecore-xm-cloud-migration-estimate",
  title: "How to Estimate a Sitecore XP to XM Cloud Migration",
  description:
    "Estimate a Sitecore XM Cloud migration by testing a pilot, counting reusable components, and scoping content, integrations, and launch validation separately.",
  published: "2026-11-15",
};

export const metadata = articleMetadata(article);

export default function SitecoreMigrationEstimatePage() {
  return (
    <BlogArticle details={article}>
      <p className="lead">
        To estimate a move from Sitecore XP to XM Cloud, now part of SitecoreAI,
        measure a small migration pilot first. Use it to estimate repeatable
        work, then budget separately for integrations, launch, and the Sitecore
        XP features the business intends to keep.
      </p>

      <h2 className="h4 mt-4">Count the work that needs separate estimates</h2>
      <div className="table-responsive my-3">
        <table className="table table-bordered align-middle mb-0">
          <caption className="visually-hidden">Work to include in a Sitecore migration estimate</caption>
          <thead>
            <tr>
              <th scope="col">Work</th>
              <th scope="col">What to count or verify</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Content</th>
              <td>Templates, shared content, media, language versions, and exceptions that need manual editing.</td>
            </tr>
            <tr>
              <th scope="row">Frontend</th>
              <td>Distinct MVC or SXA renderings, page layouts, and components that need rebuilding and editorial testing.</td>
            </tr>
            <tr>
              <th scope="row">Integrations</th>
              <td>Forms, CRM, search, and identity. Include test environments, approvals, and a way to verify delivery.</td>
            </tr>
            <tr>
              <th scope="row">XP capabilities</th>
              <td>Active personalization rules, reports, and journeys. Decide which need a replacement and who owns that decision.</td>
            </tr>
            <tr>
              <th scope="row">Launch</th>
              <td>URL mapping, redirects, language checks, analytics events, form tests, and a rollback rehearsal.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Sitecore’s Pathway documentation lists page and partial designs and
        several XP capabilities among the exclusions. Use the documentation for
        the tool you plan to run before counting an item as reusable.
      </p>

      <h2 className="h4 mt-4">Worked example for one multilingual site</h2>
      <p>
        Imagine an XP marketing site with 200 pages in English and French.
        Its pages use eight distinct renderings, two of which call external
        services. Six renderings follow similar content patterns. Use a
        representative page to test one reusable rendering and a separate test
        to prove the form and search integrations.
      </p>
      <p>
        On the pilot page, have an editor change the French content, preview it,
        and publish it. Confirm the correct locale and route through Experience
        Edge and on the public Next.js frontend. Record time spent on component
        development, authoring setup, and validation separately. Use those
        measurements to estimate the other renderings that share the same
        pattern.
      </p>
      <p>
        Estimate the two connected renderings individually. A form can render
        correctly while its CRM handoff fails. Include access to a test
        destination and confirmation that a test record arrives before
        estimating how much integration work remains.
      </p>

      <h2 className="h4 mt-4">Put decisions and dependencies in the estimate</h2>
      <p>
        List the deliverables, link each assumption to an owner, and identify
        which work can happen in parallel. Separate content cutover from
        engineering effort. Editorial sign-off, CRM approval, and domain changes
        can affect the launch date even after development is complete.
      </p>
      <p>
        Record which templates, locales, and integrations your estimate covers.
        Give unresolved items a discovery step and a date for revising the
        estimate. Check licensing with Sitecore using your intended product
        configuration.
      </p>

      <div className="cta-banner mt-4">
        <h2 className="h4">Turn the estimate into a migration plan</h2>
        <p>Compare your inventory and pilot against the launch checks before committing to a date.</p>
        <div className="d-flex flex-wrap gap-2">
          <Link href="/blog/sitecore-xm-cloud-migration-checklist" className="btn btn-brand-primary">
            Use the migration checklist
          </Link>
          <Link href="/sitecore-xm-cloud-development" className="btn btn-brand-outline">
            Explore Sitecore migration services
          </Link>
        </div>
      </div>
      <p className="small mt-4 mb-0">
        Sitecore documents the supported migration paths and tool exclusions.{" "}
        <a href="https://doc.sitecore.com/sai/en/developers/sitecoreai/migrate-a-site-to-sitecoreai.html">
          SitecoreAI migration documentation
        </a>
      </p>
    </BlogArticle>
  );
}
