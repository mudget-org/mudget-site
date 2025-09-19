import type { Metadata } from "next";
import "./globals.css";
import { CSPostHogProvider } from "@/components/PostHogProvider";
import { OrganizationStructuredData, WebApplicationStructuredData } from "@/components/StructuredData";
import CookieConsent from "@/components/CookieConsent";
import React from "react";
import siteMetadata from "../utils/siteMetaData";

export const metadata: Metadata = {
    metadataBase: new URL(siteMetadata.siteUrl),
    title: "Mudget - Financial Vitals Dashboard for Couples & Individuals",
    description:
        "Budget together as a couple with Mudget's secure Plaid integration. AI-powered financial insights, goal tracking, and intuitive Financial Vitals dashboard. Perfect for couples and individuals taking control of their finances.",
    keywords: [
        "budgeting app", 
        "financial planning", 
        "couples budgeting", 
        "personal finance", 
        "financial goals", 
        "AI financial assistant",
        "Plaid integration",
        "financial dashboard",
        "money management",
        "budget tracker"
    ],
    authors: [{ name: "Mudget Finance" }],
    openGraph: {
        title: "Mudget - Financial Vitals Dashboard for Couples & Individuals",
        description:
            "Budget together as a couple with Mudget's secure Plaid integration. AI-powered financial insights, goal tracking, and intuitive Financial Vitals dashboard.",
        url: "https://mudget.finance",
        siteName: "Mudget",
        images: [
            {
                url: "https://mudget.finance/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Mudget Financial Dashboard - Budget Together as a Couple",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    twitter: {
        card: "summary_large_image",
        title: "Mudget - Financial Vitals Dashboard for Couples & Individuals",
        description:
            "Budget together as a couple with Mudget's secure Plaid integration. AI-powered financial insights and goal tracking.",
        images: ["https://mudget.finance/twitter-image.jpg"],
        creator: "@mudget_finance",
    },
    alternates: {
        canonical: "https://mudget.finance",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <CSPostHogProvider>
            <html lang="en">
                <head>
                    <OrganizationStructuredData />
                    <WebApplicationStructuredData />
                </head>
                <body>
                    {children}
                    <CookieConsent />
                </body>
            </html>
        </CSPostHogProvider>
    );
}
