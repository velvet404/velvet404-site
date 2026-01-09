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
  title: "velvet404 | Official Site",
  description: "Official website of the AI Jazz Singer, velvet404.",
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
