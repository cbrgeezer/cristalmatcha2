"use client";

import { useState } from "react";

export default function NewsletterCta() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <section className="newsletter-ritual" id="newsletter">
        <div className="newsletter-card">
          <div className="newsletter-card-bg" />
          <div className="newsletter-card-inner">
            <h2>You're in the Parlour</h2>
            <p>
              Thank you for joining. Expect brewing guides, sourcing notes, and early
              access to limited seasonal harvests.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="newsletter-ritual" id="newsletter">
      <div className="newsletter-card">
        <div className="newsletter-card-bg" />
        <div className="newsletter-card-inner">
          <h2>Join the Parlour</h2>
          <p>
            Sign up for brewing guides, sourcing notes, and early access to limited
            seasonal harvests.
          </p>
          <form
            className="newsletter-ritual-form"
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitted(true);
            }}
          >
            <label htmlFor="newsletter-email" className="visually-hidden">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Email address"
              required
            />
            <button type="submit">Join</button>
          </form>
        </div>
      </div>
    </section>
  );
}
