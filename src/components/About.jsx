import { ArrowUpRight } from './Icons';

export default function About() {
  return (
    <section className="about" id="expertise">
      <div className="about-lead"><div className="section-label">01 / Jsme NOE’S</div><h2>Jedna agentura.<br /><span>Od nápadu po realizaci.</span></h2></div>
      <div className="about-body"><p>Strategie, nápady a realizace pod jednou střechou. Propojujeme kreativní myšlení s prací, která je vidět v reálném světě.</p><a className="about-more" href="#services">Poznejte naši expertízu <span aria-hidden="true"><ArrowUpRight size={14} /></span></a></div>
    </section>
  );
}
