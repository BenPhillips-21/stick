export default async function handler(request: Request, context: { rewrite: (url: string | URL) => Response | Promise<Response> }) {
  const url = new URL(request.url);

  // No query params — nothing to do, pass through to CDN normally
  if (!url.search) {
    return;
  }

  // Strip query params so the CDN sees the exact cached key: /decks
  // context.rewrite() is an internal server-side rewrite — the browser URL bar
  // is untouched, so client-side scripts (GA4, Meta Pixel) still read the
  // original query string from window.location.search
  const cleanUrl = new URL(url);
  cleanUrl.search = "";

  return context.rewrite(cleanUrl.toString());
}

export const config = {
  path: "/decks",
};
