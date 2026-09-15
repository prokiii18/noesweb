import { team } from '../data';
import Reveal from './Reveal';

export default function Team() {
  return (
    <section className="section team" id="team">
      <Reveal className="section-heading"><div className="section-label">05 / Naši lidé</div><div><h2>Naši srdcaři<br />v první linii.</h2><p>Za kampaněmi stojí lidi. A u NOE'S jsou vidět.</p></div></Reveal>
      <div className="team-grid">{team.map((person) => <Reveal as="article" className="person" key={person.name}><div className="portrait"><img src={person.image} alt={`${person.name}, ${person.role}`} loading="lazy" /></div><h3>{person.name}</h3><p>{person.role}</p></Reveal>)}</div>
    </section>
  );
}
