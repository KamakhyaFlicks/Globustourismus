"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import US from "country-flag-icons/react/3x2/US"
import CA from "country-flag-icons/react/3x2/CA"
import GB from "country-flag-icons/react/3x2/GB"
import AU from "country-flag-icons/react/3x2/AU"
import DE from "country-flag-icons/react/3x2/DE"
import FR from "country-flag-icons/react/3x2/FR"
import RU from "country-flag-icons/react/3x2/RU"
import AM from "country-flag-icons/react/3x2/AM"
import GE from "country-flag-icons/react/3x2/GE"

const countries = [
  {
    name: "United States",
    flag: <US title="United States" className="w-6 h-4 md:w-8 md:h-5" />,
    description: "Land of opportunities with world-class education and career prospects",
    visaTypes: ["Student", "Work", "Tourist"],
    slug: "usa",
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=2099&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Canada",
    flag: <CA title="Canada" className="w-6 h-4 md:w-8 md:h-5" />,
    description: "Welcoming immigration policies and excellent quality of life",
    visaTypes: ["Immigration", "Study", "Work"],
    slug: "canada",
    image: "https://img.freepik.com/free-photo/toronto-architecture_649448-3438.jpg?uid=R201542633&ga=GA1.1.985163845.1748855804&semt=ais_items_boosted&w=740",
  },
  {
    name: "United Kingdom",
    flag: <GB title="United Kingdom" className="w-6 h-4 md:w-8 md:h-5" />,
    description: "Rich history, prestigious universities, and global business hub",
    visaTypes: ["Student", "Work", "Business"],
    slug: "uk",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Australia",
    flag: <AU title="Australia" className="w-6 h-4 md:w-8 md:h-5" />,
    description: "Beautiful landscapes with strong economy and education system",
    visaTypes: ["Immigration", "Student", "Work"],
    slug: "australia",
    image: "https://hblimg.mmtcdn.com/content/hubble/img/sydney/mmt/destination/m_Sydney_destination_l_571_857.jpg",
  },
  {
    name: "Germany",
    flag: <DE title="Germany" className="w-6 h-4 md:w-8 md:h-5" />,
    description: "Engineering excellence and free education opportunities",
    visaTypes: ["Student", "Work", "Business"],
    slug: "germany",
    image: "https://www.planetware.com/wpimages/2019/02/germany-best-places-to-visit-cologne.jpg",
  },
  {
    name: "France",
    flag: <FR title="France" className="w-6 h-4 md:w-8 md:h-5" />,
    description: "Cultural richness and world-renowned educational institutions",
    visaTypes: ["Student", "Tourist", "Work"],
    slug: "france",
    image: "https://res.klook.com/image/upload/q_85/c_fill,w_750/v1718112298/klyzxawxgytpixrvsgem.jpg",
  },
  {
    name: "Russia",
    flag: <RU title="Russia" className="w-6 h-4 md:w-8 md:h-5" />,
    description: "Rich cultural heritage and educational excellence",
    visaTypes: ["Student", "Tourist", "Work"],
    slug: "russia",
    image: "https://www.flamingotravels.co.in/blog/wp-content/uploads/2021/07/Russia.jpg",
  },
  {
    name: "Armenia",
    flag: <AM title="Armenia" className="w-6 h-4 md:w-8 md:h-5" />,
    description: "Ancient history and growing opportunities",
    visaTypes: ["Student", "Tourist", "Work"],
    slug: "armenia",
    image: "https://media1.thrillophilia.com/filestore/udoum4wzq52qtz193g2iz0hlcain_armenia-hero_size-t1524808170.jpg?w=753&h=450&dpr=2.0",
  },
  {
    name: "Georgia",
    flag: <GE title="Georgia" className="w-6 h-4 md:w-8 md:h-5" />,
    description: "Beautiful landscapes and emerging opportunities",
    visaTypes: ["Student", "Tourist", "Work"],
    slug: "georgia",
    image: "https://www.gokitetours.com/wp-content/uploads/2024/09/The-Best-Places-to-Visit-in-Tbilisi-Georgia-.webp",
  },
]

export default function FeaturedCountries() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-12 md:py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-3 md:px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 md:mb-4">
            Featured Destinations
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Explore popular destinations where we help make your dreams come true
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-8">
          {countries.map((country, index) => (
            <motion.div
              key={country.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                scale: 1.02,
                y: -3,
                transition: { duration: 0.2 },
              }}
              className="group cursor-pointer"
            >
              <a href={`countries/${country.slug}`} className="block" aria-label={`Learn more about ${country.name}`}>
                <div className="relative h-48 md:h-64 lg:h-72 rounded-lg md:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  {/* Background image with fallback */}
                  <div
                    className="absolute inset-0 bg-gray-200"
                    style={{
                      backgroundImage: `url(${country.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    {/* Fallback for image loading issues */}
                    
                  </div>

                  {/* Gradient overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-300" />

                  {/* Country flag positioned at top-right */}
                  <div className="absolute top-3 md:top-4 right-3 md:right-4 bg-white/90 backdrop-blur-sm rounded-md p-1.5 md:p-2 shadow-sm">
                    {country.flag}
                  </div>

                  {/* Content positioned at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 md:p-6 text-white">
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-1 md:mb-2 line-clamp-1">
                      {country.name}
                    </h3>
                    <p className="text-sm md:text-base text-white/90 mb-2 md:mb-3 leading-relaxed line-clamp-2">
                      {country.description}
                    </p>
                    <div className="flex flex-wrap gap-1 md:gap-2">
                      {country.visaTypes.slice(0, 2).map((type, typeIndex) => (
                        <span
                          key={type}
                          className="bg-white/20 backdrop-blur-sm text-white px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-medium border border-white/30"
                        >
                          {type}
                        </span>
                      ))}
                      {country.visaTypes.length > 2 && (
                        <span className="text-xs md:text-sm text-white/80">+{country.visaTypes.length - 2}</span>
                      )}
                    </div>
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-all duration-300" />
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}