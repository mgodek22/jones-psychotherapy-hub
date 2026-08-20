import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/blog/what-is-emdr")({
  head: () => ({
    meta: [
          {
                "title": "How EMDR Heals Trauma: What to Expect | Jones Psychotherapy Blog"
          },
          {
                "name": "description",
                "content": "EMDR is a research-backed therapy that helps your brain reprocess painful memories so they lose their grip on the present. Here's how it works and who it helps."
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
                "content": "How EMDR Heals Trauma: What to Expect | Jones Psychotherapy Blog"
          },
          {
                "name": "twitter:description",
                "content": "EMDR is a research-backed therapy that helps your brain reprocess painful memories so they lose their grip on the present. Here's how it works and who it helps."
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
                "content": "How EMDR Heals Trauma: What to Expect | Jones Psychotherapy Blog"
          },
          {
                "property": "og:description",
                "content": "EMDR is a research-backed therapy that helps your brain reprocess painful memories so they lose their grip on the present. Here's how it works and who it helps."
          },
          {
                "property": "og:url",
                "content": "https://www.jonespsychotherapy.com/blog/what-is-emdr"
          },
          {
                "property": "og:image",
                "content": "https://www.jonespsychotherapy.com/og-image.jpg"
          }
    ],
    links: [
          {
                "rel": "canonical",
                "href": "https://www.jonespsychotherapy.com/blog/what-is-emdr"
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
                "headline": "What Is EMDR Therapy? (And How It Helps Heal Trauma)",
                "description": "EMDR is a research-backed therapy that helps your brain reprocess painful memories so they lose their grip on the present. Here's how it works and who it helps.",
                "author": {
                  "@id": "https://www.jonespsychotherapy.com/#emily"
                },
                "publisher": {
                  "@id": "https://www.jonespsychotherapy.com/#practice"
                },
                "mainEntityOfPage": "https://www.jonespsychotherapy.com/blog/what-is-emdr",
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
                    "name": "What is: What Is EMDR Therapy? (And How It Helps Heal Trauma",
                    "item": "https://www.jonespsychotherapy.com/blog/what-is-emdr"
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Is EMDR safe?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes — EMDR is recognized by major health bodies as an effective treatment for trauma and PTSD. A trained therapist paces the work to your window of tolerance, so you're never pushed beyond what feels manageable."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do I have to talk about every detail of what happened?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "No. EMDR relies less on detailed retelling than talk therapy does. You can benefit while sharing only what you're comfortable sharing."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How many sessions will I need?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "It varies. A single, recent event may resolve in a few sessions; developmental or repeated trauma usually takes longer. We set goals together and check progress often."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does EMDR work over telehealth?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. EMDR can be done effectively by secure video, which I offer to clients located in Virginia and Utah."
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
  component: BlogWhatIsEmdrPage,
});

function BlogWhatIsEmdrPage() {
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
      <section className="arthero"><div className="wrap"><div className="artcat">What is</div><h1>What Is EMDR Therapy? (And How It Helps Heal Trauma)</h1><p className="artdek">EMDR (Eye Movement Desensitization and Reprocessing) is a well-researched therapy that helps your brain reprocess distressing memories so they stop hijacking the present.</p><p className="artmeta">By Emily M. Jones, LCSW, CGP· Jones Psychotherapy, Arlington &amp; McLean, VA</p></div></section>
      <section className="band"><div className="wrap"><div className="prose">
      <div className="box" style={{"background": "#f8e6e1", "border": "1px solid #ebc9c0", "borderRadius": "12px", "padding": "14px 18px", "margin": "18px 0"}}><strong>If you're in crisis:</strong> this article is educational and isn't a substitute for care. If you're thinking about harming yourself or are in danger, call or text <strong>988</strong> (Suicide &amp; Crisis Lifeline), text <strong>HOME</strong> to <strong>741741</strong>, or call <strong>911</strong>. See the <Link to="/resources">Resources</Link> page for more.</div>
      <h3>How EMDR works</h3>
      <p>When something overwhelming happens, the brain can store the memory in a "raw," unprocessed form — so a smell, a tone of voice, or a situation can trigger the same fear, shame, or panic you felt back then. EMDR helps the brain do what it does naturally during deep sleep: file the memory away as something that <em>happened</em>, rather than something that keeps <em>happening</em>.</p>
      <p>In a session, you briefly bring a difficult memory to mind while following a gentle back-and-forth motion (eye movements, taps, or tones). This "bilateral stimulation" seems to free up the brain to reprocess the experience. Over time, the memory becomes less charged — you can recall it without being flooded by it.</p>
      <div className="pullquote"><p>&ldquo;Once the block is removed, healing resumes. EMDR therapy demonstrates that a similar sequence of events occurs with mental processes.&rdquo;</p><cite>&mdash; The EMDR Institute, founded by Francine Shapiro, Ph.D.</cite></div>
      <h3>What EMDR helps with</h3>
      <p>EMDR is best known for trauma and PTSD, but it also helps with anxiety, panic, grief, phobias, and the lingering effects of difficult childhood experiences (what clinicians call developmental or relational trauma). It's a core part of my practice, alongside Internal Family Systems and attachment-focused work.</p>
      <p>You don't need a single, dramatic "big-T" trauma to benefit. Many high-achieving adults carry "small-t" wounds — chronic criticism, emotional neglect, a frightening loss — that quietly shape how they feel today.</p>
      <div className="midcta"><p>Wondering if this is the right fit for you? Let's talk it through — no pressure.</p><Link className="btn" to="/book">Book a free 15-minute consultation</Link></div>
      <h3>What a course of EMDR looks like</h3>
      <p>We start by getting to know you and building a sense of safety and steadiness — that groundwork matters and isn't rushed. Only when you're ready do we begin reprocessing specific memories. You stay in control the whole way; nothing is forced.</p>
      <p>Some people notice shifts in a handful of sessions; others do deeper, longer work. We revisit your goals regularly so you always know how things are progressing.</p>
      <h3>What the research says</h3>
      <p>EMDR isn't fringe. It's recommended as an effective treatment for PTSD by the American Psychological Association, the U.S. Departments of Veterans Affairs and Defense, and the World Health Organization, with dozens of controlled studies behind it.</p>
      <p>That evidence base is one reason I use it — but what matters more day to day is that clients feel steadier, sleep better, and stop being ambushed by the past. Healing isn't about erasing what happened; it's about the memory finally taking its place as part of your story rather than a live wire in your present.</p>
      <div className="tipbox"><h4>Getting the most from EMDR</h4><ul><li>You don't have to retell every detail — EMDR leans less on talking it through than traditional therapy.</li><li>We build grounding and safety skills <em>before</em> any memory is reprocessed.</li><li>You stay in control and set the pace; we can slow down or pause anytime.</li><li>Come rested and hydrated — reprocessing is gentle but it's real work.</li><li>It works well in person in Arlington or McLean, or by secure video.</li></ul></div>
      </div></div></section>
      <section className="band"><div className="wrap" style={{"maxWidth": "760px"}}><h2 style={{"fontSize": "26px"}}>Common questions</h2><div className="faqwrap" style={{"marginTop": "14px"}}><details><summary>Is EMDR safe?</summary><p>Yes — EMDR is recognized by major health bodies as an effective treatment for trauma and PTSD. A trained therapist paces the work to your window of tolerance, so you're never pushed beyond what feels manageable.</p></details><details><summary>Do I have to talk about every detail of what happened?</summary><p>No. EMDR relies less on detailed retelling than talk therapy does. You can benefit while sharing only what you're comfortable sharing.</p></details><details><summary>How many sessions will I need?</summary><p>It varies. A single, recent event may resolve in a few sessions; developmental or repeated trauma usually takes longer. We set goals together and check progress often.</p></details><details><summary>Does EMDR work over telehealth?</summary><p>Yes. EMDR can be done effectively by secure video, which I offer to clients located in Virginia and Utah.</p></details></div></div></section>
      <section className="band cream"><div className="wrap"><div className="center"><div className="kick">Ready when you are</div><h2>Let's take the first step together.</h2><p className="sub2">Book a free, no-pressure 15-minute consultation with Emily M. Jones, LCSW, CGP.</p><div style={{"marginTop": "18px"}}><Link className="btn lg" to="/book">Book a free consultation</Link></div></div></div></section>
    </SiteLayout>
  );
}
