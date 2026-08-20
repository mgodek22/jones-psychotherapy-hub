import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
          {
                "title": "Mental Health Resources & Crisis Lines | Jones Psychotherapy"
          },
          {
                "name": "description",
                "content": "Trusted national mental-health organizations, 24/7 crisis lines (988 and more), and how to reach Jones Psychotherapy in Arlington & McLean, VA."
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
                "content": "Mental Health Resources & Crisis Lines | Jones Psychotherapy"
          },
          {
                "name": "twitter:description",
                "content": "Trusted national mental-health organizations, 24/7 crisis lines (988 and more), and how to reach Jones Psychotherapy in Arlington & McLean, VA."
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
                "content": "Mental Health Resources & Crisis Lines | Jones Psychotherapy"
          },
          {
                "property": "og:description",
                "content": "Trusted national mental-health organizations, 24/7 crisis lines (988 and more), and how to reach Jones Psychotherapy in Arlington & McLean, VA."
          },
          {
                "property": "og:url",
                "content": "https://www.jonespsychotherapy.com/resources"
          },
          {
                "property": "og:image",
                "content": "https://www.jonespsychotherapy.com/og-image.jpg"
          }
    ],
    links: [
          {
                "rel": "canonical",
                "href": "https://www.jonespsychotherapy.com/resources"
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
                "@type": "WebPage",
                "name": "Mental Health Resources",
                "url": "https://www.jonespsychotherapy.com/resources",
                "isPartOf": {
                  "@id": "https://www.jonespsychotherapy.com/#practice"
                }
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
                    "name": "Resources",
                    "item": "https://www.jonespsychotherapy.com/resources"
                  }
                ]
              }
            ]
          },
        ),
      },
    ],
  }),
  component: ResourcesPage,
});

