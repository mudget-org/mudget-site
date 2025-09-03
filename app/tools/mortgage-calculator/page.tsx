
"use client";

import React, { useState, useMemo, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Calculator, Download, Share2, Home, DollarSign, Calendar, Percent, Link as LucidLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { showCopiedTooltip } from '@/utils/showTooltip';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { CalculatorStructuredData, FAQStructuredData, BreadcrumbStructuredData } from '@/components/StructuredData';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Link from 'next/link';

interface MortgageResult {
  monthlyPayment: number;
  totalPayment: number;
  totalInterest: number;
  monthlyBreakdown: {
    principal: number;
    interest: number;
    month: number;
    balance: number;
  }[];
}

function MortgageCalculatorContent() {
  const searchParams = useSearchParams();

  const [homePrice, setHomePrice] = useState(400000);
  const [downPayment, setDownPayment] = useState(80000);
  const [loanTerm, setLoanTerm] = useState(30);
  const [interestRate, setInterestRate] = useState(6.5);

  // Load values from URL parameters on component mount
  useEffect(() => {
    const urlHomePrice = searchParams.get('homePrice');
    const urlDownPayment = searchParams.get('downPayment');
    const urlLoanTerm = searchParams.get('loanTerm');
    const urlInterestRate = searchParams.get('interestRate');

    if (urlHomePrice) setHomePrice(Number(urlHomePrice));
    if (urlDownPayment) setDownPayment(Number(urlDownPayment));
    if (urlLoanTerm) setLoanTerm(Number(urlLoanTerm));
    if (urlInterestRate) setInterestRate(Number(urlInterestRate));
  }, [searchParams]);

  const results = useMemo((): MortgageResult => {
    const principal = homePrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const totalPayments = loanTerm * 12;

    if (principal <= 0 || monthlyRate <= 0 || totalPayments <= 0) {
      return {
        monthlyPayment: 0,
        totalPayment: 0,
        totalInterest: 0,
        monthlyBreakdown: []
      };
    }

    const monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) /
      (Math.pow(1 + monthlyRate, totalPayments) - 1);

    const totalPayment = monthlyPayment * totalPayments;
    const totalInterest = totalPayment - principal;

    // Calculate amortization schedule
    const monthlyBreakdown: MortgageResult['monthlyBreakdown'] = [];
    let remainingBalance = principal;

    for (let month = 1; month <= totalPayments; month++) {
      const interestPayment = remainingBalance * monthlyRate;
      const principalPayment = monthlyPayment - interestPayment;
      remainingBalance -= principalPayment;

      monthlyBreakdown.push({
        month,
        principal: principalPayment,
        interest: interestPayment,
        balance: Math.max(0, remainingBalance)
      });
    }

    return {
      monthlyPayment,
      totalPayment,
      totalInterest,
      monthlyBreakdown
    };
  }, [homePrice, downPayment, loanTerm, interestRate]);

  const exportToCSV = () => {
    const csvContent = [
      ['Month', 'Principal Payment', 'Interest Payment', 'Remaining Balance'],
      ...results.monthlyBreakdown.map(row => [
        row.month,
        row.principal.toFixed(2),
        row.interest.toFixed(2),
        row.balance.toFixed(2)
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'mortgage-amortization-schedule.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  const generateShareableURL = () => {
    const baseUrl = window.location.origin + window.location.pathname;
    const params = new URLSearchParams({
      homePrice: homePrice.toString(),
      downPayment: downPayment.toString(),
      loanTerm: loanTerm.toString(),
      interestRate: interestRate.toString()
    });
    return `${baseUrl}?${params.toString()}`;
  };

  const copyShareableLink = async () => {
    const shareableUrl = generateShareableURL();
    await navigator.clipboard.writeText(shareableUrl);
    showCopiedTooltip('Shareable link copied to clipboard!');
  };

  const shareResults = async () => {
    const shareableUrl = generateShareableURL();
    const shareData = {
      title: 'Mudget Mortgage Calculator Results',
      text: `Monthly Payment: $${results.monthlyPayment.toFixed(2)} | Total Interest: $${results.totalInterest.toFixed(2)}`,
      url: shareableUrl
    };

    if (navigator.share) {
      await navigator.share(shareData);
    } else {
      // Fallback to clipboard
      await navigator.clipboard.writeText(`${shareData.text} - ${shareData.url}`);
      showCopiedTooltip('Results and shareable link copied to clipboard!');
    }
  };

  const mortgageFAQs = [
    {
      question: "How is my monthly mortgage payment calculated?",
      answer: "Your monthly mortgage payment is calculated using the loan amount (home price minus down payment), interest rate, and loan term. The formula accounts for both principal and interest payments over the life of the loan."
    },
    {
      question: "What is an amortization schedule?",
      answer: "An amortization schedule shows how each monthly payment is split between principal and interest over the entire loan term. Early payments have more interest, while later payments have more principal."
    },
    {
      question: "Should I make a larger down payment?",
      answer: "A larger down payment reduces your loan amount, monthly payments, and total interest paid. However, consider your cash flow needs and other investment opportunities when deciding on down payment size."
    },
    {
      question: "What factors affect my mortgage rate?",
      answer: "Mortgage rates are influenced by your credit score, down payment amount, loan term, debt-to-income ratio, and current market conditions. Shop around with multiple lenders for the best rates."
    }
  ];

  const breadcrumbItems = [
    { name: "Home", url: "https://mudget.finance" },
    { name: "Financial Tools", url: "https://mudget.finance/tools" },
    { name: "Mortgage Calculator", url: "https://mudget.finance/tools/mortgage-calculator" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <CalculatorStructuredData
        name="Free Mortgage Calculator"
        description="Calculate your monthly mortgage payment, total interest, and view complete amortization schedule with our free mortgage calculator."
        url="https://mudget.finance/tools/mortgage-calculator"
      />
      <FAQStructuredData faqs={mortgageFAQs} />
      <BreadcrumbStructuredData items={breadcrumbItems} />
      <Nav AppURL="https://app.mudget.finance" />

      <main className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header with Breadcrumb */}
          <div className="mb-12">
            {/* Breadcrumb Navigation */}
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-6"
            >
              <Link href="/" className="hover:text-[#6ae58d] transition-colors">Home</Link>
              <span>/</span>
              <Link href="/tools" className="hover:text-[#6ae58d] transition-colors">Financial Tools</Link>
              <span>/</span>
              <span className="text-gray-900 dark:text-gray-100">Mortgage Calculator</span>
            </motion.nav>

            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-6"
              >
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="p-3 rounded-full bg-[#6ae58d] text-black">
                    <Calculator className="w-6 h-6" />
                  </div>
                </div>
                <h1 className="text-4xl font-bold mb-4">Free Mortgage Calculator</h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Calculate your monthly mortgage payments, total interest, and view a complete amortization schedule.
                  Export results and share calculations with our comprehensive mortgage calculator.
                </p>
              </motion.div>

            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Home className="w-5 h-5" />
                    Loan Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="homePrice" className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4" />
                      Home Price
                    </Label>
                    <Input
                      id="homePrice"
                      type="number"
                      value={homePrice}
                      onChange={(e) => setHomePrice(Number(e.target.value))}
                      className="text-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="downPayment" className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4" />
                      Down Payment
                    </Label>
                    <Input
                      id="downPayment"
                      type="number"
                      value={downPayment}
                      onChange={(e) => setDownPayment(Number(e.target.value))}
                      className="text-lg"
                    />
                    <p className="text-sm text-gray-500">
                      {((downPayment / homePrice) * 100).toFixed(1)}% of home price
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="loanTerm" className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Loan Term (Years)
                    </Label>
                    <Input
                      id="loanTerm"
                      type="number"
                      value={loanTerm}
                      onChange={(e) => setLoanTerm(Number(e.target.value))}
                      className="text-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interestRate" className="flex items-center gap-2">
                      <Percent className="w-4 h-4" />
                      Annual Interest Rate (%)
                    </Label>
                    <Input
                      id="interestRate"
                      type="number"
                      step="0.01"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="text-lg"
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Results Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Monthly Payment</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-[#6ae58d]">
                    ${results.monthlyPayment.toFixed(2)}
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Loan Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Loan Amount:</span>
                    <span className="font-semibold">${(homePrice - downPayment).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Total Interest:</span>
                    <span className="font-semibold">${results.totalInterest.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Total Payment:</span>
                    <span className="font-semibold">${results.totalPayment.toLocaleString()}</span>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <Button
                        onClick={exportToCSV}
                        variant="outline"
                        className="flex-1"
                        disabled={results.monthlyBreakdown.length === 0}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Export CSV
                      </Button>
                      <Button
                        onClick={shareResults}
                        variant="outline"
                        className="flex-1"
                        disabled={results.monthlyPayment === 0}
                      >
                        <Share2 className="w-4 h-4 mr-2" />
                        Share
                      </Button>
                    </div>
                    <Button
                      onClick={copyShareableLink}
                      variant="outline"
                      className="w-full"
                      disabled={results.monthlyPayment === 0}
                    >
                      <LucidLink className="w-4 h-4 mr-2" />
                      Copy Shareable Link
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Breakdown Chart */}
              {results.monthlyPayment > 0 && (
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle>Payment Breakdown</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={[
                              {
                                name: 'Principal',
                                value: homePrice - downPayment,
                                fill: '#6ae58d'
                              },
                              {
                                name: 'Interest',
                                value: results.totalInterest,
                                fill: '#ff6b6b'
                              }
                            ]}
                            cx="50%"
                            cy="50%"
                            innerRadius={40}
                            outerRadius={80}
                            dataKey="value"
                          >
                            <Cell fill="#6ae58d" />
                            <Cell fill="#ff6b6b" />
                          </Pie>
                          <Tooltip
                            formatter={(value: number) => [`$${value.toLocaleString()}`, '']}
                          />
                          <Legend />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="text-center mt-4">
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Total Cost: ${results.totalPayment.toLocaleString()}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Disclaimer */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-6"
              >
                <Card className="bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800">
                  <CardContent className="p-4">
                    <p className="text-sm text-amber-800 dark:text-amber-200">
                      <strong>Disclaimer:</strong> This calculator provides working estimates only. Actual mortgage terms, rates, and payments may vary based on your credit profile, lender requirements, and market conditions. For precise calculations, consult with a mortgage professional.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>

          {/* FAQ Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {mortgageFAQs.map((faq, index) => (
                  <div key={index} className="space-y-2">
                    <h3 className="font-semibold text-lg">{faq.question}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.section>

          {/* Related Tools Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Mudget Materials</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Link
                    href="/tools/retirement-calculator"
                    className="group p-4 border rounded-lg hover:border-[#6ae58d] hover:bg-[#6ae58d]/5 transition-all"
                  >
                    <h3 className="font-semibold group-hover:text-[#6ae58d] transition-colors">Retirement Calculator</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Plan your retirement savings and calculate future nest egg</p>
                  </Link>
                  <Link
                    href="/tools/loan-calculator"
                    className="group p-4 border rounded-lg hover:border-[#6ae58d] hover:bg-[#6ae58d]/5 transition-all"
                  >
                    <h3 className="font-semibold group-hover:text-[#6ae58d] transition-colors">Loan Calculator</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Calculate payments for personal loans and auto financing</p>
                  </Link>
                  <Link
                    href="/tools/credit-score-calculator"
                    className="group p-4 border rounded-lg hover:border-[#6ae58d] hover:bg-[#6ae58d]/5 transition-all"
                  >
                    <h3 className="font-semibold group-hover:text-[#6ae58d] transition-colors">Credit Score Calculator</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Understand factors affecting your credit score</p>
                  </Link>
                  <Link
                    href="/pricing"
                    className="group p-4 border rounded-lg hover:border-[#6ae58d] hover:bg-[#6ae58d]/5 transition-all"
                  >
                    <h3 className="font-semibold group-hover:text-[#6ae58d] transition-colors">Mudget Pricing</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">See our plans for comprehensive financial management</p>
                  </Link>
                  <Link
                    href="/why-mudget/vs-spreadsheets"
                    className="group p-4 border rounded-lg hover:border-[#6ae58d] hover:bg-[#6ae58d]/5 transition-all"
                  >
                    <h3 className="font-semibold group-hover:text-[#6ae58d] transition-colors">Why Choose Mudget</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">See how we compare to traditional budgeting methods</p>
                  </Link>
                  <Link
                    href="/blog"
                    className="group p-4 border rounded-lg hover:border-[#6ae58d] hover:bg-[#6ae58d]/5 transition-all"
                  >
                    <h3 className="font-semibold group-hover:text-[#6ae58d] transition-colors">Financial Blog</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Tips and guides for better financial health</p>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.section>
        </motion.div>
        {/* CTA to Mudget */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className='mt-16'
        >
          <Card className="bg-gradient-to-r from-[#6ae58d] to-[#5ad17c] text-black shadow-lg">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-bold mb-2">Ready to Budget for Your Dream Home?</h3>
              <p className="mb-4">Track your mortgage alongside all your other financial vitals with Mudget.</p>
              <Button
                asChild
                className="bg-black text-white hover:bg-gray-800 mr-4"
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
                <Link href="/tools/retirement-calculator">
                  Try Retirement Calculator
                </Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}

export default function MortgageCalculator() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MortgageCalculatorContent />
    </Suspense>
  );
}