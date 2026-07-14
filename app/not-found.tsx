import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The page you requested could not be found. Explore AutonodeAI services, insights, and digital experience solutions.",
  robots: {
    index: false,
    follow: true,
  },
};

const helpfulLinks = [
  {
    href: "/services",
    title: "Explore Our Services",
    description:
      "See our Sitecore, headless CMS, AI chatbot, Next.js, and modern website development services.",
  },
  {
    href: "/sitecore-development",
    title: "Sitecore Development",
    description:
      "Learn how we build and modernize enterprise digital experience platforms with Sitecore.",
  },
  {
    href: "/ai-chatbot-development",
    title: "AI Chatbot Development",
    description:
      "Discover AI-powered assistants for lead capture, customer support, and website engagement.",
  },
  {
    href: "/blog",
    title: "Read Our Insights",
    description:
      "Browse practical guides about Sitecore, headless CMS, AI automation, SEO, and modern web engineering.",
  },
];

export default function NotFound() {
  return (
    <main className="section-pad page-top-space">
      <div className="container py-5">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: "760px" }}>
          <span className="eyebrow mb-3">404 — Page Not Found</span>
          <h1 className="section-title mb-3">This page has moved or no longer exists.</h1>
          <p className="section-copy mx-auto mb-4">
            The link may be outdated or the address may have been typed incorrectly.
            You can return to the homepage or continue exploring our digital experience,
            CMS, AI, and web development services.
          </p>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <Link href="/" className="btn btn-brand-primary btn-lg">
              Back to Home
            </Link>
            <Link href="/contact" className="btn btn-outline-dark btn-lg">
              Contact AutonodeAI
            </Link>
          </div>
        </div>

        <section aria-labelledby="helpful-pages-title">
          <div className="text-center mb-4">
            <h2 id="helpful-pages-title" className="h3">
              Helpful pages
            </h2>
          </div>
          <div className="row g-4">
            {helpfulLinks.map((item) => (
              <div key={item.href} className="col-md-6">
                <Link
                  href={item.href}
                  className="service-card-light h-100 d-block p-4 text-decoration-none"
                >
                  <h3 className="service-title h5 mb-2">{item.title}</h3>
                  <p className="card-copy-dark mb-0">{item.description}</p>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
