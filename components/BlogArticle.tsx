import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { articleCovers, articleCoverSize, articleCoverSlug } from "@/lib/article-covers";
import { ORGANIZATION_ID, SITE_NAME, SITE_URL } from "@/lib/site";

type ArticleDetails = {
  path: string;
  title: string;
  description: string;
  published?: string;
  updated?: string;
};

const articleDateFormatter = new Intl.DateTimeFormat("en-IN", {
  dateStyle: "long",
  timeZone: "Asia/Kolkata",
});

function articleImage({ path, title }: ArticleDetails) {
  if (!Object.hasOwn(articleCovers, path)) return undefined;

  return {
    url: new URL(`/article-covers/${articleCoverSlug(path)}`, SITE_URL).href,
    alt: title,
    ...articleCoverSize,
  };
}

export function articleMetadata(article: ArticleDetails): Metadata {
  const image = articleImage(article);
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: article.path },
    openGraph: {
      type: "article",
      url: article.path,
      title: article.title,
      description: article.description,
      siteName: SITE_NAME,
      publishedTime: article.published,
      modifiedTime: article.updated,
      images: image ? [{ ...image, type: "image/png" }] : undefined,
    },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      title: article.title,
      description: article.description,
      images: image ? [{ url: image.url, alt: image.alt }] : undefined,
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
  const { published, updated } = details;
  const image = articleImage(details);
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: details.title,
    description: details.description,
    mainEntityOfPage: new URL(details.path, SITE_URL).href,
    image: image ? [image.url] : undefined,
    author: {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: SITE_NAME,
      url: new URL("/about", SITE_URL).href,
    },
    publisher: { "@id": ORGANIZATION_ID },
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
          <p className="text-muted mb-0">
            By <Link href="/about">{SITE_NAME}</Link>
            {published && published !== updated && (
              <>
                {" · Published "}
                <time dateTime={published}>{articleDateFormatter.format(new Date(published))}</time>
              </>
            )}
            {updated && (
              <>
                {" · Updated "}
                <time dateTime={updated}>{articleDateFormatter.format(new Date(updated))}</time>
              </>
            )}
          </p>
        </header>
        <div className="section-copy">{children}</div>
      </article>
    </main>
  );
}
