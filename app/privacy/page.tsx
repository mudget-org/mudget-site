import Link from 'next/link'
import { Metadata } from 'next'
import { getMarkdownContent } from '@/lib/markdown'

export const metadata: Metadata = {
  title: 'Privacy Policy - Mudget',
  description: 'Privacy Policy for Mudget, the financial management app.',
}

export default async function PrivacyPolicy() {
  const content = await getMarkdownContent('privacy')

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

