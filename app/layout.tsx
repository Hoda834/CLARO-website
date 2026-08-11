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
    googleBot: { index: true, follow: true, "max-snippet": -1 },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

// Emitted as a @graph so crawlers can resolve the software, its source, its
// author and the answered questions as one connected description.
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
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#author`,
      name: author.name,
      url: author.site,
      identifier: orcidUrl,
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
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
    {
      "@type": "CreativeWork",
      "@id": `${siteUrl}/#archive`,
      name: "CLARO archived release",
      identifier: versionDoiUrl,
      url: conceptDoiUrl,
      license: "https://opensource.org/licenses/MIT",
      author: { "@id": `${siteUrl}/#author` },
      citation: citationFileUrl,
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
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      isPartOf: { "@id": `${siteUrl}/#software` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
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
