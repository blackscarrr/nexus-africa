import { useParams, Link, Navigate } from 'react-router-dom';
import { getArtistBySlug } from '../data/artists';
import { artPieces } from '../data/artPieces';
import './ArtistProfile.css';

function WebsiteIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.4 2.6 3.6 5.6 3.6 9s-1.2 6.4-3.6 9c-2.4-2.6-3.6-5.6-3.6-9s1.2-6.4 3.6-9z" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H7v3h3v6h3v-6h3l1-3h-4v-2c0-.6.4-1 1-1z" strokeLinejoin="round" />
    </svg>
  );
}

export default function ArtistProfile() {
  const { slug } = useParams();
  const artist = getArtistBySlug(slug);

  if (!artist) return <Navigate to="/artists" replace />;

  const pieces = artPieces.filter((p) => p.artistSlug === slug);

  return (
    <div className="artist-profile">
      <div className="artist-profile__head container">
        <div className="artist-profile__photo" style={{ backgroundImage: `url(${artist.image})` }} />
        <div className="artist-profile__info">
          <p className="eyebrow">{artist.medium} · {artist.location}</p>
          <h1>{artist.name}</h1>
          <p className="artist-profile__bio">{artist.bio}</p>
          <div className="artist-profile__socials">
            {artist.social.website && (
              <a href={artist.social.website} className="artist-profile__social-btn" aria-label={`${artist.name} on the web`}>
                <WebsiteIcon />
              </a>
            )}
            {artist.social.instagram && (
              <a href={artist.social.instagram} className="artist-profile__social-btn" aria-label={`${artist.name} on Instagram`}>
                <InstagramIcon />
              </a>
            )}
            {artist.social.facebook && (
              <a href={artist.social.facebook} className="artist-profile__social-btn" aria-label={`${artist.name} on Facebook`}>
                <FacebookIcon />
              </a>
            )}
          </div>
        </div>
      </div>

      {pieces.length > 0 && (
        <div className="artist-profile__works container">
          <p className="eyebrow">Available on Nexart</p>
          <div className="artist-profile__works-grid">
            {pieces.map((piece) => (
              <Link to="/nexart" className="artist-profile__work" key={piece.id}>
                <div className="artist-profile__work-image" style={{ backgroundImage: `url(${piece.image})` }} />
                <span>{piece.title}</span>
                <span className="artist-profile__work-price">KES {piece.price.toLocaleString()}</span>
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="artist-profile__back container">
        <Link to="/artists" className="pill-btn">
          ← All artists
        </Link>
      </div>
    </div>
  );
}
