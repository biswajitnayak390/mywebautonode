import Image from "next/image";
import Link from "next/link";
import { SITE_DESCRIPTION, sitePageMetadata } from "@/lib/site";
import { halfContainerImageSizes } from "@/lib/image-sizes";

export const metadata = sitePageMetadata(
  "/about",
  "About Our Web Engineering Practice",
  "Learn how AutonodeAI scopes Sitecore migrations, tests headless CMS publishing in Next.js, and prepares redirect and handover plans.",
);

export default function AboutPage() {
  return (
    <main className="section-pad">
      <div className="container">
        <div className="row g-5 align-items-center mb-5">
          <div className="col-lg-6">
            <h1 className="section-title mb-3">About AutonodeAI</h1>
            <p className="section-copy mb-4">{SITE_DESCRIPTION}</p>
            <h2 className="h4">What AutonodeAI helps with</h2>
            <ul className="section-copy ps-3 mb-4">
              <li><Link href="/sitecore-xm-cloud-development">Sitecore and XM Cloud migration planning</Link></li>
              <li><Link href="/headless-cms-development">Headless CMS and Next.js development</Link></li>
              <li><Link href="/ai-chatbot-development">Website chatbots and AI integrations</Link></li>
            </ul>
            <Link href="/contact" className="btn btn-brand-primary">Discuss your project</Link>
          </div>
          <div className="col-lg-6">
            <Image
              src="/images/devices.jpg"
              alt="Workstation and devices used to test websites"
              width={1200}
              height={900}
              sizes={halfContainerImageSizes}
              className="content-image"
            />
          </div>
        </div>

        <section className="col-lg-9 mb-5">
          <h2 className="h3 mb-3">What you get from a migration pilot</h2>
          <p className="section-copy">
            Start with a representative page, a publishing task an editor performs
            regularly, and an integration the new site needs to keep. The pilot
            helps you estimate the rest of the migration using work your team can
            inspect and repeat.
          </p>
          <ul className="section-copy ps-3 mb-0">
            <li className="mb-2"><strong>Page and URL inventory.</strong> Record each page’s template, language and destination. Use the inventory to plan which URLs stay, redirect or retire.</li>
            <li className="mb-2"><strong>Publishing test results.</strong> Compare what an editor previews with what visitors receive after publishing. Record the content version and any caching or language fallback issues to investigate.</li>
            <li><strong>Cutover and handover plan.</strong> List the checks to run before switching traffic, who owns each check, and what would trigger a rollback.</li>
          </ul>
        </section>

        <section className="col-lg-9">
          <h2 className="h3 mb-3">See how the checks work</h2>
          <p className="section-copy mb-0">
            The <Link href="/sitecore-migration-pilot">Sitecore migration pilot demo</Link>{" "}
            walks through sample responses for a legacy URL, a published update
            and a French page. Compare the responses before and after the fixes,
            then use the same checks when you prepare your own pilot.
          </p>
        </section>
      </div>
    </main>
  );
}
