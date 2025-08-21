import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Loan Calculator - Calculate Monthly Payments & Interest | Mudget",
  description: "Calculate loan payments for personal, auto, student, and business loans. Free loan calculator with amortization schedule and CSV export.",
  keywords: [
    "loan calculator",
    "personal loan calculator",
    "auto loan calculator",
    "student loan calculator",
    "business loan calculator",
    "loan payment calculator",
    "loan amortization",
    "loan interest calculator"
  ],
  openGraph: {
    title: "Free Loan Calculator - Calculate Monthly Payments & Interest",
    description: "Calculate loan payments for personal, auto, student, and business loans with our free loan calculator.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Loan Calculator - Calculate Monthly Payments",
    description: "Calculate loan payments for personal, auto, student, and business loans with our free calculator.",
  },
};

export default function LoanCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}