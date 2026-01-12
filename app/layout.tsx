import type { Metadata } from "next";
import { Cinzel, Courier_Prime } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  display: "swap",
});

const courierPrime = Courier_Prime({
  variable: "--font-courier-prime",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://velvet404-site.vercel.app"),
  title: "velvet404 | Official Site",
  description: "Official website of the AI Jazz Singer, velvet404.",
  openGraph: {
    title: "velvet404 | Official Site",
    description: "Official website of the AI Jazz Singer, velvet404.",
    url: "/",
    siteName: "velvet404",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "velvet404 - AI Jazz Singer",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "velvet404 | Official Site",
    description: "Official website of the AI Jazz Singer, velvet404.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${cinzel.variable} ${courierPrime.variable} antialiased bg-noir text-white overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
