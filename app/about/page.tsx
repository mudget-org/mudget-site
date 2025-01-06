"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Gift, Lightbulb, Target, Users } from "lucide-react";
import Logo from "@/assets/MudgetTitleDark.png";

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="px-4 lg:px-6 h-14 flex items-center">
                <Link className="flex items-center justify-center" href="/">
                    <Image src={Logo} alt="Mudget" height={150} width={150} />
                </Link>
                <nav className="ml-auto flex items-center gap-4 sm:gap-6">
                    <Button asChild variant="ghost">
                        <Link href="/">
                            <ChevronLeft className="mr-2 h-4 w-4" />
                            Back to Home
                        </Link>
                    </Button>
                </nav>
            </header>
            <main className="flex-1">
                <section className="w-full flex justify-center py-12 md:py-24 lg:py-32 xl:py-48">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                                    About Mudget
                                </h1>
                                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                                    Your intelligent financial companion for a
                                    brighter financial future.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full flex justify-center py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-10 mx-auto max-w-[800px]">
                            <div className="flex flex-col items-center space-y-4 text-center">
                                <Target className="h-12 w-12 text-[#6ae58d]" />
                                <div className="space-y-2">
                                    <h2 className="text-2xl font-bold">
                                        Our Mission
                                    </h2>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        At Mudget, we&apos;re on a mission to
                                        democratize financial wellness. We
                                        believe that everyone deserves access to
                                        powerful, easy-to-use tools that can
                                        help them make informed financial
                                        decisions and achieve their goals.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center space-y-4 text-center">
                                <Gift className="h-12 w-12 text-[#6ae58d]" />
                                <div className="space-y-2">
                                    <h2 className="text-2xl font-bold">
                                        What We Offer
                                    </h2>
                                    <ul className="list-none space-y-2 text-gray-500 dark:text-gray-400">
                                        <li>
                                            Intuitive budgeting tools to help
                                            you manage your spending
                                        </li>
                                        <li>
                                            Real-time finance tracking to give
                                            you a clear picture of your
                                            financial health
                                        </li>
                                        <li>
                                            AI-powered financial assistant for
                                            personalized advice and insights
                                        </li>
                                        <li>
                                            Business tools for financing,
                                            invoicing, and tax preparation
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex flex-col items-center space-y-4 text-center">
                                <Lightbulb className="h-12 w-12 text-[#6ae58d]" />
                                <div className="space-y-2">
                                    <h2 className="text-2xl font-bold">
                                        Our Approach
                                    </h2>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        We combine cutting-edge technology with
                                        user-friendly design to create a
                                        financial management experience that&apos;s
                                        both powerful and accessible. Our
                                        AI-driven insights help you make smarter
                                        financial decisions, while our intuitive
                                        interface ensures that managing your
                                        finances is never a chore.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col items-center space-y-4 text-center">
                                <Users className="h-12 w-12 text-[#6ae58d]" />
                                <div className="space-y-2">
                                    <h2 className="text-2xl font-bold">
                                        Join Us
                                    </h2>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        Whether you&apos;re just starting your
                                        financial journey or you&apos;re a seasoned
                                        pro, Mudget is here to help you take
                                        control of your finances and build a
                                        brighter financial future. Join our
                                        community of smart savers and savvy
                                        spenders today!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full flex justify-center py-12 md:py-24 lg:py-32 bg-[#6ae58d]">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    Ready to Transform Your Finances?
                                </h2>
                                <p className="mx-auto max-w-[600px] text-gray-700 md:text-xl">
                                    Join the Mudget waitlist today and be among
                                    the first to experience the future of
                                    financial management.
                                </p>
                            </div>
                            <Button
                                asChild
                                className="bg-black text-white hover:bg-gray-800"
                            >
                                <Link href="https://app.mudget.finance/waitlist">
                                    Join the Waitlist
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                    © 2024 Mudget LLC. All rights reserved.
                </p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <Link
                        className="text-xs hover:underline underline-offset-4"
                        href="/terms"
                    >
                        Terms of Service
                    </Link>
                    <Link
                        className="text-xs hover:underline underline-offset-4"
                        href="/privacy"
                    >
                        Privacy
                    </Link>
                </nav>
            </footer>
        </div>
    );
}
