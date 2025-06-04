
import BackgroundAnimation from "../components/home/components/BackgroundAnimation"
import HeroSection from "../components/home/components/HeroSection"
import ServicesSection from "../components/home/components/ServicesSection"
import VisaCategories from "../components/home/components/VisaCategories"
import FeaturedCountries from "../components/home/components/FeaturedCountries"
import WhyChooseUs from "../components/home/components/WhyChooseUs"
import Testimonials from "../components/home/components/Testimonials"
import CTASection from "../components/home/components/CTASection"
import ThreeBackground from "../components/home/components/ThreeBackground"
import VisaJourneyBackground from "../components/home/components/VisaJourneyBackground"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">
      <BackgroundAnimation />
      
      <div className="relative z-10">
        <HeroSection />
        <ServicesSection />
        <FeaturedCountries />
        <WhyChooseUs />
        <Testimonials />
        <CTASection />
        <div className="mt-8 bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-4xl text-center font-bold text-gray-900 mb-8">Our Location</h3>
              <div className="rounded-lg overflow-hidden">
                <iframe 
                  title="Office Location Map"
                  className="w-7xl h-100 border-0 rounded-lg m-auto"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.5679649294967!2d77.21582007469185!3d28.564678247585368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3eb2138d4b7%3A0x9b202326d0b8edfc!2sSouth%20Extension%20II%2C%20G-25%2C%20New%20Delhi%2C%20Delhi%20110049%2C%20India!5e0!3m2!1sen!2sus!4v1651234567890!5m2!1sen!2sus"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="mt-4">
                  <p className="text-gray-700 font-medium">
                    South Extension II, G-25, New Delhi, Delhi 110049
                  </p>
                  <p className="text-gray-600 text-sm mt-1">
                    <a href="https://goo.gl/maps/bWFp9W7XG7HvWo1HA" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                      </svg>
                      Get directions
                    </a>
                  </p>
                </div>
              </div>
            </div>
      </div>
    </div>
  )
}
