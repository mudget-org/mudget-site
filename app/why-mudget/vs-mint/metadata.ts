import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mudget vs Mint - Why We're Better for Couples | Mudget Finance",
  description: "Compare Mudget to Mint for couples budgeting. See why Mudget's shared financial tools and AI insights beat Mint's individual-focused approach for modern relationships.",
  keywords: [
    "Mudget vs Mint",
    "Mint alternative for couples",
    "shared budgeting vs Mint",
    "couples budgeting app",
    "Mint replacement",
    "why choose Mudget over Mint",
    "Mint vs Mudget comparison",
    "better than Mint",
    "couples finance app",
    "shared money management",
    "Mint competitor",
    "household budgeting vs Mint"
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
    canonical: "https://mudget.finance/why-mudget/vs-mint",
  },
  openGraph: {
    title: "Why Mudget Beats Mint for Couples Budgeting",
    description: "Discover why couples choose Mudget over Mint. Built for shared financial goals with AI insights and real-time sync.",
    type: "website",
    url: "https://mudget.finance/why-mudget/vs-mint",
    siteName: "Mudget Finance",
    locale: "en_US",
    images: [
      {
        url: "https://mudget.finance/social-banner.png",
        width: 1200,
        height: 630,
        alt: "Mudget vs Mint - Better Budgeting for Couples",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Mudget Beats Mint for Couples Budgeting",
    description: "See why modern couples choose Mudget over Mint for shared financial management.",
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