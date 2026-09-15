import { useState } from 'react';
import { services } from '../data';

export default function Services() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section className="section services" id="services">
      <div className="service-layout">
        <div className="service-intro"><div className="section-label">03 / Naše expertíza</div><h2>Od nápadu<br />až do terénu.</h2><p>Strategii nevěšíme na zeď. Dotahujeme ji až do momentu, kdy ji potká zákazník.</p><a className="text-link" href="#contact">Proberme váš projekt ↗</a></div>
        <div className="service-list">
          {services.map((service, index) => {
            const open = openIndex === index;
            return (
              <article className={open ? 'service is-open' : 'service'} key={service.title}>
                <button className="service-summary" type="button" aria-expanded={open} aria-controls={`service-panel-${index}`} onClick={() => setOpenIndex(open ? -1 : index)}><span className="service-number">{String(index + 1).padStart(2, '0')}</span><span className="service-heading"><span className="service-title">{service.title}</span><span className="service-description">{service.description}</span></span><span className="service-toggle" aria-hidden="true">+</span></button>
                <div id={`service-panel-${index}`} className="service-photo-wrap" hidden={!open}><div className="service-photo"><img src={service.image} alt={`${service.title} — ukázka práce NOE’S`} loading="lazy" /></div></div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
