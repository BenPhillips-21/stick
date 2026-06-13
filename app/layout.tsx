import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { getSiteUrl } from "../lib/site-url";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteTitle =
  "Stick Build Construction — Melbourne's Premier Construction & Carpentry Service";
const siteDescription =
  "Delivering high-quality construction, renovation, and carpentry services across Melbourne. From small repairs to full-scale builds, we handle everything from start to finish.";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: siteTitle,
  description: siteDescription,
  applicationName: "Stick Build Construction",
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: "Stick Build Construction",
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-7VEL6BXMB4" />
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-7VEL6BXMB4');
          gtag('config', 'AW-18189854724');
        ` }} />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
