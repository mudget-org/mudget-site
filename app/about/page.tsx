"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Users, MessageCircle, BarChart2 } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
            <Nav  AppURL="https://app.mudget.finance" />
            
            <main className="container mx-auto px-4 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Hero Section */}
                    <div className="text-center mb-16">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-4xl font-bold mb-6"
                        >
                            About Mudget
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
                        >
                            Financial freedom shouldn&apos;t be complicated. We&apos;re making it simple for couples and young adults to take control of their money.
                        </motion.p>
                    </div>

                    {/* The Mudget Story */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <Card className="shadow-lg bg-white dark:bg-gray-900">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3 text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                                    <span className="w-2 h-8 bg-gradient-to-b from-[#6ae58d] to-[#5ad17c] rounded-full"></span>
                                    The Mudget Story
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="prose-content">
                                <style jsx>{`
                                    .prose-content > p:first-child {
                                        font-size: 1.25rem;
                                        line-height: 1.7;
                                        color: #374151;
                                        margin-bottom: 2rem;
                                        padding: 1.5rem;
                                        background: linear-gradient(135deg, #6ae58d0d, transparent);
                                        border-left: 4px solid #6ae58d;
                                        border-radius: 0 8px 8px 0;
                                        position: relative;
                                    }
                                    
                                    .dark .prose-content > p:first-child {
                                        color: #d1d5db;
                                        background: linear-gradient(135deg, #6ae58d1a, transparent);
                                    }
                                    
                                    .prose-content > p:first-child::first-letter {
                                        font-size: 4rem;
                                        font-weight: bold;
                                        color: #6ae58d;
                                        margin-right: 0.5rem;
                                        float: left;
                                        line-height: 1;
                                        margin-top: 0.1em;
                                    }
                                    
                                    @media (min-width: 640px) {
                                        .prose-content > p:first-child::first-letter {
                                            font-size: 5rem;
                                        }
                                    }
                                `}</style>
                                
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    viewport={{ once: true }}
                                    className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-lg"
                                >
                                    When my wife and I got married, we started having monthly budgeting meetings—that&apos;s where &quot;Mudget&quot; comes from (monthly budget). But we quickly got frustrated with the tools available to us.
                                </motion.p>

                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    viewport={{ once: true }}
                                    className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-lg"
                                >
                                    Spreadsheets were tedious and always needed updating. The apps we tried focused on tracking where money went rather than helping us actually achieve our financial goals together. Most seemed built for individuals, not couples navigating shared dreams and different spending habits.
                                </motion.p>

                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    viewport={{ once: true }}
                                    className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-lg"
                                >
                                    We needed something that didn&apos;t exist, so I started building it. As I worked on the solution, I realized our friends and family had the same frustrations when it came to financial planning as a team.
                                </motion.p>

                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    viewport={{ once: true }}
                                    className="my-6 pl-6 pr-4 py-4 bg-gradient-to-r from-[#6ae58d]/10 to-transparent border-l-4 border-[#6ae58d] rounded-r-lg relative"
                                >
                                    <div className="absolute -left-2 top-4 w-4 h-4 bg-[#6ae58d] rounded-full"></div>
                                    <div className="text-gray-800 dark:text-gray-200 font-medium">
                                        The research backed up what we were seeing: financial disagreements are a leading cause of divorce, with <strong className="font-semibold text-[#6ae58d] dark:text-[#5ad17c]">41% of divorced Gen Xers and 29% of divorced Boomers</strong> citing money conflicts as the reason their marriages ended.
                                    </div>
                                </motion.div>

                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    viewport={{ once: true }}
                                    className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-lg"
                                >
                                    That&apos;s not the story we want for our generation. Mudget&apos;s vision is to make finances less stressful and help couples feel confident about their spending and their financial future together. No one should have to hear &quot;don&apos;t spend money on that coffee&quot; when grabbing coffee with friends brings you joy.
                                </motion.p>

                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    viewport={{ once: true }}
                                    className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-lg font-medium"
                                >
                                    Today, Mudget helps couples build stronger financial foundations together, turning money management from a source of stress into genuine teamwork toward your shared goals.
                                </motion.p>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* What Makes Mudget Different */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl font-bold text-center mb-12">What Makes Mudget Different</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <Card className="shadow-lg">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Users className="w-5 h-5 text-[#6ae58d]" />
                                        Built for Couples
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Most budgeting apps treat couples as an afterthought. We designed Mudget from the ground up 
                                        for shared financial goals, with 1 free additional member and transparent spending tracking.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="shadow-lg">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <MessageCircle className="w-5 h-5 text-[#6ae58d]" />
                                        Advanced AI Technology
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Powered by AI ambient agents, machine learning forecasting models, and orchestrated workflows through MCP. 
                                        Your personal conversational AI understands your couple&apos;s unique financial situation and investment goals.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="shadow-lg">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <BarChart2 className="w-5 h-5 text-[#6ae58d]" />
                                        Smart Automation
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Your Financial Vitals (budgets) are auto-generated each month based on your actual spending. 
                                        No more guessing or complicated setup - just smart budgets that adapt to your life.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="shadow-lg">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Target className="w-5 h-5 text-[#6ae58d]" />
                                        Simple & Intuitive
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Clean interface, clear insights, no financial jargon. Track your income vs expenses, 
                                        set goals for that vacation you&apos;ve been planning, and see your progress at a glance.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </motion.div>

                    {/* Core Features */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl font-bold text-center mb-12">Everything You Need</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold">Smart Financial Tracking</h3>
                                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                    <li>• Monthly income vs expense tracking</li>
                                    <li>• Expense breakdowns by transaction categories</li>
                                    <li>• 104 default categories + create your own</li>
                                    <li>• Goal creation and tracking</li>
                                </ul>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold">Intelligent Assistance</h3>
                                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                    <li>• AI ambient agents for background monitoring</li>
                                    <li>• ML forecasting for investment predictions</li>
                                    <li>• Orchestrated AI workflows via MCP</li>
                                    <li>• Conversational AI financial advisor</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <Card className="bg-gradient-to-r from-[#6ae58d] to-[#5ad17c] text-black shadow-lg">
                            <CardContent className="p-8">
                                <h2 className="text-3xl font-bold mb-4">Ready to Take Control?</h2>
                                <p className="text-lg mb-6 max-w-2xl mx-auto">
                                    Join the couples and young adults who&apos;ve already simplified their finances with Mudget.
                                </p>
                                <Button
                                    asChild
                                    className="bg-black text-white hover:bg-gray-800 text-lg px-8 py-3"
                                >
                                    <Link href="https://app.mudget.finance/waitlist">
                                        Join the Waitlist
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    </motion.div>
                </motion.div>
            </main>
            <Footer />
        </div>
    );
}
