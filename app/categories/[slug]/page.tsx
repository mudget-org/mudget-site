import { blogs as allBlogs } from "#site/content";
import BlogLayoutThree from "@/components/Blog/BlogLayoutThree";
import Categories from "@/components/Blog/Categories";
import { slug } from "github-slugger";


export async function generateStaticParams() {
  const categories: string[] = [];
  const paths = [{ slug: "all" }];

  allBlogs.map((blog) => {
    if (blog.isPublished) {
      blog.tags.map((tag) => {
        const slugified = slug(tag);
        if (!categories.includes(slugified)) {
          categories.push(slugified);
          paths.push({ slug: slugified });
        }
      });
    }
  });

  return paths;
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const categoryName = params.slug.replaceAll("-", " ");
  const isAllCategory = params.slug === "all";
  
  const title = isAllCategory 
    ? "All Financial Articles | Mudget Blog" 
    : `${categoryName.charAt(0).toUpperCase() + categoryName.slice(1)} Articles | Mudget Blog`;
    
  const description = isAllCategory
    ? "Explore all our financial articles covering budgeting, investing, personal finance, and money management tips for couples and young adults."
    : `Discover expert ${categoryName} articles and guides. Learn practical financial strategies and tips for better money management with Mudget.`;

  const keywords = [
    categoryName,
    "personal finance",
    "budgeting",
    "financial planning", 
    "money management",
    "couples finance",
    "Mudget",
    "financial education"
  ].join(", ");

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: `https://mudget.finance/categories/${params.slug}`,
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://mudget.finance/categories/${params.slug}`,
      siteName: "Mudget Financial Blog",
      images: [
        {
          url: "https://mudget.finance/social-banner.png",
          width: 1200,
          height: 630,
          alt: `${categoryName} Financial Articles`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://mudget.finance/social-banner.png"],
      creator: "@mudget_finance",
      site: "@mudget_finance",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}


const CategoryPage = ({ params }: { params: { slug: string } }) => {
// Separating logic to create list of categories from all blogs
const allCategories = ["all"]; // Initialize with 'all' category
allBlogs.forEach(blog => {
  blog.tags.forEach(tag => {
    const slugified = slug(tag);
    if (!allCategories.includes(slugified)) {
      allCategories.push(slugified);
    }
  });
});

// Sort allCategories to ensure they are in alphabetical order
allCategories.sort();

// Step 2: Filter blogs based on the current category (params.slug)
const blogs = allBlogs.filter(blog => {
  if (params.slug === "all") {
    return true; // Include all blogs if 'all' category is selected
  }
  return blog.tags.some(tag => slug(tag) === params.slug);
});

  return (
    <article className="mt-12 flex flex-col text-dark dark:text-light">
      <div className=" px-5 sm:px-10  md:px-24  sxl:px-32 flex flex-col">
        <h1 className="mt-6 font-semibold text-2xl md:text-4xl lg:text-5xl">#{params.slug}</h1>
        <span className="mt-2 inline-block">
          Discover more categories and expand your knowledge!
        </span>
      </div>
      <Categories categories={allCategories} currentSlug={params.slug} />

      <div className="grid  grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 grid-rows-2 gap-16 mt-5 sm:mt-10 md:mt-24 sxl:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32">
        {blogs.map((blog, index) => (
          <article key={index} className="col-span-1 row-span-1 relative">
            <BlogLayoutThree blog={blog} />
          </article>
        ))}
      </div>
    </article>
  );
};

export default CategoryPage;
