import AppLink from "./AppLink";
import {
  audiences,
  capabilities,
  definition,
  faqs,
  outputs,
  useCase,
} from "./content";
import {
  appUrl,
  author,
  citationFileUrl,
  conceptDoiUrl,
  orcidUrl,
  pypiUrl,
  release,
  repoUrl,
  versionDoiUrl,
  wikiUrl,
  withUtm,
} from "./site-config";

// Every outbound link is tagged so the AI/search → website → optimiser funnel
// can be measured end to end.
const repoLink = withUtm(repoUrl, "evidence");
const repoFooterLink = withUtm(repoUrl, "footer");
const wikiLink = withUtm(wikiUrl, "docs");
const pypiLink = withUtm(pypiUrl, "install");

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

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="CLARO home">CLARO</a>
        <nav aria-label="Primary navigation">
          <a href="#what-is-claro">What is CLARO</a>
          <a href="#method">How it works</a>
          <a href="#use-case">Use cases</a>
          <a href="#faq">FAQ</a>
          <a href={wikiLink} target="_blank" rel="noreferrer">Documentation</a>
        </nav>
        <a className="icon-link" href={repoLink} target="_blank" rel="noreferrer" aria-label="View CLARO on GitHub">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .8a11.4 11.4 0 0 0-3.6 22.2c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.4-1.3-5.4-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0C17 4.9 18 5.2 18 5.2c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.4 5.7.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6A11.4 11.4 0 0 0 12 .8Z" /></svg>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Allocate with constraints. Decide with evidence.</p>
          <h1>
            <span className="h1-brand">CLARO</span>
            <span className="sr-only"> — </span>
            <span className="h1-desc">
              Open-source marketing budget optimisation and decision-support software
            </span>
          </h1>
          <p className="hero-text">{definition}</p>
          <div className="button-row">
            <AppLink className="button primary" campaign="hero">Run CLARO in your browser <Arrow /></AppLink>
            <a className="button secondary" href="#what-is-claro">What CLARO does <span aria-hidden="true">↓</span></a>
          </div>
          <div className="trust-row" aria-label="Project facts">
            <div><strong>Free</strong><span>MIT licence</span></div>
            <div><strong>{release.testCount}</strong><span>tests</span></div>
            <div><strong>{release.platformCount}</strong><span>platforms</span></div>
          </div>
        </div>
        <ConstraintVisual />
      </section>

      <section className="definition light-section" id="what-is-claro">
        <div className="section-kicker">What is CLARO?</div>
        <div className="statement-grid">
          <h2>An open-source tool for constrained marketing budget optimisation.</h2>
          <div>
            <p>
              CLARO stands for <strong>Constrained Linear Allocation and Resource Optimiser</strong>. Given a fixed
              marketing budget, a set of business objectives and your historical platform performance, it solves a
              linear program that decides how much budget each platform-objective pair should receive — and then
              reports which constraints stopped the allocation going further.
            </p>
            <p>
              It runs two ways. The hosted optimiser is a guided browser application that needs no installation. The
              Python engine installs from PyPI as <code>claro-engine</code> and can be used directly in notebooks or
              pipelines. Both are MIT-licensed and share the same solver.
            </p>
          </div>
        </div>
        <dl className="fact-strip">
          <div><dt>Method</dt><dd>Linear programming ({release.solver})</dd></div>
          <div><dt>Install</dt><dd><code>pip install claro-engine</code></dd></div>
          <div><dt>Licence</dt><dd>{release.licence}, free for commercial use</dd></div>
          <div><dt>Version</dt><dd>{release.version}, Python {release.pythonRequirement}</dd></div>
        </dl>
      </section>

      <section className="problem light-section">
        <div className="section-kicker">The decision problem</div>
        <div className="statement-grid">
          <h2>More data does not remove the need to make trade-offs.</h2>
          <div>
            <p>Marketing budgets have competing objectives, uneven data quality and real operating limits. Those constraints are often applied informally, after the analysis.</p>
            <p>CLARO makes the decision structure visible first. It then solves the allocation and explains why the result stopped where it did.</p>
          </div>
        </div>
      </section>

      <section className="method-section light-section" id="method">
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

      <section className="audience light-section" id="who-uses-claro">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Who uses CLARO</p>
            <h2>For anyone who has to defend a budget split.</h2>
          </div>
          <p>The common thread is a fixed budget, competing objectives and a decision that will be questioned.</p>
        </div>
        <div className="audience-grid">
          {audiences.map((item) => (
            <article key={item.role}>
              <h3>{item.role}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="use-case" id="use-case">
        <div className="section-heading dark-heading">
          <div>
            <p className="section-kicker">Example use case</p>
            <h2>Allocating a £120,000 quarterly budget.</h2>
          </div>
          <p>{useCase.scenario}</p>
        </div>
        <ol className="use-case-steps">
          {useCase.steps.map((step, index) => (
            <li key={step.label}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.label}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
        <AppLink className="button primary" campaign="use_case">Try this in the optimiser <Arrow /></AppLink>
      </section>

      <section className="outputs light-section">
        <div className="output-copy">
          <p className="section-kicker">What you get</p>
          <h2>A recommendation, its logic and its limits.</h2>
          <p>CLARO preserves the distinction between model output and managerial judgement. Every result carries the assumptions and caveats needed to assess it.</p>
          <a className="text-link" href={wikiLink} target="_blank" rel="noreferrer">Read the project wiki <Arrow /></a>
        </div>
        <div className="output-list">
          {outputs.map((output, index) => (
            <div key={output}><span>{String(index + 1).padStart(2, "0")}</span><p>{output}</p><b aria-hidden="true">+</b></div>
          ))}
        </div>
      </section>

      <section className="faq light-section" id="faq">
        <div className="section-heading">
          <div>
            <p className="section-kicker">Frequently asked questions</p>
            <h2>Common questions about CLARO.</h2>
          </div>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <article key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
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
          <a href={repoLink} target="_blank" rel="noreferrer">
            <span>Source</span><strong>Public GitHub repository</strong><p>Code, tests, examples and implementation history.</p><Arrow />
          </a>
          <a href={pypiLink} target="_blank" rel="noreferrer">
            <span>Package</span><strong>claro-engine on PyPI</strong><p>Install the optimisation engine with pip and use it directly.</p><Arrow />
          </a>
          <a href={conceptDoiUrl} target="_blank" rel="noreferrer">
            <span>Archive</span><strong>Persistent Zenodo record</strong><p>Versioned release with a permanent DOI.</p><Arrow />
          </a>
        </div>
        <div className="citation">
          <h3>How to cite CLARO</h3>
          <p className="citation-text">
            Rezvanjoo, H. (2026). <em>CLARO: Constrained budget allocation with rule-based decision interpretation</em>.{" "}
            <em>SoftwareX</em>, 35, 102935.{" "}
            <a href={paperDoiUrl} target="_blank" rel="noreferrer">
              doi:10.1016/j.softx.2026.102935
            </a>
           </p>
          <p className="citation-text">
            {author.name}. <em>CLARO: Constrained Linear Allocation and Resource Optimiser — a Decision-Support
            Framework for Marketing Budget Allocation</em>. Version {release.version}. Zenodo.{" "}
            <a href={versionDoiUrl} target="_blank" rel="noreferrer">doi:10.5281/zenodo.21230206</a>
          </p>
          <div className="citation-links">
            <a href={conceptDoiUrl} target="_blank" rel="noreferrer">Concept DOI <Arrow /></a>
            <a href={citationFileUrl} target="_blank" rel="noreferrer">CITATION.cff <Arrow /></a>
            <a href={orcidUrl} target="_blank" rel="noreferrer">ORCID <Arrow /></a>
          </div>
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
        <p>Run the guided optimiser in your browser, or install the engine and inspect the full open-source method.</p>
        <div className="button-row centred">
          <AppLink className="button primary" campaign="final_cta">Launch the optimiser <Arrow /></AppLink>
          <a className="button secondary" href={repoFooterLink} target="_blank" rel="noreferrer">View source <Arrow /></a>
        </div>
      </section>

      <footer>
        <a className="brand" href="#top">CLARO</a>
        <p>Constrained Linear Allocation and Resource Optimiser · MIT licence · {author.name}</p>
        <div>
          <a href={repoFooterLink} target="_blank" rel="noreferrer">GitHub</a>
          <a href={pypiLink} target="_blank" rel="noreferrer">PyPI</a>
          <a href={wikiLink} target="_blank" rel="noreferrer">Wiki</a>
          <a href={paperDoiUrl} target="_blank" rel="noreferrer">Paper</a>
        </div>
      </footer>
    </main>
  );
}
