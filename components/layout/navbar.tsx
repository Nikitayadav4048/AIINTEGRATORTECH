"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown, Sun, Moon, ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { useTheme } from "@/contexts/theme-context"
import { useRouter } from "next/navigation"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  const handleContactUs = () => {
    // Redirect to contact page
    router.push('/contact')
  }

  const handleGetQuote = () => {
    router.push('/contact')
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-green-900/95 backdrop-blur-md shadow-2xl border-b border-green-700/50"
          : "bg-black/80 backdrop-blur-sm"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div 
              className="w-16 h-16 lg:w-20 lg:h-20 relative"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/Integratorz.jpg"
                alt="AI INTEGRATOR TECH Logo"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-xl lg:text-2xl font-bold text-theme-primary group-hover:text-primary-600 transition-colors duration-300">
                AI INTEGRATOR TECH
              </span>
              <span className="text-xs lg:text-sm text-theme-secondary font-medium">
                Intelligence. Integration. Impact.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "transition-all duration-200 font-semibold relative group",
                  isActive(item.href)
                    ? "text-primary-600"
                    : "text-theme-secondary hover:text-primary-600"
                )}
              >
                {item.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full",
                  isActive(item.href) ? "w-full" : ""
                )} />
              </Link>
            ))}
          </div>

          {/* CTA Buttons & Theme Toggle */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="p-2 text-theme-secondary hover:text-primary-600 hover:bg-theme-secondary transition-all duration-300"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm" 
              className="font-semibold text-theme-secondary hover:text-primary-600 hover:bg-theme-secondary transition-all duration-300"
              onClick={handleContactUs}
            >
              Contact Us
            </Button>
            <Button 
              variant="neon" 
              size="sm" 
              className="font-semibold neon-glow"
              onClick={handleGetQuote}
            >
              Get Quote
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-theme-secondary hover:text-primary-600 hover:bg-theme-secondary transition-all duration-200"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-green-900/95 backdrop-blur-md border-t border-green-700/50"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "block w-full text-left px-4 py-3 rounded-md transition-all duration-200 font-semibold",
                    isActive(item.href)
                      ? "text-primary-600 bg-theme-secondary"
                      : "text-theme-secondary hover:text-primary-600 hover:bg-theme-secondary"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Theme Toggle */}
              <div className="pt-4 border-t border-theme">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleTheme}
                  className="w-full justify-start text-theme-secondary hover:text-primary-600 hover:bg-theme-secondary"
                >
                  {theme === "dark" ? (
                    <>
                      <Sun className="w-5 h-5 mr-3" />
                      Light Mode
                    </>
                  ) : (
                    <>
                      <Moon className="w-5 h-5 mr-3" />
                      Dark Mode
                    </>
                  )}
                </Button>
              </div>
              
              <div className="pt-4 space-y-2">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-full font-semibold text-theme-secondary hover:text-primary-600 hover:bg-theme-secondary"
                  onClick={() => {
                    handleContactUs()
                    setIsOpen(false)
                  }}
                >
                  Contact Us
                </Button>
                <Button 
                  variant="neon" 
                  size="sm" 
                  className="w-full font-semibold neon-glow"
                  onClick={() => {
                    handleGetQuote()
                    setIsOpen(false)
                  }}
                >
                  Get Quote
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
