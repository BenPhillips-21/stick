import type { MetadataRoute } from "next";
import { getSiteUrl } from "../lib/site-url";

/** Public App Router pages — add entries here when new routes ship. */
const PUBLIC_PATHS: MetadataRoute.Sitemap = [
  {
    url: "/",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
  },
  {
    url: "/weatherboard-repair",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    url: "/deck-builders",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    url: "/fence-gate-installation",
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  return PUBLIC_PATHS.map((entry) => {
    const path = entry.url === "/" ? "" : entry.url;
    return { ...entry, url: `${base}${path}` };
  });
}
