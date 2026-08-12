import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shimmeur — Signature Spaces. Lasting Impressions.",
  description:
    "Shimmeur is a property lifestyle consulting and end-to-end renovation management service led by Natalie Phillips. Design-led renovations that unlock a property's value before sale.",
  metadataBase: new URL("https://www.shimmeur.co"),
  alternates: {
    canonical: "https://www.shimmeur.co",
  },
  openGraph: {
    title: "Shimmeur — Signature Spaces. Lasting Impressions.",
    description:
      "Property lifestyle consulting and end-to-end renovation management. Led by Natalie Phillips.",
    url: "https://www.shimmeur.co",
    siteName: "Shimmeur",
    type: "website",
    locale: "en_AU",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-AU">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=DM+Sans:wght@300;400;500;600;700&display=swap"
        />
      </head>
      <body className="bg-shimmeur-cream text-shimmeur-charcoal antialiased">
        {children}
      </body>
    </html>
  );
}
