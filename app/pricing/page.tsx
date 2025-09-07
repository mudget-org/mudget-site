"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Users, Shield, Zap, TrendingUp, Calculator, BarChart3 } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PricingCards from "@/components/PricingCards";
import { useRouter } from "next/navigation";

const AppURL = process.env.NEXT_PUBLIC_APP_URL || "https://app.mudget.finance";

const features = [
  {
    icon: <Users className="w-5 h-5" />,
    title: "Household Budgeting",
    description: "Built specifically for couples with shared financial goals"
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Automatic Bank Sync",
    description: "Connect your accounts once, never enter transactions manually again"
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: "AI Financial Insights",
    description: "Personalized recommendations and spending analysis"
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Bank-Level Security",
    description: "256-bit encryption and secure cloud storage via Plaid"
  },
  {
    icon: <Calculator className="w-5 h-5" />,
    title: "Smart Goal Tracking",
    description: "Set and monitor progress on savings goals, debt payoff, and major purchases"
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: "Advanced Analytics",
    description: "Detailed spending reports, trends analysis, and financial health scores"
  }
];

const faqs = [
  {
    question: "How does the 40-day free trial work?",
    answer: "You get full access to all Mudget features for 40 days. Credit card required to start. Cancel anytime before the trial ends and you won't be charged."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes! You can cancel your subscription at any time from your account settings. Your access continues until the end of your current billing period."
  },
  {
    question: "Is my financial data secure?",
    answer: "Absolutely. We use bank-level 256-bit encryption and never store your banking credentials. All data is securely stored in the cloud with automatic backups."
  },
  {
    question: "Do you offer family/household plans?",
    answer: "Yes! Mudget is designed for households. Each subscription includes access for up to 2 adults, perfect for couples managing finances together."
  },
  {
    question: "What banks do you support?",
    answer: "We support over 10,000+ banks and credit unions in the US through Plaid."
  }
];

export default function PricingPage() {
  const router = useRouter();
  
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
              <Badge variant="outline" className="mb-4">
                Simple Pricing
              </Badge>
              <h1 className="text-5xl font-bold mb-6">
                Choose Your <span className="text-[#6ae58d]">Financial Freedom</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                Start your journey to better financial health with Mudget.
                Built for couples, designed for success.
              </p>

              {/* Trust Indicators */}
              <div className="flex justify-center items-center gap-6 mb-12">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#6ae58d]" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Bank-Level Security</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-[#6ae58d]" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">40-Day Free Trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#6ae58d]" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Cancel Anytime</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Custom Pricing Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Choose Your Plan</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Start with our monthly plan and upgrade as you grow. All paid plans include a 40-day free trial.
              </p>
            </div>
            
            <PricingCards onSelectPlan={() => {
              router.push("https://app.mudget.finance/signup");
            }} />
          </motion.div>

          {/* Features Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Everything You Need</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                All plans include access to every Mudget feature.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-[#6ae58d]/10">
                          {feature.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">{feature.title}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Got questions? We&apos;ve got answers.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">{faq.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="bg-gradient-to-r from-[#6ae58d] to-[#5ad17c] text-black">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-4">Ready to Take Control?</h2>
                <p className="text-lg mb-6 max-w-2xl mx-auto">
                  Join all the other couples who&apos;ve transformed their financial lives with Mudget.
                </p>
                <p className="text-sm opacity-80">
                  Start your 40-day free trial today • Cancel anytime
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