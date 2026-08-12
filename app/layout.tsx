import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { definition, faqs } from "./content";
import {
  appUrl,
  author,
  conceptDoiUrl,
  citationFileUrl,
  gaMeasurementId,
  orcidUrl,
  paperDoiUrl,
  pypiUrl,
  release,
  repoUrl,
  siteUrl,
  versionDoiUrl,
  wikiUrl,
} from "./site-config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title =
  "CLARO – Open-source Marketing Budget Optimisation and Decision-Support Software";

const paperTitle =
  "CLARO: Constrained budget allocation with rule-based decision interpretation";

const paperDoi = "10.1016/j.softx.2026.102935";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | CLARO",
  },
  description:
    "CLARO is free, open-source decision-support software that allocates a fixed marketing budget across advertising platforms and objectives using linear programming, under explicit constraints, with auditable results.",
  applicationName: "CLARO",
  authors: [{ name: author.name, url: author.site }],
  creator: author.name,
  publisher: author.name,
  keywords: [
    "marketing budget optimisation",
    "marketing budget allocation software",
    "open-source budget optimiser",
    "constrained optimisation",
    "linear programming marketing",
    "media budget allocation tool",
    "decision support system",
    "marketing mix planning",
    "operations research marketing",
    "PuLP CBC solver",
    "CLARO",
    "claro-engine",
    "SoftwareX",
    paperDoi,
  ],
  alternates: { canonical: `${siteUrl}/` },
  category: "technology",
  openGraph: {
    type: "website",
    url: `${siteUrl}/`,
    siteName: "CLARO",
    title,
    description: definition,
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: definition,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

// One connected graph for the software, source code, web app, author,
// peer-reviewed publication, archive and FAQ content.
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": `${siteUrl}/#software`,
      name: "CLARO",
      alternateName: "Constrained Linear Allocation and Resource Optimiser",
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "Decision Support System",
      operatingSystem: "Web browser, Linux, macOS, Windows",
      softwareVersion: release.version,
      description: definition,
      url: `${siteUrl}/`,
      downloadUrl: pypiUrl,
      installUrl: pypiUrl,
      softwareHelp: wikiUrl,
      codeRepository: repoUrl,
      license: "https://opensource.org/licenses/MIT",
      isAccessibleForFree: true,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      author: { "@id": `${siteUrl}/#author` },
      citation: { "@id": `${siteUrl}/#paper` },
      subjectOf: { "@id": `${siteUrl}/#paper` },
      hasPart: [
        { "@id": `${siteUrl}/#source` },
        { "@id": `${siteUrl}/#app` },
      ],
      featureList: [
        "Linear programming budget allocation across platform-objective cells",
        "Named, auditable constraints with binding-constraint and shadow-price reporting",
        "Conservative, base and optimistic scenario comparison",
        "Monte Carlo robustness testing",
        "Data-quality shrinkage for platforms with short performance history",
        "CSV import for twelve advertising platforms",
        "PDF and Excel decision artefacts",
      ],
      keywords:
        "marketing budget allocation, constrained optimisation, linear programming, decision support, operations research",
      // These URLs identify the software itself. The paper DOI is deliberately
      // not in sameAs because the publication is a separate entity.
      sameAs: [repoUrl, pypiUrl, conceptDoiUrl],
    },
    {
      "@type": "SoftwareSourceCode",
      "@id": `${siteUrl}/#source`,
      name: "claro-engine",
      description:
        "Python implementation of the CLARO constrained allocation engine, installable from PyPI.",
      codeRepository: repoUrl,
      programmingLanguage: "Python",
      runtimePlatform: `Python ${release.pythonRequirement}`,
      license: "https://opensource.org/licenses/MIT",
      author: { "@id": `${siteUrl}/#author` },
      targetProduct: { "@id": `${siteUrl}/#software` },
      citation: { "@id": `${siteUrl}/#paper` },
    },
    {
      "@type": "ScholarlyArticle",
      "@id": `${siteUrl}/#paper`,
      name: paperTitle,
      headline: paperTitle,
      description:
        "Peer-reviewed SoftwareX article describing CLARO's constrained budget allocation and rule-based decision interpretation framework.",
      url: paperDoiUrl,
      identifier: [
        {
          "@type": "PropertyValue",
          propertyID: "DOI",
          value: paperDoi,
        },
        {
          "@type": "PropertyValue",
          propertyID: "Article number",
          value: "102935",
        },
      ],
      datePublished: "2026",
      author: { "@id": `${siteUrl}/#author` },
      publisher: {
        "@type": "Organization",
        name: "Elsevier",
      },
      isPartOf: {
        "@type": "PublicationVolume",
        volumeNumber: "35",
        isPartOf: {
          "@type": "Periodical",
          name: "SoftwareX",
          publisher: {
            "@type": "Organization",
            name: "Elsevier",
          },
        },
      },
      about: { "@id": `${siteUrl}/#software` },
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#author`,
      name: author.name,
      url: author.site,
      identifier: {
        "@type": "PropertyValue",
        propertyID: "ORCID",
        value: "0009-0006-3882-2669",
      },
      sameAs: [orcidUrl, author.site],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: "CLARO",
      description: definition,
      inLanguage: "en-GB",
      publisher: { "@id": `${siteUrl}/#author` },
      about: { "@id": `${siteUrl}/#software` },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
    {
      "@type": "CreativeWork",
      "@id": `${siteUrl}/#archive`,
      name: `CLARO ${release.version} archived software release`,
      identifier: {
        "@type": "PropertyValue",
        propertyID: "DOI",
        value: versionDoiUrl.replace("https://doi.org/", ""),
      },
      url: versionDoiUrl,
      sameAs: [conceptDoiUrl],
      license: "https://opensource.org/licenses/MIT",
      author: { "@id": `${siteUrl}/#author` },
      usageInfo: citationFileUrl,
      citation: { "@id": `${siteUrl}/#paper` },
      about: { "@id": `${siteUrl}/#software` },
    },
    {
      "@type": "WebApplication",
      "@id": `${siteUrl}/#app`,
      name: "CLARO optimiser",
      url: appUrl,
      applicationCategory: "BusinessApplication",
      browserRequirements: "Requires JavaScript",
      isAccessibleForFree: true,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      isPartOf: { "@id": `${siteUrl}/#software` },
      citation: { "@id": `${siteUrl}/#paper` },
    },
  ],
};

const jsonLd = JSON.stringify(structuredData).replace(/</g, "\\u003c");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd }}
        />

        {children}

        {gaMeasurementId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaMeasurementId}');`}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
