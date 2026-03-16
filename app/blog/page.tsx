import Link from "next/link";

export default function BlogPage() {
  return (
    <main className="section-pad page-top-space">
      <div className="container">
        <h1 className="section-title mb-4">AutonodeAI Blog</h1>

        <ul>
          <li>
            <Link href="/blog/sitecore-cms-guide">What is Sitecore CMS?</Link>
          </li>

          <li>
            <Link href="/blog/ai-chatbot-websites">
              AI Chatbots for Websites
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
