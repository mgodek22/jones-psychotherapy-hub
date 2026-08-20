# Jones Psychotherapy — port spec (read this before writing any code)

Source: `source-pages/` in this repo — 31 finished HTML pages plus brand assets.

**This is a port, not a redesign.** These files are NOT Squarespace output. They are an
already-completed redesign whose palette was sampled from the client's live site and which
has already passed a WCAG AA contrast sweep. Reproduce the design; do not restyle it.

## 1. Design tokens — use exactly, do not invent a palette

```css
--ink:#22201c;  --ink2:#4a463f;  --muted:#716a5d;
--maroon:#863527;  --maroon-d:#5e2419;   /* structure: hero + footer fills, headings */
--coral:#fa5537;   --coral-d:#c5391e;    /* primary CTA buttons, accents */
--coral-tint:#f7e2dc;
--sand:#876445;    --sand-tint:#f4ede6;
--cream:#fbecdc;                          /* soft section backgrounds */
--paper:#fcf6f0;                          /* page background */
--card:#fff;  --line:#e9dccb;
--shadow:0 2px 4px rgba(35,33,29,.04),0 14px 40px rgba(35,33,29,.08);
```

Type: **Fraunces** (headings, serif) + **Inter** (body), via Google Fonts.

Do not darken or lighten these to "fix" contrast — they were already tuned. One exception
is deliberate: white on `--coral` buttons is 3.27:1, matching the client's live site.

Logo: `source-pages/brand/jones-lockup-transparent.png` in the header at 56px tall
(44px mobile), `jones-vase-icon.png` in the footer.

## 2. Shared chrome

- **Header:** logo left; nav right — Individual · Couples · Group · About · Fees · FAQ;
  then a coral pill button "Book a free consult" → `/book`.
- **Footer:** deep maroon (`--maroon-d`), practice blurb, both offices (Arlington +
  McLean), phone, social icons, link columns, and the crisis line
  "not for emergencies … call or text **988**".

## 3. Routes — clean paths, no `.html`

`/` ← index.html · `/about` `/individual` `/couples` `/group` `/fees` `/faq` `/book`
`/arlington` `/mclean` `/resources` `/guide` `/explore` `/blog` `/what-is-emdr`
`/what-is-ifs` `/what-is-group-therapy` `/what-is-lcsw` `/good-faith-estimate`
`/no-surprises-act` `/privacy-policy` ← same-named files.
`/blog/<slug>` ← the 10 `blog-*.html` files, slug = filename minus the `blog-` prefix.

## 4. Redirects — CRITICAL, do not use the .html filenames

The `.html` filenames were never public. Google has indexed the client's **Squarespace**
URLs. Take these from her live sitemap; each needs a **301**:

```
/home                             -> /
/about                            -> /about
/individual-therapy               -> /individual
/couples-therapy                  -> /couples
/group-therapy                    -> /group
/fees-faqs                        -> /fees
/insuranceinfo                    -> /fees
/faq                              -> /faq
/contact                          -> /book
/freeconsult                      -> /book
/therapyinfo                      -> /explore
/thankyou                         -> /
/supervision-group-for-therapist  -> /book
/individual-supervision           -> /book
```

## 5. SEO

Every page already has a unique, hand-written `<title>` and meta description in its HTML —
keep them verbatim in route-level `head()`. Add canonical, Open Graph, Twitter card.
Generate `sitemap.xml` from the routes; keep `robots.txt`. JSON-LD:
MedicalBusiness/ProfessionalService with both offices + areaServed, Person for
Emily M. Jones LCSW CGP, BreadcrumbList on interior pages, FAQPage on `/faq`.

## 6. Hard constraints — compliance, not preferences

- **No free-text intake fields anywhere.** The booking form collects name, email, phone,
  interest, and preferred location ONLY. No "what's bringing you in" textarea, no symptom
  or history fields. There is no BAA covering this stack, so narrative clinical detail must
  never be collected or stored here. Route real intake to SimplePractice.
- **No client testimonials** — prohibited for this profession.
- Licensed in **Virginia and Utah only**. Never add Washington DC.
- Keep the 988 crisis line in the footer and on `/resources`.

## 7. Done means

31 routes render with copy intact, unique title/description each, internal links via
TanStack `<Link>`, all 14 redirects live, clean build.
