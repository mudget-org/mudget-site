import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Insurance Coverage Calculator - Life, Health, Auto & Home | Mudget Finance",
  description: "Calculate how much insurance coverage you need with our comprehensive calculator. Get personalized recommendations for life, health, auto, and home insurance to protect your financial future.",
  keywords: [
    "insurance calculator",
    "insurance coverage calculator",
    "life insurance calculator",
    "health insurance calculator",
    "auto insurance calculator",
    "home insurance calculator",
    "insurance needs analysis",
    "coverage amount calculator",
    "insurance protection calculator",
    "family insurance calculator",
    "financial protection",
    "insurance planning tool",
    "risk assessment calculator"
  ],
  authors: [{ name: "Mudget Finance Team" }],
  creator: "Mudget Finance",
  publisher: "Mudget Finance",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://mudget.finance"),
  alternates: {
    canonical: "https://mudget.finance/tools/insurance-calculator",
  },
  openGraph: {
    title: "Free Insurance Coverage Calculator - Protect Your Financial Future",
    description: "Calculate how much life, health, auto, and home insurance coverage you need. Get personalized recommendations based on your financial situation and family needs.",
    type: "website",
    url: "https://mudget.finance/tools/insurance-calculator",
    siteName: "Mudget Finance",
    locale: "en_US",
    images: [
      {
        url: "https://mudget.finance/social-banner.png",
        width: 1200,
        height: 630,
        alt: "Free Insurance Coverage Calculator - Mudget Finance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Insurance Coverage Calculator - Protect Your Financial Future",
    description: "Calculate how much insurance coverage you need with our comprehensive calculator for life, health, auto, and home insurance.",
    images: ["https://mudget.finance/social-banner.png"],
    creator: "@mudget_finance",
    site: "@mudget_finance",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Financial Tools",
};