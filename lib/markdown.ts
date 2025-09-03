import fs from 'fs'
import path from 'path'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeStringify from 'rehype-stringify'

export async function getMarkdownContent(filename: string) {
  const filePath = path.join(process.cwd(), 'app', filename, `${filename}.md`)
  
  if (!fs.existsSync(filePath)) {
    throw new Error(`Markdown file not found: ${filePath}`)
  }
  
  const fileContent = fs.readFileSync(filePath, 'utf8')
  
  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings)
    .use(rehypeStringify)
    .process(fileContent)
  
  return processedContent.toString()
}