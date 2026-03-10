import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Services',
  description: 'AutonodeAI services include modern website design, Sitecore development, WordPress builds, headless CMS migration, AI integration, and technical SEO support.'
};

const services = [
  {
    title: 'Website Design & Rebuilds',
    text: 'Professional websites for technology companies, digital agencies, consultants, and service businesses that need stronger credibility and lead generation.',
    image: '/images/hero.jpg'
  },
  {
    title: 'Sitecore & Enterprise CMS Services',
    text: 'Sitecore implementation, component development, front-end modernization, and digital experience engineering for enterprise-grade use cases.',
    image: '/images/workspace.jpg'
  },
  {
    title: 'Headless CMS & Modern Frontends',
    text: 'Composable architectures using Next.js, Contentful, Strapi, and API-driven content delivery for speed and flexibility.',
    image: '/images/coding.jpg'
  },
  {
    title: 'WordPress & Marketing Sites',
    text: 'High-quality marketing websites that still need modern design standards, technical SEO, and stronger conversion structure.',
    image: '/images/devices.jpg'
  },
  {
    title: 'AI Website Features',
    text: 'Discovery forms, AI assistants, customer support automation, and intelligent workflows that reduce friction for prospects.',
    image: '/images/ai.jpg'
  },
  {
    title: 'SEO & Performance Foundations',
    text: 'Metadata strategy, content structure, schema, optimized images, page speed improvements, and crawl-friendly technical setup.',
    image: '/images/hero.jpg'
  }
];

export default function ServicesPage() {
  return (
    <main className="section-pad page-top-space">
      <div className="container">
        <span className="eyebrow mb-3">Services</span>
        <h1 className="section-title mb-3">Modern digital services for brands that need a more professional online presence.</h1>
        <p className="section-copy mb-5">AutonodeAI combines design polish, CMS knowledge, and implementation quality so the website does not feel generic or outdated.</p>
        <div className="row g-4">
          {services.map((service) => (
            <div className="col-lg-4 col-md-6" key={service.title}>
              <article className="service-card-light h-100">
                <Image src={service.image} alt={service.title} width={900} height={600} className="card-thumb-light w-100" />
                <div className="card-body-custom p-4">
                  <h2 className="card-title-dark">{service.title}</h2>
                  <p className="card-copy-dark mb-0">{service.text}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
