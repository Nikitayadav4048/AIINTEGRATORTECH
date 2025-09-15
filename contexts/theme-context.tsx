"use client"

import { createContext, useContext, useEffect } from "react"

type Theme = "dark"

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme: Theme = "dark"

  useEffect(() => {
    // Force dark mode immediately
    document.documentElement.classList.remove("light", "dark")
    document.documentElement.classList.add("dark")
    document.body.classList.add("dark")
    document.body.style.backgroundColor = "#000000"
    document.body.style.color = "#ffffff"
    localStorage.setItem("theme", "dark")
    
    // Also set on html element
    document.documentElement.style.backgroundColor = "#000000"
    document.documentElement.style.color = "#ffffff"
  }, [])

  const toggleTheme = () => {
    // No-op function since we only support dark mode
    console.log("Theme toggle disabled - dark mode only")
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
