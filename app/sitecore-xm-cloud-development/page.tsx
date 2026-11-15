import Link from "next/link";
import ServicePage, { serviceMetadata } from "@/components/ServicePage";

const service = {
  path: "/sitecore-xm-cloud-development",
  title: "Sitecore XM Cloud Migration Services",
  description:
    "Plan your move from Sitecore XP or XM to XM Cloud (SitecoreAI). Get a content and component inventory, a Next.js pilot, and a launch plan that protects existing URLs.",
};

export const metadata = serviceMetadata(service);

export default function SitecoreMigrationService() {
  return (
    <ServicePage
      service={service}
      lead="Migrate from Sitecore XP or XM to XM Cloud, now part of SitecoreAI. AutonodeAI helps you decide what to carry over, prove a publishing workflow on a small set of pages, and plan the cutover around your current website."
      action={{ href: "/sitecore-migration-review", label: "Request a free migration review" }}
    >
      <section className="mb-5">
        <h2 className="h3 mb-3">What goes into the migration plan</h2>
        <ol className="section-copy ps-3 mb-0">
          <li className="mb-2"><strong>Inventory.</strong> Identify templates, renderings, media, language versions, forms, and custom integrations. Decide what can carry over and what needs a replacement.</li>
          <li className="mb-2"><strong>Publishing pilot.</strong> Rebuild a representative page in Next.js. Have a content editor create, preview, and publish a second language version, then verify that the live site receives the update from Experience Edge.</li>
          <li className="mb-2"><strong>Launch controls.</strong> Map changed URLs, preserve high-value landing pages, test form delivery, and agree who makes the go or no-go decision.</li>
          <li><strong>Handover.</strong> Record the steps to release a component, publish content, diagnose a missing page, and roll back the frontend if the cutover fails.</li>
        </ol>
      </section>
      <section className="mb-5">
        <h2 className="h3 mb-3">Decisions to make before estimating the work</h2>
        <p className="section-copy">
          A site with reusable content templates and a small set of renderings can
          start with one content type. A multilingual site with MVC renderings,
          custom forms, or Sitecore XP analytics needs a separate estimate for
          each dependency. Compare the cost of rebuilding a component with how
          often editors use it and what it contributes to the website.
        </p>
        <p className="section-copy mb-0">
          Bring your current Sitecore version, a few representative URLs, and
          the integrations that must keep working. Use the{" "}
          <Link href="/blog/sitecore-xm-cloud-migration-checklist">Sitecore migration checklist</Link>
          {" "}to prepare. AutonodeAI can also help with{" "}
          <Link href="/sitecore-development">changes to your existing Sitecore XP or XM site</Link>
          {" "}while you work through the migration.
        </p>
      </section>
      <section>
        <h2 className="h3 mb-3">Migration questions</h2>
        <h3 className="h5">Can I keep my existing URLs?</h3>
        <p className="section-copy">
          Many URLs can carry over if the new routing model supports the same
          paths and language structure. For changed paths, build and test a
          redirect map before moving the domain.
        </p>
        <h3 className="h5">Does content migration include XP analytics and personalization?</h3>
        <p className="section-copy mb-0">
          Scope those separately from pages and media. Inventory the reports,
          audiences, rules and integrations you still use, then decide which ones
          need a replacement before launch.
        </p>
      </section>
    </ServicePage>
  );
}
