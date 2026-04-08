/**
 * Canonical site origin for sitemap, robots, and metadata.
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://www.example.com).
 * Netlify provides URL at build time; Vercel provides VERCEL_URL.
 */
export function getSiteUrl(): string {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "") ||
    "http://localhost:3000";
  return raw.replace(/\/$/, "");
}
