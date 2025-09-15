  "use client"

import { motion } from "framer-motion"
import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark, Twitter, Linkedin, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card3D, Button3D } from "@/components/ui/card-3d"
import { Scroll3D } from "@/components/ui/scroll-3d"
import Link from "next/link"
import { notFound } from "next/navigation"
import { useRouter } from "next/navigation"

// Mock blog data
const blogPosts = {
  "getting-started": {
    title: "Getting Started with Our Platform: A Complete Guide",
    excerpt: "Learn how to set up your team, configure your workspace, and start collaborating effectively from day one.",
    content: "This is the content for the getting started guide...",
    author: "Sarah Chen",
    authorAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    authorRole: "Product Manager",
    publishedAt: "2024-01-15",
    readTime: "8 min read",
    category: "Getting Started",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    tags: ["Getting Started", "Onboarding", "Team Collaboration"]
  },
  "feature-highlights": {
    title: "Feature Highlights: What's New in Version 2.0",
    excerpt: "Discover the latest features and improvements that will transform how your team works together.",
    content: "This is the content for the feature highlights...",
    author: "Michael Rodriguez",
    authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    authorRole: "CTO",
    publishedAt: "2024-01-10",
    readTime: "12 min read",
    category: "Product Updates",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop",
    tags: ["Product Updates", "New Features", "Version 2.0"]
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const router = useRouter()

  const handleStartFreeTrial = () => {
    // Redirect to contact page
    router.push('/contact')
  }

  const handleScheduleDemo = () => {
    // Redirect to contact page
    router.push('/contact')
  }

  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <div>
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-brand-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            {/* Breadcrumb */}
            <div className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
              <Link href="/blog" className="hover:text-brand-600 transition-colors duration-200">
                Blog
              </Link>
              <span>/</span>
              <span>{post.category}</span>
            </div>

            {/* Article Header */}
            <div className="mb-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {post.title}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {post.excerpt}
              </p>
              
              {/* Article Meta */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.publishedAt}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>{post.category}</span>
                </div>
              </div>

              {/* Author Info */}
              <div className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-sm">
                <img
                  src={post.authorAvatar}
                  alt={post.author}
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <div className="font-semibold text-gray-900 text-lg">{post.author}</div>
                  <div className="text-gray-600">{post.authorRole}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Main Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="lg:col-span-3"
              >
                {/* Featured Image */}
                <div className="mb-8">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 lg:h-80 object-cover rounded-xl"
                  />
                </div>

                {/* Article Content */}
                <article className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {post.content}
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    This is a placeholder for the full article content. In a real implementation, 
                    this would contain the actual MDX content rendered with proper styling.
                  </p>
                </article>

                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Sidebar */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="lg:col-span-1"
              >
                <div className="sticky top-32 space-y-6">
                  {/* Share */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Share Article</h3>
                    <div className="space-y-3">
                      <div className="flex items-center text-gray-600 text-sm font-medium hover:text-brand-600 cursor-pointer">
                        <Twitter className="w-4 h-4 mr-2" />
                        Twitter
                      </div>
                      <div className="flex items-center text-gray-600 text-sm font-medium hover:text-brand-600 cursor-pointer">
                        <Linkedin className="w-4 h-4 mr-2" />
                        LinkedIn
                      </div>
                      <div className="flex items-center text-gray-600 text-sm font-medium hover:text-brand-600 cursor-pointer">
                        <Facebook className="w-4 h-4 mr-2" />
                        Facebook
                      </div>
                    </div>
                  </div>

                  {/* Bookmark */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <div className="flex items-center text-gray-600 text-sm font-medium hover:text-brand-600 cursor-pointer">
                      <Bookmark className="w-4 h-4 mr-2" />
                      Bookmark Article
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brand-600 via-brand-700 to-brand-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-brand-100 mb-8 leading-relaxed">
              Experience the power of our platform firsthand. Start your free trial today 
              and see how it can transform your team's collaboration.
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
