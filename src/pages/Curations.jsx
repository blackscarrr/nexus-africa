import JoinPanel from '../components/JoinPanel';
import './Curations.css';

const STEPS = [
  {
    title: 'You reach out',
    body: 'Tell us what you\'re working on — a body of work, a show idea, a tech program. A few lines is enough to start.',
  },
  {
    title: 'We talk it through',
    body: 'A short call or studio visit to understand the work, the timing, and what kind of room it needs.',
  },
  {
    title: 'We shape the show',
    body: 'Space, pairing, and format get decided together — Nexus rarely does a show the same way twice.',
  },
  {
    title: 'It opens',
    body: "Install, open, and document. Most curated shows run two to four weeks, with an opening night for the community.",
  },
];

export default function Curations() {
  return (
    <div className="curations">
      <div className="curations-hero container">
        <p className="eyebrow">Curations</p>
        <h1>How a show comes together.</h1>
        <p>
          Curations is the process behind every exhibition, drop, and program
          at Nexus — from a first message to opening night.
        </p>
      </div>

      <div className="curations-steps container">
        {STEPS.map((step, i) => (
          <div className="curations-step" key={step.title}>
            <span className="curations-step__index">{String(i + 1).padStart(2, '0')}</span>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </div>
        ))}
      </div>

      <JoinPanel
        eyebrow="Get in touch"
        heading="Have something worth showing?"
        body="Whether it's a finished body of work or just an idea you haven't said out loud yet, this is where it starts."
        image="https://images.unsplash.com/photo-1531913764164-f85c52e6e654?q=80&w=1200&auto=format&fit=crop"
        actionLabel="Contact us"
        inputPlaceholder="Your email"
        accent="amber"
      />
    </div>
  );
}
