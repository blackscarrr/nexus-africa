import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=1800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=1800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1800&auto=format&fit=crop',
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % HERO_IMAGES.length), 5500);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      if (rect.bottom > 0) setOffsetY(window.scrollY * 0.35);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero__bg" style={{ transform: `translateY(${offsetY}px)` }}>
        {HERO_IMAGES.map((src, i) => (
          <div
            key={src}
            className={`hero__bg-layer ${i === index ? 'is-active' : ''}`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
      </div>
      <div className="hero__scrim" />

      <div className="container hero__content">
        <p className="eyebrow hero__eyebrow">Nexus Africa · A creatives collective</p>
        <h1 className="hero__title">
          Africa, told<br />by Africans.
        </h1>
        <p className="hero__lede">
          A community of artists, technologists, and organisers building culture
          on its own terms — through exhibitions, curated drops, and rooms worth showing up to.
        </p>
        <div className="hero__ctas">
          <Link to="/nexart" className="pill-btn solid">
            Explore Nexart <span className="arrow">→</span>
          </Link>
          <Link to="/community" className="pill-btn">
            Our community <span className="arrow">→</span>
          </Link>
        </div>
      </div>

      <div className="hero__dots">
        {HERO_IMAGES.map((_, i) => (
          <button
            key={i}
            className={`hero__dot ${i === index ? 'is-active' : ''}`}
            onClick={() => setIndex(i)}
            aria-label={`Show background image ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
