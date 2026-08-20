import { createFileRoute, Link } from "@tanstack/react-router";

import { FunnelLayout } from "@/components/site/SiteLayout";
import { OptinForm } from "@/components/site/OptinForm";

export const Route = createFileRoute("/guide")({
  head: () => ({
    meta: [
          {
                "title": "Free Guide: Quiet the Inner Critic | Emily M. Jones, LCSW"
          },
          {
                "name": "description",
                "content": "Free guide for high-achieving women: 5 first steps to quiet the inner critic and ease high-functioning anxiety. From Emily M. Jones, LCSW."
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
                "content": "Free Guide: Quiet the Inner Critic | Emily M. Jones, LCSW"
          },
          {
                "name": "twitter:description",
                "content": "Free guide for high-achieving women: 5 first steps to quiet the inner critic and ease high-functioning anxiety. From Emily M. Jones, LCSW."
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
                "content": "Free Guide: Quiet the Inner Critic | Emily M. Jones, LCSW"
          },
          {
                "property": "og:description",
                "content": "Free guide for high-achieving women: 5 first steps to quiet the inner critic and ease high-functioning anxiety. From Emily M. Jones, LCSW."
          },
          {
                "property": "og:url",
                "content": "https://www.jonespsychotherapy.com/guide"
          },
          {
                "property": "og:image",
                "content": "https://www.jonespsychotherapy.com/og-image.jpg"
          }
    ],
    links: [
          {
                "rel": "canonical",
                "href": "https://www.jonespsychotherapy.com/guide"
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
                    "name": "Free Guide",
                    "item": "https://www.jonespsychotherapy.com/guide"
                  }
                ]
              }
            ]
          },
        ),
      },
    ],
  }),
  component: GuidePage,
});

function GuidePage() {
  return (
    <FunnelLayout>
      <section className="hero solo"><div className="wrap"><div> <div className="eyebrow">Free guide· For high-achieving women</div> <h1>Composed at work, <em>unraveling</em> underneath?</h1> <p className="sub">Get <strong>Quiet the Inner Critic</strong> — 5 first steps for women who look calm on the outside but feel anxious, stretched thin, and never quite “enough” inside.</p> </div></div></section>
      <section className="band optin"><div className="wrap"><div className="box"> <div className="art"> <div className="kick" style={{"fontSize": "12.5px", "letterSpacing": ".15em", "textTransform": "uppercase", "fontWeight": "700", "marginBottom": "10px"}}>What's inside</div> <h3>A short, practical guide you can read in 10 minutes.</h3> <ul><li>Why high-functioning anxiety hides in plain sight</li><li>The inner-critic trap — and how to step out of it</li><li>A 2-minute practice to feel grounded before a big moment</li><li>How to tell when it's time to reach out for support</li></ul> </div> <div className="form"> <OptinForm variant="guide" /></div>
      </div></div></section>
    </FunnelLayout>
  );
}
