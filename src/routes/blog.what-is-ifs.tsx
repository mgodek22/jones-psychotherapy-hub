import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/blog/what-is-ifs")({
  head: () => ({
    meta: [
          {
                "title": "What Is IFS Therapy? Internal Family Systems Explained | Jones Psychotherapy"
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
                "content": "What Is IFS Therapy? Internal Family Systems Explained | Jones Psychotherapy"
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
                "content": "What Is IFS Therapy? Internal Family Systems Explained | Jones Psychotherapy"
          },
          {
                "property": "og:url",
                "content": "https://www.jonespsychotherapy.com/blog/what-is-ifs"
          },
          {
                "property": "og:image",
                "content": "https://www.jonespsychotherapy.com/og-image.jpg"
          }
    ],
    links: [
          {
                "rel": "canonical",
                "href": "https://www.jonespsychotherapy.com/blog/what-is-ifs"
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
                "headline": "What Is Internal Family Systems (IFS) Therapy?",
                "description": "IFS is a compassionate, evidence-based approach that treats the mind as a system of \"parts.\" Here's what that means and why it's so effective.",
                "author": {
                  "@id": "https://www.jonespsychotherapy.com/#emily"
                },
                "publisher": {
                  "@id": "https://www.jonespsychotherapy.com/#practice"
                },
                "mainEntityOfPage": "https://www.jonespsychotherapy.com/blog/what-is-ifs",
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
                    "name": "What is: What Is Internal Family Systems (IFS) Therapy?",
                    "item": "https://www.jonespsychotherapy.com/blog/what-is-ifs"
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Is IFS evidence-based?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes — IFS is listed as an evidence-based practice and has a growing research base for depression, anxiety, and trauma."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is IFS the same as \"parts work\"?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "IFS is the most well-known, structured form of parts work, with a clear model and training standards (through the IFS Institute)."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does IFS mean I have multiple personalities?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "No. Having \"parts\" is a normal feature of every mind — it's the ordinary experience of feeling pulled in different directions, not a disorder."
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
  component: BlogWhatIsIfsPage,
});

function BlogWhatIsIfsPage() {
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
      <section className="arthero"><div className="wrap"><div className="artcat">What is</div><h1>What Is Internal Family Systems (IFS) Therapy?</h1><p className="artdek">Internal Family Systems (IFS) is a compassionate, evidence-based therapy built on a simple idea: the mind is made up of different "parts," and underneath them all is a calm, wise core Self.</p><p className="artmeta">By Emily M. Jones, LCSW, CGP· Jones Psychotherapy, Arlington & McLean, VA</p></div></section>
      <section className="band"><div className="wrap"><div className="prose">
      <h3>The idea of "parts"</h3>
      <p>You know the feeling of being "of two minds" — part of you wants to rest, part of you drives you to keep achieving; part of you longs for closeness, part of you keeps people at arm's length. IFS takes those parts seriously. Even the ones that cause us trouble (the inner critic, the perfectionist, the people-pleaser) are usually trying to protect us in the only way they learned how.</p>
      <p>Instead of fighting these parts, IFS helps you get to know them with curiosity — so they can relax and let you lead from your calmer, steadier Self.</p>
      <div className="pullquote"><p>“There are no bad parts.”</p><cite>— Richard Schwartz, Ph.D., founder of Internal Family Systems</cite></div>
      <h3>Why it works so well</h3>
      <p>Because it isn't about forcing change or "fixing" what's broken, IFS tends to feel gentle even when the material is hard. As protective parts unburden, people often report less self-criticism, more self-compassion, and a stronger sense of who they actually are.</p>
      <p>I often weave IFS together with EMDR and attachment-focused work, especially for high-achieving adults who look fine on the outside but feel anxious or "never enough" inside.</p>
      <div className="midcta"><p>Wondering if this is the right fit for you? Let's talk it through — no pressure.</p><Link to="/book" className="btn">Book a free 15-minute consultation</Link></div>
      <h3>What an IFS session feels like</h3>
      <p>Sessions tend to be quiet and inward rather than dramatic. I might invite you to turn toward a feeling with curiosity and ask what it's worried would happen — then simply listen for what that part has been carrying, sometimes for a very long time.</p>
      <p>As protective parts feel understood, they soften. People often leave describing a kind of internal spaciousness — the same problems, but more room to respond rather than react.</p>
      <div className="tipbox"><h4>A simple way to meet your "parts"</h4><ul><li>When a strong feeling rises, try naming it: "a part of me feels…"</li><li>Get curious instead of critical — ask what it's afraid would happen.</li><li>Thank protective parts; even the harsh inner critic is trying to help.</li><li>Notice the calmer "you" that can observe all of it — that's your Self.</li><li>Go gently. You're building trust with yourself, not staging a takeover.</li></ul></div>
      </div></div></section>
      <section className="band"><div className="wrap" style={{"maxWidth": "760px"}}><h2 style={{"fontSize": "26px"}}>Common questions</h2><div className="faqwrap" style={{"marginTop": "14px"}}><details><summary>Is IFS evidence-based?</summary><p>Yes — IFS is listed as an evidence-based practice and has a growing research base for depression, anxiety, and trauma.</p></details><details><summary>Is IFS the same as "parts work"?</summary><p>IFS is the most well-known, structured form of parts work, with a clear model and training standards (through the IFS Institute).</p></details><details><summary>Does IFS mean I have multiple personalities?</summary><p>No. Having "parts" is a normal feature of every mind — it's the ordinary experience of feeling pulled in different directions, not a disorder.</p></details></div></div></section>
      <section className="band cream"><div className="wrap"><div className="center"><div className="kick">Ready when you are</div><h2>Let's take the first step together.</h2><p className="sub2">Book a free, no-pressure 15-minute consultation with Emily M. Jones, LCSW, CGP.</p><div style={{"marginTop": "18px"}}><Link to="/book" className="btn lg">Book a free consultation</Link></div></div></div></section>
    </SiteLayout>
  );
}
