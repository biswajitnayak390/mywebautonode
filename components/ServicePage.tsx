import Link from "next/link";
import type { ReactNode } from "react";
import { ORGANIZATION_ID, SITE_URL, sitePageMetadata } from "@/lib/site";

type ServiceDetails = {
  path: string;
  title: string;
  description: string;
};

export function serviceMetadata({ path, title, description }: ServiceDetails) {
  return sitePageMetadata(path, title, description);
}

export default function ServicePage({
  service,
  lead,
  action,
  children,
}: {
  service: ServiceDetails;
  lead: string;
  action: { href: string; label: string };
  children: ReactNode;
}) {
  const url = new URL(service.path, SITE_URL).href;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": url + "#service",
    name: service.title,
    description: service.description,
    url,
    provider: { "@id": ORGANIZATION_ID },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <header className="section-pad section-soft">
        <div className="container">
          <div className="col-lg-9">
            <Link href="/services" className="text-link d-inline-block mb-3">All services</Link>
            <h1 className="section-title mb-3">{service.title}</h1>
            <p className="section-copy mb-4">{lead}</p>
            <Link href={action.href} className="btn btn-brand-primary btn-lg">{action.label}</Link>
          </div>
        </div>
      </header>
      <div className="container py-5">
        <div className="col-lg-9">
          {children}
        </div>
      </div>
    </main>
  );
}
