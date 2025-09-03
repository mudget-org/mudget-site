import Link from 'next/link'
import { Metadata } from 'next'
import { getMarkdownContent } from '@/lib/markdown'

export const metadata: Metadata = {
  title: 'Terms and Conditions - Mudget',
  description: 'Terms and Conditions for Mudget, the financial management app.',
}

export default async function TermsOfService() {
  const content = await getMarkdownContent('terms')

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="prose prose-lg max-w-none dark:prose-invert">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
      <div className="mt-8">
        <Link href="/" className="text-blue-600 hover:underline">Back to Home</Link>
      </div>
    </div>
  )
}