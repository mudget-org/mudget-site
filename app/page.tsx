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
            <Nav AppURL={AppURL} />
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
                                className="bg-gradient-to-r from-[#6ae58d]/10 to-[#5ad17c]/10 p-6 rounded-2xl border border-gray-200/50 dark:border-gray-700/50"
                            >
                                {/* Chat Interface */}
                                <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden max-w-md mx-auto">
                                    {/* Chat Header */}
                                    <div className="bg-gradient-to-r from-[#6ae58d] to-[#5ad17c] px-4 py-3">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                                                <MessageCircle className="w-4 h-4 text-white" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-white">Mudget AI</h3>
                                                <p className="text-xs text-white/80">Always ready to help</p>
                                            </div>
                                            <div className="ml-auto">
                                                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Chat Messages */}
                                    <div className="p-4 space-y-4 h-80 overflow-hidden">
                                        {/* User Message */}
                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.5, delay: 0.6 }}
                                            viewport={{ once: true }}
                                            className="flex justify-end"
                                        >
                                            <div className="bg-[#6ae58d]/10 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-2xl rounded-tr-sm max-w-[80%]">
                                                <p className="text-sm">How much can I save this month for vacation?</p>
                                            </div>
                                        </motion.div>

                                        {/* AI Response */}
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.5, delay: 0.8 }}
                                            viewport={{ once: true }}
                                            className="flex justify-start"
                                        >
                                            <div className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-2xl rounded-tl-sm max-w-[85%]">
                                                <p className="text-sm mb-2">Based on your spending patterns, you&apos;re on track to save <strong className="text-[#6ae58d]">$240 extra</strong> this month! 🎉</p>
                                                <p className="text-xs text-gray-600 dark:text-gray-400">If you move this to your vacation fund, you&apos;ll reach your goal <strong>2 months earlier</strong>.</p>
                                            </div>
                                        </motion.div>

                                        {/* User Follow-up */}
                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.5, delay: 1.0 }}
                                            viewport={{ once: true }}
                                            className="flex justify-end"
                                        >
                                            <div className="bg-[#6ae58d]/10 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-2xl rounded-tr-sm max-w-[80%]">
                                                <p className="text-sm">That&apos;s awesome! What&apos;s helping me save more?</p>
                                            </div>
                                        </motion.div>

                                        {/* AI Response with insights */}
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.5, delay: 1.2 }}
                                            viewport={{ once: true }}
                                            className="flex justify-start"
                                        >
                                            <div className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-2xl rounded-tl-sm max-w-[85%]">
                                                <p className="text-sm mb-2">Great question! Here&apos;s what&apos;s working:</p>
                                                <ul className="text-xs space-y-1 text-gray-600 dark:text-gray-400">
                                                    <li>• Dining out down 30% vs last month</li>
                                                    <li>• No impulse purchases over $50</li>
                                                    <li>• Groceries staying within budget</li>
                                                </ul>
                                            </div>
                                        </motion.div>

                                        {/* Typing indicator */}
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ duration: 0.5, delay: 1.4 }}
                                            viewport={{ once: true }}
                                            className="flex justify-start"
                                        >
                                            <div className="bg-gray-100 dark:bg-gray-800 px-4 py-3 rounded-2xl rounded-tl-sm">
                                                <div className="flex items-center gap-1">
                                                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Input Area */}
                                    <div className="border-t border-gray-200 dark:border-gray-700 p-4">
                                        <div className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-full px-4 py-2">
                                            <input
                                                type="text"
                                                placeholder="Ask about your finances..."
                                                className="flex-1 bg-transparent text-sm text-gray-600 dark:text-gray-300 placeholder-gray-400 focus:outline-none"
                                                readOnly
                                            />
                                            <div className="w-6 h-6 bg-[#6ae58d] rounded-full flex items-center justify-center cursor-pointer">
                                                <ChevronRight className="w-3 h-3 text-white" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
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

                {/* Plaid Security Section */}
                <section className="w-full py-16 md:py-20 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
                    <div className="container px-4 md:px-6 mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-center max-w-4xl mx-auto"
                        >
                            <div className="flex items-center justify-center gap-3 mb-8">
                                <div className="w-2 h-2 rounded-full bg-[#6ae58d]" />
                                <span className="text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide">
                                    Bank-Level Security
                                </span>
                                <div className="w-2 h-2 rounded-full bg-[#6ae58d]" />
                            </div>

                            <div className="flex items-center justify-center gap-4 mb-6">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                                    Powered by
                                </h2>
                                <div className="flex items-center gap-2">
                                    {/* Official Plaid Logo */}
