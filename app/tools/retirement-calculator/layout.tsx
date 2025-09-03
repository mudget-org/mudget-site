import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Retirement Calculator - Plan Your Future Savings | Mudget",
  description: "Calculate your retirement savings needs with our free retirement calculator. See projected growth, required contributions, and plan your financial future with detailed projections.",
  keywords: [
    "retirement calculator",
    "retirement planning",
    "401k calculator", 
    "retirement savings calculator",
    "pension calculator",
    "future savings calculator",
    "retirement income calculator",
    "compound interest calculator"
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
    url: "https://mudget.finance/tools/retirement-calculator",
    title: "Free Retirement Calculator - Plan Your Future Savings",
    description: "Calculate your retirement savings needs with our free retirement calculator. See projected growth and plan your financial future.",
    siteName: "Mudget",
    images: [
      {
        url: "https://mudget.finance/og-retirement-calculator.png",
        width: 1200,
        height: 630,
        alt: "Mudget Retirement Calculator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Retirement Calculator - Plan Your Future Savings",
    description: "Calculate your retirement savings needs with our free retirement calculator.",
    images: ["https://mudget.finance/og-retirement-calculator.png"],
    creator: "@mudgetfinance",
  },
  alternates: {
    canonical: "https://mudget.finance/tools/retirement-calculator",
  },
};

export default function RetirementCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}