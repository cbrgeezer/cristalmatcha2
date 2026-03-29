"use client";

import { useMemo, useState } from "react";
import { useCart } from "../context/CartContext";

export default function ShopClient({ products }) {
  const { addItem } = useCart();
  const [grades, setGrades] = useState({ ceremonial: true, culinary: false, limited: false });
  const [maxPrice, setMaxPrice] = useState(200);
  const [origin, setOrigin] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [addedMap, setAddedMap] = useState({});

  function toggleGrade(key) {
    setGrades((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  function handleAddToBasket(product) {
    addItem(product);
    setAddedMap((prev) => ({ ...prev, [product.name]: true }));
    setTimeout(() => {
      setAddedMap((prev) => ({ ...prev, [product.name]: false }));
    }, 1500);
  }

  const filtered = useMemo(() => {
    const activeGrades = Object.entries(grades)
      .filter(([, on]) => on)
      .map(([k]) => k);

    let result = products.filter((p) => {
      if (activeGrades.length > 0 && p.grade) {
        if (!activeGrades.includes(p.grade)) return false;
      }
      if (p.priceNum > maxPrice) return false;
      if (origin !== "all" && p.origin && p.origin !== origin) return false;
      return true;
    });

    if (sortBy === "price-asc") result = [...result].sort((a, b) => a.priceNum - b.priceNum);
    if (sortBy === "price-desc") result = [...result].sort((a, b) => b.priceNum - a.priceNum);

    return result;
  }, [products, grades, maxPrice, origin, sortBy]);

  return (
    <div className="catalog-layout">
      <aside className="catalog-sidebar">
        <div className="filter-group">
          <h3>The Grade</h3>
          <label>
            <input
              type="checkbox"
              checked={grades.ceremonial}
              onChange={() => toggleGrade("ceremonial")}
            />{" "}
            Ceremonial Grade
          </label>
          <label>
            <input
              type="checkbox"
              checked={grades.culinary}
              onChange={() => toggleGrade("culinary")}
            />{" "}
            Culinary Grade
          </label>
          <label>
            <input
              type="checkbox"
              checked={grades.limited}
              onChange={() => toggleGrade("limited")}
            />{" "}
            Limited Reserves
          </label>
        </div>

        <div className="filter-group">
          <h3>Price Range</h3>
          <input
            type="range"
            min="20"
            max="200"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            aria-label={`Maximum price £${maxPrice}`}
          />
          <div className="range-legend">
            <span>£20</span>
            <span>up to £{maxPrice}</span>
          </div>
        </div>

        <div className="filter-group">
          <h3>Origins</h3>
          <label>
            <input
              type="radio"
              name="origin"
              value="all"
              checked={origin === "all"}
              onChange={() => setOrigin("all")}
            />{" "}
            All Origins
          </label>
          <label>
            <input
              type="radio"
              name="origin"
              value="uji"
              checked={origin === "uji"}
              onChange={() => setOrigin("uji")}
            />{" "}
            Uji, Kyoto
          </label>
          <label>
            <input
              type="radio"
              name="origin"
              value="yame"
              checked={origin === "yame"}
              onChange={() => setOrigin("yame")}
            />{" "}
            Yame, Fukuoka
          </label>
        </div>
      </aside>

      <section className="catalog-content">
        <div className="catalog-toolbar">
          <span>Showing {filtered.length} selections</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            aria-label="Sort products"
            style={{
              background: "transparent",
              border: "1px solid currentColor",
              padding: "0.4rem 0.75rem",
              cursor: "pointer",
              fontSize: "inherit",
              fontFamily: "inherit",
              color: "inherit",
            }}
          >
            <option value="newest">Sort by: Newest</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>

        {filtered.length === 0 ? (
          <p style={{ padding: "3rem 0", opacity: 0.6 }}>
            No products match the current filters.
          </p>
        ) : (
          <div className="catalog-grid">
            {filtered.map((product) => (
              <article key={product.name} className="catalog-card">
                <a href="/products/ceremonial-grade" className="catalog-image-wrap">
                  <img src={product.image} alt={product.name} loading="lazy" />
                  {product.badge ? (
                    <span className="badge-chip">{product.badge}</span>
                  ) : null}
                </a>
                <h2>{product.name}</h2>
                <p>{product.meta}</p>
                <div className="catalog-card-footer">
                  <span>{product.price}</span>
                  <button type="button" onClick={() => handleAddToBasket(product)}>
                    {addedMap[product.name] ? "Added ✓" : "Add to Basket"}
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}

        <div className="catalog-more">
          <button type="button">
            <span>Discover More</span>
            <strong>⌄</strong>
          </button>
        </div>
      </section>
    </div>
  );
}
