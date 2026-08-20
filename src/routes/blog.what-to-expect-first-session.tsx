import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/blog/what-to-expect-first-session")({
  head: () => ({
    meta: [
          {
                "title": "What to Expect in Your First Therapy Session | Jones Psychotherapy"
          },
          {
                "name": "description",
                "content": "Nervous about starting therapy? Here's exactly what happens in a first session — from paperwork to goals — so it feels a lot less unknown."
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
                "content": "What to Expect in Your First Therapy Session | Jones Psychotherapy"
          },
          {
                "name": "twitter:description",
                "content": "Nervous about starting therapy? Here's exactly what happens in a first session — from paperwork to goals — so it feels a lot less unknown."
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
                "content": "What to Expect in Your First Therapy Session | Jones Psychotherapy"
          },
          {
                "property": "og:description",
                "content": "Nervous about starting therapy? Here's exactly what happens in a first session — from paperwork to goals — so it feels a lot less unknown."
          },
          {
                "property": "og:url",
                "content": "https://www.jonespsychotherapy.com/blog/what-to-expect-first-session"
          },
          {
                "property": "og:image",
                "content": "https://www.jonespsychotherapy.com/og-image.jpg"
          }
    ],
    links: [
          {
                "rel": "canonical",
                "href": "https://www.jonespsychotherapy.com/blog/what-to-expect-first-session"
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
                "headline": "What to Expect in Your First Therapy Session",
                "description": "Nervous about starting therapy? Here's exactly what happens in a first session — from paperwork to goals — so it feels a lot less unknown.",
                "author": {
                  "@id": "https://www.jonespsychotherapy.com/#emily"
                },
                "publisher": {
                  "@id": "https://www.jonespsychotherapy.com/#practice"
                },
                "mainEntityOfPage": "https://www.jonespsychotherapy.com/blog/what-to-expect-first-session",
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
                    "name": "What to expect: What to Expect in Your First Therapy Session",
                    "item": "https://www.jonespsychotherapy.com/blog/what-to-expect-first-session"
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How long is a session?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Individual sessions are 50 minutes. The first one may feel a little more structured as we gather background."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What if it's not the right fit?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "That's okay and it happens — a good fit matters more than anything. I'm glad to help you find someone who's a better match."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How soon will I feel better?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Many people feel some relief just from being heard. Real change is gradual; we'll track your goals so progress stays visible."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you offer virtual sessions?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes — in person in Arlington and McLean, and by secure video across Virginia and Utah."
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
  component: BlogWhatToExpectFirstSessionPage,
});

function BlogWhatToExpectFirstSessionPage() {
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
      <section className="arthero"><div className="wrap"><div className="artcat">What to expect</div><h1>What to Expect in Your First Therapy Session</h1><p className="artdek">Your first session is mostly a conversation: we get to know each other, you share what's bringing you in, and together we sketch out where you'd like to go. There's no pressure to "perform."</p><p className="artmeta">By Emily M. Jones, LCSW, CGP· Jones Psychotherapy, Arlington & McLean, VA</p></div></section>
      <section className="band"><div className="wrap"><div className="prose">
      <h3>Before we meet</h3>
      <p>Most people start with a free 15-minute consultation — a quick call to see whether we're a good fit. If we decide to move forward, you'll get a bit of intake paperwork to complete beforehand so we can spend our time together talking, not filling out forms.</p>
      <div className="pullquote"><p>“The curious paradox is that when I accept myself just as I am, then I can change.”</p><cite>— Carl Rogers, On Becoming a Person</cite></div>
      <h3>During the first session</h3>
      <p>We'll talk about what's bringing you in now, a little of your history, and what you're hoping will feel different. I'll ask questions, but you set the pace — you never have to share more than you're ready to. It's also your chance to interview <em>me</em>: ask about my approach, experience, and how I work.</p>
      <p>By the end, we'll have a loose sense of direction and a plan for how often to meet (usually weekly, 50 minutes).</p>
      <div className="midcta"><p>Wondering if this is the right fit for you? Let's talk it through — no pressure.</p><Link to="/book" className="btn">Book a free 15-minute consultation</Link></div>
      <h3>It's normal to feel nervous</h3>
      <p>Reaching out is often the hardest part, and a little anxiety before a first session is completely normal. My style is warm and down-to-earth — the goal is for you to leave feeling heard, not judged.</p>
      <p>You don't need to have your story organized or know exactly what's wrong. "I'm not even sure how to explain it" is a perfectly good place to begin.</p>
      <h3>After the first session</h3>
      <p>You won't be expected to map out your whole treatment on day one. We'll agree on a next step — usually weekly 50-minute sessions — and adjust as we go.</p>
      <p>If something felt off, say so. Good therapy includes talking about the therapy itself; that feedback helps me tailor the work to you rather than to a formula.</p>
      <div className="tipbox"><h4>How to prepare for your first session</h4><ul><li>Jot down what's bringing you in now, and what you'd like to feel different.</li><li>Bring your questions — a first session is your chance to interview me, too.</li><li>Complete any intake forms beforehand so we can spend the time talking.</li><li>Arrive a few minutes early, or test your video link, so you can settle in.</li><li>Remember there's no "right" way to start. Nervous is normal.</li></ul></div>
      </div></div></section>
      <section className="band"><div className="wrap" style={{"maxWidth": "760px"}}><h2 style={{"fontSize": "26px"}}>Common questions</h2><div className="faqwrap" style={{"marginTop": "14px"}}><details><summary>How long is a session?</summary><p>Individual sessions are 50 minutes. The first one may feel a little more structured as we gather background.</p></details><details><summary>What if it's not the right fit?</summary><p>That's okay and it happens — a good fit matters more than anything. I'm glad to help you find someone who's a better match.</p></details><details><summary>How soon will I feel better?</summary><p>Many people feel some relief just from being heard. Real change is gradual; we'll track your goals so progress stays visible.</p></details><details><summary>Do you offer virtual sessions?</summary><p>Yes — in person in Arlington and McLean, and by secure video across Virginia and Utah.</p></details></div></div></section>
      <section className="band cream"><div className="wrap"><div className="center"><div className="kick">Ready when you are</div><h2>Let's take the first step together.</h2><p className="sub2">Book a free, no-pressure 15-minute consultation with Emily M. Jones, LCSW, CGP.</p><div style={{"marginTop": "18px"}}><Link to="/book" className="btn lg">Book a free consultation</Link></div></div></div></section>
    </SiteLayout>
  );
}
