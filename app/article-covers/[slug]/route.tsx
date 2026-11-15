import { ImageResponse } from "next/og";
import { articleCovers, articleCoverSize, articleCoverSlug } from "@/lib/article-covers";
import { SITE_NAME } from "@/lib/site";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(articleCovers).map((path) => ({ slug: articleCoverSlug(path) }));
}

export function GET(
  _request: Request,
  { params }: { params: { slug: string } },
) {
  const cover = Object.entries(articleCovers).find(([path]) => articleCoverSlug(path) === params.slug)?.[1];
  if (!cover) return new Response(null, { status: 404 });

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "58px 64px",
          backgroundImage: "linear-gradient(110deg, #0f172a 10%, #152d5d 100%)",
          color: "#f8fafc",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", width: 755 }}>
          <div style={{ display: "flex", alignItems: "center", marginBottom: 46, fontSize: 27, fontWeight: 700 }}>
            <span style={{ display: "flex", width: 21, height: 21, borderRadius: 11, marginRight: 12, backgroundColor: "#60a5fa" }} />
            {SITE_NAME}
          </div>
          <div style={{ display: "flex", color: "#bfdbfe", fontSize: 26, letterSpacing: 2, marginBottom: 18, textTransform: "uppercase" }}>
            {cover.topic}
          </div>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 58, fontWeight: 700, lineHeight: 1.15 }}>
            {cover.headline.map((line) => (
              <div key={line} style={{ display: "flex" }}>{line}</div>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", width: 275, paddingLeft: 24, borderLeft: "2px solid #426699" }}>
          {cover.steps.map((step) => (
            <div
              key={step}
              style={{
                display: "flex",
                alignItems: "center",
                margin: "8px 0",
                padding: "18px 16px",
                border: "1px solid #426699",
                borderRadius: 15,
                backgroundColor: "#162a51",
                color: "#dbeafe",
                fontSize: 25,
                fontWeight: 700,
              }}
            >
              <div style={{ display: "flex", width: 9, height: 9, borderRadius: 5, marginRight: 12, backgroundColor: "#93c5fd" }} />
              {step}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...articleCoverSize,
      headers: { "Cache-Control": "public, max-age=3600, s-maxage=86400" },
    },
  );
}
