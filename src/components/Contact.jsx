import Reveal from './Reveal';
import { ArrowUpRight } from './Icons';

export default function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <Reveal className="contact-opening">
        <div className="section-label">06 / Začíná to rozhovorem</div>

        <div className="contact-copy">
          <h2>
            Stav se
            <br />
            <span>na kafe.</span>
          </h2>
          <p>
            Mezi vodami 17, Praha 12 — Modřany.
            <br />
            Nech nám zprávu, nebo jen pozdrav.
          </p>
        </div>

        <a className="contact-arrow" href="mailto:recepce@noes.cz" aria-label="Napsat NOE’S e-mail">
          <ArrowUpRight size={72} />
        </a>
      </Reveal>

      <div className="contact-details">
        <div>
          <h3>Praha Modřany.</h3>
          <address>
            NOE'S, s.r.o.
            <br />
            Mezi vodami 17
            <br />
            143 00 Praha 12 — Modřany
          </address>
          <a className="mail" href="mailto:recepce@noes.cz" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            recepce@noes.cz <ArrowUpRight size={16} />
          </a>
          <a className="phone" href="tel:+420777787409">777 787 409</a>
        </div>

        <div className="map">
          <iframe
            loading="lazy"
            src="https://www.openstreetmap.org/export/embed.html?bbox=14.388%2C50.003%2C14.416%2C50.016&layer=mapnik&marker=50.0091%2C14.4025"
            title="Mapa sídla NOE’S v Praze Modřanech"
          />
          <a
            href="https://www.openstreetmap.org/?mlat=50.0091&mlon=14.4025#map=16/50.0091/14.4025"
            target="_blank"
            rel="noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}
          >
            NOE'S · Mezi vodami 17 <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}
