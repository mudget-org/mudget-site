"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Clock, Zap, Users, Shield, RefreshCw, TrendingUp, AlertTriangle, Smartphone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BreadcrumbStructuredData } from '@/components/StructuredData';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const painPoints = [
  {
    icon: <Clock className="w-6 h-6 text-red-500" />,
    title: "Time-Consuming Manual Work",
    description: "Hours spent entering transactions, creating formulas, and updating categories every month."
  },
  {
    icon: <AlertTriangle className="w-6 h-6 text-red-500" />,
    title: "Error-Prone Calculations", 
    description: "One wrong formula or deleted cell can throw off your entire budget and financial planning."
  },
  {
    icon: <X className="w-6 h-6 text-red-500" />,
    title: "No Real-Time Sync",
    description: "Partner changes aren't visible until they remember to save and share the latest version."
  },
  {
    icon: <Smartphone className="w-6 h-6 text-red-500" />,
    title: "Poor Mobile Experience",
    description: "Editing spreadsheets on phones is frustrating and often leads to formatting issues."
  }
];

const comparisonPoints = [
  {
    category: "Setup & Maintenance",
    spreadsheet: {
      title: "Manual & Time-Intensive",
      description: "Create formulas, set up categories, manually enter every transaction",
      icon: <Clock className="w-5 h-5 text-red-500" />,
      rating: 1
    },
    mudget: {
      title: "Automatic & Effortless", 
      description: "Connect accounts once, auto-categorize transactions, smart budget generation",
      icon: <Zap className="w-5 h-5 text-green-500" />,
      rating: 5
    }
  },
  {
    category: "Couples Collaboration",
    spreadsheet: {
      title: "Version Confusion",
      description: "Email files back and forth, conflicts when both edit simultaneously",
      icon: <X className="w-5 h-5 text-red-500" />,
      rating: 1
    },
    mudget: {
      title: "Real-Time Sync",
      description: "Both partners see updates instantly, no version conflicts or confusion",
      icon: <Users className="w-5 h-5 text-green-500" />,
      rating: 5
    }
  },
  {
    category: "Data Security",
    spreadsheet: {
      title: "Local Files Only",
      description: "Risk of data loss, no backup, files can be accidentally deleted or corrupted",
      icon: <AlertTriangle className="w-5 h-5 text-red-500" />,
      rating: 2
    },
    mudget: {
      title: "Bank-Level Security",
      description: "256-bit encryption, automatic backups, secure cloud storage",
      icon: <Shield className="w-5 h-5 text-green-500" />,
      rating: 5
    }
  },
  {
    category: "Insights & Analytics",
    spreadsheet: {
      title: "Basic Charts Only",
      description: "Limited visualization options, manual chart creation and updates",
      icon: <TrendingUp className="w-5 h-5 text-orange-500" />,
      rating: 2
    },
    mudget: {
      title: "AI-Powered Insights",
      description: "Smart spending analysis, goal tracking, personalized recommendations",
      icon: <TrendingUp className="w-5 h-5 text-green-500" />,
      rating: 5
    }
  },
  {
    category: "Mobile Access",
    spreadsheet: {
      title: "Frustrating Experience",
      description: "Tiny cells, difficult editing, formatting issues on mobile devices",
      icon: <X className="w-5 h-5 text-red-500" />,
      rating: 1
    },
    mudget: {
      title: "Native Mobile App",
      description: "Designed for mobile, easy transaction entry, full functionality anywhere",
      icon: <Smartphone className="w-5 h-5 text-green-500" />,
      rating: 5
    }
  },
  {
    category: "Updates & Maintenance",
    spreadsheet: {
      title: "Constant Manual Work",
      description: "Monthly formula updates, category maintenance, backup management",
      icon: <RefreshCw className="w-5 h-5 text-red-500" />,
      rating: 1
    },
    mudget: {
      title: "Automatic Updates",
      description: "Self-maintaining system, automatic categorization improvements, cloud sync",
      icon: <Zap className="w-5 h-5 text-green-500" />,
      rating: 5
    }
  }
];

const timeComparison = [
  {
    task: "Initial Setup",
    spreadsheet: "4-8 hours creating formulas, categories, and layout",
    mudget: "5 minutes connecting accounts and setting preferences"
  },
  {
    task: "Monthly Maintenance", 
    spreadsheet: "2-4 hours entering transactions and updating categories",
    mudget: "10 minutes reviewing auto-categorized transactions"
  },
  {
    task: "Partner Coordination",
    spreadsheet: "30 minutes emailing files and resolving conflicts",
    mudget: "0 minutes - real-time sync handles everything"
  },
  {
    task: "Generating Reports",
    spreadsheet: "1-2 hours creating charts and summaries",
    mudget: "Instant - reports generated automatically"
  }
];

function RatingStars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <div
          key={star}
          className={`w-3 h-3 rounded-full ${
            star <= rating ? 'bg-yellow-400' : 'bg-gray-300'
          }`}
        />
      ))}
    </div>
  );
}

