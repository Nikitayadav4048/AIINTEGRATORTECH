import { Hero } from "@/components/sections/hero"
import { Features } from "@/components/sections/features"
import { Testimonials } from "@/components/sections/testimonials"
import { FAQ } from "@/components/sections/faq"
import { CTA } from "@/components/sections/cta"

export default function HomePage() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Hero />
      <Features />
      <Testimonials />
      <FAQ />
      <CTA />
    </div>
  )
}