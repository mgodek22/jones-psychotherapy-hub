import { PHONE_DISPLAY, PHONE_HREF, SIMPLE_PRACTICE_URL } from "./site-config";

/**
 * Consultation requests are handed off to SimplePractice (the practice's
 * HIPAA-covered scheduling system) rather than collected here. This app never
 * stores names, contact details, or any clinical narrative.
 */
export function ConsultHandoff({
  ctaLabel = "Request my free consultation",
}: {
  ctaLabel?: string;
}) {
  return (
    <div className="formcard">
      <h3 style={{ color: "var(--maroon)", marginBottom: "10px" }}>
        Request your free 15-minute consultation
      </h3>
      <p style={{ color: "var(--ink2)" }}>
        Scheduling happens in my secure client portal, so your information stays inside a
        HIPAA-compliant system from the very first message. It takes about a minute.
      </p>
      <ul className="risklist">
        <li>Free &amp; confidential — no obligation to continue</li>
        <li>Reply within 1 business day</li>
        <li>Arlington &amp; McLean in person, or telehealth in Virginia &amp; Utah</li>
      </ul>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        {SIMPLE_PRACTICE_URL ? (
          <a className="btn lg" href={SIMPLE_PRACTICE_URL} target="_blank" rel="noopener">
            {ctaLabel}
          </a>
        ) : (
          <a className="btn lg" href={PHONE_HREF}>
            Call {PHONE_DISPLAY}
          </a>
        )}
      </div>
      <div style={{ textAlign: "center", marginTop: "14px" }}>
        {SIMPLE_PRACTICE_URL ? (
          <a className="btn ghost" href={PHONE_HREF}>
            Prefer to talk? Call {PHONE_DISPLAY}
          </a>
        ) : null}
      </div>
      <p className="formnote">
        Please don&apos;t send sensitive medical details by email or text. This site is not a
        crisis service — if you&apos;re in crisis, call or text 988.
      </p>
    </div>
  );
}
