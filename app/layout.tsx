import "./globals.css";
import type { Metadata } from "next";
import { Merriweather, Inter } from "next/font/google";

const merriweather = Merriweather({
  weight: ["700"],
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
    </html>
  );
}
