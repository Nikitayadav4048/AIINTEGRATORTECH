"use client"

import { motion } from "framer-motion"
import { Globe, Smartphone, Database, Users, Bot, ShieldCheck } from "lucide-react"
import { useRouter } from "next/navigation"

const features = [
  {
    title: "Web Development",
    description: "Custom web applications built with modern technologies and best practices.",
    icon: Globe,
  },
  {
    title: "App Development", 
    description: "Native and cross-platform mobile applications for iOS and Android.",
    icon: Smartphone,
  },
  {
    title: "ERP Solutions",
    description: "Enterprise resource planning systems to streamline your business operations.",
    icon: Database,
  },
  {
    title: "CRM Solutions",
    description: "Customer relationship management systems to grow your business.",
    icon: Users,
  },
  {
    title: "AI & Automation",
    description: "Intelligent automation solutions powered by artificial intelligence.",
    icon: Bot,
  },
  {
    title: "Cloud & Security",
    description: "Secure cloud infrastructure and cybersecurity solutions.",
    icon: ShieldCheck,
  }
]

export function Features() {
  const router = useRouter()

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
            Our Services
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Comprehensive IT solutions designed to transform your business and drive digital innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-8 rounded-xl text-center hover:bg-gray-700 transition-colors cursor-pointer"
              onClick={() => router.push('/contact')}
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
  )
}