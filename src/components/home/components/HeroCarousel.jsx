

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"

const carouselImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=2099&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Student studying abroad",
    title: "Study Abroad",
    subtitle: "World-class education opportunities",
  },
  {
    id: 2,
    src: "https://hblimg.mmtcdn.com/content/hubble/img/sydney/mmt/destination/m_Sydney_destination_l_571_857.jpg",
    alt: "Professional working internationally",
    title: "Work Visa",
    subtitle: "Global career opportunities",
  },
  {
    id: 3,
    src: "https://www.planetware.com/wpimages/2019/02/germany-best-places-to-visit-cologne.jpg",
    alt: "Family immigration",
    title: "Family Immigration",
    subtitle: "Reunite with your loved ones",
  },
  {
    id: 4,
    src: "https://res.klook.com/image/upload/q_85/c_fill,w_750/v1718112298/klyzxawxgytpixrvsgem.jpg",
    alt: "Tourist destinations",
    title: "Tourist Visa",
    subtitle: "Explore the world with confidence",
  },
]

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [direction, setDirection] = useState(0)

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isPlaying])

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection) => {
    setDirection(newDirection)
    setCurrentIndex((prevIndex) => {
      if (newDirection === 1) {
        return (prevIndex + 1) % carouselImages.length
      } else {
        return prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
      }
    })
  }

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  return (
    <section className="relative w-full pt-10 md:py-12 lg:py-16">
      <div className="container mx-auto px-4">
        {/* Carousel Container */}
        <div className="relative w-full mx-auto">
          {/* Main Carousel */}
          <div className="relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] overflow-hidden rounded-2xl bg-gray-100 shadow-2xl">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x)

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1)
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1)
                  }
                }}
                className="absolute inset-0 cursor-grab active:cursor-grabbing"
              >
                <div className="relative w-full h-full">
                  <img
                    src={carouselImages[currentIndex].src || "/placeholder.svg"}
                    alt={carouselImages[currentIndex].alt}
                    className="w-full h-full object-cover"
                    draggable={false}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"></div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white px-4">
                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2"
                      >
                        {carouselImages[currentIndex].title}
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="text-sm sm:text-base md:text-lg opacity-90"
                      >
                        {carouselImages[currentIndex].subtitle}
                      </motion.p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={() => paginate(-1)}
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-1.5 sm:p-2 rounded-full transition-all duration-200 hover:scale-110 z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <button
              onClick={() => paginate(1)}
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-1.5 sm:p-2 rounded-full transition-all duration-200 hover:scale-110 z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Play/Pause Button */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-1.5 sm:p-2 rounded-full transition-all duration-200 hover:scale-110 z-10"
              aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
            >
              {isPlaying ? <Pause className="w-3 h-3 sm:w-4 sm:h-4" /> : <Play className="w-3 h-3 sm:w-4 sm:h-4" />}
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-4 sm:mt-6 space-x-2">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-blue-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-3 sm:mt-4 w-full bg-gray-200 rounded-full h-1 overflow-hidden">
            <motion.div
              className="h-full bg-blue-600 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: isPlaying ? "100%" : "0%" }}
              transition={{
                duration: isPlaying ? 4 : 0,
                ease: "linear",
                repeat: isPlaying ? Number.POSITIVE_INFINITY : 0,
              }}
              key={`${currentIndex}-${isPlaying}`}
            />
          </div>
        </div>

        {/* Carousel Info */}
        <div className="text-center mt-6 sm:mt-8">
          <p className="text-gray-600 text-sm sm:text-base">
            {currentIndex + 1} of {carouselImages.length}
          </p>
        </div>
      </div>
    </section>
  )
}
