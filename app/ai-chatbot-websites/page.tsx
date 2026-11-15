import Link from "next/link";
import BlogArticle, { articleMetadata } from "@/components/BlogArticle";

const article = {
  path: "/ai-chatbot-websites",
  title: "How to Use a Website Chatbot to Capture Qualified Leads",
  description:
    "Plan chatbot questions, hand off enquiries to a person, and measure qualified leads while keeping a short contact form available.",
  published: "2026-03-17",
  updated: "2026-11-14",
};

export const metadata = articleMetadata(article);

export default function WebsiteChatbotGuidePage() {
  return (
    <BlogArticle details={article}>
      <p className="lead">
        A website chatbot can answer common questions and gather enough detail for
        a useful follow-up. Pick a specific job first, such as helping a prospect
        identify the right service or recording the details needed for a quote.
      </p>

      <h2 className="h4 mt-4">Give visitors a short path to an enquiry</h2>
      <p>
        On a service page, a useful first question is “What are you trying to improve?”
        Offer choices tied to the services on that page, then ask for a reply address
        and one or two details the team actually uses. Keep a direct form or email link
        visible for visitors who already know what they want.
      </p>

      <h2 className="h4 mt-4">Make the handoff actionable</h2>
      <p>
        Send the team the visitor’s contact details, service of interest, and a short
        summary. Show a confirmation only after the enquiry has been accepted by the
        system. Provide another way to get in touch if delivery fails, and give
        visitors an option to ask a person whenever the bot cannot answer accurately.
      </p>

      <h2 className="h4 mt-4">Measure enquiries through to qualification</h2>
      <p>
        Track chats started, valid enquiries received, and enquiries the team
        considers qualified. Compare the share of visitors who become qualified leads
        on pages with and without the chatbot. Review where people stop answering
        and remove questions that rarely affect the follow-up.
      </p>

      <div className="cta-banner mt-4">
        <h2 className="h4">Planning a chatbot for your website?</h2>
        <p>Share the questions visitors ask and where your team handles enquiries today.</p>
        <div className="d-flex flex-wrap gap-2">
          <Link href="/contact" className="btn btn-brand-primary">Discuss your project</Link>
          <Link href="/ai-chatbot-development" className="btn btn-brand-outline">
            Explore chatbot development services
          </Link>
        </div>
      </div>
    </BlogArticle>
  );
}
