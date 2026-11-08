import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main>
        {/* HERO */}
        <section className="hero-section" style={{ paddingTop: 20 }}>
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <span className="eyebrow mb-3">
                  Sitecore & Headless CMS
                </span>

                <h1 className="hero-title">
                  Plan your next Sitecore migration with confidence
                </h1>

                <p className="hero-text mb-4">
                  Moving from Sitecore XP or XM to XM Cloud? Start with a free
                  review of your current setup, migration risks, and what to
                  check before you scope the project.
                </p>

                <div className="d-flex flex-wrap gap-3">
                  <Link
                    href="/sitecore-migration-review"
                    className="btn btn-brand-primary btn-lg"
                  >
                    Request a free migration review
                  </Link>

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
                Share what you want to build, improve, or migrate. We’ll follow
                up by email to discuss next steps.
              </p>

              <Link href="/contact" className="btn btn-brand-primary btn-lg">
                Discuss your project
              </Link>
            </div>
          </div>
        </section>
        {/* BLOG / INSIGHTS */}
        <section className="section-pad section-soft">
          <div className="container">
            <div className="text-center mb-5">
              <span className="eyebrow mb-3">Insights</span>

              <h2 className="section-title">Latest Articles & Guides</h2>

              <p className="section-copy mx-auto" style={{ maxWidth: "760px" }}>
                Learn about modern website development, enterprise CMS
                platforms, AI integration, and digital experience engineering.
              </p>
            </div>

            <div className="row g-4">
              <div className="col-md-6 col-lg-4">
                <a
                  href="/blog/sitecore-cms-guide"
                  className="service-card-light h-100 d-block text-start"
                >
                  <Image
                    src="/images/workspace.jpg"
                    width={600}
                    height={420}
                    alt="Sitecore CMS enterprise platform guide"
                    className="card-thumb-light"
                  />

                  <div className="p-4">
                    <h3 className="service-title mb-2">
                      What is Sitecore CMS?
                    </h3>

                    <p className="card-copy-dark mb-0">
                      A complete guide explaining Sitecore CMS, enterprise
                      digital experience platforms, and why large organizations
                      choose Sitecore.
                    </p>
                  </div>
                </a>
              </div>

              <div className="col-md-6 col-lg-4">
                <a
                  href="/blog/ai-chatbot-websites"
                  className="service-card-light h-100 d-block text-start"
                >
                  <Image
                    src="/images/ai.jpg"
                    width={600}
                    height={420}
                    alt="AI chatbot integration for websites"
                    className="card-thumb-light"
                  />

                  <div className="p-4">
                    <h3 className="service-title mb-2">
                      How AI Chatbots Improve Website Conversion
                    </h3>

                    <p className="card-copy-dark mb-0">
                      Discover how AI-powered chatbots help businesses capture
                      leads, automate support, and increase website conversions.
                    </p>
                  </div>
                </a>
              </div>

              <div className="col-md-6 col-lg-4">
                <a
                  href="/blog/headless-cms-guide"
                  className="service-card-light h-100 d-block text-start"
                >
                  <Image
                    src="/images/coding.jpg"
                    width={600}
                    height={420}
                    alt="Headless CMS architecture and modern web development"
                    className="card-thumb-light"
                  />

                  <div className="p-4">
                    <h3 className="service-title mb-2">
                      Headless CMS Explained
                    </h3>

                    <p className="card-copy-dark mb-0">
                      Learn how headless CMS architecture enables faster
                      websites, omnichannel delivery, and scalable digital
                      platforms.
                    </p>
                  </div>
                </a>
              </div>
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
                    Send us a short note about your project goals. We’ll follow
                    up to discuss the platform, approach, and next steps.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
