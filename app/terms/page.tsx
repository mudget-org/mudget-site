import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - Mudget',
  description: 'Terms of Service for Mudget, the financial management app.',
}

export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <div className="prose max-w-none">
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing or using Mudget, you agree to be bound by these Terms of Service.</p>

        <h2>2. Description of Service</h2>
        <p>Mudget provides financial management tools and services to help users budget, track finances, and improve financial well-being.</p>

        <h2>3. User Responsibilities</h2>
        <p>Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account.</p>

        <h2>4. Privacy Policy</h2>
        <p>Our Privacy Policy, which explains how we collect, use, and share information, is incorporated into these Terms of Service.</p>

        <h2>5. Intellectual Property</h2>
        <p>All content and functionality on Mudget is the exclusive property of Mudget Finance or its licensors.</p>

        <h2>6. Limitation of Liability</h2>
        <p>Mudget Finance shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the service.</p>

        <h2>7. Changes to Terms</h2>
        <p>We reserve the right to modify these Terms of Service at any time. Your continued use of Mudget after such changes constitutes acceptance of the new terms.</p>

        <h2>8. Governing Law</h2>
        <p>These Terms of Service shall be governed by and construed in accordance with the laws of [Your Jurisdiction].</p>

        <h2>9. Contact Information</h2>
        <p>If you have any questions about these Terms, please contact us at support@mudget.finance.</p>
      </div>
      <div className="mt-8">
        <Link href="/" className="text-blue-600 hover:underline">Back to Home</Link>
      </div>
    </div>
  )
}

