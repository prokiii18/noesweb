import { ArrowUpRight } from './Icons';

export default function Footer() {
  return (
    <footer><a className="footer-mark" href="#top">NOE’S</a><span>NOE’S, s.r.o. · Redesign concept / 2026</span><a href="https://noes.cz" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>Obsah a veřejné assets: noes.cz <ArrowUpRight size={12} /></a><a href="#top" aria-label="Zpět nahoru">Nahoru ↑</a></footer>
  );
}
