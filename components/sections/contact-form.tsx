"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, AlertCircle, Send, Loader2 } from "lucide-react"
import { toast } from "@/hooks/use-toast"

interface FormData {
  firstName: string
  lastName: string
  companyName: string
  email: string
  phone: string
  serviceInterest: string
  projectDetails: string
  agreeToTerms: boolean
}

interface FormErrors {
  [key: string]: string
}

const services = [
  "Custom Software Development",
  "Web Development",
  "Mobile App Development",
  "Cloud Solutions",
  "AI & Machine Learning",
  "ERP/CRM Systems",
  "Digital Transformation",
  "IT Consulting"
]

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    phone: "",
    serviceInterest: "",
    projectDetails: "",
    agreeToTerms: false
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required"
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.projectDetails.trim()) {
      newErrors.projectDetails = "Project details are required"
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the terms and conditions"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Show success message
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
        variant: "default",
      })
      
      setIsSubmitted(true)
      setFormData({
        firstName: "",
        lastName: "",
        companyName: "",
        email: "",
        phone: "",
        serviceInterest: "",
        projectDetails: "",
        agreeToTerms: false
      })
      
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
          Thank you for your message!
        </h3>
        <p className="text-gray-600 mb-8">
          We've received your inquiry and will get back to you within 24 hours.
        </p>
        <Button 
          variant="neon" 
          onClick={() => setIsSubmitted(false)}
          className="neon-glow text-black"
        >
          Send Another Message
        </Button>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-700"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
          Send Us a Message
        </h2>
        <p className="text-gray-600 font-medium">
          Fill out the form below and our team will get back to you within 24 hours.
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              First Name *
            </label>
            <Input
              type="text"
              placeholder="John"
              value={formData.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
              className={`w-full font-medium transition-all duration-300 ${
                errors.firstName ? "border-red-500 error-state" : "form-input-enhanced"
              }`}
              required
            />
            {errors.firstName && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-sm mt-1 flex items-center"
              >
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.firstName}
              </motion.p>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Last Name *
            </label>
            <Input
              type="text"
              placeholder="Doe"
              value={formData.lastName}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
              className={`w-full font-medium transition-all duration-300 ${
                errors.lastName ? "border-red-500 error-state" : "form-input-enhanced"
              }`}
              required
            />
            {errors.lastName && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-sm mt-1 flex items-center"
              >
                <AlertCircle className="w-4 h-4 mr-1" />
                {errors.lastName}
              </motion.p>
            )}
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Company Name
          </label>
          <Input
            type="text"
            placeholder="Your Company"
            value={formData.companyName}
            onChange={(e) => handleInputChange("companyName", e.target.value)}
            className="w-full font-medium form-input-enhanced"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <Input
            type="email"
            placeholder="john@company.com"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            className={`w-full font-medium transition-all duration-300 ${
              errors.email ? "border-red-500 error-state" : "form-input-enhanced"
            }`}
            required
          />
          {errors.email && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-sm mt-1 flex items-center"
            >
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.email}
            </motion.p>
          )}
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <Input
            type="tel"
            placeholder="+1 (555) 123-4567"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            className="w-full font-medium form-input-enhanced"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Service Interest
          </label>
          <select 
            value={formData.serviceInterest}
            onChange={(e) => handleInputChange("serviceInterest", e.target.value)}
            className="w-full px-3 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent font-medium form-input-enhanced"
          >
            <option value="">Select a service</option>
            {services.map((service, index) => (
              <option key={index} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Project Details *
          </label>
          <Textarea
            placeholder="Tell us about your project, requirements, and goals..."
            value={formData.projectDetails}
            onChange={(e) => handleInputChange("projectDetails", e.target.value)}
            className={`w-full min-h-[120px] font-medium transition-all duration-300 ${
              errors.projectDetails ? "border-red-500 error-state" : "form-input-enhanced"
            }`}
            required
          />
          {errors.projectDetails && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-sm mt-1 flex items-center"
            >
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.projectDetails}
            </motion.p>
          )}
        </div>
        
        <div>
          <label className="flex items-start space-x-3">
            <input
              type="checkbox"
              checked={formData.agreeToTerms}
              onChange={(e) => handleInputChange("agreeToTerms", e.target.checked)}
              className="rounded border-gray-300 text-primary-600 focus:ring-primary-500 mt-1"
              required
            />
            <span className="text-sm text-gray-600 font-medium">
              I agree to the{" "}
              <a href="/privacy" className="text-primary-600 hover:underline font-semibold">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="/terms" className="text-primary-600 hover:underline font-semibold">
                Terms of Service
              </a>
            </span>
          </label>
          {errors.agreeToTerms && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-sm mt-1 flex items-center"
            >
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.agreeToTerms}
            </motion.p>
          )}
        </div>
        
        {/* Submit Button - UPDATED VERSION 2024 */}
        <div className="mt-8">
          <button 
            type="submit" 
            disabled={isSubmitting}
            style={{
              width: '100%',
              height: '56px',
              background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
              color: '#ffffff',
              border: 'none',
              borderRadius: '12px',
              fontWeight: '700',
              fontSize: '18px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              opacity: isSubmitting ? 0.7 : 1,
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
              transform: isSubmitting ? 'scale(0.98)' : 'scale(1)'
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
              if (!isSubmitting) {
                e.currentTarget.style.transform = 'scale(1.02)'
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.6)'
              }
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
              if (!isSubmitting) {
                e.currentTarget.style.transform = 'scale(1)'
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)'
              }
            }}
          >
            {isSubmitting ? (
              <>
                <Loader2 size={22} style={{ color: '#ffffff' }} className="animate-spin" />
                <span style={{ color: '#ffffff', fontWeight: '700' }}>Sending Message...</span>
              </>
            ) : (
              <>
                <Send size={22} style={{ color: '#ffffff' }} />
                <span style={{ color: '#ffffff', fontWeight: '700' }}>Send Message</span>
              </>
            )}
          </button>
        </div>

      </form>
    </motion.div>
  )
}
