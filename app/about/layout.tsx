import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Mudget - Financial Vitals Dashboard for Modern Couples",
  description: "Learn about Mudget's mission to help couples take control of their finances together. Discover our story, team, and why we built the financial dashboard you deserve.",
  keywords: [
    "about Mudget",
    "financial dashboard",
    "couples budgeting app",
    "financial planning for couples",
    "budgeting app founders",
    "financial technology",
    "personal finance management"
  ],
  authors: [{ name: "Mudget Team" }],
  creator: "Mudget",
  publisher: "Mudget",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mudget.finance/about",
    title: "About Mudget - Financial Vitals Dashboard for Modern Couples",
    description: "Learn about Mudget's mission to help couples take control of their finances together. Discover our story and why we built the financial dashboard you deserve.",
    siteName: "Mudget",
    images: [
      {
        url: "https://mudget.finance/og-about.png",
        width: 1200,
        height: 630,
        alt: "About Mudget - Our Mission and Story",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Mudget - Financial Vitals Dashboard for Modern Couples",
    description: "Learn about Mudget's mission to help couples take control of their finances together.",
    images: ["https://mudget.finance/og-about.png"],
    creator: "@mudgetfinance",
  },
  alternates: {
    canonical: "https://mudget.finance/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}