import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Chatbot Development Services",
  description:
    "AutonodeAI builds AI chatbots for websites to improve customer engagement, automate support, and capture leads.",
};

export default function Page() {
  return (
    <main className="section-pad page-top-space">
      <div className="container">
        <h1 className="section-title mb-4">AI Chatbot Development Services</h1>

        <p className="section-copy">
          AI-powered chatbots help businesses automate customer support,
          generate leads, and improve user engagement across websites.
        </p>

        <h2>Our AI Capabilities</h2>

        <ul>
          <li>AI website assistants</li>
          <li>Lead capture chatbots</li>
          <li>Customer support automation</li>
          <li>AI-powered search</li>
        </ul>

        <h2>Benefits of AI Chatbots</h2>

        <p>
          Businesses using AI assistants can respond instantly to customer
          queries and route enquiries to the right team.
        </p>
        <p>
          Read our guide to{" "}
          <Link href="/ai-chatbot-websites">
            capturing qualified leads with a website chatbot
          </Link>{" "}
          to plan what your assistant should ask and how it should hand off.
        </p>
      </div>
    </main>
  );
}
