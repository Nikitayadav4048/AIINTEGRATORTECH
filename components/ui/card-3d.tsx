"use client"

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'

interface Card3DProps {
  children: React.ReactNode
  className?: string
  flipContent?: {
    front: React.ReactNode
    back: React.ReactNode
  }
  intensity?: number
}

export function Card3D({ 
  children, 
  className = '', 
  flipContent,
  intensity = 1 
}: Card3DProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    const rotateX = (y - centerY) / centerY * -15 * intensity
    const rotateY = (x - centerX) / centerX * 15 * intensity

    setMousePosition({ x: rotateY, y: rotateX })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setMousePosition({ x: 0, y: 0 })
  }

  if (flipContent) {
    return (
      <div
        ref={cardRef}
        className={`card-3d-flip ${className}`}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="card-3d-flip-inner">
          <div className="card-3d-flip-front card-professional card-professional-padding">
            {flipContent.front}
          </div>
          <div className="card-3d-flip-back card-professional card-professional-padding">
            {flipContent.back}
          </div>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      ref={cardRef}
      className={`card-3d card-professional ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: isHovered ? mousePosition.y : 0,
        rotateY: isHovered ? mousePosition.x : 0,
        scale: isHovered ? 1.05 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30
      }}
      style={{
        transformStyle: 'preserve-3d'
      }}
    >
      <div className="card-3d-inner card-professional-padding">
        {children}
      </div>
    </motion.div>
  )
}

interface Button3DProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
}

export function Button3D({ 
  children, 
  onClick, 
  className = '', 
  variant = 'primary',
  size = 'md',
  disabled = false
}: Button3DProps) {
  const [isPressed, setIsPressed] = useState(false)

  const baseClasses = "btn-3d font-semibold rounded-lg transition-all duration-300 transform-gpu"
  
  const variantClasses = {
    primary: "bg-primary-600 hover:bg-primary-700 text-white shadow-lg",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-900 shadow-md",
    outline: "border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white"
  }
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  }

  return (
    <motion.button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        rotateX: isPressed ? -5 : 0,
        rotateY: isPressed ? 5 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25
      }}
    >
      {children}
    </motion.button>
  )
}
