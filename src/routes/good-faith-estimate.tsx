import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/good-faith-estimate")({
  head: () => ({
    meta: [
          {
                "title": "Good Faith Estimate — Your Rights | Jones Psychotherapy"
          },
          {
                "name": "description",
                "content": "Your right to a Good Faith Estimate of expected therapy costs under the No Surprises Act, for self-pay and uninsured clients."
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
                "content": "Good Faith Estimate — Your Rights | Jones Psychotherapy"
          },
          {
                "name": "twitter:description",
                "content": "Your right to a Good Faith Estimate of expected therapy costs under the No Surprises Act, for self-pay and uninsured clients."
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
                "content": "Good Faith Estimate — Your Rights | Jones Psychotherapy"
          },
          {
                "property": "og:description",
                "content": "Your right to a Good Faith Estimate of expected therapy costs under the No Surprises Act, for self-pay and uninsured clients."
          },
          {
                "property": "og:url",
                "content": "https://www.jonespsychotherapy.com/good-faith-estimate"
          },
          {
                "property": "og:image",
                "content": "https://www.jonespsychotherapy.com/og-image.jpg"
          }
    ],
    links: [
          {
                "rel": "canonical",
                "href": "https://www.jonespsychotherapy.com/good-faith-estimate"
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
                    "name": "Good Faith Estimate",
                    "item": "https://www.jonespsychotherapy.com/good-faith-estimate"
                  }
                ]
              }
            ]
          },
        ),
      },
    ],
  }),
  component: GoodFaithEstimatePage,
});

function GoodFaithEstimatePage() {
  return (
    <SiteLayout crumbs={[
      {
        "label": "Home",
        "to": "/"
      },
      {
        "label": "Good Faith Estimate"
      }
    ]}>
      <section className="legalhero"><div className="wrap"><div className="eyebrow">Legal &amp; policies</div><h1>Good Faith Estimate</h1><p className="legalmeta">Last updated August 2026· Jones Psychotherapy· Emily M. Jones, LCSW, CGP</p></div></section><section className="band"><div className="wrap"><div className="prose legal"><div className="legalnote">This notice summarizes your right to a Good Faith Estimate under the No Surprises Act. It is provided for information, is not legal advice, and should be reviewed and tailored by qualified counsel before publishing.</div><p>Under the federal No Surprises Act, you have the right to receive a <strong>Good Faith Estimate</strong> of expected costs for your care. Because Jones Psychotherapy is an out-of-network, private-pay practice, this right applies to you as a self-pay or uninsured client.</p><h3>What a Good Faith Estimate is</h3><p>A Good Faith Estimate (GFE) is a written estimate of the costs you can reasonably expect for the therapy services you schedule or request — for example, the fee per session and the anticipated course of care. It is an estimate, not a bill or a contract, and actual costs may change as your needs do.</p><h3>Who receives one</h3><p>You have the right to a GFE if you are <strong>uninsured</strong>, or if you are insured but <strong>choose not to use your insurance</strong> (self-pay). Because we do not bill insurance directly, essentially all of our clients are eligible.</p><h3>What it includes</h3><p>Your name and date of birth, a plain-language description of the primary service, an itemized list of the expected services and their fees, the relevant service and diagnosis codes, and our practice identifiers. It will note that separate services may be scheduled separately and that the estimate is not a contract.</p><h3>When you receive it</h3><p>You can request a GFE at any time and we will provide one <strong>within 3 business days</strong> of your request. If you schedule services at least <strong>3 business days</strong> in advance, you will receive a GFE within <strong>1 business day</strong> of scheduling; if you schedule at least <strong>10 business days</strong> in advance, within <strong>3 business days</strong>. You will also receive one before beginning ongoing care.</p><h3>If your bill is higher than your estimate</h3><p>If you are billed at least <strong>$400 more</strong> than your Good Faith Estimate for a given provider, you have the right to dispute the bill through the federal <strong>patient-provider dispute resolution</strong> process. You generally must start the dispute within <strong>120 calendar days</strong> of receiving the bill. While a dispute is under review, we pause related collection activity and late fees.</p><h3>How to get your Good Faith Estimate</h3><p>Ask at your free consultation, or contact us any time at (571) 582-8086, and keep a copy of any estimate you receive. For more information, visit <a href="https://www.cms.gov/nosurprises" target="_blank" rel="noopener">cms.gov/nosurprises</a> or call 1-800-985-3059.</p></div></div></section><section className="band finalcta"> <div className="wrap"><h2>Questions about any of this?</h2><p>Reach out anytime — or book a free 15-minute consultation to get started.</p> <Link className="btn lg" to="/book">Book a free 15-minute consultation</Link> <p style={{"marginTop": "22px", "fontSize": "15px", "color": "#d8c2af"}}>Prefer to talk first? Call <b style={{"color": "#f4e0cc"}}>(571) 582-8086</b> — I'll get back to you within one business day.</p></div></section>
    </SiteLayout>
  );
}
