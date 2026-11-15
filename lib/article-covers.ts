export const articleCoverSize = { width: 1200, height: 630 };

export const articleCovers = {
  "/blog/sitecore-xp-upgrade-vs-sitecoreai-migration": {
    topic: "Sitecore migration",
    headline: ["Sitecore XP upgrade", "or SitecoreAI migration?"],
    steps: ["Upgrade", "Pilot", "Phased move"],
  },
  "/blog/sitecore-xm-cloud-migration-estimate": {
    topic: "Sitecore migration",
    headline: ["How to estimate an", "XM Cloud migration"],
    steps: ["Inventory", "Pilot", "Estimate"],
  },
  "/blog/sitecore-xm-cloud-migration-checklist": {
    topic: "Sitecore migration",
    headline: ["Sitecore XP to XM Cloud", "migration checklist"],
    steps: ["Scope", "Publish", "Cutover"],
  },
  "/blog/sitecore-nextjs-published-page-404": {
    topic: "Sitecore and Next.js",
    headline: ["Why a published", "Sitecore page returns", "404 in Next.js"],
    steps: ["Language", "Route data", "HTTP response"],
  },
  "/blog/sitecore-cms-guide": {
    topic: "Sitecore platforms",
    headline: ["Sitecore XP, XM, and", "XM Cloud explained"],
    steps: ["XP", "XM", "XM Cloud"],
  },
  "/blog/headless-cms-seo-checklist": {
    topic: "Technical SEO",
    headline: ["Headless CMS SEO", "checklist for Next.js"],
    steps: ["Redirects", "Canonicals", "Languages"],
  },
  "/ai-chatbot-websites": {
    topic: "Website chatbots",
    headline: ["How website chatbots", "capture qualified leads"],
    steps: ["Question", "Enquiry", "Handoff"],
  },
  "/ai-modern-web-development": {
    topic: "AI and headless CMS",
    headline: ["Where AI fits in", "Next.js websites"],
    steps: ["CMS content", "Next.js", "AI feature"],
  },
};

export function articleCoverSlug(path: string) {
  return path.slice(1).replaceAll("/", "-");
}
