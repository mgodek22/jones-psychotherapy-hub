import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/what-is-group-therapy")({
  head: () => ({
    meta: [
          {
                "title": "What Is Group Therapy? | Jones Psychotherapy — Arlington, VA"
          },
          {
                "name": "description",
                "content": "What group therapy is, how it works, whether it's as effective as individual therapy, and what a session is like — from a Certified Group Psychotherapist."
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
                "content": "What Is Group Therapy? | Jones Psychotherapy — Arlington, VA"
          },
          {
                "name": "twitter:description",
                "content": "What group therapy is, how it works, whether it's as effective as individual therapy, and what a session is like — from a Certified Group Psychotherapist."
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
                "content": "What Is Group Therapy? | Jones Psychotherapy — Arlington, VA"
          },
          {
                "property": "og:description",
                "content": "What group therapy is, how it works, whether it's as effective as individual therapy, and what a session is like — from a Certified Group Psychotherapist."
          },
          {
                "property": "og:url",
                "content": "https://www.jonespsychotherapy.com/what-is-group-therapy"
          },
          {
                "property": "og:image",
                "content": "https://www.jonespsychotherapy.com/og-image.jpg"
          }
    ],
    links: [
          {
                "rel": "canonical",
                "href": "https://www.jonespsychotherapy.com/what-is-group-therapy"
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
                    "name": "What Is Group Therapy?",
                    "item": "https://www.jonespsychotherapy.com/what-is-group-therapy"
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Does group therapy actually work?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Research summarized by the American Group Psychotherapy Association and the APA finds group therapy is as effective as individual therapy for many concerns, including anxiety, depression, and trauma — and often more efficient."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Isn't group therapy just people venting?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "A well-run process group isn't a venting circle. A trained group psychotherapist keeps it focused and safe, and the real work happens in the relationships between members."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is group therapy scary or awkward at first?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Almost everyone feels nervous before their first group. Members start with a private screening, confidentiality is a ground rule, and most people quickly describe it as one of the most supportive experiences they've had."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Group vs. individual therapy — which is better?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Neither is 'better' — they do different things, and many people do both. Individual therapy goes deep on your history; group lets you practice relating differently in real time."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How big is a therapy group and how often does it meet?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Typically six to eight members meeting weekly for about 90 minutes, with a trained therapist. Emily, a Certified Group Psychotherapist, runs groups including one for professional women."
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
  component: WhatIsGroupTherapyPage,
});

function WhatIsGroupTherapyPage() {
  return (
    <SiteLayout crumbs={[
      {
        "label": "Home",
        "to": "/"
      },
      {
        "label": "What Is Group Therapy?"
      }
    ]}>
      <section className="hero solo"><div className="wrap"><div> <div className="eyebrow">Approaches· What is Group Therapy?</div><h1>What Is Group Therapy?</h1><p className="sub">Group therapy is psychotherapy led by a trained therapist with several people at once — and research shows it's as effective as individual therapy for many concerns.</p> <div className="cta-row"><Link className="btn lg" to="/book">Book a free 15-minute consultation</Link></div></div></div></section><section className="band"><div className="wrap"><div className="prose"><h3>The short answer</h3><p>In group therapy, a trained group psychotherapist works with a small group of people — often six to eight — who meet regularly to work on emotional and relational goals. According to the <strong>American Group Psychotherapy Association (AGPA)</strong>, it's a powerful, well-established form of treatment, not a lesser or 'budget' alternative to individual therapy.</p><h3>How group therapy works</h3><p>In an <strong>interpersonal process group</strong>, the focus is on what happens <em>between</em> members in the room. The same patterns that show up in your outside relationships tend to appear in the group — where, with the therapist's guidance, you can notice and shift them in real time.</p><p>Group also offers something rare: the relief of discovering you're not alone. Group therapists call this <em>universality</em>, and it's one of the well-studied 'therapeutic factors' that make groups work.</p><h3>Is group therapy as effective as individual therapy?</h3><p>Yes. Decades of research — summarized by the American Group Psychotherapy Association and the American Psychological Association — find that group therapy is <strong>as effective as individual therapy</strong> for many conditions, including anxiety, depression, and trauma, and it's often more efficient.</p><h3>What a therapy group is actually like</h3><p>A typical process group is 6–8 members meeting weekly for about 90 minutes. New members start with a private screening conversation to make sure it's a good fit. Confidentiality is a core ground rule, and the group is a safe, guided space — not a place to be put on the spot.</p><h3>Emily's groups</h3><p>As a <strong>Certified Group Psychotherapist (CGP)</strong> — a credential requiring hundreds of hours leading groups and dozens of hours of group supervision — Emily runs interpersonal process groups, including one for professional women. Learn more or ask about a spot on the <Link to="/group">Group Therapy</Link> page, or read <Link to="/blog/what-is-group-therapy">the group therapy article</Link>.</p><p style={{"fontSize": "13px", "color": "var(--muted)", "marginTop": "24px", "borderTop": "1px solid var(--line)", "paddingTop": "14px"}}>Summarized from the American Group Psychotherapy Association (AGPA) and the American Psychological Association. Educational only; not a substitute for individual clinical advice.</p></div></div></section><section className="band finalcta"> <div className="wrap"><h2>Curious whether this fits what you're going through?</h2><p>Book a free 15-minute consultation and let's talk it through — no pressure.</p> <Link className="btn lg" to="/book">Book a free 15-minute consultation</Link> <p style={{"marginTop": "22px", "fontSize": "15px", "color": "#d8c2af"}}>Prefer to talk first? Call <b style={{"color": "#f4e0cc"}}>(571) 582-8086</b> — I'll get back to you within one business day.</p></div></section><section className="band cream"><div className="wrap"><div className="center"><div className="kick">Good questions</div><h2>Frequently asked questions</h2></div><div className="faqlist"><details><summary>Does group therapy actually work?</summary><p>Yes. Research summarized by the American Group Psychotherapy Association and the APA finds group therapy is as effective as individual therapy for many concerns, including anxiety, depression, and trauma — and often more efficient.</p></details><details><summary>Isn't group therapy just people venting?</summary><p>A well-run process group isn't a venting circle. A trained group psychotherapist keeps it focused and safe, and the real work happens in the relationships between members.</p></details><details><summary>Is group therapy scary or awkward at first?</summary><p>Almost everyone feels nervous before their first group. Members start with a private screening, confidentiality is a ground rule, and most people quickly describe it as one of the most supportive experiences they've had.</p></details><details><summary>Group vs. individual therapy — which is better?</summary><p>Neither is 'better' — they do different things, and many people do both. Individual therapy goes deep on your history; group lets you practice relating differently in real time.</p></details><details><summary>How big is a therapy group and how often does it meet?</summary><p>Typically six to eight members meeting weekly for about 90 minutes, with a trained therapist. Emily, a Certified Group Psychotherapist, runs groups including one for professional women.</p></details></div></div></section>
    </SiteLayout>
  );
}
