import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
          {
                "title": "About Emily M. Jones, LCSW, CGP | Therapist in Northern Virginia & the DC Metro Area"
          },
          {
                "name": "description",
                "content": "Meet Emily M. Jones, LCSW, CGP — a compassionate, direct therapist with 20+ years' experience, licensed in Virginia & Utah."
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
                "content": "About Emily M. Jones, LCSW, CGP | Therapist in Northern Virginia & the DC Metro Area"
          },
          {
                "name": "twitter:description",
                "content": "Meet Emily M. Jones, LCSW, CGP — a compassionate, direct therapist with 20+ years' experience, licensed in Virginia & Utah."
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
                "content": "About Emily M. Jones, LCSW, CGP | Therapist in Northern Virginia & the DC Metro Area"
          },
          {
                "property": "og:description",
                "content": "Meet Emily M. Jones, LCSW, CGP — a compassionate, direct therapist with 20+ years' experience, licensed in Virginia & Utah."
          },
          {
                "property": "og:url",
                "content": "https://www.jonespsychotherapy.com/about"
          },
          {
                "property": "og:image",
                "content": "https://www.jonespsychotherapy.com/og-image.jpg"
          }
    ],
    links: [
          {
                "rel": "canonical",
                "href": "https://www.jonespsychotherapy.com/about"
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
                    "name": "About",
                    "item": "https://www.jonespsychotherapy.com/about"
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What are Emily Jones's credentials?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Emily is a Licensed Clinical Social Worker (LCSW) and a Certified Group Psychotherapist (CGP), with a Master of Social Work from the University of Michigan and 20+ years of experience. She's licensed in Virginia and Utah."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What is Emily's therapy style?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Warm, direct, and down-to-earth. She'll sit with you in the hard moments and gently show you where your life isn't yet matching your values."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What does Emily specialize in?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Trauma and PTSD, anxiety (including high-functioning anxiety), relationships and attachment, grief, self-esteem, and life transitions — for adults, teens, and couples."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Where is Emily licensed?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "In Virginia and Utah. You can verify each license directly with the state board from links on the About page."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does Emily see teens or just adults?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Both adults and teens, as well as couples and groups."
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
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout crumbs={[
      {
        "label": "Home",
        "to": "/"
      },
      {
        "label": "About"
      }
    ]}>
      <section className="hero"><div className="wrap"> <div><div className="eyebrow">Meet Emily</div> <h1>A compassionate, direct, <em>down-to-earth</em> therapist.</h1> <p className="sub">I understand the challenges of living from a place of pain — and I know that change is possible.</p> <div className="cta-row"><Link to="/book" className="btn lg">Book a free consultation</Link></div></div> <div className="portrait" style={{"aspectRatio": "4/5"}}><img className="pfoto" src="/brand/emily_full.jpg" alt="Emily M. Jones, LCSW" /><div className="tag"><b>Emily M. Jones</b>LCSW, CGP· in-person & virtual</div></div>
      </div></section>
      <section className="band"><div className="wrap"><div className="prose"> <p>For over two decades I've helped adults, teens, and couples across the DC area work through developmental trauma, attachment wounds, anxiety, and the patterns that keep them stuck. My style is warm, direct, and down-to-earth — I'll sit with you in the hard moments, and gently show you the places where your life isn't yet matching your values.</p> <p>I understand the challenges of living from a place of pain, and I know that change is possible. Much of my work centers on trauma and PTSD, anxiety, and the big life transitions — a new relationship, a loss, a career shift, becoming a parent — that ask us to grow in ways we didn't expect. Whatever brings you in, my hope is that you leave our work feeling more grounded in yourself and more connected to the people who matter to you.</p> <h3>My approach</h3> <p>I believe healing happens in connection. I draw on Internal Family Systems (IFS), EMDR, psychodynamic and attachment-based therapy, somatic approaches, and emotionally-focused work with couples — always tailored to you rather than a formula. In group work, I've spent more than ten years leading interpersonal process groups, including a long-running group for professional women.</p> <h3>My credentials, in plain terms</h3> <p>I'm a <strong>Licensed Clinical Social Worker (LCSW)</strong> — a master's-trained clinician, licensed by the state to independently assess, diagnose, and treat mental-health conditions and provide psychotherapy. (<Link to="/what-is-lcsw">What is an LCSW?</Link>) I earned my Master of Social Work from the University of Michigan and have more than 20 years of experience across multiple therapeutic models.</p> <p>I'm also a <strong>Certified Group Psychotherapist (CGP)</strong> — a credential awarded through the American Group Psychotherapy Association (AGPA) that requires hundreds of hours leading groups and dozens of hours of specialized group supervision. (<Link to="/what-is-group-therapy">What is group therapy?</Link>) I'm licensed in Virginia and Utah, and see clients in person in Arlington and McLean and by secure video across both states.</p> <h3>Fees & insurance</h3> <p>I'm an out-of-network provider — individual sessions are $250 and couples $300 — and I provide a monthly superbill you can submit for possible out-of-network reimbursement. A limited number of sliding-scale spots may be available; the first 15-minute consultation is always free.</p>
      </div> <div style={{"maxWidth": "760px", "margin": "6px auto 0"}}><div className="credlist" style={{"X": "0"}}> <span className="cred" style={{"color": "#5a5344", "background": "#f8e6d4", "borderColor": "#f4d0ac"}}>LCSW — Virginia & Utah</span> <span className="cred" style={{"color": "#5a5344", "background": "#f8e6d4", "borderColor": "#f4d0ac"}}>CGP· Certified Group Psychotherapist (AGPA)</span> <span className="cred" style={{"color": "#5a5344", "background": "#f8e6d4", "borderColor": "#f4d0ac"}}>EMDR trained</span> <span className="cred" style={{"color": "#5a5344", "background": "#f8e6d4", "borderColor": "#f4d0ac"}}>Internal Family Systems</span> <span className="cred" style={{"color": "#5a5344", "background": "#f8e6d4", "borderColor": "#f4d0ac"}}>MSW· University of Michigan</span> <span className="cred" style={{"color": "#5a5344", "background": "#f8e6d4", "borderColor": "#f4d0ac"}}>20+ years' experience</span> </div></div> <div className="licblock"><h3 style={{"marginTop": "0"}}>Licenses & credentials</h3><p style={{"fontSize": "14.5px", "color": "var(--ink2)", "margin": "0 0 10px"}}>Licensed and in good standing — you can verify any license directly with the state board.</p><div className="licrow"><div><div className="licname">LCSW — Virginia</div><div className="licnum">License #0904008361· Active· licensed since 2013</div></div><a className="licverify" href="https://dhp.virginiainteractive.org/Lookup/Detail/0904008361" target="_blank" rel="noopener">Verify →</a></div><div className="licrow"><div><div className="licname">LCSW — Utah</div><div className="licnum">License #13521061-3501· Active (by endorsement)· through Sep 2026</div></div><a className="licverify" href="https://secure.utah.gov/llv/search/index.html" target="_blank" rel="noopener">Verify →</a></div><div className="licrow"><div><div className="licname">CGP — Certified Group Psychotherapist</div><div className="licnum">International Board for Certification of Group Psychotherapists (IBCGP)</div></div><a className="licverify" href="https://members.agpa.org/certifications/cgp-directory" target="_blank" rel="noopener">AGPA directory →</a></div></div>
      </div></section>
      <section className="band cream"><div className="wrap"><div className="center"><div className="kick">What I help with</div><h2>Specialties & expertise</h2><p className="sub2" style={{"maxWidth": "660px", "margin": "0 auto"}}>Areas I treat within my clinical scope as a Licensed Clinical Social Worker — with group work provided as a Certified Group Psychotherapist through the AGPA.</p></div><h3 className="exphead" style={{"textAlign": "center"}}>Top specialties</h3><div className="topspec"><div className="tsc"><h4>Trauma & PTSD</h4><p>Developmental, relational, and single-event trauma — using EMDR and parts work to help the past stop running the present.</p></div><div className="tsc"><h4>Anxiety</h4><p>From everyday overwhelm to high-functioning anxiety that hides behind competence — quieting the inner critic and the constant bracing.</p></div><div className="tsc"><h4>Life Transitions</h4><p>New relationships, loss, career shifts, becoming a parent — the thresholds that ask us to grow in unexpected ways.</p></div></div><div className="exphead">Also experienced with</div><div className="exptags"><span className="etag">ADHD</span><span className="etag">Behavioral Issues</span><span className="etag">Career Counseling</span><span className="etag">Chronic Pain</span><span className="etag">Codependency</span><span className="etag">Coping Skills</span><span className="etag">Depression</span><span className="etag">Family Conflict</span><span className="etag">Grief</span><span className="etag">LGBTQ+</span><span className="etag">Marital & Premarital</span><span className="etag">Parenting</span><span className="etag">Peer Relationships</span><span className="etag">Relationship Issues</span><span className="etag">Self Esteem</span><span className="etag">Sexual Abuse</span><span className="etag">Sleep or Insomnia</span><span className="etag">Spirituality</span><span className="etag">Stress</span><span className="etag">Women's Issues</span></div></div></section>
      <section className="band finalcta"> <div className="wrap"><h2>I'd love to hear what's bringing you in.</h2><p>Book a free 15-minute consultation — no pressure, just a conversation.</p> <Link to="/book" className="btn lg">Book a free 15-minute consultation</Link> <p style={{"marginTop": "22px", "fontSize": "15px", "color": "#d8c2af"}}>Prefer to talk first? Call <b style={{"color": "#f4e0cc"}}>(571) 582-8086</b> — I'll get back to you within one business day.</p></div></section><section className="band cream"><div className="wrap"><div className="center"><div className="kick">Good questions</div><h2>Frequently asked questions</h2></div><div className="faqlist"><details><summary>What are Emily Jones's credentials?</summary><p>Emily is a Licensed Clinical Social Worker (LCSW) and a Certified Group Psychotherapist (CGP), with a Master of Social Work from the University of Michigan and 20+ years of experience. She's licensed in Virginia and Utah.</p></details><details><summary>What is Emily's therapy style?</summary><p>Warm, direct, and down-to-earth. She'll sit with you in the hard moments and gently show you where your life isn't yet matching your values.</p></details><details><summary>What does Emily specialize in?</summary><p>Trauma and PTSD, anxiety (including high-functioning anxiety), relationships and attachment, grief, self-esteem, and life transitions — for adults, teens, and couples.</p></details><details><summary>Where is Emily licensed?</summary><p>In Virginia and Utah. You can verify each license directly with the state board from links on the About page.</p></details><details><summary>Does Emily see teens or just adults?</summary><p>Both adults and teens, as well as couples and groups.</p></details></div></div></section>
    </SiteLayout>
  );
}
