"use client"

import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

export function CTA() {
  const router = useRouter()

  return (
    <section className="py-20 bg-gradient-to-br from-green-950 via-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-green-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-700/15 rounded-full blur-3xl animate-pulse"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6">
            <span className="bg-gradient-to-r from-green-400 via-green-300 to-green-500 bg-clip-text text-transparent animate-pulse">
              Ready to Transform Your Business?
            </span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            Let's discuss your project and create innovative solutions that drive growth, 
            efficiency, and digital transformation for your organization.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => router.push('/contact')}
              className="px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-lg hover:from-green-500 hover:to-green-600 transform hover:scale-105 transition-all duration-300 shadow-xl shadow-green-600/30 hover:shadow-green-500/40"
            >
              Get Started
            </button>
            <button 
              onClick={() => router.push('/contact')}
              className="px-8 py-4 border-2 border-green-500 text-green-400 font-semibold rounded-lg hover:bg-green-500/20 hover:border-green-400 hover:text-green-300 hover:shadow-xl hover:shadow-green-500/30 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm"
            >
              Schedule Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}