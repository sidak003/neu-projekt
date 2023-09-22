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
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--inter",
});

export const metadata: Metadata = {
  title: "The Startup Company | Coming Fall 2023",
  description:
    "We help early-stage founders validate their ideas, craft winning business plans, and acquire their first 100 customers.",
  keywords: [
    "startup",
    "startup community",
    "business",
    "the startup company",
    "founder's community",
  ],
  robots: {
    index: true,
    follow: true,
    nocache: true,
    noimageindex: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
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
