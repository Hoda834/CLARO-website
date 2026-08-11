# CLARO — Open-source Marketing Budget Optimisation and Decision-Support Software

**Website:** https://hoda834.github.io/CLARO-website/

CLARO (Constrained Linear Allocation and Resource Optimiser) is free, open-source
decision-support software that allocates a fixed marketing budget across advertising
platforms and business objectives using linear programming. It turns historical KPI
performance, business priorities and real operating constraints into a single auditable
optimisation model, then explains which constraints shaped the result.

This repository holds the **public website** for CLARO. The optimisation engine itself
lives in a separate repository, linked below.

## Use CLARO

| | |
|---|---|
| Run it in a browser | https://claro-decision-support.streamlit.app/ |
| Install the Python engine | `pip install claro-engine` ([PyPI](https://pypi.org/project/claro-engine/)) |
| Source code | https://github.com/Hoda834/digital-budget-optimisation-engine |
| Documentation | https://github.com/Hoda834/digital-budget-optimisation-engine/wiki |
| Archived release | [doi:10.5281/zenodo.20517492](https://doi.org/10.5281/zenodo.20517492) |

## What CLARO does

Given a fixed budget, a set of marketing objectives and historical platform performance,
CLARO solves a linear program over platform-objective cells. It maximises weighted KPI
productivity subject to constraints you declare explicitly — total budget, per-platform
minimum spend, per-objective minimums, a test-and-learn reserve, seasonality multipliers,
and diminishing-returns brackets — and reports the binding constraints and shadow prices
that shaped the answer.

It does **not** operate campaigns, connect to advertising APIs, or estimate causal
incrementality. It works from CSV exports and inherits the strengths and biases of the
KPI data supplied.

Licence: MIT, free for commercial use. Solver: PuLP with the CBC backend.
Author: Hoda Rezvanjoo ([ORCID 0009-0006-3882-2669](https://orcid.org/0009-0006-3882-2669)).

## Citation

> Rezvanjoo, Hoda. *CLARO: Constrained Linear Allocation and Resource Optimiser — a
> Decision-Support Framework for Marketing Budget Allocation*. Version 0.2.1. Zenodo.
> [doi:10.5281/zenodo.21230206](https://doi.org/10.5281/zenodo.21230206)

The concept DOI [10.5281/zenodo.20517492](https://doi.org/10.5281/zenodo.20517492) always
resolves to the latest version. A `CITATION.cff` file is included in the engine
repository.

---

# Website development

Everything below concerns building this website, not CLARO itself.

## Stack

Next.js 16 (App Router) exported as a static site, deployed to GitHub Pages by
`.github/workflows/deploy.yml` on every push to `main`.

## Run locally

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000/CLARO-website`.

## Build the static bundle

```bash
npm run build
```

The exported site is written to `out/`.

## Configuration

The build reads three optional environment variables, set as **repository variables**
under Settings → Secrets and variables → Actions → Variables:

| Variable | Default | Purpose |
|---|---|---|
| `NEXT_PUBLIC_BASE_PATH` | `/CLARO-website` | Path prefix. Set to an empty string when serving from a custom domain root. |
| `NEXT_PUBLIC_SITE_ORIGIN` | `https://hoda834.github.io` | Origin used for canonical URLs, Open Graph and JSON-LD. |
| `NEXT_PUBLIC_GA_ID` | unset | Google Analytics 4 measurement ID (`G-XXXXXXXXXX`). Analytics is omitted entirely when unset. |

External identifiers (DOIs, PyPI, ORCID, repository URLs) live in `app/site-config.ts`.
Page copy that is also used in structured data lives in `app/content.ts`, so the visible
text and the JSON-LD cannot drift apart.

## First-time GitHub Pages setup

In Settings → Pages, set **Source** to **GitHub Actions**. Without this, Pages serves the
repository root through Jekyll and visitors see this README instead of the site.

## Custom domain

1. Add the domain in Settings → Pages → Custom domain, which commits a `CNAME` file.
2. Create the DNS records GitHub shows there (a `CNAME` record pointing at
   `hoda834.github.io` for a subdomain such as `claro.hodarezvanjoo.com`).
3. Set the repository variable `NEXT_PUBLIC_BASE_PATH` to an empty string and
   `NEXT_PUBLIC_SITE_ORIGIN` to `https://your.domain`, then re-run the deploy workflow.
4. Enable **Enforce HTTPS** once the certificate is issued.

Step 3 matters: on a custom domain the site is served from the root, so leaving the base
path in place would break every asset URL.

## Analytics

When `NEXT_PUBLIC_GA_ID` is set, GA4 loads with enhanced measurement, which records
outbound clicks automatically. Every outbound link on the page is tagged with
`utm_source=claro_website` and a per-placement `utm_campaign`, so referrals into the
optimiser and the repository are attributable. Traffic arriving from AI search carries its
own `utm_source` (for example `chatgpt.com`), which makes the full
AI search → website → optimiser path measurable.

## Discoverability

- `app/layout.tsx` emits a JSON-LD `@graph` covering `SoftwareApplication`,
  `SoftwareSourceCode`, `WebApplication`, `Person`, `WebSite`, `FAQPage` and the archived
  release.
- `app/robots.ts` and `app/sitemap.ts` generate `robots.txt` and `sitemap.xml` at build
  time. Note that crawlers only honour `robots.txt` at a domain root, so it becomes fully
  effective once a custom domain is in use.
- `public/llms.txt` gives AI crawlers a plain-text summary of what CLARO is, what it does
  not do, who it is for, and how to cite it.

## Licence

MIT.
