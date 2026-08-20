import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
          {
                "title": "Blog — Therapy, EMDR, Anxiety & Couples | Jones Psychotherapy"
          },
          {
                "name": "description",
                "content": "Articles on EMDR, trauma, anxiety, couples & group therapy from Emily M. Jones, LCSW, CGP in Arlington & McLean, VA."
          },
          {
                "name": "robots",
                "content": "index, follow, max-image-preview:large"
          },
          {
                "name": "author",
                "content": "Emily M. Jones, LCSW, CGP"
          },
          {
                "name": "theme-color",
                "content": "#863527"
          },
          {
                "name": "twitter:card",
                "content": "summary_large_image"
          },
          {
                "name": "twitter:title",
                "content": "Blog — Therapy, EMDR, Anxiety & Couples | Jones Psychotherapy"
          },
          {
                "name": "twitter:description",
                "content": "Articles on EMDR, trauma, anxiety, couples & group therapy from Emily M. Jones, LCSW, CGP in Arlington & McLean, VA."
          },
          {
                "name": "twitter:image",
                "content": "https://www.jonespsychotherapy.com/og-image.jpg"
          },
          {
                "property": "og:type",
                "content": "article"
          },
          {
                "property": "og:site_name",
                "content": "Jones Psychotherapy"
          },
          {
                "property": "og:title",
                "content": "Blog — Therapy, EMDR, Anxiety & Couples | Jones Psychotherapy"
          },
          {
                "property": "og:description",
                "content": "Articles on EMDR, trauma, anxiety, couples & group therapy from Emily M. Jones, LCSW, CGP in Arlington & McLean, VA."
          },
          {
                "property": "og:url",
                "content": "https://www.jonespsychotherapy.com/blog"
          },
          {
                "property": "og:image",
                "content": "https://www.jonespsychotherapy.com/og-image.jpg"
          }
    ],
    links: [
          {
                "rel": "canonical",
                "href": "https://www.jonespsychotherapy.com/blog"
          }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          {
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": [
                  "MedicalBusiness",
                  "ProfessionalService"
                ],
                "@id": "https://www.jonespsychotherapy.com/#practice",
                "name": "Jones Psychotherapy",
                "url": "https://www.jonespsychotherapy.com",
                "image": "https://www.jonespsychotherapy.com/og-image.jpg",
                "logo": "https://www.jonespsychotherapy.com/assets/logo.png",
                "telephone": "+1-571-582-8086",
                "priceRange": "$$$",
                "medicalSpecialty": "Psychiatric",
                "address": [
                  {
                    "@type": "PostalAddress",
                    "streetAddress": "1655 Fort Myer Drive, Ste 960",
                    "addressLocality": "Arlington",
                    "addressRegion": "VA",
                    "postalCode": "22209",
                    "addressCountry": "US"
                  },
                  {
                    "@type": "PostalAddress",
                    "streetAddress": "1497 Chain Bridge Road",
                    "addressLocality": "McLean",
                    "addressRegion": "VA",
                    "postalCode": "22101",
                    "addressCountry": "US"
                  }
                ],
                "areaServed": [
                  "Arlington VA",
                  "McLean VA",
                  "Alexandria VA",
                  "Falls Church VA",
                  "Vienna VA",
                  "Tysons VA",
                  "Fairfax VA",
                  ""
                ],
                "knowsAbout": [
                  "EMDR",
                  "Trauma therapy",
                  "Internal Family Systems",
                  "Couples therapy",
                  "Attachment-based therapy",
                  "Group therapy",
                  "Anxiety"
                ],
                "founder": {
                  "@type": "Person",
                  "name": "Emily M. Jones",
                  "honorificSuffix": "LCSW, CGP"
                },
                "sameAs": [
                  "https://www.psychologytoday.com/us/therapists/emily-m-jones-arlington-va/224442",
                  "https://therapyfinder.com/therapist/emily-jones-lcsw-cgp-mental-health-therapy-arlington-va",
                  "https://www.linkedin.com/in/emilyjoneslcsw",
                  "https://www.facebook.com/jonespsychotherapy",
                  "https://www.instagram.com/jonespsychotherapy",
                  "https://www.agpa.org/home/membership-community/find-a-group-therapist"
                ]
              },
              {
                "@type": "Person",
                "@id": "https://www.jonespsychotherapy.com/#emily",
                "name": "Emily M. Jones",
                "honorificSuffix": "LCSW, CGP",
                "jobTitle": "Licensed Clinical Social Worker & Certified Group Psychotherapist",
                "worksFor": {
                  "@id": "https://www.jonespsychotherapy.com/#practice"
                },
                "knowsAbout": [
                  "EMDR",
                  "Trauma",
                  "Internal Family Systems",
                  "Couples therapy",
                  "Group therapy"
                ],
                "sameAs": [
                  "https://www.psychologytoday.com/us/therapists/emily-m-jones-arlington-va/224442",
                  "https://therapyfinder.com/therapist/emily-jones-lcsw-cgp-mental-health-therapy-arlington-va",
                  "https://www.linkedin.com/in/emilyjoneslcsw",
                  "https://www.facebook.com/jonespsychotherapy",
                  "https://www.instagram.com/jonespsychotherapy",
                  "https://www.agpa.org/home/membership-community/find-a-group-therapist"
                ]
              },
              {
                "@type": "Blog",
                "@id": "https://www.jonespsychotherapy.com/blog",
                "name": "Jones Psychotherapy Blog",
                "url": "https://www.jonespsychotherapy.com/blog",
                "publisher": {
                  "@id": "https://www.jonespsychotherapy.com/#practice"
                },
                "blogPost": [
                  {
                    "@type": "BlogPosting",
                    "headline": "What Is EMDR Therapy? (And How It Helps Heal Trauma)",
                    "url": "https://www.jonespsychotherapy.com/blog/what-is-emdr"
                  },
                  {
                    "@type": "BlogPosting",
                    "headline": "What to Expect in Your First Therapy Session",
                    "url": "https://www.jonespsychotherapy.com/blog/what-to-expect-first-session"
                  },
                  {
                    "@type": "BlogPosting",
                    "headline": "What Is Internal Family Systems (IFS) Therapy?",
                    "url": "https://www.jonespsychotherapy.com/blog/what-is-ifs"
                  },
                  {
                    "@type": "BlogPosting",
                    "headline": "How Couples Therapy Works — and When to Start",
                    "url": "https://www.jonespsychotherapy.com/blog/how-couples-therapy-works"
                  },
                  {
                    "@type": "BlogPosting",
                    "headline": "Why High-Functioning Anxiety Is So Easy to Miss",
                    "url": "https://www.jonespsychotherapy.com/blog/why-high-functioning-anxiety"
                  },
                  {
                    "@type": "BlogPosting",
                    "headline": "What Is Group Therapy — and Is It Right for You?",
                    "url": "https://www.jonespsychotherapy.com/blog/what-is-group-therapy"
                  },
                  {
                    "@type": "BlogPosting",
                    "headline": "How to Find the Right Therapist in Northern Virginia",
                    "url": "https://www.jonespsychotherapy.com/blog/how-to-find-a-therapist-northern-virginia"
                  },
                  {
                    "@type": "BlogPosting",
                    "headline": "Why Out-of-Network Therapy Can Still Be Affordable (Superbills Explained)",
                    "url": "https://www.jonespsychotherapy.com/blog/why-out-of-network-therapy"
                  },
                  {
                    "@type": "BlogPosting",
                    "headline": "What to Expect from Trauma Therapy",
                    "url": "https://www.jonespsychotherapy.com/blog/what-to-expect-trauma-therapy"
                  },
                  {
                    "@type": "BlogPosting",
                    "headline": "How to Support a Partner Who's Struggling",
                    "url": "https://www.jonespsychotherapy.com/blog/how-to-support-a-struggling-partner"
                  }
                ]
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://www.jonespsychotherapy.com/"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Blog",
                    "item": "https://www.jonespsychotherapy.com/blog"
                  }
                ]
              }
            ]
          },
        ),
      },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <SiteLayout crumbs={[
      {
        "label": "Home",
        "to": "/"
      },
      {
        "label": "Blog"
      }
    ]}>
      <section className="arthero"><div className="wrap" style={{"maxWidth": "820px"}}><div className="artcat">Resources &amp; Articles</div><h1>The Blog</h1><p className="artdek">Down-to-earth answers to the questions people ask before starting therapy — EMDR, anxiety, couples, groups, and more.</p></div></section><section className="band"><div className="wrap"><div className="cards"><Link className="cardx" to="/blog/what-is-emdr" style={{"textDecoration": "none"}}><div className="kick" style={{"textAlign": "left", "color": "var(--coral-d)", "fontSize": "12px", "letterSpacing": ".12em", "textTransform": "uppercase", "fontWeight": "700"}}>What is</div><h3 style={{"margin": "6px 0 6px"}}>What Is EMDR Therapy? (And How It Helps Heal Trauma)</h3><p style={{"color": "var(--ink2)", "fontSize": "15px"}}>EMDR (Eye Movement Desensitization and Reprocessing) is a well-researched therapy that helps your brain reprocess distressing memories so they stop hijacking the present.</p><span className="more" style={{"color": "var(--coral-d)", "fontWeight": "600", "fontSize": "14px", "marginTop": "8px", "display": "inline-block"}}>Read →</span></Link><Link className="cardx" to="/blog/what-to-expect-first-session" style={{"textDecoration": "none"}}><div className="kick" style={{"textAlign": "left", "color": "var(--coral-d)", "fontSize": "12px", "letterSpacing": ".12em", "textTransform": "uppercase", "fontWeight": "700"}}>What to expect</div><h3 style={{"margin": "6px 0 6px"}}>What to Expect in Your First Therapy Session</h3><p style={{"color": "var(--ink2)", "fontSize": "15px"}}>Your first session is mostly a conversation: we get to know each other, you share what's bringing you in, and together we sketch out where you'd like to go. There's no pressure to "perform."</p><span className="more" style={{"color": "var(--coral-d)", "fontWeight": "600", "fontSize": "14px", "marginTop": "8px", "display": "inline-block"}}>Read →</span></Link><Link className="cardx" to="/blog/what-is-ifs" style={{"textDecoration": "none"}}><div className="kick" style={{"textAlign": "left", "color": "var(--coral-d)", "fontSize": "12px", "letterSpacing": ".12em", "textTransform": "uppercase", "fontWeight": "700"}}>What is</div><h3 style={{"margin": "6px 0 6px"}}>What Is Internal Family Systems (IFS) Therapy?</h3><p style={{"color": "var(--ink2)", "fontSize": "15px"}}>Internal Family Systems (IFS) is a compassionate, evidence-based therapy built on a simple idea: the mind is made up of different "parts," and underneath them all is a calm, wise core Self.</p><span className="more" style={{"color": "var(--coral-d)", "fontWeight": "600", "fontSize": "14px", "marginTop": "8px", "display": "inline-block"}}>Read →</span></Link><Link className="cardx" to="/blog/how-couples-therapy-works" style={{"textDecoration": "none"}}><div className="kick" style={{"textAlign": "left", "color": "var(--coral-d)", "fontSize": "12px", "letterSpacing": ".12em", "textTransform": "uppercase", "fontWeight": "700"}}>How</div><h3 style={{"margin": "6px 0 6px"}}>How Couples Therapy Works — and When to Start</h3><p style={{"color": "var(--ink2)", "fontSize": "15px"}}>Couples therapy helps you see and interrupt the repeating cycle that pulls you apart, so you can rebuild trust and turn toward each other instead of away.</p><span className="more" style={{"color": "var(--coral-d)", "fontWeight": "600", "fontSize": "14px", "marginTop": "8px", "display": "inline-block"}}>Read →</span></Link><Link className="cardx" to="/blog/why-high-functioning-anxiety" style={{"textDecoration": "none"}}><div className="kick" style={{"textAlign": "left", "color": "var(--coral-d)", "fontSize": "12px", "letterSpacing": ".12em", "textTransform": "uppercase", "fontWeight": "700"}}>Why</div><h3 style={{"margin": "6px 0 6px"}}>Why High-Functioning Anxiety Is So Easy to Miss</h3><p style={{"color": "var(--ink2)", "fontSize": "15px"}}>High-functioning anxiety hides precisely because it looks like competence: you keep delivering, so no one — sometimes not even you — sees the strain underneath.</p><span className="more" style={{"color": "var(--coral-d)", "fontWeight": "600", "fontSize": "14px", "marginTop": "8px", "display": "inline-block"}}>Read →</span></Link><Link className="cardx" to="/blog/what-is-group-therapy" style={{"textDecoration": "none"}}><div className="kick" style={{"textAlign": "left", "color": "var(--coral-d)", "fontSize": "12px", "letterSpacing": ".12em", "textTransform": "uppercase", "fontWeight": "700"}}>What is</div><h3 style={{"margin": "6px 0 6px"}}>What Is Group Therapy — and Is It Right for You?</h3><p style={{"color": "var(--ink2)", "fontSize": "15px"}}>Group therapy is a small, confidential group led by a therapist where you practice new ways of relating in real time — which is exactly why it's so effective for relationship patterns.</p><span className="more" style={{"color": "var(--coral-d)", "fontWeight": "600", "fontSize": "14px", "marginTop": "8px", "display": "inline-block"}}>Read →</span></Link><Link className="cardx" to="/blog/how-to-find-a-therapist-northern-virginia" style={{"textDecoration": "none"}}><div className="kick" style={{"textAlign": "left", "color": "var(--coral-d)", "fontSize": "12px", "letterSpacing": ".12em", "textTransform": "uppercase", "fontWeight": "700"}}>How</div><h3 style={{"margin": "6px 0 6px"}}>How to Find the Right Therapist in Northern Virginia</h3><p style={{"color": "var(--ink2)", "fontSize": "15px"}}>The single biggest predictor of good outcomes isn't the method — it's the fit between you and your therapist. Here's how to find that in Northern Virginia without the overwhelm.</p><span className="more" style={{"color": "var(--coral-d)", "fontWeight": "600", "fontSize": "14px", "marginTop": "8px", "display": "inline-block"}}>Read →</span></Link><Link className="cardx" to="/blog/why-out-of-network-therapy" style={{"textDecoration": "none"}}><div className="kick" style={{"textAlign": "left", "color": "var(--coral-d)", "fontSize": "12px", "letterSpacing": ".12em", "textTransform": "uppercase", "fontWeight": "700"}}>Why</div><h3 style={{"margin": "6px 0 6px"}}>Why Out-of-Network Therapy Can Still Be Affordable (Superbills Explained)</h3><p style={{"color": "var(--ink2)", "fontSize": "15px"}}>Out-of-network therapy means you pay your therapist directly, then may get reimbursed by your insurer using a superbill — and it often costs less than people assume while offering more privacy and flexibility.</p><span className="more" style={{"color": "var(--coral-d)", "fontWeight": "600", "fontSize": "14px", "marginTop": "8px", "display": "inline-block"}}>Read →</span></Link><Link className="cardx" to="/blog/what-to-expect-trauma-therapy" style={{"textDecoration": "none"}}><div className="kick" style={{"textAlign": "left", "color": "var(--coral-d)", "fontSize": "12px", "letterSpacing": ".12em", "textTransform": "uppercase", "fontWeight": "700"}}>What to expect</div><h3 style={{"margin": "6px 0 6px"}}>What to Expect from Trauma Therapy</h3><p style={{"color": "var(--ink2)", "fontSize": "15px"}}>Good trauma therapy moves at your pace and starts with safety, not the hardest memories — the goal is to help your nervous system settle so the past stops running the present.</p><span className="more" style={{"color": "var(--coral-d)", "fontWeight": "600", "fontSize": "14px", "marginTop": "8px", "display": "inline-block"}}>Read →</span></Link><Link className="cardx" to="/blog/how-to-support-a-struggling-partner" style={{"textDecoration": "none"}}><div className="kick" style={{"textAlign": "left", "color": "var(--coral-d)", "fontSize": "12px", "letterSpacing": ".12em", "textTransform": "uppercase", "fontWeight": "700"}}>How</div><h3 style={{"margin": "6px 0 6px"}}>How to Support a Partner Who's Struggling</h3><p style={{"color": "var(--ink2)", "fontSize": "15px"}}>The most helpful thing you can offer a struggling partner usually isn't a solution — it's steady presence, genuine listening, and gentle encouragement toward support, while also caring for yourself.</p><span className="more" style={{"color": "var(--coral-d)", "fontWeight": "600", "fontSize": "14px", "marginTop": "8px", "display": "inline-block"}}>Read →</span></Link></div></div></section><section className="band cream"><div className="wrap"><div className="center"><div className="kick">Ready when you are</div><h2>Let's take the first step together.</h2><p className="sub2">Book a free, no-pressure 15-minute consultation with Emily M. Jones, LCSW, CGP.</p><div style={{"marginTop": "18px"}}><Link className="btn lg" to="/book">Book a free consultation</Link></div></div></div></section>
    </SiteLayout>
  );
}
