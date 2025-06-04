"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Shield, Clock, Users, Award, HeadphonesIcon, Globe } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "100% Success Rate",
    description: "Proven track record with thousands of successful visa applications",
  },
  {
    icon: Clock,
    title: "Fast Processing",
    description: "Quick turnaround times without compromising on quality",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Experienced immigration consultants and legal experts",
  },
  {
    icon: Award,
    title: "Certified Agents",
    description: "Licensed and certified immigration professionals",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Round-the-clock assistance throughout your journey",
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "Partnerships with institutions and agencies worldwide",
  },
]

export default function WhyChooseUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-12 md:py-20">
      <div className="container mx-auto px-3 md:px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 md:mb-4">Why Choose Us</h2>
          <p className="text-sm md:text-xl text-gray-600 max-w-2xl mx-auto px-2">
            Your trusted partner for seamless visa and immigration services
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="text-center group cursor-pointer p-2 md:p-4"
            >
              <motion.div
                className="bg-blue-100 w-12 h-12 md:w-16 lg:w-20 md:h-16 lg:h-20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-6 group-hover:bg-blue-200 transition-colors duration-300"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3 },
                }}
              >
                <feature.icon className="w-6 h-6 md:w-8 lg:w-10 md:h-8 lg:h-10 text-blue-600" />
              </motion.div>
              <h3 className="text-sm md:text-lg lg:text-xl font-semibold text-gray-900 mb-2 md:mb-4 line-clamp-2">
                {feature.title}
              </h3>
              <p className="text-xs md:text-base text-gray-600 leading-relaxed line-clamp-3 md:line-clamp-none">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
