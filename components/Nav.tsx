"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Calculator, Users, BookOpen, Menu, X } from "lucide-react";

import Image from "next/image";
import Logo from "@/assets/MudgetTitleDark.png";

const Nav = ({showPricesSection, AppURL}: {showPricesSection: boolean, AppURL: string}) => {
  const [toolsOpen, setToolsOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toolsRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (toolsRef.current && !toolsRef.current.contains(event.target as Node)) {
        setToolsOpen(false);
      }
      if (featuresRef.current && !featuresRef.current.contains(event.target as Node)) {
        setFeaturesOpen(false);
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
                      href="/about"
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
                  </div>
                  <div className="border-t border-gray-200 dark:border-gray-700 mt-3 pt-3">
                    <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                      Coming Soon
                    </div>
                    <div className="space-y-1">
                      <div className="px-3 py-2 text-sm text-gray-400 cursor-not-allowed">
                        Budget Planner
                      </div>
                      <div className="px-3 py-2 text-sm text-gray-400 cursor-not-allowed">
                        Investment Tracker
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
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
          
          {showPricesSection && (
            <Link
              className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors"
              href="/#pricing"
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
            <Link
              href="/#features"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/tools/mortgage-calculator"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Mortgage Calculator
            </Link>
            <Link
              href="/tools/retirement-calculator"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Retirement Calculator
            </Link>
            <Link
              href="/tools/loan-calculator"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Loan Calculator
            </Link>
            <Link
              href="/blog"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            {!showPricesSection && (
              <Link
                href="/#pricing"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
            )}
            <Link
              href={`${AppURL}/login`}
              className="block text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Nav
