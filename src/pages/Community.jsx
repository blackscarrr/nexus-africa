import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';
import { activities } from '../data/activities';
import JoinPanel from '../components/JoinPanel';
import './Community.css';

function CommunityBlock({ activity, index }) {
  const ref = useReveal();
  const flip = index % 2 === 1;
  const stripImages = activity.gallery.slice(0, 3);

  return (
    <section ref={ref} className={`community-block reveal ${flip ? 'community-block--flip' : ''}`}>
      <div className="community-block__visual">
        <div className="community-block__image" style={{ backgroundImage: `url(${activity.heroImage})` }} />
        <div className="community-block__strip">
          {stripImages.map((src, i) => (
            <div key={i} className="community-block__strip-tile" style={{ backgroundImage: `url(${src})` }} />
          ))}
        </div>
      </div>
      <div className="community-block__text">
        <p className="eyebrow">{String(index + 1).padStart(2, '0')} — {activity.cadence}</p>
        <h2>{activity.title}</h2>
        <p>{activity.body}</p>
        <Link to={`/community/${activity.slug}`} className="pill-btn">
          Explore <span className="arrow">→</span>
        </Link>
      </div>
    </section>
  );
}

export default function Community() {
  return (
    <>
      <div className="community-hero">
        <p className="eyebrow">Our Community</p>
        <h1>Not just an art collective — a way of showing up.</h1>
        <p>
          Nexus Africa started as four people sharing a studio and a WhatsApp group.
          It's grown into something harder to put in one sentence: a community
          organised loosely around art, but held together by everything that
          happens around it.
        </p>
      </div>

      {activities.map((activity, i) => (
        <CommunityBlock activity={activity} index={i} key={activity.slug} />
      ))}

      <JoinPanel
        eyebrow="Come through"
        heading="Find the next hang"
        body="Reading hangs, planting days, and open studios get announced first to the list — usually a week out, sometimes less."
        image="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop"
        actionLabel="Join us"
        accent="teal"
      />
    </>
  );
}
