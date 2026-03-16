"use client";

import { useEffect, useRef, useState } from "react";

type Step =
  | "welcome"
  | "name"
  | "email"
  | "company"
  | "website"
  | "message"
  | "done";

type LeadData = {
  name: string;
  email: string;
  company: string;
  website: string;
  message: string;
};

type ChatMessage = {
  id: number;
  text: string;
  sender: "bot" | "user";
};

export default function SimpleChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<Step>("welcome");
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const [lead, setLead] = useState<LeadData>({
    name: "",
    email: "",
    company: "",
    website: "",
    message: "",
  });

  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 1, text: "Hi 👋 Welcome to AutonodeAI.", sender: "bot" },
    {
      id: 2,
      text: "Would you like a free website review or discuss a project?",
      sender: "bot",
    },
  ]);

  const bottomRef = useRef<HTMLDivElement | null>(null);
  const messageIdRef = useRef(3);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });

    const handler = () => setIsOpen(true);
    window.addEventListener("open-chatbot", handler);

    return () => window.removeEventListener("open-chatbot", handler);
  }, [messages, isTyping]);

  const addBotMessage = (text: string, delay = 500) => {
    setIsTyping(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: messageIdRef.current++, text, sender: "bot" },
      ]);
      setIsTyping(false);
    }, delay);
  };

  const addUserMessage = (text: string) => {
    setMessages((prev) => [
      ...prev,
      { id: messageIdRef.current++, text, sender: "user" },
    ]);
  };

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateWebsite = (url: string) => url.includes(".") && url.length > 4;

  const saveLead = async (data: LeadData) => {
    const res = await fetch("/api/save-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const text = await res.text();

    try {
      const json = JSON.parse(text);

      if (!res.ok) {
        throw new Error(json?.message || "Lead saving failed");
      }
    } catch {
      throw new Error("Server response invalid");
    }
  };

  const handleSend = async () => {
    const value = input.trim();
    if (!value) return;

    addUserMessage(value);
    setInput("");

    if (step === "name") {
      setLead((prev) => ({ ...prev, name: value }));
      setStep("email");

      addBotMessage("Nice to meet you! What is your business email?");
      return;
    }

    if (step === "email") {
      if (!validateEmail(value)) {
        addBotMessage("That email doesn't look correct. Please try again.");
        return;
      }

      setLead((prev) => ({ ...prev, email: value }));
      setStep("company");

      addBotMessage("Great. What is your company name?");
      return;
    }

    if (step === "company") {
      setLead((prev) => ({ ...prev, company: value }));
      setStep("website");

      addBotMessage("Please share your website URL.");
      return;
    }

    if (step === "website") {
      if (!validateWebsite(value)) {
        addBotMessage("Please enter a valid website URL.");
        return;
      }

      setLead((prev) => ({ ...prev, website: value }));
      setStep("message");

      addBotMessage("What would you like us to review or improve?");
      return;
    }

    if (step === "message") {
      const finalLead = { ...lead, message: value };

      try {
        await saveLead(finalLead);

        setStep("done");

        addBotMessage("✅ Your request has been captured successfully.");

        setTimeout(() => {
          addBotMessage(
            "Our team will review your website and contact you shortly.",
          );
        }, 700);
      } catch (err) {
        addBotMessage(
          "⚠️ Something went wrong saving your request. Please try again.",
        );
      }
    }
  };

  const startFlow = (type: "review" | "project") => {
    addUserMessage(
      type === "review"
        ? "I want a free website review."
        : "I want to discuss a project.",
    );

    setTimeout(() => {
      addBotMessage("Great. Let’s start with your name.");
      setStep("name");
    }, 400);
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="autonode-chat-trigger">
        Free Website Review
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
              onClick={() => setIsOpen(false)}
              className="autonode-chat-close"
            >
              ×
            </button>
          </div>

          <div className="autonode-chat-body">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={
                  msg.sender === "bot"
                    ? "autonode-chat-bubble bot"
                    : "autonode-chat-bubble user"
                }
              >
                {msg.text}
              </div>
            ))}

            {step === "welcome" && (
              <div className="autonode-chat-actions">
                <button
                  className="autonode-chip"
                  onClick={() => startFlow("review")}
                >
                  Free Website Review
                </button>

                <button
                  className="autonode-chip"
                  onClick={() => startFlow("project")}
                >
                  Discuss a Project
                </button>
              </div>
            )}

            {isTyping && (
              <div className="autonode-chat-bubble bot typing-bubble">
                <span className="typing-dot"></span>
                <span className="typing-dot"></span>
                <span className="typing-dot"></span>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {step !== "welcome" && step !== "done" && (
            <div className="autonode-chat-input-wrap">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your answer..."
                className="autonode-chat-input"
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSend();
                }}
              />

              <button onClick={handleSend} className="autonode-chat-send">
                Send
              </button>
            </div>
          )}

          {step === "done" && (
            <div className="autonode-chat-done">
              <button
                className="autonode-chat-send"
                onClick={() => setIsOpen(false)}
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
