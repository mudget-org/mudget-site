import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mudget vs EveryDollar - Better Budgeting for Couples | Mudget Finance",
  description: "Compare Mudget to EveryDollar for couples budgeting. See why Mudget's shared financial tools and AI insights beat EveryDollar's individual-focused approach for modern relationships.",
  keywords: [
    "Mudget vs EveryDollar",
    "EveryDollar alternative for couples",
    "shared budgeting vs EveryDollar",
    "couples budgeting app",
    "EveryDollar replacement",
    "why choose Mudget over EveryDollar",
    "EveryDollar vs Mudget comparison",
    "better than EveryDollar",
    "couples finance app",
    "shared money management",
    "EveryDollar competitor",
    "Dave Ramsey alternative"
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
    canonical: "https://mudget.finance/why-mudget/vs-everydollar",
  },
  openGraph: {
    title: "Why Mudget Beats EveryDollar for Couples Budgeting",
    description: "Discover why couples choose Mudget over EveryDollar. Built for shared financial goals with AI insights and modern features.",
    type: "website",
    url: "https://mudget.finance/why-mudget/vs-everydollar",
    siteName: "Mudget Finance",
    locale: "en_US",
    images: [
      {
        url: "https://mudget.finance/social-banner.png",
        width: 1200,
        height: 630,
        alt: "Mudget vs EveryDollar - Better Budgeting for Couples",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Mudget Beats EveryDollar for Couples Budgeting",
    description: "See why modern couples choose Mudget over EveryDollar for shared financial management.",
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