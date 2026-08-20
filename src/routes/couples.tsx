import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/couples")({
  head: () => ({
    meta: [
          {
                "title": "Couples Therapy in McLean & Arlington, VA | Emily M. Jones, LCSW"
          },
          {
                "name": "description",
                "content": "Emotionally focused couples therapy in McLean & Arlington, VA and by video. Rebuild trust and connection. Book a free consultation."
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
                "content": "Couples Therapy in McLean & Arlington, VA | Emily M. Jones, LCSW"
          },
          {
                "name": "twitter:description",
                "content": "Emotionally focused couples therapy in McLean & Arlington, VA and by video. Rebuild trust and connection. Book a free consultation."
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
                "content": "Couples Therapy in McLean & Arlington, VA | Emily M. Jones, LCSW"
          },
          {
                "property": "og:description",
                "content": "Emotionally focused couples therapy in McLean & Arlington, VA and by video. Rebuild trust and connection. Book a free consultation."
          },
          {
                "property": "og:url",
                "content": "https://www.jonespsychotherapy.com/couples"
          },
          {
                "property": "og:image",
                "content": "https://www.jonespsychotherapy.com/og-image.jpg"
          }
    ],
    links: [
          {
                "rel": "canonical",
                "href": "https://www.jonespsychotherapy.com/couples"
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
                    "name": "Couples Therapy",
                    "item": "https://www.jonespsychotherapy.com/couples"
                  }
                ]
              },
              {
                "@type": "Service",
                "name": "Couples Therapy",
                "serviceType": "Couples Therapy",
                "provider": {
                  "@id": "https://www.jonespsychotherapy.com/#practice"
                },
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
                "url": "https://www.jonespsychotherapy.com/couples"
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "When should we start couples therapy?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Sooner is easier than later — you don't need to be in crisis. If you keep having the same argument, feel more like roommates, or are recovering from a breach of trust, that's reason enough."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does couples therapy actually work?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "For many couples, yes. Emily uses Emotionally Focused Therapy (EFT), one of the most well-researched couples approaches, which helps partners break negative cycles and rebuild secure connection."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What if only one of us wants to go?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "That's common. Ambivalence is normal, and a first session can lower the temperature enough for you to decide together whether to continue."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you take sides?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "No. The work is on the pattern between you, not on deciding who's right. Sessions are a supportive, non-blaming space where both partners can be heard."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How much is couples therapy?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Couples sessions are $300. Emily is out-of-network and provides a superbill for possible reimbursement."
                    }
                  }
                ]
              }
            ]
          },
        ),
      },
    ],
  }),
  component: CouplesPage,
});

function CouplesPage() {
  return (
    <SiteLayout crumbs={[
      {
        "label": "Home",
        "to": "/"
      },
      {
        "label": "Couples Therapy"
      }
    ]}>
      <section className="hero solo"><div className="wrap"><div> <div className="eyebrow">Couples Therapy· McLean &amp; Arlington, VA· Telehealth</div><h1>Love each other — but keep getting <em>stuck</em>?</h1><p className="sub">Emotion-focused couples therapy to help you break the cycle, rebuild trust, and feel close again.</p> <div className="cta-row"><Link className="btn lg" to="/book">Book a free 15-minute consultation</Link></div></div></div></section>
      <section className="band"><div className="wrap"><div className="prose"> <p>Most couples don't have a "communication problem" so much as a painful pattern they can't seem to escape — one reaches, the other retreats; small moments spiral; you both end up feeling alone. Using <strong>Emotionally Focused Therapy</strong>, we'll slow those cycles down, understand what's underneath them, and help you turn toward each other instead of away.</p> <h3>Couples therapy can help you</h3> <ul> <li>Understand the cycle that keeps pulling you apart</li> <li>Communicate without it turning into the same fight</li> <li>Rebuild trust after disconnection, conflict, or hurt</li> <li>Feel emotionally and physically closer again</li> <li>Become the partner you want to be</li> </ul> <h3>What to expect</h3> <p>We'll meet weekly, with both partners present. Sessions are a supportive, non-blaming space where each of you can be heard. Couples sessions are $300, in person in McLean or Arlington, or by secure video for partners located in VA or Utah.</p>
      </div></div></section>
      <section className="band finalcta"> <div className="wrap"><h2>Take the first step together.</h2><p>Book a free 15-minute consultation to see if we're the right fit for your relationship.</p> <Link className="btn lg" to="/book">Book a free 15-minute consultation</Link> <p style={{"marginTop": "22px", "fontSize": "15px", "color": "#d8c2af"}}>Prefer to talk first? Call <b style={{"color": "#f4e0cc"}}>(571) 582-8086</b> — I'll get back to you within one business day.</p></div></section><section className="band cream"><div className="wrap"><div className="center"><div className="kick">Good questions</div><h2>Frequently asked questions</h2></div><div className="faqlist"><details><summary>When should we start couples therapy?</summary><p>Sooner is easier than later — you don't need to be in crisis. If you keep having the same argument, feel more like roommates, or are recovering from a breach of trust, that's reason enough.</p></details><details><summary>Does couples therapy actually work?</summary><p>For many couples, yes. Emily uses Emotionally Focused Therapy (EFT), one of the most well-researched couples approaches, which helps partners break negative cycles and rebuild secure connection.</p></details><details><summary>What if only one of us wants to go?</summary><p>That's common. Ambivalence is normal, and a first session can lower the temperature enough for you to decide together whether to continue.</p></details><details><summary>Do you take sides?</summary><p>No. The work is on the pattern between you, not on deciding who's right. Sessions are a supportive, non-blaming space where both partners can be heard.</p></details><details><summary>How much is couples therapy?</summary><p>Couples sessions are $300. Emily is out-of-network and provides a superbill for possible reimbursement.</p></details></div></div></section>
    </SiteLayout>
  );
}
