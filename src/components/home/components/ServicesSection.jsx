"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Briefcase, Home, Users, Plane, Handshake, Truck, Hospital, HandCoins } from "lucide-react"

const services = [
  {
    icon: GraduationCap,
    title: "Student Visa",
    slug:"student",
    description: "Complete guidance for study abroad programs and student visa applications.",
  },
  {
    icon: Plane,
    title: "Tourist Visa",
    slug:"tourist",
    description: "Complete guidance for study abroad programs and student visa applications.",
  },
  {
    icon: Briefcase,
    title: "Work Visa",
    slug:"work",
    description: "Professional assistance for work permits and employment-based visas.",
  },
  {
    icon: Users,
    title: "Family Visa",
    slug:"family",
    description: "Reunite with your loved ones through family sponsorship programs.",
  },
  {
    icon: Handshake,
    title: "Business Visa",
    slug:"business",
    description: "Facilitating business travel and investment opportunities abroad.",
  },
  {
    icon: Truck,
    title: "Transit Visa",
    slug:"transit",
    description: "Short-term transit visas for layovers and connecting flights.",
  },
  {
    icon: Hospital,
    title: "Medical Visa",
    slug:"medical",
    description: "Assistance with medical visas for healthcare and treatment abroad.",
  },
  {
    icon: HandCoins,
    title: "Investor Visa",
    slug:"investor",
    description: "Assistance with medical visas for healthcare and treatment abroad.",
  },
]

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="my-15">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive visa and immigration services tailored to your unique needs
          </p>
        </motion.div>

        {/* Mobile: 2 columns, Tablet: 2 columns, Desktop: 4 columns */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <a href={`/visa-services/${service.slug}`} key={service.title} className="group">
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 },
              }}
              className="bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group text-center"
            >
              {/* Centered Icon Container */}
              <motion.div
                className="bg-blue-100 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-blue-200 transition-colors duration-300 mx-auto"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <service.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-600" />
              </motion.div>

              {/* Title */}
              <h3 className="text-sm sm:text-lg md:text-xl font-semibold text-gray-900 mb-2 sm:mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
