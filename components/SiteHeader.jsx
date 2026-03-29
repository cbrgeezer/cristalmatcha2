"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useCart } from "../app/context/CartContext";

const navItems = [
  { href: "/shop", label: "Shop" },
  { href: "/#story", label: "Story" },
  { href: "/#reviews", label: "Reviews" },
];

export default function SiteHeader({ active = "shop" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cartCount } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className={`ritual-topbar${scrolled ? " scrolled" : ""}`}>
        <Link href="/" className="brand-mark">
          <span className="brand-mark-title">Cristal Matcha</span>
          <span className="brand-mark-subtitle">The Matcha Parlour</span>
        </Link>

        <div className="topbar-nav desktop-only">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={item.label.toLowerCase() === active ? "is-active" : ""}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="topbar-actions">
          <a href="#" aria-label="Search" className="icon-button desktop-only">
            <span aria-hidden="true">⌕</span>
          </a>
          <a href="#" aria-label="Account" className="icon-button desktop-only">
            <span aria-hidden="true">◦</span>
          </a>
          <Link
            href="/cart"
            className={`cart-link-ritual ${active === "cart" ? "is-active" : ""}`}
            aria-label={`Basket, ${cartCount} item${cartCount !== 1 ? "s" : ""}`}
          >
            <span className="cart-icon" aria-hidden="true">◔</span>
            <span className="cart-count-ritual">{cartCount}</span>
          </Link>
          <button
            type="button"
            className="mobile-menu-button mobile-only"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
          </button>
        </div>
      </nav>

      {menuOpen ? (
        <div className="mobile-nav-panel mobile-only">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link href="/cart" onClick={() => setMenuOpen(false)}>
            Basket
          </Link>
        </div>
      ) : null}
    </>
  );
}
