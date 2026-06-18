import type { Metadata } from "next";
import { Bebas_Neue, Geist, Geist_Mono, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vercel.app"),
  applicationName: "SmartArt Link Metals",
  title: "Wrought Iron Gate Designs & Material Supply Onitsha | Bulk Iron Yard",
  description:
    "Buy bulk wrought iron gate components, forged scrolls, spears, and bars direct from our Onitsha yard. Free local pickup and regional waybill to Asaba, Enugu, & Owerri.",
  keywords: [
    "wrought iron gate designs",
    "wrought iron supplier Onitsha",
    "buy iron gate components near me",
    "forged iron scrolls wholesale",
    "gate materials Anambra",
    "laser cutting Onitsha",
    "CNC cutting",
    "metal fabrication supply",
    "iron gate parts Asaba",
    "welding materials Enugu"
  ],
  verification: { google: "google28a3dde07e12c4a9" },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png", sizes: "96x96" }],
    apple: { url: "/favicon.png", sizes: "96x96" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "WholesaleStore",
    "name": "SmartArt Link Metals",
    "url": "https://vercel.app",
    "image": "https://vercel.app/favicon.png", 
    "telephone": "+2348068889460",
    "priceRange": "₦₦₦",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bridge Head Market Axis",
      "addressLocality": "Onitsha",
      "addressRegion": "Anambra State",
      "addressCountry": "NG"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "6.131847747859472",  
      "longitude": "6.77148740390141"  
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Anambra" },
      { "@type": "AdministrativeArea", "name": "Delta" },
      { "@type": "AdministrativeArea", "name": "Enugu" },
      { "@type": "AdministrativeArea", "name": "Imo" },
      { "@type": "AdministrativeArea", "name": "Rivers" },
      { "@type": "AdministrativeArea", "name": "Abia" }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body
        className={`font-sans antialiased ${inter.variable} ${bebasNeue.variable}`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
