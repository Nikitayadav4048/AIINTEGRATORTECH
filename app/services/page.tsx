"use client"

import { motion } from "framer-motion"
import { 
  Globe, 
  Smartphone, 
  Database, 
  Users, 
  Bot, 
  ShieldCheck, 
  CheckCircle,
  Zap,
  Target,
  TrendingUp,
  Palette
} from "lucide-react"
import { useRouter } from "next/navigation"

const services = [
  {
    id: "web-development",
    icon: Globe,
    title: "Web Development",
    description: "Modern, responsive and SEO-friendly websites that represent brands and convert visitors into customers.",
    features: [
      "Responsive Design",
      "SEO Optimization", 
      "Performance Optimization",
      "Security Implementation",
      "Content Management",
      "E-commerce Solutions"
    ],
    deliveryRate: "4-8 weeks"
  },
  {
    id: "app-development",
    icon: Smartphone,
    title: "Application Development",
    description: "Custom mobile and desktop applications with smooth performance and scalability.",
    features: [
      "Cross-platform Development",
      "Native Performance",
      "Offline Support",
      "Push Notifications",
      "App Store Optimization",
      "Maintenance & Updates"
    ],
    deliveryRate: "8-16 weeks"
  },
  {
    id: "erp-solutions",
    icon: Database,
    title: "ERP Solutions",
    description: "Enterprise Resource Planning systems to manage finance, HR, inventory, and operations in one place.",
    features: [
      "Financial Management",
      "HR Management",
      "Inventory Control",
      "Reporting & Analytics",
      "Workflow Automation",
      "Integration Capabilities"
    ],
    deliveryRate: "16-32 weeks"
  },
  {
    id: "crm-solutions",
    icon: Users,
    title: "CRM Solutions",
    description: "Smart Customer Relationship Management tools to track leads, manage clients, and boost sales efficiency.",
    features: [
      "Lead Management",
      "Customer Tracking",
      "Sales Analytics",
      "Automation",
      "Integration",
      "Mobile Access"
    ],
    deliveryRate: "12-24 weeks"
  },
  {
    id: "ai-automation",
    icon: Bot,
    title: "AI & Automation",
    description: "Intelligent automation solutions powered by artificial intelligence and machine learning.",
    features: [
      "Machine Learning",
      "Process Automation",
      "Predictive Analytics",
      "Natural Language Processing",
      "Computer Vision",
      "Robotic Process Automation"
    ],
    deliveryRate: "10-20 weeks"
  },
  {
    id: "cloud-security",
    icon: ShieldCheck,
    title: "Cloud & Security",
    description: "Secure cloud infrastructure and comprehensive cybersecurity solutions for your business.",
    features: [
      "Cloud Migration",
      "Security Audits",
      "Compliance Management",
      "24/7 Monitoring",
      "Data Protection",
      "Incident Response"
    ],
    deliveryRate: "8-16 weeks"
  }
]

const processSteps = [
  {
    step: 1,
    title: "Discovery & Planning",
    description: "We analyze your requirements, understand your business goals, and create a comprehensive project plan.",
    icon: Target
  },
  {
    step: 2,
    title: "Design & Prototyping",
    description: "Our designers create wireframes, mockups, and interactive prototypes for your approval.",
    icon: Palette
  },
  {
    step: 3,
    title: "Development & Testing",
    description: "We build your solution using best practices, with continuous testing and quality assurance.",
    icon: Zap
  },
  {
    step: 4,
    title: "Deployment & Launch",
    description: "We deploy your solution, provide training, and ensure everything runs smoothly.",
    icon: TrendingUp
  }
]

export default function ServicesPage() {
  const router = useRouter()

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Comprehensive IT solutions designed to transform your business and drive digital innovation. 
              From custom software development to AI integration, we've got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 p-8 rounded-xl cursor-pointer hover:bg-gray-700 transition-colors"
                onClick={() => router.push(`/services/${service.id}`)}
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <service.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold text-white text-center mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-center mb-6">
                  {service.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">Key Features:</h4>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gray-900 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-300">Delivery Time:</span>
                    <span className="text-lg font-semibold text-white">{service.deliveryRate}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We follow a proven methodology that ensures successful project delivery 
              and exceeds your expectations every time.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-gray-900 p-8 rounded-xl">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                    <step.icon className="w-10 h-10 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {step.step}. {step.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your project requirements and create a custom solution 
              that perfectly fits your business needs.
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
          </motion.div>
        </div>
      </section>
    </main>
  )
}