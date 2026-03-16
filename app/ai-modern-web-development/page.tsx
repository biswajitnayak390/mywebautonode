import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Powered Modern Web Development",
  description:
    "AutonodeAI builds modern websites using AI automation, Next.js, React, and enterprise CMS platforms.",
};

export default function Page() {
  return (
    <main className="section-pad page-top-space">
      <div className="container">
        <h1 className="section-title mb-4">
          AI Powered Modern Web Development
        </h1>

        <p>
          Artificial intelligence is transforming how modern websites are
          designed, built, and optimized. AutonodeAI combines AI automation,
          modern web frameworks, and enterprise CMS platforms to build digital
          experiences that are faster, smarter, and more scalable.
        </p>

        <h2>Modern Web Architecture</h2>

        <p>
          Our development approach focuses on modern frameworks such as Next.js
          and React combined with headless CMS platforms. This architecture
          improves website performance, scalability, and user experience.
        </p>

        <ul>
          <li>Next.js and React development</li>
          <li>Headless CMS architecture</li>
          <li>AI chatbot integration</li>
          <li>SEO optimized websites</li>
        </ul>

        <h2>AI Integration for Websites</h2>

        <p>
          AI-powered features such as intelligent chatbots, automated customer
          interactions, and data-driven personalization are becoming essential
          for modern digital platforms.
        </p>
      </div>
      <p>
        Businesses that want to stay competitive in the digital era need modern
        web architecture combined with intelligent automation.
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
        , we help companies build AI-powered digital platforms using modern
        frameworks like React, Next.js, and enterprise CMS platforms.
      </p>

      <p>
        Visit our website to explore how AI-driven automation and modern web
        engineering can transform your digital presence.
      </p>
    </main>
  );
}
