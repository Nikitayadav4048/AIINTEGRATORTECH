import { Hero } from "@/components/sections/hero"
import { ClientLogos } from "@/components/sections/client-logos"
import { Projects } from "@/components/sections/projects"
import { Features } from "@/components/sections/features"
import { Testimonials } from "@/components/sections/testimonials"
import { CTA } from "@/components/sections/cta"

export default function HomePage() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Hero />
      <ClientLogos />
      <Projects />
      <Features />
      <Testimonials />
      <CTA />
    </div>
  )
}