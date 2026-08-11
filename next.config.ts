import type { NextConfig } from "next";

// GitHub Pages serves this project from https://<user>.github.io/CLARO-website/,
// so assets need a base path. Set NEXT_PUBLIC_BASE_PATH to "/" when building for
// a custom domain, where the site is served from the root.
//
// Kept in sync with app/site-config.ts by hand rather than imported, so that
// loading this config never depends on the app graph. Empty means unset:
// GitHub Actions passes undefined repository variables through as "".
const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH?.trim();
const basePath =
  configuredBasePath === "/" ? "" : configuredBasePath || "/CLARO-website";

const nextConfig: NextConfig = {
  // Pages has no Node runtime — the site must be a pre-rendered static bundle.
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
