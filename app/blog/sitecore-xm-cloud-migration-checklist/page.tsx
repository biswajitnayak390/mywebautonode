import Link from "next/link";
import BlogArticle, { articleMetadata } from "@/components/BlogArticle";

const article = {
  path: "/blog/sitecore-xm-cloud-migration-checklist",
  title: "Sitecore XP to XM Cloud Migration Checklist",
  description:
    "Plan a move from Sitecore XP or XM to XM Cloud. Inventory content, test a pilot on Experience Edge, and protect forms, redirects, and multilingual SEO.",
  published: "2026-11-14",
};

export const metadata = articleMetadata(article);

export default function MigrationChecklistPage() {
  return (
    <BlogArticle details={article}>
      <p className="lead">
        Before you estimate an XM Cloud migration, take one representative page from
        authoring to production. Include a shared component, a second language, and a
        working enquiry form. That pilot reveals work that a count of Sitecore items
        can miss. Sitecore now calls XM Cloud SitecoreAI.
      </p>

      <h2 className="h4 mt-4">1. Inventory what each site depends on</h2>
      <p>
        Record the Sitecore version, sites, languages, templates, page types, and MVC
        or headless renderings. For each page type, note who owns its content and
        what it connects to, especially search, forms, CRM, identity, and scheduled jobs.
        Give each dependency an owner and decide whether to migrate, rebuild, replace,
        or retire it.
      </p>

      <h2 className="h4 mt-4">2. Scope presentation and XP features separately</h2>
      <p>
        Check which content and media you can move and which components and designs
        need work in the target environment. Sitecore’s Pathway documentation lists
        page and partial designs and XP features such as xDB history and personalization
        among its exclusions. Keep a separate workstream for the XP capabilities the
        business still uses.
      </p>

      <h2 className="h4 mt-4">3. Prove the authoring and publishing workflow</h2>
      <p>
        Ask a content editor to create a localized version, preview it, and publish it.
        Verify that the expected route, language, content, and media appear through
        the published Experience Edge endpoint and in the production-style frontend.
        Check what happens after a second publish so you know how quickly cached pages refresh.
      </p>

      <h2 className="h4 mt-4">4. Preserve the pages that bring in visitors and enquiries</h2>
      <p>
        Export top pages from analytics and Search Console, then map each changed URL
        to the closest equivalent. Keep existing URLs where practical. Test permanent
        redirects, language alternates, canonical tags, and the sitemap against the
        final production host. Submit a marked test through each critical form and
        confirm receipt in its destination.
      </p>

      <h2 className="h4 mt-4">5. Agree on launch and rollback criteria</h2>
      <p>
        Name an owner for routing, publishing, analytics, and lead delivery. Before
        cutover, agree on the checks that must pass, the problems that justify a rollback,
        and the steps to return traffic to the previous site.
      </p>

      <div className="cta-banner mt-4">
        <h2 className="h4">Get a second opinion on your migration plan</h2>
        <p>Share your current Sitecore version, site count, and the decision you’re trying to make.</p>
        <Link href="/sitecore-migration-review" className="btn btn-brand-primary">
          Request a free migration review
        </Link>
      </div>

      <p className="small mt-4 mb-0">
        References{" "}
        <a href="https://doc.sitecore.com/sai/en/developers/sitecoreai/migrate-a-site-to-sitecoreai.html">
          Sitecore migration documentation
        </a>{" "}
        and{" "}
        <a href="https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes">
          Google’s site move guidance
        </a>.
      </p>
    </BlogArticle>
  );
}
