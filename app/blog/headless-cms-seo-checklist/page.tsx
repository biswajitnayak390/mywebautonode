import Link from "next/link";
import BlogArticle, { articleMetadata } from "@/components/BlogArticle";

const article = {
  path: "/blog/headless-cms-seo-checklist",
  title: "Headless CMS SEO Checklist for Next.js",
  description:
    "Verify rendered content, canonical tags, redirects, multilingual URLs, sitemaps, and mobile performance before launching a headless CMS site.",
  published: "2026-11-14",
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
        destination. Repeat these checks after launch alongside your Search Console review.
      </p>

      <p className="mt-4">
        If you’re moving from Sitecore XP or XM, use the{" "}
        <Link href="/blog/sitecore-xm-cloud-migration-checklist">
          Sitecore XM Cloud migration checklist
        </Link>{" "}
        to plan the publishing and redirect work.
      </p>
      <p className="small mb-0">
        References{" "}
        <a href="https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls">
          Google’s canonical URL guidance
        </a>{" "}
        and{" "}
        <a href="https://web.dev/articles/vitals">Core Web Vitals</a>.
      </p>
    </BlogArticle>
  );
}
