import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ - Couples Budgeting Questions Answered | Mudget Finance",
  description: "Get answers to frequently asked questions about budgeting as a couple, using Mudget, financial planning, and money management. Expert advice for couples' finances.",
  keywords: [
    "couples budgeting FAQ",
    "budgeting questions answered",
    "financial planning for couples",
    "money management FAQ",
    "Mudget frequently asked questions",
    "couples finance questions",
    "joint budgeting help",
    "shared finances FAQ",
    "budgeting app questions",
    "financial advice couples",
    "money planning FAQ",
    "couples financial goals"
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
    canonical: "https://mudget.finance/faq",
  },
  openGraph: {
    title: "Couples Budgeting FAQ - Your Financial Questions Answered",
    description: "Get expert answers to your couples budgeting questions. Learn about financial planning, money management, and using Mudget to achieve your financial goals together.",
    type: "website",
    url: "https://mudget.finance/faq",
    siteName: "Mudget Finance",
    locale: "en_US",
    images: [
      {
        url: "https://mudget.finance/social-banner.png",
        width: 1200,
        height: 630,
        alt: "Mudget FAQ - Couples Budgeting Questions Answered",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Couples Budgeting FAQ - Your Financial Questions Answered",
    description: "Get expert answers to your couples budgeting questions. Financial planning advice and Mudget guidance.",
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
  category: "Financial FAQ",
};