import { Link } from 'react-router-dom';
import './NexTech.css';

const PROGRAMS = [
  {
    label: 'Hackathon',
    title: 'A weekend, a room, and a problem worth solving.',
    body: 'Run twice a year, open to anyone building — artists included. No pitch decks required, just working software by Sunday.',
    image: 'images/community/tech.jpeg',
  },
  {
    label: 'Reading list',
    title: 'Short pieces on AI, tooling, and the work itself.',
    body: 'Occasional articles from the NexTech room — what people are building, what broke, what they learned. Not press releases.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1100&auto=format&fit=crop',
  },
];

// Replace with the real WhatsApp community invite link before going live.
const NEXTECH_WHATSAPP_LINK = 'https://chat.whatsapp.com/REPLACE_WITH_NEXTECH_COMMUNITY_LINK';

export default function NexTech() {
  return (
    <div className="nextech">
      <div className="nextech-hero container">
        <p className="eyebrow">NexTech</p>
        <h1>A quiet room for builders.</h1>
        <p className="nextech-hero__lede">
          NexTech is the tech society side of Nexus — developers, IT folk, and
          anyone curious about building, trading notes and helping each other
          out. Strategic partners, including Zinari Technologies, help make
          some of it possible. It isn't the loudest part of what we do, and it
          isn't meant to be.
        </p>
        <a
          href={NEXTECH_WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="pill-btn solid"
        >
          Join the WhatsApp community <span className="arrow">→</span>
        </a>
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
          New programs and write-ups get added here as they happen. Hackathons,
          reading-list articles, and occasional collaborations run with the
          help of strategic partners — Zinari Technologies among them. If
          you're building something and want a quiet room to do it in, get in
          touch through Curations, or just say hello in the group.
        </p>
        <Link to="/curations" className="pill-btn">
          Get in touch <span className="arrow">→</span>
        </Link>
      </div>
    </div>
  );
}