import Footer from "../../../components/Footer";
import SiteHeader from "../../../components/SiteHeader";
import ProductActions from "./ProductActions";

const product = {
  name: "Ceremonial Grade Matcha",
  meta: "30g • Uji, Kyoto Origin",
  price: "£48.00",
  priceNum: 48,
  grade: "ceremonial",
  origin: "uji",
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCJLrgA6bh4tKV7Y9cRifDebOklts9u3a99mW-Y5HWYcHZ2ixLlIc-nN4q6scOk_vyekAvpUw3J-aw6kJFMje_hlcGAkb7R6mBvfGqr-elQlLSMZEi4Ww6x0qArmjiMfSuzYc-81QqEqEUO541mI61PQtC-O4CctiUzmMZCiz0xuUIi5m4wQ1mtr-VWkYDFX5a8WK8nTHpaKXg9AoYofRYCSkGNs97gNlRfpLit7qP0Q1SWsj60iQfborSXSSPQGVmluAgSg1_IE3g",
};

const ritualSteps = [
  {
    step: "01",
    title: "SIFT",
    text: "Sift 1-2 tsp of matcha into a bowl to remove any lumps for a smooth finish.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDTdYyPaqXKun7O-lYPqq9GxA5ly2H78VGpSqve-ZxgpJ9C8jfPqF8RVv-q8aHZaRO_L1mDx0ThpYz5ExoHn3tL4dHKzIzFWlfQgdoAIywTIqTFcn-IbVDLH3Qz5cT2T0THodRIoV418yQhNkJObP0AGfzQHn6hrFFwW3vMeSe1fzGIM2azqggTEz66XdhJOqaSnRMg3jkDY-kly9jX6mTwGRoN3mLDbA6R0znwQidZp4KykPmtyx6tnH5ch3GiBhbztlyANm3prkg",
  },
  {
    step: "02",
    title: "POUR",
    text: "Add 2oz of hot water (175°F). Never use boiling water as it scorches the leaves.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDC6u8RwaUS8cYaUPSADVZJ_wDwilA8_llNGNFSTZ9YvbSdh7mB2dP52sH66GtFCbBvLJXrgLxa3VEurs09vsWvRvb-jA2QjKp-fMVREucyWKcfQ5KppHdHZVYlUM4UyzPcg9ZKAg52T4VVmFbtrWkrVRFR9E0n2ZZNUbW7o_TdO2qirpyj8VVEy9d76euzAmpUxhsYI6AoQQm4erAwuYC0xut0UTyT5ggKiAwwRl-K1npF_3VCms44tVAaK_HQuxYvHkUWTuyhvJw",
    offset: true,
  },
  {
    step: "03",
    title: "WHISK",
    text: "Whisk vigorously in a 'W' motion for 1 minute until a thick froth forms.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAOoZWiw0mgpqkuokJvZBm5Ux0rSl9-oI0rtvedtR3Z-yZl97MSu_ZfEWrB5EyRLzjb5Mm6d42Qqg21RNKRbWsrDXdsMoh7W_fYbpv2aTcpqUmNJ61Ru36UjnMLiN1pVVPdwJgPqVlNO6lySXnlEtKaINQwystVIKJ4j9H5itziWFRJuMe1M3Y9mqYNyiqHrrCGaCQgSy5ODAtiHiO1C5Bnvh9NxHQyOJWdi-7_aTTiZNR1l0-nI08hCYgaBmGNVwasXdYmzu1xK94",
  },
  {
    step: "04",
    title: "ENJOY",
    text: "Inhale the aroma, pause for a moment of silence, and enjoy your ritual.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDrkf1e2C_4l0ca9OOJerx1uo4FEI49D-GPCP4jC4G00VN_S8QKqXMRe3b-XCSBx8nUnN3neB3G6Og-MvRuAwJORiOd1zjJSFC9zIum_sAOtvZFcJ20KIY4ENRGsF6QMIR2Ww2y9Sina_wFan0I2d_Ush0d3s5Dw4_lLCDJuJziebzyMWqRh1Wz0mOUQKAUvk6dkxu4uy9x0uQZ2cZQcYoAmloBlsUWJmlIE9kS7yex73hOi8wGH1rDMd77kGtBcKl630lxjDC-zIA",
    offset: true,
  },
];

const reviews = [
  {
    name: "Elena G.",
    date: "MARCH 12, 2024",
    quote:
      "The colour alone is enough to wake you up. It's a vibrant, electric green I've never seen in shop-bought brands. The taste is remarkably smooth.",
  },
  {
    name: "Julian R.",
    date: "FEBRUARY 28, 2024",
    quote:
      "I've made this part of my morning meditation. The quality is exceptional. It whisks into a dense foam very easily. Definitely the best ceremonial grade I've tried.",
  },
];

