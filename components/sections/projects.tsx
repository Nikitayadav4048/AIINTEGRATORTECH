"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRef } from "react"

const projects = [
  { name: "Assure Efforts", image: "/projects/Assure Efforts.svg" },
  { name: "Bernie Beast", image: "/projects/bernie-beast.webp" },
  { name: "Energicity", image: "/projects/Energicity.PNG" },
  { name: "Paper Bill", image: "/projects/feature PaperBill.png" },
  { name: "FTC Solar", image: "/projects/FTC Solar.PNG" },
  { name: "Miniflix", image: "/projects/Miniflix.PNG" },
  { name: "Oasis Property", image: "/projects/oasis Property.PNG" },
  { name: "Orderfic", image: "/projects/orderfic.webp" },
  { name: "Pure Pani", image: "/projects/Pure Pani.PNG" },
  { name: "Repair Expert", image: "/projects/Repair Expert.PNG" },
  { name: "Simple Dairy", image: "/projects/Simple Dairy.webp" },
  { name: "Suddh Pani", image: "/projects/Suddh Pani.svg" },
  { name: "Treesh TV", image: "/projects/Treesh Tv.PNG" },
  { name: "Trider", image: "/projects/Trider.png" },
  { name: "Wizplay", image: "/projects/wizplay.PNG" }
]

export function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="py-8 md:py-12 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Our Successful Deliveries
          </h2>
          <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto">
            Innovative solutions delivered across diverse industries
          </p>
        </motion.div>

        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>

          <div 
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-32 md:w-40 group"
              >
                <div className="bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-all duration-200 hover:scale-105">
                  <div className="aspect-square relative overflow-hidden rounded bg-white/5">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-contain p-1 group-hover:scale-110 transition-transform duration-200"
                    />
                  </div>
                  <h3 className="text-xs font-medium text-white mt-2 text-center truncate">
                    {project.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}