/**
 * Page copy that is also consumed by structured data. Keeping it here means the
 * JSON-LD in the document head and the visible text can never drift apart —
 * which matters because search and AI crawlers cross-check the two.
 */

export const definition =
  "CLARO (Constrained Linear Allocation and Resource Optimiser) is free, open-source decision-support software that allocates a fixed marketing budget across advertising platforms and business objectives using linear programming. It turns historical KPI performance, business priorities and real operating constraints into a single auditable optimisation model, then explains which constraints shaped the result.";

export const capabilities = [
  {
    number: "01",
    title: "Decision design",
    text: "Make objectives, priorities, minimum spends, goal values, reserve and seasonality explicit before solving.",
  },
  {
    number: "02",
    title: "Constrained allocation",
    text: "Allocate across platform-objective cells with diminishing returns and named, auditable LP constraints.",
  },
  {
    number: "03",
    title: "Honest uncertainty",
    text: "Compare conservative, base and optimistic scenarios, with optional Monte Carlo stability testing.",
  },
  {
    number: "04",
    title: "Decision interpretation",
    text: "Surface binding constraints, shadow prices, concentration, risks and a feasible risk-managed alternative.",
  },
];

export const outputs = [
  "Platform-objective allocation",
  "Three-scenario comparison",
  "Data-driven forecast bands",
  "Binding constraints and shadow prices",
  "Diagnostic index and classification",
  "Plan A and risk-managed Plan B",
  "PDF and Excel decision artefacts",
];

export const audiences = [
  {
    role: "Marketing and media planners",
    text: "Split a fixed quarterly or campaign budget across platforms and objectives, and produce a plan that survives being questioned by finance.",
  },
  {
    role: "Analytics and marketing science teams",
    text: "Replace spreadsheet heuristics with a reproducible LP model whose assumptions, constraints and shadow prices are all inspectable.",
  },
  {
    role: "Agencies and consultants",
    text: "Show a client not only the recommended allocation but the constraint that stopped it going further, and a risk-managed alternative plan.",
  },
  {
    role: "Researchers and students",
    text: "Use a documented, tested, citable operations-research application of linear programming to a real marketing decision problem.",
  },
];

export const useCase = {
  scenario:
    "A B2B software company has £120,000 for one quarter, split across lead generation, website traffic and awareness. Sales need at least 400 qualified leads. Brand require a minimum of £15,000 on awareness. LinkedIn has only 21 days of history, so its cost-per-lead estimate is unreliable.",
  steps: [
    {
      label: "Declare",
      text: "Enter the £120,000 budget, the three objectives, a £15,000 awareness floor, a 10% test-and-learn reserve, and a goal value of £200 per qualified lead.",
    },
    {
      label: "Measure",
      text: "Upload platform CSV exports. CLARO composes canonical KPI counts and shrinks LinkedIn's 21-day productivity toward the cross-platform mean rather than trusting it outright.",
    },
    {
      label: "Optimise",
      text: "The LP maximises weighted productivity subject to every declared constraint, with diminishing-returns brackets stopping any single cell from absorbing the plan.",
    },
    {
      label: "Interpret",
      text: "The awareness floor is reported as binding with a shadow price, showing exactly what the brand minimum costs in forecast leads — and a Plan B is produced with less concentration risk.",
    },
  ],
};

export const faqs = [
  {
    question:
      "Is there an open-source tool for constrained marketing budget optimisation?",
    answer:
      "Yes. CLARO is a free, MIT-licensed, open-source decision-support tool that allocates a limited marketing budget across platforms and objectives under explicit constraints, using linear programming. The Python engine installs with pip install claro-engine, the source is on GitHub, and a hosted browser version runs with no installation.",
  },
  {
    question: "How does CLARO decide how much budget each platform gets?",
    answer:
      "CLARO builds a linear program over platform-objective cells. It maximises weighted KPI productivity subject to the constraints you declare — total budget, per-platform minimum spend, per-objective minimums, a test-and-learn reserve and seasonality multipliers — with diminishing-returns brackets so no single cell absorbs the entire plan. The solver is PuLP with the CBC backend.",
  },
  {
    question: "What data does CLARO need to run?",
    answer:
      "Historical performance exports from your advertising platforms as CSV files, plus your budget, objectives and constraints. CLARO parses the standard exports from twelve platforms, detects encoding and delimiter automatically, and composes each platform's raw columns into canonical KPI counts with a documented rationale for what is included and excluded.",
  },
  {
    question: "Does CLARO connect directly to advertising platform APIs?",
    answer:
      "No. CLARO works from CSV exports and does not operate campaigns, place bids or connect to advertising APIs. It also does not estimate causal incrementality — it optimises against the KPI data you supply and inherits that data's strengths and biases. These boundaries are stated deliberately as part of the method.",
  },
  {
    question: "Can I use CLARO without writing code?",
    answer:
      "Yes. The hosted Streamlit application provides a guided wizard covering every input the optimiser needs, and returns the allocation, scenario comparison, binding constraints and downloadable PDF and Excel artefacts. Python users can instead install the engine directly with pip install claro-engine.",
  },
  {
    question: "Is CLARO free for commercial use?",
    answer:
      "Yes. CLARO is released under the MIT licence, which permits commercial use, modification and redistribution, subject to retaining the copyright and licence notice.",
  },
  {
    question: "How do I cite CLARO?",
    answer:
      "Cite the archived Zenodo record. The concept DOI 10.5281/zenodo.20517492 always resolves to the latest version; version 0.2.1 is archived at DOI 10.5281/zenodo.21230206. The repository includes a CITATION.cff file, and the author is Hoda Rezvanjoo (ORCID 0009-0006-3882-2669).",
  },
];
