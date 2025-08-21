import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mudget Financial Blog - Expert Money Tips & Guides',
  description: 'Expert insights, tips, and guides to help couples and individuals master their finances. Read about budgeting, saving, debt management, and more.',
  keywords: ['budgeting blog', 'personal finance tips', 'couples budgeting', 'financial planning', 'money management'],
  openGraph: {
    title: 'Mudget Financial Blog - Expert Money Tips & Guides',
    description: 'Expert insights, tips, and guides to help couples and individuals master their finances.',
    type: 'website',
    url: 'https://mudget.finance/blog',
    images: [
      {
        url: '/og-blog.jpg',
        width: 1200,
        height: 630,
        alt: 'Mudget Financial Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mudget Financial Blog - Expert Money Tips & Guides',
    description: 'Expert insights, tips, and guides to help couples and individuals master their finances.',
    images: ['/og-blog.jpg'],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}