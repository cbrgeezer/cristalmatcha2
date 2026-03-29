import Footer from "../components/Footer";
import NewsletterCta from "../components/NewsletterCta";
import SiteHeader from "../components/SiteHeader";
import { landingProducts } from "../components/ritualData";

export const metadata = {
  title: "Cristal Matcha",
  description: "The art of stillness through ceremonial-grade matcha and a modern tea ritual.",
};

const testimonials = [
  {
    initials: "EL",
    name: "ELEANOR L.",
    quote:
      "Unlike anything I’ve tasted outside Kyoto. The vibrant green colour is proof of its quality. A morning necessity.",
    tone: "primary",
  },
  {
    initials: "JM",
    name: "JULIAN M.",
    quote:
      "The Heritage Harvest has this incredible buttery texture. It turns my daily tea into a sacred meditation.",
    tone: "secondary",
    offset: true,
  },
  {
    initials: "SK",
    name: "SARAH K.",
    quote:
      "Packaging is as beautiful as the tea itself. You can feel the intention behind every detail of this brand.",
    tone: "tertiary",
  },
];

export default function HomePage() {
  return (
    <>
      <SiteHeader active="home" />
      <main className="ritual-main">
        <section className="hero-ritual">
          <div className="hero-media">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMfbGTz_UCv_NnVA05r6OmjkqxwZxx6V9N8w1x7BAtU_GJBKHpeE0q_aRUcNoFD3JfPiLIXXZnzli2BN5cFBJC2WU7xkQ36lY6aFV0nsE3PFgUtEQrK3bQGKZuoLCPiL-AoujY_Xx3tQMATVCSV8gZn_rLv0VgbPCWbfNd1HFh3yERSNR7Fxl1NsdbAfP8-Tpj6SU6ztEeqIFXHZkl2yLZG5ISIQ9Fg4nW4vMCsWZc7f2iT1Kz1KlQvsW4fxERbrbICT-cgH1rGIo"
              alt="Premium matcha preparation"
            />
            <div className="hero-overlay" />
          </div>
          <div className="hero-content-ritual">
            <span className="eyebrow">Sourced from Uji, Japan</span>
            <h1>
              The Art of <br />
              <i>Stillness</i>
            </h1>
            <p>
              Experience the meditative clarity of ceremonial grade matcha, stone-ground
              for generations.
            </p>
            <div className="hero-actions">
              <a href="/shop" className="button-primary">
                Shop the Collection
              </a>
            </div>
          </div>
        </section>

        <section className="ritual-section">
          <div className="section-split">
            <div>
              <h2>Ceremonial Selection</h2>
              <p>
                Carefully curated harvests, stone-ground in small batches to preserve the
                vibrant chlorophyll and delicate umami notes.
              </p>
            </div>
            <a href="/shop" className="inline-action">
              View All Products <span>→</span>
            </a>
          </div>

          <div className="landing-product-grid">
            {landingProducts.map((product) => (
              <article key={product.name} className="landing-product-card">
                <div className="landing-product-media">
                  <img src={product.image} alt={product.name} />
                  {product.badge ? <span className="badge-chip">{product.badge}</span> : null}
                </div>
                <div className="landing-product-meta">
                  <div>
                    <h3>{product.name}</h3>
                    <p>{product.meta}</p>
                  </div>
                  <span>{product.price}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="story-band tonal-band" id="story">
          <div className="story-layout">
            <div className="story-image-wrap">
              <div className="story-image">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3JGIvJWWZDTErB7doMR7sLMCGP-sbYMfBDHFx7a1QeS94oqYMYjYKarMUKV0KCRgy_voy9YEreC4ua6pHLin2IFLRuAt6QuAcFCCScOJv5HMBiqMU23ZPIME7Dl0IgekqKM9t83z1W6aLWpy7oV_Co0mQGHgYmrSC0eQubZ5vU6jssIaavpPxMODuJ3DXwPwL7yQbJI-tZt1PrkOoMhTqh73Ry3xFhFT_1ciJci5FxCgiSX_uScTja_jajl0GmDt5TXMp2IQIi6Y"
                  alt="Uji tea farm"
                />
              </div>
            </div>
            <div className="story-copy">
              <label>Origin Story</label>
              <h2>
                Rooted in the soil of <i>Uji</i>
              </h2>
              <p>
                Our matcha begins its journey in the misty hills of Uji, Kyoto, the
                birthplace of Japanese tea culture. Here, the shade-growing process is an
                ancient dialogue between the farmer and the leaf.
              </p>
              <p>
                We partner exclusively with legacy estates that have refined their
                stone-grinding techniques for over four generations. Every gram is a
                testament to patience, craft, and the pursuit of slow-living.
              </p>
              <a href="/#story" className="link-button">
                Explore the sourcing
              </a>
            </div>
          </div>
        </section>

        <section className="ritual-section" id="reviews">
          <h2 className="section-centered">
            The Senses <i>Speak</i>
          </h2>
          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <article
                key={item.name}
                className={`testimonial-card ${item.offset ? "testimonial-offset" : ""}`}
              >
                <div className="stars">★★★★★</div>
                <p>{item.quote}</p>
                <div className="testimonial-author">
                  <div className={`avatar avatar-${item.tone}`}>{item.initials}</div>
                  <span>{item.name}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <NewsletterCta />
      </main>
      <Footer variant="landing" />
    </>
  );
}
