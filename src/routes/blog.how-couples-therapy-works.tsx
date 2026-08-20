import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/blog/how-couples-therapy-works")({
  head: () => ({
    meta: [
          {
                "title": "How Couples Therapy Works & When to Start | Jones Psychotherapy — McLean & Arlington"
          },
          {
                "name": "description",
                "content": "Most couples don't have a communication problem — they have a painful cycle. Here's how couples therapy interrupts it, and why sooner is better than later."
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
                "content": "How Couples Therapy Works & When to Start | Jones Psychotherapy — McLean & Arlington"
          },
          {
                "name": "twitter:description",
                "content": "Most couples don't have a communication problem — they have a painful cycle. Here's how couples therapy interrupts it, and why sooner is better than later."
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
                "content": "How Couples Therapy Works & When to Start | Jones Psychotherapy — McLean & Arlington"
          },
          {
                "property": "og:description",
                "content": "Most couples don't have a communication problem — they have a painful cycle. Here's how couples therapy interrupts it, and why sooner is better than later."
          },
          {
                "property": "og:url",
                "content": "https://www.jonespsychotherapy.com/blog/how-couples-therapy-works"
          },
          {
                "property": "og:image",
                "content": "https://www.jonespsychotherapy.com/og-image.jpg"
          }
    ],
    links: [
          {
                "rel": "canonical",
                "href": "https://www.jonespsychotherapy.com/blog/how-couples-therapy-works"
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
                "headline": "How Couples Therapy Works — and When to Start",
                "description": "Most couples don't have a communication problem — they have a painful cycle. Here's how couples therapy interrupts it, and why sooner is better than later.",
                "author": {
                  "@id": "https://www.jonespsychotherapy.com/#emily"
                },
                "publisher": {
                  "@id": "https://www.jonespsychotherapy.com/#practice"
                },
                "mainEntityOfPage": "https://www.jonespsychotherapy.com/blog/how-couples-therapy-works",
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
                    "name": "How: How Couples Therapy Works — and When to Start",
                    "item": "https://www.jonespsychotherapy.com/blog/how-couples-therapy-works"
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Do both partners have to want to come?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "It helps, but ambivalence is normal. Many people start unsure — a first session can lower the temperature enough to decide together."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What if we're considering separating?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Couples therapy can help you make that decision thoughtfully and kindly, whichever way it goes."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is our problem too big (or too small) for therapy?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Neither is disqualifying. Couples come after affairs and after years of quiet distance alike — if it matters to you, it's worth bringing in."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How much does couples therapy cost?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Couples sessions are $300. I'm an out-of-network provider and give you a superbill for possible reimbursement."
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
  component: BlogHowCouplesTherapyWorksPage,
});

function BlogHowCouplesTherapyWorksPage() {
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
      <section className="arthero"><div className="wrap"><div className="artcat">How</div><h1>How Couples Therapy Works — and When to Start</h1><p className="artdek">Couples therapy helps you see and interrupt the repeating cycle that pulls you apart, so you can rebuild trust and turn toward each other instead of away.</p><p className="artmeta">By Emily M. Jones, LCSW, CGP· Jones Psychotherapy, Arlington & McLean, VA</p></div></section>
      <section className="band"><div className="wrap"><div className="prose">
      <h3>It's usually a cycle, not a villain</h3>
      <p>Most couples who feel stuck aren't with the wrong person — they're caught in a pattern: one reaches, the other retreats; a small moment escalates; you both end up feeling alone. Using Emotionally Focused Therapy (EFT), we slow that cycle down, understand what's underneath it (often fear, hurt, or a longing to matter), and help you respond to each other differently.</p>
      <div className="pullquote"><p>“Love is not the icing on the cake of life. It is a basic primary need, like oxygen or water.”</p><cite>— Dr. Sue Johnson, Hold Me Tight</cite></div>
      <h3>What sessions are like</h3>
      <p>We meet weekly with both partners present. Sessions are a supportive, non-blaming space — the work is on the <em>pattern</em>, not on deciding who's right. Over time, hard conversations stop turning into the same fight, and closeness returns.</p>
      <div className="midcta"><p>Wondering if this is the right fit for you? Let's talk it through — no pressure.</p><Link to="/book" className="btn">Book a free 15-minute consultation</Link></div>
      <h3>When to start</h3>
      <p>The research is clear: couples often wait years before getting help, and earlier is easier. You don't need to be in crisis. If you keep having the same argument, feel more like roommates than partners, or are recovering from a breach of trust, that's reason enough.</p>
      <h3>What emotionally focused therapy actually changes</h3>
      <p>EFT, developed by Dr. Sue Johnson, is one of the most well-researched approaches to couples work, with studies showing lasting gains for many couples. It treats the bond between you as an attachment relationship — which is why conflict so often comes down to one question underneath all the noise: <em>Are you there for me?</em></p>
      <p>We're not aiming to argue better in the abstract. We're rebuilding the felt sense that you can reach for each other and actually be met.</p>
      <div className="tipbox"><h4>Try this with your partner this week</h4><ul><li>Name the cycle, not the person: "we're caught in our pattern again."</li><li>Share the softer feeling under the frustration — hurt, fear, or longing.</li><li>Ask for what you need directly, and in the positive.</li><li>Repair after a rough moment; reconnecting matters more than being right.</li><li>Protect a few minutes of real, undistracted attention each day.</li></ul></div>
      </div></div></section>
      <section className="band"><div className="wrap" style={{"maxWidth": "760px"}}><h2 style={{"fontSize": "26px"}}>Common questions</h2><div className="faqwrap" style={{"marginTop": "14px"}}><details><summary>Do both partners have to want to come?</summary><p>It helps, but ambivalence is normal. Many people start unsure — a first session can lower the temperature enough to decide together.</p></details><details><summary>What if we're considering separating?</summary><p>Couples therapy can help you make that decision thoughtfully and kindly, whichever way it goes.</p></details><details><summary>Is our problem too big (or too small) for therapy?</summary><p>Neither is disqualifying. Couples come after affairs and after years of quiet distance alike — if it matters to you, it's worth bringing in.</p></details><details><summary>How much does couples therapy cost?</summary><p>Couples sessions are $300. I'm an out-of-network provider and give you a superbill for possible reimbursement.</p></details></div></div></section>
      <section className="band cream"><div className="wrap"><div className="center"><div className="kick">Ready when you are</div><h2>Let's take the first step together.</h2><p className="sub2">Book a free, no-pressure 15-minute consultation with Emily M. Jones, LCSW, CGP.</p><div style={{"marginTop": "18px"}}><Link to="/book" className="btn lg">Book a free consultation</Link></div></div></div></section>
    </SiteLayout>
  );
}
