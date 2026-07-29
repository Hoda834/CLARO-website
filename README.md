# CLARO Website

The public-facing website for CLARO, the Constrained Linear Allocation and
Resource Optimiser.

CLARO is an open-source linear programming framework for defensible marketing
budget allocation. This website explains the decision problem, method,
capabilities, evidence and scope, and links to the live optimiser and source
project.

## Run locally

Requirements:

- Node.js 20 or newer
- npm

Install and start the development server:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm start
```

## Publish

The repository is ready for deployment through Vercel. Import the GitHub
repository into Vercel and keep the detected framework as Next.js. No
environment variables are required.

To use a custom domain, add it in the hosting provider after deployment and
follow the DNS instructions shown there.

## Project links

- Live optimiser: https://claro-decision-support.streamlit.app/
- Main source repository: https://github.com/Hoda834/digital-budget-optimisation-engine
- Documentation: https://github.com/Hoda834/digital-budget-optimisation-engine/wiki
- DOI: https://doi.org/10.5281/zenodo.20517492

## Licence

The website source is provided for the CLARO project. Add your preferred
licence before accepting external contributions.
