import type { Metadata } from "next";
import "./globals.css";
import { CSPostHogProvider } from "@/components/PostHogProvider";
import React from "react";

export const metadata: Metadata = {
    title: "Mudget - Simplify Your Finances",
    description:
        "Budget, track, and improve your financial well-being with our user-friendly app and AI-powered insights.",
    openGraph: {
        title: "Mudget - Simplify Your Finances",
        description:
            "Budget, track, and improve your financial well-being with our user-friendly app and AI-powered insights.",
        url: "https://mudget.finance",
        siteName: "Mudget",
        images: [
            {
                url: "https://mudget.finance/og-image.jpg",
                width: 1200,
                height: 630,
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Mudget - Simplify Your Finances",
        description:
            "Budget, track, and improve your financial well-being with our user-friendly app and AI-powered insights.",
        images: ["https://mudget.finance/twitter-image.jpg"],
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
                <body>{children}</body>
            </html>
        </CSPostHogProvider>
    );
}
