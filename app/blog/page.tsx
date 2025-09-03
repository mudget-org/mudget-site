"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { blogs } from "#site/content";
import { Search, Calendar, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { BlogListingStructuredData } from "@/components/BlogStructuredData";

// Get all unique tags from blogs
const getAllTags = () => {
  const tagSet = new Set<string>();
  blogs.forEach(blog => {
    if (blog.tags) {
      blog.tags.forEach(tag => tagSet.add(tag));
    }
  });
  return Array.from(tagSet);
};

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  
  const allTags = getAllTags();
  
  // Sort blogs by date (most recent first)
  const sortedBlogs = [...blogs].sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  // Filter blogs based on search and tag
  const filteredBlogs = useMemo(() => {
    return sortedBlogs.filter(blog => {
      const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           blog.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesTag = selectedTag ? blog.tags?.includes(selectedTag) : true;
      
      return matchesSearch && matchesTag && blog.isPublished;
    });
  }, [searchQuery, selectedTag, sortedBlogs]);

  const featuredPost = filteredBlogs[0]; // Most recent post
  const otherPosts = filteredBlogs.slice(1);

  const formatDate = (dateString: string | Date) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <BlogListingStructuredData blogs={filteredBlogs} />
      <Nav  AppURL="https://app.mudget.finance" />
      
      <main className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Mudget Financial Blog</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Expert insights, tips, and guides to help couples and individuals master their finances
            </p>
          </div>

          {/* Search and Filter Bar */}
          <div className="mb-12 space-y-6">
            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search articles..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Tag Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              <Button
                variant={selectedTag === null ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTag(null)}
                className="text-sm"
              >
                All Topics
              </Button>
              {allTags.map(tag => (
                <Button
                  key={tag}
                  variant={selectedTag === tag ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                  className="text-sm capitalize"
                >
                  {tag}
                </Button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          {(searchQuery || selectedTag) && (
            <div className="text-center mb-8">
              <p className="text-gray-600 dark:text-gray-300">
                Found {filteredBlogs.length} article{filteredBlogs.length !== 1 ? 's' : ''}
                {selectedTag && ` in "${selectedTag}"`}
                {searchQuery && ` matching "${searchQuery}"`}
              </p>
            </div>
          )}

          {/* Featured Post (Most Recent - Full Width) */}
          {featuredPost && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-16"
            >
              <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <div className="relative h-64 md:h-full">
                      <Image
                        src={featuredPost.image.src}
                        alt={featuredPost.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-[#6ae58d] text-black">Featured</Badge>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8">
                    <CardHeader className="p-0">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {formatDate(featuredPost.publishedAt)}
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {featuredPost.author}
                        </div>
                      </div>
                      <h2 className="text-2xl font-bold mb-4 hover:text-[#6ae58d] transition-colors">
                        <Link href={featuredPost.url}>{featuredPost.title}</Link>
                      </h2>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="text-gray-600 dark:text-gray-300 mb-6">
                        {featuredPost.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {featuredPost.tags?.slice(0, 3).map(tag => (
                            <Badge key={tag} variant="secondary" className="text-xs capitalize">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <Button asChild className="bg-[#6ae58d] text-black hover:bg-[#5ad17c]">
                          <Link href={featuredPost.url}>Read More</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}

          {/* Masonry Grid for Other Posts */}
          {otherPosts.length > 0 && (
            <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
              {otherPosts.map((blog, index) => (
                <motion.div
                  key={blog.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * (index + 2) }}
                  className="break-inside-avoid mb-8"
                >
                  <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                    <div className="relative h-48">
                      <Image
                        src={blog.image.src}
                        alt={blog.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                        <Calendar className="w-3 h-3" />
                        {formatDate(blog.publishedAt)}
                      </div>
                      
                      <h3 className="text-lg font-bold mb-3 group-hover:text-[#6ae58d] transition-colors line-clamp-2">
                        <Link href={blog.url}>{blog.title}</Link>
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                        {blog.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-1 mb-4">
                        {blog.tags?.slice(0, 2).map(tag => (
                          <Badge key={tag} variant="outline" className="text-xs capitalize">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-gray-500 flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {blog.author}
                        </div>
                        <Button asChild size="sm" variant="outline">
                          <Link href={blog.url}>Read More</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}

          {/* No Results State */}
          {filteredBlogs.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-2xl font-bold mb-4">No articles found</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Try adjusting your search terms or selected tags
              </p>
              <Button 
                onClick={() => {
                  setSearchQuery("");
                  setSelectedTag(null);
                }}
                variant="outline"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
}
