import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mudget vs YNAB - Better Budgeting for Couples | Mudget Finance",
  description: "Compare Mudget to YNAB for couples budgeting. See why Mudget's AI insights and shared financial tools beat YNAB's complex envelope system for modern relationships.",
  keywords: [
    "Mudget vs YNAB",
    "YNAB alternative for couples",
    "shared budgeting vs YNAB",
    "couples budgeting app",
    "YNAB replacement",
    "why choose Mudget over YNAB",
    "YNAB vs Mudget comparison",
    "better than YNAB",
    "couples finance app",
    "shared money management",
    "YNAB competitor",
    "envelope budgeting alternative"
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
    canonical: "https://mudget.finance/why-mudget/vs-ynab",
  },
  openGraph: {
    title: "Why Mudget Beats YNAB for Couples Budgeting",
    description: "Discover why couples choose Mudget over YNAB. Simpler budgeting with AI insights vs complex envelope system.",
    type: "website",
    url: "https://mudget.finance/why-mudget/vs-ynab",
    siteName: "Mudget Finance",
    locale: "en_US",
    images: [
      {
        url: "https://mudget.finance/social-banner.png",
        width: 1200,
        height: 630,
        alt: "Mudget vs YNAB - Better Budgeting for Couples",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Mudget Beats YNAB for Couples Budgeting",
    description: "See why modern couples choose Mudget over YNAB for shared financial management.",
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
  category: "Comparison",
};