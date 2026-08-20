import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
          {
                "title": "FAQ | Therapy in Arlington & McLean, VA | Emily M. Jones, LCSW"
          },
          {
                "name": "description",
                "content": "Answers to common questions about cost, insurance, EMDR, telehealth, and getting started with therapy in Northern Virginia and the Northern Virginia."
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
                "content": "FAQ | Therapy in Arlington & McLean, VA | Emily M. Jones, LCSW"
          },
          {
                "name": "twitter:description",
                "content": "Answers to common questions about cost, insurance, EMDR, telehealth, and getting started with therapy in Northern Virginia and the Northern Virginia."
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
                "content": "FAQ | Therapy in Arlington & McLean, VA | Emily M. Jones, LCSW"
          },
          {
                "property": "og:description",
                "content": "Answers to common questions about cost, insurance, EMDR, telehealth, and getting started with therapy in Northern Virginia and the Northern Virginia."
          },
          {
                "property": "og:url",
                "content": "https://www.jonespsychotherapy.com/faq"
          },
          {
                "property": "og:image",
                "content": "https://www.jonespsychotherapy.com/og-image.jpg"
          }
    ],
    links: [
          {
                "rel": "canonical",
                "href": "https://www.jonespsychotherapy.com/faq"
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
                    "name": "FAQ",
                    "item": "https://www.jonespsychotherapy.com/faq"
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How much does therapy cost in Arlington, VA?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Individual sessions are $250 for 50 minutes and couples sessions are $300. I'm an out-of-network provider and give you a superbill each month to submit for possible insurance reimbursement. Your first 15-minute consultation is always free."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Are you taking new clients?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes — I currently have limited openings for individual and couples clients in Arlington, McLean, and by video across Virginia and Utah. Book a free consultation to check availability."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you offer in-person or virtual sessions?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Both. I see clients from across the Northern Virginia in person in Arlington and McLean, Virginia, and offer secure telehealth to clients located in Virginia and Utah."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What is EMDR, and can it help with past trauma?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "EMDR is a well-researched therapy that helps your brain reprocess painful memories so they lose their grip on the present. It's especially helpful for developmental and relational trauma, which is a core focus of my practice."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How often will we meet, and for how long?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "We'll meet weekly for 50-minute sessions. How long therapy takes is different for everyone — we'll revisit your goals regularly so you always know how things are progressing."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you take insurance?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "I'm an out-of-network provider, which means payment is due at the time of service. I provide a monthly superbill you can submit to your insurance for possible out-of-network reimbursement."
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
  component: FaqPage,
});

function FaqPage() {
  return (
    <SiteLayout crumbs={[
      {
        "label": "Home",
        "to": "/"
      },
      {
        "label": "FAQ"
      }
    ]}>
      <section className="hero solo"><div className="wrap"><div> <div className="eyebrow">Frequently Asked Questions</div><h1>Answers, before you reach out.</h1><p className="sub">Written the way clients actually ask them.</p> <div className="cta-row"><Link to="/book" className="btn lg">Book a free 15-minute consultation</Link></div></div></div></section>
      <section className="band"><div className="wrap"><div className="faqlist"><details open><summary>How much does therapy cost in Arlington, VA?</summary><p>Individual sessions are $250 for 50 minutes and couples sessions are $300. I'm an out-of-network provider and give you a superbill each month to submit for possible insurance reimbursement. Your first 15-minute consultation is always free.</p></details><details><summary>Are you taking new clients?</summary><p>Yes — I currently have limited openings for individual and couples clients in Arlington, McLean, and by video across Virginia and Utah. Book a free consultation to check availability.</p></details><details><summary>Do you offer in-person or virtual sessions?</summary><p>Both. I see clients from across the Northern Virginia in person in Arlington and McLean, Virginia, and offer secure telehealth to clients located in Virginia and Utah.</p></details><details><summary>What is EMDR, and can it help with past trauma?</summary><p>EMDR is a well-researched therapy that helps your brain reprocess painful memories so they lose their grip on the present. It's especially helpful for developmental and relational trauma, which is a core focus of my practice.</p></details><details><summary>How often will we meet, and for how long?</summary><p>We'll meet weekly for 50-minute sessions. How long therapy takes is different for everyone — we'll revisit your goals regularly so you always know how things are progressing.</p></details><details><summary>Do you take insurance?</summary><p>I'm an out-of-network provider, which means payment is due at the time of service. I provide a monthly superbill you can submit to your insurance for possible out-of-network reimbursement.</p></details></div></div></section>
      <section className="band finalcta"> <div className="wrap"><h2>Still have a question?</h2><p>The easiest way to get an answer is a quick, free consultation. Let's talk.</p> <Link to="/book" className="btn lg">Book a free 15-minute consultation</Link> <p style={{"marginTop": "22px", "fontSize": "15px", "color": "#d8c2af"}}>Prefer to talk first? Call <b style={{"color": "#f4e0cc"}}>(571) 582-8086</b> — I'll get back to you within one business day.</p></div></section>
    </SiteLayout>
  );
}
