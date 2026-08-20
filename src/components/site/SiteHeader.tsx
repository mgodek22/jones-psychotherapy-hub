import { Link } from "@tanstack/react-router";
import { useState } from "react";

const NAV_LINKS = [
  { to: "/individual", label: "Individual" },
  { to: "/couples", label: "Couples" },
  { to: "/group", label: "Group" },
  { to: "/about", label: "About" },
  { to: "/fees", label: "Fees" },
  { to: "/faq", label: "FAQ" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="wrap">
        <Link className="brand" to="/" aria-label="Jones Psychotherapy — home">
          <img
            className="brandlockup"
            src="/brand/jones-lockup-transparent.png"
            alt="Jones Psychotherapy"
          />
        </Link>
        <button
          type="button"
          className={open ? "hamburger open" : "hamburger"}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={open ? "navlinks open" : "navlinks"}>
          {NAV_LINKS.map((link) => (
            <Link key={link.to} to={link.to} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link className="btn" to="/book" onClick={() => setOpen(false)}>
            Book a free consult
          </Link>
        </nav>
      </div>
    </header>
  );
}
