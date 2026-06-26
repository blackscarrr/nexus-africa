import { nexusFacts } from '../data/nexusFacts';
import { useReveal } from '../hooks/useReveal';
import './FactsCascade.css';

function FactRow({ item, index }) {
  const ref = useReveal();
  const flip = index % 2 === 1;

  return (
    <div
      ref={ref}
      className={`fact-row reveal ${flip ? 'fact-row--flip' : ''}`}
    >
      <div className="fact-row__media">
        <div className="fact-row__semi" style={{ backgroundImage: `url(${item.image})` }} />
      </div>
      <div className={`fact-row__text fact-row__text--${item.color}`}>
        <span className="fact-row__index">{String(index + 1).padStart(2, '0')}</span>
        <p className="fact-row__fact">{item.fact}</p>
      </div>
    </div>
  );
}

export default function FactsCascade() {
  return (
    <section className="facts-cascade container">
      <div className="facts-cascade__head">
        <p className="eyebrow">Why Nexus exists</p>
        <h2>A few things worth knowing.</h2>
      </div>
      <div className="facts-cascade__rows">
        {nexusFacts.map((item, i) => (
          <FactRow item={item} index={i} key={i} />
        ))}
      </div>
    </section>
  );
}
