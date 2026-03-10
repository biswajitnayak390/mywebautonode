import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About',
  description: 'AutonodeAI helps brands launch modern websites, Sitecore and headless CMS platforms, AI-enhanced forms, and stronger technical SEO foundations.'
};

export default function AboutPage() {
  return (
    <main className="section-pad page-top-space">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <span className="eyebrow mb-3">About AutonodeAI</span>
            <h1 className="section-title mb-3">A digital service brand positioned around quality, clarity, and technical depth.</h1>
            <p className="section-copy mb-4">
              AutonodeAI is designed to present a stronger first impression for clients who want more than a generic brochure site. The positioning now highlights modern website delivery, Sitecore and CMS capability, AI integration, and technical SEO in a cleaner visual style.
            </p>
            <p className="section-copy mb-0">
              This makes the site more credible for technology decision-makers, marketing teams, and service businesses comparing multiple vendors.
            </p>
          </div>
          <div className="col-lg-6">
            <Image src="/images/devices.jpg" alt="Modern workstation and devices for web engineering" width={1200} height={900} className="content-image" />
          </div>
        </div>
      </div>
    </main>
  );
}
