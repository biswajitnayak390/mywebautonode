"use client";

import Link from "next/link";
import LeadForm, { type LeadFormSource } from "@/components/LeadForm";
import { type FormEvent, useEffect, useRef, useState } from "react";

type Reply = {
  text: string;
  links: { href: string; label: string }[];
};

const replies = {
  migration: {
    text: "Moving from Sitecore XP or XM? A migration review looks at your current setup, custom components, publishing workflow, and the URLs you need to keep.",
    links: [
      { href: "/sitecore-migration-review", label: "Request a free migration review" },
      { href: "/sitecore-xm-cloud-development", label: "Explore XM Cloud migration services" },
    ],
  },
  sitecore: {
    text: "AutonodeAI can help with existing Sitecore XP and XM sites, including MVC, SXA, JSS, publishing, and multilingual routing.",
    links: [
      { href: "/sitecore-development", label: "Explore Sitecore development" },
      { href: "/blog/sitecore-nextjs-published-page-404", label: "Troubleshoot a Sitecore 404" },
    ],
  },
  headless: {
    text: "AutonodeAI builds Next.js frontends connected to Sitecore, Contentful, Strapi, or headless WordPress. A pilot can test editorial preview, publishing, and the public pages before you migrate the rest.",
    links: [
      { href: "/headless-cms-development", label: "Explore headless CMS development" },
      { href: "/blog/headless-cms-seo-checklist", label: "Read the headless SEO checklist" },
    ],
  },
  chatbot: {
    text: "A website chatbot can answer questions from approved content and guide visitors to sales or support. Start with the questions visitors ask most and decide when a person should take over.",
    links: [
      { href: "/ai-chatbot-development", label: "Explore chatbot development" },
      { href: "/ai-chatbot-websites", label: "Read the website chatbot guide" },
    ],
  },
  website: {
    text: "For a website review, share your URL and the issue you want to address, such as page speed, search visibility, navigation, or enquiries.",
    links: [
      { href: "/contact", label: "Open the contact page" },
      { href: "/blog/headless-cms-seo-checklist", label: "Read the website launch checklist" },
    ],
  },
  project: {
    text: "Tell us what you need to build, which platform you use, and any target launch date. We can discuss scope and pricing with that information.",
    links: [{ href: "/contact", label: "Open the project enquiry form" }],
  },
  other: {
    text: "I can help you find information about Sitecore, headless CMS, website reviews, and chatbots. For a specific question about your project, reach AutonodeAI through the enquiry form.",
    links: [
      { href: "/services", label: "Browse services" },
      { href: "/contact", label: "Open the project enquiry form" },
    ],
  },
} satisfies Record<string, Reply>;

type Topic = keyof typeof replies;
type ChatFormSource = Extract<LeadFormSource, `chatbot-${string}`>;

const enquiryForms = {
  migration: { source: "chatbot-sitecore-migration", title: "Request a migration review" },
  website: { source: "chatbot-website-review", title: "Request a website review" },
  project: { source: "chatbot-project", title: "Send a project enquiry" },
} as const satisfies Record<string, { source: ChatFormSource; title: string }>;

type EnquiryForm = (typeof enquiryForms)[keyof typeof enquiryForms];
type Exchange = { id: number; question: string; topic: Topic };
type OpenDetails = { origin?: HTMLElement; topic?: "website" };

const shortcuts: { topic: Topic; label: string }[] = [
  { topic: "migration", label: "Sitecore migration" },
  { topic: "website", label: "Website review" },
  { topic: "headless", label: "Headless CMS" },
  { topic: "chatbot", label: "AI chatbot" },
  { topic: "project", label: "Discuss a project" },
];

function matchTopic(question: string): Topic {
  const aboutSitecore = /\b(?:sitecore|jss|sxa|experience edge)\b/i.test(question);
  if (/\b(?:sitecoreai|xm cloud)\b/i.test(question) || (aboutSitecore && /\bmigrat/i.test(question))) return "migration";
  if (aboutSitecore) return "sitecore";
  if (/\b(?:chatbots?|chat assistants?)\b/i.test(question)) return "chatbot";
  if (/\b(?:headless|next[. ]?js|contentful|strapi|wordpress)\b/i.test(question)) return "headless";
  if (/\b(?:review|seo|performance|speed|accessibility)\b/i.test(question)) return "website";
  if (/\b(?:project|pricing|price|cost|quote|contact|enquir(?:e|y))\b/i.test(question)) return "project";
  return "other";
}

