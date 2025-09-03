"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, PiggyBank, CreditCard, TrendingUp, ArrowRight, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Link from 'next/link';

const AppURL = process.env.NEXT_PUBLIC_APP_URL || "https://app.mudget.finance";

const calculators = [
  {
    title: "Mortgage Calculator",
    description: "Calculate monthly mortgage payments, total interest, and view complete amortization schedules for your home loan.",
    icon: <Calculator className="w-8 h-8" />,
    href: "/tools/mortgage-calculator",
    features: ["Monthly payment calculation", "Amortization schedule", "Interest breakdown", "Export to CSV"],
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Retirement Calculator", 
    description: "Plan your retirement savings with compound interest projections and see how your nest egg will grow over time.",
    icon: <PiggyBank className="w-8 h-8" />,
    href: "/tools/retirement-calculator",
    features: ["Future savings projection", "Contribution planning", "Growth visualization", "Age-based planning"],
    color: "from-green-500 to-green-600"
  },
  {
    title: "Loan Calculator",
    description: "Calculate payments for personal loans, auto loans, and other financing options with detailed payment breakdowns.",
    icon: <CreditCard className="w-8 h-8" />,
    href: "/tools/loan-calculator", 
    features: ["Personal loan payments", "Auto loan calculations", "Payment schedules", "Interest comparisons"],
    color: "from-purple-500 to-purple-600"
  },
  {
    title: "Credit Score Calculator",
    description: "Understand the factors that affect your credit score and learn how to improve your creditworthiness.",
    icon: <TrendingUp className="w-8 h-8" />,
    href: "/tools/credit-score-calculator",
    features: ["Score factor analysis", "Improvement tips", "Credit health check", "Score monitoring"],
    color: "from-orange-500 to-orange-600"
  }
];

const blogPosts = [
  {
    title: "The Power of Budgeting: Taking Control of Your Financial Future",
    description: "Learn practical budgeting strategies that you can stick to long-term.",
    href: "/blogs/the-power-of-budgeting-taking-control-of-your-financial-future"
  },
  {
    title: "Credit Building for Beginners: Why Good Credit Matters (And How to Get It)",
    description: "Everything you need to know about credit and why you need it.",
    href: "/blogs/credit-building-for-beginners"
  },
  {
    title: "Emergency Fund Reality Check: How Much You Actually Need (And Where to Keep It)",
    description: "Essential tips for navigating your emergency fund.",
    href: "/blogs/emergency-fund-reality-check"
  }
];

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Nav AppURL={AppURL} />
      
      <main className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="p-3 rounded-full bg-[#6ae58d] text-black">
                  <Calculator className="w-6 h-6" />
                </div>
              </div>
              <h1 className="text-5xl font-bold mb-6">
                Free Financial <span className="text-[#6ae58d]">Calculators</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Take control of your financial future with our comprehensive collection of free calculators. 
                Plan, calculate, and make informed decisions about mortgages, retirement, loans, and more.
              </p>
            </motion.div>
          </div>

          {/* Calculators Grid */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center mb-12">Our Financial Tools</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {calculators.map((calc, index) => (
                <motion.div
                  key={calc.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                    <CardHeader>
                      <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${calc.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                        {calc.icon}
                      </div>
                      <CardTitle className="text-2xl">{calc.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-600 dark:text-gray-300">
                        {calc.description}
                      </p>
                      <ul className="space-y-2">
                        {calc.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#6ae58d]" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button asChild className="w-full bg-[#6ae58d] text-black hover:bg-[#5ad17c]">
                        <Link href={calc.href}>
                          Try Calculator
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Blog Posts Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <BookOpen className="w-6 h-6 text-[#6ae58d]" />
                  <h2>Financial Guides & Tips</h2>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {blogPosts.map((post, index) => (
                    <Link
                      key={index}
                      href={post.href}
                      className="group p-4 border rounded-lg hover:border-[#6ae58d] hover:bg-[#6ae58d]/5 transition-all"
                    >
                      <h3 className="font-semibold group-hover:text-[#6ae58d] transition-colors mb-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {post.description}
                      </p>
                    </Link>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Button asChild variant="outline">
                    <Link href="/blog">
                      View All Articles
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* CTA Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-r from-[#6ae58d] to-[#5ad17c] text-black">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl font-bold mb-4">Ready for Complete Financial Management?</h2>
                <p className="text-lg mb-6 max-w-2xl mx-auto">
                  While our calculators help with planning, Mudget provides comprehensive financial management 
                  for couples with automatic budgeting, goal tracking, and AI-powered insights.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    className="bg-black text-white hover:bg-gray-800"
                  >
                    <Link href={`${AppURL}/waitlist`}>
                      Try Mudget Free
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-black text-black hover:bg-black/10"
                  >
                    <Link href="/pricing">
                      View Pricing
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.section>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
}