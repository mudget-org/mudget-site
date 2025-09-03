"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FileSpreadsheet, Banknote, DollarSign, Wallet, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BreadcrumbStructuredData } from '@/components/StructuredData';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Link from 'next/link';

const comparisonOptions = [
  {
    title: "vs Spreadsheets",
    description: "See why modern couples are ditching Excel for automated budgeting",
    icon: <FileSpreadsheet className="w-8 h-8 text-[#6ae58d]" />,
    href: "/why-mudget/vs-spreadsheets",
    published: true,
    highlights: ["Save 6+ hours monthly", "Real-time sync", "No version conflicts"]
  },
  {
    title: "vs Mint",
    description: "Compare Mudget's couples-focused approach to Mint's individual tracking",
    icon: <Banknote className="w-8 h-8 text-gray-400" />,
    href: "/why-mudget/vs-mint",
    published: false,
    highlights: ["Built for couples", "Better categorization", "Active support"]
  },
  {
    title: "vs YNAB",
    description: "Simpler budgeting with AI insights vs YNAB's complex envelope system",
    icon: <DollarSign className="w-8 h-8 text-gray-400" />,
    href: "/why-mudget/vs-ynab",
    published: false,
    highlights: ["Easier to use", "Automated insights", "Better mobile app"]
  },
  {
    title: "vs EveryDollar",
    description: "Modern features and couples collaboration vs EveryDollar's limitations",
    icon: <Wallet className="w-8 h-8 text-gray-400" />,
    href: "/why-mudget/vs-everydollar",
    published: false,
    highlights: ["Real-time sync", "AI categorization", "Better reporting"]
  },
  {
    title: "vs PocketGuard",
    description: "Comprehensive financial management vs simple spending tracking",
    icon: <Shield className="w-8 h-8 text-gray-400" />,
    href: "/why-mudget/vs-pocketguard",
    published: false,
    highlights: ["Full budget management", "Goal tracking", "Couples features"]
  }
];

export default function WhyMudgetPage() {
  const breadcrumbItems = [
    { name: "Home", url: "https://mudget.finance" },
    { name: "Why Mudget", url: "https://mudget.finance/why-mudget" }
  ];

  const publishedOptions = comparisonOptions.filter(option => option.published);
  const upcomingOptions = comparisonOptions.filter(option => !option.published);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <BreadcrumbStructuredData items={breadcrumbItems} />
      <Nav AppURL="https://app.mudget.finance" />
      
      <main className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl font-bold mb-6"
            >
              Why Choose Mudget?
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              See how Mudget compares to other budgeting solutions. Discover why couples and individuals are choosing our modern approach to financial management.
            </motion.p>
          </div>

          {/* Published Comparisons */}
          {publishedOptions.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-center mb-12">Compare Mudget To...</h2>
              <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
                {publishedOptions.map((option, index) => (
                  <motion.div
                    key={option.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link href={option.href}>
                      <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-[#6ae58d]/50 group">
                        <CardHeader>
                          <div className="flex items-center gap-4">
                            <div className="p-3 rounded-lg bg-[#6ae58d]/10 group-hover:bg-[#6ae58d]/20 transition-colors">
                              {option.icon}
                            </div>
                            <div>
                              <CardTitle className="text-xl group-hover:text-[#6ae58d] transition-colors">
                                {option.title}
                              </CardTitle>
                              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                                {option.description}
                              </p>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            {option.highlights.map((highlight, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-[#6ae58d] rounded-full flex-shrink-0" />
                                <p className="text-sm text-gray-600 dark:text-gray-400">{highlight}</p>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Coming Soon Section */}
          {upcomingOptions.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-2xl font-bold text-center mb-8 text-gray-500">More Comparisons Coming Soon</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcomingOptions.map((option, index) => (
                  <motion.div
                    key={option.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full opacity-60 relative overflow-hidden">
                      <div className="absolute top-4 right-4 bg-yellow-500 text-black text-xs px-2 py-1 rounded-full font-medium">
                        Coming Soon
                      </div>
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <div className="p-3 rounded-lg bg-gray-100 dark:bg-gray-800">
                            {option.icon}
                          </div>
                          <div>
                            <CardTitle className="text-xl text-gray-500">
                              {option.title}
                            </CardTitle>
                            <p className="text-sm text-gray-400 mt-1">
                              {option.description}
                            </p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {option.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-gray-400 rounded-full flex-shrink-0" />
                              <p className="text-sm text-gray-400">{highlight}</p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Why Choose Mudget Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <Card className="bg-gradient-to-r from-[#6ae58d]/10 to-[#5ad17c]/10 border-[#6ae58d]/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-center mb-8">What Makes Mudget Different</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#6ae58d]/20 flex items-center justify-center">
                      <span className="text-2xl">👫</span>
                    </div>
                    <h3 className="font-semibold mb-2">Built for Couples</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Real-time sync, shared goals, and collaboration features designed specifically for couples managing money together.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#6ae58d]/20 flex items-center justify-center">
                      <span className="text-2xl">🤖</span>
                    </div>
                    <h3 className="font-semibold mb-2">AI-Powered Insights</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Smart categorization, spending predictions, and personalized recommendations to help you reach your financial goals.
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#6ae58d]/20 flex items-center justify-center">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <h3 className="font-semibold mb-2">Effortless Setup</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Connect your accounts in minutes, not hours. Our automated system handles the heavy lifting so you can focus on your goals.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="bg-gradient-to-r from-[#6ae58d] to-[#5ad17c] text-black shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-4">Ready to Experience the Difference?</h2>
                <p className="text-lg mb-6 max-w-2xl mx-auto">
                  Join thousands of couples who&apos;ve upgraded their financial management with Mudget&apos;s modern, intelligent approach to budgeting.
                </p>
                <Button
                  asChild
                  className="bg-black text-white hover:bg-gray-800"
                >
                  <a href="https://app.mudget.finance/waitlist">
                    Start Your Free Trial
                  </a>
                </Button>
                <p className="text-sm mt-4 opacity-80">
                  Free 34 day trial • Cancel anytime • No credit card required
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}