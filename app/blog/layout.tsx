import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mudget Financial Blog - Expert Money Tips & Guides for Couples',
  description: 'Expert insights, tips, and guides to help couples and individuals master their finances. Read about budgeting, saving, debt management, retirement planning, and more.',
  keywords: [
    'budgeting blog', 
    'personal finance tips', 
    'couples budgeting', 
    'financial planning', 
    'money management',
    'budgeting for couples',
    'financial advice',
    'money tips',
    'debt payoff strategies',
    'retirement planning',
    'emergency fund tips'
  ],
  authors: [{ name: 'Mudget Finance Team' }],
  creator: 'Mudget Finance',
  publisher: 'Mudget Finance',
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
  openGraph: {
    title: 'Mudget Financial Blog - Expert Money Tips & Guides for Couples',
    description: 'Expert insights, tips, and guides to help couples and individuals master their finances. Read about budgeting, saving, and more.',
    type: 'website',
    locale: 'en_US',
    url: 'https://mudget.finance/blog',
    siteName: 'Mudget',
    images: [
      {
        url: 'https://mudget.finance/og-blog.png',
        width: 1200,
        height: 630,
        alt: 'Mudget Financial Blog - Expert Money Tips',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mudget Financial Blog - Expert Money Tips & Guides for Couples',
    description: 'Expert insights, tips, and guides to help couples and individuals master their finances.',
    images: ['https://mudget.finance/og-blog.png'],
    creator: '@mudgetfinance',
    site: '@mudgetfinance',
  },
  alternates: {
    canonical: 'https://mudget.finance/blog',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}