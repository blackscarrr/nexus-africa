import { useParams, Link, Navigate } from 'react-router-dom';
import { getActivityBySlug } from '../data/activities';
import './ActivityDetail.css';

export default function ActivityDetail() {
  const { slug } = useParams();
  const activity = getActivityBySlug(slug);

  if (!activity) return <Navigate to="/community" replace />;

  return (
    <div className="activity-detail">
      <div
        className="activity-detail__hero"
        style={{ backgroundImage: `url(${activity.heroImage})` }}
      >
        <div className="activity-detail__hero-scrim" />
        <div className="container activity-detail__hero-content">
          <p className="eyebrow">{activity.cadence}</p>
          <h1>{activity.title}</h1>
          <p className="activity-detail__tagline">{activity.tagline}</p>
        </div>
      </div>

      <div className="activity-detail__body container">
        <p>{activity.longBody}</p>

        {activity.hasRegistration ? (
          <a
            href={activity.registerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="pill-btn solid"
          >
            Register for our next hang <span className="arrow">→</span>
          </a>
        ) : (
          <Link to="/media" className="pill-btn">
            See more shots in Media <span className="arrow">→</span>
          </Link>
        )}
      </div>

      <div className="activity-detail__gallery container">
        {activity.gallery.map((src, i) => (
          <div
            key={i}
            className="activity-detail__gallery-tile"
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
      </div>

      <div className="activity-detail__back container">
        <Link to="/community" className="pill-btn">
          ← Back to community
        </Link>
      </div>
    </div>
  );
}
