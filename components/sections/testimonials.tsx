"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    project: "ERP Solution",
    rating: 5,
    content: "Outstanding work on our enterprise system. The team delivered exactly what we needed and helped automate our entire workflow.",
  },
  {
    id: 2,
    project: "E-commerce Platform",
    rating: 5,
    content: "Professional development team that understood our requirements perfectly. The platform they built increased our sales by 60%.",
  },
  {
    id: 3,
    project: "Mobile App Development",
    rating: 5,
    content: "Excellent mobile app with great user experience. The team was responsive and delivered on time with quality results.",
  },
  {
    id: 4,
    project: "CRM System",
    rating: 5,
    content: "Game-changing CRM solution that streamlined our customer management. Highly recommend their expertise and professionalism.",
  },
  {
    id: 5,
    project: "Web Development",
    rating: 5,
    content: "Modern, responsive website that perfectly represents our brand. The team's attention to detail was impressive throughout.",
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
    <section className="py-8 md:py-16 bg-black">
      <div className="container mx-auto px-6 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-6 md:mb-10"
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white mb-3">
            What Our Clients Say
          </h2>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            Don't just take our word for it. Here's what our clients have to say about their experience.
          </p>
        </motion.div>

        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto mb-6 md:mb-10"
        >
          <div className="bg-green-900 p-4 md:p-6 rounded-xl text-center">
            <div className="flex justify-center mb-3">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-sm md:text-base text-white mb-3 leading-relaxed">
              "{testimonials[currentIndex].content}"
            </p>
            <div className="flex items-center justify-center">
              <div>
                <h4 className="text-sm md:text-base font-semibold text-white">
                  {testimonials[currentIndex].project}
                </h4>
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