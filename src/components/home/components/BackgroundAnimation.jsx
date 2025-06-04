"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Plane, MapPin, Globe, StampIcon as Passport, Camera, Luggage, Compass, Mountain } from "lucide-react"
import { useEffect, useState } from "react"

export default function BackgroundAnimation() {
  const { scrollYProgress } = useScroll()
  const [isMobile, setIsMobile] = useState(false)

  // Check for mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Optimized scroll transforms with reduced range for better performance
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -80])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -60])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -100])

  // Simplified rotation for better performance
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 180])
  const rotateReverse = useTransform(scrollYProgress, [0, 1], [180, 0])

  // Responsive sizing
  const iconSize = isMobile ? "w-4 h-4" : "w-8 h-8"
  const largeIconSize = isMobile ? "w-6 h-6" : "w-12 h-12"
  const extraLargeIconSize = isMobile ? "w-8 h-8" : "w-16 h-16"

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Optimized Eiffel Tower - Simplified structure */}
      <motion.div
        style={{ y: y1 }}
        className={`absolute ${isMobile ? "top-10 right-5" : "top-20 right-20"} text-blue-100 opacity-15`}
      >
        <div className={`${isMobile ? "w-3 h-12" : "w-6 h-20"} relative will-change-transform`}>
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-200"></div>
          <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-2 h-0.5 bg-blue-200"></div>
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-1.5 h-0.5 bg-blue-200"></div>
        </div>
      </motion.div>

      {/* Main Flying Plane - Reduced complexity */}
      <motion.div
        style={{ y: y2, rotate }}
        className={`absolute ${isMobile ? "top-1/4 left-2" : "top-1/3 left-10"} text-blue-100 opacity-25 will-change-transform`}
      >
        <Plane className={largeIconSize} />
      </motion.div>

      {/* Secondary Plane - Simplified */}
      <motion.div
        style={{ y: y3, rotate: rotateReverse }}
        className={`absolute ${isMobile ? "top-1/2 right-5" : "top-2/3 right-1/4"} text-indigo-100 opacity-20 will-change-transform`}
      >
        <Plane className={iconSize} />
      </motion.div>

      {/* Globe - Reduced animation complexity */}
      <motion.div
        style={{ y: y2 }}
        className={`absolute ${isMobile ? "bottom-1/3 right-8" : "bottom-1/4 right-1/4"} text-blue-100 opacity-20 will-change-transform`}
      >
        <Globe className={extraLargeIconSize} />
      </motion.div>

      {/* Passport */}
      <motion.div
        style={{ y: y1 }}
        className={`absolute ${isMobile ? "top-2/3 left-1/4" : "top-2/3 left-1/3"} text-blue-100 opacity-15 will-change-transform`}
      >
        <Passport className={iconSize} />
      </motion.div>

      {/* Camera */}
      <motion.div
        style={{ y: y3 }}
        className={`absolute ${isMobile ? "top-1/5 right-1/4" : "top-1/4 right-1/3"} text-purple-100 opacity-20 will-change-transform`}
      >
        <Camera className={largeIconSize} />
      </motion.div>

      {/* Luggage */}
      <motion.div
        style={{ y: y2, rotate: rotateReverse }}
        className={`absolute ${isMobile ? "bottom-10 right-2" : "bottom-20 right-10"} text-green-100 opacity-25 will-change-transform`}
      >
        <Luggage className={largeIconSize} />
      </motion.div>

      {/* Compass */}
      <motion.div
        style={{ y: y4, rotate }}
        className={`absolute ${isMobile ? "top-1/2 left-1/6" : "top-1/2 left-1/5"} text-orange-100 opacity-20 will-change-transform`}
      >
        <Compass className={iconSize} />
      </motion.div>

      {/* Mountain */}
      <motion.div
        style={{ y: y1 }}
        className={`absolute ${isMobile ? "bottom-1/2 right-1/6" : "bottom-1/2 right-1/5"} text-gray-200 opacity-15 will-change-transform`}
      >
        <Mountain className={extraLargeIconSize} />
      </motion.div>

      {/* Map Pins - Reduced count for mobile */}
      <motion.div
        style={{ y: y2 }}
        className={`absolute ${isMobile ? "bottom-16 left-5" : "bottom-20 left-20"} text-red-100 opacity-20 will-change-transform`}
      >
        <MapPin className={iconSize} />
      </motion.div>

      {!isMobile && (
        <>
          <motion.div
            style={{ y: y3 }}
            className="absolute top-1/2 right-10 text-blue-100 opacity-15 will-change-transform"
          >
            <MapPin className="w-5 h-5" />
          </motion.div>

          <motion.div
            style={{ y: y1 }}
            className="absolute top-1/4 left-1/2 text-green-100 opacity-25 will-change-transform"
          >
            <MapPin className="w-6 h-6" />
          </motion.div>
        </>
      )}

      {/* Simplified floating circles - Reduced for mobile */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{ y: y1 }}
        className={`absolute ${isMobile ? "top-1/4 left-1/3 w-16 h-16" : "top-1/4 left-1/2 w-24 h-24"} bg-blue-200 rounded-full will-change-transform`}
      ></motion.div>

      {!isMobile && (
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.03, 0.12, 0.03],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          style={{ y: y2 }}
          className="absolute bottom-1/3 right-1/3 w-20 h-20 bg-indigo-200 rounded-full will-change-transform"
        ></motion.div>
      )}

      {/* Simplified Paper Plane Trail - Reduced dots for mobile */}
      <motion.div
        style={{ y: y3 }}
        className={`absolute ${isMobile ? "top-8 left-1/4" : "top-10 left-1/3"} will-change-transform`}
      >
        <div className="flex space-x-1">
          {[...Array(isMobile ? 3 : 4)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -5, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.3,
                ease: "easeInOut",
              }}
              className={`${isMobile ? "w-1 h-1" : "w-1.5 h-1.5"} bg-blue-300 rounded-full will-change-transform`}
            ></motion.div>
          ))}
        </div>
      </motion.div>

      {/* Simplified Floating Clouds - Only one for mobile */}
      <motion.div
        animate={{
          x: [0, isMobile ? 20 : 40, 0],
          opacity: [0.08, 0.25, 0.08],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{ y: y1 }}
        className={`absolute ${isMobile ? "top-12 left-1/5" : "top-16 left-1/4"} will-change-transform`}
      >
        <div className="flex space-x-1">
          <div className={`${isMobile ? "w-4 h-2" : "w-6 h-3"} bg-gray-200 rounded-full opacity-30`}></div>
          <div className={`${isMobile ? "w-3 h-1.5" : "w-4 h-2"} bg-gray-200 rounded-full opacity-25`}></div>
          <div className={`${isMobile ? "w-2 h-1" : "w-3 h-1.5"} bg-gray-200 rounded-full opacity-20`}></div>
        </div>
      </motion.div>

      {/* Visa Stamps - Simplified for mobile */}
      {!isMobile && (
        <>
          <motion.div style={{ y: y2, rotate }} className="absolute top-1/2 right-1/3 opacity-15 will-change-transform">
            <div className="w-8 h-5 border border-red-300 rounded transform rotate-12">
              <div className="text-xs text-red-300 p-0.5 font-bold">VISA</div>
            </div>
          </motion.div>

          <motion.div
            style={{ y: y4, rotate: rotateReverse }}
            className="absolute bottom-1/3 left-1/2 opacity-12 will-change-transform"
          >
            <div className="w-6 h-4 border border-green-300 rounded transform -rotate-12">
              <div className="text-xs text-green-300 p-0.5 font-bold">OK</div>
            </div>
          </motion.div>
        </>
      )}

      {/* Simplified Floating Dots Pattern - Reduced for mobile */}
      <motion.div
        style={{ y: y1 }}
        className={`absolute ${isMobile ? "top-3/4 right-1/6" : "top-3/4 right-1/5"} will-change-transform`}
      >
        <div className={`grid ${isMobile ? "grid-cols-2 gap-1" : "grid-cols-3 gap-1.5"}`}>
          {[...Array(isMobile ? 4 : 6)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.15, 0.35, 0.15],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
              className="w-0.5 h-0.5 bg-blue-300 rounded-full will-change-transform"
            ></motion.div>
          ))}
        </div>
      </motion.div>

      {/* Simplified Travel Route Lines - Only for desktop */}
      {!isMobile && (
        <motion.div className="absolute inset-0 will-change-transform">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <motion.path
              d="M10,20 Q30,10 50,30 T90,25"
              stroke="rgba(59, 130, 246, 0.15)"
              strokeWidth="0.3"
              fill="none"
              strokeDasharray="2,2"
              animate={{
                strokeDashoffset: [0, -10],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          </svg>
        </motion.div>
      )}
    </div>
  )
}
