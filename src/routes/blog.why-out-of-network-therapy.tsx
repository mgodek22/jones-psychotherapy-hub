import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/blog/why-out-of-network-therapy")({
  head: () => ({
    meta: [
          {
                "title": "Out-of-Network Therapy & Superbills Explained | Jones Psychotherapy"
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
                "content": "Out-of-Network Therapy & Superbills Explained | Jones Psychotherapy"
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
                "content": "Out-of-Network Therapy & Superbills Explained | Jones Psychotherapy"
          },
          {
                "property": "og:url",
                "content": "https://www.jonespsychotherapy.com/blog/why-out-of-network-therapy"
          },
          {
                "property": "og:image",
                "content": "https://www.jonespsychotherapy.com/og-image.jpg"
          }
    ],
    links: [
          {
                "rel": "canonical",
                "href": "https://www.jonespsychotherapy.com/blog/why-out-of-network-therapy"
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
                "headline": "Why Out-of-Network Therapy Can Still Be Affordable (Superbills Explained)",
                "description": "\"Out-of-network\" doesn't have to mean unaffordable. Here's how superbills and out-of-network benefits work — and why many people choose private-pay therapy.",
                "author": {
                  "@id": "https://www.jonespsychotherapy.com/#emily"
                },
                "publisher": {
                  "@id": "https://www.jonespsychotherapy.com/#practice"
                },
                "mainEntityOfPage": "https://www.jonespsychotherapy.com/blog/why-out-of-network-therapy",
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
                    "name": "Why: Why Out-of-Network Therapy Can Still Be Affordable (Sup",
                    "item": "https://www.jonespsychotherapy.com/blog/why-out-of-network-therapy"
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What does a session cost?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Individual sessions are $250, couples $300, and group $125. Your first 15-minute consultation is free."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Will I definitely get reimbursed?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "It depends entirely on your plan's out-of-network benefits — check with your insurer using the questions above. A superbill makes it possible, not guaranteed."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is out-of-network worth it if I have in-network options?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Sometimes. It comes down to fit, specialty (like EMDR or EFT), privacy, and flexibility. If the right therapist for you is out-of-network, a superbill can close much of the gap."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What's a Good Faith Estimate?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Under the No Surprises Act, out-of-network clients receive a written estimate of expected costs. You'll get one before starting."
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
  component: BlogWhyOutOfNetworkTherapyPage,
});

function BlogWhyOutOfNetworkTherapyPage() {
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
        "label": "Why"
      }
    ]}>
      <section className="arthero"><div className="wrap"><div className="artcat">Why</div><h1>Why Out-of-Network Therapy Can Still Be Affordable (Superbills Explained)</h1><p className="artdek">Out-of-network therapy means you pay your therapist directly, then may get reimbursed by your insurer using a superbill — and it often costs less than people assume while offering more privacy and flexibility.</p><p className="artmeta">By Emily M. Jones, LCSW, CGP· Jones Psychotherapy, Arlington &amp; McLean, VA</p></div></section>
      <section className="band"><div className="wrap"><div className="prose">
      <h3>What "out-of-network" means</h3>
      <p>An out-of-network (private-pay) therapist doesn't bill your insurance directly. You pay at the time of service, and I provide a monthly <strong>superbill</strong> — an itemized receipt with the codes your insurer needs. If your plan has out-of-network benefits, you submit the superbill and may be reimbursed for a portion of each session.</p>
      <h3>How to check your benefits</h3>
      <p>Call the number on your insurance card and ask: <em>Do I have out-of-network outpatient mental health benefits? What's my out-of-network deductible, and how much is left? What percentage do you reimburse for CPT code 90837 (a 60-minute session)? Is there a session limit?</em> Those four answers tell you your real cost.</p>
      <div className="midcta"><p>Wondering if this is the right fit for you? Let's talk it through — no pressure.</p><Link className="btn" to="/book">Book a free 15-minute consultation</Link></div>
      <h3>Why people choose private pay anyway</h3>
      <p>Beyond the reimbursement, out-of-network care means <strong>no diagnosis required on file</strong> with your insurer, more privacy, longer or more frequent sessions when needed, and continuity with one therapist. For many, that's worth it. I'm happy to walk you through the numbers on our free consult.</p>
      <h3>A realistic cost example</h3>
      <p>Say your plan reimburses 60% of a 60-minute session after a $1,000 out-of-network deductible. You'd pay the full fee until that deductible is met, then get back a portion of each session after that. Many clients are surprised how much comes back once they actually check.</p>
      <p>Every plan is different, which is exactly why the questions below matter more than any rule of thumb — and why I provide an itemized superbill each month with the codes your insurer needs.</p>
      <div className="tipbox"><h4>5 questions to ask your insurer today</h4><ul><li>Do I have out-of-network outpatient mental health benefits?</li><li>What's my out-of-network deductible, and how much is left this year?</li><li>What percentage do you reimburse for CPT code 90837 (a 60-minute session)?</li><li>Is there a limit on the number of sessions per year?</li><li>How do I submit a superbill, and how long does reimbursement take?</li></ul></div>
      </div></div></section>
      <section className="band"><div className="wrap" style={{"maxWidth": "760px"}}><h2 style={{"fontSize": "26px"}}>Common questions</h2><div className="faqwrap" style={{"marginTop": "14px"}}><details><summary>What does a session cost?</summary><p>Individual sessions are $250, couples $300, and group $125. Your first 15-minute consultation is free.</p></details><details><summary>Will I definitely get reimbursed?</summary><p>It depends entirely on your plan's out-of-network benefits — check with your insurer using the questions above. A superbill makes it possible, not guaranteed.</p></details><details><summary>Is out-of-network worth it if I have in-network options?</summary><p>Sometimes. It comes down to fit, specialty (like EMDR or EFT), privacy, and flexibility. If the right therapist for you is out-of-network, a superbill can close much of the gap.</p></details><details><summary>What's a Good Faith Estimate?</summary><p>Under the No Surprises Act, out-of-network clients receive a written estimate of expected costs. You'll get one before starting.</p></details></div></div></section>
      <section className="band cream"><div className="wrap"><div className="center"><div className="kick">Ready when you are</div><h2>Let's take the first step together.</h2><p className="sub2">Book a free, no-pressure 15-minute consultation with Emily M. Jones, LCSW, CGP.</p><div style={{"marginTop": "18px"}}><Link className="btn lg" to="/book">Book a free consultation</Link></div></div></div></section>
    </SiteLayout>
  );
}
