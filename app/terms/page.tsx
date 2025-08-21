"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, FileText, Shield, Users, AlertCircle, CreditCard, MessageCircle } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const AppURL = process.env.NEXT_PUBLIC_APP_URL || "https://app.mudget.finance";

export default function TermsOfService() {
    const lastUpdated = "August 21, 2025";

    const sections = [
        {
            id: "agreement",
            title: "1. Agreement to Our Legal Terms",
            icon: FileText,
            content: `We are Mudget LLC ("Company," "we," "us," "our"), a company registered in Pennsylvania, United States at 1001 State Street, 907, Erie, PA 16501.

We operate the website https://mudget.finance (the "Site"), the mobile application Mudget (the "App"), as well as any other related products and services that refer or link to these legal terms (the "Legal Terms") (collectively, the "Services").

Mudget doesn't just track spending—we guide users toward their financial milestones with bite-sized, actionable steps that actually work. Instead of financial shame, we deliver financial literacy. Instead of generic budgeting, we provide personalized roadmaps for real goals like homeownership, debt elimination, and smart investing.

You can contact us by phone at 814-462-5650, email at admin@mudget.finance, or by mail to 1001 State Street, 907, Erie, PA 16501, United States.

These Legal Terms constitute a legally binding agreement between you and Mudget LLC concerning your access to and use of the Services. By accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms.

The Services are intended for users who are at least 18 years old. Persons under the age of 18 are not permitted to use or register for the Services.`
        },
        {
            id: "services",
            title: "2. Our Services",
            icon: Users,
            content: `The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation.

The Services are not tailored to comply with industry-specific regulations (HIPAA, FISMA, etc.), so if your interactions would be subjected to such laws, you may not use the Services. You may not use the Services in a way that would violate the Gramm-Leach-Bliley Act (GLBA).

Our Services include:
• Personal financial management and budgeting tools
• Bank account integration through secure third-party providers
• AI-powered financial insights and recommendations
• Goal setting and progress tracking capabilities
• Household budgeting designed specifically for couples
• Educational content and financial literacy resources`
        },
        {
            id: "intellectual-property",
            title: "3. Intellectual Property Rights",
            icon: Shield,
            content: `We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the "Content"), as well as the trademarks, service marks, and logos contained therein (the "Marks").

Our Content and Marks are protected by copyright and trademark laws in the United States and around the world.

The Content and Marks are provided in or through the Services "AS IS" for your personal, non-commercial use or internal business purpose only.

Subject to your compliance with these Legal Terms, we grant you a non-exclusive, non-transferable, revocable license to:
• Access the Services; and
• Download or print a copy of any portion of the Content to which you have properly gained access

Solely for your personal, non-commercial use or internal business purpose.

Any breach of these Intellectual Property Rights will constitute a material breach of our Legal Terms and your right to use our Services will terminate immediately.`
        },
        {
            id: "user-representations",
            title: "4. User Representations",
            icon: Users,
            content: `By using the Services, you represent and warrant that:

(1) All registration information you submit will be true, accurate, current, and complete
(2) You will maintain the accuracy of such information and promptly update such registration information as necessary
(3) You have the legal capacity and you agree to comply with these Legal Terms
(4) You are not a minor in the jurisdiction in which you reside
(5) You will not access the Services through automated or non-human means, whether through a bot, script or otherwise
(6) You will not use the Services for any illegal or unauthorized purpose
(7) Your use of the Services will not violate any applicable law or regulation

If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Services.`
        },
        {
            id: "user-registration",
            title: "5. User Registration",
            icon: Users,
            content: `You may be required to register to use the Services. You agree to keep your password confidential and will be responsible for all use of your account and password.

We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.

Account Security:
• You are responsible for maintaining the security of your account credentials
• Notify us immediately of any unauthorized use of your account
• You may be liable for losses incurred by us or others due to unauthorized use of your account`
        },
        {
            id: "purchases-payment",
            title: "6. Purchases and Payment",
            icon: CreditCard,
            content: `We accept the following forms of payment:
• Major credit cards (Visa, Mastercard, American Express)
• Debit cards
• Digital payment methods as available

You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Services. You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date.

All fees are stated in US dollars. You are responsible for all charges incurred under your account, including applicable taxes.

Refunds:
• All sales are final unless otherwise required by law
• We may offer refunds at our sole discretion
• Refund requests must be submitted within 30 days of purchase`
        },
        {
            id: "subscriptions",
            title: "7. Subscriptions",
            icon: CreditCard,
            content: `Some Services are available on a subscription basis ("Subscriptions").

Billing:
• You will be billed in advance on a recurring and periodic basis (monthly or annually)
• Billing cycles are set forth in your subscription agreement
• At the end of each billing cycle, your Subscription will automatically renew unless you cancel it

Cancellation:
• You may cancel your Subscription at any time through your account settings
• Cancellation will be effective at the end of the current billing period
• You will continue to have access to the Services until the end of your current billing period

Changes to Subscription Fees:
• We may change Subscription fees with 30 days' notice
• Fee changes will take effect at the start of the next billing cycle
• If you do not agree to fee changes, you may cancel your Subscription`
        },
        {
            id: "prohibited-activities",
            title: "8. Prohibited Activities",
            icon: AlertCircle,
            content: `You may not access or use the Services for any purpose other than that for which we make the Services available. The Services may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.

Prohibited activities include, but are not limited to:
• Violating any applicable laws or regulations
• Impersonating any person or entity or misrepresenting your affiliation
• Engaging in any automated use of the system
• Interfering with, disrupting, or creating an undue burden on the Services
• Attempting to bypass any measures designed to prevent or restrict access
• Using the Services to transmit any harmful or malicious content
• Harvesting or collecting information about other users
• Using the Services for any fraudulent or illegal financial activities

We reserve the right to terminate your access for violations of these prohibited activities.`
        },
        {
            id: "user-generated-contributions",
            title: "9. User Generated Contributions",
            icon: MessageCircle,
            content: `The Services may invite you to chat, contribute to, or participate in blogs, message boards, online forums, and other functionality during which you may create, submit, post, display, transmit, publish, distribute, or broadcast content and materials to us or through the Services ("Contributions").

Any Contributions you make may be viewable by other users of the Services and through third-party websites.

When you post Contributions, you grant us a license to use, copy, reproduce, distribute, publish, broadcast, retitle, store, publicly perform, publicly display, reformat, translate, excerpt, and exploit your Contributions for any purpose, commercial, advertising, or otherwise.

You are responsible for what you post and must ensure that your Contributions:
• Do not violate any third-party rights
• Are not illegal, harassing, hateful, harmful, defamatory, or obscene
• Do not contain false, inaccurate, or misleading information
• Do not constitute confidential information

We may remove or edit any Contributions at any time without notice if we consider them harmful or in breach of these Legal Terms.`
        },
        {
            id: "privacy-policy",
            title: "10. Privacy Policy",
            icon: Shield,
            content: `We care about data privacy and security. Please review our Privacy Policy, which also governs your use of the Services, to understand our practices.

Key privacy principles:
• We collect only the information necessary to provide our Services
• Your financial data is encrypted and securely stored
• We do not sell your personal information to third parties
• You have control over your data and can request deletion at any time
• We use industry-standard security measures to protect your information

By using the Services, you agree to the collection and use of information in accordance with our Privacy Policy.`
        },
        {
            id: "termination",
            title: "11. Term and Termination",
            icon: AlertCircle,
            content: `These Legal Terms shall remain in full force and effect while you use the Services.

WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES, TO ANY PERSON FOR ANY REASON OR FOR NO REASON.

We may terminate your use or participation in the Services or delete your account and any content or information that you posted at any time, without warning.

If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name or any other name.

Upon termination, your right to use the Services will cease immediately, and we will delete your personal data in accordance with our Privacy Policy.`
        },
        {
            id: "disclaimer",
            title: "12. Disclaimer",
            icon: AlertCircle,
            content: `THE SERVICES ARE PROVIDED ON AN "AS-IS" AND "AS-AVAILABLE" BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK.

TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF.

WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SERVICES' CONTENT OR THE CONTENT OF ANY WEBSITES OR MOBILE APPLICATIONS LINKED TO THE SERVICES.

Financial Information Disclaimer:
• The Services provide tools and information but do not constitute financial advice
• You should consult with qualified professionals for specific financial guidance
• We are not responsible for any financial decisions you make based on the Services
• Past performance does not guarantee future results`
        },
        {
            id: "limitations-of-liability",
            title: "13. Limitations of Liability",
            icon: AlertCircle,
            content: `IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES.

Our total liability to you for any claim arising out of or relating to these Legal Terms or the Services shall not exceed the amount paid by you, if any, for accessing the Services during the twelve (12) months immediately preceding the date of the claim.

Some jurisdictions do not allow the exclusion or limitation of liability for consequential or incidental damages, so the above limitation may not apply to you.

Types of damages we are not liable for include:
• Loss of profits or revenue
• Loss of data or information
• Business interruption
• Personal injury or property damage
• Any other indirect or consequential losses`
        },
        {
            id: "governing-law",
            title: "14. Governing Law",
            icon: FileText,
            content: `These Legal Terms and your use of the Services are governed by and construed in accordance with the laws of the State of Pennsylvania applicable to agreements made and to be performed entirely within the State of Pennsylvania.

Any disputes arising out of or relating to these Legal Terms or the Services shall be subject to the exclusive jurisdiction of the courts of Pennsylvania.

If any provision of these Legal Terms is held to be invalid or unenforceable, such provision shall be struck and the remaining provisions shall remain in full force and effect.`
        },
        {
            id: "changes-to-terms",
            title: "15. Changes to These Terms",
            icon: Calendar,
            content: `We may update these Legal Terms from time to time. We will notify you of any changes by posting the new Legal Terms on this page and updating the "Last updated" date.

We will provide you with prior notice of any scheduled changes to the Services you are using. The modified Legal Terms will become effective upon posting or notifying you by email.

By continuing to use the Services after the effective date of any changes, you agree to be bound by the modified terms.

If you do not agree to the modified terms, you must stop using the Services.`
        },
        {
            id: "contact-us",
            title: "16. Contact Us",
            icon: MessageCircle,
            content: `If you have any questions about these Terms of Service, please contact us:

Email: admin@mudget.finance
Phone: 814-462-5650
Address: Mudget LLC
1001 State Street, 907
Erie, PA 16501
United States

For technical support, please use our in-app support feature or contact our support team through the email above.

We typically respond to inquiries within 1-2 business days.`
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
            <Nav showPricesSection={false} AppURL={AppURL} />
            
            <main className="container mx-auto px-4 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Header */}
                    <div className="mb-8">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors mb-6"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Home
                        </Link>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-center"
                        >
                            <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
                            <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 mb-6">
                                <Calendar className="w-4 h-4" />
                                <span>Last updated: {lastUpdated}</span>
                            </div>
                            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                                Please read these Terms of Service carefully before using Mudget. By using our service, you agree to these terms.
                            </p>
                        </motion.div>
                    </div>

                    {/* Table of Contents */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-12"
                    >
                        <Card className="shadow-lg">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <FileText className="w-5 h-5 text-[#6ae58d]" />
                                    Table of Contents
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    {sections.map((section, _index) => (
                                        <a
                                            key={section.id}
                                            href={`#${section.id}`}
                                            className="flex items-center gap-2 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-sm"
                                        >
                                            <section.icon className="w-4 h-4 text-[#6ae58d]" />
                                            <span>{section.title}</span>
                                        </a>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Terms Sections */}
                    <div className="space-y-8">
                        {sections.map((section, index) => (
                            <motion.div
                                key={section.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                id={section.id}
                            >
                                <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-3 text-xl">
                                            <div className="p-2 rounded-lg bg-[#6ae58d]/10">
                                                <section.icon className="w-5 h-5 text-[#6ae58d]" />
                                            </div>
                                            {section.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="prose prose-gray dark:prose-invert max-w-none">
                                            {section.content.split('\n\n').map((paragraph, pIndex) => {
                                                if (paragraph.includes('•')) {
                                                    // Handle bullet points
                                                    const lines = paragraph.split('\n');
                                                    const title = lines[0];
                                                    const bullets = lines.slice(1);
                                                    
                                                    return (
                                                        <div key={pIndex} className="mb-4">
                                                            {title && !title.startsWith('•') && (
                                                                <p className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                                                                    {title}
                                                                </p>
                                                            )}
                                                            <ul className="space-y-2">
                                                                {(title.startsWith('•') ? [title, ...bullets] : bullets).map((bullet, bIndex) => (
                                                                    bullet.trim().startsWith('•') && (
                                                                        <li key={bIndex} className="flex items-start gap-2">
                                                                            <span className="w-1.5 h-1.5 bg-[#6ae58d] rounded-full mt-2 flex-shrink-0"></span>
                                                                            <span className="text-gray-700 dark:text-gray-300">
                                                                                {bullet.replace('•', '').trim()}
                                                                            </span>
                                                                        </li>
                                                                    )
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    );
                                                } else {
                                                    return (
                                                        <p key={pIndex} className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                                            {paragraph}
                                                        </p>
                                                    );
                                                }
                                            })}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    {/* Contact Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="mt-12 text-center"
                    >
                        <Card className="bg-gradient-to-r from-[#6ae58d] to-[#5ad17c] text-black shadow-lg">
                            <CardContent className="p-8">
                                <h2 className="text-2xl font-bold mb-4">Questions About Our Terms?</h2>
                                <p className="text-lg mb-6 max-w-2xl mx-auto">
                                    If you have any questions about these Terms of Service, please don&apos;t hesitate to contact our support team.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button
                                        asChild
                                        className="bg-black text-white hover:bg-gray-800"
                                    >
                                        <Link href="mailto:admin@mudget.finance">
                                            Contact Support
                                        </Link>
                                    </Button>
                                    <Button
                                        asChild
                                        variant="outline"
                                        className="border-black text-black hover:bg-black/10"
                                    >
                                        <Link href="/about">
                                            Learn More About Mudget
                                        </Link>
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