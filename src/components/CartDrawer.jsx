import { useCart } from '../context/CartContext';

const WHATSAPP_NUMBER = '254768241700'; // TODO: replace with Nexus Africa's real WhatsApp business number

function buildWhatsAppMessage(items, totalPrice) {
  const lines = items.map(
    (i) => `• ${i.title} by ${i.artist} — qty ${i.qty} — KES ${(i.price * i.qty).toLocaleString()}`
  );
  const message = [
    "Hi Nexus Africa, I'd like to order:",
    '',
    ...lines,
    '',
    `Total: KES ${totalPrice.toLocaleString()}`,
    '',
    'Please confirm availability and how to pay.',
  ].join('\n');
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export default function CartDrawer({ open, onClose }) {
  const { items, removeItem, updateQty, totalPrice } = useCart();

  return (
    <>
      <div className={`cart-overlay ${open ? 'is-open' : ''}`} onClick={onClose} />
      <aside className={`cart-drawer ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <div className="cart-drawer__head">
          <h3>Your cart</h3>
          <button className="cart-drawer__close" onClick={onClose} aria-label="Close cart">×</button>
        </div>

        <div className="cart-drawer__items">
          {items.length === 0 ? (
            <p className="cart-drawer__empty">Nothing here yet — add a piece you like.</p>
          ) : (
            items.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="cart-item__image" style={{ backgroundImage: `url(${item.image})` }} />
                <div>
                  <p className="cart-item__title">{item.title}</p>
                  <p className="cart-item__artist">{item.artist}</p>
                  <div className="cart-item__qty">
                    <button onClick={() => updateQty(item.id, item.qty - 1)} aria-label="Decrease quantity">−</button>
                    <span>{item.qty}</span>
                    <button onClick={() => updateQty(item.id, item.qty + 1)} aria-label="Increase quantity">+</button>
                  </div>
                  <button className="cart-item__remove" onClick={() => removeItem(item.id)}>Remove</button>
                </div>
                <span className="cart-item__price">KES {(item.price * item.qty).toLocaleString()}</span>
              </div>
            ))
          )}
        </div>

        <div className="cart-drawer__footer">
          <div className="cart-drawer__total">
            <span>Total</span>
            <span>KES {totalPrice.toLocaleString()}</span>
          </div>
          <a
            className={`pill-btn solid cart-drawer__checkout ${items.length === 0 ? 'is-disabled' : ''}`}
            href={items.length > 0 ? buildWhatsAppMessage(items, totalPrice) : undefined}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => { if (items.length === 0) e.preventDefault(); }}
            style={items.length === 0 ? { opacity: 0.5, pointerEvents: 'none' } : undefined}
          >
            Checkout on WhatsApp
          </a>
          <p className="cart-drawer__note">Payments are handled directly over WhatsApp for now — card checkout is coming soon.</p>
        </div>
      </aside>
    </>
  );
}
