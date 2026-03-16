import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How AI Chatbots Improve Website Conversion",
  description:
    "AI chatbots help businesses increase conversions, automate support, and improve engagement.",
};

export default function Page() {
  return (
    <main className="section-pad page-top-space">
      <div className="container">
        <h1>How AI Chatbots Improve Website Conversion</h1>

        <p>
          AI-powered chatbots help businesses respond instantly to customer
          queries and capture leads.
        </p>

        <h2>Benefits</h2>

        <ul>
          <li>24/7 customer support</li>
          <li>Lead generation</li>
          <li>Improved engagement</li>
        </ul>
      </div>
    </main>
  );
}
