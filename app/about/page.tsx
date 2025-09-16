"use client"

import { motion } from "framer-motion"
import { 
  Users, 
  Award, 
  Globe, 
  Target, 
  CheckCircle, 
  TrendingUp,
  Shield,
  Zap,
  Heart,
  Lightbulb
} from "lucide-react"
import { useRouter } from "next/navigation"

const values = [
  {
    icon: Shield,
    title: "Excellence",
    description: "We strive for excellence in every project, delivering solutions that exceed expectations."
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Constantly pushing boundaries with cutting-edge technologies and creative solutions."
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "Building trust through transparent communication and ethical practices."
  },
  {
    icon: Lightbulb,
    title: "Collaboration",
    description: "Fostering strong partnerships with clients to achieve exceptional outcomes."
  }
]

const achievements = [
  { number: "50+", label: "Happy Clients", icon: Users },
  { number: "100+", label: "Projects Delivered", icon: CheckCircle },
  { number: "5+", label: "Years Experience", icon: Award },
  { number: "24/7", label: "Support Available", icon: Globe }
]

export default function AboutPage() {
  const router = useRouter()

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold text-white mb-6">
              About AI INTEGRATOR TECH
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              We are a forward-thinking IT company dedicated to transforming businesses through innovative technology solutions. 
              Our mission is to empower organizations with cutting-edge digital tools that drive growth and efficiency.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Driving Digital Transformation Since 2019
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Founded with a vision to bridge the gap between complex technology and business needs, 
                AI INTEGRATOR TECH has grown into a trusted partner for organizations seeking digital excellence.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                We specialize in custom software development, enterprise solutions, and digital innovation, 
                helping businesses across various industries achieve their digital transformation goals.
              </p>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300 font-medium">ISO 27001 Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300 font-medium">Microsoft Partner</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-zinc-800 rounded-2xl p-8 hover:bg-zinc-700 hover:scale-105 transition-all duration-300 cursor-pointer border border-zinc-700/50 shadow-2xl">
                <h3 className="text-2xl font-semibold text-white mb-6">Our Expertise</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span className="text-gray-300 font-medium">Custom Software Development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span className="text-gray-300 font-medium">Cloud & DevOps Solutions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span className="text-gray-300 font-medium">AI & Machine Learning</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span className="text-gray-300 font-medium">Enterprise Applications</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <span className="text-gray-300 font-medium">Digital Transformation</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-zinc-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Mission & Vision
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're committed to empowering businesses with innovative technology solutions that drive growth, 
              efficiency, and competitive advantage in the digital age.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-zinc-900 rounded-2xl p-8 hover:bg-zinc-800 hover:scale-105 transition-all duration-300 cursor-pointer border border-zinc-700/30 shadow-xl"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To deliver innovative, scalable, and secure technology solutions that empower businesses to thrive 
                in the digital economy. We strive to be the trusted technology partner that transforms ideas into 
                powerful digital realities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-zinc-900 rounded-2xl p-8 hover:bg-zinc-800 hover:scale-105 transition-all duration-300 cursor-pointer border border-zinc-700/30 shadow-xl"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                To be the leading technology partner for businesses worldwide, recognized for our innovation, 
                reliability, and commitment to client success. We envision a future where technology seamlessly 
                enables business growth and human potential.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These fundamental principles guide everything we do, from how we work with clients to how we develop our team.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 p-8 rounded-xl text-center hover:bg-gray-700 hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
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
              Our Achievements
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Numbers that tell the story of our growth, success, and commitment to excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-gray-900 rounded-2xl p-8 hover:bg-gray-800 hover:scale-105 transition-all duration-300 cursor-pointer">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <achievement.icon className="w-8 h-8 text-black" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{achievement.number}</div>
                  <div className="text-gray-300 font-medium">{achievement.label}</div>
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
              Ready to Work Together?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our expertise can help transform your business and drive digital innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => router.push('/contact')}
                className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Get Started
              </button>
              <button 
                onClick={() => router.push('/portfolio')}
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 hover:border-gray-300 hover:shadow-lg transition-all duration-300 backdrop-blur-sm"
              >
                View Portfolio
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}