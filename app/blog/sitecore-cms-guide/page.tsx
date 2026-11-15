import Link from "next/link";
import BlogArticle, { articleMetadata } from "@/components/BlogArticle";

const article = {
  path: "/blog/sitecore-cms-guide",
  title: "What Is Sitecore CMS? XP, XM, and XM Cloud Explained",
  description:
    "Compare Sitecore XP, XM, and XM Cloud (SitecoreAI). See how content authoring and headless delivery work and what changes during a migration.",
  published: "2026-07-15",
  updated: "2026-11-15",
};

export const metadata = articleMetadata(article);

export default function SitecoreCmsGuidePage() {
  return (
    <BlogArticle details={article}>
      <p className="lead">
        Sitecore gives editors a place to model, translate, preview, and publish
        content for one or more websites. If your team is evaluating a migration,
        first identify which Sitecore product serves the site and which business
        functions depend on it.
      </p>

      <h2 className="h4 mt-4">Compare Sitecore XP, XM, and XM Cloud</h2>
      <div className="table-responsive mb-4">
        <table className="table table-bordered mb-0">
          <caption className="visually-hidden">Sitecore product comparison</caption>
          <thead className="table-light">
            <tr>
              <th scope="col">Product</th>
              <th scope="col">What it covers</th>
              <th scope="col">What to check before a move</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Sitecore XP</th>
              <td>Content management with experience data, analytics, and personalization.</td>
              <td>Which campaigns, profiles, and xDB reports are still in use?</td>
            </tr>
            <tr>
              <th scope="row">Sitecore XM</th>
              <td>Content modeling, editing, and delivery for sites and languages.</td>
              <td>Which templates, renderings, and integrations need to move?</td>
            </tr>
            <tr>
              <th scope="row">XM Cloud</th>
              <td>The SaaS content and page authoring foundation of SitecoreAI.</td>
              <td>Who owns the headless frontend and how will editors preview and publish?</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="h4 mt-4">How editing and headless delivery fit together</h2>
      <p>
        Editors create content from templates and assemble pages with reusable
        components. In a headless setup, the frontend can fetch published item and
        layout data from Sitecore Experience Edge, then render the page in Next.js.
        Editorial preview and the published site use separate delivery paths. Test
        both when a page looks correct in the editor but is missing from the live site. Use this{" "}
        <Link href="/blog/sitecore-nextjs-published-page-404">Sitecore and Next.js 404 troubleshooting guide</Link>
        {" "}to narrow down the cause.
      </p>

      <h2 className="h4 mt-4">When does Sitecore make sense?</h2>
      <p>
        Sitecore is worth evaluating when multiple brands or regions need a shared
        content model, separate publishing permissions, and consistent components.
        For one small site, compare the cost and support effort against a simpler
        CMS. Start with a real workflow, such as publishing a localized product page,
        and see which platform your editors can operate confidently.
      </p>

      <h2 className="h4 mt-4">Where to start with an upgrade or migration</h2>
      <p>
        Use the{" "}
        <Link href="/blog/sitecore-xp-upgrade-vs-sitecoreai-migration">
          XP upgrade and SitecoreAI migration comparison
        </Link>{" "}
        to choose a first step. If you decide to move, pick one site and list the
        components, translations, redirects, forms, and integrations it depends on.
        Use the{" "}
        <Link href="/blog/sitecore-xm-cloud-migration-checklist">
          Sitecore XP to XM Cloud migration checklist
        </Link>{" "}
        to turn that inventory into a publishing pilot and a launch plan.
      </p>

      <div className="cta-banner mt-4">
        <h2 className="h4">Review your Sitecore options</h2>
        <p>Share your Sitecore version and what you want to change.</p>
        <div className="d-flex flex-wrap gap-2">
          <Link href="/sitecore-migration-review" className="btn btn-brand-primary">
            Request a free migration review
          </Link>
          <Link href="/sitecore-development" className="btn btn-brand-outline">
            Explore Sitecore development services
          </Link>
        </div>
      </div>
      <p className="small mt-4 mb-0">
        References{" "}
        <a href="https://doc.sitecore.com/sai/en/developers/sitecoreai/experience-edge.html">
          Sitecore Experience Edge documentation
        </a>{" "}
        and{" "}
        <a href="https://developers.sitecore.com/sitecoreai/faq">
          SitecoreAI transition FAQ
        </a>.
      </p>
    </BlogArticle>
  );
}
