import { Link } from "@tanstack/react-router";

import { PHONE_HREF } from "./site-config";

export function SiteFooter() {
  return (
    <footer className="site">
      <div className="foot-cta"><div className="wrap">
        <div><h4>Ready when you are.</h4><p>A free, no-pressure 15-minute consultation is the easiest first step.</p></div>
        <Link to="/book" className="btn">Book a free consultation</Link>
      </div></div>
      <div className="wrap fmain"><div className="fgrid">
       <div className="fcol fbrand">
         <img className="flogo" src="/brand/jones-vase-icon.png" alt="" />
         <h5 style={{"marginBottom": "8px"}}>Jones Psychotherapy</h5>
         <p>Compassionate, depth-oriented therapy for adults and couples — serving Northern Virginia and the greater DC metro area.</p>
         <div className="social"><a href="https://www.facebook.com/jonespsychotherapy" target="_blank" rel="me noopener" aria-label="Facebook" title="Facebook"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M13 3h-2.5C8 3 7 4.5 7 6.5V9H5v3h2v9h3v-9h2.3l.7-3H10V6.8c0-.6.3-1 1.1-1H13V3z" /></svg></a><a href="https://www.instagram.com/jonespsychotherapy" target="_blank" rel="me noopener" aria-label="Instagram" title="Instagram"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M12 8.2A3.8 3.8 0 1012 15.8 3.8 3.8 0 0012 8.2zm0 6.3a2.5 2.5 0 110-5 2.5 2.5 0 010 5zm4-6.5a.9.9 0 11-1.8 0 .9.9 0 011.8 0zM12 5.7c1.9 0 2.1 0 2.9.05 1.9.09 2.8 1 2.9 2.9.04.8.05 1 .05 2.9s0 2.1-.05 2.9c-.09 1.9-1 2.8-2.9 2.9-.8.04-1 .05-2.9.05s-2.1 0-2.9-.05c-1.9-.09-2.8-1-2.9-2.9C6.1 14.1 6.1 13.9 6.1 12s0-2.1.05-2.9c.09-1.9 1-2.8 2.9-2.9C9.9 5.7 10.1 5.7 12 5.7zm0-1.3c-2 0-2.2 0-3 .05-2.6.12-4 1.5-4.1 4.1C4.9 9.3 4.9 9.5 4.9 12s0 2.7.05 3.5c.12 2.6 1.5 4 4.1 4.1.8.05 1 .05 3 .05s2.2 0 3-.05c2.6-.12 4-1.5 4.1-4.1.05-.8.05-1 .05-3.5s0-2.7-.05-3.5c-.12-2.6-1.5-4-4.1-4.1-.8-.05-1-.05-3-.05z" /></svg></a><a href="https://www.linkedin.com/in/emilyjoneslcsw" target="_blank" rel="me noopener" aria-label="LinkedIn" title="LinkedIn"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M6.9 8.5H4V20h2.9V8.5zM5.4 4.2a1.7 1.7 0 100 3.4 1.7 1.7 0 000-3.4zM20 20h-2.9v-5.6c0-1.3-.5-2.2-1.7-2.2-.9 0-1.4.6-1.7 1.2-.1.2-.1.5-.1.8V20H10.7s.04-9.4 0-10.4h2.9v1.5c.4-.6 1.1-1.5 2.6-1.5 1.9 0 3.3 1.2 3.3 3.9V20z" /></svg></a><a href="https://www.psychologytoday.com/us/therapists/emily-m-jones-arlington-va/224442" target="_blank" rel="me noopener" aria-label="Psychology Today" title="Psychology Today"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M7 4h5.5c2.8 0 4.5 1.7 4.5 4.3 0 2.7-1.9 4.4-4.8 4.4H10V20H7V4zm3 6.4h2c1.2 0 2-.7 2-1.9 0-1.2-.8-1.9-2-1.9h-2v3.8z" /></svg></a><a href="https://www.agpa.org/home/membership-community/find-a-group-therapist" target="_blank" rel="me noopener" aria-label="Certified Group Psychotherapist" title="Certified Group Psychotherapist"><svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M12 2l2.5 5 5.5.8-4 3.9.95 5.5L12 15.5 7.1 17.2 8 11.7l-4-3.9L9.5 7 12 2z" /></svg></a></div>
         <div className="flic">Emily M. Jones, LCSW, CGP<br />Licensed in Virginia & Utah · Certified Group Psychotherapist</div>
       </div>
       <div className="fcol"><h5>Offices & hours</h5>
         <div className="fnap"><Link to="/arlington"><b>Arlington, VA</b></Link>1655 Fort Myer Drive, Ste 960<br />Arlington, VA 22209
           <div className="fp"><Link to="/mclean"><b>McLean, VA</b></Link>1497 Chain Bridge Road<br />McLean, VA 22101</div></div>
         <a href={PHONE_HREF} style={{"fontWeight": "600", "color": "#e8dacd"}}>(571) 582-8086</a>
         <div className="fhours">By appointment · in-person & secure video<br />Telehealth across Virginia & Utah</div>
       </div>
       <div className="fcol"><h5>Therapy</h5>
         <Link to="/individual">Individual therapy</Link><Link to="/couples">Couples therapy</Link><Link to="/group">Group therapy</Link><Link to="/fees">Fees & insurance</Link><Link to="/about">About Emily</Link><Link to="/faq">FAQ</Link></div>
       <div className="fcol"><h5>Learn</h5>
         <Link to="/what-is-lcsw">What is an LCSW?</Link><Link to="/what-is-emdr">What is EMDR?</Link><Link to="/what-is-ifs">What is IFS?</Link><Link to="/what-is-group-therapy">What is group therapy?</Link></div>
       <div className="fcol"><h5>Resources</h5>
         <Link to="/blog">Blog</Link><Link to="/resources">Resources & crisis lines</Link><Link to="/guide">Free guide</Link><Link to="/book">Book a consultation</Link></div>
      </div>
      <div className="wrap"><div className="fbot">
        <span>© 2026 Jones Psychotherapy · Emily M. Jones, LCSW, CGP · Licensed in Virginia & Utah</span>
        <span className="flinks"><Link to="/privacy-policy">Privacy Policy</Link><Link to="/good-faith-estimate">Good Faith Estimate</Link><Link to="/no-surprises-act">No Surprises Act</Link></span>
        <div className="fcrisis">This website is not for emergencies and is not a crisis service. If you're in crisis or thinking about harming yourself, call or text <strong>988</strong> (Suicide & Crisis Lifeline) or call <strong>911</strong>.</div>
      </div></div></div></footer>
  );
}
