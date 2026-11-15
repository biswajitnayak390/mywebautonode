import { sitePageMetadata } from "@/lib/site";
import LeadForm from "@/components/LeadForm";

export const metadata = sitePageMetadata(
  "/contact",
  "Discuss a Sitecore or Headless CMS Project",
  "Tell AutonodeAI about a Sitecore migration, headless CMS build, Next.js website, or AI integration. Share your goals and the main decision you need help with.",
);

export default function ContactPage() {
  return (
    <main className="section-pad section-soft">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="cta-banner">
              <span className="eyebrow mb-3">Contact</span>
              <h1 className="section-title mb-3">Tell us about your project</h1>
              <p className="section-copy mb-4">
                Share what you’re working on and where you need help.
              </p>
              <LeadForm source="contact" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
