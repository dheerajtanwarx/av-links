import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter, Dancing_Script } from "next/font/google";
import { business } from "@/config/business";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const serif = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const script = Dancing_Script({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${business.name} — ${business.tagline}`,
    template: `%s — ${business.name}`,
  },
  description: business.description,
  applicationName: business.name,
  keywords: [
    "Jaipuri Odhani",
    "Rajasthani Odhani",
    "Jaipur dupatta",
    "handcrafted odhani",
    business.name,
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: business.name,
    title: `${business.name} — ${business.tagline}`,
    description: business.description,
    url: SITE_URL,
  },
  twitter: {
    card: "summary",
    title: `${business.name} — ${business.tagline}`,
    description: business.description,
  },
  icons: {
    icon: business.logo,
    apple: business.logo,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#FBF6EE",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${sans.variable} ${script.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
