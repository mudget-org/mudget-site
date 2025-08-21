"use client"
import React from 'react'
import MDXContent from './MdxContent'
import { motion } from 'framer-motion'

const mdxComponents = {
  h1: ({ children, ...props }) => (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6 mt-8 pb-2 border-b-2 border-[#6ae58d]"
      {...props}
    >
      {children}
    </motion.h1>
  ),
  h2: ({ children, ...props }) => (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4 mt-8 flex items-center gap-3"
      {...props}
    >
      <span className="w-2 h-6 bg-gradient-to-b from-[#6ae58d] to-[#5ad17c] rounded-full"></span>
      {children}
    </motion.h2>
  ),
  h3: ({ children, ...props }) => (
    <motion.h3
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-xl md:text-2xl font-medium text-gray-800 dark:text-gray-200 mb-3 mt-6"
      {...props}
    >
      {children}
    </motion.h3>
  ),
  p: ({ children, ...props }) => (
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-lg"
      {...props}
    >
      {children}
    </motion.p>
  ),
  ul: ({ children, ...props }) => (
    <motion.ul
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mb-6 space-y-2"
      {...props}
    >
      {children}
    </motion.ul>
  ),
  ol: ({ children, ...props }) => (
    <motion.ol
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mb-6 space-y-2 counter-reset list-decimal"
      {...props}
    >
      {children}
    </motion.ol>
  ),
  li: ({ children, ...props }) => (
    <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300" {...props}>
      <span className="w-2 h-2 rounded-full bg-[#6ae58d] mt-2 flex-shrink-0"></span>
      <span className="leading-relaxed">{children}</span>
    </li>
  ),
  blockquote: ({ children, ...props }) => (
    <motion.blockquote
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="my-6 pl-6 pr-4 py-4 bg-gradient-to-r from-[#6ae58d]/10 to-transparent border-l-4 border-[#6ae58d] rounded-r-lg relative"
      {...props}
    >
      <div className="absolute -left-2 top-4 w-4 h-4 bg-[#6ae58d] rounded-full"></div>
      <div className="text-gray-800 dark:text-gray-200 font-medium italic">
        {children}
      </div>
    </motion.blockquote>
  ),
  strong: ({ children, ...props }) => (
    <strong className="font-semibold text-[#6ae58d] dark:text-[#5ad17c]" {...props}>
      {children}
    </strong>
  ),
  em: ({ children, ...props }) => (
    <em className="italic text-gray-600 dark:text-gray-400" {...props}>
      {children}
    </em>
  ),
  a: ({ children, href, ...props }) => (
    <motion.a
      href={href}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="text-[#6ae58d] dark:text-[#5ad17c] font-medium hover:underline transition-colors duration-200 hover:text-[#5ad17c] dark:hover:text-[#6ae58d]"
      {...props}
    >
      {children}
    </motion.a>
  ),
  code: ({ children, className, ...props }) => {
    const isInline = !className;
    
    if (isInline) {
      return (
        <code className="bg-gray-100 dark:bg-gray-800 text-[#6ae58d] dark:text-[#5ad17c] px-2 py-1 rounded text-sm font-mono border border-gray-200 dark:border-gray-700" {...props}>
          {children}
        </code>
      );
    }
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="my-6 relative"
      >
        <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-r from-gray-800 to-gray-700 rounded-t-lg flex items-center px-4">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
        </div>
        <pre className="bg-gray-900 text-gray-100 p-4 pt-12 rounded-lg overflow-x-auto border-2 border-gray-700">
          <code className={className} {...props}>
            {children}
          </code>
        </pre>
      </motion.div>
    );
  },
  hr: ({ ...props }) => (
    <motion.hr
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="my-8 border-0 h-px bg-gradient-to-r from-transparent via-[#6ae58d] to-transparent"
      {...props}
    />
  ),
}

const RenderMdx = ({blog}) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className='col-span-12 lg:col-span-8 max-w-none bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 md:p-8'
    > 
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="prose-content first-paragraph-special"
      >
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
        <MDXContent code={blog.body} components={mdxComponents}/>
      </motion.div>
    </motion.div>
  )
}

export default RenderMdx
