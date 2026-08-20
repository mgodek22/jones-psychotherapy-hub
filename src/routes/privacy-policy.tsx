import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
          {
                "title": "Privacy Policy | Jones Psychotherapy — Emily M. Jones, LCSW"
          },
          {
                "name": "description",
                "content": "How Jones Psychotherapy handles information collected through our website. Separate from our HIPAA Notice of Privacy Practices."
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
                "content": "Privacy Policy | Jones Psychotherapy — Emily M. Jones, LCSW"
          },
          {
                "name": "twitter:description",
                "content": "How Jones Psychotherapy handles information collected through our website. Separate from our HIPAA Notice of Privacy Practices."
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
                "content": "Privacy Policy | Jones Psychotherapy — Emily M. Jones, LCSW"
          },
          {
                "property": "og:description",
                "content": "How Jones Psychotherapy handles information collected through our website. Separate from our HIPAA Notice of Privacy Practices."
          },
          {
                "property": "og:url",
                "content": "https://www.jonespsychotherapy.com/privacy-policy"
          },
          {
                "property": "og:image",
                "content": "https://www.jonespsychotherapy.com/og-image.jpg"
          }
    ],
    links: [
          {
                "rel": "canonical",
                "href": "https://www.jonespsychotherapy.com/privacy-policy"
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
                    "name": "Privacy Policy",
                    "item": "https://www.jonespsychotherapy.com/privacy-policy"
                  }
                ]
              }
            ]
          },
        ),
      },
    ],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <SiteLayout crumbs={[
      {
        "label": "Home",
        "to": "/"
      },
      {
        "label": "Privacy Policy"
      }
    ]}>
      <section className="legalhero"><div className="wrap"><div className="eyebrow">Legal & policies</div><h1>Privacy Policy</h1><p className="legalmeta">Last updated August 2026· Jones Psychotherapy· Emily M. Jones, LCSW, CGP</p></div></section><section className="band"><div className="wrap"><div className="prose legal"><div className="legalnote">This Privacy Policy is provided as a starting template and should be reviewed and tailored by a qualified attorney before publishing. It describes how this website handles information and is <strong>separate</strong> from the practice's HIPAA <em>Notice of Privacy Practices</em>, which governs your health information as a client.</div><p>Jones Psychotherapy ("we," "us," or "our"), the practice of Emily M. Jones, LCSW, CGP, respects your privacy. This policy explains what information we collect through our website, how we use it, and the choices you have.</p><h3>Website privacy vs. your health information</h3><p>This policy covers information collected through our <strong>website</strong> and general business communications. Your <strong>protected health information</strong> as a therapy client — anything about your care, records, or treatment — is governed separately by our HIPAA <em>Notice of Privacy Practices</em> and by applicable Virginia, Utah, and federal law, which you receive when you begin services.</p><h3>Information we collect</h3><p><strong>Information you give us.</strong> When you use our consultation or contact form, or email or call us, we collect what you provide — such as your name, email address, phone number, and the content of your message.</p><p><strong>Scheduling information.</strong> Appointment booking is handled through our practice-management platform (SimplePractice); information you enter there is governed by that platform's own privacy and security terms.</p><p><strong>Information collected automatically.</strong> Like most websites, ours may automatically collect limited technical data — such as IP address, browser type, pages viewed, and referring page — through cookies and similar technologies.</p><h3>How we use your information</h3><p>We use your information to respond to your inquiry, schedule and provide services, operate and improve the website, and comply with legal obligations. We do <strong>not</strong> sell your personal information.</p><h3>Cookies and analytics</h3><p>Our website may use cookies and analytics tools to understand how visitors use the site so we can improve it. You can usually control cookies through your browser settings; disabling them may affect how the site works.</p><h3>How we share information</h3><p>We share information only with service providers who help us operate the practice (for example, our website host and scheduling platform), when required by law or to respond to a lawful request, or to protect the safety of any person. We never sell your data.</p><h3>How we protect your information</h3><p>We use reasonable administrative, technical, and physical safeguards to protect the information in our care. No method of internet transmission is completely secure, so please avoid sending sensitive health details through the website's contact form or by unencrypted email.</p><h3>Your choices and rights</h3><p>You may ask us to access, correct, or delete the personal information you have provided through the website, and you may opt out of non-essential communications at any time. Virginia residents may have additional rights under the Virginia Consumer Data Protection Act. To make a request, contact us using the details below.</p><h3>Third-party links</h3><p>Our website may link to other sites (such as Psychology Today or professional directories). We are not responsible for the privacy practices of those sites; please review their policies.</p><h3>Children's privacy</h3><p>Our website is intended for adults and is not directed to children under 13. We do not knowingly collect personal information from children through the site.</p><h3>Changes to this policy</h3><p>We may update this policy from time to time. The "last updated" date above reflects the most recent version.</p><h3>Contact us</h3><p>Questions about this policy? Call (571) 582-8086 or reach out through the contact form on our website. Jones Psychotherapy — offices in Arlington and McLean, Virginia.</p></div></div></section><section className="band finalcta"> <div className="wrap"><h2>Questions about any of this?</h2><p>Reach out anytime — or book a free 15-minute consultation to get started.</p> <Link to="/book" className="btn lg">Book a free 15-minute consultation</Link> <p style={{"marginTop": "22px", "fontSize": "15px", "color": "#d8c2af"}}>Prefer to talk first? Call <b style={{"color": "#f4e0cc"}}>(571) 582-8086</b> — I'll get back to you within one business day.</p></div></section>
    </SiteLayout>
  );
}
