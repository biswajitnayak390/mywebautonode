import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { SITE_URL } from "@/lib/site";

type ArticleDetails = {
  path: string;
  title: string;
  description: string;
  published?: string;
  updated?: string;
};

export function articleMetadata(article: ArticleDetails): Metadata {
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: article.path },
    openGraph: {
      type: "article",
      url: article.path,
      title: article.title,
      description: article.description,
      siteName: "AutonodeAI",
      publishedTime: article.published,
      modifiedTime: article.updated,
    },
    twitter: {
      card: "summary",
      title: article.title,
      description: article.description,
    },
  };
}

export default function BlogArticle({
  details,
  children,
}: {
  details: ArticleDetails;
  children: ReactNode;
}) {
  const date = details.updated ?? details.published;
  const displayDate = date && new Intl.DateTimeFormat("en-IN", {
    dateStyle: "long",
    timeZone: "Asia/Kolkata",
  }).format(new Date(date));
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: details.title,
    description: details.description,
    mainEntityOfPage: new URL(details.path, SITE_URL).href,
    author: { "@type": "Organization", name: "AutonodeAI", url: new URL("/about", SITE_URL).href },
    datePublished: details.published,
    dateModified: details.updated,
  };

  return (
    <main className="section-pad">
      <article className="container" style={{ maxWidth: 850 }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
        />
        <header className="mb-4">
          <Link href="/blog" className="text-link d-inline-block mb-3">All articles</Link>
          <h1 className="section-title">{details.title}</h1>
          {date && (
            <p className="text-muted mb-0">
              {details.updated ? "Updated " : ""}
              <time dateTime={date}>{displayDate}</time>
            </p>
          )}
        </header>
        <div className="section-copy">{children}</div>
      </article>
    </main>
  );
}
