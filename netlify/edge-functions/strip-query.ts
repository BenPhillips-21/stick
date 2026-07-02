export default async function handler(
  request: Request,
  context: { rewrite(url: string | URL): Response | Promise<Response> }
) {
  const url = new URL(request.url);

  // No query string — serve normally, nothing to do
  if (!url.search) return;

  // Strip query params so the CDN cache key is always the clean /decks path.
  // context.rewrite() is a server-side internal rewrite — the browser address
  // bar is never touched, so window.location.search still contains the full
  // original query string for GA4, Meta Pixel, and Google Ads conversion tags.
  const clean = new URL(url);
  clean.search = '';
  return context.rewrite(clean);
}

export const config = {
  path: '/decks',
};