export default function SimpleChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [history, setHistory] = useState<Exchange[]>([]);
  const [enquiry, setEnquiry] = useState<EnquiryForm | null>(null);
  const enquiryHeading = useRef<HTMLHeadingElement>(null);
  const latestTopic = history[history.length - 1]?.topic;
  const nextEnquiry = latestTopic === "migration" || latestTopic === "website"
    ? enquiryForms[latestTopic]
    : enquiryForms.project;
  const dock = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const chatBody = useRef<HTMLDivElement>(null);
  const restoreFocus = useRef<HTMLElement | null>(null);
  const nextId = useRef(0);

  useEffect(() => {
    function openFromNavigation(event: Event) {
      const details = (event as CustomEvent<OpenDetails>).detail;
      restoreFocus.current = details?.origin ?? trigger.current;
      if (details?.topic === "website") {
        const exchange: Exchange = {
          id: nextId.current++,
          question: "I’d like a website review.",
          topic: "website",
        };
        setHistory(previous => [...previous.slice(-7), exchange]);
      }
      setIsOpen(true);
    }
    window.addEventListener("open-chatbot", openFromNavigation);
    return () => window.removeEventListener("open-chatbot", openFromNavigation);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    closeButton.current?.focus({ preventScroll: true });
    const viewport = window.visualViewport;
    const element = dock.current;
    if (!viewport || !element) return;

    function resizeToViewport() {
      if (!viewport || !element) return;
      const covered = Math.max(0, window.innerHeight - viewport.height - viewport.offsetTop);
      element.style.setProperty("--chat-covered-bottom", viewport.scale === 1 ? covered + "px" : "0px");
      element.style.setProperty("--chat-visible-height", viewport.height + "px");
    }

    resizeToViewport();
    viewport.addEventListener("resize", resizeToViewport);
    viewport.addEventListener("scroll", resizeToViewport);
    return () => {
      viewport.removeEventListener("resize", resizeToViewport);
      viewport.removeEventListener("scroll", resizeToViewport);
      element.style.removeProperty("--chat-covered-bottom");
      element.style.removeProperty("--chat-visible-height");
    };
  }, [isOpen]);

  useEffect(() => {
    const body = chatBody.current;
    if (!isOpen || !body) return;
    body.scrollTop = enquiry ? 0 : body.scrollHeight;
    if (enquiry) enquiryHeading.current?.focus({ preventScroll: true });
  }, [enquiry, history, isOpen]);

  function close(restore = true) {
    setIsOpen(false);
    if (restore) {
      const previous = restoreFocus.current;
      const target = previous?.isConnected ? previous : trigger.current;
      target?.focus({ preventScroll: true });
    }
  }

  function ask(text: string, topic: Topic) {
    const exchange: Exchange = { id: nextId.current++, question: text, topic };
    setHistory(previous => [...previous.slice(-7), exchange]);
    setQuestion("");
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = question.trim();
    if (text) ask(text, matchTopic(text));
  }

  return (
    <div className="autonode-chat-dock" ref={dock}>
      <button
        type="button"
        className="autonode-chat-trigger"
        ref={trigger}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        aria-controls={isOpen ? "autonode-chat" : undefined}
        onClick={event => {
          if (isOpen) {
            close();
          } else {
            restoreFocus.current = event.currentTarget;
            setIsOpen(true);
          }
        }}
      >
        {isOpen ? "Close chat" : "Chat with AutonodeAI"}
      </button>

      {(isOpen || enquiry) && (
        <aside
          hidden={!isOpen}
          id="autonode-chat"
          className="autonode-chat-window"
          role="dialog"
          aria-labelledby="autonode-chat-title"
          onKeyDown={event => {
            if (event.key === "Escape") {
              event.preventDefault();
              close();
            }
          }}
        >
          <div className="autonode-chat-header">
            <h2 id="autonode-chat-title">AutonodeAI Assistant</h2>
            <div className="autonode-chat-header-actions">
              {!enquiry && history.length > 0 && (
                <button
                  type="button"
                  className="autonode-chat-reset"
                  onClick={() => {
                    setHistory([]);
                    setQuestion("");
                    closeButton.current?.focus({ preventScroll: true });
                  }}
                >
                  Start over
                </button>
              )}
              <button
                type="button"
                className="autonode-chat-close"
                aria-label="Close assistant"
                ref={closeButton}
                onClick={() => close()}
              >
                ×
              </button>
            </div>
          </div>

          <div className="autonode-chat-body" ref={chatBody}>
            {enquiry ? (
              <section className="autonode-chat-enquiry">
                <button
                  type="button"
                  className="autonode-chat-back"
                  onClick={() => {
                    setEnquiry(null);
                    closeButton.current?.focus({ preventScroll: true });
                  }}
                >
                  Back to chat
                </button>
                <h3 className="h6 mb-3" tabIndex={-1} ref={enquiryHeading}>{enquiry.title}</h3>
                <LeadForm source={enquiry.source} />
              </section>
            ) : (
              <>
                <p className="autonode-chat-bubble bot">What can I help you find?</p>
                <div className="autonode-chat-actions" aria-label="Suggested topics" role="group">
                  {shortcuts.map(({ topic, label }) => (
                    <button type="button" className="autonode-chip" key={topic} onClick={() => ask(label, topic)}>
                      {label}
                    </button>
                  ))}
                </div>
                <div role="log" aria-label="Conversation" aria-live="polite" aria-relevant="additions">
                  {history.map(exchange => {
                    const reply = replies[exchange.topic];
                    return (
                      <div key={exchange.id}>
                        <p className="autonode-chat-bubble user">{exchange.question}</p>
                        <div className="autonode-chat-bubble bot">
                          <p>{reply.text}</p>
                          <ul className="autonode-chat-links">
                            {reply.links.map(link => (
                              <li key={link.href}>
                                <Link href={link.href} prefetch={false} onClick={() => close(false)}>
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <button type="button" className="autonode-chip" onClick={() => setEnquiry(nextEnquiry)}>
                  {nextEnquiry.title}
                </button>
              </>
            )}
          </div>

          {!enquiry && (
            <form className="autonode-chat-input-wrap" onSubmit={submit}>
              <label className="visually-hidden" htmlFor="autonode-chat-question">Question about AutonodeAI services</label>
              <input
                className="autonode-chat-input"
                id="autonode-chat-question"
                value={question}
                onChange={event => setQuestion(event.currentTarget.value)}
                placeholder="Ask about our services"
                maxLength={220}
                autoComplete="off"
                enterKeyHint="send"
              />
              <button type="submit" className="autonode-chat-send" disabled={!question.trim()}>Ask</button>
            </form>
          )}
        </aside>
      )}
    </div>
  );
}
