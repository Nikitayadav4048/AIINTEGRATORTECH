"use client"
// Fixed TypeScript errors for production build
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, Clock, MessageSquare, Calendar, Linkedin, Twitter, Github } from "lucide-react"
import { useState } from "react"

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us an email anytime",
    contact: "info@aiintegratorz.com",
    action: "mailto:info@aiintegratorz.com"
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Mon-Fri from 8am to 5pm",
    contact: "+1 (555) 123-4567",
    action: "tel:+15551234567"
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Chat with our team",
    contact: "Start conversation",
    action: "#"
  },
  {
    icon: Calendar,
    title: "Schedule Meeting",
    description: "Book a consultation",
    contact: "Book now",
    action: "#"
  }
]

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" }
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  })
  const [showPopup, setShowPopup] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowPopup(true)
    setFormData({ name: '', email: '', company: '', phone: '', service: '', message: '' })
    setTimeout(() => setShowPopup(false), 3000)
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-black via-green-900 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-green-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-700/15 rounded-full blur-3xl animate-pulse"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/30">
              <Mail className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your business with cutting-edge technology? 
              Let's discuss your project and bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            How Can We Help?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.action}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 p-6 rounded-xl text-center hover:bg-green-800 transition-all duration-300 group transform hover:scale-105 shadow-lg"
              >
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <method.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3">
                  {method.description}
                </p>
                <p className="text-white font-medium">
                  {method.contact}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">Let's Start a Conversation</h2>
              <p className="text-gray-300 mb-8">
                We're here to help you succeed. Whether you need a consultation, 
                have questions about our services, or want to discuss a project, 
                we'd love to hear from you.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-gray-300">info@aiintegratorz.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Business Hours</p>
                    <p className="text-gray-300">Mon-Fri: 8AM - 6PM EST</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Location</p>
                    <p className="text-gray-300">Global Remote Team</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-white font-medium mb-4">Follow Us</p>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-700 hover:scale-110 transition-all duration-300"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="bg-gray-900 p-8 rounded-xl shadow-xl border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-white font-medium mb-2">Name *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-white focus:outline-none transition-colors"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-white focus:outline-none transition-colors"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-white font-medium mb-2">Company</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-white focus:outline-none transition-colors"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-white focus:outline-none transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-white font-medium mb-2">Service Interest</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-white focus:outline-none transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-development">Mobile Development</option>
                    <option value="ai-solutions">AI Solutions</option>
                    <option value="cloud-services">Cloud Services</option>
                    <option value="consulting">IT Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label className="block text-white font-medium mb-2">Message *</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={5}
                    className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-white focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project..."
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  style={{
                    width: '100%',
                    padding: '16px 32px',
                    background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)',
                    color: '#ffffff',
                    fontWeight: 'bold',
                    borderRadius: '12px',
                    border: 'none',
                    outline: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 8px 25px rgba(22, 163, 74, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    const target = e.target as HTMLButtonElement
                    target.style.transform = 'scale(1.05)'
                    target.style.background = 'linear-gradient(135deg, #15803d 0%, #166534 100%)'
                    target.style.boxShadow = '0 12px 35px rgba(22, 163, 74, 0.4)'
                  }}
                  onMouseLeave={(e) => {
                    const target = e.target as HTMLButtonElement
                    target.style.transform = 'scale(1)'
                    target.style.background = 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)'
                    target.style.boxShadow = '0 8px 25px rgba(22, 163, 74, 0.3)'
                  }}
                >
                  <Send className="w-5 h-5" style={{ color: '#ffffff' }} />
                  <span style={{ color: '#ffffff', fontWeight: 'bold' }}>Send Message</span>
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Custom Success Popup */}
      {showPopup && (
        <div 
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: '9999'
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            style={{
              backgroundColor: '#1f2937',
              padding: '48px',
              borderRadius: '20px',
              textAlign: 'center',
              maxWidth: '450px',
              margin: '20px',
              boxShadow: '0 25px 80px rgba(0, 0, 0, 0.6)',
              border: '1px solid #374151'
            }}
          >
            <div 
              style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px',
                boxShadow: '0 8px 25px rgba(16, 185, 129, 0.3)'
              }}
            >
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="3">
                <polyline points="20,6 9,17 4,12"></polyline>
              </svg>
            </div>
            <h3 style={{ color: '#ffffff', fontSize: '28px', fontWeight: 'bold', marginBottom: '16px' }}>
              Message Sent Successfully!
            </h3>
            <p style={{ color: '#d1d5db', fontSize: '18px', lineHeight: '1.6', marginBottom: '32px' }}>
              Thank you for your message! We will get back to you within 24 hours.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              style={{
                padding: '14px 32px',
                backgroundColor: '#ffffff',
                color: '#000000',
                border: 'none',
                borderRadius: '12px',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(255, 255, 255, 0.2)'
              }}
              onMouseEnter={(e) => {
                const target = e.target as HTMLButtonElement
                target.style.backgroundColor = '#f3f4f6'
                target.style.transform = 'scale(1.05)'
              }}
              onMouseLeave={(e) => {
                const target = e.target as HTMLButtonElement
                target.style.backgroundColor = '#ffffff'
                target.style.transform = 'scale(1)'
              }}
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </main>
  )
}