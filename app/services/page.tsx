import Image from "next/image";
import Link from "next/link";
import { cardImageSizes } from "@/lib/image-sizes";
import { sitePageMetadata } from "@/lib/site";

export const metadata = sitePageMetadata(
  "/services",
  "Sitecore, Headless CMS and AI Development Services",
  "Explore Sitecore XP and XM development, XM Cloud migrations, headless CMS and Next.js builds, and AI chatbot integrations from AutonodeAI.",
);

const services = [
  {
    title: "Sitecore XM Cloud Migration",
    text: "Inventory Sitecore XP or XM components and dependencies, prove the new publishing flow, and plan the cutover with redirects and SEO checks.",
    image: "/images/workspace.jpg",
    href: "/sitecore-xm-cloud-development",
  },
  {
    title: "Sitecore XP and XM Development",
    text: "Develop MVC, SXA, and JSS components or troubleshoot publishing, routing, and multilingual content on an existing Sitecore site.",
    image: "/images/devices.jpg",
    href: "/sitecore-development",
  },
  {
    title: "Headless CMS and Next.js Development",
    text: "Build a frontend around your editorial workflow and test preview, publishing, performance, and search visibility.",
    image: "/images/coding.jpg",
    href: "/headless-cms-development",
  },
  {
    title: "AI Chatbot Development",
    text: "Connect an assistant to approved site content and build a clear handoff for enquiries that need your team.",
    image: "/images/ai.jpg",
    href: "/ai-chatbot-development",
  },
  {
    title: "Website Redesign and WordPress",
    text: "Rebuild a business or marketing site so visitors can find the right service and your team can manage updates in WordPress.",
    image: "/images/hero.jpg",
    href: "/contact",
  },
  {
    title: "Technical SEO and Website Performance",
    text: "Check the pages search engines receive and repair issues with rendering, redirects, canonicals, and page speed.",
    image: "/images/coding.jpg",
    href: "/blog/headless-cms-seo-checklist",
  },
];

export default function ServicesPage() {
  return (
    <main className="section-pad">
      <div className="container">
        <h1 className="section-title mb-3">Sitecore, Headless CMS and AI Services</h1>
        <p className="section-copy mb-5">
          Work with AutonodeAI to plan a migration, improve an existing CMS, or
          build a new frontend and website assistant.
        </p>
        <div className="row g-4">
          {services.map((service) => (
            <div className="col-lg-4 col-md-6" key={service.href}>
              <article className="service-card-light h-100">
                <Image
                  src={service.image}
                  alt=""
                  width={900}
                  height={600}
                  sizes={cardImageSizes}
                  className="card-thumb-light"
                />
                <div className="p-4">
                  <h2 className="card-title-dark">
                    <Link className="text-link" href={service.href}>{service.title}</Link>
                  </h2>
                  <p className="card-copy-dark mb-0">{service.text}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
