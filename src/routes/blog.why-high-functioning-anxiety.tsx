import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/blog/why-high-functioning-anxiety")({
  head: () => ({
    meta: [
          {
                "title": "Why High-Functioning Anxiety Is Easy to Miss | Jones Psychotherapy"
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
                "content": "Why High-Functioning Anxiety Is Easy to Miss | Jones Psychotherapy"
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
                "content": "Why High-Functioning Anxiety Is Easy to Miss | Jones Psychotherapy"
          },
          {
                "property": "og:url",
                "content": "https://www.jonespsychotherapy.com/blog/why-high-functioning-anxiety"
          },
          {
                "property": "og:image",
                "content": "https://www.jonespsychotherapy.com/og-image.jpg"
          }
    ],
    links: [
          {
                "rel": "canonical",
                "href": "https://www.jonespsychotherapy.com/blog/why-high-functioning-anxiety"
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
                "headline": "Why High-Functioning Anxiety Is So Easy to Miss",
                "description": "You look calm and capable — but inside you're bracing, over-preparing, and never quite \"enough.\" Here's why high-functioning anxiety hides, and what helps.",
                "author": {
                  "@id": "https://www.jonespsychotherapy.com/#emily"
                },
                "publisher": {
                  "@id": "https://www.jonespsychotherapy.com/#practice"
                },
                "mainEntityOfPage": "https://www.jonespsychotherapy.com/blog/why-high-functioning-anxiety",
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
                    "name": "Why: Why High-Functioning Anxiety Is So Easy to Miss",
                    "item": "https://www.jonespsychotherapy.com/blog/why-high-functioning-anxiety"
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Is high-functioning anxiety a diagnosis?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "It's not a formal diagnosis — it's a common way of describing anxiety in people who keep performing well. It's still worth addressing."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Won't slowing down hurt my performance?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Usually the opposite. Anxiety-driven output comes at a cost to sleep, health, and creativity; easing the pressure tends to make good work more sustainable."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "When should I reach out?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "If it's constant, affecting sleep or relationships, or you're just tired of white-knuckling it, that's reason enough. You don't have to be in crisis to deserve support."
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
  component: BlogWhyHighFunctioningAnxietyPage,
});

function BlogWhyHighFunctioningAnxietyPage() {
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
        "label": "Why"
      }
    ]}>
      <section className="arthero"><div className="wrap"><div className="artcat">Why</div><h1>Why High-Functioning Anxiety Is So Easy to Miss</h1><p className="artdek">High-functioning anxiety hides precisely because it looks like competence: you keep delivering, so no one — sometimes not even you — sees the strain underneath.</p><p className="artmeta">By Emily M. Jones, LCSW, CGP· Jones Psychotherapy, Arlington &amp; McLean, VA</p></div></section>
      <section className="band"><div className="wrap"><div className="prose">
      <div className="box" style={{"background": "#f8e6e1", "border": "1px solid #ebc9c0", "borderRadius": "12px", "padding": "14px 18px", "margin": "18px 0"}}><strong>If you're in crisis:</strong> this article is educational and isn't a substitute for care. If you're thinking about harming yourself or are in danger, call or text <strong>988</strong> (Suicide &amp; Crisis Lifeline), text <strong>HOME</strong> to <strong>741741</strong>, or call <strong>911</strong>. See the <Link to="/resources">Resources</Link> page for more.</div>
      <h3>What it looks like</h3>
      <p>It rarely looks like panic. It looks like over-preparing, over-giving, and a mind that won't stop scanning for what could go wrong. It looks like being the reliable one while quietly exhausted, and a quiet voice that says whatever you did wasn't enough.</p>
      <p>Because the results are good, the cost stays invisible — until sleep, relationships, or your ability to actually enjoy things start to fray.</p>
      <div className="pullquote"><p>&ldquo;Perfectionism is not the same thing as striving to be your best.&rdquo;</p><cite>&mdash; Brené Brown, The Gifts of Imperfection</cite></div>
      <h3>Why it's easy to miss</h3>
      <p>Anxiety that <em>drives</em> achievement gets rewarded, so it's easy to mistake for a personality trait or a strong work ethic. Many high-achieving women, in particular, learned early that staying ahead kept them safe or valued.</p>
      <div className="midcta"><p>Wondering if this is the right fit for you? Let's talk it through — no pressure.</p><Link className="btn" to="/book">Book a free 15-minute consultation</Link></div>
      <h3>What actually helps</h3>
      <p>The goal isn't to do more — it's usually to do a little less, and to change your relationship with the inner critic. Approaches like IFS and EMDR get underneath the pattern rather than just managing symptoms. Small, concrete steps help too — you can start with my free guide, <em>Quiet the Inner Critic</em>.</p>
      <h3>The perfectionism connection</h3>
      <p>High-functioning anxiety and perfectionism often travel together. Perfectionism promises safety — <em>if I get it all right, I can avoid criticism or shame</em> — but the bar keeps moving, so the relief never quite arrives.</p>
      <p>Untangling the two is much of the work: learning that your worth isn't a performance, and that loosening your grip doesn't mean everything falls apart. Anxiety disorders are also the most common mental-health concern in the U.S. and among the most treatable — you are far from alone in this, and it responds well to help.</p>
      <div className="tipbox"><h4>Small shifts that lower the pressure</h4><ul><li>Swap "I have to" for "I'm choosing to" — and notice what you'd actually drop.</li><li>Set a "good enough" bar <em>before</em> you start a task, and stop there.</li><li>Schedule rest like it's a meeting, and protect it just as fiercely.</li><li>Name the inner critic's voice so you can answer it instead of obeying it.</li><li>Tell one safe person how you actually feel — secrecy feeds the strain.</li></ul></div>
      </div></div></section>
      <section className="band"><div className="wrap" style={{"maxWidth": "760px"}}><h2 style={{"fontSize": "26px"}}>Common questions</h2><div className="faqwrap" style={{"marginTop": "14px"}}><details><summary>Is high-functioning anxiety a diagnosis?</summary><p>It's not a formal diagnosis — it's a common way of describing anxiety in people who keep performing well. It's still worth addressing.</p></details><details><summary>Won't slowing down hurt my performance?</summary><p>Usually the opposite. Anxiety-driven output comes at a cost to sleep, health, and creativity; easing the pressure tends to make good work more sustainable.</p></details><details><summary>When should I reach out?</summary><p>If it's constant, affecting sleep or relationships, or you're just tired of white-knuckling it, that's reason enough. You don't have to be in crisis to deserve support.</p></details></div></div></section>
      <section className="band cream"><div className="wrap"><div className="center"><div className="kick">Ready when you are</div><h2>Let's take the first step together.</h2><p className="sub2">Book a free, no-pressure 15-minute consultation with Emily M. Jones, LCSW, CGP.</p><div style={{"marginTop": "18px"}}><Link className="btn lg" to="/book">Book a free consultation</Link></div></div></div></section>
    </SiteLayout>
  );
}
