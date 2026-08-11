/**
 * Works out where a visitor originally came from, so that the source survives
 * the hop into the Streamlit optimiser instead of being overwritten.
 *
 * First touch wins. Once a source is resolved it is kept for the session, so
 * clicking an in-page anchor does not rewrite chatgpt.com to direct.
 */

const STORAGE_KEY = "claro.source";
const DIRECT = "direct";

/** Referrer host patterns, checked in order. First match wins. */
const REFERRERS: Array<[RegExp, string]> = [
  [/(^|\.)chatgpt\.com$/, "chatgpt.com"],
  [/(^|\.)chat\.openai\.com$/, "chatgpt.com"],
  [/(^|\.)perplexity\.ai$/, "perplexity.ai"],
  [/(^|\.)claude\.ai$/, "claude.ai"],
  [/(^|\.)gemini\.google\.com$/, "gemini"],
  [/(^|\.)copilot\.microsoft\.com$/, "copilot"],
  [/(^|\.)google\./, "google"],
  [/(^|\.)bing\.com$/, "bing"],
  [/(^|\.)duckduckgo\.com$/, "duckduckgo"],
  [/(^|\.)linkedin\.com$/, "linkedin"],
  [/(^|\.)github\.com$/, "github"],
  [/(^|\.)zenodo\.org$/, "zenodo"],
  [/(^|\.)pypi\.org$/, "pypi"],
  [/(^|\.)sciencedirect\.com$/, "softwarex"],
  [/(^|\.)towardsdatascience\.com$/, "tds"],
  [/(^|\.)medium\.com$/, "medium"],
  [/(^|\.)theorsociety\.com$/, "orsociety"],
];

/** Analytics dimensions are a small vocabulary, not free text. */
function sanitise(value: string | null): string {
  if (!value) return "";
  return value.trim().toLowerCase().replace(/[^a-z0-9._-]/g, "").slice(0, 40);
}

function fromReferrer(referrer: string): string {
  if (!referrer) return "";
  let host: string;
  try {
    host = new URL(referrer).hostname.toLowerCase();
  } catch {
    return "";
  }
  if (host === window.location.hostname) return "";
  for (const [pattern, label] of REFERRERS) {
    if (pattern.test(host)) return label;
  }
  return sanitise(host.replace(/^www\./, ""));
}

function readStored(): string {
  try {
    return sessionStorage.getItem(STORAGE_KEY) ?? "";
  } catch {
    return "";
  }
}

function store(source: string): void {
  try {
    sessionStorage.setItem(STORAGE_KEY, source);
  } catch {
    /* private mode or storage disabled: not worth failing over */
  }
}

/**
 * Order: an explicit utm_source on the landing URL, then the stored first
 * touch, then the referrer, then direct. Returns "direct" during prerender.
 */
export function resolveSource(): string {
  if (typeof window === "undefined") return DIRECT;

  const explicit = sanitise(
    new URLSearchParams(window.location.search).get("utm_source"),
  );
  if (explicit) {
    store(explicit);
    return explicit;
  }

  const stored = readStored();
  if (stored) return stored;

  const referred = fromReferrer(document.referrer);
  if (referred) {
    store(referred);
    return referred;
  }

  store(DIRECT);
  return DIRECT;
}
