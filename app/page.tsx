"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = async (e: any) => {
    e.preventDefault();

    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(form),
    });

    alert("Thank you! We will contact you soon.");
  };

  return (
    <main>

      {/* HERO */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-6">

              <h1 className="hero-title">
                AI-Powered Digital Experience Engineering
              </h1>

              <p className="hero-text">
                We build modern enterprise websites using Sitecore,
                headless CMS architecture, React, and AI powered solutions.
              </p>

              <button
                className="btn btn-primary btn-lg mt-3"
                data-bs-toggle="modal"
                data-bs-target="#contactModal"
              >
                Book a Discovery Call
              </button>

            </div>

            <div className="col-lg-6">
              <Image
                src="/images/hero.jpg"
                alt="AI digital technology"
                width={600}
                height={400}
                className="img-fluid rounded"
              />
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services-section">

        <div className="container text-center">

          <h2 className="section-title">
            Enterprise Web & DXP Services
          </h2>

          <div className="row mt-5">

            <div className="col-md-4">
              <Image
                src="/images/coding.jpg"
                width={400}
                height={250}
                alt="web development"
                className="img-fluid rounded"
              />
              <h3 className="service-title">
                Enterprise Website Development
              </h3>
              <p>
                High-performance websites using React, Next.js, and cloud architecture.
              </p>
            </div>

            <div className="col-md-4">
              <Image
                src="/images/workspace.jpg"
                width={400}
                height={250}
                alt="DXP platforms"
                className="img-fluid rounded"
              />
              <h3 className="service-title">
                DXP & CMS Implementation
              </h3>
              <p>
                Sitecore, WordPress, Contentful, and headless CMS architecture.
              </p>
            </div>

            <div className="col-md-4">
              <Image
                src="/images/ai.jpg"
                width={400}
                height={250}
                alt="AI automation"
                className="img-fluid rounded"
              />
              <h3 className="service-title">
                AI Automation & Integration
              </h3>
              <p>
                AI chatbots, intelligent search, and automation solutions.
              </p>
            </div>

          </div>
        </div>

      </section>

      {/* TECHNOLOGIES */}
      <section className="tech-section">

        <div className="container text-center">

          <h2 className="section-title">
            Technologies We Use
          </h2>

          <div className="tech-list">

            <span>Sitecore</span>
            <span>.NET</span>
            <span>React</span>
            <span>Next.js</span>
            <span>Headless CMS</span>
            <span>Azure</span>

          </div>

        </div>

      </section>

      {/* CONTACT CTA */}
      <section className="cta-section text-center">

        <h2>Let's Build Your Digital Platform</h2>

        <p>
          Contact us to discuss your enterprise website or digital experience platform.
        </p>

        <button
          className="btn btn-dark btn-lg"
          data-bs-toggle="modal"
          data-bs-target="#contactModal"
        >
          Book a Discovery Call
        </button>

      </section>

      {/* CONTACT MODAL */}
      <div
        className="modal fade"
        id="contactModal"
        tabIndex={-1}
      >
        <div className="modal-dialog">
          <div className="modal-content">

            <div className="modal-header">
              <h5 className="modal-title">
                Book a Discovery Call
              </h5>
            </div>

            <form onSubmit={submitForm}>

              <div className="modal-body">

                <input
                  name="name"
                  placeholder="Your Name"
                  className="form-control mb-3"
                  onChange={handleChange}
                />

                <input
                  name="email"
                  placeholder="Email"
                  className="form-control mb-3"
                  onChange={handleChange}
                />

                <input
                  name="company"
                  placeholder="Company"
                  className="form-control mb-3"
                  onChange={handleChange}
                />

                <textarea
                  name="message"
                  placeholder="Project details"
                  className="form-control"
                  onChange={handleChange}
                />

              </div>

              <div className="modal-footer">

                <button
                  className="btn btn-primary"
                  type="submit"
                >
                  Submit
                </button>

              </div>

            </form>

          </div>
        </div>
      </div>

    </main>
  );
}