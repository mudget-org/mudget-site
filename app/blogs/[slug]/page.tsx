import BlogDetails from "@/components/Blog/BlogDetails";
import RenderMdx from "@/components/Blog/RenderMdx";
import Tag from "@/components/Elements/Tag";
import siteMetadata from "@/utils/siteMetaData";
import { blogs } from '#site/content'
import { slug as slugify } from "github-slugger";
import Image from "next/image";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const {slug} = params
  const blog = blogs.find((blog) => blog.slug === slug);
  if (!blog) {
    return;
  }

  const publishedAt = new Date(blog.publishedAt).toISOString();
  const modifiedAt = new Date(blog.updatedAt || blog.publishedAt).toISOString();

  let imageList: string[] = [siteMetadata.socialBanner];
  if (blog.image) {
    imageList =
      typeof blog.image.src === "string"
        ? [siteMetadata.siteUrl + blog.image.src]
        : [blog.image.src];
  }
  const ogImages = imageList.map((img) => {
    return { url: img.includes("http") ? img : siteMetadata.siteUrl + img };
  });

  const authors = blog?.author ? [blog.author] : siteMetadata.author;

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: siteMetadata.siteUrl + blog.url,
      siteName: siteMetadata.title,
      locale: "en_US",
      type: "article",
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      images: ogImages,
      authors: authors.length > 0 ? authors : [siteMetadata.author],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: ogImages,
    },
  };
}


// eslint-disable-next-line @typescript-eslint/no-explicit-any
function TableOfContentsItem({ item, level = "two" }: { item: { url: string, title: string, items: any[] }, level?: string }){
  return (
    <li className="py-1">
      <a
        href={item.url}
        data-level={level}
        className="data-[level=two]:pl-0 data-[level=two]:pt-2
                  data-[level=two]:border-t border-solid border-dark/40
                  data-[level=three]:pl-4
                  sm:data-[level=three]:pl-6
                  flex items-center justify-start"
      >
        {level === "three" && (
          <span className="flex w-1 h-1 rounded-full bg-dark mr-2">&nbsp;</span>
        )}
        <span className="hover:underline">{item.title}</span>
      </a>
      {item.items.length > 0 && (
        <ul className="mt-1">
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {item.items.map((subItem: { url: string, title: string, items: any[] }) => (
            <TableOfContentsItem 
              key={subItem.url} 
              item={subItem} 
              level="three"
            />
          ))}
        </ul>
      )}
    </li>
  );
}

export default async function BlogPage({ params }: { params: { slug: string } }) {
  const {slug} = params
  const blog = blogs.find((blog) => {
    return blog.slug === slug
  });

  if(!blog){
    notFound()
  }

  let imageList: string[] = [siteMetadata.socialBanner];
  if (blog.image) {
    imageList =
      typeof blog.image.src === "string"
        ? [siteMetadata.siteUrl + blog.image.src]
        : [blog.image.src];
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blog.title,
    "description": blog.description,
    "image": imageList,
    "datePublished": new Date(blog.publishedAt).toISOString(),
    "dateModified": new Date(blog.updatedAt || blog.publishedAt).toISOString(),
    "author": {
      "@type": "Person",
      "name": blog?.author || siteMetadata.author,
      "url": siteMetadata.siteUrl,
    },
    "publisher": {
      "@type": "Organization",
      "name": "Mudget",
      "logo": {
        "@type": "ImageObject",
        "url": siteMetadata.siteUrl + "/logo.png",
      },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": siteMetadata.siteUrl + blog.url,
    },
    "keywords": blog.tags?.join(", ") || "budgeting, personal finance, money management",
    "articleSection": "Personal Finance",
    "url": siteMetadata.siteUrl + blog.url,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <Nav showPricesSection={false} AppURL="https://app.mudget.finance" />
        <article className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center relative w-full h-[70vh] bg-gray-900 dark:bg-gray-800">
        <div className="w-full z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Tag
            name={blog.tags[0]}
            link={`/categories/${slugify(blog.tags[0])}`}
            className="px-6 text-sm py-2"
          />
          <h1
            className="inline-block mt-6 font-semibold capitalize text-white text-2xl md:text-3xl lg:text-5xl !leading-normal relative w-5/6"
          >
            {blog.title}
          </h1>
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 h-full bg-gray-900/60 dark:bg-gray-800/70" />
        <Image
          src={blog.image.src}
          placeholder="blur"
          blurDataURL={blog.image.blurDataURL}
          alt={blog.title}
          width={blog.image.width}
          height={blog.image.height}
          className="aspect-square w-full h-full object-cover object-center"
          priority
          sizes="100vw"
        />
      </div>
      <BlogDetails blog={blog} />

      <div className="grid grid-cols-12  gap-y-8 lg:gap-8 sxl:gap-16 mt-8 px-5 md:px-10">
        <div className="col-span-12  lg:col-span-4">
          <details
            className="border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 rounded-lg p-4 sticky top-6 max-h-[80vh] overflow-hidden overflow-y-auto bg-white dark:bg-gray-800 shadow-lg"
            open
          >
            <summary className="text-lg font-semibold capitalize cursor-pointer">
              Table Of Content
            </summary>
            <ul className="mt-4 text-base text-gray-700 dark:text-gray-300">
              {blog.toc.map((item) => (
                <TableOfContentsItem key={item.url} item={item} />
              ))}
            </ul>
          </details>
        </div>
        <RenderMdx blog={blog} />
        </div>
        </article>
        <Footer />
      </div>
    </>
  );
}
