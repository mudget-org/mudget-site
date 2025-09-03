import { Metadata } from 'next';
import { isFeatureEnabled } from '@/utils/featureFlags';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: "Why Choose Mudget - See How We Compare to Other Budgeting Apps",
  description: "Discover why couples and individuals choose Mudget over spreadsheets, Mint, YNAB, and other budgeting apps. Compare features, pricing, and see what makes Mudget different.",
  keywords: [
    "why choose Mudget",
    "Mudget vs spreadsheets",
    "budgeting app comparison",
    "best budgeting app for couples",
    "financial app comparison",
    "Mudget alternatives",
    "budgeting software comparison"
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
    url: "https://mudget.finance/why-mudget",
    title: "Why Choose Mudget - See How We Compare to Other Budgeting Apps",
    description: "Discover why couples choose Mudget over spreadsheets and other budgeting apps. Compare features and see what makes us different.",
    siteName: "Mudget",
    images: [
      {
        url: "https://mudget.finance/og-why-mudget.png",
        width: 1200,
        height: 630,
        alt: "Why Choose Mudget - Budgeting App Comparison",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Choose Mudget - See How We Compare to Other Budgeting Apps",
    description: "Discover why couples choose Mudget over spreadsheets and other budgeting apps.",
    images: ["https://mudget.finance/og-why-mudget.png"],
    creator: "@mudgetfinance",
  },
  alternates: {
    canonical: "https://mudget.finance/why-mudget",
  },
};

export default function WhyMudgetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // If the feature flag is disabled, return 404
  if (!isFeatureEnabled('showWhyMudgetSection')) {
    notFound();
  }

  return <>{children}</>;
}