"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    id: 1,
    question: "What services does AI INTEGRATOR TECH offer?",
    answer: "We offer comprehensive IT solutions including custom software development, web and mobile app development, ERP/CRM systems, AI & machine learning integration, cloud solutions, and cybersecurity."
  },
  {
    id: 2,
    question: "How long does a typical project take to complete?",
    answer: "Project timelines vary based on complexity. Small projects take 4-8 weeks, medium projects take 3-6 months, and large enterprise solutions can take 6-12 months or more."
  },
  {
    id: 3,
    question: "Do you provide ongoing support and maintenance?",
    answer: "Yes, we offer comprehensive support packages including bug fixes, security updates, performance optimization, and 24/7 technical support."
  },
  {
    id: 4,
    question: "What technologies do you specialize in?",
    answer: "We work with modern tech stacks including React, Angular, Vue.js, Node.js, Python, Java, AWS, Azure, Google Cloud, and various AI/ML frameworks."
  }
]

export function FAQ() {
  const [expandedFaqs, setExpandedFaqs] = useState<number[]>([])

  const toggleFaq = (faqId: number) => {
    setExpandedFaqs(prev => 
      prev.includes(faqId) 
        ? prev.filter(id => id !== faqId)
        : [...prev, faqId]
    )
  }

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Find answers to common questions about our services and processes.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-xl overflow-hidden"
            >
              <button
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-700 transition-colors"
                onClick={() => toggleFaq(faq.id)}
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                <ChevronDown 
                  className={`w-5 h-5 text-white transition-transform duration-300 ${
                    expandedFaqs.includes(faq.id) ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              {expandedFaqs.includes(faq.id) && (
                <div className="px-6 pb-6">
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}