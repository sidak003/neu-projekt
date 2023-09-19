import "./globals.css";
import type { Metadata } from "next";
import { Merriweather, Inter } from "next/font/google";
import Script from "next/script";

const merriweather = Merriweather({
  weight: ["700", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--merriweather",
});

const inter = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--inter",
});

export const metadata: Metadata = {
  title: "Coming Soon | The Startup Company",
  description:
    "We aim to build the largest and most ambitious startup community in India. Join the Startup Revolution Where Visionaries Unite",
  keywords: [
    "startup",
    "startup community",
    "the startup company",
    "founder's community",
  ],
  verification: {
    google: "u56UBUsH9bmU42AnL1cXuFLwOTcmf6n_b9QnpI8nwZ4",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${merriweather.variable} scroll-smooth`}
    >
      <body>{children}</body>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env["GA_MEASUREMENT_ID"]}`}
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', '${process.env["GA_MEASUREMENT_ID"]}');
        `}
      </Script>
    </html>
  );
}
