import { Link } from 'react-router-dom';
import Signature from './Signature';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <Signature />
      <div className="container footer__inner">
        <div className="footer__brand">
          <p className="footer__brand-name">Nexus·Africa</p>
          <p className="footer__tagline">Africa for Africans, est. Nairobi.</p>
        </div>

        <nav className="footer__col" aria-label="Site">
          <p className="eyebrow">Site</p>
          <Link to="/">Home</Link>
          <Link to="/community">Our Community</Link>
          <Link to="/nexart">Nexart</Link>
          <Link to="/nextech">NexTech</Link>
          <Link to="/curations">Curations</Link>
          <Link to="/media">Media</Link>
        </nav>

        <div className="footer__col">
          <p className="eyebrow">Get in touch</p>
          <a href="https://wa.me/254768241700" target="_blank" rel="noopener noreferrer">WhatsApp us</a>
          <a href="mailto:hello@nexusafrica.art">hello@nexusafrica.art</a>
          <span className="footer__muted">Nairobi, Kenya</span>
        </div>

        <div className="footer__col">
          <p className="eyebrow">Follow</p>
          <a href="#" aria-label="Instagram">Instagram</a>
          <a href="#" aria-label="Facebook">Facebook</a>
          <a href="#" aria-label="X / Twitter">X</a>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>Nexus Africa © {new Date().getFullYear()}</span>
        <span className="footer__muted">Terms & Conditions Apply</span>
      </div>
    </footer>
  );
}
