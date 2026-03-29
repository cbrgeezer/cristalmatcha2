"use client";

import { useState } from "react";
import { useCart } from "../../context/CartContext";

export default function ProductActions({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  function handleAdd() {
    addItem(product, quantity);
    setAdded(true);
    setQuantity(1);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div className="product-purchase-row">
      <div className="quantity-selector">
        <button
          type="button"
          aria-label="Decrease quantity"
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
        >
          −
        </button>
        <span>{quantity}</span>
        <button
          type="button"
          aria-label="Increase quantity"
          onClick={() => setQuantity((q) => q + 1)}
        >
          +
        </button>
      </div>
      <button
        type="button"
        className="button-primary product-buy-button"
        onClick={handleAdd}
      >
        {added ? "Added ✓" : "Add to Basket"}
      </button>
    </div>
  );
}
