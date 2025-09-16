"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const clients = [
  { name: "AccuAI", logo: "/logos/accuai.png" },
  { name: "Anu", logo: "/logos/Anu.webp" },
  { name: "Finanza", logo: "/logos/finanza.svg" },
  { name: "Finanza Dashboard", logo: "/logos/finanzadash.svg" },
  { name: "Hafa", logo: "/logos/hafalogo.webp" },
  { name: "Kanha", logo: "/logos/Kanha.webp" },
  { name: "Koffeetech", logo: "/logos/Koffeetech-Logo.png" },
  { name: "Ma Narmada Hospital", logo: "/logos/Ma Narmda  Hospital.png" },
  { name: "Orderfic", logo: "/logos/orderfic logo.webp" },
  { name: "Paper Bill", logo: "/logos/Paper Bill.png" },
  { name: "PiSwap", logo: "/logos/piswap.png" },
  { name: "Prashil Export", logo: "/logos/Prashil Export.png" },
  { name: "Shrashti", logo: "/logos/Shrashti.webp" },
  { name: "The Grill", logo: "/logos/thegrill.jpg" },
  { name: "TMN India", logo: "/logos/tmnIndia.png" },
  { name: "Trees", logo: "/logos/Trees.svg" },
  { name: "Trider", logo: "/logos/trider-logo.png" },
  { name: "Unik Naturals", logo: "/logos/unik naturals.png" }
]

export function ClientLogos() {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            Trusted by Leading Companies
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We're proud to work with innovative companies across various industries
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div
            animate={{ x: [0, -100 * clients.length] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
            className="flex space-x-8"
            style={{ width: `${200 * clients.length}px` }}
          >
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 w-32 h-16 bg-white/10 rounded-lg p-3 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={120}
                  height={60}
                  className="max-w-full max-h-full object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}