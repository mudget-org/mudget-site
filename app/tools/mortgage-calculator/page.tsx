
"use client";

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Download, Share2, Home, DollarSign, Calendar, Percent } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { CalculatorStructuredData } from '@/components/StructuredData';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

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

export default function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState(400000);
  const [downPayment, setDownPayment] = useState(80000);
  const [loanTerm, setLoanTerm] = useState(30);
  const [interestRate, setInterestRate] = useState(6.5);

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

  const shareResults = async () => {
    const shareData = {
      title: 'Mudget Mortgage Calculator Results',
      text: `Monthly Payment: $${results.monthlyPayment.toFixed(2)} | Total Interest: $${results.totalInterest.toFixed(2)}`,
      url: window.location.href
    };

    if (navigator.share) {
      await navigator.share(shareData);
    } else {
      // Fallback to clipboard
      await navigator.clipboard.writeText(`${shareData.text} - ${shareData.url}`);
      alert('Results copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <CalculatorStructuredData 
        name="Free Mortgage Calculator"
        description="Calculate your monthly mortgage payment, total interest, and view complete amortization schedule with our free mortgage calculator."
        url="https://mudget.finance/tools/mortgage-calculator"
      />
      <Nav showPricesSection={false} AppURL="https://app.mudget.finance" />
      
      <main className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center justify-center gap-3 mb-4"
            >
              <div className="p-3 rounded-full bg-[#6ae58d] text-black">
                <Calculator className="w-6 h-6" />
              </div>
              <h1 className="text-4xl font-bold">Mortgage Calculator</h1>
            </motion.div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Calculate your monthly mortgage payments and see how much you will pay over the life of your loan.
            </p>
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

              {/* CTA to Mudget */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Card className="bg-gradient-to-r from-[#6ae58d] to-[#5ad17c] text-black shadow-lg">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold mb-2">Ready to Budget for Your Dream Home?</h3>
                    <p className="mb-4">Track your mortgage alongside all your other financial vitals with Mudget.</p>
                    <Button
                      asChild
                      className="bg-black text-white hover:bg-gray-800"
                    >
                      <a href="https://app.mudget.finance/waitlist">
                        Get Started with Mudget
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}