"use client";

import React, { useState, useMemo, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Download, 
  Share2, 
  Car, 
  Home, 
  Heart, 
  DollarSign, 
  Users, 
  Calculator,
  AlertTriangle,
  CheckCircle,
  TrendingUp,
  FileText,
  Baby,
  GraduationCap,
  Link
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import { CalculatorStructuredData, FAQStructuredData, BreadcrumbStructuredData } from '@/components/StructuredData';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import NextLink from 'next/link';

interface InsuranceResult {
  lifeInsurance: {
    recommended: number;
    method: string;
    breakdown: {
      incomeReplacement: number;
      debtPayoff: number;
      childEducation: number;
      finalExpenses: number;
    };
  };
  disability: {
    shortTerm: number;
    longTerm: number;
  };
  autoInsurance: {
    liability: number;
    comprehensive: number;
    collision: number;
  };
  homeInsurance: {
    dwelling: number;
    personalProperty: number;
    liability: number;
  };
  healthInsurance: {
    emergencyFund: number;
    annualPremium: number;
  };
  totalAnnualPremium: number;
  riskProfile: 'low' | 'moderate' | 'high';
  recommendations: Array<{
    type: string;
    recommendation: string;
    priority: 'high' | 'medium' | 'low';
    savings: string;
  }>;
}

function InsuranceCalculatorContent() {
  const searchParams = useSearchParams();
  
  // Personal Information
  const [age, setAge] = useState(35);
  const [annualIncome, setAnnualIncome] = useState(75000);
  const [maritalStatus, setMaritalStatus] = useState("married");
  const [children, setChildren] = useState(2);
  const [dependents, setDependents] = useState(2);
  
  // Financial Information
  const [totalDebt, setTotalDebt] = useState(250000);
  const [mortgage, setMortgage] = useState(200000);
  const [emergencyFund, setEmergencyFund] = useState(15000);
  const [savings, setSavings] = useState(50000);
  const [monthlyExpenses, setMonthlyExpenses] = useState(6000);
  
  // Home Information
  const [homeValue, setHomeValue] = useState(350000);
  const [homeType, setHomeType] = useState("single-family");
  const [homeAge, setHomeAge] = useState([15]);
  
  // Auto Information
  const [vehicles, setVehicles] = useState(2);
  const [vehicleValue, setVehicleValue] = useState(25000);
  const [drivingRecord, setDrivingRecord] = useState("clean");
  
  // Health Information
  const [healthStatus, setHealthStatus] = useState("good");
  const [healthConditions, setHealthConditions] = useState<string[]>([]);
  
  // Employment Information
  const [employmentType, setEmploymentType] = useState("full-time");
  const [jobRisk, setJobRisk] = useState("low");
  const [employerBenefits, setEmployerBenefits] = useState<string[]>([]);
  
  // Special Considerations
  const [retirementGoal, setRetirementGoal] = useState(65);
  const [educationGoals, setEducationGoals] = useState(true);
  const [caregivingResponsibilities, setCaregivingResponsibilities] = useState(false);

  // Load values from URL parameters
  useEffect(() => {
    const urlAge = searchParams.get('age');
    const urlIncome = searchParams.get('income');
    const urlDebt = searchParams.get('debt');
    const urlHomeValue = searchParams.get('homeValue');
    const urlVehicles = searchParams.get('vehicles');

    if (urlAge) setAge(Number(urlAge));
    if (urlIncome) setAnnualIncome(Number(urlIncome));
    if (urlDebt) setTotalDebt(Number(urlDebt));
    if (urlHomeValue) setHomeValue(Number(urlHomeValue));
    if (urlVehicles) setVehicles(Number(urlVehicles));
  }, [searchParams]);

  const results = useMemo((): InsuranceResult => {
    // Life Insurance Calculation (DIME Method + Income Replacement)
    const incomeMultiplier = age < 30 ? 12 : age < 40 ? 10 : age < 50 ? 8 : 6;
    const incomeReplacement = annualIncome * incomeMultiplier;
    const debtPayoff = totalDebt;
    const childEducation = educationGoals ? children * 50000 : 0;
    const finalExpenses = 15000;
    
    const lifeInsuranceRecommended = incomeReplacement + debtPayoff + childEducation + finalExpenses - savings;
    
    // Disability Insurance
    const shortTermDisability = monthlyExpenses * 6;
    const longTermDisability = annualIncome * 0.6;
    
    // Auto Insurance
    const autoLiability = Math.max(100000, annualIncome * 0.5);
    const autoComprehensive = vehicleValue * 0.8;
    const autoCollision = vehicleValue * 0.8;
    
    // Home Insurance
    const dwellingCoverage = homeValue * 0.8;
    const personalProperty = dwellingCoverage * 0.5;
    const homeLiability = Math.max(300000, annualIncome * 2);
    
    // Health Insurance
    const healthEmergencyFund = monthlyExpenses * 6;
    const healthAnnualPremium = annualIncome * 0.08;
    
    // Risk Assessment
    let riskScore = 0;
    if (age > 50) riskScore += 2;
    if (healthConditions.length > 0) riskScore += 3;
    if (jobRisk === 'high') riskScore += 2;
    if (totalDebt > annualIncome * 3) riskScore += 2;
    if (emergencyFund < monthlyExpenses * 3) riskScore += 1;
    
    const riskProfile = riskScore >= 6 ? 'high' : riskScore >= 3 ? 'moderate' : 'low';
    
    // Generate recommendations
    const recommendations = [];
    
    if (emergencyFund < monthlyExpenses * 6) {
      recommendations.push({
        type: "Emergency Fund",
        recommendation: `Build emergency fund to $${(monthlyExpenses * 6).toLocaleString()}`,
        priority: 'high' as const,
        savings: "Reduces need for excess insurance"
      });
    }
    
    if (lifeInsuranceRecommended > 1000000) {
      recommendations.push({
        type: "Life Insurance",
        recommendation: "Consider term life insurance for cost-effective coverage",
        priority: 'high' as const,
        savings: "Up to 90% cheaper than whole life"
      });
    }
    
    if (homeAge[0] > 20 && homeType === 'single-family') {
      recommendations.push({
        type: "Home Insurance",
        recommendation: "Review coverage for older home systems and structures",
        priority: 'medium' as const,
        savings: "Prevent coverage gaps"
      });
    }
    
    if (drivingRecord === 'clean' && vehicles > 1) {
      recommendations.push({
        type: "Auto Insurance",
        recommendation: "Consider multi-vehicle discount and higher deductibles",
        priority: 'medium' as const,
        savings: "10-25% on premiums"
      });
    }
    
    if (employerBenefits.length === 0) {
      recommendations.push({
        type: "Employer Benefits",
        recommendation: "Maximize employer-provided insurance benefits first",
        priority: 'high' as const,
        savings: "Often 50% cheaper than individual plans"
      });
    }

    // Estimate total annual premiums
    const totalAnnualPremium = 
      (lifeInsuranceRecommended * 0.002) + // Life insurance premium estimate
      (healthAnnualPremium) + // Health insurance
      (dwellingCoverage * 0.003) + // Home insurance
      (autoLiability * 0.015) + // Auto insurance
      (longTermDisability * 0.02); // Disability insurance

    return {
      lifeInsurance: {
        recommended: Math.max(0, lifeInsuranceRecommended),
        method: "DIME + Income Replacement",
        breakdown: {
          incomeReplacement,
          debtPayoff,
          childEducation,
          finalExpenses
        }
      },
      disability: {
        shortTerm: shortTermDisability,
        longTerm: longTermDisability
      },
      autoInsurance: {
        liability: autoLiability,
        comprehensive: autoComprehensive,
        collision: autoCollision
      },
      homeInsurance: {
        dwelling: dwellingCoverage,
        personalProperty,
        liability: homeLiability
      },
      healthInsurance: {
        emergencyFund: healthEmergencyFund,
        annualPremium: healthAnnualPremium
      },
      totalAnnualPremium,
      riskProfile,
      recommendations
    };
  }, [
    age, annualIncome, maritalStatus, children, dependents, totalDebt, mortgage,
    emergencyFund, savings, monthlyExpenses, homeValue, homeType, homeAge,
    vehicles, vehicleValue, drivingRecord, healthStatus, healthConditions,
    employmentType, jobRisk, employerBenefits, retirementGoal, educationGoals,
    caregivingResponsibilities
  ]);

  const generateShareableURL = () => {
    const baseUrl = window.location.origin + window.location.pathname;
    const params = new URLSearchParams({
      age: age.toString(),
      income: annualIncome.toString(),
      debt: totalDebt.toString(),
      homeValue: homeValue.toString(),
      vehicles: vehicles.toString()
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
      title: 'Insurance Coverage Calculator Results',
      text: `My insurance needs: Life $${results.lifeInsurance.recommended.toLocaleString()}, Annual Premium ~$${results.totalAnnualPremium.toLocaleString()}`,
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
      ['Insurance Coverage Analysis'],
      [''],
      ['Life Insurance'],
      ['Recommended Coverage', `$${results.lifeInsurance.recommended.toLocaleString()}`],
      ['Method', results.lifeInsurance.method],
      ['Income Replacement', `$${results.lifeInsurance.breakdown.incomeReplacement.toLocaleString()}`],
      ['Debt Payoff', `$${results.lifeInsurance.breakdown.debtPayoff.toLocaleString()}`],
      ['Child Education', `$${results.lifeInsurance.breakdown.childEducation.toLocaleString()}`],
      ['Final Expenses', `$${results.lifeInsurance.breakdown.finalExpenses.toLocaleString()}`],
      [''],
      ['Home Insurance'],
      ['Dwelling Coverage', `$${results.homeInsurance.dwelling.toLocaleString()}`],
      ['Personal Property', `$${results.homeInsurance.personalProperty.toLocaleString()}`],
      ['Liability', `$${results.homeInsurance.liability.toLocaleString()}`],
      [''],
      ['Auto Insurance'],
      ['Liability Coverage', `$${results.autoInsurance.liability.toLocaleString()}`],
      ['Comprehensive', `$${results.autoInsurance.comprehensive.toLocaleString()}`],
      ['Collision', `$${results.autoInsurance.collision.toLocaleString()}`],
      [''],
      ['Disability Insurance'],
      ['Short-term Coverage', `$${results.disability.shortTerm.toLocaleString()}`],
      ['Long-term Coverage', `$${results.disability.longTerm.toLocaleString()}`],
      [''],
      ['Total Estimated Annual Premium', `$${results.totalAnnualPremium.toLocaleString()}`],
      ['Risk Profile', results.riskProfile],
      [''],
      ['Recommendations'],
      ...results.recommendations.map(rec => [rec.type, rec.recommendation, rec.priority, rec.savings])
    ];

    const csvContent = data.map(row => row.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'insurance-coverage-analysis.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleHealthConditionChange = (condition: string, checked: boolean) => {
    if (checked) {
      setHealthConditions([...healthConditions, condition]);
    } else {
      setHealthConditions(healthConditions.filter(c => c !== condition));
    }
  };

  const handleEmployerBenefitChange = (benefit: string, checked: boolean) => {
    if (checked) {
      setEmployerBenefits([...employerBenefits, benefit]);
    } else {
      setEmployerBenefits(employerBenefits.filter(b => b !== benefit));
    }
  };

  const pieData = [
    { name: 'Life Insurance', value: results.lifeInsurance.recommended, fill: '#6ae58d' },
    { name: 'Home Dwelling', value: results.homeInsurance.dwelling, fill: '#5ad17c' },
    { name: 'Auto Liability', value: results.autoInsurance.liability, fill: '#4ade80' },
    { name: 'Disability LT', value: results.disability.longTerm, fill: '#22c55e' }
  ];

  const premiumBreakdown = [
    { name: 'Life', amount: results.lifeInsurance.recommended * 0.002 },
    { name: 'Health', amount: results.healthInsurance.annualPremium },
    { name: 'Home', amount: results.homeInsurance.dwelling * 0.003 },
    { name: 'Auto', amount: results.autoInsurance.liability * 0.015 },
    { name: 'Disability', amount: results.disability.longTerm * 0.02 }
  ];

  const insuranceFAQs = [
    {
      question: "How much life insurance do I really need?",
      answer: "Most experts recommend 10-12 times your annual income for life insurance. This calculator uses the DIME method (Debt, Income, Mortgage, Education) plus income replacement to give you a comprehensive estimate based on your specific situation."
    },
    {
      question: "What's the difference between term and whole life insurance?",
      answer: "Term life insurance provides coverage for a specific period (10, 20, or 30 years) and is much cheaper. Whole life insurance includes an investment component but costs 10-20 times more. Most financial experts recommend term life insurance for most people."
    },
    {
      question: "How much should I spend on insurance annually?",
      answer: "A general rule is to spend 10-15% of your gross income on all insurance combined (health, life, auto, home, disability). However, this varies based on your risk profile and family situation."
    },
    {
      question: "Do I need disability insurance if I have savings?",
      answer: "Yes, especially if you're young. Statistics show a 25-year-old has a 30% chance of becoming disabled before retirement. Disability insurance protects your ability to earn income, which is typically your largest asset."
    },
    {
      question: "How often should I review my insurance coverage?",
      answer: "Review your insurance annually or after major life events (marriage, children, home purchase, job change). Your insurance needs change as your financial situation evolves."
    }
  ];

  const breadcrumbItems = [
    { name: "Home", url: "https://mudget.finance" },
    { name: "Financial Tools", url: "https://mudget.finance/tools" },
    { name: "Insurance Calculator", url: "https://mudget.finance/tools/insurance-calculator" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <CalculatorStructuredData 
        name="Free Insurance Coverage Calculator"
        description="Calculate how much life, health, auto, and home insurance coverage you need. Get personalized recommendations based on your financial situation."
        url="https://mudget.finance/tools/insurance-calculator"
      />
      <FAQStructuredData faqs={insuranceFAQs} />
      <BreadcrumbStructuredData items={breadcrumbItems} />
      <Nav AppURL="https://app.mudget.finance" />
      
      <main className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
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
            <span className="text-gray-900 dark:text-gray-100">Insurance Calculator</span>
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
                <Shield className="w-6 h-6" />
              </div>
              <h1 className="text-4xl font-bold">Insurance Coverage Calculator</h1>
            </motion.div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Calculate how much life, health, auto, and home insurance coverage you need. Get personalized recommendations to protect your financial future.
            </p>
          </div>

          <div className="grid xl:grid-cols-3 gap-8">
            {/* Input Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="xl:col-span-2"
            >
              <Tabs defaultValue="personal" className="space-y-6">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="personal">Personal</TabsTrigger>
                  <TabsTrigger value="financial">Financial</TabsTrigger>
                  <TabsTrigger value="property">Property</TabsTrigger>
                  <TabsTrigger value="health">Health & Work</TabsTrigger>
                </TabsList>

                <TabsContent value="personal" className="space-y-6">
                  <Card className="shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Users className="w-5 h-5" />
                        Personal Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="age">Age</Label>
                          <Input
                            id="age"
                            type="number"
                            value={age}
                            onChange={(e) => setAge(Number(e.target.value))}
                            min={18}
                            max={80}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="income">Annual Income</Label>
                          <Input
                            id="income"
                            type="number"
                            value={annualIncome}
                            onChange={(e) => setAnnualIncome(Number(e.target.value))}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Marital Status</Label>
                          <Select value={maritalStatus} onValueChange={setMaritalStatus}>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="single">Single</SelectItem>
                              <SelectItem value="married">Married</SelectItem>
                              <SelectItem value="divorced">Divorced</SelectItem>
                              <SelectItem value="widowed">Widowed</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="children">Number of Children</Label>
                          <Input
                            id="children"
                            type="number"
                            value={children}
                            onChange={(e) => setChildren(Number(e.target.value))}
                            min={0}
                            max={10}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="dependents">Total Dependents</Label>
                          <Input
                            id="dependents"
                            type="number"
                            value={dependents}
                            onChange={(e) => setDependents(Number(e.target.value))}
                            min={0}
                            max={10}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="retirementAge">Planned Retirement Age</Label>
                          <Input
                            id="retirementAge"
                            type="number"
                            value={retirementGoal}
                            onChange={(e) => setRetirementGoal(Number(e.target.value))}
                            min={50}
                            max={80}
                          />
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="education"
                            checked={educationGoals}
                            onCheckedChange={(checked) => setEducationGoals(checked as boolean)}
                          />
                          <Label htmlFor="education">Planning to fund children's education</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="caregiving"
                            checked={caregivingResponsibilities}
                            onCheckedChange={(checked) => setCaregivingResponsibilities(checked as boolean)}
                          />
                          <Label htmlFor="caregiving">Caregiving responsibilities for elderly parents</Label>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="financial" className="space-y-6">
                  <Card className="shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <DollarSign className="w-5 h-5" />
                        Financial Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="monthlyExpenses">Monthly Expenses</Label>
                          <Input
                            id="monthlyExpenses"
                            type="number"
                            value={monthlyExpenses}
                            onChange={(e) => setMonthlyExpenses(Number(e.target.value))}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="totalDebt">Total Debt (including mortgage)</Label>
                          <Input
                            id="totalDebt"
                            type="number"
                            value={totalDebt}
                            onChange={(e) => setTotalDebt(Number(e.target.value))}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="mortgage">Mortgage Balance</Label>
                          <Input
                            id="mortgage"
                            type="number"
                            value={mortgage}
                            onChange={(e) => setMortgage(Number(e.target.value))}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="emergencyFund">Emergency Fund</Label>
                          <Input
                            id="emergencyFund"
                            type="number"
                            value={emergencyFund}
                            onChange={(e) => setEmergencyFund(Number(e.target.value))}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="savings">Total Savings & Investments</Label>
                          <Input
                            id="savings"
                            type="number"
                            value={savings}
                            onChange={(e) => setSavings(Number(e.target.value))}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="property" className="space-y-6">
                  <Card className="shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Home className="w-5 h-5" />
                        Property Information
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="homeValue">Home Value</Label>
                          <Input
                            id="homeValue"
                            type="number"
                            value={homeValue}
                            onChange={(e) => setHomeValue(Number(e.target.value))}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Home Type</Label>
                          <Select value={homeType} onValueChange={setHomeType}>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="single-family">Single Family</SelectItem>
                              <SelectItem value="condo">Condominium</SelectItem>
                              <SelectItem value="townhouse">Townhouse</SelectItem>
                              <SelectItem value="mobile">Mobile Home</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-3">
                          <Label>Home Age: {homeAge[0]} years</Label>
                          <Slider
                            value={homeAge}
                            onValueChange={setHomeAge}
                            max={100}
                            min={0}
                            step={1}
                            className="w-full"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="vehicles">Number of Vehicles</Label>
                          <Input
                            id="vehicles"
                            type="number"
                            value={vehicles}
                            onChange={(e) => setVehicles(Number(e.target.value))}
                            min={0}
                            max={10}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="vehicleValue">Average Vehicle Value</Label>
                          <Input
                            id="vehicleValue"
                            type="number"
                            value={vehicleValue}
                            onChange={(e) => setVehicleValue(Number(e.target.value))}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Driving Record</Label>
                          <Select value={drivingRecord} onValueChange={setDrivingRecord}>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="clean">Clean Record</SelectItem>
                              <SelectItem value="minor">Minor Violations</SelectItem>
                              <SelectItem value="major">Major Violations</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="health" className="space-y-6">
                  <Card className="shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Heart className="w-5 h-5" />
                        Health & Employment
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label>Overall Health Status</Label>
                          <Select value={healthStatus} onValueChange={setHealthStatus}>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="excellent">Excellent</SelectItem>
                              <SelectItem value="good">Good</SelectItem>
                              <SelectItem value="fair">Fair</SelectItem>
                              <SelectItem value="poor">Poor</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label>Employment Type</Label>
                          <Select value={employmentType} onValueChange={setEmploymentType}>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="full-time">Full-time Employee</SelectItem>
                              <SelectItem value="self-employed">Self-employed</SelectItem>
                              <SelectItem value="contractor">Independent Contractor</SelectItem>
                              <SelectItem value="part-time">Part-time</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label>Job Risk Level</Label>
                          <Select value={jobRisk} onValueChange={setJobRisk}>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="low">Low Risk (Office Work)</SelectItem>
                              <SelectItem value="medium">Medium Risk</SelectItem>
                              <SelectItem value="high">High Risk (Physical Labor)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <Label>Health Conditions (check all that apply):</Label>
                        <div className="grid grid-cols-2 gap-3">
                          {['Diabetes', 'Heart Disease', 'High Blood Pressure', 'Obesity', 'Mental Health', 'Chronic Pain'].map((condition) => (
                            <div key={condition} className="flex items-center space-x-2">
                              <Checkbox
                                id={condition}
                                checked={healthConditions.includes(condition)}
                                onCheckedChange={(checked) => handleHealthConditionChange(condition, checked as boolean)}
                              />
                              <Label htmlFor={condition}>{condition}</Label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <Label>Employer Benefits (check all that apply):</Label>
                        <div className="grid grid-cols-2 gap-3">
                          {['Health Insurance', 'Life Insurance', 'Disability Insurance', '401k Match', 'HSA', 'Flexible Spending'].map((benefit) => (
                            <div key={benefit} className="flex items-center space-x-2">
                              <Checkbox
                                id={benefit}
                                checked={employerBenefits.includes(benefit)}
                                onCheckedChange={(checked) => handleEmployerBenefitChange(benefit, checked as boolean)}
                              />
                              <Label htmlFor={benefit}>{benefit}</Label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </motion.div>

            {/* Results Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              {/* Coverage Summary */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Insurance Summary</span>
                    <Badge 
                      variant={results.riskProfile === 'high' ? 'destructive' : 
                              results.riskProfile === 'moderate' ? 'default' : 'secondary'}
                    >
                      {results.riskProfile} risk
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Life Insurance:</span>
                      <span className="font-bold">${results.lifeInsurance.recommended.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Home Dwelling:</span>
                      <span className="font-bold">${results.homeInsurance.dwelling.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Auto Liability:</span>
                      <span className="font-bold">${results.autoInsurance.liability.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>LT Disability:</span>
                      <span className="font-bold">${results.disability.longTerm.toLocaleString()}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-lg">
                      <span>Est. Annual Premium:</span>
                      <span className="font-bold text-[#6ae58d]">${results.totalAnnualPremium.toLocaleString()}</span>
                    </div>
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
                        Export
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
                      Copy Link
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Coverage Breakdown Chart */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Coverage Breakdown</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
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
                          formatter={(value: number) => [`$${value.toLocaleString()}`, 'Coverage']}
                        />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Premium Breakdown */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Annual Premium Estimate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-48">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={premiumBreakdown}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip 
                          formatter={(value: number) => [`$${value.toLocaleString()}`, 'Annual Premium']}
                        />
                        <Bar dataKey="amount" fill="#6ae58d" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Detailed Breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <Tabs defaultValue="life" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="life">Life Insurance</TabsTrigger>
                <TabsTrigger value="home">Home Insurance</TabsTrigger>
                <TabsTrigger value="auto">Auto Insurance</TabsTrigger>
                <TabsTrigger value="disability">Disability</TabsTrigger>
              </TabsList>

              <TabsContent value="life">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Heart className="w-5 h-5" />
                      Life Insurance Analysis
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold mb-3">Coverage Breakdown:</h3>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span>Income Replacement:</span>
                            <span>${results.lifeInsurance.breakdown.incomeReplacement.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Debt Payoff:</span>
                            <span>${results.lifeInsurance.breakdown.debtPayoff.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Child Education:</span>
                            <span>${results.lifeInsurance.breakdown.childEducation.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Final Expenses:</span>
                            <span>${results.lifeInsurance.breakdown.finalExpenses.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Less: Existing Savings:</span>
                            <span>-${savings.toLocaleString()}</span>
                          </div>
                          <Separator />
                          <div className="flex justify-between font-bold">
                            <span>Total Recommended:</span>
                            <span>${results.lifeInsurance.recommended.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-3">Method Used:</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                          {results.lifeInsurance.method} - This method considers your debt obligations, 
                          income replacement needs, mortgage balance, and education funding goals.
                        </p>
                        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                            💡 Pro Tip
                          </h4>
                          <p className="text-sm text-blue-700 dark:text-blue-300">
                            Consider term life insurance for this amount. It's typically 10-20x cheaper 
                            than whole life insurance and provides the same death benefit protection.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="home">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Home className="w-5 h-5" />
                      Home Insurance Analysis
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold mb-3">Coverage Recommendations:</h3>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span>Dwelling Coverage:</span>
                            <span>${results.homeInsurance.dwelling.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Personal Property:</span>
                            <span>${results.homeInsurance.personalProperty.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Liability Coverage:</span>
                            <span>${results.homeInsurance.liability.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-3">Coverage Details:</h3>
                        <div className="space-y-3 text-sm">
                          <p><strong>Dwelling:</strong> 80% of home value to account for land value</p>
                          <p><strong>Personal Property:</strong> 50% of dwelling coverage for belongings</p>
                          <p><strong>Liability:</strong> Minimum $300k or 2x annual income for lawsuit protection</p>
                        </div>
                        {homeAge[0] > 20 && (
                          <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg mt-4">
                            <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">
                              ⚠️ Older Home Notice
                            </h4>
                            <p className="text-sm text-amber-700 dark:text-amber-300">
                              Your home is {homeAge[0]} years old. Consider additional coverage for 
                              systems and structures that may not be covered under standard policies.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="auto">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Car className="w-5 h-5" />
                      Auto Insurance Analysis
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold mb-3">Coverage Per Vehicle:</h3>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span>Liability Coverage:</span>
                            <span>${results.autoInsurance.liability.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Comprehensive:</span>
                            <span>${results.autoInsurance.comprehensive.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Collision:</span>
                            <span>${results.autoInsurance.collision.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-3">Recommendations:</h3>
                        <div className="space-y-3 text-sm">
                          <p><strong>Liability:</strong> Higher limits protect your assets in accidents</p>
                          <p><strong>Comprehensive/Collision:</strong> Based on 80% of vehicle value</p>
                          <p><strong>Deductible:</strong> Consider $500-1000 for lower premiums</p>
                        </div>
                        {vehicles > 1 && drivingRecord === 'clean' && (
                          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg mt-4">
                            <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                              💰 Savings Opportunity
                            </h4>
                            <p className="text-sm text-green-700 dark:text-green-300">
                              With {vehicles} vehicles and a clean record, you may qualify for 
                              multi-car discounts of 10-25% on your premiums.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="disability">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="w-5 h-5" />
                      Disability Insurance Analysis
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold mb-3">Coverage Recommendations:</h3>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span>Short-term Coverage:</span>
                            <span>${results.disability.shortTerm.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Long-term Coverage:</span>
                            <span>${results.disability.longTerm.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-3">Why It Matters:</h3>
                        <div className="space-y-3 text-sm">
                          <p>A 25-year-old has a 30% chance of becoming disabled before retirement.</p>
                          <p>Your ability to earn income is likely your largest asset - protect it.</p>
                          <p>Social Security disability has strict requirements and low benefits.</p>
                        </div>
                        {!employerBenefits.includes('Disability Insurance') && (
                          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mt-4">
                            <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">
                              ❗ Gap Identified
                            </h4>
                            <p className="text-sm text-red-700 dark:text-red-300">
                              You don't have employer disability insurance. Individual coverage 
                              is important to protect your income if you become unable to work.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>

          {/* Recommendations */}
          {results.recommendations.length > 0 && (
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
                    Personalized Recommendations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {results.recommendations.map((rec, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-lg border-l-4 ${
                          rec.priority === 'high'
                            ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                            : rec.priority === 'medium'
                            ? 'border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20'
                            : 'border-green-500 bg-green-50 dark:bg-green-900/20'
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge 
                                variant={rec.priority === 'high' ? 'destructive' : 
                                        rec.priority === 'medium' ? 'default' : 'secondary'}
                              >
                                {rec.priority} priority
                              </Badge>
                              <span className="text-sm font-medium">{rec.type}</span>
                            </div>
                            <p className="font-medium mb-1">{rec.recommendation}</p>
                            <p className="text-sm text-green-600 font-medium">
                              Potential benefit: {rec.savings}
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

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Frequently Asked Questions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {insuranceFAQs.map((faq, index) => (
                    <div key={index}>
                      <h3 className="font-semibold mb-2">{faq.question}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                      {index < insuranceFAQs.length - 1 && <Separator className="mt-4" />}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

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
                  <strong>Disclaimer:</strong> This calculator provides general guidance only and should not replace professional financial advice. Insurance needs vary based on individual circumstances. Consult with a licensed insurance agent or financial advisor for personalized recommendations. Premium estimates are approximate and actual costs may vary significantly based on location, health, driving record, and other factors.
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
                <h2 className="text-3xl font-bold mb-4">Protect Your Financial Future</h2>
                <p className="text-lg mb-6 max-w-2xl mx-auto">
                  Now that you know your insurance needs, track your premiums and protection alongside your budget with Mudget. 
                  Manage all your financial vitals in one place.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    className="bg-black text-white hover:bg-gray-800"
                  >
                    <a href="https://app.mudget.finance/waitlist">
                      Start Managing Your Finances
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-black text-black hover:bg-black/10"
                  >
                    <NextLink href="/tools/credit-score-calculator">
                      Try Credit Score Calculator
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

export default function InsuranceCalculator() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <InsuranceCalculatorContent />
    </Suspense>
  );
}