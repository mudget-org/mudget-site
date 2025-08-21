import { format, parseISO } from "date-fns";
import Link from "next/link";
import React from "react";
import { slug } from "github-slugger";

const BlogDetails = ({ blog }) => {
  return (
    <div className="px-2 md:px-10 bg-[#6ae58d]/10 dark:bg-[#6ae58d]/20 text-gray-800 dark:text-gray-200 py-4 flex items-center justify-around flex-wrap text-lg sm:text-xl font-medium mx-5 md:mx-10 rounded-lg border border-[#6ae58d]/20">
      <time className="m-3 flex items-center gap-2">
        <svg className="w-4 h-4 text-[#6ae58d]" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
        </svg>
        {format(parseISO(blog.publishedAt), "LLLL d, yyyy")}
      </time>
      <div className="m-3 flex items-center gap-2">
        <svg className="w-4 h-4 text-[#6ae58d]" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
        </svg>
        {blog.readingTime.text}
      </div>
      <Link href={`/categories/${slug(blog.tags[0])}`} className="m-3 flex items-center gap-2 hover:text-[#6ae58d] transition-colors">
        <svg className="w-4 h-4 text-[#6ae58d]" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
        </svg>
        #{blog.tags[0]}
      </Link>
    </div>
  );
};

export default BlogDetails;
