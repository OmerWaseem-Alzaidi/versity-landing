import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Versity - Your University Community, Verified",
  description: "Connect with verified students. Find events, housing, and deals - exclusively for university students.",
  keywords: ["student", "university", "events", "housing", "marketplace", "verified", "campus", "college"],

  // Open Graph - for link previews (WhatsApp, Facebook, LinkedIn, etc.)
  openGraph: {
    title: "Versity - Your University Community, Verified",
    description: "Connect with verified students. Find events, housing, and deals - exclusively for university students.",
    url: "https://versityapp.com",
    siteName: "Versity",
    images: [
      {
        url: "https://versityapp.com/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Versity - Your University Community, Verified",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Versity - Your University Community, Verified",
    description: "Connect with verified students. Find events, housing, and deals - exclusively for university students.",
    images: ["https://versityapp.com/og-image.jpeg"],
  },

  // Favicon
  icons: {
    icon: "/logos/logo_purple_only.png",
    apple: "/logos/logo_purple_only.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
