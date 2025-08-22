import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Mortgage Calculator - Calculate Monthly Payments & Amortization | Mudget",
  description: "Calculate your monthly mortgage payment, total interest, and view complete amortization schedule. Free mortgage calculator with CSV export and sharing features. Perfect for home buyers and real estate professionals.",
  keywords: [
    "mortgage calculator",
    "home loan calculator", 
    "monthly mortgage payment",
    "amortization schedule",
    "home buying calculator",
    "mortgage payment calculator",
    "loan amortization",
    "home finance calculator",
    "real estate calculator",
    "home affordability calculator",
    "mortgage estimator",
    "home loan amortization"
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
    canonical: "https://mudget.finance/tools/mortgage-calculator",
  },
  openGraph: {
    title: "Free Mortgage Calculator - Calculate Monthly Payments & Amortization",
    description: "Calculate your monthly mortgage payment, total interest, and view complete amortization schedule. Free mortgage calculator with CSV export and sharing features.",
    type: "website",
    url: "https://mudget.finance/tools/mortgage-calculator",
    siteName: "Mudget Finance Tools",
    locale: "en_US",
    images: [
      {
        url: "https://mudget.finance/social-banner.png",
        width: 1200,
        height: 630,
        alt: "Mudget Mortgage Calculator - Free Home Loan Calculator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Mortgage Calculator - Calculate Monthly Payments",
    description: "Calculate your monthly mortgage payment and total interest with our free mortgage calculator. Export results to CSV.",
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
  category: "Finance Tools",
};