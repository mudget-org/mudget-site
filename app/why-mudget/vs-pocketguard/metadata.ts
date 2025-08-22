import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mudget vs PocketGuard - Better Budgeting for Couples | Mudget Finance",
  description: "Compare Mudget to PocketGuard for couples budgeting. See why Mudget's shared financial tools and comprehensive features beat PocketGuard's simple spending tracking.",
  keywords: [
    "Mudget vs PocketGuard",
    "PocketGuard alternative for couples",
    "shared budgeting vs PocketGuard",
    "couples budgeting app",
    "PocketGuard replacement",
    "why choose Mudget over PocketGuard",
    "PocketGuard vs Mudget comparison",
    "better than PocketGuard",
    "couples finance app",
    "shared money management",
    "PocketGuard competitor",
    "spending tracker alternative"
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
    canonical: "https://mudget.finance/why-mudget/vs-pocketguard",
  },
  openGraph: {
    title: "Why Mudget Beats PocketGuard for Couples Budgeting",
    description: "Discover why couples choose Mudget over PocketGuard. Comprehensive financial management vs simple spending tracking.",
    type: "website",
    url: "https://mudget.finance/why-mudget/vs-pocketguard",
    siteName: "Mudget Finance",
    locale: "en_US",
    images: [
      {
        url: "https://mudget.finance/social-banner.png",
        width: 1200,
        height: 630,
        alt: "Mudget vs PocketGuard - Better Budgeting for Couples",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Mudget Beats PocketGuard for Couples Budgeting",
    description: "See why modern couples choose Mudget over PocketGuard for comprehensive financial management.",
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