import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Mortgage Calculator - Calculate Monthly Payments & Amortization | Mudget",
  description: "Calculate your monthly mortgage payment, total interest, and view complete amortization schedule. Free mortgage calculator with CSV export, sharing features, and detailed payment breakdown.",
  keywords: [
    "mortgage calculator",
    "home loan calculator", 
    "monthly mortgage payment",
    "amortization schedule",
    "home buying calculator",
    "mortgage payment calculator",
    "loan amortization",
    "home finance calculator",
    "free mortgage calculator",
    "mortgage payment estimator"
  ],
  authors: [{ name: "Mudget" }],
  creator: "Mudget",
  publisher: "Mudget",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mudget.finance/tools/mortgage-calculator",
    title: "Free Mortgage Calculator - Calculate Monthly Payments & Amortization",
    description: "Calculate your monthly mortgage payment, total interest, and view complete amortization schedule. Free mortgage calculator with detailed breakdown.",
    siteName: "Mudget",
    images: [
      {
        url: "https://mudget.finance/og-mortgage-calculator.png",
        width: 1200,
        height: 630,
        alt: "Mudget Mortgage Calculator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Mortgage Calculator - Calculate Monthly Payments & Amortization",
    description: "Calculate your monthly mortgage payment and total interest with our free mortgage calculator. Export results to CSV.",
    images: ["https://mudget.finance/og-mortgage-calculator.png"],
    creator: "@mudgetfinance",
  },
  alternates: {
    canonical: "https://mudget.finance/tools/mortgage-calculator",
  },
};

export default function MortgageCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}