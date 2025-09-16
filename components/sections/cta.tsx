"use client"

import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

export function CTA() {
  const router = useRouter()

  return (
    <section className="py-20 bg-green-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            Let's discuss your project and create innovative solutions that drive growth, 
            efficiency, and digital transformation for your organization.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => router.push('/contact')}
              className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get Started
            </button>
            <button 
              onClick={() => router.push('/contact')}
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 hover:border-gray-300 hover:shadow-lg transition-all duration-300 backdrop-blur-sm"
            >
              Schedule Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}