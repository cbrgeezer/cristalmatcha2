import Footer from "../../components/Footer";
import SiteHeader from "../../components/SiteHeader";
import CartClient from "./CartClient";

export const metadata = {
  title: "Your Ritual Basket",
  description: "Shopping basket for Cristal Matcha.",
};

export default function CartPage() {
  return (
    <>
      <SiteHeader active="cart" />
      <main className="cart-page">
        <header className="cart-header">
          <p className="eyebrow">Your Selection</p>
          <h1>The Ritual Basket</h1>
        </header>
        <CartClient />
      </main>
      <Footer variant="detail" />
    </>
  );
}
