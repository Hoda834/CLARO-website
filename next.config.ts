import type { NextConfig } from "next";

// GitHub Pages serves this project from https://<user>.github.io/CLARO-website/,
// so assets need a base path. Set NEXT_PUBLIC_BASE_PATH to an empty string when
// building for a custom domain, where the site is served from the root.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/CLARO-website";

const nextConfig: NextConfig = {
  // Pages has no Node runtime — the site must be a pre-rendered static bundle.
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
