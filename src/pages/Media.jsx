import { mediaItems } from '../data/mediaItems';
import './Media.css';

function PlayGlyph() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function MediaTile({ item }) {
  return (
    <div className="media-tile">
      <div className="media-tile__image" style={{ backgroundImage: `url(${item.image})` }}>
        {item.type === 'video' && (
          <span className="media-tile__play">
            <PlayGlyph />
          </span>
        )}
      </div>
      <div className="media-tile__caption">
        <p className="media-tile__title">{item.title}</p>
        <p className="media-tile__meta">
          {item.location} <span className="media-tile__dot">·</span> {item.credit}
        </p>
      </div>
    </div>
  );
}

export default function Media() {
  return (
    <div className="media-page">
      <div className="media-hero container">
        <p className="eyebrow">Media</p>
        <h1>Africa, in frame.</h1>
        <p>
          Photos and short films from across the Nexus network — credited to the
          people who made them. We use this space to put Kenya and the rest of
          the continent in the best possible light, the way it actually looks.
        </p>
      </div>

      <div className="media-grid container">
        {mediaItems.map((item) => (
          <MediaTile item={item} key={item.id} />
        ))}
      </div>

      <div className="media-blog-note container">
        <p className="eyebrow">Coming soon</p>
        <p>Short reads — 5 to 10 minutes — from the people behind the camera.</p>
      </div>
    </div>
  );
}
