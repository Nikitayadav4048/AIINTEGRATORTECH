"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Users, Award, Shield, Globe } from "lucide-react"
import { useRouter } from "next/navigation"

export function Hero() {
  const router = useRouter()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-green-900 to-gray-900 pt-20 sm:pt-32">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-green-800/30 to-gray-900/80"></div>
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-green-500/50 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-6 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-6 sm:mb-8"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white">
              Transform Your Business
              <br />
              <span className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent">
                With AI-Powered Solutions
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mb-8 sm:mb-12"
          >
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              We specialize in creating innovative technology solutions that drive business growth. 
              From custom software development to AI integration, we help companies stay ahead of the curve.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12"
          >
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
              Get Quote
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-4 md:gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">50+</div>
              <div className="text-gray-300 text-sm md:text-base">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">35+</div>
              <div className="text-gray-300 text-sm md:text-base">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">4.5+</div>
              <div className="text-gray-300 text-sm md:text-base">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">7+</div>
              <div className="text-gray-300 text-sm md:text-base">Countries</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}