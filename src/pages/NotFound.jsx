import { Link } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
  return (
    <div className="not-found container">
      <p className="eyebrow">404</p>
      <h1>This page wandered off.</h1>
      <p>Whatever you're looking for isn't here — but the rest of Nexus is.</p>
      <Link to="/" className="pill-btn solid">
        Back to home <span className="arrow">→</span>
      </Link>
    </div>
  );
}
