import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { artPieces } from '../data/artPieces';
import { useCart } from '../context/CartContext';
import CartDrawer from '../components/CartDrawer';
import './Nexart.css';

function CartGlyph() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 3h2l2.4 12.4a2 2 0 0 0 2 1.6h7.2a2 2 0 0 0 2-1.6L21 8H6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="9" cy="20" r="1.4" />
      <circle cx="18" cy="20" r="1.4" />
    </svg>
  );
}

function ArtCard({ piece }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem({
      id: piece.id,
      title: piece.title,
      artist: piece.artistName,
      price: piece.price,
      image: piece.image,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  return (
    <div className="art-card">
      <div className="art-card__image-wrap">
        <div className="art-card__image" style={{ backgroundImage: `url(${piece.image})` }} />
        <button
          className={`art-card__cart-btn ${added ? 'is-added' : ''}`}
          onClick={handleAdd}
          aria-label={`Add ${piece.title} to cart`}
        >
          <CartGlyph />
        </button>
      </div>
      <div className="art-card__info">
        <div>
          <p className="art-card__title">{piece.title}</p>
          <Link to={`/artists/${piece.artistSlug}`} className="art-card__artist">
            {piece.artistName}
          </Link>
        </div>
        <span className="art-card__price">KES {piece.price.toLocaleString()}</span>
      </div>
    </div>
  );
}

export default function Nexart() {
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    if (window.location.hash === '#cart') setCartOpen(true);
  }, []);

  return (
    <>
      <div className="nexart-hero">
        <p className="eyebrow">Nexart</p>
        <h1>Just purely art.</h1>
        <p>
          Original pieces from artists across the Nexus network. Add to cart,
          checkout over WhatsApp — full payment integration is on the way.
        </p>
      </div>

      <div className="nexart-toolbar">
        <span className="nexart-toolbar__count">{artPieces.length} pieces available</span>
        <button className="pill-btn solid" onClick={() => setCartOpen(true)}>
          View cart <span className="arrow">→</span>
        </button>
      </div>

      <div className="art-grid">
        {artPieces.map((piece) => (
          <ArtCard piece={piece} key={piece.id} />
        ))}
      </div>

      <div className="artists-cta">
        <Link to="/artists" className="pill-btn">
          Meet the artists <span className="arrow">→</span>
        </Link>
      </div>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
