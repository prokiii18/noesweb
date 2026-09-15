import Reveal from './Reveal';
import { ArrowUpRight } from './Icons';

export default function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <Reveal className="contact-opening">
        <div className="section-label">06 / Kontakt</div>

        <div className="contact-copy">
          <p className="contact-kicker">Máte nápad? Pojďme ho probrat.</p>
          <h2>Pojďme se potkat.</h2>
          <p className="contact-lead">
            Stav se na kafe do Modřan, nebo nám rovnou napiš. Bez formulářů, bez zbytečností.
          </p>

          <div className="contact-actions">
            <a className="contact-primary" href="mailto:recepce@noes.cz">
              Napsat nám <ArrowUpRight size={16} />
            </a>
            <a className="contact-secondary" href="tel:+420777787409">
              777 787 409
            </a>
          </div>
        </div>
      </Reveal>

      <div className="contact-details">
        <div className="contact-card contact-address-card">
          <span className="contact-card-label">Kde nás najdete</span>
          <h3>Praha Modřany</h3>
          <address>
            NOE'S, s.r.o.<br />
            Mezi vodami 17<br />
            143 00 Praha 12 — Modřany
          </address>
          <a className="mail" href="mailto:recepce@noes.cz">
            recepce@noes.cz <ArrowUpRight size={15} />
          </a>
        </div>

        <div className="map contact-card">
          <iframe
            loading="lazy"
            src="https://www.openstreetmap.org/export/embed.html?bbox=14.388%2C50.003%2C14.416%2C50.016&layer=mapnik&marker=50.0091%2C14.4025"
            title="Mapa sídla NOE’S v Praze Modřanech"
          />
          <a
            className="map-link"
            href="https://www.openstreetmap.org/?mlat=50.0091&mlon=14.4025#map=16/50.0091/14.4025"
            target="_blank"
            rel="noreferrer"
          >
            Otevřít mapu <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}
