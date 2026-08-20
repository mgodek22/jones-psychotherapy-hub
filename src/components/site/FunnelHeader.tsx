import { Link } from "@tanstack/react-router";

import { PHONE_DISPLAY, PHONE_HREF } from "./site-config";

export function FunnelHeader() {
  return (
    <header className="nav funnel">
      <div className="wrap">
        <Link className="brand" to="/" aria-label="Jones Psychotherapy — home">
          <img
            className="brandlockup"
            src="/brand/jones-lockup-transparent.png"
            alt="Jones Psychotherapy"
          />
        </Link>
        <nav className="navlinks">
          <a className="phone" href={PHONE_HREF}>
            {PHONE_DISPLAY}
          </a>
        </nav>
      </div>
    </header>
  );
}
