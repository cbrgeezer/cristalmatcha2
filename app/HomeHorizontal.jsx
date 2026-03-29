"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { useCart } from "./context/CartContext";
import { landingProducts } from "../components/ritualData";

const testimonials = [
  {
    initials: "EL",
    name: "ELEANOR L.",
    quote: "Unlike anything I've tasted outside Kyoto. The vibrant green colour is proof of its quality. A morning necessity.",
  },
  {
    initials: "JM",
    name: "JULIAN M.",
    quote: "The Heritage Harvest has this incredible buttery texture. It turns my daily tea into a sacred meditation.",
  },
  {
    initials: "SK",
    name: "SARAH K.",
    quote: "Packaging is as beautiful as the tea itself. You can feel the intention behind every detail of this brand.",
  },
];

export default function HomeHorizontal() {
  const scrollRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { cartCount } = useCart();

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || menuOpen || window.innerWidth <= 768) return;
    const onWheel = (e) => {
      e.preventDefault();
      el.scrollLeft += e.deltaY + e.deltaX;
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [menuOpen]);

  return (
    <>
      {/* ── Fixed nav — outside page-push, never moves ── */}
      <div className={`home-nav-fixed${menuOpen ? " menu-open" : ""}`}>
        <button
          className="home-menu-btn"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <><span className="menu-back">‹</span> MENU</>
          ) : (
            <>MENU <span className="hamburger-icon" aria-hidden="true"><span /><span /><span /></span></>
          )}
        </button>
        <div className="home-nav-mobile-logo">
          <Link href="/">CRISTAL MATCHA</Link>
        </div>
        {!menuOpen && (
          <div className="home-nav-right">
            <Link href="/shop">Shop</Link>
            <Link href="/cart">Basket{cartCount > 0 ? ` (${cartCount})` : ""}</Link>
          </div>
        )}
      </div>

      {/* ── Side Panel ── */}
      <div className={`home-menu-overlay${menuOpen ? " is-open" : ""}`}>
        <nav className="menu-panel-nav">
          <span className="menu-section-title">The Collection</span>
          <Link href="/shop" onClick={() => setMenuOpen(false)}>Matcha Powder</Link>
          <Link href="/shop" onClick={() => setMenuOpen(false)}>Teaware</Link>
          <Link href="/shop" onClick={() => setMenuOpen(false)}>Essentials Kits</Link>
          <hr />
          <span className="menu-section-title">The Parlour</span>
          <Link href="#story" onClick={() => setMenuOpen(false)}>Our Story</Link>
          <Link href="#reviews" onClick={() => setMenuOpen(false)}>Reviews</Link>
          <hr />
          <span className="menu-section-title">Your Account</span>
          <Link href="/cart" onClick={() => setMenuOpen(false)}>The Ritual Basket</Link>
          <a href="mailto:hello@cristalmatcha.com" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
      </div>

      {/* Milky fog overlay */}
      {menuOpen && <div className="page-fog" />}

      {/* ── Page content — shifts right when menu opens ── */}
      <div className={`page-push${menuOpen ? " menu-open" : ""}`}>
        <div ref={scrollRef} className="h-scroll-root">
          <div className="h-scroll-track">

            {/* Panel 1 — Brand */}
            <div className="h-panel panel-brand">
              <div className="panel-brand-inner">
                <span className="panel-brand-eyebrow">The Matcha Parlour</span>
                <h1 className="panel-brand-name">CRISTAL<br />MATCHA</h1>
                <span className="panel-brand-location">Norwich · Uji · Japan</span>
              </div>
              <div className="scroll-indicator">
                <div className="scroll-wheel" />
                <span>SCROLL</span>
              </div>
            </div>

            {/* Panel 2 — Hero */}
            <div className="h-panel panel-hero">
              <div className="panel-hero-image">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMfbGTz_UCv_NnVA05r6OmjkqxwZxx6V9N8w1x7BAtU_GJBKHpeE0q_aRUcNoFD3JfPiLIXXZnzli2BN5cFBJC2WU7xkQ36lY6aFV0nsE3PFgUtEQrK3bQGKZuoLCPiL-AoujY_Xx3tQMATVCSV8gZn_rLv0VgbPCWbfNd1HFh3yERSNR7Fxl1NsdbAfP8-Tpj6SU6ztEeqIFXHZkl2yLZG5ISIQ9Fg4nW4vMCsWZc7f2iT1Kz1KlQvsW4fxERbrbICT-cgH1rGIo"
                  alt="Premium matcha preparation"
                />
              </div>
              <div className="panel-hero-copy">
                <span className="eyebrow">Sourced from Uji, Japan</span>
                <h2 className="panel-hero-title">THE ART OF<br /><i>Stillness</i></h2>
                <p>Experience the meditative clarity of ceremonial grade matcha, stone-ground for generations.</p>
                <Link href="/shop" className="button-primary">Shop the Collection</Link>
              </div>
            </div>

            {/* Panel 3 — Products */}
            <div className="h-panel panel-products">
              <div className="panel-products-header">
                <h2>Ceremonial<br /><i>Selection</i></h2>
                <Link href="/shop" className="inline-action">View All →</Link>
              </div>
              <div className="panel-products-grid">
                {landingProducts.map((p) => (
                  <article key={p.name} className="h-product-card">
                    <div className="h-product-image">
                      <img src={p.image} alt={p.name} />
                      {p.badge && <span className="badge-chip">{p.badge}</span>}
                    </div>
                    <div className="h-product-meta">
                      <div>
                        <h3>{p.name}</h3>
                        <p>{p.meta}</p>
                      </div>
                      <span className="h-product-price">{p.price}</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Panel 4 — Story */}
            <div className="h-panel panel-story" id="story">
              <div className="panel-story-image">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3JGIvJWWZDTErB7doMR7sLMCGP-sbYMfBDHFx7a1QeS94oqYMYjYKarMUKV0KCRgy_voy9YEreC4ua6pHLin2IFLRuAt6QuAcFCCScOJv5HMBiqMU23ZPIME7Dl0IgekqKM9t83z1W6aLWpy7oV_Co0mQGHgYmrSC0eQubZ5vU6jssIaavpPxMODuJ3DXwPwL7yQbJI-tZt1PrkOoMhTqh73Ry3xFhFT_1ciJci5FxCgiSX_uScTja_jajl0GmDt5TXMp2IQIi6Y"
                  alt="Uji tea farm"
                />
              </div>
              <div className="panel-story-copy">
                <label>Origin Story</label>
                <h2>THE SOUL OF THE<br />MATCHA PARLOUR</h2>
                <p>Our matcha begins its journey in the misty hills of Uji, Kyoto, the birthplace of Japanese tea culture. An ancient dialogue between the farmer and the leaf, refined over four generations.</p>
                <a href="#story" className="link-button">Explore the sourcing</a>
              </div>
            </div>

            {/* Panel 5 — Reviews */}
            <div className="h-panel panel-reviews" id="reviews">
              <h2 className="panel-reviews-title">THE SENSES <i>Speak</i></h2>
              <div className="panel-reviews-grid">
                {testimonials.map((t) => (
                  <article key={t.name} className="h-review-card">
                    <span className="h-review-stars">★★★★★</span>
                    <p className="h-review-quote">{t.quote}</p>
                    <div className="h-review-author">
                      <div className="h-review-avatar">{t.initials}</div>
                      <span>{t.name}</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Panel 6 — Newsletter + End */}
            <div className="h-panel panel-end">
              <div className="panel-end-newsletter">
                {submitted ? (
                  <>
                    <h2>You're in<br />the Parlour</h2>
                    <p>Thank you for joining. Expect brewing guides, sourcing notes, and early access to limited seasonal harvests.</p>
                  </>
                ) : (
                  <>
                    <h2>Join the<br />Ceremony</h2>
                    <p>Brewing guides, sourcing notes, and early access to limited seasonal harvests.</p>
                    <form className="panel-end-form" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                      <label htmlFor="end-email" className="visually-hidden">Email address</label>
                      <input id="end-email" type="email" placeholder="Email address" required />
                      <button type="submit">Join</button>
                    </form>
                  </>
                )}
              </div>
              <nav className="panel-end-links">
                <Link href="/shop">Shop the Collection</Link>
                <Link href="/cart">The Ritual Basket</Link>
                <a href="mailto:hello@cristalmatcha.com">hello@cristalmatcha.com</a>
                <span className="panel-end-copy">© 2025 Cristal Matcha</span>
              </nav>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
