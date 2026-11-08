import { type NextRequest, NextResponse } from "next/server";

const legacyPaths = new Map([
  ["/Headless-cms-development", "/headless-cms-development"],
  ["/blog/headless-cms-guide", "/headless-cms-development"],
  ["/blog/ai-chatbot-websites", "/ai-chatbot-websites"],
]);

export function middleware(request: NextRequest) {
  const destination = legacyPaths.get(request.nextUrl.pathname);
  if (!destination) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = destination;
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: [
    "/Headless-cms-development",
    "/blog/headless-cms-guide",
    "/blog/ai-chatbot-websites",
  ],
};
