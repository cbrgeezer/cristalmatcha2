import "./globals.css";
import Providers from "./providers";

export const metadata = {
  metadataBase: new URL("https://cristalmatcha.com"),
  title: {
    default: "Cristal Matcha | Premium Japanese Matcha",
    template: "%s | Cristal Matcha",
  },
  description:
    "Premium Japanese matcha in Norwich. Discover ceremonial grade tea, tea education, and the Cristal Matcha collection.",
  openGraph: {
    siteName: "Cristal Matcha",
    locale: "en_GB",
    type: "website",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
