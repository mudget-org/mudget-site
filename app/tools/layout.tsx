import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Financial Calculators & Tools | Mudget",
  description: "Access our collection of free financial calculators including mortgage, retirement, loan, and credit score calculators. Plan your financial future with accurate, easy-to-use tools.",
  keywords: [
    "financial calculators",
    "free financial tools",
    "mortgage calculator",
    "retirement calculator",
    "loan calculator",
    "credit score calculator",
    "financial planning tools",
    "budgeting calculators"
  ],
  authors: [{ name: "Mudget" }],
  creator: "Mudget",
  publisher: "Mudget",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mudget.finance/tools",
    title: "Free Financial Calculators & Tools",
    description: "Access our collection of free financial calculators for mortgage, retirement, loans, and more. Plan your financial future with accurate tools.",
    siteName: "Mudget",
    images: [
      {
        url: "https://mudget.finance/og-tools.png",
        width: 1200,
        height: 630,
        alt: "Mudget Financial Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Financial Calculators & Tools",
    description: "Access our collection of free financial calculators for mortgage, retirement, loans, and more.",
    images: ["https://mudget.finance/og-tools.png"],
    creator: "@mudgetfinance",
  },
  alternates: {
    canonical: "https://mudget.finance/tools",
  },
};

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}