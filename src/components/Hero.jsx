import { ArrowUpRight } from './Icons';
import Reveal from './Reveal';

export default function Hero() {
  return (
    <section className="intro" aria-labelledby="hero-title">
      <Reveal className="eyebrow">Kreativní myšlení. Skutečný dopad.</Reveal>
      <Reveal className="headline-row">
        <h1 id="hero-title"><span>Myšlenky s vizí.</span><span className="secondary-line">Značky s vlivem.</span></h1>
        <div className="description">
          <p>Propojujeme strategii, kreativitu a realizaci. Pomáháme značkám dostat se blíž k lidem.</p>
          <a className="cta" href="#projects">Poznejte naši práci <span aria-hidden="true"><ArrowUpRight size={17} /></span></a>
        </div>
      </Reveal>
    </section>
  );
}
