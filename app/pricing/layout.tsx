import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing - Mudget | Simple Plans for Couples & Individuals",
  description: "Choose the perfect Mudget plan for your financial journey. Start your 34-day free trial today. Built for couples with household budgeting, automatic bank sync, and AI insights.",
  keywords: [
    "budgeting app pricing",
    "couples budgeting cost",
    "household budget app price",
    "financial app subscription",
    "budget tracker pricing",
    "plaid financial app",
    "couples money management cost",
    "personal finance app pricing"
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
    url: "https://mudget.finance/pricing",
    title: "Pricing - Mudget | Simple Plans for Couples & Individuals",
    description: "Choose the perfect Mudget plan for your financial journey. Start your 34-day free trial today. Built for couples with household budgeting, automatic bank sync, and AI insights.",
    siteName: "Mudget",
    images: [
      {
        url: "https://mudget.finance/og-pricing.png", // You'll need to create this image
        width: 1200,
        height: 630,
        alt: "Mudget Pricing Plans",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing - Mudget | Simple Plans for Couples & Individuals",
    description: "Choose the perfect Mudget plan for your financial journey. Start your 34-day free trial today.",
    images: ["https://mudget.finance/og-pricing.png"], // You'll need to create this image
    creator: "@mudgetfinance",
  },
  alternates: {
    canonical: "https://mudget.finance/pricing",
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}