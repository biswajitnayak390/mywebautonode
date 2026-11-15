import Image from "next/image";
import Link from "next/link";
import { SITE_DESCRIPTION, sitePageMetadata } from "@/lib/site";
import { halfContainerImageSizes } from "@/lib/image-sizes";

export const metadata = sitePageMetadata("/about", "About", SITE_DESCRIPTION);

export default function AboutPage() {
  return (
    <main className="section-pad">
      <div className="container">
        <div className="row g-5 align-items-center">
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
      </div>
    </main>
  );
}
