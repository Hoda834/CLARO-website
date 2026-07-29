const appUrl = "https://claro-decision-support.streamlit.app/";
const repoUrl = "https://github.com/Hoda834/digital-budget-optimisation-engine";
const wikiUrl = `${repoUrl}/wiki`;
const doiUrl = "https://doi.org/10.5281/zenodo.20517492";

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function ConstraintVisual() {
  return (
    <div className="constraint-visual" aria-label="Linear programming feasible region and allocation path illustration">
      <svg viewBox="0 0 760 610" role="img">
        <title>Optimisation path moving through a constrained feasible region</title>
        <defs>
          <linearGradient id="pathGlow" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="#2f7dff" />
            <stop offset="1" stopColor="#4ed5ff" />
          </linearGradient>
          <linearGradient id="regionFill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#2f7dff" stopOpacity=".18" />
            <stop offset="1" stopColor="#4ed5ff" stopOpacity=".03" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <pattern id="grid" width="52" height="52" patternUnits="userSpaceOnUse">
            <path d="M 52 0 L 0 0 0 52" fill="none" stroke="#203149" strokeWidth="1" />
          </pattern>
        </defs>

        <rect x="54" y="36" width="650" height="520" fill="url(#grid)" opacity=".72" />
        <line x1="54" y1="556" x2="718" y2="556" className="axis" />
        <line x1="54" y1="556" x2="54" y2="22" className="axis" />
        <path d="M54 556 L192 431 L337 267 L525 179 L658 95" className="guide" />
        <path d="M54 556 L225 303 L538 130" className="constraint" />
        <path d="M54 438 L704 221" className="constraint" />
        <path d="M154 556 L407 48" className="constraint soft" />
        <path d="M217 431 L337 267 L525 179 L575 355 L276 448 Z" fill="url(#regionFill)" stroke="#2f7dff" strokeOpacity=".45" />
        <path d="M54 556 C115 526 142 480 192 431 S275 326 337 267 S448 224 525 179" className="optimal-path path-animate" />

        {[
          [54, 556],
          [192, 431],
          [337, 267],
          [525, 179],
        ].map(([cx, cy], index) => (
          <g key={index} className={`node node-${index}`}>
            <circle cx={cx} cy={cy} r="12" fill="#07111f" stroke="#4ed5ff" strokeWidth="2" />
            <circle cx={cx} cy={cy} r="4.5" fill="#4ed5ff" />
          </g>
        ))}
        <circle cx="525" cy="179" r="22" fill="none" stroke="#b9f227" strokeOpacity=".42" />
        <circle cx="525" cy="179" r="8" fill="#b9f227" filter="url(#glow)" />

        <g className="mono-label">
          <text x="65" y="24">x₂</text>
          <text x="719" y="580">x₁</text>
          <text x="385" y="350" className="region-label">FEASIBLE REGION</text>
          <text x="540" y="164" className="lime">BINDING</text>
          <text x="540" y="187">optimal allocation</text>
          <text x="540" y="208" className="lime">z* = 147.8</text>
          <text x="451" y="78">2x₁ + x₂ ≤ 120</text>
          <text x="584" y="240">x₁ + 2x₂ ≤ 100</text>
          <text x="104" y="280">x₂ ≤ 60</text>
        </g>
      </svg>
      <div className="solver-strip" aria-hidden="true">
        <div><span>solver status</span><strong>Optimal</strong></div>
        <div><span>objective</span><strong>Max weighted productivity</strong></div>
        <div><span>method</span><strong>PuLP · CBC</strong></div>
      </div>
    </div>
  );
}

