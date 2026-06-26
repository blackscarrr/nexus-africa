import { Link } from 'react-router-dom';
import { artists } from '../data/artists';
import './Artists.css';

export default function Artists() {
  return (
    <div className="artists-index">
      <div className="artists-index__head">
        <p className="eyebrow">Nexart · Artists</p>
        <h1>The people behind the pieces.</h1>
        <p>Every artist on Nexart has a home here — their story, their medium, their other work.</p>
      </div>

      <div className="artists-index__grid">
        {artists.map((artist) => (
          <Link to={`/artists/${artist.slug}`} className="artist-tile" key={artist.slug}>
            <div className="artist-tile__photo" style={{ backgroundImage: `url(${artist.image})` }} />
            <span className="artist-tile__name">{artist.name}</span>
            <span className="artist-tile__medium">{artist.medium}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
