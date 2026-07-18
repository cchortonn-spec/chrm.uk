import type { Metadata } from "next";
import Script from "next/script";
import { Manrope, Outfit } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import Analytics from "@/components/Analytics";
import JsonLd from "@/components/JsonLd";
import { generateMetadata as createMetadata } from "@/lib/seo";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = createMetadata({
  title: "CHRM UK | Chrome Delete Specialists",
  description:
    "Mobile chrome delete specialists. South Yorkshire based, UK-wide. A cleaner, more refined finish — OEM+ exterior trim styling.",
  canonicalPath: "/",
});

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  name: "CHRM UK",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://chrmuk.com",
  email: "info@chrmuk.com",
  description:
    "Mobile chrome delete specialists — South Yorkshire based, UK-wide.",
  areaServed: {
    "@type": "Country",
    name: "United Kingdom",
  },
  address: {
    "@type": "PostalAddress",
    addressRegion: "South Yorkshire",
    addressCountry: "GB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${outfit.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        {/* Consent Mode v2 — denied by default before any analytics tags */}
        <Script id="consent-mode-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              ad_storage: 'denied',
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              analytics_storage: 'denied',
              wait_for_update: 500
            });
          `}
        </Script>

        <JsonLd data={localBusinessSchema} />
        <Analytics />

        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
