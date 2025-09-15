"use client"

import { useEffect, useRef, useState } from 'react'

interface Scroll3DProps {
  children: React.ReactNode
  className?: string
  intensity?: number
}

export function Scroll3D({ children, className = '', intensity = 0.5 }: Scroll3DProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return

      const rect = elementRef.current.getBoundingClientRect()
      const scrolled = window.pageYOffset
      const rate = scrolled * -0.5
      const yPos = scrolled * intensity

      // Create 3D scroll effect
      const rotateX = (rect.top - window.innerHeight / 2) * 0.1
      const rotateY = (rect.left - window.innerWidth / 2) * 0.1

      setTransform(`
        translateY(${yPos}px) 
        rotateX(${rotateX}deg) 
        rotateY(${rotateY}deg)
        translateZ(${rate}px)
      `)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call

    return () => window.removeEventListener('scroll', handleScroll)
  }, [intensity])

  return (
    <div
      ref={elementRef}
      className={`scroll-3d-element ${className}`}
      style={{
        transform,
        transformStyle: 'preserve-3d'
      }}
    >
      {children}
    </div>
  )
}

interface Parallax3DProps {
  children: React.ReactNode
  className?: string
  speed?: number
  direction?: 'up' | 'down'
}

export function Parallax3D({ 
  children, 
  className = '', 
  speed = 0.5, 
  direction = 'up' 
}: Parallax3DProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return

      const scrolled = window.pageYOffset
      const rate = scrolled * speed
      const yPos = direction === 'up' ? rate * -1 : rate

      setTransform(`translateY(${yPos}px)`)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed, direction])

  return (
    <div
      ref={elementRef}
      className={`parallax-3d ${className}`}
      style={{ transform }}
    >
      {children}
    </div>
  )
}
