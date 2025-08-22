"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Search, MessageCircle, Shield, DollarSign, Users, Calculator, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { FAQStructuredData, BreadcrumbStructuredData } from '@/components/StructuredData';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  keywords: string[];
}

const faqData: FAQItem[] = [
  // General Budgeting Questions
  {
    id: 'what-is-budgeting',
    question: 'What is budgeting and why is it important?',
    answer: 'Budgeting is the process of creating a plan for how you\'ll spend your money. It helps you track income and expenses, prioritize financial goals, and avoid overspending.',
    category: 'Budgeting Basics',
    keywords: ['budgeting', 'financial planning', 'money management']
  },
  {
    id: 'couple-budgeting-benefits',
    question: 'What are the benefits of budgeting as a couple?',
    answer: 'Budgeting as a couple improves communication, aligns financial goals, reduces money conflicts, and helps you achieve shared dreams faster. It creates transparency about spending habits and ensures both partners are accountable for financial decisions.',
    category: 'Budgeting Basics',
    keywords: ['couples budgeting', 'joint finances', 'financial communication']
  },
  {
    id: 'how-to-start-budgeting',
    question: 'How do I start budgeting with my partner?',
    answer: 'Start by having an open conversation about your financial goals, current debts, and spending habits. Track your income and expenses for a month, then create categories for necessities, wants, and savings. Use the 50/30/20 rule as a starting point and adjust based on your unique situation.',
    category: 'Budgeting Basics',
    keywords: ['how to budget', 'couples finance', 'budgeting for beginners']
  },
  {
    id: 'emergency-fund-amount',
    question: 'How much should I save for an emergency fund?',
    answer: 'Financial experts recommend saving 3-6 months of living expenses for an emergency fund. Start with $1,000 as a mini emergency fund, then gradually build it up. For couples, consider your combined expenses and whether both partners have stable income when determining the right amount.',
    category: 'Budgeting Basics',
    keywords: ['emergency fund', 'savings', 'financial security']
  },

  // Mudget-Specific Questions
  {
    id: 'what-is-mudget',
    question: 'What is Mudget and how does it work?',
    answer: 'Mudget is a financial vitals dashboard designed specifically for as a no hassel no stress solution. It connects securely to your bank accounts via Plaid, automatically categorizes transactions, and provides AI-powered insights to help you budget and achieve your financial milestones. You can use it as a couple too, think of it as a BOGO.',
    category: 'About Mudget',
    keywords: ['Mudget', 'budgeting app', 'couples finance app']
  },
  {
    id: 'mudget-cost',
    question: 'How much does Mudget cost?',
    answer: 'Mudget has a free trial for over a month with all core features. Premium plans include advanced AI insights, additional account connections, and priority support. Check our pricing page for current rates and features included in each plan.',
    category: 'About Mudget',
    keywords: ['Mudget pricing', 'budgeting app cost', 'free budget app']
  },
  {
    id: 'mudget-security',
    question: 'Is Mudget safe and secure?',
    answer: 'Yes, Mudget uses bank-level security with 256-bit encryption. We connect to your accounts through Plaid, a trusted financial data provider used by major financial institutions. We never store your banking credentials and follow strict data protection protocols.',
    category: 'About Mudget',
    keywords: ['Mudget security', 'safe budgeting app', 'financial data protection']
  },
  {
    id: 'mudget-vs-competitors',
    question: 'How is Mudget different from other budgeting apps?',
    answer: 'Unlike other apps built for individuals, Mudget is designed to give you a tailored experience no matter your wealth level. We offer shared accounts, real-time spending notifications for both partners, AI-powered insights and conversations, and features that promote financial goal setting.',
    category: 'About Mudget',
    keywords: ['Mudget vs Mint', 'best couples budgeting app', 'joint budget app']
  },
  {
    id: 'account-sharing',
    question: 'How do I share my budget with my partner?',
    answer: 'Mudget makes it easy to share your financial dashboard with your partner. Simply invite them via email, and they\'ll have access to your shared budget categories, goals, and spending insights. Both partners can add transactions and update budget categories in real-time. You can choose what accounts to share for tailored financial views.',
    category: 'About Mudget',
    keywords: ['share budget', 'joint account', 'couples budgeting']
  },

  // Couples Finance Questions
  {
    id: 'different-spending-habits',
    question: 'How do we handle different spending habits as a couple?',
    answer: 'Start by understanding each other\'s money mindset and discussing your financial values. Create a budget that includes personal spending money for each partner. Set agreed-upon limits for large purchases and focus on your shared financial goals to stay aligned.',
    category: 'Couples Finance',
    keywords: ['different spending habits', 'financial communication', 'couples money management']
  },
  {
    id: 'financial-disagreements',
    question: 'What should we do if we disagree about money?',
    answer: 'Financial disagreements are normal in relationships. Schedule regular money meetings to discuss concerns openly. Focus on understanding each other\'s perspective rather than being right. Consider compromising on spending categories and seeking professional help if disagreements persist.',
    category: 'Couples Finance',
    keywords: ['financial disagreements', 'money fights', 'couples financial counseling']
  },
  {
    id: 'joint-vs-separate-accounts',
    question: 'Should couples have joint or separate bank accounts?',
    answer: 'There\'s no one-size-fits-all answer. Many couples use a hybrid approach: joint accounts for shared expenses (rent, groceries, utilities) and separate accounts for personal spending. The key is transparency and agreement on how you\'ll manage money together.',
    category: 'Couples Finance',
    keywords: ['joint accounts', 'separate accounts', 'couples banking']
  },
  {
    id: 'financial-goals-couples',
    question: 'How do we set financial goals as a couple?',
    answer: 'Start by sharing your individual dreams and priorities, then identify common goals like buying a home, traveling, or retiring early. Make goals specific, measurable, and time-bound. Break large goals into smaller milestones and celebrate progress together.',
    category: 'Couples Finance',
    keywords: ['couples financial goals', 'shared financial planning', 'money goals']
  },

  // Technical Questions
  {
    id: 'bank-connection-safe',
    question: 'Is it safe to connect my bank account to Mudget?',
    answer: 'Yes, it\'s very safe. Mudget uses Plaid, the same secure connection service used by major apps like Venmo and major banks. Your login credentials are never stored on our servers, and all data is encrypted with bank-level security standards.',
    category: 'Security & Privacy',
    keywords: ['bank connection security', 'Plaid safety', 'financial app security']
  },
  {
    id: 'data-privacy',
    question: 'What data does Mudget collect and how is it used?',
    answer: 'Mudget only collects transaction data necessary to provide budgeting insights. We never sell your data to third parties. Your information is used solely to categorize transactions, provide spending analysis, and offer personalized financial recommendations.',
    category: 'Security & Privacy',
    keywords: ['data privacy', 'personal information', 'financial data protection']
  },
  {
    id: 'device-compatibility',
    question: 'What devices and browsers does Mudget support?',
    answer: 'Mudget works on all modern web browsers including Chrome, Firefox, Safari, and Edge. Our responsive design works perfectly on desktop, tablet, and for mobile devices we are building native mobile apps for iOS and Android.',
    category: 'Technical Support',
    keywords: ['device compatibility', 'mobile app', 'browser support']
  },

  // Financial Education
  {
    id: 'debt-payoff-strategy',
    question: 'What\'s the best strategy to pay off debt as a couple?',
    answer: 'List all debts with balances and interest rates. Choose either the debt snowball method (smallest balance first) or debt avalanche method (highest interest first).',
    category: 'Financial Education',
    keywords: ['debt payoff', 'debt snowball', 'debt avalanche', 'couples debt']
  },
  {
    id: 'investment-basics-couples',
    question: 'How should couples approach investing together?',
    answer: 'Start by maxing out any employer 401(k) matches, then consider opening joint investment accounts or coordinating individual retirement accounts. Discuss risk tolerance and investment timelines. Consider low-cost index funds for beginners and consult a financial advisor for complex situations.',
    category: 'Financial Education',
    keywords: ['couples investing', 'joint investment', 'retirement planning']
  },
  {
    id: 'home-buying-budget',
    question: 'How much house can we afford as a couple?',
    answer: 'A general rule is to spend no more than 28% of your gross monthly income on housing costs. Use our mortgage calculator to see different scenarios and factor in property taxes and insurance.',
    category: 'Financial Education',
    keywords: ['home affordability', 'mortgage budget', 'house buying tips']
  }
];

