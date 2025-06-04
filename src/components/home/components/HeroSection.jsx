
import { motion } from "framer-motion"
// import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, Plane, MapPin } from "lucide-react"
import HeroCarousel from "../components/HeroCarousel"
export default function HeroSection() {
  return (
    <section className="relative mt-10 min-h-screen flex justify-center overflow-hidden">
      <div className="container mx-auto px-4 z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">
              <Globe className="w-4 h-4" />
              Your Gateway to Global Opportunities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Turn Your
            <span className="text-blue-600 block">Dream Destination</span>
            Into Reality
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-md md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Expert visa consultation and immigration services to help you navigate your journey to study, work, or
            settle abroad with confidence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button> */}
            {/* <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
              Free Consultation
            </Button> */}
           <a href="/book-visa-consultation" className="relative z-0">
            <button class="relative z-0 h-12 rounded-[10px] bg-blue-700 cursor-pointer px-6 text-neutral-100
            font-medium after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:rounded-[10px] after:bg-blue-700 hover:after:scale-x-125 hover:after:scale-y-150 hover:after:opacity-0 hover:after:transition hover:after:duration-500">Book Your Free Consultaion</button>
           </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <HeroCarousel />
        </motion.div>
      </div>


      {/* Enhanced Floating elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-20 right-10 text-blue-200"
      >
        <Plane className="w-12 h-12" />
      </motion.div>

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-20 left-10 text-blue-200"
      >
        <Globe className="w-16 h-16" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 15, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-1/2 left-5 text-blue-200"
      >
        <MapPin className="w-8 h-8" />
      </motion.div>

      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute bottom-1/3 right-5 text-blue-200"
      >
        <div className="relative">
          <div className="w-12 h-12 border-2 border-blue-200 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-blue-200 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  )
}
