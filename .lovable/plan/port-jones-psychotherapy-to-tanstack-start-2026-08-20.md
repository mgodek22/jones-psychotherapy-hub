# Port Jones Psychotherapy to TanStack Start

`BUILD-SPEC.md` plus 31 finished pages in `source-pages/` are already in the repo. This is a **faithful port, not a redesign**: the palette, type, and layout are reproduced exactly; only the delivery changes (static HTML → React routes with shared chrome).

## What the source actually contains

- Each page carries the same ~20KB inline stylesheet, a hand-written unique `<title>` + meta description, canonical/OG/Twitter tags, and JSON-LD.
- Real copy per page is small (~6KB of text); most file weight is that repeated CSS plus three base64-inlined images. Those become real files from `source-pages/brand/`.
- Shared chrome: sticky header (logo, nav, coral "Book a free consult" pill), a "Ready when you are" CTA band, and a deep-maroon footer with both offices, phone, socials, link columns, and the 988 crisis line.
- `book.html`, `guide.html`, `explore.html` are funnel pages with a stripped header (logo + phone only) and no footer.
- Forms today are cosmetic: a small inline script hides the form and shows a thank-you message. Nothing is sent anywhere.

## Structure

- `src/styles.css` — port the source `:root` tokens verbatim (`--maroon #863527`, `--coral #fa5537`, `--paper #fcf6f0`, etc.) as design tokens, register them in `@theme`, and port the source component classes (`.hero`, `.btn`, `.band`, `.card`, `.formcard`, nav/footer rules) once. Fraunces + Inter load via a `<link>` in `__root.tsx`.
- `src/components/site/` — `SiteHeader`, `FunnelHeader`, `SiteFooter`, `FootCta`, plus small shared pieces (FAQ accordion, consult form, opt-in form).
- `src/routes/` — one file per page. Full-chrome pages use a pathless layout that renders header + footer around `<Outlet />`; the three funnel pages use the funnel header and skip the footer.
- Assets: `source-pages/brand/*` and `og-image.jpg` move into `public/` (logo lockup, vase icon, Emily's photo, the three section icons, favicon, the Quiet-the-Inner-Critic PDF). Base64 data URIs are replaced with those paths.
- The mobile nav becomes React state instead of the checkbox hack; the hamburger animation and breakpoints stay as-is.

## Routes (31)

`/` `/about` `/individual` `/couples` `/group` `/fees` `/faq` `/book` `/arlington` `/mclean` `/resources` `/guide` `/explore` `/blog` `/what-is-emdr` `/what-is-ifs` `/what-is-group-therapy` `/what-is-lcsw` `/good-faith-estimate` `/no-surprises-act` `/privacy-policy`, and ten `/blog/<slug>` posts (slug = filename minus `blog-`).

Internal links become `<Link>`; `.html` hrefs in the source are rewritten to clean paths.

## Redirects

14 permanent redirects to the old Squarespace URLs listed in the spec (`/home`, `/individual-therapy`, `/couples-therapy`, `/group-therapy`, `/fees-faqs`, `/insuranceinfo`, `/contact`, `/freeconsult`, `/therapyinfo`, `/thankyou`, `/supervision-group-for-therapist`, `/individual-supervision`, plus `/about` and `/faq` which already match). Implemented as thin route files that throw a 301 `redirect()` in `beforeLoad`. The `.html` filenames were never public, so they get no redirects.

## SEO

Per-route `head()` with the source title/description/canonical/OG/Twitter kept verbatim, `og:image` on leaf routes only. JSON-LD ported as-is: MedicalBusiness/ProfessionalService with both addresses, Person for Emily M. Jones LCSW CGP, BreadcrumbList on interior pages, FAQPage where present. `sitemap.xml` becomes a server route generated from the route list (matching the existing `source-pages/sitemap.xml` set); `public/robots.txt` keeps its current per-bot blocks and gains the `Sitemap:` line the source robots.txt has.

## Compliance fixes applied during the port

The spec overrides the source files in two places, so the port deviates deliberately:

1. **The booking form's "What's bringing you in?" textarea is removed.** `book.html` still has it; the spec forbids free-text intake with no BAA in place. The form keeps name, email, phone, interest, and preferred location only, and points real intake at SimplePractice.
2. **`Washington DC` is dropped from JSON-LD `areaServed`** on all 31 pages, since licensure is Virginia and Utah only. Marketing copy that says "greater DC metro area" stays verbatim — flag if you want that reworded too.

No testimonials are added, and the 988 line stays in the footer and on `/resources`.

## Form handling: route to SimplePractice

Booking goes to SimplePractice rather than being captured here — nothing is stored in this app, which keeps contact and clinical detail out of a database with no BAA.

- `/book` presents the consult request as a direct handoff: primary button opens the SimplePractice client portal / request-appointment link in a new tab, with the phone number `(571) 582-8086` as the secondary path.
- The name/email/phone/interest/location fields are kept only if SimplePractice can receive them via its embeddable widget or a prefilled link; otherwise `/book` drops the local form entirely rather than collecting data it cannot forward. Either way the free-text "What's bringing you in?" field is gone.
- The `/guide` and `/explore` opt-in forms are a lead magnet (Quiet-the-Inner-Critic PDF), not intake. They keep the current no-storage behavior: submit shows the thank-you state and links straight to the PDF.

Needed from you: the SimplePractice link (portal URL or Request-Appointment widget snippet). Until it arrives I will wire the buttons to the phone number and a clearly marked `TODO` constant in one place so the swap is a one-line change.


## Done when

All 31 routes render with copy intact, each with its own title and description, the design matches the source pages, all 14 redirects return 301, and the build is clean.
