import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import './JoinPanel.css';

/**
 * Two-column panel: left = descriptive copy on a hover-tinted image,
 * right = an action (newsletter signup / contact / register).
 * Reused across Home, Curations, etc. with different copy + action.
 */
export default function JoinPanel({
  eyebrow,
  heading,
  body,
  image,
  actionLabel = 'Join us',
  inputPlaceholder = 'Your email',
  onSubmit,
  accent = 'red',
}) {
  const ref = useReveal();
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    onSubmit?.(email);
    setSent(true);
    setEmail('');
  };

  return (
    <section className={`join-panel reveal join-panel--${accent}`} ref={ref}>
      <div className="join-panel__visual" style={{ backgroundImage: `url(${image})` }}>
        <div className="join-panel__tint" />
        <div className="join-panel__visual-text">
          <p className="eyebrow">{eyebrow}</p>
          <h3>{heading}</h3>
          <p className="join-panel__body">{body}</p>
        </div>
      </div>

      <form className="join-panel__action" onSubmit={handleSubmit}>
        <p className="eyebrow">{actionLabel}</p>
        {sent ? (
          <p className="join-panel__success">You're on the list. We'll be in touch.</p>
        ) : (
          <div className="join-panel__field">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M3 5h18v14H3z" strokeLinejoin="round" />
              <path d="M3 6l9 7 9-7" strokeLinejoin="round" />
            </svg>
            <input
              type="email"
              required
              placeholder={inputPlaceholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label={inputPlaceholder}
            />
            <button type="submit" className="pill-btn solid">
              Register <span className="arrow">→</span>
            </button>
          </div>
        )}
      </form>
    </section>
  );
}
