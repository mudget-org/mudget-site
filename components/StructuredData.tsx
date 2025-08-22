import React from 'react';

interface OrganizationData {
  "@context": string;
  "@type": string;
  name: string;
  url: string;
  logo: string;
  description: string;
  sameAs: string[];
  contactPoint: {
    "@type": string;
    email: string;
  };
}

interface WebApplicationData {
  "@context": string;
  "@type": string;
  name: string;
  url: string;
  description: string;
  applicationCategory: string;
  operatingSystem: string;
  offers: {
    "@type": string;
    price: string;
    priceCurrency: string;
  };
}

interface CalculatorData {
  "@context": string;
  "@type": string;
  name: string;
  description: string;
  url: string;
  applicationCategory: string;
  operatingSystem: string;
}

export const OrganizationStructuredData = () => {
  const organizationData: OrganizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Mudget Finance",
    "url": "https://mudget.finance",
    "logo": "https://mudget.finance/Mudgee.svg",
    "description": "Financial Vitals Dashboard for Couples & Young Adults. Budget together with secure Plaid integration and AI-powered insights.",
    "sameAs": [
      "https://twitter.com/mudget_finance",
      "https://www.linkedin.com/in/mudget-finance/"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "admin@mudget.finance"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organizationData),
      }}
    />
  );
};

export const WebApplicationStructuredData = () => {
  const webAppData: WebApplicationData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Mudget - Financial Vitals Dashboard",
    "url": "https://mudget.finance",
    "description": "Budget together as a couple with Mudget's secure Plaid integration. AI-powered financial insights, goal tracking, and intuitive Financial Vitals dashboard.",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(webAppData),
      }}
    />
  );
};

export const CalculatorStructuredData = ({ 
  name, 
  description, 
  url 
}: { 
  name: string; 
  description: string; 
  url: string; 
}) => {
  const calculatorData = {
    "@context": "https://schema.org",
    "@type": ["WebApplication", "SoftwareApplication"],
    "name": name,
    "description": description,
    "url": url,
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web Browser",
    "browserRequirements": "Requires JavaScript. Requires HTML5.",
    "softwareVersion": "1.0",
    "datePublished": "2024-01-01",
    "dateModified": new Date().toISOString(),
    "author": {
      "@type": "Organization",
      "name": "Mudget Finance",
      "url": "https://mudget.finance"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Mudget Finance",
      "url": "https://mudget.finance",
      "logo": {
        "@type": "ImageObject",
        "url": "https://mudget.finance/Mudgee.svg"
      }
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "featureList": [
      "Free mortgage calculations",
      "Amortization schedule",
      "CSV export",
      "Shareable results",
      "Real-time calculations"
    ],
    "screenshot": "https://mudget.finance/social-banner.png",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "isPartOf": {
      "@type": "Website",
      "name": "Mudget Finance",
      "url": "https://mudget.finance"
    },
    "potentialAction": {
      "@type": "UseAction",
      "target": url,
      "object": {
        "@type": "WebApplication",
        "name": name
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(calculatorData),
      }}
    />
  );
};

export const FAQStructuredData = ({ 
  faqs 
}: { 
  faqs: Array<{ question: string; answer: string }> 
}) => {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqData),
      }}
    />
  );
};

export const BreadcrumbStructuredData = ({ 
  items 
}: { 
  items: Array<{ name: string; url: string }> 
}) => {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumbData),
      }}
    />
  );
};