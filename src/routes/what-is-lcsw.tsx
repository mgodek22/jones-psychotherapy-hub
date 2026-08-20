import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/what-is-lcsw")({
  head: () => ({
    meta: [
          {
                "title": "What Is an LCSW? | Emily M. Jones, LCSW — Jones Psychotherapy"
          },
          {
                "name": "description",
                "content": "What an LCSW (Licensed Clinical Social Worker) is, the schooling and licensing it takes, and how it compares to a psychologist, LPC, or psychiatrist."
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
                "content": "What Is an LCSW? | Emily M. Jones, LCSW — Jones Psychotherapy"
          },
          {
                "name": "twitter:description",
                "content": "What an LCSW (Licensed Clinical Social Worker) is, the schooling and licensing it takes, and how it compares to a psychologist, LPC, or psychiatrist."
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
                "content": "What Is an LCSW? | Emily M. Jones, LCSW — Jones Psychotherapy"
          },
          {
                "property": "og:description",
                "content": "What an LCSW (Licensed Clinical Social Worker) is, the schooling and licensing it takes, and how it compares to a psychologist, LPC, or psychiatrist."
          },
          {
                "property": "og:url",
                "content": "https://www.jonespsychotherapy.com/what-is-lcsw"
          },
          {
                "property": "og:image",
                "content": "https://www.jonespsychotherapy.com/og-image.jpg"
          }
    ],
    links: [
          {
                "rel": "canonical",
                "href": "https://www.jonespsychotherapy.com/what-is-lcsw"
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
                    "name": "What Is an LCSW?",
                    "item": "https://www.jonespsychotherapy.com/what-is-lcsw"
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Is an LCSW a real therapist?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. An LCSW is a fully licensed, independent psychotherapist who can diagnose and treat mental health conditions. Many of the most experienced therapists you'll meet are LCSWs."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What's the difference between an LCSW and a psychologist?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "A psychologist holds a doctorate (PhD or PsyD) and can do formal psychological testing; an LCSW holds a master's plus thousands of supervised hours and a clinical license. For talk therapy, both are qualified."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can an LCSW diagnose and treat mental illness?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Licensed clinical social workers are trained and authorized to assess, diagnose, and treat mental health conditions and to provide psychotherapy independently."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can an LCSW prescribe medication?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "No. Prescribing is done by physicians such as psychiatrists (or, in some settings, psychiatric nurse practitioners). An LCSW provides therapy and can coordinate with a prescriber if medication might help."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How long does it take to become an LCSW?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Typically six or more years after high school: a bachelor's degree, a two-year Master of Social Work, then about 3,000 hours of supervised clinical work over two to four years, plus a national licensing exam."
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
  component: WhatIsLcswPage,
});

function WhatIsLcswPage() {
  return (
    <SiteLayout crumbs={[
      {
        "label": "Home",
        "to": "/"
      },
      {
        "label": "What Is an LCSW?"
      }
    ]}>
      <section className="hero solo"><div className="wrap"><div> <div className="eyebrow">Credentials· What is an LCSW?</div><h1>What Is an LCSW — and What Does It Take to Become One?</h1><p className="sub">An LCSW is a Licensed Clinical Social Worker: a master's-trained, state-licensed mental health professional who can independently diagnose and treat emotional and mental health conditions.</p> <div className="cta-row"><Link className="btn lg" to="/book">Book a free 15-minute consultation</Link></div></div></div></section><section className="band"><div className="wrap"><div className="prose"><h3>The short answer</h3><p>LCSW stands for <strong>Licensed Clinical Social Worker</strong>. It's one of the most rigorous independent clinical licenses in mental health. An LCSW holds a graduate degree, has completed thousands of hours of supervised clinical work, has passed a national clinical licensing exam, and is licensed by the state to diagnose and treat mental health conditions and to provide psychotherapy independently.</p><h3>The path to becoming an LCSW</h3><p>It's a long road. In brief, it takes:</p><ul><li>A bachelor's degree, then a <strong>Master of Social Work (MSW)</strong> from a program accredited by the Council on Social Work Education (CSWE).</li><li><strong>Roughly 3,000 hours of supervised, post-master's clinical experience</strong>, usually over two to four years — including well over a thousand hours of direct, face-to-face client work and 100+ hours of clinical supervision.</li><li>Passing the <strong>ASWB Clinical Examination</strong>, a national, proctored licensing exam.</li><li>A state <strong>law-and-ethics</strong> requirement and background check — then ongoing continuing education to keep the license active.</li></ul><h3>Emily's training and credentials</h3><p>Emily earned her <strong>Master of Social Work from the University of Michigan</strong> and has more than <strong>20 years</strong> of clinical experience. Beyond the LCSW, she is a <strong>Certified Group Psychotherapist (CGP)</strong> and has advanced training in <Link to="/what-is-emdr">EMDR</Link>, <Link to="/what-is-ifs">Internal Family Systems</Link>, and attachment-focused and emotionally focused couples therapy.</p><p>She is licensed in <strong>Virginia and Utah</strong> — you can verify her licenses directly with the state boards from the <Link to="/about">About</Link> page.</p><h3>LCSW vs. other therapist titles</h3><p>You'll see several credentials after therapists' names. Broadly: an <strong>LCSW</strong> (clinical social worker) and an <strong>LPC / LCPC</strong> (licensed professional counselor) are both master's-level, independently licensed psychotherapists. A <strong>psychologist</strong> (PhD or PsyD) holds a doctorate and may also do psychological testing. A <strong>psychiatrist</strong> (MD or DO) is a physician who can prescribe medication. For talk therapy, an experienced LCSW is a fully qualified, independent provider.</p><p>What matters most isn't the letters. Research consistently finds that the <em>fit</em> between you and your therapist predicts outcomes more reliably than the specific degree or method.</p><h3>Why the credential matters for you</h3><p>An LCSW is bound by a professional code of ethics, accountable to a state licensing board, and required to keep learning through continuing education. It means the person you're trusting with your inner life has met a high, verifiable standard — and that you can confirm their license status yourself, any time, with the state board.</p><p style={{"fontSize": "13px", "color": "var(--muted)", "marginTop": "24px", "borderTop": "1px solid var(--line)", "paddingTop": "14px"}}>Credential requirements summarized from the Association of Social Work Boards (ASWB), the Council on Social Work Education (CSWE), and Virginia licensing regulations. Requirements vary by state and change over time; verify current rules with your state board.</p></div></div></section><section className="band finalcta"> <div className="wrap"><h2>Curious whether this fits what you're going through?</h2><p>Book a free 15-minute consultation and let's talk it through — no pressure.</p> <Link className="btn lg" to="/book">Book a free 15-minute consultation</Link> <p style={{"marginTop": "22px", "fontSize": "15px", "color": "#d8c2af"}}>Prefer to talk first? Call <b style={{"color": "#f4e0cc"}}>(571) 582-8086</b> — I'll get back to you within one business day.</p></div></section><section className="band cream"><div className="wrap"><div className="center"><div className="kick">Good questions</div><h2>Frequently asked questions</h2></div><div className="faqlist"><details><summary>Is an LCSW a real therapist?</summary><p>Yes. An LCSW is a fully licensed, independent psychotherapist who can diagnose and treat mental health conditions. Many of the most experienced therapists you'll meet are LCSWs.</p></details><details><summary>What's the difference between an LCSW and a psychologist?</summary><p>A psychologist holds a doctorate (PhD or PsyD) and can do formal psychological testing; an LCSW holds a master's plus thousands of supervised hours and a clinical license. For talk therapy, both are qualified.</p></details><details><summary>Can an LCSW diagnose and treat mental illness?</summary><p>Yes. Licensed clinical social workers are trained and authorized to assess, diagnose, and treat mental health conditions and to provide psychotherapy independently.</p></details><details><summary>Can an LCSW prescribe medication?</summary><p>No. Prescribing is done by physicians such as psychiatrists (or, in some settings, psychiatric nurse practitioners). An LCSW provides therapy and can coordinate with a prescriber if medication might help.</p></details><details><summary>How long does it take to become an LCSW?</summary><p>Typically six or more years after high school: a bachelor's degree, a two-year Master of Social Work, then about 3,000 hours of supervised clinical work over two to four years, plus a national licensing exam.</p></details></div></div></section>
    </SiteLayout>
  );
}
