"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRouter } from "next/navigation"
import { Check, Star, ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { formatPrice } from "@/lib/utils"

const plans = [
  {
    id: "starter",
    name: "Starter",
    description: "Perfect for individuals and small teams",
    monthlyPrice: 29,
    yearlyPrice: 290,
    features: [
      "Up to 5 projects",
      "Basic analytics",
      "24/7 support",
      "API access",
      "Custom integrations"
    ],
    popular: false,
    cta: "Get Started",
    link: "/pricing/starter"
  },
  {
    id: "pro",
    name: "Pro",
    description: "Best for growing businesses and teams",
    monthlyPrice: 99,
    yearlyPrice: 990,
    features: [
      "Up to 25 projects",
      "Advanced analytics",
      "Priority support",
      "API access",
      "Custom integrations",
      "Team collaboration",
      "Advanced security"
    ],
    popular: true,
    cta: "Start Free Trial",
    link: "/pricing/pro"
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "For large organizations with custom needs",
    monthlyPrice: 299,
    yearlyPrice: 2990,
    features: [
      "Unlimited projects",
      "Enterprise analytics",
      "Dedicated support",
      "API access",
      "Custom integrations",
      "Team collaboration",
      "Advanced security",
      "SLA guarantee",
      "Custom onboarding"
    ],
    popular: false,
    cta: "Contact Sales",
    link: "/pricing/enterprise"
  }
]

const features = [
  "No setup fees",
  "Cancel anytime",
  "30-day money-back guarantee",
  "Free migration support"
]

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const router = useRouter()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  const handlePlanAction = (plan: typeof plans[0]) => {
    // Redirect all plans to contact page
    router.push('/contact')
  }

  const handleToggleChange = () => {
    setIsYearly(!isYearly)
  }

  return (
    <section id="pricing" className="section-padding bg-gray-900 relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-60 h-60 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent{" "}
            <span className="gradient-text-animated">Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Choose the plan that's right for your team. All plans include our core features 
            with no hidden fees or surprises.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm font-medium transition-colors duration-300 ${!isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={handleToggleChange}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
                isYearly ? 'bg-primary-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
                  isYearly ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium transition-colors duration-300 ${isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
              Yearly
              <span className="ml-1 text-xs text-primary-600 font-semibold">Save 20%</span>
            </span>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {plans.map((plan) => (
            <motion.div key={plan.id} variants={itemVariants}>
              <Card className={`h-full card-hover border-0 shadow-lg hover:shadow-xl transition-all duration-300 interactive-card ${
                plan.popular ? 'ring-2 ring-primary-500 relative scale-105' : ''
              }`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center neon-glow">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {plan.description}
                  </CardDescription>
                  
                  <div className="mt-6">
                    <div className="text-4xl font-bold text-gray-900">
                      {formatPrice(isYearly ? plan.yearlyPrice : plan.monthlyPrice)}
                    </div>
                    <div className="text-gray-500">
                      per {isYearly ? 'year' : 'month'}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="w-full mt-6 p-3 text-center text-sm font-medium text-gray-600">
                    {plan.cta}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            All plans include:
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-6 text-gray-600">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                className="flex items-center space-x-2"
              >
                <Check className="w-5 h-5 text-green-500" />
                <span className="font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-600 mb-6">
            Need a custom plan? Let's discuss your specific requirements.
          </p>
          <div className="text-center text-sm font-medium text-gray-600">
            <ExternalLink className="inline w-5 h-5 mr-2" />
            Discuss Custom Plan
          </div>
        </motion.div>
      </div>
    </section>
  )
}
