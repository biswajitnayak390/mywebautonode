import Link from "next/link";
import ServicePage, { serviceMetadata } from "@/components/ServicePage";

const service = {
  path: "/headless-cms-development",
  title: "Headless CMS Development with Next.js",
  description:
    "Build or migrate a headless CMS website with Next.js. Plan content models, editorial preview, reliable publishing, redirects, and technical SEO before launch.",
};

export const metadata = serviceMetadata(service);

export default function HeadlessCmsDevelopmentPage() {
  return (
    <ServicePage
      service={service}
      lead="Build a Next.js frontend that your editors can manage in Sitecore, Contentful, Strapi, or a headless WordPress setup. AutonodeAI helps define the content models, connect preview and publishing, and check the site that visitors and search engines receive."
      action={{ href: "/contact", label: "Discuss your headless CMS project" }}
    >
      <section className="mb-5">
        <h2 className="h3 mb-3">Choose a CMS around your editorial workflow</h2>
        <p className="section-copy mb-0">
          Start with the roles, languages, review steps, and content types your
          site needs. If you already use Sitecore or WordPress, test whether
          the existing CMS can support the new frontend. If you’re evaluating
          Contentful or Strapi, compare who would operate the platform, how
          permissions work, and whether editors can preview the content they
          publish. See the{" "}
          <Link href="/technologies">CMS platforms and frontend technologies we work with</Link>
          {" "}if you’re comparing options.
        </p>
      </section>
      <section className="mb-5">
        <h2 className="h3 mb-3">From content model to live page</h2>
        <ul className="section-copy ps-3 mb-0">
          <li className="mb-2"><strong>Content design.</strong> Define page, navigation, media, and reusable component models with the people who will create and maintain them.</li>
          <li className="mb-2"><strong>Frontend and preview.</strong> Connect a sample content type to Next.js. Confirm that draft and published views display the appropriate versions.</li>
          <li className="mb-2"><strong>Publishing and caching.</strong> Check how publishing changes the public page, how the frontend revalidates content, and what users see if the CMS or integration is unavailable.</li>
          <li><strong>Launch checks.</strong> Test page status codes, canonical tags, navigation, image loading, redirects, and successful form submissions on representative URLs.</li>
        </ul>
      </section>
      <section>
        <h2 className="h3 mb-3">Start with one representative page</h2>
        <p className="section-copy">
          A useful pilot includes a common page template, a translated page if
          you operate in multiple languages, and one content update that an
          editor can publish independently. Measure how the frontend behaves
          before you move the rest of the site.
        </p>
        <p className="section-copy mb-0">
          Use the URL test matrix in the{" "}
          <Link href="/blog/headless-cms-seo-checklist">Next.js headless CMS SEO checklist</Link>
          {" "}to agree which redirects, language pairs, and published pages to
          verify before launch. For an existing Sitecore
          installation, see our{" "}
          <Link href="/sitecore-development">Sitecore development services</Link>.
        </p>
      </section>
    </ServicePage>
  );
}
