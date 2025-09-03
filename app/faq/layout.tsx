import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions - Mudget FAQ | Budgeting App Support",
  description: "Get answers to common questions about Mudget's budgeting app, features, pricing, security, and account management. Find help and support for couples budgeting.",
  keywords: [
    "Mudget FAQ",
    "budgeting app help",
    "financial dashboard support",
    "couples budgeting questions",
    "Mudget support",
    "budgeting app troubleshooting",
    "financial planning help"
  ],
  authors: [{ name: "Mudget Support Team" }],
  creator: "Mudget",
  publisher: "Mudget",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mudget.finance/faq",
    title: "Frequently Asked Questions - Mudget FAQ | Budgeting App Support",
    description: "Get answers to common questions about Mudget's budgeting app, features, pricing, security, and account management.",
    siteName: "Mudget",
    images: [
      {
        url: "https://mudget.finance/og-faq.png",
        width: 1200,
        height: 630,
        alt: "Mudget FAQ - Get Help and Support",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frequently Asked Questions - Mudget FAQ",
    description: "Get answers to common questions about Mudget's budgeting app, features, and support.",
    images: ["https://mudget.finance/og-faq.png"],
    creator: "@mudgetfinance",
  },
  alternates: {
    canonical: "https://mudget.finance/faq",
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}