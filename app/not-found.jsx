import Link from "next/link";
import Footer from "../components/Footer";
import SiteHeader from "../components/SiteHeader";

export const metadata = {
  title: "Page not found",
  description: "The page you were looking for is no longer brewing.",
};

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main
        style={{
          minHeight: "70vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "6rem 2rem",
          gap: "1.25rem",
        }}
      >
        <span
          style={{
            fontSize: "0.75rem",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            opacity: 0.6,
          }}
        >
          404 · Lost in the Tea Garden
        </span>
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            fontStyle: "italic",
            margin: 0,
          }}
        >
          This page is no longer brewing
        </h1>
        <p style={{ maxWidth: "36rem", opacity: 0.75, lineHeight: 1.6 }}>
          The path you followed has gone still. Let us guide you back to the
          collection or the ritual you were seeking.
        </p>
        <div style={{ display: "flex", gap: "1rem", marginTop: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
          <Link href="/" className="button-primary">
            Return home
          </Link>
          <Link href="/shop" className="link-button">
            Explore the shop →
          </Link>
        </div>
      </main>
      <Footer variant="catalog" />
    </>
  );
}
