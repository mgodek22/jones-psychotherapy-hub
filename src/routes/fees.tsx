import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/fees")({
  head: () => ({
    meta: [
          {
                "title": "Fees & Insurance | Emily M. Jones, LCSW — Arlington & McLean, VA"
          },
          {
                "name": "description",
                "content": "Therapy fees and out-of-network insurance information for Emily M. Jones, LCSW. Individual $250, couples $300, free consultation."
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
                "content": "Fees & Insurance | Emily M. Jones, LCSW — Arlington & McLean, VA"
          },
          {
                "name": "twitter:description",
                "content": "Therapy fees and out-of-network insurance information for Emily M. Jones, LCSW. Individual $250, couples $300, free consultation."
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
                "content": "Fees & Insurance | Emily M. Jones, LCSW — Arlington & McLean, VA"
          },
          {
                "property": "og:description",
                "content": "Therapy fees and out-of-network insurance information for Emily M. Jones, LCSW. Individual $250, couples $300, free consultation."
          },
          {
                "property": "og:url",
                "content": "https://www.jonespsychotherapy.com/fees"
          },
          {
                "property": "og:image",
                "content": "https://www.jonespsychotherapy.com/og-image.jpg"
          }
    ],
    links: [
          {
                "rel": "canonical",
                "href": "https://www.jonespsychotherapy.com/fees"
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
                    "name": "Fees & Insurance",
                    "item": "https://www.jonespsychotherapy.com/fees"
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Why don't you take insurance?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Staying out-of-network protects your care: no mental-health diagnosis is required on file with an insurer, you get more privacy, and sessions aren't limited by what a plan authorizes. You can still seek reimbursement using the superbill Emily provides."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How does a superbill work — will I really get money back?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "A superbill is an itemized receipt you submit to your insurer. If your plan has out-of-network benefits, they reimburse a portion of what you paid, usually after an out-of-network deductible. Reimbursement varies by plan, so check your benefits first."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What's the difference between out-of-network and self-pay?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "With out-of-network care you pay the provider directly and may seek partial reimbursement through your insurance's out-of-network benefits. Self-pay simply means paying out of pocket; a superbill lets you pursue reimbursement if benefits exist."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can I use my HSA or FSA?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes — most health savings and flexible spending accounts can be used for therapy. Payment is due at the time of service."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is out-of-network therapy worth it?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Often, yes — especially for a strong-fit therapist with specialized training. Between out-of-network reimbursement and the privacy and flexibility of private pay, many people find the value is higher than the sticker price suggests."
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
  component: FeesPage,
});

function FeesPage() {
  return (
    <SiteLayout crumbs={[
      {
        "label": "Home",
        "to": "/"
      },
      {
        "label": "Fees & Insurance"
      }
    ]}>
      <section className="hero solo"><div className="wrap"><div> <div className="eyebrow">Fees &amp; Insurance· Clear and upfront</div><h1>Transparency, before you ever reach out.</h1><p className="sub">Here's exactly what to expect, so you can decide with all the information in front of you.</p> <div className="cta-row"><Link className="btn lg" to="/book">Book a free 15-minute consultation</Link></div></div></div></section>
      <section className="band"><div className="wrap"> <div className="feegrid"> <div className="feebox"><h4>Session fees</h4> <div className="fee"><span>Individual therapy (50 min)</span><b>$250</b></div> <div className="fee"><span>Couples therapy</span><b>$300</b></div> <div className="fee"><span>Group therapy (weekly)</span><b>$125</b></div> <div className="fee"><span>Initial 15-min consultation</span><b>Free</b></div> <p style={{"fontSize": "13px", "color": "#716a5d", "margin": "12px 0 0"}}>A limited number of sliding-scale spots may be available — ask during your consult.</p></div> <div className="feebox"><h4>Insurance, in one line</h4> <p style={{"fontSize": "15.5px"}}>I <b>don't bill insurance directly</b> — I'm a private-pay, out-of-network provider. Instead, I give you a monthly <b>superbill</b> you can submit to your insurer for possible out-of-network reimbursement.</p> <p style={{"fontSize": "15.5px", "marginBottom": "0"}}>You'll also receive a <b>Good Faith Estimate</b> of expected costs, as required under the No Surprises Act.</p></div> </div>
      </div></section>
      <section className="band cream"><div className="wrap"><div className="prose"> <h3>Do you take insurance?</h3> <p>Not directly — and here's exactly what that means so there are no surprises. I'm an <strong>out-of-network (private-pay) provider</strong>: you pay for each session at the time of service, and I don't submit claims to your insurance company. What I <em>do</em> provide is a <strong>superbill</strong> — a detailed monthly receipt with everything your insurer needs — so you can seek reimbursement yourself if your plan includes out-of-network benefits.</p> <h3>What is a superbill, and how does reimbursement work?</h3> <p>A superbill is an itemized statement listing the dates of service, the service (CPT) codes, a diagnosis code, the fees you paid, and my provider details. Each month I send you one; you submit it to your insurance company (usually through their app, website, or a claim form), and if you have out-of-network benefits, they reimburse a portion of what you paid — often after an out-of-network deductible is met. The reimbursement goes directly to you, not to me.</p> <h3>How to check your out-of-network benefits</h3> <p>Before we start, it's worth a five-minute call to the member number on your insurance card. Ask:</p> <ul> <li>Do I have <strong>out-of-network outpatient mental health</strong> benefits?</li> <li>What is my <strong>out-of-network deductible</strong>, and how much of it have I met this year?</li> <li>What <strong>percentage</strong> do you reimburse for CPT code <strong>90837</strong> (a 60-minute session)?</li> <li>Is there a <strong>limit</strong> on the number of sessions per year?</li> <li>How do I <strong>submit a superbill</strong>, and how long does reimbursement take?</li> </ul> <p>Those five answers tell you your real out-of-pocket cost. I'm also glad to walk through them with you on our free consultation.</p> <h3>Why I work this way</h3> <p>Staying out-of-network lets me protect your care in ways insurance often doesn't. There's <strong>no mental-health diagnosis required on file</strong> with an insurer, more privacy, and the freedom to meet as often and for as long as <em>your</em> needs call for — rather than what a plan authorizes. It also means real continuity: one therapist who knows your story.</p> <h3>Sliding scale &amp; your rights</h3> <p>A limited number of <strong>sliding-scale</strong> spots may be available — please ask during your consultation. And under the No Surprises Act, you'll receive a written <Link to="/good-faith-estimate">Good Faith Estimate</Link> of expected costs, plus the right to dispute a bill that exceeds it. You can read more on the <Link to="/good-faith-estimate">Good Faith Estimate</Link> and <Link to="/no-surprises-act">No Surprises Act</Link> pages.</p> <h3>Payment</h3> <p>Payment is due at the time of each session. Most major cards, HSA, and FSA cards are accepted. If you ever need to cancel, please give at least 24 hours' notice so the time can be offered to someone else.</p>
      </div></div></section>
      <section className="band finalcta"> <div className="wrap"><h2>Questions about fees or coverage?</h2><p>Book a free 15-minute consultation and I'll answer everything before you commit.</p> <Link className="btn lg" to="/book">Book a free 15-minute consultation</Link> <p style={{"marginTop": "22px", "fontSize": "15px", "color": "#d8c2af"}}>Prefer to talk first? Call <b style={{"color": "#f4e0cc"}}>(571) 582-8086</b> — I'll get back to you within one business day.</p></div></section><section className="band cream"><div className="wrap"><div className="center"><div className="kick">Good questions</div><h2>Frequently asked questions</h2></div><div className="faqlist"><details><summary>Why don't you take insurance?</summary><p>Staying out-of-network protects your care: no mental-health diagnosis is required on file with an insurer, you get more privacy, and sessions aren't limited by what a plan authorizes. You can still seek reimbursement using the superbill Emily provides.</p></details><details><summary>How does a superbill work — will I really get money back?</summary><p>A superbill is an itemized receipt you submit to your insurer. If your plan has out-of-network benefits, they reimburse a portion of what you paid, usually after an out-of-network deductible. Reimbursement varies by plan, so check your benefits first.</p></details><details><summary>What's the difference between out-of-network and self-pay?</summary><p>With out-of-network care you pay the provider directly and may seek partial reimbursement through your insurance's out-of-network benefits. Self-pay simply means paying out of pocket; a superbill lets you pursue reimbursement if benefits exist.</p></details><details><summary>Can I use my HSA or FSA?</summary><p>Yes — most health savings and flexible spending accounts can be used for therapy. Payment is due at the time of service.</p></details><details><summary>Is out-of-network therapy worth it?</summary><p>Often, yes — especially for a strong-fit therapist with specialized training. Between out-of-network reimbursement and the privacy and flexibility of private pay, many people find the value is higher than the sticker price suggests.</p></details></div></div></section>
    </SiteLayout>
  );
}
