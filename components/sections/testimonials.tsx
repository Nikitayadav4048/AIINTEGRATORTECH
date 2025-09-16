"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CTO",
    company: "TechCorp Solutions",
    rating: 5,
    content: "AI INTEGRATOR TECH transformed our business operations with their custom ERP solution. The team's expertise helped us automate 70% of our manual processes.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder & CEO", 
    company: "InnovateLab",
    rating: 5,
    content: "Working with AI INTEGRATOR TECH was a game-changer for our startup. They built a scalable web platform that helped us secure Series A funding.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Operations Director",
    company: "Global Retail Inc",
    rating: 5,
    content: "The CRM solution they developed revolutionized our customer management. Sales increased by 40% within the first quarter.",
  }
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Don't just take our word for it. Here's what our clients have to say about their experience.
          </p>
        </motion.div>

        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <div className="bg-green-900 p-6 rounded-xl text-center">
            <div className="flex justify-center mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-lg text-white mb-4 leading-relaxed">
              "{testimonials[currentIndex].content}"
            </p>
            <div className="flex items-center justify-center">
              <div>
                <h4 className="text-base font-semibold text-white">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-sm text-gray-300">
                  {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={prevTestimonial}
            className="p-2 bg-green-700 text-white rounded-full hover:bg-green-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-white' : 'bg-green-600'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={nextTestimonial}
            className="p-2 bg-green-700 text-white rounded-full hover:bg-green-600 transition-colors"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}