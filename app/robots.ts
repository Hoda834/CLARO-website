import type { MetadataRoute } from "next";
import { siteUrl } from "./site-config";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // AI answer engines and classic search crawlers are all welcome: the
      // point of this page is to be quotable, not just indexable.
      { userAgent: "*", allow: "/" },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
