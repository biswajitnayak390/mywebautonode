import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Platforms & Technologies',
  description: 'AutonodeAI works with Sitecore, WordPress, Contentful, Strapi, Next.js, React, .NET, Bootstrap, and AI integrations for modern digital experiences.'
};

const tech = [
  ['Sitecore', 'Enterprise CMS, DXP implementation, component engineering, and modern front-end integration.'],
  ['WordPress', 'Flexible business and marketing websites with improved structure, design, and SEO.'],
  ['Contentful', 'Composable content architecture for fast and scalable digital experiences.'],
  ['Strapi', 'Open headless CMS setup for custom content-driven platforms.'],
  ['Next.js & React', 'Modern front-end development for speed, UX, and search visibility.'],
  ['.NET', 'Backend services, integrations, APIs, and enterprise-grade engineering.'],
  ['Bootstrap Dashboard UI', 'Reliable responsive grid and component structure with modern custom styling.'],
  ['AI Integrations', 'Lead capture automation, assistants, and intelligent customer interactions.']
];

export default function TechnologiesPage() {
  return (
    <main className="section-pad page-top-space">
      <div className="container">
        <span className="eyebrow mb-3">Platforms & technologies</span>
        <h1 className="section-title mb-3">The stack now clearly reflects Sitecore and other CMS expertise.</h1>
        <p className="section-copy mb-5">This page is also useful for SEO because it expands the platform footprint beyond generic “web development” wording.</p>
        <div className="row g-4">
          {tech.map(([name, desc]) => (
            <div className="col-md-6" key={name}>
              <div className="platform-card h-100">
                <strong>{name}</strong>
                <span>{desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
