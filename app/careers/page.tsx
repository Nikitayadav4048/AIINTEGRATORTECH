"use client"

import { motion } from "framer-motion"
import { 
  Users, 
  Heart, 
  Zap, 
  Award, 
  Globe, 
  Clock,
  ArrowRight,
  MapPin,
  Briefcase,
  GraduationCap
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Card3D, Button3D } from "@/components/ui/card-3d"
import { Scroll3D } from "@/components/ui/scroll-3d"

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance, dental, vision, and mental health support"
  },
  {
    icon: Zap,
    title: "Flexible Work",
    description: "Remote work options, flexible hours, and work-life balance"
  },
  {
    icon: Award,
    title: "Professional Growth",
    description: "Continuous learning, certifications, and career development programs"
  },
  {
    icon: Globe,
    title: "Global Team",
    description: "Work with talented professionals from around the world"
  },
  {
    icon: Clock,
    title: "Generous PTO",
    description: "25+ days of paid time off plus holidays and sick days"
  },
  {
    icon: Users,
    title: "Team Events",
    description: "Regular team building activities and company celebrations"
  }
]

const openPositions = [
  {
    id: 1,
    title: "Senior Full-Stack Developer",
    department: "Engineering",
    location: "San Francisco, CA (Remote)",
    type: "Full-time",
    experience: "5+ years",
    description: "We're looking for an experienced Full-Stack Developer to join our engineering team and help build scalable web applications.",
    requirements: [
      "Strong experience with React, Node.js, and TypeScript",
      "Experience with cloud platforms (AWS, Azure, or GCP)",
      "Knowledge of database design and optimization",
      "Experience with CI/CD pipelines and DevOps practices"
    ]
  },
  {
    id: 2,
    title: "UI/UX Designer",
    department: "Design",
    location: "London, UK (Hybrid)",
    type: "Full-time",
    experience: "3+ years",
    description: "Join our design team to create beautiful, user-centered digital experiences that delight our clients and users.",
    requirements: [
      "Proficiency in Figma, Sketch, or Adobe Creative Suite",
      "Experience with user research and usability testing",
      "Strong understanding of design systems and accessibility",
      "Portfolio showcasing web and mobile design work"
    ]
  },
  {
    id: 3,
    title: "DevOps Engineer",
    department: "Operations",
    location: "Bangalore, India (On-site)",
    type: "Full-time",
    experience: "4+ years",
    description: "Help us build and maintain robust, scalable infrastructure that supports our growing client base.",
    requirements: [
      "Experience with AWS, Docker, and Kubernetes",
      "Knowledge of infrastructure as code (Terraform, CloudFormation)",
      "Experience with monitoring and logging tools",
      "Strong scripting skills (Python, Bash, or PowerShell)"
    ]
  },
  {
    id: 4,
    title: "AI/ML Engineer",
    department: "Research & Development",
    location: "San Francisco, CA (Remote)",
    type: "Full-time",
    experience: "3+ years",
    description: "Work on cutting-edge AI solutions that help our clients automate processes and gain valuable insights.",
    requirements: [
      "Strong background in machine learning and statistics",
      "Experience with Python, TensorFlow, or PyTorch",
      "Knowledge of data preprocessing and feature engineering",
      "Experience with cloud ML platforms (AWS SageMaker, Azure ML)"
    ]
  }
]

const values = [
  {
    title: "Innovation First",
    description: "We constantly push boundaries and explore new technologies to deliver cutting-edge solutions."
  },
  {
    title: "Client Success",
    description: "Our success is measured by our clients' success. We're committed to delivering exceptional value."
  },
  {
    title: "Continuous Learning",
    description: "We foster a culture of continuous learning and professional development for all team members."
  },
  {
    title: "Collaboration",
    description: "Great things happen when we work together. We value teamwork and open communication."
  }
]

export default function CareersPage() {
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
              Join Our{" "}
              <span className="heading-gradient">Team</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Be part of a team that's transforming businesses through innovative technology. 
              We're looking for passionate professionals who want to make a real impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our Culture & Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We believe in creating an environment where innovation thrives, collaboration flourishes, 
                and every team member can reach their full potential.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-brand-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Users className="w-8 h-8 text-brand-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Why Work With Us?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer competitive benefits and a supportive environment that helps you grow both personally and professionally.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Scroll3D key={benefit.title} intensity={0.3}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card3D className="h-full glow-3d">
                      <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-4 glow-3d">
                        <benefit.icon className="w-6 h-6 text-brand-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </Card3D>
                  </motion.div>
                </Scroll3D>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Open Positions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ready to join our team? Check out our current openings and find the perfect role for you.
              </p>
            </motion.div>

            <div className="space-y-6">
              {openPositions.map((position, index) => (
                <motion.div
                  key={position.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div>
                          <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                            {position.title}
                          </CardTitle>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                            <div className="flex items-center space-x-1">
                              <Briefcase className="w-4 h-4" />
                              <span>{position.department}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4" />
                              <span>{position.location}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{position.type}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <GraduationCap className="w-4 h-4" />
                              <span>{position.experience}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-brand-600 text-sm font-medium hover:underline cursor-pointer">
                          Apply Now
                          <ArrowRight className="inline w-4 h-4 ml-2" />
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{position.description}</p>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                        <ul className="space-y-1">
                          {position.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 bg-brand-600 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-brand-600 via-brand-700 to-brand-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Don't See the Right Role?
              </h2>
              <p className="text-xl text-brand-100 mb-8 leading-relaxed">
                We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  )
}
