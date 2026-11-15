import Link from "next/link";
import ServicePage, { serviceMetadata } from "@/components/ServicePage";

const service = {
  path: "/ai-chatbot-development",
  title: "AI Chatbot Development for Websites",
  description:
    "Build a website chatbot that answers questions from approved content, collects relevant enquiry details, and hands off to your team when needed.",
};

export const metadata = serviceMetadata(service);

export default function AiChatbotDevelopmentPage() {
  return (
    <ServicePage
      service={service}
      lead="Help visitors find an answer or ask for help from the right team. AutonodeAI builds website chatbots around a defined set of questions, trusted content, and a clear handoff for sales or support."
      action={{ href: "/contact", label: "Discuss a website chatbot" }}
    >
      <section className="mb-5">
        <h2 className="h3 mb-3">What to test in a chatbot pilot</h2>
        <ul className="section-copy ps-3 mb-0">
          <li className="mb-2">Choose the product, service, or support questions the assistant should answer and which pages it should use.</li>
          <li className="mb-2">Write a handoff for questions that need a person. Collect only the fields your team needs to respond.</li>
          <li>Test typical prompts, missing information, and the enquiry path before you launch the assistant.</li>
        </ul>
      </section>
      <section>
        <h2 className="h3 mb-3">Planning for lead capture?</h2>
        <p className="section-copy mb-0">
          Read the guide to{" "}
          <Link href="/ai-chatbot-websites">capturing qualified leads with a website chatbot</Link>
          {" "}for suggested questions, handoff design, and ways to measure how many enquiries your team can use.
        </p>
      </section>
    </ServicePage>
  );
}
