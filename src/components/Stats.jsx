import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '../hooks';
import Reveal from './Reveal';

const stats = [
  { target: 1200, decimals: 0, suffix: '+', label: 'vypitých káv měsíčně' },
  { target: 7, decimals: 0, suffix: '+ let', label: 'průměrná výdrž zaměstnance' },
  { target: 75.95, decimals: 2, suffix: '', label: 'váhový průměr zaměstnanců' },
];

function Stat({ target, decimals, suffix, label }) {
  const ref = useRef(null);
  const reducedMotion = useReducedMotion();
  const [value, setValue] = useState(target);

  useEffect(() => {
    const node = ref.current;
    if (!node || reducedMotion || !('IntersectionObserver' in window)) {
      setValue(target);
      return undefined;
    }
    let raf = 0;
    setValue(0);
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const duration = 1400;
      const tick = (now) => {
        const progress = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(target * eased);
        if (progress < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, { threshold: 0.65 });
    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [decimals, reducedMotion, target]);

  const formatted = value.toLocaleString('cs-CZ', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
  return <div className="stat" ref={ref}><div className="value">{formatted}{suffix}</div><p>{label}</p></div>;
}

export default function Stats() {
  return (
    <section className="section numbers" id="numbers">
      <Reveal className="section-heading"><div className="section-label">04 / Život v NOE’S</div><div><h2>Trochu čísel.<br />Po našem.</h2><p>Čísla z NOE'S, která o atmosféře v týmu řeknou víc než další odstavec korporátního textu.</p></div></Reveal>
      <div className="stats-grid">{stats.map((stat) => <Stat key={stat.label} {...stat} />)}</div>
    </section>
  );
}
