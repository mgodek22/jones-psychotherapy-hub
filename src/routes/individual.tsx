import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/individual")({
  head: () => ({
    meta: [
          {
                "title": "Individual Therapy in Arlington, VA | Emily M. Jones, LCSW"
          },
          {
                "name": "description",
                "content": "Individual therapy for anxiety, trauma, and self-worth in Arlington & McLean, VA and by telehealth. EMDR & IFS. Book a free consultation."
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
                "content": "Individual Therapy in Arlington, VA | Emily M. Jones, LCSW"
          },
          {
                "name": "twitter:description",
                "content": "Individual therapy for anxiety, trauma, and self-worth in Arlington & McLean, VA and by telehealth. EMDR & IFS. Book a free consultation."
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
                "content": "Individual Therapy in Arlington, VA | Emily M. Jones, LCSW"
          },
          {
                "property": "og:description",
                "content": "Individual therapy for anxiety, trauma, and self-worth in Arlington & McLean, VA and by telehealth. EMDR & IFS. Book a free consultation."
          },
          {
                "property": "og:url",
                "content": "https://www.jonespsychotherapy.com/individual"
          },
          {
                "property": "og:image",
                "content": "https://www.jonespsychotherapy.com/og-image.jpg"
          }
    ],
    links: [
          {
                "rel": "canonical",
                "href": "https://www.jonespsychotherapy.com/individual"
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
                    "name": "Individual Therapy",
                    "item": "https://www.jonespsychotherapy.com/individual"
                  }
                ]
              },
              {
                "@type": "Service",
                "name": "Individual Therapy",
                "serviceType": "Individual Therapy",
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
                "url": "https://www.jonespsychotherapy.com/individual"
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What can individual therapy help with?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Anxiety and overwhelm, trauma and painful past experiences, self-worth and people-pleasing, repeating relationship patterns, and life transitions — including feeling 'successful but empty.'"
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How long does individual therapy take?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "It's different for everyone. Some concerns shift in a few months; deeper or developmental trauma takes longer. You and Emily set goals and review progress regularly so you always know where things stand."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How often will we meet?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Usually weekly, for 50-minute sessions. Consistency early on tends to build momentum."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What therapy approaches do you use?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Primarily EMDR, Internal Family Systems, and attachment-focused, psychodynamic work — tailored to you rather than a one-size-fits-all formula."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do I need a diagnosis to start therapy?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "No. Many people come simply because something feels stuck or off. You don't need a label or a crisis to deserve support."
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
  component: IndividualPage,
});

function IndividualPage() {
  return (
    <SiteLayout crumbs={[
      {
        "label": "Home",
        "to": "/"
      },
      {
        "label": "Individual Therapy"
      }
    ]}>
      <section className="hero solo"><div className="wrap"><div> <div className="eyebrow">Individual Therapy· Arlington & McLean, VA· Telehealth</div><h1>Do you want to feel <em>empowered</em> to change your life?</h1><p className="sub">You are not alone. Together we'll turn painful emotions into a sense of freedom and lightness — and help you feel more connected to yourself and others.</p> <div className="cta-row"><Link to="/book" className="btn lg">Book a free 15-minute consultation</Link></div></div></div></section>
      <section className="band"><div className="wrap"><div className="prose"> <p>We all need help at times accessing our own voice, working through painful emotions, and moving forward. Connection is key. When you're connected to yourself — when you trust your sense of what's right for you — you find your passions, your people, and the life you want.</p> <p>I'm here to help you recognize and claim your voice, find your own wisdom, and put it into action. My approach draws on <strong>EMDR</strong>, <strong>Internal Family Systems</strong>, and <strong>attachment-focused, psychodynamic</strong> work — especially for developmental and relational trauma.</p> <h3>What individual therapy can help with</h3> <ul> <li>Anxiety, overwhelm, and a relentless inner critic</li> <li>Trauma and painful experiences from the past that still affect you today</li> <li>Relationship and attachment patterns that keep repeating</li> <li>Self-worth, people-pleasing, and difficulty setting boundaries</li> <li>Life transitions, meaning, and feeling "successful but empty"</li> </ul> <h3>What you can expect</h3> <p>You'll learn to trust yourself and your instincts, accept your feelings and your past, find more fulfillment in your relationships, and feel more optimistic about your future. Sessions are 50 minutes, weekly, in person in Arlington or McLean, or by secure video.</p>
      </div></div></section>
      <section className="band finalcta"> <div className="wrap"><h2>Ready to feel more like yourself?</h2><p>Book a free 15-minute consultation and let's talk about what you're looking for.</p> <Link to="/book" className="btn lg">Book a free 15-minute consultation</Link> <p style={{"marginTop": "22px", "fontSize": "15px", "color": "#d8c2af"}}>Prefer to talk first? Call <b style={{"color": "#f4e0cc"}}>(571) 582-8086</b> — I'll get back to you within one business day.</p></div></section><section className="band cream"><div className="wrap"><div className="center"><div className="kick">Good questions</div><h2>Frequently asked questions</h2></div><div className="faqlist"><details><summary>What can individual therapy help with?</summary><p>Anxiety and overwhelm, trauma and painful past experiences, self-worth and people-pleasing, repeating relationship patterns, and life transitions — including feeling 'successful but empty.'</p></details><details><summary>How long does individual therapy take?</summary><p>It's different for everyone. Some concerns shift in a few months; deeper or developmental trauma takes longer. You and Emily set goals and review progress regularly so you always know where things stand.</p></details><details><summary>How often will we meet?</summary><p>Usually weekly, for 50-minute sessions. Consistency early on tends to build momentum.</p></details><details><summary>What therapy approaches do you use?</summary><p>Primarily EMDR, Internal Family Systems, and attachment-focused, psychodynamic work — tailored to you rather than a one-size-fits-all formula.</p></details><details><summary>Do I need a diagnosis to start therapy?</summary><p>No. Many people come simply because something feels stuck or off. You don't need a label or a crisis to deserve support.</p></details></div></div></section>
    </SiteLayout>
  );
}
