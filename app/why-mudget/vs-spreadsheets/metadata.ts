import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mudget vs Spreadsheets - Why Modern Couples Need Better | Mudget Finance",
  description: "Stop wasting hours on Excel budgets. See why Mudget saves couples 6+ hours monthly with automated budgeting, real-time sync, and AI insights vs manual spreadsheets.",
  keywords: [
    "Mudget vs Excel",
    "budgeting app vs spreadsheet",
    "Excel budget alternative",
    "automated budgeting vs manual",
    "couples budgeting spreadsheet",
    "Google Sheets budget alternative",
    "spreadsheet replacement",
    "modern budgeting vs Excel",
    "budget app vs Excel",
    "couples budget software",
    "automated budget tracker",
    "Excel budget problems"
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
    canonical: "https://mudget.finance/why-mudget/vs-spreadsheets",
  },
  openGraph: {
    title: "Why Mudget Beats Spreadsheets for Couples Budgeting",
    description: "Stop wasting hours on Excel budgets. Mudget saves couples 6+ hours monthly with automated budgeting and real-time sync.",
    type: "website", 
    url: "https://mudget.finance/why-mudget/vs-spreadsheets",
    siteName: "Mudget Finance",
    locale: "en_US",
    images: [
      {
        url: "https://mudget.finance/social-banner.png",
        width: 1200,
        height: 630,
        alt: "Mudget vs Spreadsheets - Modern Budgeting for Couples",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Mudget Beats Spreadsheets for Couples Budgeting",
    description: "Stop wasting hours on Excel budgets. See why modern couples choose Mudget over manual spreadsheets.",
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