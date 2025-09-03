import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Youtube } from 'lucide-react';
import { isFeatureEnabled } from '@/utils/featureFlags';
import Logo from '@/assets/MudgetTitleDark.png';

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className={`grid gap-8 ${isFeatureEnabled('showWhyMudgetSection') ? 'md:grid-cols-5' : 'md:grid-cols-4'}`}>
          {/* Brand & Social */}
          <div className="space-y-4">
            <Image src={Logo} alt="Mudget" height={100} width={100} />
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Your Financial Vitals, Simplified
            </p>
            <div className="flex gap-3">
              <Link 
                href="https://www.linkedin.com/company/mudget/"
                className="p-2 text-gray-600 hover:text-[#6ae58d] transition-colors"
                aria-label="Connect on LinkedIn"
                target='_blank'
              >
                <Linkedin className="w-4 h-4" />
              </Link>
              <Link 
                href="https://youtube.com/@mudget.finance"
                className="p-2 text-gray-600 hover:text-[#6ae58d] transition-colors"
                aria-label="Subscribe on YouTube"
                target='_blank'
              >
                <Youtube className="w-4 h-4" />
              </Link>
              <Link 
                href="https://tiktok.com/@mudget.finance"
                className="p-2 text-gray-600 hover:text-[#6ae58d] transition-colors"
                aria-label="Follow on TikTok"
                target='_blank'
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V7.83a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.26z"/>
                </svg>
              </Link>
              <Link 
                href="https://instagram.com/mudget.finance"
                className="p-2 text-gray-600 hover:text-[#6ae58d] transition-colors"
                aria-label="Follow on Instagram"
                target='_blank'
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </Link>
              <Link 
                href="https://reddit.com/r/mudget"
                className="p-2 text-gray-600 hover:text-[#6ae58d] transition-colors"
                aria-label="Join our Reddit community"
                target='_blank'
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Tools */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900 dark:text-gray-100">Financial Tools</h4>
            <nav className="space-y-2">
              <Link href="/tools/mortgage-calculator" className="block text-sm text-gray-600 dark:text-gray-300 hover:text-[#6ae58d] transition-colors">
                Mortgage Calculator
              </Link>
              <Link href="/tools/retirement-calculator" className="block text-sm text-gray-600 dark:text-gray-300 hover:text-[#6ae58d] transition-colors">
                Retirement Calculator
              </Link>
              <Link href="/tools/loan-calculator" className="block text-sm text-gray-600 dark:text-gray-300 hover:text-[#6ae58d] transition-colors">
                Loan Calculator
              </Link>
              <Link href="/tools/credit-score-calculator" className="block text-sm text-gray-600 dark:text-gray-300 hover:text-[#6ae58d] transition-colors">
                Credit Score Calculator
              </Link>
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <span>Insurance Coverage Calculator</span>
                <span className="px-2 py-0.5 text-xs bg-[#6ae58d]/10 text-[#6ae58d] rounded-full">Coming Soon</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <span>Debt Repayment Strategy</span>
                <span className="px-2 py-0.5 text-xs bg-[#6ae58d]/10 text-[#6ae58d] rounded-full">Coming Soon</span>
              </div>
            </nav>
          </div>

          {/* Learn */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900 dark:text-gray-100">Learn</h4>
            <nav className="space-y-2">
              <Link href="/blog" className="block text-sm text-gray-600 dark:text-gray-300 hover:text-[#6ae58d] transition-colors">
                Blog
              </Link>
              <Link href="/faq" className="block text-sm text-gray-600 dark:text-gray-300 hover:text-[#6ae58d] transition-colors">
                FAQ
              </Link>
              <Link href="/about" className="block text-sm text-gray-600 dark:text-gray-300 hover:text-[#6ae58d] transition-colors">
                About
              </Link>
              {isFeatureEnabled('showPricingPage') && (
                <Link href="/pricing" className="block text-sm text-gray-600 dark:text-gray-300 hover:text-[#6ae58d] transition-colors">
                  Pricing
                </Link>
              )}
            </nav>
          </div>

          {/* Why Mudget - Feature Flagged */}
          {isFeatureEnabled('showWhyMudgetSection') && (
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100">Why Mudget</h4>
              <nav className="space-y-2">
                {isFeatureEnabled('showVsMint') && (
                  <Link href="/why-mudget/vs-mint" className="block text-sm text-gray-600 dark:text-gray-300 hover:text-[#6ae58d] transition-colors">
                    vs Mint
                  </Link>
                )}
                {isFeatureEnabled('showVsYnab') && (
                  <Link href="/why-mudget/vs-ynab" className="block text-sm text-gray-600 dark:text-gray-300 hover:text-[#6ae58d] transition-colors">
                    vs YNAB
                  </Link>
                )}
                {isFeatureEnabled('showVsEverydollar') && (
                  <Link href="/why-mudget/vs-everydollar" className="block text-sm text-gray-600 dark:text-gray-300 hover:text-[#6ae58d] transition-colors">
                    vs EveryDollar
                  </Link>
                )}
                {isFeatureEnabled('showVsPocketguard') && (
                  <Link href="/why-mudget/vs-pocketguard" className="block text-sm text-gray-600 dark:text-gray-300 hover:text-[#6ae58d] transition-colors">
                    vs PocketGuard
                  </Link>
                )}
                {isFeatureEnabled('showVsSpreadsheets') && (
                  <Link href="/why-mudget/vs-spreadsheets" className="block text-sm text-gray-600 dark:text-gray-300 hover:text-[#6ae58d] transition-colors">
                    vs Spreadsheets
                  </Link>
                )}
              </nav>
            </div>
          )}

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900 dark:text-gray-100">Company</h4>
            <nav className="space-y-2">
              <Link href="/terms" className="block text-sm text-gray-600 dark:text-gray-300 hover:text-[#6ae58d] transition-colors">
                Terms of Service
              </Link>
              <Link href="/privacy" className="block text-sm text-gray-600 dark:text-gray-300 hover:text-[#6ae58d] transition-colors">
                Privacy Policy
              </Link>
              <Link href="mailto:admin@mudget.finance" className="block text-sm text-gray-600 dark:text-gray-300 hover:text-[#6ae58d] transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Mudget. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 sm:mt-0">
            Made for couples and individuals
          </p>
        </div>
      </div>
    </footer>
  );
}