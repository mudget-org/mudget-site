import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Mortgage Calculator - Calculate Monthly Payments & Amortization | Mudget",
  description: "Calculate your monthly mortgage payment, total interest, and view complete amortization schedule. Free mortgage calculator with CSV export and sharing features.",
  keywords: [
    "mortgage calculator",
    "home loan calculator", 
    "monthly mortgage payment",
    "amortization schedule",
    "home buying calculator",
    "mortgage payment calculator",
    "loan amortization",
    "home finance calculator"
  ],
  openGraph: {
    title: "Free Mortgage Calculator - Calculate Monthly Payments",
    description: "Calculate your monthly mortgage payment and total interest with our free mortgage calculator. Export results to CSV.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Mortgage Calculator - Calculate Monthly Payments",
    description: "Calculate your monthly mortgage payment and total interest with our free mortgage calculator.",
  },
};

export default function MortgageCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}