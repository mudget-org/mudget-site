import type { Metadata } from "next";
import "./globals.css";
import { CSPostHogProvider } from "@/components/PostHogProvider";
import { OrganizationStructuredData, WebApplicationStructuredData } from "@/components/StructuredData";
import CookieConsent from "@/components/CookieConsent";
import React from "react";
import siteMetadata from "../utils/siteMetaData";

export const metadata: Metadata = {
    metadataBase: new URL(siteMetadata.siteUrl),
    title: "Mudget - AI Budget App for Couples Investing Together",
    description:
        "The AI-powered budget app designed for couples who invest. Track expenses, manage investment goals, and get financial education together. Smart budgeting with secure bank integration for wealth-building couples.",
    keywords: [
        "mudget",
        "mudget finance", 
        "ai budgeting",
        "ai finance",
        "couples budgeting",
        "couples investing",
        "investment budgeting",
        "budget app",
        "financial education",
        "finance blog",
        "wealth building couples",
        "investment planning couples",
        "budgeting app", 
        "financial planning", 
        "AI financial assistant",
        "money management",
        "budget tracker",
        "couples financial goals",
        "personal finance",
        "financial goals",
        "ambient agents",
        "machine learning forecasting",
        "AI workflows",
        "conversational AI",
        "MCP financial technology"
    ],
    authors: [{ name: "Mudget Finance" }],
    openGraph: {
        title: "Mudget - AI Budget App for Couples Investing Together",
        description:
            "The AI-powered budget app designed for couples who invest. Track expenses, manage investment goals, and get financial education together.",
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
        title: "Mudget - AI Budget App for Couples Investing Together",
        description:
            "The AI-powered budget app designed for couples who invest. Track expenses, manage investment goals together.",
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
