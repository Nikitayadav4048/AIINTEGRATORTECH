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
  { name: "Wizplay", image: "/projects/wizplay.PNG" },
  { name: "JBM Mart", image: "/projects/ecotech-solutions.jpeg" },
  { name: "Kirana Bazzar", image: "/projects/financehub-pro.jpeg" },
  { name: "Time Now India", image: "/projects/smart-logistics.jpeg" },
  { name: "Treesh", image: "/projects/healthcare-plus.jpeg" },
  { name: "Kartheory", image: "/projects/retail-max.jpeg" },
  { name: "Surplus Loyalty", image: "/projects/tech-vision.jpeg" },
  { name: "Unik Naturals", image: "/projects/cloud-sync.jpeg" },
  { name: "AccuAI", image: "/projects/data-flow.jpeg" },
  // { name: "InnovateLab", image: "/projects/innovate-lab.jpeg" },
  { name: "MG & CO", image: "/projects/secure-net.jpeg" },
  // { name: "AutoMate", image: "/projects/auto-mate.jpeg" },
  { name: "PaperBill", image: "/projects/web-craft.jpeg" },
  { name: "My Business", image: "/projects/mobile-tech.jpeg" },
  // { name: "DigitalCore", image: "/projects/digital-core.jpeg" },
  { name: "Coffee Been", image: "/projects/nextgen-app.jpeg" },
  { name: "Plus++", image: "/projects/pro-suite.jpeg" },
  { name: "TechBridge", image: "/projects/tech-bridge.jpeg" },
  { name: "SmartBiz", image: "/projects/smart-biz.jpeg" },
  { name: "Scalyx", image: "/projects/scalyx.jpeg" },
  { name: "Banniya", image: "/projects/baniya-bandhu.jpeg" },
  // { name: "Time Now India", image: "/projects/time-now-india.jpeg" }
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
    <section className="py-8 md:py-12 bg-green-900">
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
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black hover:bg-gray-800 rounded-full p-3 transition-colors shadow-lg"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black hover:bg-gray-800 rounded-full p-3 transition-colors shadow-lg"
          >
            <ChevronRight className="w-6 h-6 text-white" />
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
                <div className="bg-black rounded-lg p-3 hover:bg-gray-900 transition-all duration-200 hover:scale-105 shadow-lg">
                  <div className="aspect-square relative overflow-hidden rounded bg-white/10">
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