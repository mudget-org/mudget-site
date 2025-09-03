"use client";

import React, { useState, useMemo, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Calculator, Download, Share2, TrendingUp, AlertCircle, CheckCircle, DollarSign, CreditCard, Calendar, Link } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { CalculatorStructuredData, FAQStructuredData, BreadcrumbStructuredData } from '@/components/StructuredData';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import NextLink from 'next/link';

interface CreditScoreResult {
  estimatedScore: number;
  scoreRange: { min: number; max: number };
  factors: {
    paymentHistory: { weight: number; impact: number; score: number };
    creditUtilization: { weight: number; impact: number; score: number };
    creditHistory: { weight: number; impact: number; score: number };
    creditMix: { weight: number; impact: number; score: number };
    newCredit: { weight: number; impact: number; score: number };
  };
  improvements: Array<{
    action: string;
    impact: string;
    timeframe: string;
    priority: 'high' | 'medium' | 'low';
  }>;
  timeline: Array<{
    month: number;
    score: number;
    action: string;
  }>;
}

function CreditScoreCalculatorContent() {
  const searchParams = useSearchParams();
  
  // Input states
  const [paymentHistoryPercent, setPaymentHistoryPercent] = useState([95]);
  const [creditUtilization, setCreditUtilization] = useState([30]);
  const [creditHistoryYears, setCreditHistoryYears] = useState([5]);
  const [creditCards, setCreditCards] = useState(3);
  const [totalCreditLimit, setTotalCreditLimit] = useState(15000);
  const [currentBalance, setCurrentBalance] = useState(4500);
  const [recentInquiries, setRecentInquiries] = useState(1);
  const [accountTypes, setAccountTypes] = useState("3");

  // Load values from URL parameters on component mount
  useEffect(() => {
    const urlPaymentHistory = searchParams.get('paymentHistory');
    const urlUtilization = searchParams.get('utilization');
    const urlCreditHistory = searchParams.get('creditHistory');
    const urlCreditCards = searchParams.get('creditCards');
    const urlCreditLimit = searchParams.get('creditLimit');
    const urlBalance = searchParams.get('balance');
    const urlInquiries = searchParams.get('inquiries');

    if (urlPaymentHistory) setPaymentHistoryPercent([Number(urlPaymentHistory)]);
    if (urlUtilization) setCreditUtilization([Number(urlUtilization)]);
    if (urlCreditHistory) setCreditHistoryYears([Number(urlCreditHistory)]);
    if (urlCreditCards) setCreditCards(Number(urlCreditCards));
    if (urlCreditLimit) setTotalCreditLimit(Number(urlCreditLimit));
    if (urlBalance) setCurrentBalance(Number(urlBalance));
    if (urlInquiries) setRecentInquiries(Number(urlInquiries));
  }, [searchParams]);

  const results = useMemo((): CreditScoreResult => {
    // Credit score calculation based on FICO factors
    const factors = {
      paymentHistory: {
        weight: 35,
        impact: paymentHistoryPercent[0] >= 95 ? 100 : paymentHistoryPercent[0] >= 90 ? 85 : paymentHistoryPercent[0] >= 80 ? 70 : 50,
        score: 0
      },
      creditUtilization: {
        weight: 30,
        impact: creditUtilization[0] <= 10 ? 100 : creditUtilization[0] <= 30 ? 75 : creditUtilization[0] <= 50 ? 50 : 25,
        score: 0
      },
      creditHistory: {
        weight: 15,
        impact: creditHistoryYears[0] >= 10 ? 100 : creditHistoryYears[0] >= 7 ? 85 : creditHistoryYears[0] >= 4 ? 70 : creditHistoryYears[0] >= 2 ? 55 : 35,
        score: 0
      },
      creditMix: {
        weight: 10,
        impact: Number(accountTypes) >= 4 ? 100 : Number(accountTypes) >= 3 ? 85 : Number(accountTypes) >= 2 ? 70 : 50,
        score: 0
      },
      newCredit: {
        weight: 10,
        impact: recentInquiries === 0 ? 100 : recentInquiries <= 1 ? 85 : recentInquiries <= 3 ? 65 : 40,
        score: 0
      }
    };

    // Calculate weighted score
    let weightedScore = 0;
    Object.entries(factors).forEach(([key, factor]) => {
      const score = (factor.impact / 100) * factor.weight;
      factors[key as keyof typeof factors].score = score;
      weightedScore += score;
    });

    // Convert to FICO scale (300-850)
    const estimatedScore = Math.round(300 + (weightedScore / 100) * 550);
    const scoreRange = {
      min: Math.max(300, estimatedScore - 25),
      max: Math.min(850, estimatedScore + 25)
    };

    // Generate improvement recommendations
    type improvement = {
      action: string;
      impact: string;
      timeframe: string;
      priority: "high" | "medium" | "low";
    }
    const improvements: improvement[] = [];
    
    if (creditUtilization[0] > 30) {
      improvements.push({
        action: `Pay down credit cards to below 30% utilization (currently ${creditUtilization[0]}%)`,
        impact: `+${Math.round((30 - creditUtilization[0]) * 0.5)} points`,
        timeframe: "1-2 months",
        priority: 'high' as const
      });
    }

    if (creditUtilization[0] > 10) {
      improvements.push({
        action: `Optimize utilization to below 10% for maximum impact`,
        impact: `+${Math.round((creditUtilization[0] - 10) * 0.3)} points`,
        timeframe: "1-2 months", 
        priority: creditUtilization[0] > 30 ? 'medium' as const : 'high' as const
      });
    }

    if (paymentHistoryPercent[0] < 95) {
      improvements.push({
        action: "Make all payments on time going forward",
        impact: `+${Math.round((95 - paymentHistoryPercent[0]) * 0.8)} points`,
        timeframe: "3-6 months",
        priority: 'high' as const
      });
    }

    if (Number(accountTypes) < 3) {
      improvements.push({
        action: "Consider diversifying credit types (installment loan, etc.)",
        impact: "+5-15 points",
        timeframe: "6-12 months",
        priority: 'low' as const
      });
    }

    if (recentInquiries > 2) {
      improvements.push({
        action: "Avoid new credit applications for the next 12 months",
        impact: "+5-10 points",
        timeframe: "12 months",
        priority: 'medium' as const
      });
    }

    // Generate timeline projection
    type line = {
        month: number;
        score: number;
        action: string;
    }

    const timeline: line[] = [];
    let currentScore = estimatedScore;
    
    for (let month = 0; month <= 12; month += 3) {
      let action = "";
      if (month === 0) {
        action = "Current Score";
      } else if (month === 3 && creditUtilization[0] > 30) {
        currentScore += Math.round((30 - creditUtilization[0]) * 0.4);
        action = "Lower utilization";
      } else if (month === 6 && paymentHistoryPercent[0] < 95) {
        currentScore += Math.round((95 - paymentHistoryPercent[0]) * 0.6);
        action = "Payment history improves";
      } else if (month === 12) {
        currentScore += Math.round(Math.random() * 10 + 5);
        action = "Continued good habits";
      }
      
      timeline.push({
        month,
        score: Math.min(850, currentScore),
        action
      });
    }

    return {
      estimatedScore,
      scoreRange,
      factors,
      improvements,
      timeline
    };
  }, [paymentHistoryPercent, creditUtilization, creditHistoryYears, creditCards, totalCreditLimit, currentBalance, recentInquiries, accountTypes]);

  const generateShareableURL = () => {
    const baseUrl = window.location.origin + window.location.pathname;
    const params = new URLSearchParams({
      paymentHistory: paymentHistoryPercent[0].toString(),
      utilization: creditUtilization[0].toString(),
      creditHistory: creditHistoryYears[0].toString(),
      creditCards: creditCards.toString(),
      creditLimit: totalCreditLimit.toString(),
      balance: currentBalance.toString(),
      inquiries: recentInquiries.toString()
    });
    return `${baseUrl}?${params.toString()}`;
  };

  const copyShareableLink = async () => {
    const shareableUrl = generateShareableURL();
    await navigator.clipboard.writeText(shareableUrl);
    alert('Shareable link copied to clipboard!');
  };

  const shareResults = async () => {
    const shareableUrl = generateShareableURL();
    const shareData = {
      title: 'Credit Score Calculator Results',
      text: `My estimated credit score: ${results.estimatedScore} (${getScoreCategory(results.estimatedScore)})`,
      url: shareableUrl
    };

    if (navigator.share) {
      await navigator.share(shareData);
    } else {
      await navigator.clipboard.writeText(`${shareData.text} - ${shareData.url}`);
      alert('Results and shareable link copied to clipboard!');
    }
  };

  const exportResults = () => {
    const data = [
      ['Credit Score Analysis'],
      [''],
      ['Estimated Score', results.estimatedScore],
      ['Score Range', `${results.scoreRange.min} - ${results.scoreRange.max}`],
      ['Category', getScoreCategory(results.estimatedScore)],
      [''],
      ['Factor Breakdown'],
      ['Payment History (35%)', `${results.factors.paymentHistory.score.toFixed(1)}/35`],
      ['Credit Utilization (30%)', `${results.factors.creditUtilization.score.toFixed(1)}/30`],
      ['Credit History (15%)', `${results.factors.creditHistory.score.toFixed(1)}/15`],
      ['Credit Mix (10%)', `${results.factors.creditMix.score.toFixed(1)}/10`],
      ['New Credit (10%)', `${results.factors.newCredit.score.toFixed(1)}/10`],
      [''],
      ['Improvement Recommendations'],
      ...results.improvements.map(imp => [imp.action, imp.impact, imp.timeframe])
    ];

    const csvContent = data.map(row => row.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'credit-score-analysis.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  function getScoreCategory(score: number): string {
    if (score >= 800) return "Exceptional";
    if (score >= 740) return "Very Good";
    if (score >= 670) return "Good";
    if (score >= 580) return "Fair";
    return "Poor";
  }

  function getScoreColor(score: number): string {
    if (score >= 740) return "#22c55e"; // green
    if (score >= 670) return "#84cc16"; // lime
    if (score >= 580) return "#eab308"; // yellow
    return "#ef4444"; // red
  }

  const factorData = Object.entries(results.factors).map(([key, factor]) => ({
    name: key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()),
    value: factor.score,
    fullValue: factor.weight,
    percentage: (factor.score / factor.weight) * 100
  }));

  const pieData = factorData.map((factor, index) => ({
    name: factor.name,
    value: factor.value,
    fill: ['#6ae58d', '#5ad17c', '#4ade80', '#22c55e', '#16a34a'][index]
  }));

  const creditScoreFAQs = [
    {
      question: "How accurate is this credit score calculator?",
      answer: "This calculator provides an estimate based on the standard FICO scoring model factors. Actual scores may vary depending on specific credit bureau data and scoring model variations. For your official score, check with your bank or credit monitoring service."
    },
    {
      question: "What factors affect my credit score the most?",
      answer: "Payment history (35%) and credit utilization (30%) have the biggest impact on your credit score. These two factors alone make up 65% of your FICO score calculation."
    },
    {
      question: "How quickly can I improve my credit score?",
      answer: "Credit utilization changes can impact your score within 1-2 months. Payment history improvements take 3-6 months to show significant impact. Major improvements typically take 6-12 months of consistent good habits."
    },
    {
      question: "What's a good credit utilization ratio?",
      answer: "Keep your credit utilization below 30% for good scores, and below 10% for excellent scores. This applies both to individual cards and your overall credit portfolio."
    }
  ];

  const breadcrumbItems = [
    { name: "Home", url: "https://mudget.finance" },
    { name: "Financial Tools", url: "https://mudget.finance/tools" },
    { name: "Credit Score Calculator", url: "https://mudget.finance/tools/credit-score-calculator" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <CalculatorStructuredData 
        name="Free Credit Score Calculator"
        description="Calculate your estimated credit score and get personalized improvement recommendations. Understand what factors affect your FICO score most."
        url="https://mudget.finance/tools/credit-score-calculator"
      />
      <FAQStructuredData faqs={creditScoreFAQs} />
      <BreadcrumbStructuredData items={breadcrumbItems} />
      <Nav AppURL="https://app.mudget.finance" />
      
      <main className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Breadcrumb Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-6"
          >
            <NextLink href="/" className="hover:text-[#6ae58d] transition-colors">Home</NextLink>
            <span>/</span>
            <NextLink href="/tools" className="hover:text-[#6ae58d] transition-colors">Financial Tools</NextLink>
            <span>/</span>
            <span className="text-gray-900 dark:text-gray-100">Credit Score Calculator</span>
          </motion.nav>

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
              <h1 className="text-4xl font-bold">Credit Score Calculator</h1>
            </motion.div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Estimate your credit score and discover personalized strategies to improve it. Get insights into what factors impact your FICO score most.
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
                    <CreditCard className="w-5 h-5" />
                    Credit Profile
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Payment History */}
                  <div className="space-y-3">
                    <Label className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Payment History: {paymentHistoryPercent[0]}% on-time
                    </Label>
                    <Slider
                      value={paymentHistoryPercent}
                      onValueChange={setPaymentHistoryPercent}
                      max={100}
                      min={50}
                      step={5}
                      className="w-full"
                    />
                    <p className="text-sm text-gray-500">
                      Percentage of payments made on time (most important factor)
                    </p>
                  </div>

                  {/* Credit Utilization */}
                  <div className="space-y-3">
                    <Label className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4" />
                      Credit Utilization: {creditUtilization[0]}%
                    </Label>
                    <Slider
                      value={creditUtilization}
                      onValueChange={setCreditUtilization}
                      max={100}
                      min={0}
                      step={5}
                      className="w-full"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="currentBalance">Current Balance</Label>
                        <Input
                          id="currentBalance"
                          type="number"
                          value={currentBalance}
                          onChange={(e) => setCurrentBalance(Number(e.target.value))}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="totalLimit">Total Credit Limit</Label>
                        <Input
                          id="totalLimit"
                          type="number"
                          value={totalCreditLimit}
                          onChange={(e) => setTotalCreditLimit(Number(e.target.value))}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Credit History Length */}
                  <div className="space-y-3">
                    <Label className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Credit History: {creditHistoryYears[0]} years
                    </Label>
                    <Slider
                      value={creditHistoryYears}
                      onValueChange={setCreditHistoryYears}
                      max={20}
                      min={0}
                      step={1}
                      className="w-full"
                    />
                    <p className="text-sm text-gray-500">
                      Age of your oldest credit account
                    </p>
                  </div>

                  {/* Types of Credit */}
                  <div className="space-y-3">
                    <Label>Credit Mix</Label>
                    <Select value={accountTypes} onValueChange={setAccountTypes}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select account types" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 type (credit cards only)</SelectItem>
                        <SelectItem value="2">2 types (cards + 1 other)</SelectItem>
                        <SelectItem value="3">3 types (cards + loans)</SelectItem>
                        <SelectItem value="4">4+ types (diverse mix)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Recent Inquiries */}
                  <div className="space-y-2">
                    <Label htmlFor="inquiries" className="flex items-center gap-2">
                      <AlertCircle className="w-4 h-4" />
                      Hard Inquiries (last 12 months)
                    </Label>
                    <Input
                      id="inquiries"
                      type="number"
                      value={recentInquiries}
                      onChange={(e) => setRecentInquiries(Number(e.target.value))}
                      min={0}
                      max={10}
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
              {/* Credit Score Result */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Estimated Credit Score</span>
                    <Badge 
                      style={{ backgroundColor: getScoreColor(results.estimatedScore) }}
                      className="text-white"
                    >
                      {getScoreCategory(results.estimatedScore)}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div 
                      className="text-6xl font-bold mb-2"
                      style={{ color: getScoreColor(results.estimatedScore) }}
                    >
                      {results.estimatedScore}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      Range: {results.scoreRange.min} - {results.scoreRange.max}
                    </p>
                  </div>
                  
                  <Separator className="my-6" />
                  
                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <Button
                        onClick={exportResults}
                        variant="outline"
                        className="flex-1"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Export Analysis
                      </Button>
                      <Button
                        onClick={shareResults}
                        variant="outline"
                        className="flex-1"
                      >
                        <Share2 className="w-4 h-4 mr-2" />
                        Share
                      </Button>
                    </div>
                    <Button
                      onClick={copyShareableLink}
                      variant="outline"
                      className="w-full"
                    >
                      <Link className="w-4 h-4 mr-2" />
                      Copy Shareable Link
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Factor Breakdown */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Score Factor Breakdown</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 mb-4">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={pieData}
                          cx="50%"
                          cy="50%"
                          innerRadius={40}
                          outerRadius={80}
                          dataKey="value"
                        >
                          {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.fill} />
                          ))}
                        </Pie>
                        <Tooltip 
                          formatter={(value: number, name: string) => [
                            `${value.toFixed(1)} points`,
                            name
                          ]}
                        />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  
                  <div className="space-y-2">
                    {factorData.map((factor, index) => (
                      <div key={factor.name} className="flex justify-between items-center">
                        <span className="text-sm">{factor.name}</span>
                        <span className="font-medium">
                          {factor.value.toFixed(1)}/{factor.fullValue}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Improvement Timeline */}
              {results.timeline.length > 0 && (
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5" />
                      Improvement Timeline
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="h-48">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={results.timeline}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis 
                            dataKey="month" 
                            tickFormatter={(value) => `${value}m`}
                          />
                          <YAxis domain={[300, 850]} />
                          <Tooltip 
                            formatter={(value: number) => [`${value}`, 'Credit Score']}
                            labelFormatter={(value) => `Month ${value}`}
                          />
                          <Bar dataKey="score" fill="#6ae58d" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              )}
            </motion.div>
          </div>

          {/* Improvement Recommendations */}
          {results.improvements.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Personalized Improvement Plan
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {results.improvements.map((improvement, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-lg border-l-4 ${
                          improvement.priority === 'high'
                            ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                            : improvement.priority === 'medium'
                            ? 'border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20'
                            : 'border-green-500 bg-green-50 dark:bg-green-900/20'
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge 
                                variant={improvement.priority === 'high' ? 'destructive' : 
                                        improvement.priority === 'medium' ? 'default' : 'secondary'}
                              >
                                {improvement.priority} priority
                              </Badge>
                              <span className="text-sm text-gray-500">{improvement.timeframe}</span>
                            </div>
                            <p className="font-medium mb-1">{improvement.action}</p>
                            <p className="text-sm text-green-600 font-medium">
                              Potential impact: {improvement.impact}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Disclaimer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <Card className="bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800">
              <CardContent className="p-4">
                <p className="text-sm text-amber-800 dark:text-amber-200">
                  <strong>Disclaimer:</strong> This calculator provides working estimates only. Actual credit scores may vary based on credit bureau algorithms, reporting timing, and individual credit profiles. For official credit scores, check with authorized credit monitoring services or your lender.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <Card className="bg-gradient-to-r from-[#6ae58d] to-[#5ad17c] text-black shadow-lg">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Improve Your Credit Score?</h2>
                <p className="text-lg mb-6 max-w-2xl mx-auto">
                  Track your credit improvement journey alongside your budget with Mudget. Monitor your financial vitals in one place.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                    <NextLink href="/tools/mortgage-calculator">
                      Try Mortgage Calculator
                    </NextLink>
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

export default function CreditScoreCalculator() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CreditScoreCalculatorContent />
    </Suspense>
  );
}