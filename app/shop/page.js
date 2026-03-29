import SiteHeader from "../../components/SiteHeader";
import Footer from "../../components/Footer";
import { catalogProducts } from "../../components/ritualData";
import ShopClient from "./ShopClient";

export const metadata = {
  title: "Shop the Collection",
  description:
    "Browse the Cristal Matcha collection — ceremonial grade matcha, teaware, and accessories sourced from Uji, Japan.",
};

export default function ShopPage() {
  return (
    <>
      <SiteHeader active="shop" />
      <main className="shop-page">
        <header className="catalog-header">
          <div>
            <span className="eyebrow">The Collection</span>
            <h1>Cultivated <br /><i>Calm</i></h1>
          </div>
          <div className="catalog-intro">
            <p>
              Our matcha is harvested from shade-grown tea gardens in Uji, Japan. Each
              grade is selected for its unique profile of umami, sweetness, and vibrant
              colour.
            </p>
          </div>
        </header>
        <ShopClient products={catalogProducts} />
      </main>
      <Footer variant="catalog" />
    </>
  );
}
