import Link from "next/link";

export default function BlogPage() {
  return (
    <main className="section-pad page-top-space">
      <div className="container">
        <h1 className="section-title mb-4">AutonodeAI Insights & Articles</h1>

        <ul>
          <li>
            <Link href="/blog/sitecore-cms-guide">What is Sitecore CMS?</Link>
          </li>

          <li>
            <Link href="/blog/ai-chatbot-websites">
              AI Chatbots for Websites
            </Link>
          </li>

          <li>
            <Link href="/sitecore-development">
              Sitecore Development Services
            </Link>
          </li>

          <li>
            <Link href="/sitecore-xm-cloud-development">
              Sitecore XM Cloud Development
            </Link>
          </li>

          <li>
            <Link href="/ai-modern-web-development">
              AI Powered Modern Web Development
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
