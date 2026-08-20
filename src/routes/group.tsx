import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/group")({
  head: () => ({
    meta: [
          {
                "title": "Group Therapy in Arlington, VA | Emily M. Jones, LCSW, CGP"
          },
          {
                "name": "description",
                "content": "Weekly in-person interpersonal group therapy in Arlington, VA with a Certified Group Psychotherapist. $125/session. Book a consultation."
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
                "content": "Group Therapy in Arlington, VA | Emily M. Jones, LCSW, CGP"
          },
          {
                "name": "twitter:description",
                "content": "Weekly in-person interpersonal group therapy in Arlington, VA with a Certified Group Psychotherapist. $125/session. Book a consultation."
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
                "content": "Group Therapy in Arlington, VA | Emily M. Jones, LCSW, CGP"
          },
          {
                "property": "og:description",
                "content": "Weekly in-person interpersonal group therapy in Arlington, VA with a Certified Group Psychotherapist. $125/session. Book a consultation."
          },
          {
                "property": "og:url",
                "content": "https://www.jonespsychotherapy.com/group"
          },
          {
                "property": "og:image",
                "content": "https://www.jonespsychotherapy.com/og-image.jpg"
          }
    ],
    links: [
          {
                "rel": "canonical",
                "href": "https://www.jonespsychotherapy.com/group"
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
                    "name": "Group Therapy",
                    "item": "https://www.jonespsychotherapy.com/group"
                  }
                ]
              },
              {
                "@type": "Service",
                "name": "Group Therapy",
                "serviceType": "Group Therapy",
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
                "url": "https://www.jonespsychotherapy.com/group"
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Does group therapy really work?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes — research summarized by the American Group Psychotherapy Association and the APA finds group therapy is as effective as individual therapy for many concerns, and often more efficient."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is group therapy awkward at first?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Almost everyone feels nervous before their first group. Members start with a private screening, confidentiality is a ground rule, and most people soon describe it as deeply supportive."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How much does group therapy cost?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Group sessions are $125 — roughly half the individual rate — making it a more accessible way to do deep, ongoing work."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I do group and individual therapy together?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, and many people find the combination especially effective. Individual work goes deep on your history; group lets you practice relating differently in real time."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How do I join a group?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "New members start with a brief screening conversation with Emily to make sure the group is a good fit for you. Book a consultation to ask about openings."
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
  component: GroupPage,
});

function GroupPage() {
  return (
    <SiteLayout crumbs={[
      {
        "label": "Home",
        "to": "/"
      },
      {
        "label": "Group Therapy"
      }
    ]}>
      <section className="hero solo"><div className="wrap"><div> <div className="eyebrow">Group Therapy· In person· Arlington, VA</div><h1>Become the partner, parent, and <em>professional</em> you want to be.</h1><p className="sub">A weekly, confidential group of 6–8 people to practice new ways of relating — in real time, with support.</p> <div className="cta-row"><Link className="btn lg" to="/book">Book a free 15-minute consultation</Link></div></div></div></section>
      <section className="band"><div className="wrap"><div className="prose"> <p>Group therapy is one of the most powerful ways to change relationship patterns, because you get to practice them live — with real people, in a safe, guided space. It's a weekly confidential gathering of 6–8 people who want to relate differently.</p> <h3>Group may be a great fit if…</h3> <ul> <li>Relationships feel stressful and you don't fully understand why</li> <li>You become reactive, or you withdraw when things get hard</li> <li>You feel a need to be in control, or you people-please</li> <li>It's hard to speak up, assert yourself, or stay curious when you disagree</li> <li>You're lonely, and you want to change that</li> </ul> <h3>Details</h3> <p>Groups meet weekly in person in Arlington: Wednesdays 3:45–5:00pm and 5:15–6:30pm. The fee is <strong>$125 per session</strong>, and out-of-network superbills are available for possible reimbursement. New members begin with a brief screening consultation.</p>
      </div></div></section>
      <section className="band finalcta"> <div className="wrap"><h2>Interested in joining a group?</h2><p>Book a free consultation and I'll tell you about current openings and the waitlist.</p> <Link className="btn lg" to="/book">Book a free 15-minute consultation</Link> <p style={{"marginTop": "22px", "fontSize": "15px", "color": "#d8c2af"}}>Prefer to talk first? Call <b style={{"color": "#f4e0cc"}}>(571) 582-8086</b> — I'll get back to you within one business day.</p></div></section><section className="band cream"><div className="wrap"><div className="center"><div className="kick">Good questions</div><h2>Frequently asked questions</h2></div><div className="faqlist"><details><summary>Does group therapy really work?</summary><p>Yes — research summarized by the American Group Psychotherapy Association and the APA finds group therapy is as effective as individual therapy for many concerns, and often more efficient.</p></details><details><summary>Is group therapy awkward at first?</summary><p>Almost everyone feels nervous before their first group. Members start with a private screening, confidentiality is a ground rule, and most people soon describe it as deeply supportive.</p></details><details><summary>How much does group therapy cost?</summary><p>Group sessions are $125 — roughly half the individual rate — making it a more accessible way to do deep, ongoing work.</p></details><details><summary>Can I do group and individual therapy together?</summary><p>Yes, and many people find the combination especially effective. Individual work goes deep on your history; group lets you practice relating differently in real time.</p></details><details><summary>How do I join a group?</summary><p>New members start with a brief screening conversation with Emily to make sure the group is a good fit for you. Book a consultation to ask about openings.</p></details></div></div></section>
    </SiteLayout>
  );
}
