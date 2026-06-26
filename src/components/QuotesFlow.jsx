import { quotes } from '../data/quotes';
import { useReveal } from '../hooks/useReveal';
import './QuotesFlow.css';

function QuoteBlock({ q, index }) {
  const ref = useReveal();
  const flip = index % 2 === 1;
  return (
    <div ref={ref} className={`quote-block reveal ${flip ? 'quote-block--flip' : ''}`}>
      <div className="quote-block__image" style={{ backgroundImage: `url(${q.image})` }} />
      <div className="quote-block__text">
        <svg className="quote-block__mark" width="40" height="32" viewBox="0 0 40 32" fill="none">
          <path d="M0 32V18.6C0 8.2 6.4 1.6 16.4 0L18 4.6C12 6 9 9.6 9 14.6H16.4V32H0ZM21.6 32V18.6C21.6 8.2 28 1.6 38 0L39.6 4.6C33.6 6 30.6 9.6 30.6 14.6H38V32H21.6Z" fill="currentColor"/>
        </svg>
        <p className="quote-block__quote">{q.quote}</p>
        <div className="quote-block__attribution">
          <p className="quote-block__author">{q.author}</p>
          <p className="quote-block__role">{q.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function QuotesFlow() {
  return (
    <section className="quotes-flow container">
      <div className="quotes-flow__head">
        <p className="eyebrow">In their words</p>
        <h2>Africa has always spoken for itself.</h2>
      </div>
      {quotes.map((q, i) => <QuoteBlock q={q} index={i} key={i} />)}
    </section>
  );
}
