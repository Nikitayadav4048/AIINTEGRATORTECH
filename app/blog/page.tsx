"use client"

import { motion } from "framer-motion"
import { Search, Filter, Calendar, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card3D, Button3D } from "@/components/ui/card-3d"
import { Scroll3D } from "@/components/ui/scroll-3d"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"

// Mock blog data - in a real app, this would come from an API
const blogPosts = [
  {
    id: 1,
    slug: "getting-started",
    title: "Getting Started with Our Platform: A Complete Guide",
    excerpt: "Learn how to set up your team, configure your workspace, and start collaborating effectively from day one.",
    author: "Sarah Chen",
    authorAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    publishedAt: "2024-01-15",
    readTime: "8 min read",
    category: "Getting Started",
    featured: true,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
  },
  {
    id: 2,
    slug: "feature-highlights",
    title: "Feature Highlights: What's New in Version 2.0",
    excerpt: "Discover the latest features and improvements that will transform how your team works together.",
    author: "Michael Rodriguez",
    authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    publishedAt: "2024-01-10",
    readTime: "12 min read",
    category: "Product Updates",
    featured: false,
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop"
  },
  {
    id: 3,
    slug: "team-collaboration",
    title: "10 Ways to Improve Team Collaboration in Remote Work",
    excerpt: "Remote work doesn't have to mean disconnected teams. Here are proven strategies to keep your team engaged and productive.",
    author: "Emily Kim",
    authorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffaf8d80?w=100&h=100&fit=crop&crop=face",
    publishedAt: "2024-01-05",
    readTime: "10 min read",
    category: "Remote Work",
    featured: false,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop"
  },
  {
    id: 4,
    slug: "productivity-tips",
    title: "Productivity Tips from Top-Performing Teams",
    excerpt: "Learn the habits and practices that separate high-performing teams from the rest.",
    author: "David Thompson",
    authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    publishedAt: "2023-12-28",
    readTime: "15 min read",
    category: "Productivity",
    featured: false,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop"
  },
  {
    id: 5,
    slug: "integration-guide",
    title: "Complete Integration Guide: Connect All Your Tools",
    excerpt: "Step-by-step instructions for integrating our platform with your existing workflow tools and services.",
    author: "Sarah Chen",
    authorAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    publishedAt: "2023-12-20",
    readTime: "20 min read",
    category: "Integrations",
    featured: false,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
  },
  {
    id: 6,
    slug: "case-study",
    title: "Case Study: How TechCorp Increased Productivity by 40%",
    excerpt: "A detailed look at how one company transformed their workflow and achieved remarkable results.",
    author: "Michael Rodriguez",
    authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    publishedAt: "2023-12-15",
    readTime: "18 min read",
    category: "Case Studies",
    featured: false,
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop"
  }
]