export default function VsSpreadsheetsPage() {
  const breadcrumbItems = [
    { name: "Home", url: "https://mudget.finance" },
    { name: "Why Mudget", url: "https://mudget.finance/why-mudget" },
    { name: "vs Spreadsheets", url: "https://mudget.finance/why-mudget/vs-spreadsheets" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <BreadcrumbStructuredData items={breadcrumbItems} />
      <Nav showPricesSection={false} AppURL="https://app.mudget.finance" />
      
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
              Why Choose Mudget Over Spreadsheets?
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              Spreadsheets were great for 1995, but modern couples deserve better. Here&apos;s why people are making the switch to Mudget.
            </motion.p>
          </div>

          {/* Pain Points */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center mb-12">The Spreadsheet Struggle is Real</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {painPoints.map((point, index) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border-red-200 dark:border-red-800">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-red-50 dark:bg-red-900/20">
                          {point.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">{point.title}</h3>
                          <p className="text-gray-600 dark:text-gray-400">{point.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Time Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center mb-12">Time is Money - Save Both</h2>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {timeComparison.map((item, index) => (
                    <motion.div
                      key={item.task}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="border-b border-gray-200 dark:border-gray-700 pb-6 last:border-b-0 last:pb-0"
                    >
                      <h3 className="font-semibold text-lg mb-3">{item.task}</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="flex items-center gap-3">
                          <div className="w-4 h-4 bg-red-500 rounded-full flex-shrink-0"></div>
                          <div>
                            <p className="font-medium text-red-600">Spreadsheets</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{item.spreadsheet}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-4 h-4 bg-green-500 rounded-full flex-shrink-0"></div>
                          <div>
                            <p className="font-medium text-green-600">Mudget</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{item.mudget}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-8 p-4 bg-[#6ae58d]/10 rounded-lg">
                  <p className="text-center font-semibold text-lg">
                    📊 <span className="text-[#6ae58d]">Total Time Saved: 6+ hours per month</span>
                  </p>
                  <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">
                    That&apos;s 72+ hours per year to spend on what matters most
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Side-by-Side Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center mb-12">Detailed Comparison</h2>
            <div className="space-y-8">
              {comparisonPoints.map((comparison, index) => (
                <motion.div
                  key={comparison.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">{comparison.category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Spreadsheet */}
                        <div className="border border-red-200 dark:border-red-800 rounded-lg p-4 bg-red-50/50 dark:bg-red-900/10">
                          <div className="flex items-center gap-3 mb-3">
                            {comparison.spreadsheet.icon}
                            <h3 className="font-semibold">Spreadsheets</h3>
                            <RatingStars rating={comparison.spreadsheet.rating} />
                          </div>
                          <h4 className="font-medium mb-2">{comparison.spreadsheet.title}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{comparison.spreadsheet.description}</p>
                        </div>
                        
                        {/* Mudget */}
                        <div className="border border-green-200 dark:border-green-800 rounded-lg p-4 bg-green-50/50 dark:bg-green-900/10">
                          <div className="flex items-center gap-3 mb-3">
                            {comparison.mudget.icon}
                            <h3 className="font-semibold">Mudget</h3>
                            <RatingStars rating={comparison.mudget.rating} />
                          </div>
                          <h4 className="font-medium mb-2">{comparison.mudget.title}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{comparison.mudget.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Success Story */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <Card className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 border-blue-200 dark:border-blue-700">
              <CardContent className="p-8">
                <div className="text-center">
                  <h2 className="text-2xl font-bold mb-6">Real Couple, Real Results</h2>
                  <blockquote className="text-lg italic mb-4 text-gray-700 dark:text-gray-300">
                    &quot;We spent 3 years wrestling with Excel spreadsheets. Every month was a nightmare of version conflicts and manual data entry. Since switching to Mudget, we&apos;ve saved 4+ hours monthly and actually enjoy our budget meetings now!&quot;
                  </blockquote>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    — Sarah & Mike, Mudget Users Since 2023
                  </p>
                  <div className="grid grid-cols-3 gap-4 mt-8 max-w-md mx-auto">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#6ae58d]">4+ hrs</div>
                      <div className="text-xs text-gray-500">Saved Monthly</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#6ae58d]">100%</div>
                      <div className="text-xs text-gray-500">Accuracy</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-[#6ae58d]">0</div>
                      <div className="text-xs text-gray-500">Version Conflicts</div>
                    </div>
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
                <h2 className="text-3xl font-bold mb-4">Ready to Ditch the Spreadsheets?</h2>
                <p className="text-lg mb-6 max-w-2xl mx-auto">
                  Join  of couples who&apos;ve upgraded from spreadsheets to smart, automated budgeting with Mudget.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    className="bg-black text-white hover:bg-gray-800"
                  >
                    <a href="https://app.mudget.finance/waitlist">
                      Start Your Free Trial
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-black text-black hover:bg-black/10"
                  >
                    <a href="/why-mudget/vs-competition">
                      See vs Competition
                    </a>
                  </Button>
                </div>
                <p className="text-sm mt-4 opacity-80">
                  No credit card required • Import your spreadsheet data • Cancel anytime
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