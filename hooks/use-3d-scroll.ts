"use client"

import { useEffect, useRef, useState } from 'react'

interface Use3DScrollOptions {
  intensity?: number
  perspective?: number
  enabled?: boolean
}

export function use3DScroll(options: Use3DScrollOptions = {}) {
  const { intensity = 0.5, perspective = 1000, enabled = true } = options
  const elementRef = useRef<HTMLElement>(null)
  const [transform, setTransform] = useState('')

  useEffect(() => {
    if (!enabled) return

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
        perspective(${perspective}px)
      `)
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!elementRef.current) return

      const rect = elementRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      
      const rotateX = (y - centerY) / centerY * -15 * intensity
      const rotateY = (x - centerX) / centerX * 15 * intensity

      setTransform(`
        translateY(0px) 
        rotateX(${rotateX}deg) 
        rotateY(${rotateY}deg)
        translateZ(20px)
        perspective(${perspective}px)
      `)
    }

    const handleMouseLeave = () => {
      setTransform('')
    }

    const element = elementRef.current
    if (element) {
      element.addEventListener('mousemove', handleMouseMove)
      element.addEventListener('mouseleave', handleMouseLeave)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (element) {
        element.removeEventListener('mousemove', handleMouseMove)
        element.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [intensity, perspective, enabled])

  return {
    ref: elementRef,
    style: {
      transform,
      transformStyle: 'preserve-3d' as const
    }
  }
}

export function useParallax(options: Use3DScrollOptions = {}) {
  const { intensity = 0.5, enabled = true } = options
  const elementRef = useRef<HTMLElement>(null)
  const [transform, setTransform] = useState('')

  useEffect(() => {
    if (!enabled) return

    const handleScroll = () => {
      if (!elementRef.current) return

      const scrolled = window.pageYOffset
      const rate = scrolled * intensity * -1

      setTransform(`translateY(${rate}px)`)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [intensity, enabled])

  return {
    ref: elementRef,
    style: {
      transform,
      willChange: 'transform'
    }
  }
}
