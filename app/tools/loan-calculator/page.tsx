
"use client";


import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Download, Share2, DollarSign, Calendar, Percent, Calculator } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CalculatorStructuredData } from '@/components/StructuredData';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

interface LoanResult {
  monthlyPayment: number;
  totalPayment: number;
  totalInterest: number;
  payoffDate: Date;
  monthlyBreakdown: {
    month: number;
    principal: number;
    interest: number;
    balance: number;
  }[];
}

const loanTypes = [
  { value: 'personal', label: 'Personal Loan', typical: '6-36 months' },
  { value: 'auto', label: 'Auto Loan', typical: '36-84 months' },
  { value: 'student', label: 'Student Loan', typical: '120-240 months' },
  { value: 'business', label: 'Business Loan', typical: '12-60 months' },
];

export default function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState(25000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTerm, setLoanTerm] = useState(60);
  const [loanType, setLoanType] = useState('personal');

  const results = useMemo((): LoanResult => {
    const monthlyRate = interestRate / 100 / 12;
    const totalPayments = loanTerm;

    if (loanAmount <= 0 || monthlyRate <= 0 || totalPayments <= 0) {
      return {
        monthlyPayment: 0,
        totalPayment: 0,
        totalInterest: 0,
        payoffDate: new Date(),
        monthlyBreakdown: []
      };
    }

    const monthlyPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) / 
                          (Math.pow(1 + monthlyRate, totalPayments) - 1);

    const totalPayment = monthlyPayment * totalPayments;
    const totalInterest = totalPayment - loanAmount;

    // Calculate payoff date
    const payoffDate = new Date();
    payoffDate.setMonth(payoffDate.getMonth() + totalPayments);

    // Calculate amortization schedule
    const monthlyBreakdown: LoanResult['monthlyBreakdown'] = [];
    let remainingBalance = loanAmount;

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
      payoffDate,
      monthlyBreakdown
    };
  }, [loanAmount, interestRate, loanTerm]);

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
    a.download = 'loan-amortization-schedule.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  const shareResults = async () => {
    const shareData = {
      title: 'Loan Calculator Results',
      text: `Monthly Payment: $${results.monthlyPayment.toFixed(2)} | Total Interest: $${results.totalInterest.toFixed(2)}`,
      url: window.location.href
    };

    if (navigator.share) {
      await navigator.share(shareData);
    } else {
      await navigator.clipboard.writeText(`${shareData.text} - ${shareData.url}`);
      alert('Results copied to clipboard!');
    }
  };

  const selectedLoanType = loanTypes.find(type => type.value === loanType);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <CalculatorStructuredData 
        name="Free Loan Calculator"
        description="Calculate loan payments for personal, auto, student, and business loans. Free loan calculator with amortization schedule."
        url="https://mudget.finance/tools/loan-calculator"
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
                <CreditCard className="w-6 h-6" />
              </div>
              <h1 className="text-4xl font-bold">Loan Calculator</h1>
            </motion.div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Calculate monthly payments and total interest for personal loans, auto loans, and more.
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
                    <Calculator className="w-5 h-5" />
                    Loan Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="loanType">Loan Type</Label>
                    <Select value={loanType} onValueChange={setLoanType}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {loanTypes.map(type => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {selectedLoanType && (
                      <p className="text-sm text-gray-500">
                        Typical term: {selectedLoanType.typical}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="loanAmount" className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4" />
                      Loan Amount
                    </Label>
                    <Input
                      id="loanAmount"
                      type="number"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
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

                  <div className="space-y-2">
                    <Label htmlFor="loanTerm" className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Loan Term (Months)
                    </Label>
                    <Input
                      id="loanTerm"
                      type="number"
                      value={loanTerm}
                      onChange={(e) => setLoanTerm(Number(e.target.value))}
                      className="text-lg"
                    />
                    <p className="text-sm text-gray-500">
                      {Math.round(loanTerm / 12 * 10) / 10} years
                    </p>
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
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    Paid off by {results.payoffDate.toLocaleDateString()}
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Loan Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Loan Amount:</span>
                    <span className="font-semibold">${loanAmount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Total Interest:</span>
                    <span className="font-semibold">${results.totalInterest.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Total Payment:</span>
                    <span className="font-semibold">${results.totalPayment.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Interest Rate:</span>
                    <span className="font-semibold">{interestRate}% APR</span>
                  </div>
                  
                  {/* Cost Visualization */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Principal</span>
                      <span>{((loanAmount / results.totalPayment) * 100).toFixed(1)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full" 
                        style={{ width: `${(loanAmount / results.totalPayment) * 100}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Interest</span>
                      <span>{((results.totalInterest / results.totalPayment) * 100).toFixed(1)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-red-500 h-2 rounded-full" 
                        style={{ width: `${(results.totalInterest / results.totalPayment) * 100}%` }}
                      />
                    </div>
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

              {/* Loan Balance Chart */}
              {results.monthlyBreakdown.length > 0 && (
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle>Loan Balance Over Time</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart 
                          data={results.monthlyBreakdown.filter((_, index) => index % 6 === 0 || index === results.monthlyBreakdown.length - 1)}
                          margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis 
                            dataKey="month" 
                            label={{ value: 'Month', position: 'insideBottom', offset: -10 }}
                            tickFormatter={(month) => Math.floor(month / 12) > 0 ? `Year ${Math.floor(month / 12) + 1}` : `Month ${month}`}
                          />
                          <YAxis 
                            tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
                            label={{ value: 'Amount ($)', angle: -90, position: 'insideLeft' }}
                          />
                          <Tooltip 
                            formatter={(value: number) => [`$${value.toLocaleString()}`, '']}
                            labelFormatter={(month) => `Month ${month}`}
                          />
                          <Legend 
                            verticalAlign="bottom" 
                            height={36}
                            iconType="line"
                            wrapperStyle={{ paddingTop: '20px' }}
                          />
                          <Line 
                            type="monotone" 
                            dataKey="balance" 
                            stroke="#6ae58d" 
                            strokeWidth={3}
                            name="Remaining Balance"
                            dot={{ fill: '#6ae58d', strokeWidth: 2, r: 4 }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="text-center mt-4">
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        See how your loan balance decreases over time
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
                      <strong>Disclaimer:</strong> This calculator provides working estimates only. Actual loan terms, rates, and payments may vary based on your credit profile, lender requirements, fees, and market conditions. For precise calculations, consult with a lending professional.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* CTA to Mudget */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Card className="bg-gradient-to-r from-[#6ae58d] to-[#5ad17c] text-black shadow-lg">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold mb-2">Manage All Your Loans</h3>
                    <p className="mb-4">Track loan payments and debt payoff progress in your Financial Vitals dashboard.</p>
                    <Button
                      asChild
                      className="bg-black text-white hover:bg-gray-800"
                    >
                      <a href="https://app.mudget.finance/waitlist">
                        Organize with Mudget
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