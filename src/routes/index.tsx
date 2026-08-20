import { createFileRoute, Link } from "@tanstack/react-router";

import { OptinForm } from "@/components/site/OptinForm";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
          {
                "title": "Therapist in Arlington & McLean, VA | Emily M. Jones, LCSW — Trauma, EMDR & Couples"
          },
          {
                "name": "description",
                "content": "Compassionate in-person therapy in Arlington & McLean, VA. EMDR, trauma, attachment & couples therapy. Book a free 15-minute consultation."
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
                "content": "Therapist in Arlington & McLean, VA | Emily M. Jones, LCSW — Trauma, EMDR & Couples"
          },
          {
                "name": "twitter:description",
                "content": "Compassionate in-person therapy in Arlington & McLean, VA. EMDR, trauma, attachment & couples therapy. Book a free 15-minute consultation."
          },
          {
                "name": "twitter:image",
                "content": "https://www.jonespsychotherapy.com/og-image.jpg"
          },
          {
                "property": "og:type",
                "content": "website"
          },
          {
                "property": "og:site_name",
                "content": "Jones Psychotherapy"
          },
          {
                "property": "og:title",
                "content": "Therapist in Arlington & McLean, VA | Emily M. Jones, LCSW — Trauma, EMDR & Couples"
          },
          {
                "property": "og:description",
                "content": "Compassionate in-person therapy in Arlington & McLean, VA. EMDR, trauma, attachment & couples therapy. Book a free 15-minute consultation."
          },
          {
                "property": "og:url",
                "content": "https://www.jonespsychotherapy.com/"
          },
          {
                "property": "og:image",
                "content": "https://www.jonespsychotherapy.com/og-image.jpg"
          }
    ],
    links: [
          {
                "rel": "canonical",
                "href": "https://www.jonespsychotherapy.com/"
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
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How do I find a good therapist in Arlington or McLean, VA?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Start with fit: look for a licensed therapist who treats your concern and offers a free consultation, then notice whether you feel heard. Emily M. Jones, LCSW, CGP offers in-person therapy in Arlington and McLean and a free 15-minute consultation."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What kind of therapy does Emily Jones offer?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Individual therapy, couples therapy, and group therapy for adults and teens — drawing on EMDR, Internal Family Systems, attachment-focused, and emotionally focused approaches. Common focuses include trauma, anxiety, and relationships."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you offer online or in-person therapy?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Both. Emily sees clients in person in Arlington and McLean, Virginia, and by secure video for clients located in Virginia and Utah."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How much does therapy cost, and do you take insurance?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Individual sessions are $250 and couples $300. Emily is out-of-network and doesn't bill insurance directly, but provides a monthly superbill you can submit for possible out-of-network reimbursement."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How do I get started?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Book a free 15-minute consultation — a no-pressure call to see if you're a good fit and answer your questions before you commit."
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
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      <section className="hero"><div className="wrap"> <div> <div className="eyebrow">Arlington · McLean · Serving Northern Virginia · Telehealth in Virginia & Utah</div> <h1>Do you want to feel empowered to create change in your life? Do you want to feel more connected to yourself, and others?</h1> <p className="sub">You are not alone! We all need help at times accessing our own voice, working through painful emotions, and moving forward.</p> <div className="cta-row"><Link to="/book" className="btn lg">Book a free 15-minute consultation</Link><Link to="/explore" className="btn ghost lg">Explore therapy</Link></div> <div className="trust"><span><b>20+ years</b> of experience</span><span><b>EMDR</b> & IFS trained</span><span><b>Certified</b> Group Psychotherapist</span></div> </div><div className="portrait" style={{"aspectRatio": "4/5"}}><img className="pfoto" src="/brand/emily_full.jpg" alt="Emily M. Jones, LCSW" /><div className="tag"><b>Emily M. Jones</b>LCSW, CGP · in-person & virtual</div></div>
      </div></section> <section className="band cream"><div className="wrap"> <div className="center"><div className="kick">Connection is key</div><h2>Find your voice, your wisdom, and your people</h2></div> <div className="painwrap"> <p className="reassure">Connection is key. When we are connected to ourselves, when we trust our sense of what is right for us, we find our passions, we find our people, and we create the life we want.</p> <p className="reassure">I’m here to help you recognize and claim your voice, find your own wisdom, and put it into action in your life.</p> <p className="reassure">Working with me can help you transform painful emotions into a sense of freedom and lightness.</p> </div> <div className="center" style={{"marginTop": "36px"}}><h3>Some therapy outcomes include…</h3></div> <div className="paingrid"> <div className="pain"><span className="dot">✓</span><span>You’ll learn how to trust yourself and your instincts.</span></div><div className="pain"><span className="dot">✓</span><span>You’ll better accept yourself, your feelings, and your past.</span></div><div className="pain"><span className="dot">✓</span><span>You may find more fulfillment in your relationships.</span></div><div className="pain"><span className="dot">✓</span><span>You can have more meaning and joy.</span></div><div className="pain"><span className="dot">✓</span><span>Your life will have a greater sense of purpose.</span></div><div className="pain"><span className="dot">✓</span><span>You’ll feel more optimistic about your future.</span></div> </div>
      </div></section> <section className="band"><div className="wrap"> <div className="center"><div className="kick">Ways we can work together</div><h2>Therapy tailored to where you are</h2> <p className="sub2">In person in Arlington & McLean, VA — serving greater Northern Virginia — and by secure video across Virginia & Utah.</p></div> <div className="cards"> <div className="cardx"><div className="ic"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-5 0-9 2.5-9 6v2h18v-2c0-3.5-4-6-9-6z" /></svg></div><h3>Individual Therapy</h3><p>Depth-oriented work for anxiety, trauma, self-worth, and life transitions — using EMDR, IFS, and attachment-focused approaches.</p><div className="price">From $250 / 50 min</div><Link to="/individual" className="more">Learn more →</Link></div> <div className="cardx"><div className="ic"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-5 0-9 2.5-9 6v2h18v-2c0-3.5-4-6-9-6z" /></svg></div><h3>Couples Therapy</h3><p>Emotion-focused work for partners who love each other but keep getting stuck in the same painful patterns.</p><div className="price">$300 / session</div><Link to="/couples" className="more">Learn more →</Link></div> <div className="cardx"><div className="ic"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-5 0-9 2.5-9 6v2h18v-2c0-3.5-4-6-9-6z" /></svg></div><h3>Group Therapy</h3><p>Weekly, confidential groups — including one for professional women — to practice showing up as the partner, parent, and professional you want to be.</p><div className="price">$125 / session</div><Link to="/group" className="more">Learn more →</Link></div> </div>
      </div></section> <section className="band cream"><div className="wrap"> <div className="center"><div className="kick">Simple, low-pressure, no commitment</div><h2>Getting started is easy</h2> <p className="sub2">Reaching out is often the hardest part. Here's exactly what happens next.</p></div> <div className="steps"> <div className="step"><div className="num">1</div><h4>Book a free consult</h4><p>Pick a time for a free 15-minute call. We'll talk about what's bringing you in and whether we're a good fit.</p></div> <div className="step"><div className="num">2</div><h4>Your first session</h4><p>We'll go at your pace — getting to know your story, your goals, and what you want to feel differently.</p></div> <div className="step"><div className="num">3</div><h4>Real, lasting change</h4><p>Weekly sessions in Arlington, McLean, or by video. Over time you'll trust yourself more and live more freely.</p></div> </div> <div style={{"textAlign": "center", "marginTop": "32px"}}><Link to="/book" className="btn lg">Book your free consultation</Link></div>
      </div></section> <section className="band optin"><div className="wrap"><div className="box"> <div className="art"> <div className="kick" style={{"fontSize": "12.5px", "letterSpacing": ".15em", "textTransform": "uppercase", "fontWeight": "700", "marginBottom": "10px"}}>Free guide</div> <h3>Composed at work, unraveling underneath?</h3> <p style={{"color": "#ecdfd4", "margin": "0 0 8px"}}>Get <em>Quiet the Inner Critic</em> — 5 first steps for high-achieving women who look calm on the outside but feel anxious and never quite “enough” inside.</p> <ul><li>Why high-functioning anxiety hides in plain sight</li><li>A 2-minute practice to soften the inner critic</li><li>How to tell when it's time to reach out</li></ul> </div> <div className="form"> <OptinForm variant="index" /></div>
      </div></div></section> <section className="band finalcta"> <div className="wrap"><h2>You can live true to yourself — and love more.</h2><p>Take the first small step today. Book a free, no-pressure 15-minute consultation and let's see if we're a good fit.</p> <Link to="/book" className="btn lg">Book a free 15-minute consultation</Link> <p style={{"marginTop": "22px", "fontSize": "15px", "color": "#d8c2af"}}>Prefer to talk first? Call <b style={{"color": "#f4e0cc"}}>(571) 582-8086</b> — I'll get back to you within one business day.</p></div></section>
      <section className="band cream"><div className="wrap"><div className="center"><div className="kick">Good questions</div><h2>Frequently asked questions</h2></div><div className="faqlist"><details><summary>How do I find a good therapist in Arlington or McLean, VA?</summary><p>Start with fit: look for a licensed therapist who treats your concern and offers a free consultation, then notice whether you feel heard. Emily M. Jones, LCSW, CGP offers in-person therapy in Arlington and McLean and a free 15-minute consultation.</p></details><details><summary>What kind of therapy does Emily Jones offer?</summary><p>Individual therapy, couples therapy, and group therapy for adults and teens — drawing on EMDR, Internal Family Systems, attachment-focused, and emotionally focused approaches. Common focuses include trauma, anxiety, and relationships.</p></details><details><summary>Do you offer online or in-person therapy?</summary><p>Both. Emily sees clients in person in Arlington and McLean, Virginia, and by secure video for clients located in Virginia and Utah.</p></details><details><summary>How much does therapy cost, and do you take insurance?</summary><p>Individual sessions are $250 and couples $300. Emily is out-of-network and doesn't bill insurance directly, but provides a monthly superbill you can submit for possible out-of-network reimbursement.</p></details><details><summary>How do I get started?</summary><p>Book a free 15-minute consultation — a no-pressure call to see if you're a good fit and answer your questions before you commit.</p></details></div></div></section>
    </SiteLayout>
  );
}
