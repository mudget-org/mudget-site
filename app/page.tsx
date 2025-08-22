"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Nav from "@/components/Nav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    BarChart2,
    Building2,
    Calculator,
    ChevronRight,
    CreditCard,
    FileText,
    MessageCircle,
    Users,
} from "lucide-react";
import StripePricingTable from "@/components/StripePricingTable";
import { useFeatureFlagEnabled } from "posthog-js/react";
import { PostHogFlags } from "@/lib/flags";
import Footer from "@/components/Footer";

const AppURL = process.env.NEXT_PUBLIC_APP_URL || "https://app.mudget.finance";

function AnimatedBadge() {
    const statements = [
        "Perfect for Couples",
        "Perfect for Individuals", 
        "Perfect for Investors",
        "Perfect for Experts",
        "Perfect for Beginners"
    ];
    
    const [currentIndex, setCurrentIndex] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % statements.length);
        }, 3000); // Change every 3 seconds
        
        return () => clearInterval(interval);
    }, [statements.length]);
    
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#6ae58d]/10 rounded-full border border-[#6ae58d]/20"
        >
            <span className="w-2 h-2 bg-[#6ae58d] rounded-full animate-pulse" />
            <div className="relative overflow-hidden h-5 flex items-center min-w-[140px]">
                <AnimatePresence mode="wait">
                    <motion.span
                        key={currentIndex}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ 
                            duration: 0.5,
                            ease: "easeInOut"
                        }}
                        className="text-sm font-medium text-gray-700 dark:text-gray-300 absolute whitespace-nowrap"
                    >
                        {statements[currentIndex]}
                    </motion.span>
                </AnimatePresence>
            </div>
        </motion.div>
    );
}

