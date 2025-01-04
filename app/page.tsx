import Link from 'next/link'
import { Metadata } from 'next'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, BarChart2, MessageCircle, CreditCard, Building2, FileText, Calculator } from 'lucide-react'
import StripePricingTable from '@/components/StripePricingTable'
import { PostHogProvider, useFeatureFlag } from '@/components/PostHogProvider'

export const metadata: Metadata = {
  title: 'Mudget - Simplify Your Finances',
  description: 'Budget, track, and improve your financial well-being with our user-friendly app and AI-powered insights.',
  openGraph: {
    title: 'Mudget - Simplify Your Finances',
    description: 'Budget, track, and improve your financial well-being with our user-friendly app and AI-powered insights.',
    url: 'https://mudget.finance',
    siteName: 'Mudget',
    images: [
      {
        url: 'https://mudget.finance/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mudget - Simplify Your Finances',
    description: 'Budget, track, and improve your financial well-being with our user-friendly app and AI-powered insights.',
    images: ['https://mudget.finance/twitter-image.jpg'],
  },
}

function BusinessSection() {
  const showBusinessSection = useFeatureFlag('show-business-section')

  if (!showBusinessSection) return null

  return (
    <section id="business" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">For Businesses</h2>
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
          <Card>
            <CardHeader>
              <Building2 className="h-10 w-10 mb-2 text-[#6ae58d]" />
              <CardTitle>Business Financing</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Access powerful tools for managing your business finances, from cash flow forecasting to investment planning.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <FileText className="h-10 w-10 mb-2 text-[#6ae58d]" />
              <CardTitle>Invoicing</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Create and send professional invoices, track payments, and manage your accounts receivable with ease.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Calculator className="h-10 w-10 mb-2 text-[#6ae58d]" />
              <CardTitle>Tax Preparation</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Simplify your tax preparation process with our integrated tools and reports designed for businesses.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default function LandingPage() {
  return (
    <PostHogProvider>
      <div className="flex flex-col min-h-screen">
        <header className="px-4 lg:px-6 h-14 flex items-center">
          <Link className="flex items-center justify-center" href="/">
            <span className="font-bold text-2xl">Mudget</span>
          </Link>
          <nav className="ml-auto flex items-center gap-4 sm:gap-6">
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
              Features
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#pricing">
              Pricing
            </Link>
            <Link 
              href="https://app.mudget.finance"
              className="text-sm font-medium bg-[#6ae58d] text-black hover:bg-[#5ad17c] px-3 py-2 rounded-md transition-colors"
            >
              App
            </Link>
          </nav>
        </header>
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Simplify Your Finances with Mudget
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                    Budget, track, and improve your financial well-being with our user-friendly app and AI-powered insights.
                  </p>
                </div>
                <div className="space-x-4">
                  <Button asChild className="bg-[#6ae58d] text-black hover:bg-[#5ad17c]">
                    <Link href="https://app.mudget.finance/waitlist">
                      Join the Waitlist
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/about">Learn More</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
          <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Features</h2>
              <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
                <Card>
                  <CardHeader>
                    <BarChart2 className="h-10 w-10 mb-2 text-[#6ae58d]" />
                    <CardTitle>Easy Budgeting</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Create and manage your budgets with our intuitive interface. Stay on top of your spending effortlessly.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CreditCard className="h-10 w-10 mb-2 text-[#6ae58d]" />
                    <CardTitle>Finance Tracking</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Monitor your income, expenses, and investments in real-time. Get a clear picture of your financial health.</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <MessageCircle className="h-10 w-10 mb-2 text-[#6ae58d]" />
                    <CardTitle>AI Financial Assistant</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Chat with our AI to get personalized financial advice and insights to improve your financial well-being.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
          <BusinessSection />
          <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Pricing</h2>
              <StripePricingTable />
            </div>
          </section>
          <section id="cta" className="w-full py-12 md:py-24 lg:py-32 bg-[#6ae58d]">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Ready to Transform Your Finances?
                  </h2>
                  <p className="mx-auto max-w-[600px] text-gray-700 md:text-xl">
                    Join the Mudget waitlist today and be among the first to experience the future of financial management.
                  </p>
                </div>
                <Button asChild className="bg-black text-white hover:bg-gray-800">
                  <Link href="https://app.mudget.finance/waitlist">
                    Sign Up for Early Access
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        </main>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Mudget Finance. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="/terms">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="/privacy">
              Privacy
            </Link>
          </nav>
        </footer>
      </div>
    </PostHogProvider>
  )
}

