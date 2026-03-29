"use client";

import Link from "next/link";
import { useState } from "react";

function FooterNewsletter() {
  const [done, setDone] = useState(false);
  if (done) {
    return <p className="footer-copy" style={{ fontSize: "0.85rem" }}>You're on the list. ✓</p>;
  }
  return (
    <form
      className="footer-input-row"
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
    >
      <label htmlFor="footer-email" className="visually-hidden">Your email</label>
      <input id="footer-email" type="email" placeholder="YOUR EMAIL" required />
      <button type="submit" aria-label="Subscribe">→</button>
    </form>
  );
}

export default function Footer({ variant = "landing" }) {
  if (variant === "landing") {
    return (
      <footer className="ritual-footer">
        <div className="footer-grid footer-grid-landing">
          <div>
            <div className="footer-brand">Cristal Matcha</div>
            <div className="footer-tagline">The Matcha Parlour</div>
            <p className="footer-copy">
              Elevating the everyday through ancient botanicals.
            </p>
          </div>
          <div>
            <h4>Navigation</h4>
            <ul>
              <li><a href="#newsletter">Mailing List</a></li>
              <li><a href="mailto:studio@matcharitual.com">Contact</a></li>
              <li><Link href="/shop">Shop</Link></li>
              <li><a href="/#story">Our Story</a></li>
            </ul>
          </div>
          <div>
            <h4>Social</h4>
            <ul>
              <li><a href="#" aria-label="Instagram (coming soon)">Instagram</a></li>
              <li><a href="#" aria-label="Pinterest (coming soon)">Pinterest</a></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <p className="footer-copy">
              <a href="mailto:studio@matcharitual.com">studio@matcharitual.com</a>
            </p>
            <p className="footer-copy">Kyoto • Norwich</p>
          </div>
        </div>
        <div className="footer-bottom-row">
          <p>© 2025 CRISTAL MATCHA. CRAFTED FOR THE CALM.</p>
          <div className="footer-icons" aria-hidden="true">
            <span>$</span>
            <span>◌</span>
            <span>◎</span>
          </div>
        </div>
      </footer>
    );
  }

  if (variant === "catalog") {
    return (
      <footer className="ritual-footer">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">Cristal Matcha</div>
            <div className="footer-tagline">The Matcha Parlour</div>
            <p className="footer-copy">
              Crafting moments of presence through the ancient art of Japanese tea.
              Sustainably sourced, meticulously curated.
            </p>
          </div>
          <div>
            <h4>The Journey</h4>
            <ul>
              <li><Link href="/shop">Shop the Collection</Link></li>
              <li><a href="/#story">Our Story</a></li>
              <li><a href="mailto:studio@matcharitual.com">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4>Support</h4>
            <ul>
              <li><a href="mailto:studio@matcharitual.com">Delivery Enquiries</a></li>
              <li><a href="mailto:studio@matcharitual.com">Returns</a></li>
            </ul>
          </div>
          <div>
            <h4>Join the Parlour</h4>
            <FooterNewsletter />
          </div>
        </div>
        <div className="footer-bottom-center">© 2025 CRISTAL MATCHA. CRAFTED FOR THE CALM.</div>
      </footer>
    );
  }

  return (
    <footer className="ritual-footer">
      <div className="footer-grid">
        <div>
          <div className="footer-brand">Cristal Matcha</div>
          <div className="footer-tagline">The Matcha Parlour</div>
          <p className="footer-copy">
            Dedicated to the art of tea and the pursuit of stillness in a modern world.
          </p>
        </div>
        <div>
          <h4>Shop</h4>
          <ul>
            <li><Link href="/shop">Matcha Powder</Link></li>
            <li><Link href="/shop">Teaware</Link></li>
            <li><Link href="/cart">Your Basket</Link></li>
          </ul>
        </div>
        <div>
          <h4>Ritual</h4>
          <ul>
            <li><a href="#newsletter">Mailing List</a></li>
            <li><a href="mailto:studio@matcharitual.com">Contact</a></li>
            <li><a href="/#story">Our Story</a></li>
          </ul>
        </div>
        <div>
          <h4>Join the Ceremony</h4>
          <FooterNewsletter />
        </div>
      </div>
      <div className="footer-bottom-center">© 2025 CRISTAL MATCHA. CRAFTED FOR THE CALM.</div>
    </footer>
  );
}
