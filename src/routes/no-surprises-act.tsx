import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/no-surprises-act")({
  head: () => ({
    meta: [
          {
                "title": "Your Rights Against Surprise Medical Bills | Jones Psychotherapy"
          },
          {
                "name": "description",
                "content": "Your protections against surprise and balance billing under the No Surprises Act, and how they apply to our out-of-network practice."
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
                "content": "Your Rights Against Surprise Medical Bills | Jones Psychotherapy"
          },
          {
                "name": "twitter:description",
                "content": "Your protections against surprise and balance billing under the No Surprises Act, and how they apply to our out-of-network practice."
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
                "content": "Your Rights Against Surprise Medical Bills | Jones Psychotherapy"
          },
          {
                "property": "og:description",
                "content": "Your protections against surprise and balance billing under the No Surprises Act, and how they apply to our out-of-network practice."
          },
          {
                "property": "og:url",
                "content": "https://www.jonespsychotherapy.com/no-surprises-act"
          },
          {
                "property": "og:image",
                "content": "https://www.jonespsychotherapy.com/og-image.jpg"
          }
    ],
    links: [
          {
                "rel": "canonical",
                "href": "https://www.jonespsychotherapy.com/no-surprises-act"
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
                    "name": "No Surprises Act",
                    "item": "https://www.jonespsychotherapy.com/no-surprises-act"
                  }
                ]
              }
            ]
          },
        ),
      },
    ],
  }),
  component: NoSurprisesActPage,
});

function NoSurprisesActPage() {
  return (
    <SiteLayout crumbs={[
      {
        "label": "Home",
        "to": "/"
      },
      {
        "label": "No Surprises Act"
      }
    ]}>
      <section className="legalhero"><div className="wrap"><div className="eyebrow">Legal & policies</div><h1>Your Rights & Protections Against Surprise Medical Bills</h1><p className="legalmeta">Last updated August 2026· Jones Psychotherapy· Emily M. Jones, LCSW, CGP</p></div></section><section className="band"><div className="wrap"><div className="prose legal"><div className="legalnote">This is a plain-language summary based on the federal model notice. It is not legal advice and should be reviewed and tailored by qualified counsel before publishing.</div><p>When you get care, you are protected from surprise billing and balance billing under the federal No Surprises Act. Here is a plain-language summary of your rights and how they apply at Jones Psychotherapy.</p><h3>What is “balance billing” or a “surprise bill”?</h3><p>When you see a provider who is <em>out-of-network</em> with your insurance, that provider may bill you the difference between what your plan pays and their full charge — this is called balance billing. A <strong>surprise bill</strong> is an unexpected balance bill, often in situations where you had little control over who provided your care.</p><h3>How this applies to our practice</h3><p>Jones Psychotherapy is a transparent, <strong>out-of-network, private-pay</strong> practice. You always know our fees before you begin, you pay a set fee at the time of service, and you receive a Good Faith Estimate in advance — so you are never caught off guard by a surprise bill from us. If you choose to seek reimbursement from your insurer, we provide a monthly superbill; any reimbursement is determined by your plan.</p><h3>Your key protections</h3><p>You are entitled to a Good Faith Estimate of expected costs if you are uninsured or self-pay. You have the right to clear information about charges before you agree to services. And you have the right to dispute a bill that exceeds your Good Faith Estimate by $400 or more through the federal dispute-resolution process.</p><h3>Learn more or file a complaint</h3><p>For more about your rights, or to report a possible violation, visit <a href="https://www.cms.gov/nosurprises" target="_blank" rel="noopener">cms.gov/nosurprises</a> or call the No Surprises Help Desk at <strong>1-800-985-3059</strong>.</p><h3>Questions</h3><p>We are happy to walk through fees, superbills, and estimates with you. Call (571) 582-8086 or book a free 15-minute consultation.</p></div></div></section><section className="band finalcta"> <div className="wrap"><h2>Questions about any of this?</h2><p>Reach out anytime — or book a free 15-minute consultation to get started.</p> <Link to="/book" className="btn lg">Book a free 15-minute consultation</Link> <p style={{"marginTop": "22px", "fontSize": "15px", "color": "#d8c2af"}}>Prefer to talk first? Call <b style={{"color": "#f4e0cc"}}>(571) 582-8086</b> — I'll get back to you within one business day.</p></div></section>
    </SiteLayout>
  );
}
