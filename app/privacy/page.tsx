import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Mudget',
  description: 'Privacy Policy for Mudget, the financial management app.',
}

export default function PrivacyPolicy() {return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <div className="prose max-w-none">
        <h2>1. Information We Collect</h2>
        <p>We collect personal information that you provide directly to us, such as your name, email address, and financial data when you use our services.</p>

        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to develop new features.</p>

        <h2>3. Information Sharing and Disclosure</h2>
        <p>We do not sell your personal information. We may share your information with third-party service providers who perform services on our behalf.</p>

        <h2>4. Data Security</h2>
        <p>We implement appropriate technical and organizational measures to protect the security of your personal information.</p>

        <h2>5. Your Rights and Choices</h2>
        <p>You have the right to access, correct, or delete your personal information. You can also opt out of certain data collection and use.</p>

        <h2>6. Changes to This Privacy Policy</h2>
        <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page.</p>

        <h2>7. Contact Us</h2>
        <p>If you have any questions about this privacy policy, please contact us at privacy@mudget.finance.</p>
      </div>
      <div className="mt-8">
        <Link href="/" className="text-blue-600 hover:underline">Back to Home</Link>
      </div>
    </div>
  )
}

