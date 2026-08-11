/**
 * Single source of truth for every external identifier the site references.
 * Update values here rather than editing pages directly.
 */

/**
 * An undefined GitHub Actions repository variable arrives as an empty string,
 * not as undefined, so `??` never falls back. Treat empty as "not set" and use
 * the sentinel "/" to mean "serve from the root of a custom domain".
 */
function readBasePath(): string {
  const value = process.env.NEXT_PUBLIC_BASE_PATH;
  if (value === undefined || value === "") return "/CLARO-website";
  return value === "/" ? "" : value.replace(/\/$/, "");
}

export const basePath = readBasePath();

/** Absolute origin the site is served from, without a trailing slash. */
export const siteOrigin =
  process.env.NEXT_PUBLIC_SITE_ORIGIN || "https://hoda834.github.io";

export const siteUrl = `${siteOrigin}${basePath}`;

export const gaMeasurementId = process.env.NEXT_PUBLIC_GA_ID ?? "";

export const appUrl = "https://claro-decision-support.streamlit.app/";
export const repoUrl =
  "https://github.com/Hoda834/digital-budget-optimisation-engine";
export const wikiUrl = `${repoUrl}/wiki`;
export const pypiUrl = "https://pypi.org/project/claro-engine/";
export const conceptDoiUrl = "https://doi.org/10.5281/zenodo.20517492";
export const versionDoiUrl = "https://doi.org/10.5281/zenodo.21230206";
export const orcidUrl = "https://orcid.org/0009-0006-3882-2669";
export const authorSite = "https://hodarezvanjoo.com";
export const citationFileUrl = `${repoUrl}/blob/main/CITATION.cff`;

export const release = {
  version: "0.2.1",
  licence: "MIT",
  pythonRequirement: ">=3.10",
  solver: "PuLP / CBC",
  platformCount: 12,
  testCount: 243,
};

export const author = {
  name: "Hoda Rezvanjoo",
  orcid: orcidUrl,
  site: authorSite,
};

/**
 * Tags an outbound link.
 *
 * utm_source is the visitor's ORIGINAL source, passed straight through, so a
 * visit that began in ChatGPT still reads as chatgpt.com once it reaches the
 * optimiser. utm_medium is always claro_website, which is what separates
 * traffic routed through this site from someone opening the Streamlit link
 * directly out of the README. utm_campaign is the placement that was clicked.
 *
 * Only pass a source for links into our own app. Third-party destinations
 * (GitHub, PyPI) cannot report these parameters back to us anyway.
 */
export function withUtm(
  url: string,
  campaign: string,
  source = "claro_website",
): string {
  const parsed = new URL(url);
  parsed.searchParams.set("utm_source", source);
  parsed.searchParams.set("utm_medium", "claro_website");
  parsed.searchParams.set("utm_campaign", campaign);
  return parsed.toString();
}
