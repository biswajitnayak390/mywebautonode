import Link from "next/link";
import { sitePageMetadata } from "@/lib/site";
import { evaluatePilot, samples } from "./checks";

export const metadata = sitePageMetadata(
  "/sitecore-migration-pilot",
  "Sitecore Migration Pilot Demo",
  "Compare sample Sitecore migration results before and after fixes to redirects, published content, language URLs, and retired pages.",
);

export default function SitecoreMigrationPilotPage() {
  return (
    <main className="section-pad">
      <article className="container" style={{ maxWidth: 850 }}>
        <header className="mb-4">
          <Link href="/sitecore-xm-cloud-development" className="text-link d-inline-block mb-3">
            Sitecore migration services
          </Link>
          <h1 className="section-title mb-3">Sitecore migration pilot demo</h1>
          <p className="section-copy mb-0">
            A representative migration page can load successfully while it serves an old
            content version or points search engines to the wrong language. Compare
            two sets of simulated responses for a Next.js site that receives content
            from Sitecore Experience Edge.
          </p>
        </header>

        <section className="mb-5" aria-labelledby="pilot-results">
          <h2 id="pilot-results" className="h3 mb-3">Compare the pilot results</h2>
          {samples.map(({ label, responses }, index) => {
            const results = evaluatePilot(responses);
            const passedCount = results.filter(({ passed }) => passed).length;
            return (
              <details className="border rounded-3 p-3 p-md-4 mb-3" key={label} open={index === 0}>
                <summary className="fw-semibold" style={{ cursor: "pointer" }}>
                  {label} <span className="fw-normal text-body-secondary">· {passedCount} of {results.length} checks passed</span>
                </summary>
                <ul className="list-group list-group-flush mt-3">
                  {results.map(({ title, expected, observed, passed }) => (
                    <li className="list-group-item px-0 py-3" key={title}>
                      <div className="d-flex flex-wrap align-items-baseline gap-2 mb-2">
                        <h3 className="h6 mb-0">{title}</h3>
                        <span className={passed ? "badge text-bg-success" : "badge text-bg-danger"}>
                          {passed ? "Pass" : "Needs work"}
                        </span>
                      </div>
                      <dl className="row small text-break mb-0">
                        <dt className="col-sm-2">Expected</dt>
                        <dd className="col-sm-10 mb-1">{expected}</dd>
                        <dt className="col-sm-2">Observed</dt>
                        <dd className="col-sm-10 mb-0">{observed}</dd>
                      </dl>
                    </li>
                  ))}
                </ul>
              </details>
            );
          })}
        </section>

        <section className="mb-4">
          <h2 className="h3 mb-3">Run the same checks on your pilot</h2>
          <ol className="section-copy ps-3">
            <li className="mb-2">Choose one template, one legacy URL with a replacement, one translated page, and one retired URL.</li>
            <li className="mb-2">Publish a visible change. Record the content version delivered by Experience Edge and the result on your public Next.js page with preview off. If the public page is stale, check cache revalidation before you republish.</li>
            <li className="mb-2">Record each redirect response and its destination. View the raw HTML on both language URLs and compare the canonical, indexing directive, and hreflang links to your URL map.</li>
            <li>Repeat after the fixes. Keep the observed responses with the migration checklist so the release owner can verify the same URLs before cutover.</li>
          </ol>
          <p className="section-copy">
            Use the{" "}
            <Link href="/blog/sitecore-xm-cloud-migration-checklist">Sitecore migration checklist</Link>{" "}
            to include integrations, content inventory and editorial acceptance in the rest of the pilot.
          </p>
          <Link href="/sitecore-migration-review" className="btn btn-brand-primary">Request a migration review</Link>
        </section>
      </article>
    </main>
  );
}
