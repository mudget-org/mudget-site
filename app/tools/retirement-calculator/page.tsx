
"use client";


import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { PiggyBank, Download, Share2, DollarSign, Calendar, Percent, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { CalculatorStructuredData } from '@/components/StructuredData';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

interface RetirementResult {
  finalAmount: number;
  totalContributions: number;
  totalGrowth: number;
  yearlyBreakdown: {
    year: number;
    age: number;
    contribution: number;
    balance: number;
    growth: number;
  }[];
}

export default function RetirementCalculator() {
  const [currentAge, setCurrentAge] = useState(25);
  const [retirementAge, setRetirementAge] = useState(65);
  const [currentSavings, setCurrentSavings] = useState(10000);
  const [monthlyContribution, setMonthlyContribution] = useState(500);
  const [annualReturn, setAnnualReturn] = useState(7);

  const results = useMemo((): RetirementResult => {
    const yearsToRetirement = retirementAge - currentAge;
    const monthlyReturn = annualReturn / 100 / 12;
    const totalMonths = yearsToRetirement * 12;
    const annualContribution = monthlyContribution * 12;

    if (yearsToRetirement <= 0 || monthlyReturn < 0) {
      return {
        finalAmount: 0,
        totalContributions: 0,
        totalGrowth: 0,
        yearlyBreakdown: []
      };
    }

    // Future Value of current savings
    const futureValueCurrent = currentSavings * Math.pow(1 + annualReturn / 100, yearsToRetirement);

    // Future Value of monthly contributions (annuity)
    const futureValueContributions = monthlyContribution * 
      ((Math.pow(1 + monthlyReturn, totalMonths) - 1) / monthlyReturn);

    const finalAmount = futureValueCurrent + futureValueContributions;
    const totalContributions = currentSavings + (annualContribution * yearsToRetirement);
    const totalGrowth = finalAmount - totalContributions;

    // Calculate year-by-year breakdown
    const yearlyBreakdown: RetirementResult['yearlyBreakdown'] = [];
    let balance = currentSavings;

    for (let year = 1; year <= yearsToRetirement; year++) {
      const growth = balance * (annualReturn / 100);
      balance = balance + growth + annualContribution;

      yearlyBreakdown.push({
        year,
        age: currentAge + year,
        contribution: annualContribution,
        balance: balance,
        growth: growth
      });
    }

    return {
      finalAmount,
      totalContributions,
      totalGrowth,
      yearlyBreakdown
    };
  }, [currentAge, retirementAge, currentSavings, monthlyContribution, annualReturn]);

  const exportToCSV = () => {
    const csvContent = [
      ['Year', 'Age', 'Annual Contribution', 'Growth', 'Balance'],
      ...results.yearlyBreakdown.map(row => [
        row.year,
        row.age,
        row.contribution.toFixed(2),
        row.growth.toFixed(2),
        row.balance.toFixed(2)
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'retirement-projection.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  const shareResults = async () => {
    const shareData = {
      title: 'Retirement Calculator Results',
      text: `Projected Retirement Savings: $${results.finalAmount.toFixed(0)} | Total Growth: $${results.totalGrowth.toFixed(0)}`,
      url: window.location.href
    };

    if (navigator.share) {
      await navigator.share(shareData);
    } else {
      await navigator.clipboard.writeText(`${shareData.text} - ${shareData.url}`);
      alert('Results copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <CalculatorStructuredData 
        name="Free Retirement Calculator"
        description="Calculate retirement savings with compound interest projections. Free retirement planning calculator with yearly breakdown."
        url="https://mudget.finance/tools/retirement-calculator"
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
                <PiggyBank className="w-6 h-6" />
              </div>
              <h1 className="text-4xl font-bold">Retirement Calculator</h1>
            </motion.div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Plan your retirement and see how your savings can grow over time with compound interest.
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
                    <TrendingUp className="w-5 h-5" />
                    Retirement Planning Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="currentAge" className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Current Age
                      </Label>
                      <Input
                        id="currentAge"
                        type="number"
                        value={currentAge}
                        onChange={(e) => setCurrentAge(Number(e.target.value))}
                        className="text-lg"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="retirementAge" className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Retirement Age
                      </Label>
                      <Input
                        id="retirementAge"
                        type="number"
                        value={retirementAge}
                        onChange={(e) => setRetirementAge(Number(e.target.value))}
                        className="text-lg"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="currentSavings" className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4" />
                      Current Retirement Savings
                    </Label>
                    <Input
                      id="currentSavings"
                      type="number"
                      value={currentSavings}
                      onChange={(e) => setCurrentSavings(Number(e.target.value))}
                      className="text-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="monthlyContribution" className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4" />
                      Monthly Contribution
                    </Label>
                    <Input
                      id="monthlyContribution"
                      type="number"
                      value={monthlyContribution}
                      onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                      className="text-lg"
                    />
                    <p className="text-sm text-gray-500">
                      ${(monthlyContribution * 12).toLocaleString()} per year
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="annualReturn" className="flex items-center gap-2">
                      <Percent className="w-4 h-4" />
                      Expected Annual Return (%)
                    </Label>
                    <Input
                      id="annualReturn"
                      type="number"
                      step="0.1"
                      value={annualReturn}
                      onChange={(e) => setAnnualReturn(Number(e.target.value))}
                      className="text-lg"
                    />
                    <p className="text-sm text-gray-500">
                      Historical stock market average is ~7-10%
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
                  <CardTitle>Projected Retirement Savings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-[#6ae58d]">
                    ${results.finalAmount.toLocaleString()}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    In {retirementAge - currentAge} years (age {retirementAge})
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Savings Breakdown</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Total Contributions:</span>
                    <span className="font-semibold">${results.totalContributions.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Total Growth:</span>
                    <span className="font-semibold text-green-600">${results.totalGrowth.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">Monthly Goal:</span>
                    <span className="font-semibold">${monthlyContribution.toLocaleString()}</span>
                  </div>
                  
                  <Separator />
                  
                  {/* Growth Visualization */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Contributions</span>
                      <span>{((results.totalContributions / results.finalAmount) * 100).toFixed(1)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-500 h-2 rounded-full" 
                        style={{ width: `${(results.totalContributions / results.finalAmount) * 100}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Growth</span>
                      <span>{((results.totalGrowth / results.finalAmount) * 100).toFixed(1)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full" 
                        style={{ width: `${(results.totalGrowth / results.finalAmount) * 100}%` }}
                      />
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex gap-2">
                    <Button
                      onClick={exportToCSV}
                      variant="outline"
                      className="flex-1"
                      disabled={results.yearlyBreakdown.length === 0}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Export CSV
                    </Button>
                    <Button
                      onClick={shareResults}
                      variant="outline"
                      className="flex-1"
                      disabled={results.finalAmount === 0}
                    >
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Growth Chart */}
              {results.yearlyBreakdown.length > 0 && (
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle>Savings Growth Over Time</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={results.yearlyBreakdown} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis 
                            dataKey="age" 
                            label={{ value: 'Age', position: 'insideBottom', offset: -10 }}
                          />
                          <YAxis 
                            tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
                            label={{ value: 'Amount ($)', angle: -90, position: 'insideLeft' }}
                          />
                          <Tooltip 
                            formatter={(value: number) => [`$${value.toLocaleString()}`, '']}
                            labelFormatter={(age) => `Age ${age}`}
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
                            name="Total Balance"
                            dot={{ fill: '#6ae58d', strokeWidth: 2, r: 4 }}
                          />
                          <Line 
                            type="monotone" 
                            dataKey={(entry) => currentSavings + (entry.year * monthlyContribution * 12)} 
                            stroke="#3b82f6" 
                            strokeWidth={2}
                            strokeDasharray="5 5"
                            name="Contributions Only"
                            dot={false}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="text-center mt-4">
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Green line shows total balance including compound growth
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
                      <strong>Disclaimer:</strong> This calculator provides working estimates only. Actual retirement savings and investment returns may vary based on market conditions, contribution limits, fees, and economic factors. Consult with a financial advisor for personalized retirement planning.
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
                    <h3 className="text-xl font-bold mb-2">Track Your Financial Vitals</h3>
                    <p className="mb-4">Monitor retirement savings alongside all your financial goals with Mudget.</p>
                    <Button
                      asChild
                      className="bg-black text-white hover:bg-gray-800"
                    >
                      <a href="https://app.mudget.finance/waitlist">
                        Plan with Mudget
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