const categories = [
  "All",
  "Getting Started",
  "Product Updates",
  "Remote Work",
  "Productivity",
  "Integrations",
  "Case Studies"
]

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("latest")
  const router = useRouter()

  const handleGetStarted = () => {
    // Redirect to contact page
    router.push('/contact')
  }

  const handleScheduleConsultation = () => {
    // Redirect to contact page
    router.push('/contact')
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
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our{" "}
              <span className="heading-gradient">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Insights, tips, and stories about team collaboration, productivity, and the future of work. 
              Stay updated with the latest trends and best practices.
            </p>
            
            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto">
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  className="pl-10 pr-4 py-3 w-full"
                />
              </div>
              
              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((category, index) => (
                  <div
                    key={category}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      category === "All" 
                        ? 'bg-brand-600 text-white' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Featured Article
            </h2>
            
            {blogPosts.filter(post => post.featured).map((post) => (
              <div key={post.id} className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-64 lg:h-full">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-brand-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                        Featured
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                      <span className="bg-brand-100 text-brand-800 px-2 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <img
                          src={post.authorAvatar}
                          alt={post.author}
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <div className="font-medium text-gray-900">{post.author}</div>
                          <div className="text-sm text-gray-500">{post.publishedAt}</div>
                        </div>
                      </div>
                      
                      <Link href={`/blog/${post.slug}`}>
                        <div className="text-brand-600 text-sm font-medium hover:underline">
                          Read More
                          <ArrowRight className="inline w-4 h-4 ml-2" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto"
          >
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Our{" "}
                <span className="heading-gradient">Services</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Comprehensive IT solutions designed to build your digital presence, optimize operations, and take your business to the next level.
              </p>
            </motion.div>

            {/* Services Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
            >
              {[
                {
                  icon: "🌐",
                  title: "Web Development",
                  description: "Modern, responsive and SEO-friendly websites that represent brands and convert visitors into customers.",
                  color: "text-blue-600"
                },
                {
                  icon: "📱",
                  title: "Application Development",
                  description: "Custom mobile and desktop applications with smooth performance and scalability.",
                  color: "text-green-600"
                },
                {
                  icon: "🗄️",
                  title: "ERP Solutions",
                  description: "Enterprise Resource Planning systems to manage finance, HR, inventory, and operations in one place.",
                  color: "text-yellow-600"
                },
                {
                  icon: "👥",
                  title: "CRM Solutions",
                  description: "Smart Customer Relationship Management tools to track leads, manage clients, and boost sales efficiency.",
                  color: "text-red-600"
                },
                {
                  icon: "🤖",
                  title: "Automation & AI Integration",
                  description: "AI chatbots, workflow automation, and intelligent tools to save time and increase productivity.",
                  color: "text-purple-600"
                },
                {
                  icon: "🔒",
                  title: "Cloud & Security Solutions",
                  description: "Secure, scalable cloud deployment with enterprise-grade security and reliable data backup.",
                  color: "text-indigo-600"
                },
                {
                  icon: "🎨",
                  title: "UI/UX Design",
                  description: "Engaging, user-friendly designs that enhance customer experience.",
                  color: "text-orange-600"
                },
                {
                  icon: "💡",
                  title: "Consulting & Support",
                  description: "From idea to execution—end-to-end guidance, MVP development, and long-term support.",
                  color: "text-pink-600"
                }
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-0"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Services CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="text-center mt-16"
            >
              <p className="text-lg text-gray-600 mb-6">
                Ready to discuss your project?
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Latest Articles
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.filter(post => !post.featured).map((post, index) => (
                <Scroll3D key={post.id} intensity={0.2}>
                  <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <Card3D className="h-full overflow-hidden glow-3d">
                      <div className="relative h-48">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-xs px-3 py-1 rounded-full font-medium">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-6">
                    <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{post.publishedAt}</span>
                      <span>•</span>
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-brand-600 transition-colors duration-200">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <img
                          src={post.authorAvatar}
                          alt={post.author}
                          className="w-8 h-8 rounded-full"
                        />
                        <span className="text-sm font-medium text-gray-900">{post.author}</span>
                      </div>
                      
                        <Link href={`/blog/${post.slug}`}>
                          <div className="text-gray-600 text-sm font-medium group-hover:text-brand-600 hover:underline">
                            Read More
                            <ArrowRight className="inline w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                          </div>
                        </Link>
                      </div>
                      </div>
                    </Card3D>
                  </motion.article>
                </Scroll3D>
              ))}
            </div>
            
            {/* Load More Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <div className="text-gray-600 text-sm font-medium hover:underline cursor-pointer">
                Load More Articles
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-br from-brand-600 via-brand-700 to-brand-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-brand-100 mb-8 leading-relaxed">
              Get the latest articles, tips, and insights delivered straight to your inbox. 
              No spam, just valuable content.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/20 border-white/30 text-white placeholder:text-brand-200 focus:border-white focus:ring-white"
              />
              <div className="px-6 py-3 bg-white text-brand-700 rounded-lg font-medium hover:bg-gray-50 cursor-pointer">
                Subscribe
              </div>
            </div>
            
            <p className="text-sm text-brand-200 mt-4">
              By subscribing, you agree to our{" "}
              <a href="/privacy" className="text-white hover:underline">Privacy Policy</a>
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
