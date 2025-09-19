"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Calculator, Users, BookOpen, Menu, X } from "lucide-react";
import { isFeatureEnabled } from "@/utils/featureFlags";

import Image from "next/image";
import Logo from "@/assets/MudgetTitleDark.png";

const Nav = ({ AppURL}: {AppURL: string}) => {
  const [toolsOpen, setToolsOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [whyMudgetOpen, setWhyMudgetOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Mobile collapsible states
  const [mobileFeaturesOpen, setMobileFeaturesOpen] = useState(false);
  const [mobileToolsOpen, setMobileToolsOpen] = useState(false);
  const [mobileWhyMudgetOpen, setMobileWhyMudgetOpen] = useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);
  const [mobileAccountOpen, setMobileAccountOpen] = useState(false);
  const toolsRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const whyMudgetRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (toolsRef.current && !toolsRef.current.contains(event.target as Node)) {
        setToolsOpen(false);
      }
      if (featuresRef.current && !featuresRef.current.contains(event.target as Node)) {
        setFeaturesOpen(false);
      }
      if (whyMudgetRef.current && !whyMudgetRef.current.contains(event.target as Node)) {
        setWhyMudgetOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
        <Link className="flex items-center" href="/">
          <Image src={Logo} alt="Mudget" height={140} width={140} />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {/* Features Dropdown */}
          <div className="relative" ref={featuresRef}>
            <button
              onClick={() => setFeaturesOpen(!featuresOpen)}
              className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white flex items-center gap-1 transition-colors"
            >
              Features
              <ChevronDown className={`w-4 h-4 transition-transform ${featuresOpen ? 'rotate-180' : ''}`} />
            </button>
            {featuresOpen && (
              <div className="absolute top-full mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50">
                <div className="p-6">
                  <div className="grid grid-cols-1 gap-4">
                    <Link
                      href="/#features"
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                      onClick={() => setFeaturesOpen(false)}
                    >
                      <div className="p-2 rounded-md bg-[#6ae58d]/10">
                        <Users className="w-5 h-5 text-[#6ae58d]" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">Household Budgeting</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Built for couples with shared financial goals</div>
                      </div>
                    </Link>
                    <Link
                      href="/#features"
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                      onClick={() => setFeaturesOpen(false)}
                    >
                      <div className="p-2 rounded-md bg-[#6ae58d]/10">
                        <Calculator className="w-5 h-5 text-[#6ae58d]" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">Financial Vitals</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Smart budgets that adapt to your spending</div>
                      </div>
                    </Link>
                    <Link
                      href="/#ai"
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                      onClick={() => setFeaturesOpen(false)}
                    >
                      <div className="p-2 rounded-md bg-[#6ae58d]/10">
                        <BookOpen className="w-5 h-5 text-[#6ae58d]" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">AI Assistant</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Chat & voice conversations about your finances</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Tools Dropdown */}
          <div className="relative" ref={toolsRef}>
            <button
              onClick={() => setToolsOpen(!toolsOpen)}
              className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white flex items-center gap-1 transition-colors"
            >
              Tools
              <ChevronDown className={`w-4 h-4 transition-transform ${toolsOpen ? 'rotate-180' : ''}`} />
            </button>
            {toolsOpen && (
              <div className="absolute top-full mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50">
                <div className="p-4">
                  <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                    Free Calculators
                  </div>
                  <div className="space-y-1">
                    <Link
                      href="/tools/mortgage-calculator"
                      className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
                      onClick={() => setToolsOpen(false)}
                    >
                      Mortgage Calculator
                    </Link>
                    <Link
                      href="/tools/retirement-calculator"
                      className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
                      onClick={() => setToolsOpen(false)}
                    >
                      Retirement Calculator
                    </Link>
                    <Link
                      href="/tools/loan-calculator"
                      className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
                      onClick={() => setToolsOpen(false)}
                    >
                      Loan Calculator
                    </Link>
                    <Link
                      href="/tools/credit-score-calculator"
                      className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
                      onClick={() => setToolsOpen(false)}
                    >
                      Credit Score Calculator
                    </Link>
                    <Link
                      href="/tools/insurance-calculator"
                      className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
                      onClick={() => setToolsOpen(false)}
                    >
                      Insurance Calculator
                    </Link>
                  </div>
                  <div className="border-t border-gray-200 dark:border-gray-700 mt-3 pt-3">
                    <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                      Coming Soon
                    </div>
                    <div className="space-y-1">
                      <div className="px-3 py-2 text-sm text-gray-400 cursor-not-allowed">
                        Debt Repayment Strategy
                      </div>
                      <div className="px-3 py-2 text-sm text-gray-400 cursor-not-allowed">
                        Tax Calculator
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Why Mudget Dropdown - Feature Flagged */}
          {isFeatureEnabled('showWhyMudgetSection') && (
            <div className="relative" ref={whyMudgetRef}>
              <button
                onClick={() => setWhyMudgetOpen(!whyMudgetOpen)}
                className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white flex items-center gap-1 transition-colors"
              >
                Why Mudget
                <ChevronDown className={`w-4 h-4 transition-transform ${whyMudgetOpen ? 'rotate-180' : ''}`} />
              </button>
              {whyMudgetOpen && (
                <div className="absolute top-full mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50">
                  <div className="p-4">
                    <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                      Comparisons
                    </div>
                    <div className="space-y-1">
                      {isFeatureEnabled('showVsMint') && (
                        <Link
                          href="/why-mudget/vs-mint"
                          className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
                          onClick={() => setWhyMudgetOpen(false)}
                        >
                          vs Mint
                        </Link>
                      )}
                      {isFeatureEnabled('showVsYnab') && (
                        <Link
                          href="/why-mudget/vs-ynab"
                          className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
                          onClick={() => setWhyMudgetOpen(false)}
                        >
                          vs YNAB
                        </Link>
                      )}
                      {isFeatureEnabled('showVsEverydollar') && (
                        <Link
                          href="/why-mudget/vs-everydollar"
                          className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
                          onClick={() => setWhyMudgetOpen(false)}
                        >
                          vs EveryDollar
                        </Link>
                      )}
                      {isFeatureEnabled('showVsPocketguard') && (
                        <Link
                          href="/why-mudget/vs-pocketguard"
                          className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
                          onClick={() => setWhyMudgetOpen(false)}
                        >
                          vs PocketGuard
                        </Link>
                      )}
                      {isFeatureEnabled('showVsSpreadsheets') && (
                        <Link
                          href="/why-mudget/vs-spreadsheets"
                          className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
                          onClick={() => setWhyMudgetOpen(false)}
                        >
                          vs Spreadsheets
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
          
          <Link
            className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors"
            href="/blog"
          >
            Blog
          </Link>

          <Link
            className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors"
            href="/about"
          >
            About
          </Link>

          {isFeatureEnabled('showPricingPage') && (
            <Link
              className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors"
              href="/pricing"
            >
              Pricing
            </Link>
          )}
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          <Link
            href={`${AppURL}/login`}
            className="hidden md:inline-flex text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            Sign In
          </Link>
          <Link
            href={`${AppURL}/waitlist`}
            className="text-sm font-medium bg-[#6ae58d] text-black hover:bg-[#5ad17c] px-4 py-2 rounded-lg transition-all hover:shadow-md"
          >
            Get Started
          </Link>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <div className="p-4 space-y-4">
            {/* Features Section */}
            <div className="space-y-2">
              <button
                onClick={() => setMobileFeaturesOpen(!mobileFeaturesOpen)}
                className="flex items-center justify-between w-full text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
              >
                Features
                <ChevronDown className={`w-3 h-3 transition-transform ${mobileFeaturesOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileFeaturesOpen && (
                <div className="space-y-1">
                  <Link
                    href="/#features"
                    className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="p-1 rounded bg-[#6ae58d]/10">
                      <Users className="w-3 h-3 text-[#6ae58d]" />
                    </div>
                    Household Budgeting
                  </Link>
                  <Link
                    href="/#features"
                    className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="p-1 rounded bg-[#6ae58d]/10">
                      <Calculator className="w-3 h-3 text-[#6ae58d]" />
                    </div>
                    Financial Vitals
                  </Link>
                  <Link
                    href="/#ai"
                    className="flex items-center gap-3 px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="p-1 rounded bg-[#6ae58d]/10">
                      <BookOpen className="w-3 h-3 text-[#6ae58d]" />
                    </div>
                    AI Assistant
                  </Link>
                </div>
              )}
            </div>

            {/* Tools Section */}
            <div className="space-y-2 border-t border-gray-200 dark:border-gray-700 pt-4">
              <button
                onClick={() => setMobileToolsOpen(!mobileToolsOpen)}
                className="flex items-center justify-between w-full text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
              >
                Free Calculators
                <ChevronDown className={`w-3 h-3 transition-transform ${mobileToolsOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileToolsOpen && (
                <div className="space-y-1">
                  <Link
                    href="/tools/mortgage-calculator"
                    className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Mortgage Calculator
                  </Link>
                  <Link
                    href="/tools/retirement-calculator"
                    className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Retirement Calculator
                  </Link>
                  <Link
                    href="/tools/loan-calculator"
                    className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Loan Calculator
                  </Link>
                  <Link
                    href="/tools/credit-score-calculator"
                    className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Credit Score Calculator
                  </Link>
                  <Link
                    href="/tools/insurance-calculator"
                    className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Insurance Calculator
                  </Link>
                </div>
              )}
            </div>

            {/* Why Mudget Section - Feature Flagged */}
            {isFeatureEnabled('showWhyMudgetSection') && (
              <div className="space-y-2 border-t border-gray-200 dark:border-gray-700 pt-4">
                <button
                  onClick={() => setMobileWhyMudgetOpen(!mobileWhyMudgetOpen)}
                  className="flex items-center justify-between w-full text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                >
                  Why Mudget
                  <ChevronDown className={`w-3 h-3 transition-transform ${mobileWhyMudgetOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileWhyMudgetOpen && (
                  <div className="space-y-1">
                    {isFeatureEnabled('showVsMint') && (
                      <Link
                        href="/why-mudget/vs-mint"
                        className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        vs Mint
                      </Link>
                    )}
                    {isFeatureEnabled('showVsYnab') && (
                      <Link
                        href="/why-mudget/vs-ynab"
                        className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        vs YNAB
                      </Link>
                    )}
                    {isFeatureEnabled('showVsEverydollar') && (
                      <Link
                        href="/why-mudget/vs-everydollar"
                        className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        vs EveryDollar
                      </Link>
                    )}
                    {isFeatureEnabled('showVsPocketguard') && (
                      <Link
                        href="/why-mudget/vs-pocketguard"
                        className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        vs PocketGuard
                      </Link>
                    )}
                    {isFeatureEnabled('showVsSpreadsheets') && (
                      <Link
                        href="/why-mudget/vs-spreadsheets"
                        className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        vs Spreadsheets
                      </Link>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Main Navigation */}
            <div className="space-y-2 border-t border-gray-200 dark:border-gray-700 pt-4">
              <button
                onClick={() => setMobileMoreOpen(!mobileMoreOpen)}
                className="flex items-center justify-between w-full text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
              >
                More
                <ChevronDown className={`w-3 h-3 transition-transform ${mobileMoreOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileMoreOpen && (
                <div className="space-y-1">
                  <Link
                    href="/blog"
                    className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Blog
                  </Link>
                  <Link
                    href="/about"
                    className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                  {isFeatureEnabled('showPricingPage') && (
                    <Link
                      href="/pricing"
                      className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Pricing
                    </Link>
                  )}
                </div>
              )}
            </div>

            {/* Account Section */}
            <div className="space-y-2 border-t border-gray-200 dark:border-gray-700 pt-4">
              <button
                onClick={() => setMobileAccountOpen(!mobileAccountOpen)}
                className="flex items-center justify-between w-full text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
              >
                Account
                <ChevronDown className={`w-3 h-3 transition-transform ${mobileAccountOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileAccountOpen && (
                <div className="space-y-1">
                  <Link
                    href={`${AppURL}/login`}
                    className="block px-3 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Nav
