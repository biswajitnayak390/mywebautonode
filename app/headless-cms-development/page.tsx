import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Headless CMS Development Services",
  description:
    "AutonodeAI builds scalable headless CMS solutions using Contentful, Strapi, and modern frameworks like Next.js and React.",
};

export default function Page() {
  return (
    <main className="section-pad page-top-space">
      <div className="container">
        <h1 className="section-title mb-4">
          Headless CMS Development Services
        </h1>

        <p className="section-copy">
          Headless CMS architecture separates the content backend from the
          frontend experience, allowing businesses to build faster and more
          scalable digital platforms.
        </p>

        <h2>Platforms We Work With</h2>

        <ul>
          <li>Contentful</li>
          <li>Strapi</li>
          <li>WordPress Headless</li>
          <li>Sitecore Headless</li>
        </ul>

        <h2>Benefits of Headless CMS</h2>

        <ul>
          <li>Faster website performance</li>
          <li>Omnichannel content delivery</li>
          <li>Modern frontend frameworks</li>
          <li>Scalable architecture</li>
        </ul>
      </div>
    </main>
  );
}
