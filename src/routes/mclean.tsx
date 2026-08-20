import { createFileRoute, Link } from "@tanstack/react-router";

import { PHONE_HREF } from "@/components/site/site-config";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/mclean")({
  head: () => ({
    meta: [
          {
                "title": "Therapist in McLean, VA | Emily M. Jones, LCSW — Couples & Trauma"
          },
          {
                "name": "description",
                "content": "In-person therapy in McLean, VA for individuals and couples with Emily M. Jones, LCSW. EMDR, IFS & EFT. Book a free consultation."
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
                "content": "Therapist in McLean, VA | Emily M. Jones, LCSW — Couples & Trauma"
          },
          {
                "name": "twitter:description",
                "content": "In-person therapy in McLean, VA for individuals and couples with Emily M. Jones, LCSW. EMDR, IFS & EFT. Book a free consultation."
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
                "content": "Therapist in McLean, VA | Emily M. Jones, LCSW — Couples & Trauma"
          },
          {
                "property": "og:description",
                "content": "In-person therapy in McLean, VA for individuals and couples with Emily M. Jones, LCSW. EMDR, IFS & EFT. Book a free consultation."
          },
          {
                "property": "og:url",
                "content": "https://www.jonespsychotherapy.com/mclean"
          },
          {
                "property": "og:image",
                "content": "https://www.jonespsychotherapy.com/og-image.jpg"
          }
    ],
    links: [
          {
                "rel": "canonical",
                "href": "https://www.jonespsychotherapy.com/mclean"
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
                    "name": "Therapy in McLean, VA",
                    "item": "https://www.jonespsychotherapy.com/mclean"
                  }
                ]
              },
              {
                "@type": "Service",
                "name": "Therapy in McLean, VA",
                "provider": {
                  "@id": "https://www.jonespsychotherapy.com/#practice"
                },
                "areaServed": "McLean, VA",
                "url": "https://www.jonespsychotherapy.com/mclean"
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Where is your McLean, VA therapy office located?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Jones Psychotherapy is at 1497 Chain Bridge Road, McLean, VA 22101, near Tysons. Use the map and 'Get directions' button on this page for directions to the office."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is there parking near the McLean office?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. The Chain Bridge Road office is convenient to Tysons and the McLean and Tysons Metro stations (Silver line), with on-site and nearby parking."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you offer in-person therapy in McLean?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes — in-person individual and couples therapy at the McLean office, plus secure telehealth across Virginia and Utah."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What areas near McLean do you serve?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Clients come from across McLean and Northern Virginia — including Tysons, Vienna, Great Falls, Falls Church, Oakton, and Langley — plus the greater DC metro."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Are you a couples or EMDR therapist near me in McLean?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Emily offers emotionally focused couples therapy (EFT), EMDR and trauma work, and Internal Family Systems from the McLean office and by telehealth in VA and UT."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How do I get started at the McLean office?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Book a free 15-minute consultation to see if you're a good fit — book online or call (571) 582-8086."
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
  component: McleanPage,
});

