import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/blog/what-is-group-therapy")({
  head: () => ({
    meta: [
          {
                "title": "What Is Group Therapy? Is It Right for You? | Jones Psychotherapy"
          },
          {
                "name": "description",
                "content": "Group therapy is one of the most powerful ways to change relationship patterns — because you practice them live, with support. Here's how it works."
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
                "content": "What Is Group Therapy? Is It Right for You? | Jones Psychotherapy"
          },
          {
                "name": "twitter:description",
                "content": "Group therapy is one of the most powerful ways to change relationship patterns — because you practice them live, with support. Here's how it works."
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
                "content": "What Is Group Therapy? Is It Right for You? | Jones Psychotherapy"
          },
          {
                "property": "og:description",
                "content": "Group therapy is one of the most powerful ways to change relationship patterns — because you practice them live, with support. Here's how it works."
          },
          {
                "property": "og:url",
                "content": "https://www.jonespsychotherapy.com/blog/what-is-group-therapy"
          },
          {
                "property": "og:image",
                "content": "https://www.jonespsychotherapy.com/og-image.jpg"
          }
    ],
    links: [
          {
                "rel": "canonical",
                "href": "https://www.jonespsychotherapy.com/blog/what-is-group-therapy"
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
                "headline": "What Is Group Therapy — and Is It Right for You?",
                "description": "Group therapy is one of the most powerful ways to change relationship patterns — because you practice them live, with support. Here's how it works.",
                "author": {
                  "@id": "https://www.jonespsychotherapy.com/#emily"
                },
                "publisher": {
                  "@id": "https://www.jonespsychotherapy.com/#practice"
                },
                "mainEntityOfPage": "https://www.jonespsychotherapy.com/blog/what-is-group-therapy",
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
                    "name": "What is: What Is Group Therapy — and Is It Right for You?",
                    "item": "https://www.jonespsychotherapy.com/blog/what-is-group-therapy"
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Isn't it awkward to share with strangers?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "It feels vulnerable at first, then quickly becomes one of the most supportive experiences people describe. The therapist keeps it safe."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I do group and individual therapy at once?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, and many people find the combination especially effective — individual work goes deep on your history while group works on how you relate in real time."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How is group different from a support group?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Support groups center on a shared topic; a process group works with the live relationships in the room to change patterns."
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
  component: BlogWhatIsGroupTherapyPage,
});

function BlogWhatIsGroupTherapyPage() {
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
        "label": "What is"
      }
    ]}>
      <section className="arthero"><div className="wrap"><div className="artcat">What is</div><h1>What Is Group Therapy — and Is It Right for You?</h1><p className="artdek">Group therapy is a small, confidential group led by a therapist where you practice new ways of relating in real time — which is exactly why it's so effective for relationship patterns.</p><p className="artmeta">By Emily M. Jones, LCSW, CGP· Jones Psychotherapy, Arlington & McLean, VA</p></div></section>
      <section className="band"><div className="wrap"><div className="prose">
      <h3>How a therapy group works</h3>
      <p>A group is usually 6–8 people who meet weekly with a trained group psychotherapist. Unlike a support group, an interpersonal process group focuses on what happens <em>between</em> members — the same patterns that show up in your outside relationships tend to show up in the room, where you can notice and shift them with support.</p>
      <p>As a Certified Group Psychotherapist (CGP), I run groups — including one specifically for professional women — designed to be safe, honest, and genuinely useful.</p>
      <div className="pullquote"><p>“It's the relationship that heals, the relationship that heals, the relationship that heals.”</p><cite>— Irvin D. Yalom, M.D., group psychotherapy pioneer</cite></div>
      <h3>Who it helps</h3>
      <p>Group is a great fit if relationships feel stressful and you're not sure why, if you tend to withdraw or over-give, if it's hard to speak up, or if you're lonely and want to change that. Many people do individual therapy and group at the same time.</p>
      <div className="midcta"><p>Wondering if this is the right fit for you? Let's talk it through — no pressure.</p><Link to="/book" className="btn">Book a free 15-minute consultation</Link></div>
      <h3>What to expect</h3>
      <p>New members start with a brief screening conversation so it's a good fit for you and the group. Groups are confidential, and the fee ($125/session) is roughly half the individual rate — a more accessible way to do deep work.</p>
      <h3>Why group can reach what individual therapy can't</h3>
      <p>In individual therapy, you describe your relationships. In group, they happen in the room. The way you connect, hold back, or brace for judgment shows up live — and becomes something you can work with directly, with a therapist guiding it.</p>
      <p>Group also offers something rare: the relief of discovering you're not the only one. That sense of "me too" — what group therapists call <em>universality</em> — is quietly powerful, and it's hard to get from any book or app.</p>
      <div className="tipbox"><h4>Signs group might be a good fit</h4><ul><li>You get feedback like "I never know what you're feeling."</li><li>Your relationships tend to follow the same frustrating script.</li><li>You over-give, withdraw, or go quiet when things get hard.</li><li>You feel isolated and want to change that — not just talk about it.</li><li>You want honest reflection from people who come to see you clearly.</li></ul></div>
      </div></div></section>
      <section className="band"><div className="wrap" style={{"maxWidth": "760px"}}><h2 style={{"fontSize": "26px"}}>Common questions</h2><div className="faqwrap" style={{"marginTop": "14px"}}><details><summary>Isn't it awkward to share with strangers?</summary><p>It feels vulnerable at first, then quickly becomes one of the most supportive experiences people describe. The therapist keeps it safe.</p></details><details><summary>Can I do group and individual therapy at once?</summary><p>Yes, and many people find the combination especially effective — individual work goes deep on your history while group works on how you relate in real time.</p></details><details><summary>How is group different from a support group?</summary><p>Support groups center on a shared topic; a process group works with the live relationships in the room to change patterns.</p></details></div></div></section>
      <section className="band cream"><div className="wrap"><div className="center"><div className="kick">Ready when you are</div><h2>Let's take the first step together.</h2><p className="sub2">Book a free, no-pressure 15-minute consultation with Emily M. Jones, LCSW, CGP.</p><div style={{"marginTop": "18px"}}><Link to="/book" className="btn lg">Book a free consultation</Link></div></div></div></section>
    </SiteLayout>
  );
}
