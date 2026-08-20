import { Link } from "@tanstack/react-router";
import { useState } from "react";

const GUIDE_PDF = "/brand/Quiet-the-Inner-Critic.pdf";

/**
 * Lead-magnet opt-in (the Quiet the Inner Critic guide). Nothing is stored:
 * submitting reveals the thank-you state and links straight to the PDF.
 */
export function OptinForm({ variant }: { variant: "index" | "guide" }) {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="thanks" style={{ display: "block" }}>
        <h3>On its way — check your inbox.</h3>
        {variant === "guide" ? (
          <>
            <p style={{ color: "var(--ink2)", fontSize: "15px", margin: "0 0 16px" }}>
              You can open the guide right now, or keep it for later. Ready to talk sooner?
            </p>
            <a className="btn" href={GUIDE_PDF} target="_blank" rel="noopener">
              Open the guide
            </a>{" "}
            <Link className="btn ghost" to="/book">
              Book a free consultation
            </Link>
          </>
        ) : (
          <>
            <p style={{ color: "var(--ink2)", fontSize: "15px", margin: "0 0 16px" }}>
              You can open the guide right here — no waiting on email.
            </p>
            <a className="btn" href={GUIDE_PDF} target="_blank" rel="noopener">
              Open the guide
            </a>
          </>
        )}
      </div>
    );
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      {variant === "guide" ? (
        <>
          <label htmlFor="optin-first">First name</label>
          <input id="optin-first" required placeholder="First name" />
        </>
      ) : null}
      <label htmlFor="optin-email">Where should I send it?</label>
      <input id="optin-email" type="email" required placeholder="you@email.com" />
      <button className="btn lg" type="submit" style={{ width: "100%" }}>
        Send me the free guide
      </button>
      <p className="fnote">
        No spam, ever. Unsubscribe anytime. You&apos;ll also get occasional notes on groups &amp;
        openings.
      </p>
    </form>
  );
}
