"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { ClientLogos } from "@/components/sections/client-logos"

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Modern e-commerce solution with payment integration and inventory management.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "Web Development"
  },
  {
    id: 2,
    title: "CRM Dashboard",
    description: "Customer relationship management system with analytics and reporting.",
    tech: ["Vue.js", "Python", "PostgreSQL", "Redis"],
    category: "CRM Solutions"
  },
  {
    id: 3,
    title: "Mobile Banking App",
    description: "Secure mobile banking application with biometric authentication.",
    tech: ["React Native", "Node.js", "MongoDB", "JWT"],
    category: "App Development"
  },
  {
    id: 4,
    title: "AI Chatbot",
    description: "Intelligent customer service chatbot with natural language processing.",
    tech: ["Python", "TensorFlow", "Flask", "OpenAI"],
    category: "AI & Automation"
  },
  {
    id: 5,
    title: "ERP System",
    description: "Enterprise resource planning system for manufacturing company.",
    tech: ["Angular", "Java", "MySQL", "Spring Boot"],
    category: "ERP Solutions"
  },
  {
    id: 6,
    title: "Cloud Infrastructure",
    description: "Scalable cloud infrastructure with automated deployment and monitoring.",
    tech: ["AWS", "Docker", "Kubernetes", "Terraform"],
    category: "Cloud & Security"
  }
]

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-white mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our successful projects and see how we've helped businesses transform digitally.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-green-900 rounded-xl p-6 hover:bg-green-800 hover:scale-110 hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <div className="mb-4">
                  <span className="text-sm text-gray-400 bg-green-800 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-green-800 text-gray-300 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                

              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <ClientLogos />
    </main>
  )
}