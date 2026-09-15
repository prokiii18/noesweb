import { brands } from '../data';

export default function BrandStrip() {
  return (
    <section className="clients" aria-label="Vybrané značky">
      <p>Vybrané značky z našeho portfolia</p>
      <div className="logos">
        {brands.map((brand) => <img key={brand.name} src={brand.src} alt={brand.name} loading="lazy" />)}
      </div>
    </section>
  );
}
