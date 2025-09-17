"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const services = [
    { name: "Web Development", href: "/services/web-development" },
    { name: "App Development", href: "/services/app-development" },
    { name: "ERP Solutions", href: "/services/erp-solutions" },
    { name: "CRM Solutions", href: "/services/crm-solutions" },
    { name: "AI & Automation", href: "/services/ai-automation" },
    { name: "Cloud & Security", href: "/services/cloud-security" },
  ]

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ]

  const socialLinks = [
    { name: "GitHub", href: "#", icon: Github },
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "Twitter", href: "#", icon: Twitter },
  ]

  return (
    <footer className="bg-green-900 border-t border-green-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 relative overflow-hidden rounded-lg bg-white/10 p-1">
                <Image
                  src="/Integratorz.jpg"
                  alt="AI INTEGRATORZ Logo"
                  fill
                  className="object-contain rounded-md"
                />
              </div>
              <span className="text-white font-semibold text-lg">AI INTEGRATORZ</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted partner for comprehensive IT solutions and product development. 
              We build custom software that drives business growth.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <social.icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-gray-400" />
                <span className="text-gray-400 text-sm">info.aiintegratorz@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-gray-400" />
                <span className="text-gray-400 text-sm">+91 6264601696, +91 7049820057</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-start space-x-3">
                  <MapPin size={16} className="text-gray-400 mt-0.5" />
                  <div className="text-gray-400 text-sm">
                    <div>31/1 LIG Square Indore</div>
                    <div className="mt-1">Head Quarter: 16/18 Mortie Stand, Canberra 2601, Australia</div>
                    <div className="mt-1">3, Perdana 6/17, Pandan, 55300, Kuala Lumpur, Malaysia</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-green-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} AI INTEGRATORZ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}