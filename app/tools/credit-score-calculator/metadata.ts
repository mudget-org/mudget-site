import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Credit Score Calculator - Estimate Your FICO Score | Mudget Finance",
  description: "Calculate and improve your credit score with our free FICO score calculator. Get personalized recommendations to boost your credit rating and track your progress over time.",
  keywords: [
    "credit score calculator",
    "FICO score calculator",
    "free credit score",
    "credit score estimator",
    "credit rating calculator",
    "improve credit score",
    "credit score factors",
    "credit utilization calculator",
    "credit history calculator",
    "credit score improvement",
    "credit score simulation",
    "credit report calculator"
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
    canonical: "https://mudget.finance/tools/credit-score-calculator",
  },
  openGraph: {
    title: "Free Credit Score Calculator - Estimate Your FICO Score",
    description: "Calculate your credit score and get personalized improvement recommendations. Free FICO score estimator with factor breakdown and timeline projections.",
    type: "website",
    url: "https://mudget.finance/tools/credit-score-calculator",
    siteName: "Mudget Finance",
    locale: "en_US",
    images: [
      {
        url: "https://mudget.finance/social-banner.png",
        width: 1200,
        height: 630,
        alt: "Free Credit Score Calculator - Mudget Finance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Credit Score Calculator - Estimate Your FICO Score",
    description: "Calculate your credit score and get personalized improvement recommendations with our free FICO score estimator.",
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