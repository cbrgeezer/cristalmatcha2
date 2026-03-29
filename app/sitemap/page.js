import Link from "next/link";

export default function SitemapPage() {
  const links = [
    ["/", "Home"],
    ["/shop", "Shop"],
    ["/products/ceremonial-grade", "Product Detail"],
    ["/cart", "Basket"],
  ];

  return (
    <main className="simple-sitemap-page">
      <div className="simple-sitemap-card">
        <h1>Cristal Matcha Sitemap</h1>
        <ul>
          {links.map(([href, label]) => (
            <li key={href}>
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
