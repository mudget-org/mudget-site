import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Retirement Calculator - Plan Your Financial Future | Mudget",
  description: "Calculate retirement savings with compound interest projections. Free retirement planning calculator with yearly breakdown and CSV export features.",
  keywords: [
    "retirement calculator",
    "retirement planning",
    "401k calculator",
    "retirement savings calculator",
    "compound interest calculator",
    "financial planning",
    "retirement projections",
    "savings calculator"
  ],
  openGraph: {
    title: "Free Retirement Calculator - Plan Your Financial Future",
    description: "Plan your retirement with our free calculator. See how your savings grow with compound interest over time.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Retirement Calculator - Plan Your Financial Future",
    description: "Plan your retirement with our free calculator. See how your savings grow with compound interest.",
  },
};

export default function RetirementCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}