import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/what-is-emdr")({
  head: () => ({
    meta: [
          {
                "title": "What Is EMDR Therapy? | Jones Psychotherapy — Arlington & McLean, VA"
          },
          {
                "name": "description",
                "content": "What EMDR therapy is, how it works, the research behind it, and what it treats — explained by Emily M. Jones, LCSW, CGP."
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
                "content": "What Is EMDR Therapy? | Jones Psychotherapy — Arlington & McLean, VA"
          },
          {
                "name": "twitter:description",
                "content": "What EMDR therapy is, how it works, the research behind it, and what it treats — explained by Emily M. Jones, LCSW, CGP."
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
                "content": "What Is EMDR Therapy? | Jones Psychotherapy — Arlington & McLean, VA"
          },
          {
                "property": "og:description",
                "content": "What EMDR therapy is, how it works, the research behind it, and what it treats — explained by Emily M. Jones, LCSW, CGP."
          },
          {
                "property": "og:url",
                "content": "https://www.jonespsychotherapy.com/what-is-emdr"
          },
          {
                "property": "og:image",
                "content": "https://www.jonespsychotherapy.com/og-image.jpg"
          }
    ],
    links: [
          {
                "rel": "canonical",
                "href": "https://www.jonespsychotherapy.com/what-is-emdr"
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
                    "name": "What Is EMDR?",
                    "item": "https://www.jonespsychotherapy.com/what-is-emdr"
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Does EMDR actually work, or is it pseudoscience?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "EMDR is evidence-based and recommended for PTSD by the American Psychological Association, the World Health Organization, and the U.S. Departments of Veterans Affairs and Defense, with dozens of controlled trials behind it."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What does an EMDR session feel like?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "You briefly bring a difficult memory to mind while following a back-and-forth motion — eye movements, taps, or tones — and notice whatever comes up without forcing it. Over time the memory tends to feel less intense."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Why is EMDR so tiring or emotional?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Reprocessing activates real memories and body sensations, so feeling tired or emotional afterward is normal. Good pacing keeps you inside your 'window of tolerance' so you're engaged but not overwhelmed."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How many EMDR sessions will I need?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "It varies. A single recent event may resolve in a handful of sessions; developmental or repeated trauma usually takes longer. Preparation and safety come first, then reprocessing."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can EMDR be done online?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. EMDR is delivered effectively by secure video. Emily offers it in person in Arlington and McLean and by telehealth in Virginia and Utah."
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
  component: WhatIsEmdrPage,
});

function WhatIsEmdrPage() {
  return (
    <SiteLayout crumbs={[
      {
        "label": "Home",
        "to": "/"
      },
      {
        "label": "What Is EMDR?"
      }
    ]}>
      <section className="hero solo"><div className="wrap"><div> <div className="eyebrow">Approaches· What is EMDR?</div><h1>What Is EMDR Therapy?</h1><p className="sub">EMDR — Eye Movement Desensitization and Reprocessing — is a well-researched therapy that helps your brain reprocess distressing memories so they lose their grip on the present.</p> <div className="cta-row"><Link to="/book" className="btn lg">Book a free 15-minute consultation</Link></div></div></div></section><section className="band"><div className="wrap"><div className="prose"><h3>The short answer</h3><p>EMDR is a structured, evidence-based therapy for trauma and other distressing experiences. It's built on the idea that the mind can heal from psychological wounds much as the body heals from physical ones — and that when a memory is stored in a 'stuck,' unprocessed form, it keeps getting triggered. EMDR helps the brain finish processing it.</p><h3>How EMDR works</h3><p>When something overwhelming happens, the brain can store the memory in a raw form, so a sound, smell, or situation can trigger the old fear or shame as if it were happening now. In EMDR you briefly bring the memory to mind while following a gentle back-and-forth motion — eye movements, taps, or tones (called <strong>bilateral stimulation</strong>). This appears to free the brain to reprocess the experience, much as it does during dream sleep.</p><p>EMDR follows an <strong>eight-phase protocol</strong>: history-taking, preparation and resourcing, assessing the target memory, reprocessing, installing a positive belief, a body scan, closure, and re-evaluation. The early phases build safety; reprocessing only begins when you're ready.</p><blockquote className="pq"><p>“Once the block is removed, healing resumes. EMDR therapy demonstrates that a similar sequence of events occurs with mental processes.”</p><cite>— The EMDR Institute, founded by Francine Shapiro, Ph.D.</cite></blockquote><h3>What the research says</h3><p>EMDR is recommended as an effective treatment for PTSD by the <strong>American Psychological Association</strong>, the <strong>World Health Organization</strong>, and the U.S. <strong>Departments of Veterans Affairs and Defense</strong>, with dozens of controlled studies behind it.</p><h3>What EMDR helps with</h3><p>EMDR is best known for trauma and PTSD, but it also helps with anxiety, panic, phobias, grief, and the lingering effects of difficult childhood experiences (developmental and relational trauma). You don't need one dramatic event to benefit — many people carry an accumulation of smaller wounds.</p><h3>How Emily uses EMDR</h3><p>Emily is trained in EMDR and weaves it with <Link to="/what-is-ifs">Internal Family Systems</Link> and attachment-focused work. She paces trauma work carefully, starting with safety and stabilization. EMDR is available in person in Arlington and McLean and by secure video across Virginia and Utah.</p><p>Want the practical, what-to-expect version? Read <Link to="/blog/what-to-expect-trauma-therapy">What to Expect from Trauma Therapy</Link>.</p><p style={{"fontSize": "13px", "color": "var(--muted)", "marginTop": "24px", "borderTop": "1px solid var(--line)", "paddingTop": "14px"}}>Summarized from EMDRIA (the EMDR International Association) and the EMDR Institute. This page is educational and isn't a substitute for individual clinical advice.</p></div></div></section><section className="band finalcta"> <div className="wrap"><h2>Curious whether this fits what you're going through?</h2><p>Book a free 15-minute consultation and let's talk it through — no pressure.</p> <Link to="/book" className="btn lg">Book a free 15-minute consultation</Link> <p style={{"marginTop": "22px", "fontSize": "15px", "color": "#d8c2af"}}>Prefer to talk first? Call <b style={{"color": "#f4e0cc"}}>(571) 582-8086</b> — I'll get back to you within one business day.</p></div></section><section className="band cream"><div className="wrap"><div className="center"><div className="kick">Good questions</div><h2>Frequently asked questions</h2></div><div className="faqlist"><details><summary>Does EMDR actually work, or is it pseudoscience?</summary><p>EMDR is evidence-based and recommended for PTSD by the American Psychological Association, the World Health Organization, and the U.S. Departments of Veterans Affairs and Defense, with dozens of controlled trials behind it.</p></details><details><summary>What does an EMDR session feel like?</summary><p>You briefly bring a difficult memory to mind while following a back-and-forth motion — eye movements, taps, or tones — and notice whatever comes up without forcing it. Over time the memory tends to feel less intense.</p></details><details><summary>Why is EMDR so tiring or emotional?</summary><p>Reprocessing activates real memories and body sensations, so feeling tired or emotional afterward is normal. Good pacing keeps you inside your 'window of tolerance' so you're engaged but not overwhelmed.</p></details><details><summary>How many EMDR sessions will I need?</summary><p>It varies. A single recent event may resolve in a handful of sessions; developmental or repeated trauma usually takes longer. Preparation and safety come first, then reprocessing.</p></details><details><summary>Can EMDR be done online?</summary><p>Yes. EMDR is delivered effectively by secure video. Emily offers it in person in Arlington and McLean and by telehealth in Virginia and Utah.</p></details></div></div></section>
    </SiteLayout>
  );
}
