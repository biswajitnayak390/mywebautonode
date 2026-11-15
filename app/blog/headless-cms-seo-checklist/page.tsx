import Link from "next/link";
import BlogArticle, { articleMetadata } from "@/components/BlogArticle";

const article = {
  path: "/blog/headless-cms-seo-checklist",
  title: "Headless CMS SEO Checklist for Next.js",
  description:
    "Test a Next.js headless CMS migration with a worked URL map, expected response codes, canonical and language checks, and a publishing rehearsal.",
  published: "2026-11-14",
  updated: "2026-11-15",
};

export const metadata = articleMetadata(article);

export default function HeadlessSeoChecklistPage() {
  return (
    <BlogArticle details={article}>
      <p className="lead">
        A successful CMS publish proves that the content is available. During launch
        testing, open the public Next.js URL and check what the browser and search
        engines receive. Use a page from every major template and language.
      </p>

      <h2 className="h4 mt-4">Check the public HTML and response status</h2>
      <p>
        For each template, confirm the live URL returns 200 and contains a specific
        title, heading, main content, and meaningful links. Check the rendered page
        in Google’s URL Inspection. Request a missing URL too, so you know the site
        returns a genuine 404 instead of serving an error message with a 200 response.
      </p>

      <h2 className="h4 mt-4">Use one preferred URL for each indexable page</h2>
      <p>
        Confirm that internal links, the canonical tag, and the sitemap use the same
        HTTPS hostname and path. Check a URL with a campaign tag to see whether its
        canonical still points to the clean URL. If an old path changed, redirect
        it to the equivalent page in one hop.
      </p>

      <h2 className="h4 mt-4">Build a URL test matrix before cutover</h2>
      <p>
        Export the old sitemap, top organic landing pages, and URLs with important
        inbound links. Record each old URL, its preferred destination, its
        expected status, and the person who will verify it. This example maps a
        product section whose English and German pages use different paths.
      </p>
      <div className="table-responsive mb-4">
        <table className="table table-bordered mb-0">
          <caption className="visually-hidden">Example headless CMS migration URL checks</caption>
          <thead className="table-light">
            <tr>
              <th scope="col">URL to test</th>
              <th scope="col">Expected response</th>
              <th scope="col">What to verify</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"><code>/products/model-a</code></th>
              <td>301 or 308</td>
              <td>One redirect to <code>/en/products/model-a</code>. The destination returns 200.</td>
            </tr>
            <tr>
              <th scope="row"><code>/en/products/model-a?utm_source=demo</code></th>
              <td>200</td>
              <td>The canonical points to <code>/en/products/model-a</code> on the public hostname.</td>
            </tr>
            <tr>
              <th scope="row"><code>/de/produkte/modell-a</code></th>
              <td>200</td>
              <td>The page shows German content, uses its own canonical, and links to the English alternate.</td>
            </tr>
            <tr>
              <th scope="row"><code>/products/discontinued-model</code></th>
              <td>404 or 410 if retired without a replacement</td>
              <td>The old URL is absent from the XML sitemap and primary navigation.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="h4 mt-4">Verify each language from the live hostname</h2>
      <p>
        Open both sides of each language pair. Check that the translated content is
        published, both URLs return 200, each page points to its own canonical
        version, and their hreflang links point back to each other. Brand and product
        pages with language fallbacks deserve a separate test case.
      </p>

      <h2 className="h4 mt-4">Test a publish after the initial build</h2>
      <p>
        Change a heading on a test page, publish it, and check when the new copy
        appears on the public site. If the frontend uses revalidation or a CDN,
        include the old and new versions in your checks. Revisit metadata and
        canonical tags after regeneration to catch mismatches.
      </p>

      <h2 className="h4 mt-4">Check mobile performance and conversion</h2>
      <p>
        Start with the homepage and the highest-traffic service page. Use PageSpeed
        Insights for a lab check and review mobile field data when it is available.
        Submit a marked test enquiry and confirm it reaches its intended
        destination once. Record metrics and screenshots from the current site so
        you can compare affected templates and priority landing pages after launch.
      </p>

      <h2 className="h4 mt-4">Repeat the checks on the public domain</h2>
      <p>
        After switching traffic, choose one retained URL, one redirected URL, and
        one localised URL from the matrix. Check what the public hostname serves.
        Inspect the preferred URLs in Search Console and check the sitemap
        contains the new canonical URLs. Track redirect errors and indexed pages
        alongside clicks and impressions for the URLs that changed.
      </p>

      <p className="mt-4">
        If you’re moving from Sitecore XP or XM, use the{" "}
        <Link href="/blog/sitecore-xm-cloud-migration-checklist">
          Sitecore XM Cloud migration checklist
        </Link>{" "}
        to plan the publishing and redirect work.
      </p>
      <p>
        Need help with content models, preview, or cutover? See{" "}
        <Link href="/headless-cms-development">headless CMS and Next.js development services</Link>.
      </p>
      <p className="small mb-0">
        References{" "}
        <a href="https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes">
          Google’s site migration guidance
        </a>{" "}
        and{" "}
        <a href="https://web.dev/articles/vitals">Core Web Vitals</a>.
      </p>
    </BlogArticle>
  );
}
