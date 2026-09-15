import { brands } from '../data';

function BrandGroup({ duplicate = false }) {
  return (
    <div className="brand-marquee-group" aria-hidden={duplicate ? 'true' : undefined}>
      {brands.map((brand) => (
        <img
          key={`${duplicate ? 'duplicate-' : ''}${brand.name}`}
          className={`brand-logo brand-logo--${brand.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-')}`}
          src={brand.src}
          alt={duplicate ? '' : brand.name}
          loading="lazy"
        />
      ))}
    </div>
  );
}

export default function BrandStrip() {
  return (
    <section className="clients brand-strip" aria-label="Vybrané značky">
      <p>Vybrané značky z našeho portfolia</p>
      <div className="brand-marquee" aria-label="Loga vybraných značek">
        <div className="brand-marquee-track">
          <BrandGroup />
          <BrandGroup duplicate />
        </div>
      </div>
    </section>
  );
}