const categories = Array.from(new Set(faqData.map(faq => faq.category)));

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpanded = (id: string) => {
    setExpandedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const filteredFAQs = faqData.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const breadcrumbItems = [
    { name: "Home", url: "https://mudget.finance" },
    { name: "FAQ", url: "https://mudget.finance/faq" }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Budgeting Basics': return <Calculator className="w-4 h-4" />;
      case 'About Mudget': return <Heart className="w-4 h-4" />;
      case 'Couples Finance': return <Users className="w-4 h-4" />;
      case 'Security & Privacy': return <Shield className="w-4 h-4" />;
      case 'Technical Support': return <MessageCircle className="w-4 h-4" />;
      case 'Financial Education': return <DollarSign className="w-4 h-4" />;
      default: return <MessageCircle className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <FAQStructuredData faqs={faqData.map(faq => ({ question: faq.question, answer: faq.answer }))} />
      <BreadcrumbStructuredData items={breadcrumbItems} />
      <Nav showPricesSection={false} AppURL="https://app.mudget.finance" />
      
      <main className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl font-bold mb-6"
            >
              Frequently Asked Questions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              Everything you need to know about budgeting as a couple and using Mudget to achieve your financial goals together.
            </motion.p>
          </div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8"
          >
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      placeholder="Search frequently asked questions..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge
                      variant={selectedCategory === 'All' ? 'default' : 'outline'}
                      className="cursor-pointer"
                      onClick={() => setSelectedCategory('All')}
                    >
                      All Categories
                    </Badge>
                    {categories.map(category => (
                      <Badge
                        key={category}
                        variant={selectedCategory === category ? 'default' : 'outline'}
                        className="cursor-pointer flex items-center gap-1"
                        onClick={() => setSelectedCategory(category)}
                      >
                        {getCategoryIcon(category)}
                        {category}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* FAQ Items */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            {filteredFAQs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card className="shadow-lg hover:shadow-xl transition-shadow duration-200">
                  <CardHeader
                    className="cursor-pointer"
                    onClick={() => toggleExpanded(faq.id)}
                  >
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {getCategoryIcon(faq.category)}
                        <span className="text-left">{faq.question}</span>
                      </div>
                      {expandedItems.includes(faq.id) ? (
                        <ChevronUp className="w-5 h-5 text-[#6ae58d]" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </CardTitle>
                  </CardHeader>
                  <AnimatePresence>
                    {expandedItems.includes(faq.id) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <CardContent className="pt-0">
                          <Separator className="mb-4" />
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {faq.answer}
                          </p>
                          <div className="flex flex-wrap gap-1 mt-4">
                            {faq.keywords.map(keyword => (
                              <Badge key={keyword} variant="secondary" className="text-xs">
                                {keyword}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {filteredFAQs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="text-center py-12"
            >
              <MessageCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No questions found</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Try adjusting your search terms or category filter.
              </p>
            </motion.div>
          )}

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16"
          >
            <Card className="bg-gradient-to-r from-[#6ae58d] to-[#5ad17c] text-black shadow-lg">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
                <p className="text-lg mb-6 max-w-2xl mx-auto">
                  Can&apos;t find the answer you&apos;re looking for? Our team is here to help you get started with budgeting as a couple.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    className="bg-black text-white hover:bg-gray-800"
                  >
                    <a href="https://app.mudget.finance/waitlist">
                      Get Started with Mudget
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-black text-black hover:bg-black/10"
                  >
                    <a href="mailto:admin@mudget.finance">
                      Contact Support
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}