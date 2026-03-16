import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sitecore Development Services | Enterprise CMS Experts",
  description:
    "AutonodeAI provides Sitecore development services including implementation, headless architecture, migration, and enterprise digital experience platforms.",
};

export default function Page() {
  return (
    <main className="section-pad page-top-space">
      <div className="container">
        <h1 className="section-title mb-4">Sitecore Development Services</h1>

        <p className="section-copy">
          AutonodeAI helps enterprises design and build powerful digital
          experience platforms using Sitecore CMS and headless architecture.
        </p>

        <h2>Our Sitecore Services</h2>

        <ul>
          <li>Sitecore XM Cloud implementation</li>
          <li>Sitecore headless development</li>
          <li>Sitecore migration and upgrade</li>
          <li>Sitecore performance optimization</li>
          <li>Sitecore integration with external systems</li>
        </ul>

        <h2>Why Choose Sitecore?</h2>

        <p>
          Sitecore is an enterprise digital experience platform that allows
          companies to deliver personalized content, scalable architecture, and
          seamless omnichannel experiences.
        </p>

        <h2>Enterprise Digital Experience Platforms</h2>

        <p>
          Businesses use Sitecore to manage large content ecosystems,
          multilingual websites, and integrated marketing platforms.
        </p>
      </div>
    </main>
  );
}
