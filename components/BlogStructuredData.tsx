import Script from 'next/script';

interface BlogStructuredDataProps {
  title: string;
  description: string;
  author: string;
  publishedAt: string;
  url: string;
  image?: string;
  tags?: string[];
}

export function BlogStructuredData({ 
  title, 
  description, 
  author, 
  publishedAt, 
  url, 
  image,
  tags 
}: BlogStructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: description,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Mudget',
      logo: {
        '@type': 'ImageObject',
        url: 'https://mudget.finance/logo.png',
      },
    },
    datePublished: publishedAt,
    dateModified: publishedAt,
    url: url,
    image: image ? `https://mudget.finance${image}` : 'https://mudget.finance/og-blog.jpg',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    keywords: tags?.join(', ') || 'budgeting, personal finance, money management',
    articleSection: 'Personal Finance',
  };

  return (
    <Script
      id="blog-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}

interface BlogListingStructuredDataProps {
  blogs: Array<{
    title: string;
    description: string;
    author: string;
    publishedAt: string | Date;
    url: string;
    image?: { src: string };
    tags?: string[];
  }>;
}

export function BlogListingStructuredData({ blogs }: BlogListingStructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Mudget Financial Blog',
    description: 'Expert insights, tips, and guides to help couples and individuals master their finances',
    url: 'https://mudget.finance/blog',
    publisher: {
      '@type': 'Organization',
      name: 'Mudget',
      logo: {
        '@type': 'ImageObject',
        url: 'https://mudget.finance/logo.png',
      },
    },
    blogPost: blogs.slice(0, 10).map(blog => ({
      '@type': 'BlogPosting',
      headline: blog.title,
      description: blog.description,
      author: {
        '@type': 'Person',
        name: blog.author,
      },
      datePublished: typeof blog.publishedAt === 'string' ? blog.publishedAt : blog.publishedAt.toISOString(),
      url: `https://mudget.finance${blog.url}`,
      image: blog.image ? `https://mudget.finance${blog.image.src}` : 'https://mudget.finance/og-blog.jpg',
    })),
  };

  return (
    <Script
      id="blog-listing-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}