function ResourcesPage() {
  return (
    <SiteLayout crumbs={[
      {
        "label": "Home",
        "to": "/"
      },
      {
        "label": "Resources"
      }
    ]}>
      <section className="arthero"><div className="wrap" style={{"maxWidth": "820px"}}><div className="artcat">Help &amp; Support</div><h1>Mental Health Resources</h1><p className="artdek">Trusted national organizations and crisis lines — plus how to reach us. If you're in immediate danger, start at the top.</p></div></section><section className="band"><div className="wrap" style={{"maxWidth": "820px"}}><div className="crisisbox"><h3>In a crisis? Get help now (24/7)</h3><div className="rc-contact"><b>988 Suicide &amp; Crisis Lifeline</b> — call or text <b>988</b>· chat at 988lifeline.org. Free, confidential, 24/7.</div><div className="rc-contact"><b>Crisis Text Line</b> — text <b>HOME</b> to <b>741741</b>.</div><div className="rc-contact"><b>Veterans Crisis Line</b> — dial <b>988 then press 1</b>, or text <b>838255</b>.</div><div className="rc-contact"><b>National Domestic Violence Hotline</b> — <b>1-800-799-7233</b> (text START to 88788).</div><div className="rc-contact"><b>Emergency</b> — call <b>911</b> if you or someone else is in immediate danger.</div></div><div className="resgroup">National organizations</div><div className="rescard"><div className="rc-head"><div className="rc-badge" style={{"background": "#00778b", "color": "#fff", "fontSize": "11px"}}><span aria-hidden="true">SAMHSA</span><img className="rc-logo" src="assets/logos/samhsa.png" alt="SAMHSA National Helpline logo" loading="lazy" onError={(e) => e.currentTarget.remove()} /></div><div className="rc-body"><h4>SAMHSA National Helpline</h4><div className="rc-contact"><b>Phone:</b> 1-800-662-HELP (4357) — 24/7, free, confidential, English &amp; Spanish</div><div className="rc-contact"><b>Website:</b> <a href="https://www.samhsa.gov/find-help/helplines/national-helpline" target="_blank" rel="noopener">www.samhsa.gov/find-help/helplines/national-helpline</a></div><div className="rc-why">The federal treatment referral and information line for mental health and substance use — a great starting point if you don't know where to turn.</div></div></div></div><div className="rescard"><div className="rc-head"><div className="rc-badge" style={{"background": "#2b6cb0", "color": "#fff", "fontSize": "14px"}}><span aria-hidden="true">NAMI</span><img className="rc-logo" src="assets/logos/nami.png" alt="NAMI (National Alliance on Mental Illness) logo" loading="lazy" onError={(e) => e.currentTarget.remove()} /></div><div className="rc-body"><h4>NAMI (National Alliance on Mental Illness)</h4><div className="rc-contact"><b>HelpLine:</b> 1-800-950-6264 (text "NAMI" to 62640)· helpline@nami.org</div><div className="rc-contact"><b>Hours:</b> Mon–Fri, 10am–10pm ET</div><div className="rc-contact"><b>Based in:</b> Arlington, VA (with a NAMI Northern Virginia chapter)</div><div className="rc-contact"><b>Website:</b> <a href="https://www.nami.org/nami-helpline/" target="_blank" rel="noopener">www.nami.org/nami-helpline/</a></div><div className="rc-why">Free education, peer support groups, and referrals for people and families affected by mental illness — including local Northern Virginia support.</div></div></div></div><div className="rescard"><div className="rc-head"><div className="rc-badge" style={{"background": "#1f6f5c", "color": "#fff", "fontSize": "11px"}}><span aria-hidden="true">EMDRIA</span><img className="rc-logo" src="assets/logos/emdria.png" alt="EMDR International Association (EMDRIA) logo" loading="lazy" onError={(e) => e.currentTarget.remove()} /></div><div className="rc-body"><h4>EMDR International Association (EMDRIA)</h4><div className="rc-contact"><b>Phone:</b> 512-451-5200· info@emdria.org</div><div className="rc-contact"><b>Address:</b> 7000 N MoPac Expy, Ste 200, Austin, TX 78731</div><div className="rc-contact"><b>Website:</b> <a href="https://www.emdria.org/" target="_blank" rel="noopener">www.emdria.org/</a></div><div className="rc-why">The credentialing body for EMDR. Use their "Find an EMDR Therapist" directory and learn what EMDR is.</div></div></div></div><div className="rescard"><div className="rc-head"><div className="rc-badge" style={{"background": "#6d5aa6", "color": "#fff", "fontSize": "17px"}}><span aria-hidden="true">IFS</span><img className="rc-logo" src="assets/logos/ifs.png" alt="IFS Institute (Internal Family Systems) logo" loading="lazy" onError={(e) => e.currentTarget.remove()} /></div><div className="rc-body"><h4>IFS Institute (Internal Family Systems)</h4><div className="rc-contact"><b>Based in:</b> United States (online resources &amp; directory)</div><div className="rc-contact"><b>Website:</b> <a href="https://ifs-institute.com/" target="_blank" rel="noopener">ifs-institute.com/</a></div><div className="rc-why">The home of Internal Family Systems therapy — clear explanations of the model and a directory of trained practitioners.</div></div></div></div><div className="rescard"><div className="rc-head"><div className="rc-badge" style={{"background": "#c5391e", "color": "#fff", "fontSize": "14px"}}><span aria-hidden="true">AGPA</span><img className="rc-logo" src="assets/logos/agpa.png" alt="American Group Psychotherapy Association (AGPA) logo" loading="lazy" onError={(e) => e.currentTarget.remove()} /></div><div className="rc-body"><h4>American Group Psychotherapy Association (AGPA)</h4><div className="rc-contact"><b>Based in:</b> New York, NY</div><div className="rc-contact"><b>Website:</b> <a href="https://agpa.org/" target="_blank" rel="noopener">agpa.org/</a></div><div className="rc-why">The professional home for group therapy. Use "Find a Group Therapist" to locate a Certified Group Psychotherapist (CGP) like Emily.</div></div></div></div><div className="rescard"><div className="rc-head"><div className="rc-badge" style={{"background": "#2f7d7d", "color": "#fff", "fontSize": "14px"}}><span aria-hidden="true">ADAA</span><img className="rc-logo" src="assets/logos/adaa.png" alt="Anxiety &amp; Depression Association of America (ADAA) logo" loading="lazy" onError={(e) => e.currentTarget.remove()} /></div><div className="rc-body"><h4>Anxiety &amp; Depression Association of America (ADAA)</h4><div className="rc-contact"><b>Based in:</b> Silver Spring, MD</div><div className="rc-contact"><b>Website:</b> <a href="https://adaa.org/" target="_blank" rel="noopener">adaa.org/</a></div><div className="rc-why">Trusted, plain-language education on anxiety and depression, plus a find-a-therapist directory.</div></div></div></div><div className="rescard"><div className="rc-head"><div className="rc-badge" style={{"background": "#c0567e", "color": "#fff", "fontSize": "17px"}}><span aria-hidden="true">PSI</span><img className="rc-logo" src="assets/logos/psi.png" alt="Postpartum Support International (PSI) logo" loading="lazy" onError={(e) => e.currentTarget.remove()} /></div><div className="rc-body"><h4>Postpartum Support International (PSI)</h4><div className="rc-contact"><b>Helpline:</b> 1-800-944-4773 (call or text)· text español 971-203-7773</div><div className="rc-contact"><b>Website:</b> <a href="https://www.postpartum.net/" target="_blank" rel="noopener">www.postpartum.net/</a></div><div className="rc-why">Support and provider referrals for pregnancy- and postpartum-related mental health.</div></div></div></div><div className="rescard"><div className="rc-head"><div className="rc-badge" style={{"background": "#1f8a70", "color": "#fff", "fontSize": "17px"}}><span aria-hidden="true">MHA</span><img className="rc-logo" src="assets/logos/mha.png" alt="Mental Health America (MHA) logo" loading="lazy" onError={(e) => e.currentTarget.remove()} /></div><div className="rc-body"><h4>Mental Health America (MHA)</h4><div className="rc-contact"><b>Based in:</b> Alexandria, VA</div><div className="rc-contact"><b>Website:</b> <a href="https://mhanational.org/" target="_blank" rel="noopener">mhanational.org/</a></div><div className="rc-why">Free, confidential online mental-health screening tools and clear educational resources.</div></div></div></div><div className="rescard"><div className="rc-head"><div className="rc-badge" style={{"background": "#0b3d70", "color": "#fff", "fontSize": "17px"}}><span aria-hidden="true">APA</span><img className="rc-logo" src="assets/logos/apa.png" alt="American Psychological Association (APA) logo" loading="lazy" onError={(e) => e.currentTarget.remove()} /></div><div className="rc-body"><h4>American Psychological Association (APA)</h4><div className="rc-contact"><b>Based in:</b> </div><div className="rc-contact"><b>Website:</b> <a href="https://www.apa.org/" target="_blank" rel="noopener">www.apa.org/</a></div><div className="rc-why">Public-facing psychology education and a psychologist locator.</div></div></div></div><div className="rescard"><div className="rc-head"><div className="rc-badge" style={{"background": "#4a8a6f", "color": "#fff", "fontSize": "17px"}}><span aria-hidden="true">PT</span><img className="rc-logo" src="assets/logos/psychology-today.png" alt="Psychology Today — Find a Therapist logo" loading="lazy" onError={(e) => e.currentTarget.remove()} /></div><div className="rc-body"><h4>Psychology Today — Find a Therapist</h4><div className="rc-contact"><b>Website:</b> <a href="https://www.psychologytoday.com/us/therapists" target="_blank" rel="noopener">www.psychologytoday.com/us/therapists</a></div><div className="rc-why">The largest searchable directory of therapists; filter by location, specialty (EMDR, couples), and insurance.</div></div></div></div><div className="resgroup">Our practice</div><div className="rescard"><div className="rc-head"><div className="rc-badge" style={{"background": "#863527", "color": "#fff", "fontSize": "17px"}}><span aria-hidden="true">JP</span><img className="rc-logo" src="assets/logos/jones.png" alt="Jones Psychotherapy — Emily M. Jones, LCSW, CGP logo" loading="lazy" onError={(e) => e.currentTarget.remove()} /></div><div className="rc-body"><h4>Jones Psychotherapy — Emily M. Jones, LCSW, CGP</h4><div className="rc-contact"><b>Phone:</b> (571) 582-8086</div><div className="rc-contact"><b>Offices:</b> 1655 Fort Myer Drive, Ste 960, Arlington, VA 22209· 1497 Chain Bridge Road, McLean, VA 22101</div><div className="rc-contact"><b>Telehealth:</b> Virginia &amp; Utah</div><div className="rc-contact"><b>Serving:</b> The greater Northern Virginia from offices in Arlington &amp; McLean, VA</div><div className="rc-contact"><b>Services:</b> Individual, couples &amp; group therapy· EMDR, IFS, trauma, anxiety, professional women</div><div className="rc-contact"><b>Website:</b> <a href="https://www.jonespsychotherapy.com" target="_blank" rel="noopener">www.jonespsychotherapy.com</a></div><div className="rc-why">Compassionate, depth-oriented therapy for adults and couples. Not in crisis but ready to talk? Book a free 15-minute consultation.</div></div></div></div><div className="resgroup">Emily's credentials &amp; licenses</div><div className="rescard" style={{"padding": "0", "border": "none", "boxShadow": "none", "background": "none"}}><div className="licblock"><h3 style={{"marginTop": "0"}}>Licenses &amp; credentials</h3><p style={{"fontSize": "14.5px", "color": "var(--ink2)", "margin": "0 0 10px"}}>Licensed and in good standing — you can verify any license directly with the state board.</p><div className="licrow"><div><div className="licname">LCSW — Virginia</div><div className="licnum">License #0904008361· Active· licensed since 2013</div></div><a className="licverify" href="https://dhp.virginiainteractive.org/Lookup/Detail/0904008361" target="_blank" rel="noopener">Verify &rarr;</a></div><div className="licrow"><div><div className="licname">LCSW — Utah</div><div className="licnum">License #13521061-3501· Active (by endorsement)· through Sep 2026</div></div><a className="licverify" href="https://secure.utah.gov/llv/search/index.html" target="_blank" rel="noopener">Verify &rarr;</a></div><div className="licrow"><div><div className="licname">CGP — Certified Group Psychotherapist</div><div className="licnum">International Board for Certification of Group Psychotherapists (IBCGP)</div></div><a className="licverify" href="https://members.agpa.org/certifications/cgp-directory" target="_blank" rel="noopener">AGPA directory &rarr;</a></div></div></div><p style={{"fontSize": "13px", "color": "var(--muted)", "marginTop": "14px"}}>This page is for information and support and isn't a substitute for professional care or emergency services. Phone numbers and details were current at publication; please verify directly with each organization.</p></div></section>
    </SiteLayout>
  );
}
