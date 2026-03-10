"use client";

import { useEffect, useRef, useState } from "react";

type LeadData = {
  name: string;
  email: string;
  company: string;
  website: string;
  message: string;
};

type Step =
  | "welcome"
  | "name"
  | "email"
  | "company"
  | "website"
  | "message"
  | "done";

export default function SimpleChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<Step>("welcome");
  const [input, setInput] = useState("");
  const [lead, setLead] = useState<LeadData>({
    name: "",
    email: "",
    company: "",
    website: "",
    message: "",
  });

  const [messages, setMessages] = useState<string[]>([
    "Hi 👋 Welcome to AutonodeAI.",
    "Would you like a free website review or want to discuss a CMS / AI / website project?",
  ]);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen]);

  const openBot = () => setIsOpen(true);
  const closeBot = () => setIsOpen(false);

  const startLeadFlow = () => {
    setMessages((prev) => [
      ...prev,
      "Great. Let’s get a few details.",
      "What is your name?",
    ]);
    setStep("name");
  };

  const handleNext = () => {
    const value = input.trim();
    if (!value && step !== "welcome") return;

    if (step === "welcome") {
      startLeadFlow();
      return;
    }

    if (step === "name") {
      setLead((prev) => ({ ...prev, name: value }));
      setMessages((prev) => [
        ...prev,
        `Name: ${value}`,
        "What is your business email?",
      ]);
      setStep("email");
      setInput("");
      return;
    }

    if (step === "email") {
      setLead((prev) => ({ ...prev, email: value }));
      setMessages((prev) => [
        ...prev,
        `Email: ${value}`,
        "What is your company name?",
      ]);
      setStep("company");
      setInput("");
      return;
    }

    if (step === "company") {
      setLead((prev) => ({ ...prev, company: value }));
      setMessages((prev) => [
        ...prev,
        `Company: ${value}`,
        "What is your website URL?",
      ]);
      setStep("website");
      setInput("");
      return;
    }

    if (step === "website") {
      setLead((prev) => ({ ...prev, website: value }));
      setMessages((prev) => [
        ...prev,
        `Website: ${value}`,
        "What would you like us to review or improve?",
      ]);
      setStep("message");
      setInput("");
      return;
    }

    if (step === "message") {
      const finalLead = { ...lead, message: value };
      setLead(finalLead);
      setMessages((prev) => [
        ...prev,
        `Requirement: ${value}`,
        "Thank you. Your request has been captured.",
        "We will review your website and contact you soon.",
      ]);
      console.log("Captured lead:", finalLead);
      setStep("done");
      setInput("");
    }
  };

  const quickAction = (type: "review" | "project") => {
    if (type === "review") {
      setMessages((prev) => [...prev, "I want a free website review."]);
    } else {
      setMessages((prev) => [
        ...prev,
        "I want to discuss a website / CMS / AI project.",
      ]);
    }
    startLeadFlow();
  };

  return (
    <>
      <button type="button" onClick={openBot} className="autonode-chat-trigger">
        Chat with Us
      </button>

      {isOpen && (
        <div className="autonode-chat-window">
          <div className="autonode-chat-header">
            <div>
              <strong>AutonodeAI Assistant</strong>
              <div className="autonode-chat-subtitle">
                Website Review & Project Enquiry
              </div>
            </div>
            <button
              type="button"
              onClick={closeBot}
              className="autonode-chat-close"
              aria-label="Close chat"
            >
              ×
            </button>
          </div>

          <div className="autonode-chat-body">
            {messages.map((msg, index) => (
              <div key={index} className="autonode-chat-bubble">
                {msg}
              </div>
            ))}

            {step === "welcome" && (
              <div className="autonode-chat-actions">
                <button
                  type="button"
                  className="autonode-chip"
                  onClick={() => quickAction("review")}
                >
                  Free Website Review
                </button>
                <button
                  type="button"
                  className="autonode-chip"
                  onClick={() => quickAction("project")}
                >
                  Discuss a Project
                </button>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {step !== "welcome" && step !== "done" && (
            <div className="autonode-chat-input-wrap">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type here..."
                className="autonode-chat-input"
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleNext();
                }}
              />
              <button
                type="button"
                onClick={handleNext}
                className="autonode-chat-send"
              >
                Send
              </button>
            </div>
          )}

          {step === "done" && (
            <div className="autonode-chat-done">
              <button
                type="button"
                className="autonode-chat-send"
                onClick={closeBot}
              >
                Close
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}
