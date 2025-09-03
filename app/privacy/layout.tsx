import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Mudget | How We Protect Your Financial Data",
  description: "Read Mudget's comprehensive privacy policy. Learn how we protect your financial information, use bank-level security, and respect your privacy while helping you budget.",
  keywords: [
    "Mudget privacy policy",
    "financial data privacy",
    "budgeting app security",
    "data protection",
    "financial privacy",
    "secure budgeting"
  ],
  authors: [{ name: "Mudget Legal Team" }],
  creator: "Mudget",
  publisher: "Mudget",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mudget.finance/privacy",
    title: "Privacy Policy - Mudget | How We Protect Your Financial Data",
    description: "Read Mudget's comprehensive privacy policy and learn how we protect your financial information with bank-level security.",
    siteName: "Mudget",
    images: [
      {
        url: "https://mudget.finance/og-privacy.png",
        width: 1200,
        height: 630,
        alt: "Mudget Privacy Policy - Your Data Protection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy - Mudget | Financial Data Protection",
    description: "Read Mudget's comprehensive privacy policy and learn how we protect your financial information.",
    images: ["https://mudget.finance/og-privacy.png"],
    creator: "@mudgetfinance",
  },
  alternates: {
    canonical: "https://mudget.finance/privacy",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}