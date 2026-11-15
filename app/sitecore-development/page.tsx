import Link from "next/link";
import ServicePage, { serviceMetadata } from "@/components/ServicePage";

const service = {
  path: "/sitecore-development",
  title: "Sitecore XP and XM Development Services",
  description:
    "Get Sitecore XP and XM development support for MVC, SXA, JSS, and Next.js. Diagnose publishing and routing issues, build components, and improve multilingual sites.",
};

export const metadata = serviceMetadata(service);

export default function SitecoreDevelopmentPage() {
  return (
    <ServicePage
      service={service}
      lead="Get engineering support for an existing Sitecore website. AutonodeAI works across MVC, SXA, and headless Sitecore to build components, fix publishing and routing issues, and help editors manage multilingual content."
      action={{ href: "/contact", label: "Discuss your Sitecore project" }}
    >
      <section className="mb-5">
        <h2 className="h3 mb-3">Where we can help</h2>
        <div className="row g-3">
          <div className="col-md-6">
            <div className="service-card-light p-4 h-100">
              <h3 className="h5">Components and templates</h3>
              <p className="section-copy mb-0">Build or update MVC and SXA renderings, data source templates, and editing workflows. Verify the result in the editor and on the live site.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="service-card-light p-4 h-100">
              <h3 className="h5">Publishing and headless routing</h3>
              <p className="section-copy mb-0">Trace a missing page from the site definition and language version to its published route data and the Next.js response.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="service-card-light p-4 h-100">
              <h3 className="h5">Multilingual and multisite delivery</h3>
              <p className="section-copy mb-0">Review how hostnames, language versions, fallback and navigation work together. Test the same content on the correct site and domain.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="service-card-light p-4 h-100">
              <h3 className="h5">Frontend modernization</h3>
              <p className="section-copy mb-0">Choose a candidate for headless delivery, such as a section with repeatable templates, and validate its authoring workflow, performance, and URLs in a pilot.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-5">
        <h2 className="h3 mb-3">What to include in your enquiry</h2>
        <p className="section-copy mb-0">
          Share your Sitecore version, the frontend stack, and one page or
          component that shows what you want to improve. For a publishing issue,
          describe what the editor sees, what the live site shows, and which
          language is affected. That gives us a place to start without sharing
          production credentials or a database export.
        </p>
      </section>
      <section>
        <h2 className="h3 mb-3">Sitecore resources</h2>
        <ul className="section-copy ps-3 mb-0">
          <li><Link href="/blog/sitecore-nextjs-published-page-404">Diagnose a published Sitecore page returning 404 in Next.js</Link></li>
          <li><Link href="/blog/sitecore-cms-guide">Compare Sitecore XP, XM, and XM Cloud</Link></li>
          <li><Link href="/sitecore-xm-cloud-development">Plan a Sitecore XM Cloud migration</Link></li>
        </ul>
      </section>
    </ServicePage>
  );
}
