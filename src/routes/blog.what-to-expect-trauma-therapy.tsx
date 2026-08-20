import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/blog/what-to-expect-trauma-therapy")({
  head: () => ({
    meta: [
          {
                "title": "What to Expect from Trauma Therapy | Jones Psychotherapy — Arlington & McLean"
          },
          {
                "name": "description",
                "content": "Trauma therapy isn't about reliving the worst moments — it's about helping your nervous system feel safe again. Here's how it actually unfolds."
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
                "content": "What to Expect from Trauma Therapy | Jones Psychotherapy — Arlington & McLean"
          },
          {
                "name": "twitter:description",
                "content": "Trauma therapy isn't about reliving the worst moments — it's about helping your nervous system feel safe again. Here's how it actually unfolds."
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
                "content": "What to Expect from Trauma Therapy | Jones Psychotherapy — Arlington & McLean"
          },
          {
                "property": "og:description",
                "content": "Trauma therapy isn't about reliving the worst moments — it's about helping your nervous system feel safe again. Here's how it actually unfolds."
          },
          {
                "property": "og:url",
                "content": "https://www.jonespsychotherapy.com/blog/what-to-expect-trauma-therapy"
          },
          {
                "property": "og:image",
                "content": "https://www.jonespsychotherapy.com/og-image.jpg"
          }
    ],
    links: [
          {
                "rel": "canonical",
                "href": "https://www.jonespsychotherapy.com/blog/what-to-expect-trauma-therapy"
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
                "@type": "Article",
                "headline": "What to Expect from Trauma Therapy",
                "description": "Trauma therapy isn't about reliving the worst moments — it's about helping your nervous system feel safe again. Here's how it actually unfolds.",
                "author": {
                  "@id": "https://www.jonespsychotherapy.com/#emily"
                },
                "publisher": {
                  "@id": "https://www.jonespsychotherapy.com/#practice"
                },
                "mainEntityOfPage": "https://www.jonespsychotherapy.com/blog/what-to-expect-trauma-therapy",
                "image": "https://www.jonespsychotherapy.com/og-image.jpg",
                "inLanguage": "en-US"
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
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "What to expect: What to Expect from Trauma Therapy",
                    "item": "https://www.jonespsychotherapy.com/blog/what-to-expect-trauma-therapy"
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Will trauma therapy make me feel worse?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Good trauma therapy is paced to avoid overwhelm. It's normal to feel some emotion, but you shouldn't be flooded — tell your therapist, and the pace adjusts."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How long does trauma therapy take?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "It depends on the type of trauma. A single recent event may resolve relatively quickly; developmental or repeated trauma is deeper work. We set the pace together and review progress often."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do I need a PTSD diagnosis?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "No. Many people benefit from trauma-informed therapy without a formal PTSD diagnosis, including those carrying developmental or relational trauma."
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
  component: BlogWhatToExpectTraumaTherapyPage,
});

function BlogWhatToExpectTraumaTherapyPage() {
  return (
    <SiteLayout crumbs={[
      {
        "label": "Home",
        "to": "/"
      },
      {
        "label": "Blog",
        "to": "/blog"
      },
      {
        "label": "What to expect"
      }
    ]}>
      <section className="arthero"><div className="wrap"><div className="artcat">What to expect</div><h1>What to Expect from Trauma Therapy</h1><p className="artdek">Good trauma therapy moves at your pace and starts with safety, not the hardest memories — the goal is to help your nervous system settle so the past stops running the present.</p><p className="artmeta">By Emily M. Jones, LCSW, CGP· Jones Psychotherapy, Arlington & McLean, VA</p></div></section>
      <section className="band"><div className="wrap"><div className="prose">
      <div className="box" style={{"background": "#f8e6e1", "border": "1px solid #ebc9c0", "borderRadius": "12px", "padding": "14px 18px", "margin": "18px 0"}}><strong>If you're in crisis:</strong> this article is educational and isn't a substitute for care. If you're thinking about harming yourself or are in danger, call or text <strong>988</strong> (Suicide & Crisis Lifeline), text <strong>HOME</strong> to <strong>741741</strong>, or call <strong>911</strong>. See the <Link to="/resources">Resources</Link> page for more.</div>
      <h3>Phase 1: safety and stabilization</h3>
      <p>Effective trauma therapy doesn't dive straight into painful memories. We start by building resources — grounding skills, understanding how trauma affects the body, and establishing enough steadiness that the deeper work feels manageable. This phase isn't a delay; it's what makes healing possible.</p>
      <div className="pullquote"><p>“Being able to feel safe with other people is probably the single most important aspect of mental health.”</p><cite>— Bessel van der Kolk, M.D., The Body Keeps the Score</cite></div>
      <h3>Phase 2: processing</h3>
      <p>When you're ready, we gently work through the experiences that still have a grip — often using EMDR or IFS. You stay in control, and we stay within your "window of tolerance," so you're engaged but not overwhelmed. You don't have to narrate every detail for it to work.</p>
      <div className="midcta"><p>Wondering if this is the right fit for you? Let's talk it through — no pressure.</p><Link to="/book" className="btn">Book a free 15-minute consultation</Link></div>
      <h3>Phase 3: reconnection</h3>
      <p>As the charge comes out of old memories, people describe feeling lighter, more present, and more themselves — able to invest in relationships and a future rather than bracing against the past.</p>
      <p>This is also why the therapeutic relationship matters so much. As the trauma researcher Judith Herman writes, recovery "can take place only within the context of relationships; it cannot occur in isolation." Healing isn't something you do alone by trying harder — it happens in safe connection.</p>
      <h3>You set the pace</h3>
      <p>Trauma work is collaborative and consent-based from start to finish. Nothing is forced, and we can always slow down. You're not a passenger here; you're steering.</p>
      <div className="tipbox"><h4>What helps trauma healing stick</h4><ul><li>Prioritize sleep, movement, and steadying routines between sessions.</li><li>Learn one or two grounding skills you can use anywhere.</li><li>Stay inside your "window of tolerance" — engaged, not flooded.</li><li>Lean on safe relationships; healing happens in connection, not isolation.</li><li>Expect a non-linear path. A hard week isn't a failure or a setback.</li></ul></div>
      </div></div></section>
      <section className="band"><div className="wrap" style={{"maxWidth": "760px"}}><h2 style={{"fontSize": "26px"}}>Common questions</h2><div className="faqwrap" style={{"marginTop": "14px"}}><details><summary>Will trauma therapy make me feel worse?</summary><p>Good trauma therapy is paced to avoid overwhelm. It's normal to feel some emotion, but you shouldn't be flooded — tell your therapist, and the pace adjusts.</p></details><details><summary>How long does trauma therapy take?</summary><p>It depends on the type of trauma. A single recent event may resolve relatively quickly; developmental or repeated trauma is deeper work. We set the pace together and review progress often.</p></details><details><summary>Do I need a PTSD diagnosis?</summary><p>No. Many people benefit from trauma-informed therapy without a formal PTSD diagnosis, including those carrying developmental or relational trauma.</p></details></div></div></section>
      <section className="band cream"><div className="wrap"><div className="center"><div className="kick">Ready when you are</div><h2>Let's take the first step together.</h2><p className="sub2">Book a free, no-pressure 15-minute consultation with Emily M. Jones, LCSW, CGP.</p><div style={{"marginTop": "18px"}}><Link to="/book" className="btn lg">Book a free consultation</Link></div></div></div></section>
    </SiteLayout>
  );
}
