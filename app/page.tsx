import { Hero } from "@/components/sections/hero"
import { Features } from "@/components/sections/features"
import { Testimonials } from "@/components/sections/testimonials"
import { FAQ } from "@/components/sections/faq"
import { CTA } from "@/components/sections/cta"

export default function HomePage() {
  return (
    <div className="bg-zinc-950 min-h-screen text-white">
      <Hero />
      <Features />
      <Testimonials />
      <div className="hidden md:block">
        <FAQ />
      </div>
      <div className="block md:hidden">
        <CTA />
      </div>
      <div className="hidden md:block">
        <CTA />
      </div>
    </div>
  )
}