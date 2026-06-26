import { partners } from '../data/partners';
import './PartnersStrip.css';

export default function PartnersStrip() {
  const doubled = [...partners, ...partners];

  return (
    <section className="partners-strip">
      <p className="eyebrow partners-strip__label container">In the room with</p>
      <div className="partners-strip__track-wrap">
        <div className="partners-strip__track">
          {doubled.map((p, i) => (
            <span className="partners-strip__item" key={i}>{p.name}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
