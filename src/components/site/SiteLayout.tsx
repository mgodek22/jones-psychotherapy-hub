import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

export interface Crumb {
  label: string;
  to?: string;
}

export function SiteLayout({
  children,
  crumbs,
}: {
  children: ReactNode;
  crumbs?: Crumb[];
}) {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      {crumbs && crumbs.length > 0 ? (
        <nav className="crumbs" aria-label="Breadcrumb">
          <div className="wrap">
            {crumbs.map((crumb, i) => (
              <span key={crumb.label}>
                {i > 0 ? <span aria-hidden="true"> / </span> : null}
                {crumb.to ? (
                  <Link to={crumb.to}>{crumb.label}</Link>
                ) : (
                  <span aria-current="page">{crumb.label}</span>
                )}
              </span>
            ))}
          </div>
        </nav>
      ) : null}
      <main id="main">{children}</main>
      <SiteFooter />
    </>
  );
}

export function FunnelLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <FunnelHeaderSlot />
      <main id="main">{children}</main>
    </>
  );
}

function FunnelHeaderSlot() {
  return <FunnelHeader />;
}

import { FunnelHeader } from "./FunnelHeader";