export const metadata = {
  title: "Ceremonial Grade Matcha",
  description:
    "First-harvest ceremonial grade matcha stone-ground in Uji, Kyoto. Vibrant emerald colour, rich umami, and buttery texture. 30g.",
};

export default function ProductDetailPage() {
  return (
    <>
      <SiteHeader active="shop" />
      <main className="product-page">
        <section className="product-hero">
          <div className="product-grid">
            <div className="product-gallery">
              <div className="product-gallery-main">
                <img
                  src={product.image}
                  alt="Ceremonial Grade Matcha"
                />
              </div>
              <div className="floating-thumb">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSPN__6NuPFyeTfVhkMJkTIwOWb11XDdxpBaTSHwrLNqx2H2tvecYoV3KhuRMJrh0-GYy0oLj-kzPoGFVN4Au7-1Jp05UcMMlP4niF8tjpWdTzGPluZb4_SJGLhGvFMrQWH6TuB5waPPnZmnkfcC-RysZ1U68BfvtRw5zLavU1VmsnHc9DeEeWGffXgSgpBXwhiHNghIizKWrNhcfD4LFLSNJFG_FloIi93TZaeAxXVbb-1e8wckaDyWZySOaHagnbQ5GzYsMwPLY"
                  alt="Matcha preparation with whisk"
                />
              </div>
            </div>

            <div className="product-info-panel">
              <nav className="breadcrumbs" aria-label="Breadcrumb">
                <a href="/shop">Shop</a>
                <span aria-hidden="true">/</span>
                <a href="/products/ceremonial-grade" aria-current="page">Ceremonial Grade</a>
              </nav>
              <h1>Ceremonial Grade Matcha</h1>
              <div className="product-price-row">
                <span className="price-highlight">£48.00</span>
                <span>30g / 1.05 oz</span>
              </div>
              <p>
                Sourced from the misty hills of Uji, our first-harvest leaves are
                stone-ground into a vibrant, emerald powder. A ritual designed to quiet
                the mind and awaken the spirit.
              </p>

              <ProductActions product={product} />

              <div className="product-trust-list">
                <div>◌ Complimentary delivery on orders over £75</div>
                <div>◌ Certified organic and shade-grown</div>
              </div>
            </div>
          </div>
        </section>

        <section className="tonal-band tasting-band">
          <div className="tasting-grid">
            <article>
              <div className="tasting-icon">◌</div>
              <h3>Earthy</h3>
              <p>Grounded notes of moss, damp forest floor, and noble wood.</p>
            </article>
            <article>
              <div className="tasting-icon">◔</div>
              <h3>Sweet</h3>
              <p>A lingering finish of fresh grass and natural chlorophyll sweetness.</p>
            </article>
            <article>
              <div className="tasting-icon">◎</div>
              <h3>Umami</h3>
              <p>Rich, savoury depth that coats the palate like cream.</p>
            </article>
          </div>
        </section>

        <section className="ritual-section">
          <div className="section-split prep-header">
            <h2>The Morning Ritual</h2>
            <span className="eyebrow subtle">Guide to Perfection</span>
          </div>
          <div className="prep-grid">
            {ritualSteps.map((step) => (
              <article key={step.step} className={`prep-card ${step.offset ? "prep-offset" : ""}`}>
                <div className="prep-image">
                  <img src={step.image} alt={step.title} loading="lazy" />
                </div>
                <div className="prep-copy">
                  <span>{step.step}</span>
                  <div>
                    <h4>{step.title}</h4>
                    <p>{step.text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="reviews-band tonal-band">
          <div className="reviews-wrap">
            <div className="reviews-header">
              <h2>
                Shared <i>Experiences</i>
              </h2>
              <div className="stars-line" aria-label="5 out of 5 stars">★★★★★</div>
              <p>4.9 based on 1,240 reviews</p>
            </div>
            <div className="review-list">
              {reviews.map((review) => (
                <article key={review.name} className="review-card">
                  <div className="review-top">
                    <div>
                      <h4>{review.name}</h4>
                      <p>Verified Purchase</p>
                    </div>
                    <span>{review.date}</span>
                  </div>
                  <p>{review.quote}</p>
                </article>
              ))}
            </div>
            <div className="reviews-button-wrap">
              <a href="/#reviews" className="link-button">
                Read all reviews
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer variant="detail" />
    </>
  );
}