function McleanPage() {
  return (
    <SiteLayout crumbs={[
      {
        "label": "Home",
        "to": "/"
      },
      {
        "label": "Therapy in McLean, VA"
      }
    ]}>
      <section className="hero solo"><div className="wrap"><div> <div className="eyebrow">Therapy in McLean, Virginia· In person & telehealth</div> <h1>A therapist in <em>McLean, VA</em> for anxiety, trauma & relationships.</h1> <p className="sub">In-person and virtual therapy in McLean for individuals and couples navigating anxiety, trauma, and relationships.</p> <div className="cta-row"><Link to="/book" className="btn lg">Book a free 15-minute consultation</Link><a className="btn ghost lg" href="https://www.google.com/maps/dir/?api=1&destination=Jones+Psychotherapy%2C+1497+Chain+Bridge+Road%2C+McLean%2C+VA+22101" target="_blank" rel="noopener">Get directions</a></div></div></div></section>
      <section className="band"><div className="wrap"> <div className="mapcard"> <div className="mapembed"><iframe src="https://maps.google.com/maps?q=Jones+Psychotherapy%2C+1497+Chain+Bridge+Road%2C+McLean%2C+VA+22101&z=15&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Map to the McLean, VA therapy office" /></div> <div className="mapinfo"> <div className="maptag">Jones Psychotherapy — McLean office</div> <div className="mapaddr">1497 Chain Bridge Road, McLean, VA 22101</div> <p className="mapmeta">The Chain Bridge Road office is convenient to Tysons and the McLean and Tysons Metro stations (Silver line), with on-site and nearby parking.</p> <div className="mapbtns"> <a className="btn" href="https://www.google.com/maps/dir/?api=1&destination=Jones+Psychotherapy%2C+1497+Chain+Bridge+Road%2C+McLean%2C+VA+22101" target="_blank" rel="noopener">Get directions →</a> <a className="btn ghost" href={PHONE_HREF}>Call (571) 582-8086</a> </div> </div> </div> <div className="prose" style={{"marginTop": "34px"}}> <h3>In-person therapy in McLean, VA</h3> <p>My McLean office is located at 1497 Chain Bridge Road, McLean, VA 22101. I offer individual and couples therapy here, drawing on EMDR, Internal Family Systems, and attachment-focused approaches — with a warm, direct style. I also see clients by secure video across Virginia and Utah, so we can meet in person or online, whichever fits your life.</p> </div> <div className="arealist"> <h3>Neighborhoods & areas served near McLean</h3> <p className="aintro">Clients come to the McLean office from across McLean, Tysons, Vienna, Great Falls, and the surrounding Northern Virginia area. If you've been searching for a therapist near you in any of these areas, you're in the right place.</p> <div className="areagrid"><span className="areaitem"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" /></svg>Tysons</span><span className="areaitem"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" /></svg>Vienna</span><span className="areaitem"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" /></svg>Great Falls</span><span className="areaitem"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" /></svg>Falls Church</span><span className="areaitem"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" /></svg>Oakton</span><span className="areaitem"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" /></svg>Langley</span><span className="areaitem"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" /></svg>Pimmit Hills</span><span className="areaitem"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" /></svg>Idylwood</span><span className="areaitem"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" /></svg>the greater DC metro</span></div> </div> <div className="prose" style={{"marginTop": "26px"}}> <h3>How to get started</h3> <p>The first step is a free 15-minute consultation. We'll talk about what's bringing you in and whether we're a good fit — no pressure, no obligation. You can <Link to="/book">book online</Link> or call <a href={PHONE_HREF}>(571) 582-8086</a>.</p> </div>
      </div></section>
      <section className="band finalcta"> <div className="wrap"><h2>Looking for a therapist in McLean, VA?</h2><p>Book a free consultation today — I'd love to hear what's bringing you in.</p> <Link to="/book" className="btn lg">Book a free 15-minute consultation</Link> <p style={{"marginTop": "22px", "fontSize": "15px", "color": "#d8c2af"}}>Prefer to talk first? Call <b style={{"color": "#f4e0cc"}}>(571) 582-8086</b> — I'll get back to you within one business day.</p></div></section><section className="band cream"><div className="wrap"><div className="center"><div className="kick">Good questions</div><h2>Frequently asked questions</h2></div><div className="faqlist"><details><summary>Where is your McLean, VA therapy office located?</summary><p>Jones Psychotherapy is at 1497 Chain Bridge Road, McLean, VA 22101, near Tysons. Use the map and 'Get directions' button on this page for directions to the office.</p></details><details><summary>Is there parking near the McLean office?</summary><p>Yes. The Chain Bridge Road office is convenient to Tysons and the McLean and Tysons Metro stations (Silver line), with on-site and nearby parking.</p></details><details><summary>Do you offer in-person therapy in McLean?</summary><p>Yes — in-person individual and couples therapy at the McLean office, plus secure telehealth across Virginia and Utah.</p></details><details><summary>What areas near McLean do you serve?</summary><p>Clients come from across McLean and Northern Virginia — including Tysons, Vienna, Great Falls, Falls Church, Oakton, and Langley — plus the greater DC metro.</p></details><details><summary>Are you a couples or EMDR therapist near me in McLean?</summary><p>Yes. Emily offers emotionally focused couples therapy (EFT), EMDR and trauma work, and Internal Family Systems from the McLean office and by telehealth in VA and UT.</p></details><details><summary>How do I get started at the McLean office?</summary><p>Book a free 15-minute consultation to see if you're a good fit — book online or call (571) 582-8086.</p></details></div></div></section>
    </SiteLayout>
  );
}
