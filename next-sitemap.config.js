const siteMetadata = require("./utils/siteMetaData.js");

module.exports = {
  siteUrl: siteMetadata.siteUrl,
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  generateIndexSitemap: false,
  exclude: [
    '/api/*',
    '/admin/*', 
    '/_next/*',
    '/404',
    '/500'
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        crawlDelay: 1,
      },
      {
        userAgent: '*',
        disallow: ['/api/', '/admin/', '/_next/', '/404', '/500'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 0,
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        crawlDelay: 1,
      }
    ],
    additionalSitemaps: [
      `${siteMetadata.siteUrl}/sitemap.xml`,
    ],
  },
  additionalPaths: async (config) => {
    const paths = [];
    
    // Add blog category pages dynamically
    const blogCategories = [
      'all',
      'basics', 
      'budgets',
      'investments',
      'savings',
      'debt',
      'couples-finance',
      'financial-planning'
    ];
    
    blogCategories.forEach(category => {
      paths.push({
        loc: `/categories/${category}`,
        changefreq: 'weekly',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      });
    });

    // Add static important pages
    const staticPages = [
      { path: '/faq', priority: 0.8, changefreq: 'monthly' },
      { path: '/terms', priority: 0.3, changefreq: 'yearly' },
      { path: '/privacy', priority: 0.3, changefreq: 'yearly' },
    ];

    staticPages.forEach(page => {
      paths.push({
        loc: page.path,
        changefreq: page.changefreq,
        priority: page.priority,
        lastmod: new Date().toISOString(),
      });
    });

    return paths;
  },
  transform: async (config, path) => {
    // Custom priority and changefreq based on path
    let priority = config.priority;
    let changefreq = config.changefreq;
    let lastmod = new Date().toISOString();

    // Homepage - highest priority
    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    }
    // Blog posts - high priority, updated weekly
    else if (path.startsWith('/blogs/')) {
      priority = 0.8;
      changefreq = 'weekly';
    }
    // Blog main page
    else if (path === '/blog') {
      priority = 0.9;
      changefreq = 'daily';
    }
    // Category pages
    else if (path.startsWith('/categories/')) {
      priority = 0.7;
      changefreq = 'weekly';
    }
    // Calculator tools - very high priority
    else if (path.startsWith('/tools/')) {
      priority = 0.9;
      changefreq = 'monthly';
    }
    // FAQ page - high priority for SEO
    else if (path === '/faq') {
      priority = 0.8;
      changefreq = 'monthly';
    }
    // About page
    else if (path === '/about') {
      priority = 0.6;
      changefreq = 'monthly';
    }
    // Legal pages
    else if (path === '/terms' || path === '/privacy') {
      priority = 0.3;
      changefreq = 'yearly';
    }
    // Other pages
    else {
      priority = 0.5;
      changefreq = 'monthly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod,
      // Add hreflang for international SEO if needed
      alternateRefs: [],
    };
  },
}
