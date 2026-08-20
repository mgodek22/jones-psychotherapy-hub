import { createFileRoute, Link } from "@tanstack/react-router";

import { ConsultHandoff } from "@/components/site/ConsultHandoff";
import { FunnelLayout } from "@/components/site/SiteLayout";
import { PHONE_HREF } from "@/components/site/site-config";

export const Route = createFileRoute("/explore")({
  head: () => ({
    meta: [
          {
                "title": "Explore Therapy with Emily M. Jones, LCSW | Individual, Couples & Group"
          },
          {
                "name": "description",
                "content": "See the ways we can work together — individual, couples, and group therapy in Arlington & McLean, VA and by telehealth. Send your info or call to get started."
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
                "content": "Explore Therapy with Emily M. Jones, LCSW | Individual, Couples & Group"
          },
          {
                "name": "twitter:description",
                "content": "See the ways we can work together — individual, couples, and group therapy in Arlington & McLean, VA and by telehealth. Send your info or call to get started."
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
                "content": "Explore Therapy with Emily M. Jones, LCSW | Individual, Couples & Group"
          },
          {
                "property": "og:description",
                "content": "See the ways we can work together — individual, couples, and group therapy in Arlington & McLean, VA and by telehealth. Send your info or call to get started."
          },
          {
                "property": "og:url",
                "content": "https://www.jonespsychotherapy.com/explore"
          },
          {
                "property": "og:image",
                "content": "https://www.jonespsychotherapy.com/og-image.jpg"
          }
    ],
    links: [
          {
                "rel": "canonical",
                "href": "https://www.jonespsychotherapy.com/explore"
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
                    "name": "Explore Therapy",
                    "item": "https://www.jonespsychotherapy.com/explore"
                  }
                ]
              }
            ]
          },
        ),
      },
    ],
  }),
  component: ExplorePage,
});

function ExplorePage() {
  return (
    <FunnelLayout>
      <section className="hero solo"><div className="wrap"><div> <div className="eyebrow">Ways we can work together· Arlington· McLean· Telehealth in Virginia & Utah</div> <h1>Which kind of therapy <em>fits you?</em></h1> <p className="sub">Three ways to work together, all warm, direct, and tailored to you. Take a look, then tell me a little about what's bringing you in — or call and we'll figure it out together.</p> <div className="cta-row"><a href="#start" className="btn lg">Get started below</a><a href={PHONE_HREF} className="btn ghost lg">Call (571) 582-8086</a></div> </div></div></section>
      <section className="band"><div className="wrap"> <div className="cards"><div className="cardx"><h3>Individual Therapy</h3><p>One-on-one, depth-oriented work for anxiety, trauma, self-worth, and life transitions — using EMDR, Internal Family Systems, and attachment-focused approaches.</p><p style={{"fontSize": "13.5px", "color": "var(--sand)", "fontStyle": "italic", "margin": "10px 0 0"}}>A good fit if you feel anxious or stuck, or the past keeps showing up in the present.</p><div className="price">From $250· 50 min</div></div><div className="cardx"><h3>Couples Therapy</h3><p>Emotionally focused therapy (EFT) to break the cycle that pulls you apart, rebuild trust, and feel close again — with both partners in the room.</p><p style={{"fontSize": "13.5px", "color": "var(--sand)", "fontStyle": "italic", "margin": "10px 0 0"}}>A good fit if you keep having the same fight, or feel more like roommates than partners.</p><div className="price">$300· per session</div></div><div className="cardx"><h3>Group Therapy</h3><p>A weekly, confidential interpersonal group of 6–8 people, led by a Certified Group Psychotherapist — where you practice new ways of relating in real time.</p><p style={{"fontSize": "13.5px", "color": "var(--sand)", "fontStyle": "italic", "margin": "10px 0 0"}}>A good fit if relationships feel hard and you want to change the pattern, not just talk about it.</p><div className="price">$125· per session</div></div></div> <p style={{"textAlign": "center", "color": "var(--ink2)", "maxWidth": "620px", "margin": "24px auto 0"}}>Not sure which fits? That's completely normal — tell me a little below, or call and we'll talk it through.</p>
      </div></section>
      <section className="band cream"><div className="wrap"> <div className="center"><div className="kick">Two easy ways to start</div><h2>Tell me a little, or just call.</h2> <p className="sub2" style={{"maxWidth": "600px", "margin": "6px auto 0"}}>Share a few details and I'll personally reach out within one business day. Prefer to talk now? Call <a href={PHONE_HREF} style={{"color": "var(--coral-d)", "fontWeight": "600"}}>(571) 582-8086</a>.</p></div> <ConsultHandoff ctaLabel="Send my information" />
      </div></section>
    </FunnelLayout>
  );
}
