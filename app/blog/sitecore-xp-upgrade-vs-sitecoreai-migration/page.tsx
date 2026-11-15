import Link from "next/link";
import BlogArticle, { articleMetadata } from "@/components/BlogArticle";

const article = {
  path: "/blog/sitecore-xp-upgrade-vs-sitecoreai-migration",
  title: "Sitecore XP Upgrade vs. SitecoreAI Migration",
  description:
    "Decide whether to upgrade Sitecore XP, run a SitecoreAI (XM Cloud) pilot, or plan a phased migration. Compare dependencies, timelines, and acceptance criteria.",
  published: "2026-11-15",
};

export const metadata = articleMetadata(article);

export default function SitecoreUpgradeOrMigrationPage() {
  return (
    <BlogArticle details={article}>
      <p className="lead">
        Upgrade Sitecore XP when your immediate goal is to stay on a supported
        release and keep workflows that depend on your current platform. Pilot
        SitecoreAI when you have an editorial or delivery goal you can test on a
        representative section. Sitecore says existing XM Cloud customers can
        transition to SitecoreAI on their current platform.
      </p>

      <h2 className="h4 mt-4">Compare three ways forward</h2>
      <div className="table-responsive mb-4">
        <table className="table table-bordered mb-0">
          <caption className="visually-hidden">Sitecore upgrade and migration decision criteria</caption>
          <thead className="table-light">
            <tr>
              <th scope="col">Option</th>
              <th scope="col">When it fits</th>
              <th scope="col">Evidence to collect first</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Upgrade Sitecore XP</th>
              <td>A support deadline is approaching, or an important workflow depends on XP personalization, xDB, or custom MVC code.</td>
              <td>Check the support dates for your version, the documented upgrade path, module compatibility, and a rehearsal on a restored copy.</td>
            </tr>
            <tr>
              <th scope="row">Pilot SitecoreAI</th>
              <td>You have a measurable publishing goal and a section with representative templates and integrations.</td>
              <td>Ask an editor to preview and publish a page. Verify that Experience Edge and the public frontend show the approved version and that a test enquiry arrives.</td>
            </tr>
            <tr>
              <th scope="row">Migrate in phases</th>
              <td>The pilot meets its acceptance criteria and you can move a site or section with a clear owner.</td>
              <td>Agree on URL mapping, forms and analytics checks, a content freeze window, and how to restore the previous frontend if cutover fails.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="h4 mt-4">Inventory custom code, forms, and personalization</h2>
      <p>
        For each important page, list its templates, presentation, languages,
        media, forms, and integrations. Record which team owns each dependency,
        what breaks if it disappears, and whether you will migrate, rebuild, or
        retire it. Include custom code that runs during a request and publishing
        steps that only one person knows how to complete.
      </p>
      <p>
        Sitecore’s Pathway app can assist with mapping and moving structured
        content. Its documented exclusions include page and partial designs,
        xDB data, and XP personalization. Confirm which items your chosen
        tooling can handle, and give each remaining dependency its own estimate
        and acceptance test.
      </p>

      <h2 className="h4 mt-4">Use one page to make the decision concrete</h2>
      <p>
        Consider a product site with two languages, a custom dealer search, and
        an XP personalization rule on the product page. If the support deadline
        arrives before the dealer integration can be rebuilt, schedule an XP
        upgrade rehearsal and use a separate pilot to test the replacement.
        If the dealer search already runs as a separate service and the
        personalization rule can be retired with the business owner’s approval,
        the product section is a candidate for the first migration phase.
      </p>
      <p>Use the same acceptance checks when comparing the two approaches:</p>
      <ul className="ps-3">
        <li className="mb-2">An editor can preview and publish an update in both languages, and each public URL displays the approved content.</li>
        <li className="mb-2">A visitor can select a dealer and send an enquiry. The receiving team's tracker records it once with the expected source.</li>
        <li className="mb-2">Existing search landing pages keep their URL or redirect in one hop to the matching new page.</li>
        <li>The release owner can restore the previous public site using a rehearsed rollback procedure.</li>
      </ul>
      <p>
        Record who can verify each check. Use the{" "}
        <Link href="/blog/sitecore-xm-cloud-migration-estimate">migration estimation guide</Link>{" "}
        to size work after the pilot, and the{" "}
        <Link href="/blog/sitecore-xm-cloud-migration-checklist">migration checklist</Link>{" "}
        to plan publishing, redirects, and launch.
      </p>

      <div className="cta-banner mt-4">
        <h2 className="h4">Review your Sitecore options</h2>
        <p>Bring your Sitecore version, one important URL, and an integration that needs to keep working.</p>
        <div className="d-flex flex-wrap gap-2">
          <Link href="/sitecore-migration-review" className="btn btn-brand-primary">
            Request a free migration review
          </Link>
          <Link href="/sitecore-xm-cloud-development" className="btn btn-brand-outline">
            Explore migration services
          </Link>
        </div>
      </div>
      <ul className="small ps-3 mt-4 mb-0" aria-label="References">
        <li><a href="https://support.sitecore.com/kb?id=kb_article_view&amp;sysparm_article=KB0641167">Sitecore product support lifecycle</a></li>
        <li><a href="https://doc.sitecore.com/xp/en/developers/105/guides/upgrade-guide-for-sitecore-experience-platform-1050/introduction.html">Sitecore XP 10.5 upgrade guide</a></li>
        <li><a href="https://developers.sitecore.com/sitecoreai/faq">SitecoreAI transition FAQ</a></li>
        <li><a href="https://doc.sitecore.com/sai/en/developers/sitecoreai/migrate-a-site-to-sitecoreai.html">SitecoreAI Pathway migration scope</a></li>
      </ul>
    </BlogArticle>
  );
}
