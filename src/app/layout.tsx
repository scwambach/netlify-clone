import { Figtree, Instrument_Sans, Martian_Mono } from "next/font/google";
import type { Metadata } from "next";
import "./normalize.scss";
import "./globals.scss";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Not Netlify",
  description:
    "You might think it's Netlify, but it's not Netlify. It's my resume. Okay?!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${martianMono.variable} ${figtree.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
