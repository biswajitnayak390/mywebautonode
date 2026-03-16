"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ContactForm = {
  name: string;
  email: string;
  company: string;
  message: string;
};

export default function Home() {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(data?.message || "Failed to submit form");
      }

      alert("Thank you! Your discovery call request has been submitted.");

      setForm({
        name: "",
        email: "",
        company: "",
        message: "",
      });

      closeModal();
    } catch (error: any) {
      alert(
        error?.message ||
          "Email sending is not configured yet. Add SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, and optionally CONTACT_TO_EMAIL in your environment variables.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <main>
        {/* HERO */}
        <section className="hero-section" style={{ paddingTop: 20 }}>
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <span className="eyebrow mb-3">
                  Enterprise Web, DXP & AI Solutions
                </span>

                <h1 className="hero-title">
                  AI-Powered Digital Experience Engineering for Modern Brands
                </h1>

                <p className="hero-text mb-4">
                  AutonodeAI helps businesses design, build, and scale modern
                  websites, digital experience platforms, and AI-enabled
                  customer journeys using Sitecore, WordPress, Contentful,
                  React, Next.js, .NET, and headless CMS architecture.
                </p>

                <div className="d-flex flex-wrap gap-3">
                  <button
                    type="button"
                    className="btn btn-brand-primary btn-lg"
                    onClick={() => {
                      const event = new CustomEvent("open-chatbot");
                      window.dispatchEvent(event);
                    }}
                  >
                    Free Website Review
                  </button>

                  <a href="#services" className="btn btn-brand-outline btn-lg">
                    Explore Services
                  </a>
                </div>

                <div className="hero-trust-grid mt-5">
                  <div className="trust-card">
                    <strong>Enterprise-first delivery</strong>
                    <span>
                      Scalable website engineering for brands that need
                      performance, governance, and growth.
                    </span>
                  </div>

                  <div className="trust-card">
                    <strong>CMS & DXP expertise</strong>
                    <span>
                      Sitecore, WordPress, Contentful, Strapi, and headless
                      architecture tailored to your business goals.
                    </span>
                  </div>

                  <div className="trust-card">
                    <strong>AI-powered solutions</strong>
                    <span>
                      Intelligent search, chatbot experiences, and automation
                      that improve engagement and operations.
                    </span>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="hero-visual">
                  <Image
                    src="/images/hero.jpg"
                    alt="Professional digital technology and enterprise web development"
                    width={900}
                    height={700}
                    className="hero-image"
                    priority
                  />
                  <div className="hero-floating-card">
                    <strong className="d-block mb-2">
                      Build a stronger digital foundation
                    </strong>
                    <span>
                      From enterprise CMS implementation to AI-enhanced digital
                      platforms, we create websites that look premium and
                      perform at scale.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="services-section">
          <div className="container text-center">
            <span className="eyebrow mb-3">Core Services</span>

            <h2 className="section-title">Enterprise Web & DXP Services</h2>

            <p
              className="section-copy mx-auto mb-5"
              style={{ maxWidth: "760px" }}
            >
              We deliver premium digital solutions for companies looking to
              modernize their web presence, improve customer experience, and
              create scalable digital platforms across CMS, commerce, and AI.
            </p>

            <div className="row g-4">
              <div className="col-lg-4 col-md-6">
                <div className="service-card-light h-100 overflow-hidden">
                  <Image
                    src="/images/coding.jpg"
                    width={600}
                    height={420}
                    alt="Enterprise website development and software engineering"
                    className="card-thumb-light"
                  />
                  <div className="p-4 text-start">
                    <div className="service-number mb-2">01</div>
                    <h3 className="service-title">
                      Enterprise Website Development
                    </h3>
                    <p className="card-copy-dark mb-0">
                      High-performance business websites built with React,
                      Next.js, .NET, and modern front-end architecture for
                      speed, SEO, and maintainability.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="service-card-light h-100 overflow-hidden">
                  <Image
                    src="/images/workspace.jpg"
                    width={600}
                    height={420}
                    alt="Digital experience platform and CMS implementation"
                    className="card-thumb-light"
                  />
                  <div className="p-4 text-start">
                    <div className="service-number mb-2">02</div>
                    <h3 className="service-title">DXP & CMS Implementation</h3>
                    <p className="card-copy-dark mb-0">
                      Sitecore, WordPress, Contentful, Strapi, and headless CMS
                      implementation designed for content flexibility,
                      governance, and enterprise growth.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="service-card-light h-100 overflow-hidden">
                  <Image
                    src="/images/ai.jpg"
                    width={600}
                    height={420}
                    alt="AI automation and modern digital solutions"
                    className="card-thumb-light"
                  />
                  <div className="p-4 text-start">
                    <div className="service-number mb-2">03</div>
                    <h3 className="service-title">
                      AI Automation & Integration
                    </h3>
                    <p className="card-copy-dark mb-0">
                      AI chatbots, smart content workflows, search enhancement,
                      business automation, and intelligent digital experiences
                      integrated into modern websites and platforms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TECHNOLOGIES */}
        <section className="tech-section">
          <div className="container text-center">
            <span className="eyebrow mb-3">Technology Stack</span>

            <h2 className="section-title">Technologies We Use</h2>

            <p
              className="section-copy mx-auto mb-5"
              style={{ maxWidth: "760px" }}
            >
              We build modern, scalable, and enterprise-ready digital solutions
              using proven technologies across content management, application
              development, cloud, and AI.
            </p>

            <div className="tech-list">
              <span>Sitecore</span>
              <span>WordPress</span>
              <span>Contentful</span>
              <span>Strapi</span>
              <span>.NET</span>
              <span>React</span>
              <span>Next.js</span>
              <span>Headless CMS</span>
              <span>Azure</span>
              <span>AI Integration</span>
            </div>
          </div>
        </section>

        {/* ABOUT / VALUE SECTION */}
        <section className="section-pad section-soft">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <Image
                  src="/images/devices.jpg"
                  width={900}
                  height={650}
                  alt="Modern devices and digital platform engineering"
                  className="content-image"
                />
              </div>

              <div className="col-lg-6">
                <span className="eyebrow mb-3">Why AutonodeAI</span>

                <h2 className="section-title">
                  Build a digital presence that looks premium and performs like
                  an enterprise brand
                </h2>

                <p className="section-copy">
                  We focus on design quality, technical scalability, SEO
                  foundations, and platform flexibility so your business can
                  compete with modern technology brands and service companies.
                </p>

                <ul className="feature-list mt-4">
                  <li>
                    Premium modern UI with strong B2B technology positioning
                  </li>
                  <li>Enterprise CMS and DXP implementation capability</li>
                  <li>SEO-ready structure, content hierarchy, and metadata</li>
                  <li>
                    AI-led digital experiences and automation opportunities
                  </li>
                  <li>
                    Scalable architecture for future growth and integrations
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-banner text-center">
              <span className="eyebrow mb-3">Let’s Talk</span>

              <h2 className="section-title mb-3">
                Let&apos;s build your next website, CMS platform, or digital
                experience
              </h2>

              <p
                className="section-copy mx-auto mb-4"
                style={{ maxWidth: "760px" }}
              >
                Book a discovery call to discuss your website redesign, Sitecore
                implementation, headless CMS strategy, AI integration, or
                digital transformation roadmap.
              </p>

              <button
                type="button"
                className="btn btn-brand-primary btn-lg"
                onClick={() => {
                  const event = new CustomEvent("open-chatbot");
                  window.dispatchEvent(event);
                }}
              >
                Free Website Review
              </button>

              <p className="mt-3 mb-0 text-muted">
                Free 30-minute consultation for your project requirements.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-pad">
          <div className="container">
            <div className="text-center mb-5">
              <span className="eyebrow mb-3">FAQs</span>
              <h2 className="section-title">Frequently Asked Questions</h2>
              <p className="section-copy mx-auto" style={{ maxWidth: "760px" }}>
                Answers to common questions about our website development, DXP,
                CMS, and AI services.
              </p>
            </div>

            <div className="row g-4">
              <div className="col-md-6">
                <div className="faq-card-light h-100">
                  <h3 className="card-title-dark mb-3">
                    Do you work with Sitecore and other CMS platforms?
                  </h3>
                  <p className="card-copy-dark mb-0">
                    Yes. We work with Sitecore, WordPress, Contentful, Strapi,
                    and headless CMS architectures depending on your business
                    and technical requirements.
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="faq-card-light h-100">
                  <h3 className="card-title-dark mb-3">
                    Can you build SEO-friendly business websites?
                  </h3>
                  <p className="card-copy-dark mb-0">
                    Yes. Our websites are structured for clean content
                    hierarchy, metadata, performance, and search visibility from
                    the beginning.
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="faq-card-light h-100">
                  <h3 className="card-title-dark mb-3">
                    Do you offer AI integration in websites?
                  </h3>
                  <p className="card-copy-dark mb-0">
                    Yes. We can integrate AI chatbots, intelligent search,
                    content automation, and other AI-powered features into
                    digital platforms and websites.
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="faq-card-light h-100">
                  <h3 className="card-title-dark mb-3">
                    How do I get started with AutonodeAI?
                  </h3>
                  <p className="card-copy-dark mb-0">
                    Simply book a discovery call and share your project goals.
                    We will discuss the right technical approach, platform
                    choice, timeline, and next steps.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* REACT MODAL */}
      {isModalOpen && (
        <div className="modal-shell" role="dialog" aria-modal="true">
          <div className="modal-backdrop-custom" onClick={closeModal}></div>

          <div className="modal-panel">
            <div className="d-flex justify-content-between align-items-start gap-3 mb-3">
              <div>
                <h5 className="modal-title-custom mb-2">
                  Book a Discovery Call
                </h5>
                <p className="mb-0 text-muted">
                  Tell us about your website, CMS, DXP, or AI project.
                </p>
              </div>

              <button
                type="button"
                onClick={closeModal}
                aria-label="Close"
                style={{
                  border: "none",
                  background: "transparent",
                  fontSize: "28px",
                  lineHeight: 1,
                  color: "#667085",
                  cursor: "pointer",
                }}
              >
                ×
              </button>
            </div>

            <form onSubmit={submitForm}>
              <div className="row g-3">
                <div className="col-md-6">
                  <input
                    name="name"
                    placeholder="Your Name"
                    className="form-control"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <input
                    name="email"
                    type="email"
                    placeholder="Business Email"
                    className="form-control"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-12">
                  <input
                    name="company"
                    placeholder="Company Name"
                    className="form-control"
                    value={form.company}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-12">
                  <textarea
                    name="message"
                    placeholder="Tell us about your project requirements"
                    className="form-control"
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-12 pt-2">
                  <button
                    className="btn btn-brand-primary w-100"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Request"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
