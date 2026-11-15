import Link from "next/link";
import { sitePageMetadata } from "@/lib/site";

export const metadata = sitePageMetadata(
  "/technologies",
  "Sitecore, Next.js and Headless CMS Platforms",
  "Compare the platforms AutonodeAI works with for content modelling, publishing, .NET integrations, and headless Next.js development.",
);

const tech = [
  ['Sitecore', 'Enterprise CMS, DXP implementation, component engineering, and modern front-end integration.'],
  ['WordPress', 'Flexible business and marketing websites with improved structure, design, and SEO.'],
  ['Contentful', 'Composable content architecture for fast and scalable digital experiences.'],
  ['Strapi', 'Open headless CMS setup for custom content-driven platforms.'],
  ['Next.js & React', 'Modern front-end development for speed, UX, and search visibility.'],
  ['.NET', 'Backend services, integrations, APIs, and enterprise-grade engineering.'],
  ['Bootstrap Dashboard UI', 'Reliable responsive grid and component structure with modern custom styling.'],
  ['AI Integrations', 'Lead capture automation, assistants, and intelligent customer interactions.']
];

export default function TechnologiesPage() {
  return (
    <main className="section-pad">
      <div className="container">
        <h1 className="section-title mb-3">Sitecore, Next.js and Headless CMS Platforms</h1>
        <p className="section-copy mb-5">Explore the tools we use to model content, build frontends, and connect enterprise integrations.</p>
        <div className="row g-4">
          {tech.map(([name, desc]) => (
            <div className="col-md-6" key={name}>
              <div className="platform-card h-100">
                <strong>{name}</strong>
                <span>{desc}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="section-copy mt-4 mb-0">
          See how we use these platforms in our{" "}
          <Link href="/headless-cms-development">headless CMS development services</Link>.
        </p>
      </div>
    </main>
  );
}
