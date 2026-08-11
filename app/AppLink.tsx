"use client";

import { useEffect, useState, type ReactNode } from "react";
import { appUrl, withUtm } from "./site-config";
import { resolveSource } from "./source";

type AppLinkProps = {
  /** Placement, so conversion can be split by which button was used. */
  campaign: string;
  className?: string;
  children: ReactNode;
};

/**
 * Link into the Streamlit optimiser with attribution attached.
 *
 * The exported HTML carries a working link tagged as direct. On mount the real
 * source is resolved and the href is upgraded, so the link never depends on
 * JavaScript to work.
 *
 * rel is noopener rather than noreferrer on purpose: the destination is our own
 * app, and keeping the referrer gives a fallback signal if a query parameter is
 * ever stripped in transit.
 */
export default function AppLink({ campaign, className, children }: AppLinkProps) {
  const [href, setHref] = useState(() => withUtm(appUrl, campaign));

  useEffect(() => {
    setHref(withUtm(appUrl, campaign, resolveSource()));
  }, [campaign]);

  return (
    <a className={className} href={href} target="_blank" rel="noopener">
      {children}
    </a>
  );
}
