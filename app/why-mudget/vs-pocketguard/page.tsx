"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, X, Users, Zap, Shield, Heart, TrendingUp, MessageCircle, DollarSign, ArrowRight, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function MudgetVsPocketGuardPage() {
  const comparisonFeatures = [
    {
      feature: "Built for Couples",
      mudget: true,
      pocketguard: false,
      description: "Designed from the ground up for shared financial management"
    },
    {
      feature: "Real-time Sync",
      mudget: true,
      pocketguard: true,
      description: "Both partners see updates instantly across all devices"
    },
    {
      feature: "AI Financial Assistant",
      mudget: true,
      pocketguard: false,
      description: "Voice and chat conversations about your finances"
    },
    {
      feature: "Spending Tracking",
      mudget: true,
      pocketguard: true,
      description: "Monitor where your money goes"
    },
    {
      feature: "In My Pocket Feature",
      mudget: false,
      pocketguard: true,
      description: "Shows safe-to-spend amount after bills"
    },
    {
      feature: "Investment Tracking",
      mudget: true,
      pocketguard: false,
      description: "Monitor your investment portfolio"
    },
    {
      feature: "Credit Score Monitoring",
      mudget: true,
      pocketguard: false,
      description: "Track your credit health over time"
    },
    {
      feature: "Goal Setting & Tracking",
      mudget: true,
      pocketguard: false,
      description: "Set and monitor financial goals together"
    },
    {
      feature: "Bill Tracking",
      mudget: true,
      pocketguard: true,
      description: "Track upcoming bills and payments"
    },
    {
      feature: "Comprehensive Budgeting",
      mudget: true,
      pocketguard: false,
      description: "Full budget creation and management tools"
    }
  ];

  const reasons = [
    {
      icon: Users,
      title: "Built for Two",
      description: "PocketGuard focuses on individual spending tracking. Mudget was designed for couples managing finances together."
    },
    {
      icon: Target,
      title: "Beyond Spending Tracking",
      description: "While PocketGuard shows what's safe to spend, Mudget helps you build comprehensive financial plans and goals."
    },
    {
      icon: MessageCircle,
      title: "AI-Powered Insights",
      description: "Get personalized financial advice and insights, not just spending alerts and basic categorization."
    },
    {
      icon: TrendingUp,
      title: "Complete Financial Picture",
      description: "Track investments, credit scores, goals, and more - far beyond simple spending monitoring."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Nav showPricesSection={false} AppURL="https://app.mudget.finance" />
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <div className="inline-flex items-center gap-2 bg-purple-50 dark:bg-purple-900/20 px-4 py-2 rounded-full text-purple-600 dark:text-purple-400 text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            Comprehensive vs Simple Tracking
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Why <span className="text-[#6ae58d]">Mudget</span> Beats <span className="text-purple-500">PocketGuard</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            PocketGuard&apos;s simple spending tracking is useful, but couples need comprehensive financial management. Here&apos;s why Mudget is the better choice for modern relationships.
          </p>
        </motion.div>

        {/* Key Differences */}
        <motion.section
          className="mb-20"
          variants={staggerChildren}
          initial="initial"
          animate="animate"
        >
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
            variants={fadeInUp}
          >
            The Key Differences
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="p-3 rounded-lg bg-[#6ae58d]/10 w-fit mb-4">
                      <reason.icon className="w-6 h-6 text-[#6ae58d]" />
                    </div>
                    <h3 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">
                      {reason.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {reason.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Feature Comparison */}
        <motion.section
          className="mb-20"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Feature by Feature Comparison
          </h2>
          
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="text-left p-6 font-semibold text-gray-900 dark:text-white">Feature</th>
                      <th className="text-center p-6 font-semibold text-[#6ae58d]">Mudget</th>
                      <th className="text-center p-6 font-semibold text-purple-500">PocketGuard</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((item, index) => (
                      <tr key={index} className="border-t border-gray-200 dark:border-gray-700">
                        <td className="p-6">
                          <div>
                            <div className="font-medium text-gray-900 dark:text-white mb-1">
                              {item.feature}
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                              {item.description}
                            </div>
                          </div>
                        </td>
                        <td className="p-6 text-center">
                          {item.mudget ? (
                            <Check className="w-6 h-6 text-green-500 mx-auto" />
                          ) : (
                            <X className="w-6 h-6 text-red-500 mx-auto" />
                          )}
                        </td>
                        <td className="p-6 text-center">
                          {item.pocketguard ? (
                            <Check className="w-6 h-6 text-green-500 mx-auto" />
                          ) : (
                            <X className="w-6 h-6 text-red-500 mx-auto" />
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Why Switch */}
        <motion.section
          className="mb-20"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <div className="bg-gradient-to-r from-[#6ae58d]/10 to-purple-50 dark:from-[#6ae58d]/5 dark:to-purple-900/20 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                More Than Spending Tracking
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                PocketGuard tells you what&apos;s safe to spend, but Mudget helps you build wealth together
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="p-4 rounded-full bg-green-100 dark:bg-green-900/20 w-fit mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Wealth Building</h3>
                <p className="text-gray-600 dark:text-gray-300">Track investments, set goals, and build long-term financial health</p>
              </div>
              
              <div className="text-center">
                <div className="p-4 rounded-full bg-blue-100 dark:bg-blue-900/20 w-fit mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Couples-First</h3>
                <p className="text-gray-600 dark:text-gray-300">Share financial goals and progress with your partner seamlessly</p>
              </div>
              
              <div className="text-center">
                <div className="p-4 rounded-full bg-purple-100 dark:bg-purple-900/20 w-fit mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">Smart Insights</h3>
                <p className="text-gray-600 dark:text-gray-300">AI-powered advice beyond simple spending notifications</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="text-center"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <Card className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to Go Beyond Spending Tracking?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Move from simple spending alerts to comprehensive financial wellness built for couples
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#6ae58d] text-black hover:bg-[#5ad17c] font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link href="https://app.mudget.finance/waitlist">
                    Start Free Trial
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700 font-semibold transition-colors"
                >
                  <Link href="/tools/credit-score-calculator">
                    Try Our Calculators
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </div>
      <Footer />
    </div>
  );
}