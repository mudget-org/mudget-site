import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Mudget | User Agreement and Terms",
  description: "Read Mudget's terms of service and user agreement. Understand your rights and responsibilities when using our financial dashboard and budgeting services.",
  keywords: [
    "Mudget terms of service",
    "user agreement",
    "budgeting app terms",
    "financial app terms",
    "service agreement",
    "terms and conditions"
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
    url: "https://mudget.finance/terms",
    title: "Terms of Service - Mudget | User Agreement and Terms",
    description: "Read Mudget's terms of service and user agreement. Understand your rights and responsibilities when using our financial services.",
    siteName: "Mudget",
    images: [
      {
        url: "https://mudget.finance/og-terms.png",
        width: 1200,
        height: 630,
        alt: "Mudget Terms of Service - User Agreement",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service - Mudget | User Agreement",
    description: "Read Mudget's terms of service and user agreement for our financial dashboard services.",
    images: ["https://mudget.finance/og-terms.png"],
    creator: "@mudgetfinance",
  },
  alternates: {
    canonical: "https://mudget.finance/terms",
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}