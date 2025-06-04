"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    country: "Canada",
    rating: 5,
    text: "Exceptional service! They guided me through every step of my Canadian immigration process. Highly professional and knowledgeable team.",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Michael Chen",
    country: "Australia",
    rating: 5,
    text: "Thanks to their expertise, I got my Australian work visa approved in record time. The process was smooth and stress-free.",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Priya Sharma",
    country: "United Kingdom",
    rating: 5,
    text: "Outstanding support for my UK student visa. They made what seemed impossible, possible. Forever grateful!",
    image: "/placeholder.svg?height=60&width=60",
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from our satisfied clients who achieved their dreams
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{
                scale: 1.03,
                y: -5,
                transition: { duration: 0.3 },
              }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative group"
            >
              <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.2 }}>
                <Quote className="w-8 h-8 text-blue-200 mb-4" />
              </motion.div>
              <p className="text-gray-600 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
              <div className="flex items-center">
                <motion.img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">Moved to {testimonial.country}</p>
                </div>
              </div>
              <div className="flex mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ delay: index * 0.2 + i * 0.1 }}
                    whileHover={{ scale: 1.2 }}
                  >
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