const capabilities = [
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

const outputs = [
  "Platform-objective allocation",
  "Three-scenario comparison",
  "Data-driven forecast bands",
  "Binding constraints and shadow prices",
  "Diagnostic index and classification",
  "Plan A and risk-managed Plan B",
  "PDF and Excel decision artefacts",
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="CLARO home">CLARO</a>
        <nav aria-label="Primary navigation">
          <a href="#method">How it works</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#evidence">Evidence</a>
          <a href={wikiUrl} target="_blank" rel="noreferrer">Documentation</a>
        </nav>
        <a className="icon-link" href={repoUrl} target="_blank" rel="noreferrer" aria-label="View CLARO on GitHub">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .8a11.4 11.4 0 0 0-3.6 22.2c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.4-1.3-5.4-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0C17 4.9 18 5.2 18 5.2c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.4 5.7.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6A11.4 11.4 0 0 0 12 .8Z" /></svg>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Linear programming. Defensible allocation.</p>
          <h1>Allocate with constraints.<br />Decide with evidence.</h1>
          <p className="hero-text">
            An open-source decision-support framework for marketing budget allocation. CLARO connects historical performance, business priorities and uncertainty in one auditable model.
          </p>
          <div className="button-row">
            <a className="button primary" href={appUrl} target="_blank" rel="noreferrer">Try the live optimiser <Arrow /></a>
            <a className="button secondary" href="#method">Explore the method <span aria-hidden="true">↓</span></a>
          </div>
          <div className="trust-row" aria-label="Project facts">
            <div><strong>243</strong><span>tests</span></div>
            <div><strong>12</strong><span>platforms</span></div>
            <div><strong>Open</strong><span>source</span></div>
          </div>
        </div>
        <ConstraintVisual />
      </section>

      <section className="problem light-section" id="method">
        <div className="section-kicker">The decision problem</div>
        <div className="statement-grid">
          <h2>More data does not remove the need to make trade-offs.</h2>
          <div>
            <p>Marketing budgets have competing objectives, uneven data quality and real operating limits. Those constraints are often applied informally, after the analysis.</p>
            <p>CLARO makes the decision structure visible first. It then solves the allocation and explains why the result stopped where it did.</p>
          </div>
        </div>
      </section>

      <section className="method-section light-section">
        <div className="section-heading">
          <div>
            <p className="section-kicker">How CLARO works</p>
            <h2>One traceable path from assumptions to action.</h2>
          </div>
          <p>Each layer is separate, reviewable and designed to be challenged.</p>
        </div>
        <div className="method-flow">
          {[
            ["01", "Declare", "Objectives, budget, floors, values and seasonality"],
            ["02", "Measure", "Historical KPI productivity and data quality"],
            ["03", "Optimise", "LP allocation under named constraints"],
            ["04", "Interpret", "Robustness, trade-offs and recommendations"],
          ].map(([n, title, text]) => (
            <article key={n}>
              <span>{n}</span>
              <div className="flow-node" aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="capabilities" id="capabilities">
        <div className="section-heading dark-heading">
          <div>
            <p className="section-kicker">Core capabilities</p>
            <h2>Built for decisions that must be explained.</h2>
          </div>
          <p>Not a black box and not an automated media buyer. CLARO is a structured planning framework.</p>
        </div>
        <div className="capability-grid">
          {capabilities.map((item) => (
            <article key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="outputs light-section">
        <div className="output-copy">
          <p className="section-kicker">What you get</p>
          <h2>A recommendation, its logic and its limits.</h2>
          <p>CLARO preserves the distinction between model output and managerial judgement. Every result carries the assumptions and caveats needed to assess it.</p>
          <a className="text-link" href={wikiUrl} target="_blank" rel="noreferrer">Read the project wiki <Arrow /></a>
        </div>
        <div className="output-list">
          {outputs.map((output, index) => (
            <div key={output}><span>{String(index + 1).padStart(2, "0")}</span><p>{output}</p><b aria-hidden="true">+</b></div>
          ))}
        </div>
      </section>

      <section className="evidence" id="evidence">
        <div className="section-heading dark-heading">
          <div>
            <p className="section-kicker">Evidence and reproducibility</p>
            <h2>Open enough to inspect. Tested enough to challenge.</h2>
          </div>
        </div>
        <div className="evidence-grid">
          <a href={repoUrl} target="_blank" rel="noreferrer">
            <span>Source</span><strong>Public GitHub repository</strong><p>Code, tests, examples and implementation history.</p><Arrow />
          </a>
          <a href={doiUrl} target="_blank" rel="noreferrer">
            <span>Archive</span><strong>Persistent Zenodo record</strong><p>Versioned release with a permanent DOI.</p><Arrow />
          </a>
          <a href={`${repoUrl}/actions`} target="_blank" rel="noreferrer">
            <span>Verification</span><strong>243 automated tests</strong><p>Regression, accuracy, edge-case and behavioural coverage.</p><Arrow />
          </a>
        </div>
      </section>

      <section className="boundary light-section">
        <p className="section-kicker">Scope matters</p>
        <div className="boundary-grid">
          <h2>Decision support, without pretending the model knows more than it does.</h2>
          <div>
            <p>CLARO allocates at platform-objective level. It does not operate campaigns, connect directly to advertising APIs or estimate causal incrementality.</p>
            <p>It inherits the strengths and biases in the KPI data supplied. That boundary is stated because a useful model should make its limits as visible as its outputs.</p>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <p className="section-kicker">Start with the decision structure</p>
        <h2>Make the trade-offs visible.</h2>
        <p>Run the guided optimiser or inspect the full open-source method.</p>
        <div className="button-row centred">
          <a className="button primary" href={appUrl} target="_blank" rel="noreferrer">Open CLARO <Arrow /></a>
          <a className="button secondary" href={repoUrl} target="_blank" rel="noreferrer">View source <Arrow /></a>
        </div>
      </section>

      <footer>
        <a className="brand" href="#top">CLARO</a>
        <p>Constrained Linear Allocation and Resource Optimiser</p>
        <div>
          <a href={repoUrl} target="_blank" rel="noreferrer">GitHub</a>
          <a href={wikiUrl} target="_blank" rel="noreferrer">Wiki</a>
          <a href={doiUrl} target="_blank" rel="noreferrer">DOI</a>
        </div>
      </footer>
    </main>
  );
}
