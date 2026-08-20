import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/what-is-ifs")({
  head: () => ({
    meta: [
          {
                "title": "What Is Internal Family Systems (IFS)? | Jones Psychotherapy"
          },
          {
                "name": "description",
                "content": "What IFS therapy is — parts, protectors, and the Self — whether it's evidence-based, and what it helps with. From Emily M. Jones, LCSW, CGP."
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
                "content": "What Is Internal Family Systems (IFS)? | Jones Psychotherapy"
          },
          {
                "name": "twitter:description",
                "content": "What IFS therapy is — parts, protectors, and the Self — whether it's evidence-based, and what it helps with. From Emily M. Jones, LCSW, CGP."
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
                "content": "What Is Internal Family Systems (IFS)? | Jones Psychotherapy"
          },
          {
                "property": "og:description",
                "content": "What IFS therapy is — parts, protectors, and the Self — whether it's evidence-based, and what it helps with. From Emily M. Jones, LCSW, CGP."
          },
          {
                "property": "og:url",
                "content": "https://www.jonespsychotherapy.com/what-is-ifs"
          },
          {
                "property": "og:image",
                "content": "https://www.jonespsychotherapy.com/og-image.jpg"
          }
    ],
    links: [
          {
                "rel": "canonical",
                "href": "https://www.jonespsychotherapy.com/what-is-ifs"
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
                    "name": "What Is IFS?",
                    "item": "https://www.jonespsychotherapy.com/what-is-ifs"
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Is IFS just talking to yourself?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Not quite — it's a structured method for noticing the different 'parts' behind your reactions and relating to them with curiosity. Most people already sense being 'of two minds'; IFS gives that a map and a process."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is IFS evidence-based?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. IFS is listed on the U.S. National Registry of Evidence-based Programs and Practices and has a growing research base for depression, anxiety, and trauma."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What are 'parts' and the 'Self' in IFS?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "'Parts' are the sub-personalities behind your reactions — the inner critic, the perfectionist, the people-pleaser. The 'Self' is the calm, curious core underneath. IFS helps you lead from Self so protective parts can relax."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is IFS good for trauma?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. IFS works gently with protective parts before approaching painful material, which many people find less overwhelming than diving straight in."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "IFS vs. EMDR — which is better?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "They're complementary, not competing. EMDR reprocesses specific memories; IFS works with your internal system of parts. Emily often weaves them together based on what you need."
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
  component: WhatIsIfsPage,
});

function WhatIsIfsPage() {
  return (
    <SiteLayout crumbs={[
      {
        "label": "Home",
        "to": "/"
      },
      {
        "label": "What Is IFS?"
      }
    ]}>
      <section className="hero solo"><div className="wrap"><div> <div className="eyebrow">Approaches· What is IFS?</div><h1>What Is Internal Family Systems (IFS) Therapy?</h1><p className="sub">IFS is a compassionate, evidence-based model that sees the mind as made up of 'parts' — with a calm, wise Self at the core.</p> <div className="cta-row"><Link className="btn lg" to="/book">Book a free 15-minute consultation</Link></div></div></div></section><section className="band"><div className="wrap"><div className="prose"><h3>The short answer</h3><p>Internal Family Systems (IFS) is a form of psychotherapy that treats the mind as a system of 'parts.' You know the feeling of being 'of two minds' — part of you wants rest, part of you drives you to achieve. IFS takes those parts seriously, and helps you get to know them with curiosity so they can relax and let a calmer, wiser <strong>Self</strong> lead.</p><h3>Parts, protectors, and the Self</h3><p>In IFS, even the parts that cause us trouble — the inner critic, the perfectionist, the people-pleaser — are usually <em>protectors</em> trying to keep us safe in the only way they learned how. Underneath them all is the Self: calm, curious, compassionate, and steady.</p><blockquote className="pq"><p>&ldquo;There are no bad parts.&rdquo;</p><cite>&mdash; Richard Schwartz, Ph.D., founder of Internal Family Systems</cite></blockquote><p>Instead of fighting these parts, IFS helps you build trust with them. As protective parts feel understood, they soften — and people often report less self-criticism and more self-compassion.</p><h3>Is IFS evidence-based?</h3><p>Yes. IFS is listed on the U.S. National Registry of Evidence-based Programs and Practices and has a growing research base for depression, anxiety, and trauma. It has clear training standards through the IFS Institute.</p><h3>What IFS helps with</h3><p>IFS is used for anxiety, trauma, self-criticism, shame, relationship patterns, and the sense of being 'never enough.' Because it works gently with protective parts before approaching painful material, it can feel less overwhelming than diving straight in — which is one reason it's popular for trauma.</p><h3>How Emily uses IFS</h3><p>Emily integrates IFS with <Link to="/what-is-emdr">EMDR</Link> and attachment-focused therapy, especially for high-achieving adults who look fine on the outside but feel anxious or self-critical inside. Curious what it's like from the inside? Read <Link to="/blog/what-is-ifs">the IFS article</Link>.</p><p style={{"fontSize": "13px", "color": "var(--muted)", "marginTop": "24px", "borderTop": "1px solid var(--line)", "paddingTop": "14px"}}>Summarized from the IFS Institute (founded by Richard Schwartz, Ph.D.). Educational only; not a substitute for individual clinical advice.</p></div></div></section><section className="band finalcta"> <div className="wrap"><h2>Curious whether this fits what you're going through?</h2><p>Book a free 15-minute consultation and let's talk it through — no pressure.</p> <Link className="btn lg" to="/book">Book a free 15-minute consultation</Link> <p style={{"marginTop": "22px", "fontSize": "15px", "color": "#d8c2af"}}>Prefer to talk first? Call <b style={{"color": "#f4e0cc"}}>(571) 582-8086</b> — I'll get back to you within one business day.</p></div></section><section className="band cream"><div className="wrap"><div className="center"><div className="kick">Good questions</div><h2>Frequently asked questions</h2></div><div className="faqlist"><details><summary>Is IFS just talking to yourself?</summary><p>Not quite — it's a structured method for noticing the different 'parts' behind your reactions and relating to them with curiosity. Most people already sense being 'of two minds'; IFS gives that a map and a process.</p></details><details><summary>Is IFS evidence-based?</summary><p>Yes. IFS is listed on the U.S. National Registry of Evidence-based Programs and Practices and has a growing research base for depression, anxiety, and trauma.</p></details><details><summary>What are 'parts' and the 'Self' in IFS?</summary><p>'Parts' are the sub-personalities behind your reactions — the inner critic, the perfectionist, the people-pleaser. The 'Self' is the calm, curious core underneath. IFS helps you lead from Self so protective parts can relax.</p></details><details><summary>Is IFS good for trauma?</summary><p>Yes. IFS works gently with protective parts before approaching painful material, which many people find less overwhelming than diving straight in.</p></details><details><summary>IFS vs. EMDR — which is better?</summary><p>They're complementary, not competing. EMDR reprocesses specific memories; IFS works with your internal system of parts. Emily often weaves them together based on what you need.</p></details></div></div></section>
    </SiteLayout>
  );
}
