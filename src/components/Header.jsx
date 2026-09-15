import { useEffect, useState } from 'react';
import { ArrowUpRight } from './Icons';

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={open ? 'site-header is-open' : 'site-header'}>
      <div className="brand">
        <a className="wordmark" href="#top" aria-label="NOE’S úvod" onClick={close}>NOE’S</a>
        <span className="brand-caption">Strategie. Kreativa.<br />Realizace.</span>
      </div>
      <button className="menu-button" type="button" aria-controls="main-nav" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
        {open ? 'Zavřít −' : 'Menu +'}
      </button>
      <nav id="main-nav" aria-label="Hlavní navigace">
        <a href="#projects" onClick={close}>Realizace</a>
        <a href="#services" onClick={close}>Expertíza</a>
        <a href="#team" onClick={close}>O nás</a>
        <a className="nav-contact" href="#contact" onClick={close}>Pojďme spolupracovat <span aria-hidden="true"><ArrowUpRight size={15} /></span></a>
      </nav>
    </header>
  );
}
