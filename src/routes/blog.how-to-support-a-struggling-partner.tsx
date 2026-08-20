import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/blog/how-to-support-a-struggling-partner")({
  head: () => ({
    meta: [
          {
                "title": "How to Support a Partner Who's Struggling | Jones Psychotherapy"
          },
          {
                "name": "description",
                "content": "When someone you love is anxious, depressed, or overwhelmed, it's hard to know what helps. Here are practical, compassionate ways to show up — without losing yourself."
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
                "content": "How to Support a Partner Who's Struggling | Jones Psychotherapy"
          },
          {
                "name": "twitter:description",
                "content": "When someone you love is anxious, depressed, or overwhelmed, it's hard to know what helps. Here are practical, compassionate ways to show up — without losing yourself."
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
                "content": "How to Support a Partner Who's Struggling | Jones Psychotherapy"
          },
          {
                "property": "og:description",
                "content": "When someone you love is anxious, depressed, or overwhelmed, it's hard to know what helps. Here are practical, compassionate ways to show up — without losing yourself."
          },
          {
                "property": "og:url",
                "content": "https://www.jonespsychotherapy.com/blog/how-to-support-a-struggling-partner"
          },
          {
                "property": "og:image",
                "content": "https://www.jonespsychotherapy.com/og-image.jpg"
          }
    ],
    links: [
          {
                "rel": "canonical",
                "href": "https://www.jonespsychotherapy.com/blog/how-to-support-a-struggling-partner"
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
                "headline": "How to Support a Partner Who's Struggling",
                "description": "When someone you love is anxious, depressed, or overwhelmed, it's hard to know what helps. Here are practical, compassionate ways to show up — without losing yourself.",
                "author": {
                  "@id": "https://www.jonespsychotherapy.com/#emily"
                },
                "publisher": {
                  "@id": "https://www.jonespsychotherapy.com/#practice"
                },
                "mainEntityOfPage": "https://www.jonespsychotherapy.com/blog/how-to-support-a-struggling-partner",
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
                    "name": "How: How to Support a Partner Who's Struggling",
                    "item": "https://www.jonespsychotherapy.com/blog/how-to-support-a-struggling-partner"
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What if my partner refuses help?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "You can't force it, but consistent, non-judgmental support — and modeling your own care — often lowers the barrier over time."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How do I bring up therapy without them feeling blamed?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Lead with care and 'I' statements: \"I love you and I've been worried — could we talk to someone together?\" Frame it as teamwork, not a verdict."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can couples therapy help even if only one of us is struggling?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. It can help you support each other, protect the relationship, and keep one person's struggle from becoming a wedge."
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
  component: BlogHowToSupportAStrugglingPartnerPage,
});

function BlogHowToSupportAStrugglingPartnerPage() {
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
        "label": "How"
      }
    ]}>
      <section className="arthero"><div className="wrap"><div className="artcat">How</div><h1>How to Support a Partner Who's Struggling</h1><p className="artdek">The most helpful thing you can offer a struggling partner usually isn't a solution — it's steady presence, genuine listening, and gentle encouragement toward support, while also caring for yourself.</p><p className="artmeta">By Emily M. Jones, LCSW, CGP· Jones Psychotherapy, Arlington &amp; McLean, VA</p></div></section>
      <section className="band"><div className="wrap"><div className="prose">
      <div className="box" style={{"background": "#f8e6e1", "border": "1px solid #ebc9c0", "borderRadius": "12px", "padding": "14px 18px", "margin": "18px 0"}}><strong>If you're in crisis:</strong> this article is educational and isn't a substitute for care. If you're thinking about harming yourself or are in danger, call or text <strong>988</strong> (Suicide &amp; Crisis Lifeline), text <strong>HOME</strong> to <strong>741741</strong>, or call <strong>911</strong>. See the <Link to="/resources">Resources</Link> page for more.</div>
      <h3>Lead with listening, not fixing</h3>
      <p>When someone is hurting, our instinct is to fix it. But advice can land as pressure. Try reflecting what you hear ("that sounds really heavy") and asking "do you want help thinking it through, or do you just need me to listen?" Feeling understood is often what helps most.</p>
      <h3>Encourage support without forcing it</h3>
      <p>You can gently name what you notice ("you've seemed really stretched lately") and offer to help with the logistics of getting support — finding a therapist, making the call, watching the kids during a session. Offer; don't ultimatum.</p>
      <h3>The tiny moments matter most</h3>
      <p>It's easy to assume support means grand gestures. Dr. John Gottman's research suggests the opposite: what predicts lasting closeness is how often partners "turn toward" each other's small bids for connection — a passing comment, a sigh, a shared glance. In his studies, couples still together years later had turned toward those bids about 87% of the time, versus 33% for those who divorced.</p>
      <p>You don't have to fix your partner's hard season. Often the most powerful thing you can do is keep turning toward them — again, and again, and again.</p>
      <div className="midcta"><p>Wondering if this is the right fit for you? Let's talk it through — no pressure.</p><Link className="btn" to="/book">Book a free 15-minute consultation</Link></div>
      <h3>Take care of yourself, too</h3>
      <p>You can't pour from an empty cup. Keep your own routines, lean on your own support, and set kind boundaries. Supporting a partner is a marathon, not a sprint — and couples therapy can help you both feel like a team again rather than patient and caretaker.</p>
      <h3>When it's more serious</h3>
      <p>If your partner talks about wanting to die or harm themselves, take it seriously — call or text 988, or 911 if there's immediate danger. See the <Link to="/resources">Resources</Link> page.</p>
      <div className="tipbox"><h4>Ways to show up (without burning out)</h4><ul><li>Ask: "Do you want help solving this, or do you just need me to listen?"</li><li>Reflect back what you hear before offering any advice.</li><li>Offer specific help: "I'll handle dinner so you can make that call."</li><li>Keep your own routines, rest, and support — you matter here too.</li><li>Set kind boundaries; steady presence beats self-sacrifice.</li></ul></div>
      </div></div></section>
      <section className="band"><div className="wrap" style={{"maxWidth": "760px"}}><h2 style={{"fontSize": "26px"}}>Common questions</h2><div className="faqwrap" style={{"marginTop": "14px"}}><details><summary>What if my partner refuses help?</summary><p>You can't force it, but consistent, non-judgmental support — and modeling your own care — often lowers the barrier over time.</p></details><details><summary>How do I bring up therapy without them feeling blamed?</summary><p>Lead with care and 'I' statements: "I love you and I've been worried — could we talk to someone together?" Frame it as teamwork, not a verdict.</p></details><details><summary>Can couples therapy help even if only one of us is struggling?</summary><p>Yes. It can help you support each other, protect the relationship, and keep one person's struggle from becoming a wedge.</p></details></div></div></section>
      <section className="band cream"><div className="wrap"><div className="center"><div className="kick">Ready when you are</div><h2>Let's take the first step together.</h2><p className="sub2">Book a free, no-pressure 15-minute consultation with Emily M. Jones, LCSW, CGP.</p><div style={{"marginTop": "18px"}}><Link className="btn lg" to="/book">Book a free consultation</Link></div></div></div></section>
    </SiteLayout>
  );
}
