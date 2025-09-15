"use client"

import { motion } from "framer-motion"
import { Zap, Users, Shield, BarChart3, Workflow, Smartphone, Globe, Lock, Clock, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Card3D, Button3D } from "@/components/ui/card-3d"
import { Scroll3D } from "@/components/ui/scroll-3d"

const features = [
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Real-time collaboration tools that keep your team connected and productive.",
    details: [
      "Live editing and commenting",
      "Real-time notifications",
      "Team chat and discussions",
      "Role-based permissions",
      "Activity tracking and history"
    ],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop"
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Automate repetitive tasks and streamline your team's processes.",
    details: [
      "Custom workflow templates",
      "Automated task assignments",
      "Conditional logic and triggers",
      "Integration with external tools",
      "Performance analytics"
    ],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop"
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Get deep insights into your team's performance and productivity.",
    details: [
      "Real-time dashboards",
      "Custom reports and metrics",
      "Team performance tracking",
      "Project progress monitoring",
      "Data visualization tools"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security and compliance for your sensitive data.",
    details: [
      "End-to-end encryption",
      "SOC 2 Type II compliance",
      "Two-factor authentication",
      "Advanced audit logging",
      "Data backup and recovery"
    ],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop"
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Work seamlessly across all devices with our responsive platform.",
    details: [
      "Native mobile apps",
      "Offline functionality",
      "Push notifications",
      "Touch-optimized interface",
      "Cross-device sync"
    ],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=400&fit=crop"
  },
  {
    icon: Globe,
    title: "Global Accessibility",
    description: "Access your work from anywhere in the world with cloud-based infrastructure.",
    details: [
      "Cloud-based platform",
      "Global CDN",
      "Multi-language support",
      "Timezone handling",
      "Offline capabilities"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
  }
]

const integrations = [
  { name: "Slack", logo: "💬", description: "Seamless team communication" },
  { name: "GitHub", logo: "🐙", description: "Developer workflow integration" },
  { name: "Jira", logo: "🔄", description: "Project management sync" },
  { name: "Notion", logo: "📝", description: "Document collaboration" },
  { name: "Figma", logo: "🎨", description: "Design team integration" },
  { name: "Zoom", logo: "📹", description: "Video meeting integration" }
]

export default function FeaturesPage() {
  return (
    <div>
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-brand-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Powerful Features for{" "}
              <span className="heading-gradient">Modern Teams</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Discover how our platform transforms team collaboration with cutting-edge features 
              designed to boost productivity and streamline workflows.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Everything You Need to Succeed
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Our comprehensive feature set covers every aspect of modern team collaboration, 
                from real-time communication to advanced analytics and security.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {features.map((feature, index) => (
                <Scroll3D key={feature.title} intensity={0.3}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <Card3D className="h-full glow-3d overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <div className="w-12 h-12 bg-brand-600 rounded-lg flex items-center justify-center glow-3d">
                          <feature.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 text-3d">
                        {feature.title}
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed mb-6">
                        {feature.description}
                      </p>
                      
                      <ul className="space-y-3">
                        {feature.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card3D>
                </motion.div>
              </Scroll3D>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Integrate with Your Favorite Tools
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Connect seamlessly with the tools your team already uses. 
                No more switching between applications or losing context.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {integrations.map((integration, index) => (
                <motion.div
                  key={integration.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                    <div className="text-4xl mb-3">{integration.logo}</div>
                    <h3 className="font-semibold text-gray-900 mb-2">{integration.name}</h3>
                    <p className="text-sm text-gray-600">{integration.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <div className="text-gray-600 text-sm font-medium hover:underline cursor-pointer">
                View All Integrations
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Performance Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Built for Performance
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our platform is engineered for speed and reliability, ensuring your team 
                  never experiences downtime or performance issues.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">99.9% Uptime</h3>
                      <p className="text-gray-600">Enterprise-grade reliability</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Zap className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Lightning Fast</h3>
                      <p className="text-gray-600">Sub-second response times</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Lock className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Bank-Level Security</h3>
                      <p className="text-gray-600">Enterprise security standards</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-brand-500 to-brand-700 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">Performance Metrics</h3>
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <span>Page Load Time</span>
                      <span className="text-2xl font-bold">0.8s</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-white h-2 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span>API Response</span>
                      <span className="text-2xl font-bold">120ms</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-white h-2 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span>Uptime</span>
                      <span className="text-2xl font-bold">99.9%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-white h-2 rounded-full" style={{ width: '99.9%' }}></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brand-600 via-brand-700 to-brand-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl text-brand-100 mb-8 leading-relaxed">
              Join thousands of teams who have already transformed their workflow. 
              Start your free trial today and see the difference our platform can make.
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
