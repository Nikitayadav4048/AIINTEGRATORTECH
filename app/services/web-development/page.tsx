"use client"

import { motion } from "framer-motion"
import { Globe, Search, Shield, Zap, Code, Users } from "lucide-react"
import { useRouter } from "next/navigation"

const features = [
  {
    icon: Globe,
    title: "Responsive Design",
    description: "Mobile-first approach ensuring your website looks perfect on all devices"
  },
  {
    icon: Search,
    title: "SEO Optimization", 
    description: "Built-in SEO features to improve your search engine rankings"
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Fast loading times and optimized user experience"
  },
  {
    icon: Shield,
    title: "Security Implementation",
    description: "Robust security measures to protect your website and users"
  },
  {
    icon: Code,
    title: "Content Management",
    description: "Easy-to-use CMS for managing your website content"
  },
  {
    icon: Users,
    title: "E-commerce Solutions",
    description: "Complete online store setup with payment integration"
  }
]

export default function WebDevelopmentPage() {
  const router = useRouter()

  return (
    <main className="min-h-screen" style={{ backgroundColor: 'black', color: 'white' }}>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Globe className="w-10 h-10 text-black" />
            </div>
            <h1 className="text-5xl font-bold mb-6" style={{ color: 'white' }}>
              Web Development
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto" style={{ color: '#d1d5db' }}>
              Modern, responsive and SEO-friendly websites that represent your brand 
              and convert visitors into customers. We build websites that work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            What We Offer
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 p-8 rounded-xl text-center"
              >
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Build Your Website?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get a custom website that drives results. Contact us for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => router.push('/contact')}
              className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get Quote
            </button>
            <button 
              onClick={() => router.push('/contact')}
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 hover:border-gray-300 hover:shadow-lg transition-all duration-300 backdrop-blur-sm"
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}