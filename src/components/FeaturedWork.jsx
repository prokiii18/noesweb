import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '../hooks';
import { ArrowUpRight } from './Icons';

export default function FeaturedWork() {
  const sectionRef = useRef(null);
  const reducedMotion = useReducedMotion();
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (reducedMotion) {
      setOffset(0);
      return undefined;
    }
    let raf = 0;
    const update = () => {
      raf = 0;
      const node = sectionRef.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const p = Math.max(-1, Math.min(1, (window.innerHeight / 2 - rect.top - rect.height / 2) / window.innerHeight));
      setOffset(p * (window.innerWidth < 700 ? 12 : 35));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [reducedMotion]);

  return (
    <section id="work" aria-label="Ukázka realizace">
      <a className="feature-link" href="#projects" aria-label="Přejít na vybrané realizace">
        <div className="feature" ref={sectionRef}>
          <img src="https://static.wixstatic.com/media/9df8c5_40ddeb4953f34ea0a5423af168edc8fb~mv2.jpg" alt="Detail tištěné realizace L’Oréal s fotografií krajiny a řeky" style={{ transform: `translateY(${offset}px)` }} />
          <div className="feature-top"><span>Vybraná práce</span><span>NOE’S / Kreativa & produkce</span></div>
          <div className="feature-content"><div><h2>Od myšlenky<br />k poslednímu detailu.</h2><p>Koncept. Obsah. Provedení.</p></div><span className="feature-arrow" aria-hidden="true"><ArrowUpRight size={24} /></span></div>
        </div>
      </a>
      <div className="feature-caption"><span>Strategie se pozná podle realizace.</span><span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>Prohlédnout portfolio <ArrowUpRight size={12} /></span></div>
    </section>
  );
}
