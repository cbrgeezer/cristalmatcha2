"use client";

import { useCart } from "../context/CartContext";

export default function CartClient() {
  const { items, removeItem, updateQuantity } = useCart();

  const subtotal = items.reduce((sum, i) => {
    return sum + parseFloat(i.price.replace("£", "")) * i.quantity;
  }, 0);
  const shipping = subtotal > 0 && subtotal < 75 ? 4.95 : 0;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <div className="cart-layout">
        <section className="cart-list">
          <div style={{ textAlign: "center", padding: "4rem 2rem" }}>
            <p style={{ marginBottom: "1.5rem", opacity: 0.6 }}>Your basket is empty.</p>
            <a href="/shop" className="button-primary">
              Shop the Collection
            </a>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="cart-layout">
      <section className="cart-list">
        {items.map((item) => (
          <article key={item.name} className="cart-item">
            <div className="cart-item-image">
              <img src={item.image} alt={item.name} loading="lazy" />
            </div>
            <div className="cart-item-content">
              <div className="cart-item-top">
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.meta}</p>
                </div>
                <span>£{(parseFloat(item.price.replace("£", "")) * item.quantity).toFixed(2)}</span>
              </div>
              <div className="cart-item-actions">
                <div className="quantity-selector cart-quantity">
                  <button
                    type="button"
                    aria-label="Decrease quantity"
                    onClick={() => updateQuantity(item.name, -1)}
                  >
                    −
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    type="button"
                    aria-label="Increase quantity"
                    onClick={() => updateQuantity(item.name, 1)}
                  >
                    +
                  </button>
                </div>
                <button
                  type="button"
                  className="remove-button"
                  onClick={() => removeItem(item.name)}
                >
                  Remove
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>

      <aside className="cart-summary">
        <div className="summary-card">
          <h2>Basket Summary</h2>
          <div className="summary-lines">
            <div>
              <span>Subtotal</span>
              <span>£{subtotal.toFixed(2)}</span>
            </div>
            <div>
              <span>Delivery (Standard)</span>
              <span className="summary-accent">
                {shipping === 0 ? "Complimentary" : `£${shipping.toFixed(2)}`}
              </span>
            </div>
          </div>
          <div className="summary-total">
            <span>Total</span>
            <strong>£{total.toFixed(2)}</strong>
          </div>
          <button type="button" className="button-primary summary-button">
            Proceed to Checkout
          </button>
          <div className="summary-meta">
            <span>Secure</span>
            <span>•</span>
            <span>Carbon Neutral</span>
          </div>
        </div>
        <div className="cart-botanical">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6k3XitpgDKE1rNmlzC0y7WLtloTRVZQwGYP3FmTAsk5vzpGv-bX-YjJPBu2dIMhM_LSlKKc93cU5aVKRp-TVSRjgdu9X7L8jBV8wwubDPFVJlaUXf8dc5oytr-6aj427cBOkXlOXh7YlD3yooWbleONx6mfb_JHReETrO4Vdh_4BfJwm8UjV8lD6Dq3066ShKWQO3vlfp0y46xCPzHvgsiMX3HCV0B80S4VYw6wIMUd5roKRydeivsBUfB-0XZBLgwLuVwrMV8ZM"
            alt="Botanical shadow"
            loading="lazy"
          />
        </div>
      </aside>
    </div>
  );
}
