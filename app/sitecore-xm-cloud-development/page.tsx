import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sitecore XM Cloud Development",
  description:
    "AutonodeAI builds modern composable digital experience platforms using Sitecore XM Cloud and headless architecture.",
};

export default function Page() {
  return (
    <main className="section-pad page-top-space">
      <div className="container">
        <h1 className="section-title mb-4">Sitecore XM Cloud Development</h1>

        <p>
          Sitecore XM Cloud is a modern SaaS-based digital experience platform
          designed for composable architecture and cloud-native scalability.
          Businesses are rapidly adopting XM Cloud to build faster websites,
          deliver personalized content, and manage digital experiences across
          multiple channels.
        </p>

        <h2>Composable Digital Experience Platforms</h2>

        <p>
          XM Cloud allows organizations to adopt a composable architecture,
          integrating best-of-breed technologies such as React, Next.js, and
          headless APIs. This approach enables businesses to innovate faster and
          create highly flexible digital platforms.
        </p>

        <ul>
          <li>Headless Sitecore architecture</li>
          <li>Next.js front-end development</li>
          <li>Content-driven digital platforms</li>
          <li>Cloud-native scalability</li>
        </ul>

        <h2>Benefits of XM Cloud</h2>

        <p>
          With its SaaS model, XM Cloud eliminates infrastructure management
          while enabling continuous updates and modern development workflows.
          Businesses benefit from improved performance, faster development
          cycles, and scalable digital experiences.
        </p>
      </div>
      <p>
        Organizations looking to adopt composable architecture and modern
        digital platforms are increasingly moving to Sitecore XM Cloud.
      </p>

      <p>
        At{" "}
        <a
          href="https://autonodeai.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          AutonodeAI
        </a>
        , we specialize in implementing modern headless architectures using
        Sitecore XM Cloud, React, and Next.js to build scalable digital
        experience platforms.
      </p>

      <p>
        Visit <strong>AutonodeAI.com</strong> to explore our enterprise
        development services and digital experience solutions.
      </p>
    </main>
  );
}
