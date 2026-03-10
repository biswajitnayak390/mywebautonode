import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer-wrap">
      <div className="container py-5">
        <div className="row g-4 align-items-start">
          <div className="col-lg-5">
            <div className="brand-mark d-inline-flex align-items-center gap-3 mb-3">
              <span className="brand-orb" aria-hidden="true">A</span>
              <span>
                <strong>AutonodeAI</strong>
                <small>AI-Powered Digital Experience Engineering</small>
              </span>
            </div>
            <p className="footer-copy mb-3">
              Premium websites, Sitecore and headless CMS solutions, AI integrations, and technical SEO foundations for brands that want to look credible and scale.
            </p>
            <a href="mailto:contact@autonodeai.com" className="footer-link">contact@autonodeai.com</a>
          </div>
          <div className="col-lg-2 col-md-4">
            <h3 className="footer-heading">Company</h3>
            <div className="d-grid gap-2 small">
              <Link href="/about" className="footer-link">About</Link>
              <Link href="/services" className="footer-link">Services</Link>
              <Link href="/contact" className="footer-link">Contact</Link>
            </div>
          </div>
          <div className="col-lg-2 col-md-4">
            <h3 className="footer-heading">Platforms</h3>
            <div className="d-grid gap-2 small">
              <Link href="/technologies" className="footer-link">Sitecore</Link>
              <Link href="/technologies" className="footer-link">WordPress</Link>
              <Link href="/technologies" className="footer-link">Contentful</Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <h3 className="footer-heading">Capabilities</h3>
            <div className="d-grid gap-2 small">
              <span className="footer-link">Website redesign</span>
              <span className="footer-link">CMS migration</span>
              <span className="footer-link">AI chatbot integration</span>
            </div>
          </div>
        </div>
        <div className="footer-bottom d-flex flex-column flex-md-row justify-content-between gap-2 mt-4 pt-4">
          <span>© {new Date().getFullYear()} AutonodeAI. All rights reserved.</span>
          <span>Designed for modern technology and digital service brands.</span>
        </div>
      </div>
    </footer>
  );
}