<svg height="48" viewBox="0 0 77 29" xmlns="http://www.w3.org/2000/svg" className="css-1rdaj8m"><g fill="#111" fill-rule="evenodd"><path d="M37.3252 14.9546H36.2239V12.5005H37.2135C38.4162 12.5005 39.0177 12.9124 39.0177 13.7353C39.0177 14.5484 38.4537 14.9546 37.3252 14.9546ZM40.3753 10.9121C39.7365 10.3878 38.6455 10.126 37.1019 10.126H33.6211V20.617H36.2239V17.33H37.3893C38.8052 17.33 39.8431 17.0256 40.5028 16.417C41.2475 15.7359 41.6206 14.8291 41.6206 13.6961C41.6206 12.5218 41.2058 11.5939 40.3753 10.9121ZM46.0756 10.1256H43.3611V20.6173H49.2216V18.2421H46.0758L46.0756 10.1256ZM54.5063 16.9683L55.6241 13.382L56.7254 16.9683H54.5063ZM54.538 10.1256L50.275 20.6173H53.197L53.7559 19.0919H57.46L57.9707 20.6173H60.9256L56.6937 10.1256H54.538ZM62.2824 20.6173H64.9969V10.1256H62.2824V20.6173ZM71.1922 18.2422H70.0263V12.5005H71.2081C72.0385 12.5005 72.6766 12.7536 73.1239 13.2592C73.5712 13.7654 73.7944 14.4828 73.7944 15.4101C73.7944 17.2986 72.9266 18.2422 71.1922 18.2422ZM75.5353 12.0917C75.1737 11.588 74.7422 11.1849 74.2424 10.8806C73.4221 10.3769 72.3043 10.125 70.8885 10.125H67.3119V20.6167H71.4956C73.0068 20.6167 74.2209 20.135 75.1363 19.1701C76.0517 18.2052 76.5091 16.9261 76.5091 15.3319C76.5089 14.0633 76.1842 12.9835 75.5353 12.0917Z"></path><path d="M25.7629 26.2628L28 17.5309L24.9691 14.5001L27.9999 11.4691L25.7628 2.73706L17.0309 0.5L14.0001 3.531L10.969 0.50014L2.23706 2.73734L0 11.4691L3.03128 14.4999L0.00014 17.531L2.2372 26.2629L10.9691 28.5L14.0001 25.469L17.031 28.4999L25.7629 26.2628ZM15.7321 23.7371L18.6186 20.8505L22.2912 24.5233L17.6956 25.7007L15.7321 23.7371ZM11.1136 9.88154L14.0003 6.99502L16.8868 9.8814L14.0001 12.7679L11.1136 9.88154ZM12.2682 14.5L9.38154 17.3865L6.49502 14.5L9.38154 11.6135L12.2682 14.5ZM18.6187 11.6133L21.5053 14.5L18.6186 17.3865L15.7321 14.5L18.6187 11.6133ZM16.8867 19.1186L14.0001 22.0051L11.1135 19.1185L14.0001 16.2319L16.8867 19.1186ZM10.3044 25.7007L5.70864 24.5233L9.38154 20.8504L12.2682 23.7371L10.3044 25.7007ZM4.76308 16.2319L7.6496 19.1185L3.9767 22.7914L2.7993 18.1957L4.76308 16.2319ZM3.9767 6.20836L7.64974 9.8814L4.76308 12.7681L2.7993 10.8041L3.9767 6.20836ZM12.2683 5.26294L9.38168 8.1496L5.70892 4.4767L10.3047 3.2993L12.2683 5.26294ZM17.6959 3.2993L22.2915 4.4767L18.6186 8.14946L15.7321 5.26294L17.6959 3.2993ZM23.2372 12.7681L20.3505 9.8814L24.0233 6.20878L25.2007 10.8046L23.2372 12.7681ZM24.0233 22.7914L20.3505 19.1186L23.2372 16.2321L25.2007 18.1957L24.0233 22.7914Z"></path></g></svg>
                                </div>
                            </div>
                            
                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
                                We use Plaid to securely connect your financial accounts. The same trusted technology 
                                used by Venmo, Betterment, and thousands of other financial apps.
                            </p>

                            {/* Plaid Logo and Features */}
                            <div className="grid items-center">

                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.4 }}
                                    viewport={{ once: true }}
                                    className="space-y-4"
                                >
                                    <div className="flex items-start gap-3 text-left">
                                        <div className="w-6 h-6 rounded-full bg-[#6ae58d]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <div className="w-2 h-2 rounded-full bg-[#6ae58d]" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">256-bit Encryption</h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                The same security used by major banks and financial institutions
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3 text-left">
                                        <div className="w-6 h-6 rounded-full bg-[#6ae58d]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <div className="w-2 h-2 rounded-full bg-[#6ae58d]" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">10,000+ Banks Supported</h3>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                                Connect accounts from virtually any US bank or credit union
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Trust Badges */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                viewport={{ once: true }}
                                className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700"
                            >
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                                    Trusted by leading financial apps
                                </p>
                                <div className="flex items-center justify-center gap-8 opacity-60">
                                    <span className="text-sm font-semibold">Venmo</span>
                                    <span className="text-sm font-semibold">Betterment</span>
                                    <span className="text-sm font-semibold">Acorns</span>
                                    <span className="text-sm font-semibold">Robinhood</span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

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
