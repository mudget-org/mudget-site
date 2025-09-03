import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Loan Calculator - Calculate Monthly Payments & Interest | Mudget",
  description: "Calculate loan payments for personal, auto, student, and business loans. Free loan calculator with amortization schedule, payment breakdown, and CSV export.",
  keywords: [
    "loan calculator",
    "personal loan calculator", 
    "auto loan calculator",
    "student loan calculator",
    "business loan calculator",
    "loan payment calculator",
    "loan amortization calculator",
    "loan interest calculator",
    "free loan calculator",
    "monthly payment calculator"
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
    url: "https://mudget.finance/tools/loan-calculator",
    title: "Free Loan Calculator - Calculate Monthly Payments & Interest",
    description: "Calculate loan payments for personal, auto, student, and business loans with our free loan calculator. Get detailed amortization schedules and payment breakdowns.",
    siteName: "Mudget",
    images: [
      {
        url: "https://mudget.finance/og-loan-calculator.png",
        width: 1200,
        height: 630,
        alt: "Mudget Loan Calculator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Loan Calculator - Calculate Monthly Payments & Interest",
    description: "Calculate loan payments for personal, auto, student, and business loans with our free loan calculator.",
    images: ["https://mudget.finance/og-loan-calculator.png"],
    creator: "@mudgetfinance",
  },
  alternates: {
    canonical: "https://mudget.finance/tools/loan-calculator",
  },
};

export default function LoanCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}