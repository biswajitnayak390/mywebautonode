import Link from "next/link";
import BlogArticle, { articleMetadata } from "@/components/BlogArticle";

const article = {
  path: "/blog/sitecore-nextjs-published-page-404",
  title: "Why a Published Sitecore Page Returns 404 in Next.js",
  description:
    "Diagnose a Sitecore JSS 404 by checking the resolved site name, published route, language version, Experience Edge response, and Next.js caching.",
  published: "2026-11-15",
};

export const metadata = articleMetadata(article);

export default function SitecoreNextjs404Guide() {
  return (
    <BlogArticle details={article}>
      <p>
        When a page opens in the Sitecore editor and returns 404 in Next.js,
        take one failing URL and compare the route at each step. For example,
        with a request for <code>/en/products</code>, record the hostname,
        resolved Sitecore site name, requested language, and item path. Keep
        those inputs consistent when you compare preview and published delivery.
      </p>

      <h2 className="h4 mt-4">1. Confirm the site and language Next.js requests</h2>
      <p>
        Check the site name your frontend resolved for the hostname. On a JSS
        multisite setup, the production hostname, a Vercel preview hostname, and
        localhost can resolve different sites. Verify the site definition and
        the path that represents the home item. In particular, test the public
        homepage path <code>/</code> as well as a child page. Treat a route
        returned for <code>/home</code> as a separate result.
      </p>

      <h2 className="h4 mt-4">2. Check the route from the public delivery source</h2>
      <p>
        For a Sitecore XP or XM JSS site using REST Layout Service, compare the
        response from the authoring context with the response from the
        configured publishing target. For SitecoreAI or a headless site
        configured for Experience Edge, query the published route directly from
        the correct Edge tenant with the same site, path, and language.
        Check the route field inside the response even when the endpoint
        returns HTTP 200.
      </p>
      <div className="table-responsive my-4">
        <table className="table table-bordered align-middle mb-0">
          <caption className="visually-hidden">Where to look when Sitecore returns different route results</caption>
          <thead>
            <tr><th scope="col">What you see</th><th scope="col">What to check next</th></tr>
          </thead>
          <tbody>
            <tr><th scope="row">Published route is null</th><td>Check publish restrictions, the target, the language version, and whether the site definition and its home item resolve on the delivery side.</td></tr>
            <tr><th scope="row">Only one language is missing</th><td>Verify the published version in that language and the configured fallback. Compare the full public URL and the language requested by the frontend.</td></tr>
            <tr><th scope="row">Published data is correct, frontend returns 404</th><td>Compare the data fetched in the deployed app with the direct query. Check environment configuration, locale rewrites, route handling, and revalidation.</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="h4 mt-4">3. Verify the fix outside the editor</h2>
      <p>
        Open the public URL in a clean browser session, follow any redirects, and
        verify the final status, title, and canonical. Check a second URL using
        the same template and one in another language if available. If a fresh
        publish is part of the fix, verify that the published change appears on
        the site after its configured revalidation interval.
      </p>

      <div className="cta-banner mt-4">
        <h2 className="h4">Need help with a Sitecore publishing issue?</h2>
        <p>Share the Sitecore version, the affected URL, and what changes between preview and production.</p>
        <Link href="/sitecore-development" className="btn btn-brand-primary">Explore Sitecore development support</Link>
      </div>
      <p className="small mt-4 mb-0">
        Sitecore documentation covers{" "}
        <a href="https://doc.sitecore.com/xp/en/developers/hd/22/sitecore-headless-development/troubleshooting-the-next-js-multisite-add-on.html">JSS multisite troubleshooting</a>
        {" "}and{" "}
        <a href="https://doc.sitecore.com/sai/en/developers/sitecoreai/experience-edge.html">Experience Edge publishing and delivery</a>.
      </p>
    </BlogArticle>
  );
}
