import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact AutonodeAI for websites, Sitecore development, headless CMS migration, AI integrations, and technical SEO support.'
};

export default function ContactPage() {
  return (
    <main className="section-pad page-top-space">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="cta-banner">
              <span className="eyebrow mb-3">Contact</span>
              <h1 className="section-title mb-3">Ready to discuss your website, Sitecore project, or CMS migration?</h1>
              <p className="section-copy mb-4">
                Email contact@autonodeai.com or use the “Book a discovery call” button in the header to open the project enquiry form.
              </p>
              <a className="btn btn-brand-primary" href="mailto:contact@autonodeai.com">contact@autonodeai.com</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