function BusinessSection() {
    const showBusinessSection = useFeatureFlagEnabled(PostHogFlags.Business);

    if (!showBusinessSection) return null;

    return (
        <section
            id="business"
            className="w-full flex justify-center py-12 md:py-24 lg:py-32"
        >
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
                    For Businesses
                </h2>
                <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
                    <Card>
                        <CardHeader>
                            <Building2 className="h-10 w-10 mb-2 text-[#6ae58d]" />
                            <CardTitle>Business Financing</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>
                                Access powerful tools for managing your business
                                finances, from cash flow forecasting to
                                investment planning.
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <FileText className="h-10 w-10 mb-2 text-[#6ae58d]" />
                            <CardTitle>Invoicing</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>
                                Create and send professional invoices, track
                                payments, and manage your accounts receivable
                                with ease.
                            </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <Calculator className="h-10 w-10 mb-2 text-[#6ae58d]" />
                            <CardTitle>Tax Preparation</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>
                                Simplify your tax preparation process with our
                                integrated tools and reports designed for
                                businesses.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}

export default function LandingPage() {
    const showPricesSection = useFeatureFlagEnabled(PostHogFlags.Prices);
    const showTestimonials = useFeatureFlagEnabled(PostHogFlags.Testimonials);
    const socialProof = false

    return (
        <div className="flex flex-col min-h-screen">
            <Nav showPricesSection={false} AppURL={AppURL} />
            <main className="flex-1">
                <section className="w-full flex justify-center py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
                    {/* Background Elements */}
                    <div className="absolute inset-0 -z-10">
                        {/* Gradient Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#6ae58d]/5 via-transparent to-[#5ad17c]/10" />

                        {/* Floating Elements */}
                        <motion.div
                            className="absolute top-20 left-10 w-16 h-16 rounded-full bg-[#6ae58d]/20"
                            animate={{
                                y: [-10, 10, -10],
                                opacity: [0.3, 0.6, 0.3]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                        <motion.div
                            className="absolute top-40 right-20 w-24 h-24 rounded-full bg-[#5ad17c]/15"
                            animate={{
                                y: [10, -20, 10],
                                opacity: [0.2, 0.5, 0.2]
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1
                            }}
                        />
                        <motion.div
                            className="absolute bottom-20 left-20 w-20 h-20 rounded-full bg-[#6ae58d]/10"
                            animate={{
                                y: [-5, 15, -5],
                                opacity: [0.4, 0.7, 0.4]
                            }}
                            transition={{
                                duration: 3.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 2
                            }}
                        />
                    </div>

                    <div className="container px-4 md:px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col items-center justify-center space-y-8 text-center"
                        >
                            <div className="space-y-6">
                                <AnimatedBadge />

                                <motion.h1
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none"
                                >
                                    Your Financial Vitals,{" "}
                                    <span className="bg-gradient-to-r from-[#6ae58d] to-[#5ad17c] bg-clip-text text-transparent">
                                        Simplified
                                    </span>
                                </motion.h1>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="mx-auto max-w-[700px] text-gray-600 md:text-xl dark:text-gray-300 leading-relaxed"
                                >
                                    The modern way to manage money as a team. Built for couples who want to budget together, connect their accounts securely, and get personalized financial guidance.
                                </motion.p>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="flex flex-col sm:flex-row gap-4"
                            >
                                <Button
                                    asChild
                                    className="bg-[#6ae58d] text-black hover:bg-[#5ad17c] text-lg px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    <Link href={`${AppURL}/waitlist`}>
                                        Join the Waitlist
                                        <ChevronRight className="ml-2 h-5 w-5" />
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    variant="outline"
                                    className="text-lg px-8 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                                >
                                    <Link href="/about">About Mudget</Link>
                                </Button>
                            </motion.div>

                            {/* Trust indicators */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                                className="flex items-center justify-center gap-6 text-sm text-gray-500 dark:text-gray-400"
                            >
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-[#6ae58d]" />
                                    <span>1 Free Member</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-[#6ae58d]" />
                                    <span>AI-Powered</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-[#6ae58d]" />
                                    <span>Bank-Level Security</span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* Social Proof Section */}
                {socialProof && <section className="w-full py-12 md:py-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
                    <div className="container px-4 md:px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-center mb-8"
                        >
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                                Trusted by couples building their financial future
                            </p>

                            {/* Key Stats */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    viewport={{ once: true }}
                                    className="text-center"
                                >
                                    <div className="text-3xl font-bold text-[#6ae58d] mb-2">$2.5M+</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">Money managed together</div>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    viewport={{ once: true }}
                                    className="text-center"
                                >
                                    <div className="text-3xl font-bold text-[#6ae58d] mb-2">500+</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">Couples on the waitlist</div>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    viewport={{ once: true }}
                                    className="text-center"
                                >
                                    <div className="text-3xl font-bold text-[#6ae58d] mb-2">94%</div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400">Say it improved their relationship</div>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Simple testimonial - Behind feature flag */}
                        {showTestimonials && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="max-w-2xl mx-auto text-center"
                            >
                                <blockquote className="text-lg text-gray-700 dark:text-gray-300 italic mb-4 text-center">
                                    &quot;Finally, a budgeting app that gets it. No more awkward money conversations—we&apos;re actually excited to check our finances together.&quot;
                                </blockquote>
                                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                                    — Sarah & Mike, Early Adopters
                                </p>
                            </motion.div>
                        )}
                    </div>
                </section> }

                <section
                    id="features"
                    className="w-full flex justify-center py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
                >
                    <div className="container px-4 md:px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                                Track, Budget, Collaborate, Plan
                            </h2>
                            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                                Everything you need to build a stronger financial future together
                            </p>
                        </motion.div>

                        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 mb-12">
                            {[
                                {
                                    icon: MessageCircle,
                                    title: "Conversational AI",
                                    description: "Chat or talk with your personal financial assistant. Get answers about your spending patterns, progress toward goals, and personalized recommendations.",
                                    features: ["Text & voice conversations", "Personalized insights", "Goal tracking"]
                                },
                                {
                                    icon: Users,
                                    title: "Built for Couples",
                                    description: "The only budgeting app designed specifically for partnerships. Share expenses, set joint goals, and make financial decisions together.",
                                    features: ["1 free additional member", "Shared budgets & goals", "Transparent spending"]
                                },
                                {
                                    icon: BarChart2,
                                    title: "Financial Vitals",
                                    description: "Smart budgets that adapt to your life. Auto-generated each month based on your actual spending patterns, not unrealistic projections.",
                                    features: ["104+ default categories", "Custom categories", "Automatic adjustments"]
                                },
                                {
                                    icon: CreditCard,
                                    title: "Secure Bank Integration",
                                    description: "Connect your accounts safely with Plaid. Bank-level security means your data is protected and your privacy is guaranteed.",
                                    features: ["Read-only access", "256-bit encryption", "FDIC bank partnerships"]
                                }
                            ].map((feature, index) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <Card className="h-full hover:shadow-xl transition-all duration-300 hover:border-[#6ae58d]/20">
                                        <CardHeader className="pb-4">
                                            <div className="flex items-start gap-4">
                                                <div className="p-3 rounded-lg bg-[#6ae58d]/10">
                                                    <feature.icon className="h-6 w-6 text-[#6ae58d]" />
                                                </div>
                                                <div>
                                                    <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                                        {feature.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className="space-y-2">
                                                {feature.features.map((item, i) => (
                                                    <li key={i} className="flex items-center gap-2 text-sm">
                                                        <div className="w-1.5 h-1.5 bg-[#6ae58d] rounded-full" />
                                                        <span className="text-gray-600 dark:text-gray-400">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA in features section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <Button
                                asChild
                                size="lg"
                                className="bg-[#6ae58d] text-black hover:bg-[#5ad17c] text-lg px-8 py-3"
                            >
                                <Link href={`${AppURL}/waitlist`}>
                                    Get Early Access
                                </Link>
                            </Button>
                        </motion.div>
                    </div>
                </section>

                {/* AI Assistant Section */}
                <section id="ai" className="w-full flex justify-center py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="space-y-6"
                            >
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                                    AI That Actually Helps
                                </h2>
                                <p className="text-gray-500 md:text-lg dark:text-gray-400">
                                    Ask questions, get real answers. No generic tips - just personalized guidance based on your actual spending.
                                </p>
                                <div className="space-y-3">
                                    {[
                                        "How much can I afford for rent this month?",
                                        "When will I reach my emergency fund goal?",
                                        "What's driving my higher spending this month?"
                                    ].map((question, index) => (
                                        <motion.div
                                            key={question}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.6, delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                            className="flex items-center gap-3"
                                        >
                                            <div className="w-2 h-2 bg-[#6ae58d] rounded-full" />
                                            <span>{question}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-r from-[#6ae58d]/10 to-[#5ad17c]/10 p-8 rounded-lg"
                            >
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    viewport={{ once: true }}
                                    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <MessageCircle className="w-6 h-6 text-[#6ae58d]" />
                                        <span className="font-semibold">Mudget AI</span>
                                    </div>
                                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                                        &quot;You are on track to save an extra $240 this month! Move it to your vacation fund to reach your goal 2 months earlier.&quot;
                                    </p>
                                    <div className="text-xs text-gray-500">Just now</div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Who It's For Section */}
                <section className="w-full flex justify-center py-12 md:py-24 bg-gray-50 dark:bg-gray-900">
                    <div className="container px-4 md:px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-center space-y-8"
                        >
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                                Perfect For
                            </h2>
                            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                    viewport={{ once: true }}
                                    className="text-center"
                                >
                                    <div className="text-2xl mb-2">💑</div>
                                    <h3 className="font-semibold mb-2">Couples</h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                                        Budget together with shared goals and transparency
                                    </p>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    viewport={{ once: true }}
                                    className="text-center"
                                >
                                    <div className="text-2xl mb-2">🌟</div>
                                    <h3 className="font-semibold mb-2">Individuals</h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                                        Anyone on their financial journey, from expert to beginner
                                    </p>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    viewport={{ once: true }}
                                    className="text-center"
                                >
                                    <div className="text-2xl mb-2">👨‍👩‍👧‍👦</div>
                                    <h3 className="font-semibold mb-2">Growing Families</h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                                        Managing expenses while planning for the future
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <BusinessSection />
                {showPricesSection
                    ? (
                        <section
                            id="pricing"
                            className="w-full flex justify-center py-12 md:py-24 lg:py-32"
                        >
                            <div className="container px-4 md:px-6">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
                                    Pricing
                                </h2>
                                <StripePricingTable />
                            </div>
                        </section>
                    )
                    : <></>}

                <section
                    id="cta"
                    className="w-full py-12 md:py-24 lg:py-32 bg-[#6ae58d] flex justify-center"
                >
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    Ready to Take Control?
                                </h2>
                                <p className="mx-auto max-w-[500px] text-gray-700 md:text-xl">
                                    Join the team of couples and individuals who&rsquo;ve simplified their finances with Mudget.
                                </p>
                            </div>
                            <Button
                                asChild
                                className="bg-black text-white hover:bg-gray-800"
                            >
                                <Link href={`${AppURL}/waitlist`}>
                                    Sign Up for Early Access
                                    <ChevronRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
