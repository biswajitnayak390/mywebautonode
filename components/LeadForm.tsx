"use client";

import { type FormEvent, useId, useRef, useState } from "react";

type LeadFormProps = {
  source: "contact" | "sitecore-migration-review";
};

export default function LeadForm({ source }: LeadFormProps) {
  const id = useId();
  const isReview = source === "sitecore-migration-review";
  const submitting = useRef(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current) return;

    const fields = Object.fromEntries(new FormData(event.currentTarget));
    const params = new URLSearchParams(window.location.search);
    submitting.current = true;
    setStatus("sending");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...fields,
          source,
          utm_source: params.get("utm_source"),
          utm_campaign: params.get("utm_campaign"),
        }),
      });
      const result = await response.json().catch(() => null);

      if (response.ok && result?.ok === true) {
        setStatus("sent");
        return;
      }

      if (response.status === 400 && typeof result?.message === "string") {
        setError(result.message);
        setStatus("idle");
        return;
      }
    } catch {
      // The email link below is available if the request cannot reach the site.
    } finally {
      submitting.current = false;
    }

    setError("Your request could not be sent. Please try again or use the email link below.");
    setStatus("idle");
  }

  if (status === "sent") {
    return (
      <p className="alert alert-success mb-0" role="status">
        Thanks, your request was sent. We’ll reply to the email address you provided.
      </p>
    );
  }

  return (
    <form method="post" onSubmit={handleSubmit}>
      <fieldset className="row g-3" disabled={status === "sending"}>
        <div className="col-sm-6">
          <label className="form-label" htmlFor={`${id}-name`}>Name</label>
          <input
            className="form-control"
            id={`${id}-name`}
            name="name"
            autoComplete="name"
            maxLength={100}
            required
          />
        </div>
        <div className="col-sm-6">
          <label className="form-label" htmlFor={`${id}-email`}>Work email</label>
          <input
            className="form-control"
            id={`${id}-email`}
            name="email"
            type="email"
            autoComplete="email"
            maxLength={254}
            required
          />
        </div>
        <div className="col-12">
          <label className="form-label" htmlFor={`${id}-message`}>
            {isReview ? "What are you planning to migrate?" : "How can we help?"}
          </label>
          <textarea
            className="form-control"
            id={`${id}-message`}
            name="message"
            rows={3}
            maxLength={3000}
            placeholder={isReview ? "Your current Sitecore version and biggest migration question" : undefined}
            required
          />
        </div>
        <div className="col-12">
          <label className="form-label" htmlFor={`${id}-website`}>Website (optional)</label>
          <input
            className="form-control"
            id={`${id}-website`}
            name="website"
            inputMode="url"
            autoComplete="url"
            maxLength={300}
            placeholder="example.com"
          />
        </div>
        <div className="col-12">
          {error && <p className="alert alert-danger" role="alert">{error}</p>}
          <button className="btn btn-brand-primary" type="submit">
            {status === "sending" ? "Sending…" : "Send request"}
          </button>
        </div>
      </fieldset>
      <p className="small text-muted mt-3 mb-0">
        We’ll use these details to reply to your request. You can also email{" "}
        <a href="mailto:contact@autonodeai.com">contact@autonodeai.com</a>.
      </p>
    </form>
  );
}
