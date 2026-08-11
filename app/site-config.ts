/**
 * Single source of truth for every external identifier the site references.
 * Update values here rather than editing pages directly.
 */

/** Set NEXT_PUBLIC_BASE_PATH to "" when building for a custom domain. */
export const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH ?? "/CLARO-website";

/** Absolute origin the site is served from, without a trailing slash. */
export const siteOrigin =
  process.env.NEXT_PUBLIC_SITE_ORIGIN ?? "https://hoda834.github.io";

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
 * Tags an outbound link so referral traffic from this site is attributable in
 * analytics. Traffic arriving here from AI search already carries its own
 * utm_source (e.g. chatgpt.com), so the two hops can be joined later.
 */
export function withUtm(
  url: string,
  campaign: string,
  medium = "referral",
): string {
  const parsed = new URL(url);
  parsed.searchParams.set("utm_source", "claro_website");
  parsed.searchParams.set("utm_medium", medium);
  parsed.searchParams.set("utm_campaign", campaign);
  return parsed.toString();
}
