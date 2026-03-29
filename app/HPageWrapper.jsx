"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { useCart } from "./context/CartContext";

export default function HPageWrapper({ children }) {
  const scrollRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount } = useCart();

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || menuOpen || window.innerWidth <= 768) return;
    const onWheel = (e) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;

      // Let inner scrollable containers handle their own vertical scroll first
      let node = e.target;
      while (node && node !== el) {
        if (node.scrollHeight > node.clientHeight + 2) {
          const canScrollDown = e.deltaY > 0 && node.scrollTop < node.scrollHeight - node.clientHeight - 2;
          const canScrollUp = e.deltaY < 0 && node.scrollTop > 2;
          if (canScrollDown || canScrollUp) return;
        }
        node = node.parentElement;
      }

      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
      const atStart = el.scrollLeft <= 0;
      if (e.deltaY > 0 && atEnd) return;
      if (e.deltaY < 0 && atStart) return;
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [menuOpen]);

  return (
    <>
      {/* Fixed nav */}
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

      {/* Side panel */}
      <div className={`home-menu-overlay${menuOpen ? " is-open" : ""}`}>
        <nav className="menu-panel-nav">
          <span className="menu-section-title">The Collection</span>
          <Link href="/shop" onClick={() => setMenuOpen(false)}>Matcha Powder</Link>
          <Link href="/shop" onClick={() => setMenuOpen(false)}>Teaware</Link>
          <Link href="/shop" onClick={() => setMenuOpen(false)}>Essentials Kits</Link>
          <hr />
          <span className="menu-section-title">The Parlour</span>
          <Link href="/" onClick={() => setMenuOpen(false)}>Our Story</Link>
          <Link href="/" onClick={() => setMenuOpen(false)}>Reviews</Link>
          <hr />
          <span className="menu-section-title">Your Account</span>
          <Link href="/cart" onClick={() => setMenuOpen(false)}>The Ritual Basket</Link>
          <a href="mailto:hello@cristalmatcha.com" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
      </div>

      {menuOpen && <div className="page-fog" />}

      <div className={`page-push${menuOpen ? " menu-open" : ""}`}>
        <div ref={scrollRef} className="h-scroll-root">
          <div className="h-scroll-track">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
