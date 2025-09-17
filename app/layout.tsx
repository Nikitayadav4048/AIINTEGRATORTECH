import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/contexts/theme-context"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://aiintegratorz.com'),
  title: "AI INTEGRATORZ - WE DESIGN WE DEVELOP WE DEPLOY",
  description: "Your trusted partner for comprehensive IT solutions and product development. We build custom software, web applications, and enterprise solutions that drive business growth.",
  keywords: ["IT services", "software development", "web development", "ERP solutions", "CRM solutions", "AI integration", "cloud solutions", "product development"],
  authors: [{ name: "AI INTEGRATORZ Team" }],
  creator: "AI INTEGRATORZ",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aiintegratorz.com",
    title: "AI INTEGRATORZ - WE DESIGN WE DEVELOP WE DEPLOY",
    description: "Your trusted partner for comprehensive IT solutions and product development.",
    siteName: "AI INTEGRATORZ",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI INTEGRATORZ - WE DESIGN WE DEVELOP WE DEPLOY",
    description: "Your trusted partner for comprehensive IT solutions and product development.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${inter.className} dark bg-3d-animated`} style={{ backgroundColor: '#000000', color: '#ffffff' }}>
        <ThemeProvider>
          {/* 3D Floating Particles */}
          <div className="particles-3d">
            <div className="particle-3d"></div>
            <div className="particle-3d"></div>
            <div className="particle-3d"></div>
            <div className="particle-3d"></div>
            <div className="particle-3d"></div>
            <div className="particle-3d"></div>
            <div className="particle-3d"></div>
            <div className="particle-3d"></div>
            <div className="particle-3d"></div>
          </div>
          <Header />
          <main className="min-h-screen scroll-3d-container">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
