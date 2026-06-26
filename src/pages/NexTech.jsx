import { Link } from 'react-router-dom';
import './NexTech.css';

const PROGRAMS = [
  {
    label: 'Hackathon',
    title: 'A weekend, a room, and a problem worth solving.',
    body: "Run twice a year with Zinari Technologies, open to anyone building — artists included. No pitch decks required, just working software by Sunday.",
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1100&auto=format&fit=crop',
  },
  {
    label: 'Reading list',
    title: 'Short pieces on AI, tooling, and the work itself.',
    body: 'Occasional articles from the NexTech room — what people are building, what broke, what they learned. Not press releases.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1100&auto=format&fit=crop',
  },
];

export default function NexTech() {
  return (
    <div className="nextech">
      <div className="nextech-hero container">
        <p className="eyebrow">NexTech</p>
        <h1>A quiet room for builders.</h1>
        <p className="nextech-hero__lede">
          NexTech is where the technical side of Nexus lives — run alongside our
          partner, Zinari Technologies. It isn't the loudest part of what we do,
          and it isn't meant to be.
        </p>
      </div>

      <div className="nextech-partner container">
        <span className="nextech-partner__eyebrow">In partnership with</span>
        <span className="nextech-partner__name">Zinari Technologies</span>
      </div>

      <div className="nextech-programs container">
        {PROGRAMS.map((p) => (
          <div className="nextech-program" key={p.label}>
            <div className="nextech-program__image" style={{ backgroundImage: `url(${p.image})` }} />
            <div className="nextech-program__text">
              <p className="eyebrow">{p.label}</p>
              <h2>{p.title}</h2>
              <p>{p.body}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="nextech-more container">
        <p className="eyebrow">More from NexTech</p>
        <p className="nextech-more__body">
          New programs and write-ups get added here as they happen. If you're
          building something and want a quiet room to do it in, get in touch
          through Curations.
        </p>
        <Link to="/curations" className="pill-btn">
          Get in touch <span className="arrow">→</span>
        </Link>
      </div>
    </div>
  );
}
