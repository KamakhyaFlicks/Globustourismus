"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight } from "lucide-react"

const visaTypes = [
  {
    title: "Tourist Visa",
    description: "Short-term visits for tourism and leisure",
    duration: "Up to 90 days",
    color: "bg-green-500",
  },
  {
    title: "Business Visa",
    description: "Professional meetings and business activities",
    duration: "Up to 180 days",
    color: "bg-blue-500",
  },
  {
    title: "Student Visa",
    description: "Academic programs and educational pursuits",
    duration: "Course duration",
    color: "bg-purple-500",
  },
  {
    title: "Work Visa",
    description: "Employment opportunities abroad",
    duration: "1-5 years",
    color: "bg-orange-500",
  },
  {
    title: "Transit Visa",
    description: "Short layovers and connecting flights",
    duration: "24-72 hours",
    color: "bg-pink-500",
  },
  {
    title: "Medical Visa",
    description: "Healthcare and medical treatment",
    duration: "Treatment period",
    color: "bg-red-500",
  },
]

export default function VisaCategories() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Visa Categories</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our wide range of visa services based on your travel purpose
          </p>
        </motion.div>

        {/* Mobile: 2 columns, Tablet: 2 columns, Desktop: 3 columns */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {visaTypes.map((visa, index) => (
            <motion.div
              key={visa.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                scale: 1.03,
                y: -8,
                transition: { duration: 0.3 },
              }}
              className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer"
            >
              {/* Color Block */}
              <motion.div
                className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 ${visa.color} rounded-lg sm:rounded-xl mb-3 sm:mb-4 opacity-90`}
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.2 },
                }}
              ></motion.div>

              {/* Title */}
              <h3 className="text-sm sm:text-lg md:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">{visa.title}</h3>

              {/* Description */}
              <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                {visa.description}
              </p>

              {/* Duration and Arrow */}
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm text-gray-500 font-medium">{visa.duration}</span>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="flex items-center text-blue-600 text-xs sm:text-sm font-medium">
                    <span className="hidden sm:inline mr-1">Learn More</span>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
