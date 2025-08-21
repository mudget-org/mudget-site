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
  const calculatorData: CalculatorData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": name,
    "description": description,
    "url": url,
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web Browser"
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