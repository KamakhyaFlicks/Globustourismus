"use client"

import { useEffect } from "react"
import { Link } from "react-router-dom"
import { Users, Award, Globe, Clock, CheckCircle, TrendingUp, MapPin, Mail } from "lucide-react"

const About = () => {
  useEffect(() => {
    // Scroll reveal animation
    const revealElements = document.querySelectorAll(".reveal")

    const revealOnScroll = () => {
      for (let i = 0; i < revealElements.length; i++) {
        const windowHeight = window.innerHeight
        const elementTop = revealElements[i].getBoundingClientRect().top
        const elementVisible = 150

        if (elementTop < windowHeight - elementVisible) {
          revealElements[i].classList.add("active")
        }
      }
    }

    window.addEventListener("scroll", revealOnScroll)
    revealOnScroll() // Initial check

    return () => window.removeEventListener("scroll", revealOnScroll)
  }, [])

  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/80 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/placeholder.svg?height=1080&width=1920')" }}
        ></div>
        <div className="container mx-auto px-4 relative z-20 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">About Global Visa Solutions</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Helping people achieve their global mobility dreams since 2005
          </p>
        </div>
      </section>

      {/* 2. Our Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 reveal">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="w-20 h-1 bg-blue-600 mb-8"></div>
              <p className="text-lg text-gray-700 mb-6">
                Founded in 2005, Global Visa Solutions began with a simple mission: to make the complex visa application
                process accessible and stress-free for everyone.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                What started as a small consultancy has grown into a trusted partner for thousands of individuals and
                businesses seeking immigration and visa services across the globe.
              </p>
              <p className="text-lg text-gray-700">
                Our journey has been defined by our commitment to excellence, personalized service, and a deep
                understanding of the ever-changing landscape of global immigration policies.
              </p>
            </div>
            <div className="w-full md:w-1/2 reveal">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-blue-600"></div>
                <img
                  src="/placeholder.svg?height=600&width=800"
                  alt="Our office"
                  className="w-full h-auto object-cover relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission & Values Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission & Values</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We're guided by our commitment to integrity, excellence, and client success in everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="w-12 h-12 text-blue-600" />,
                title: "Global Perspective",
                description:
                  "We understand the nuances of immigration systems worldwide and provide solutions tailored to each destination.",
              },
              {
                icon: <Users className="w-12 h-12 text-blue-600" />,
                title: "Client-Centered Approach",
                description:
                  "Every client's situation is unique. We take the time to understand your specific needs and goals.",
              },
              {
                icon: <CheckCircle className="w-12 h-12 text-blue-600" />,
                title: "Integrity",
                description:
                  "We operate with complete transparency and honesty, providing realistic assessments and ethical guidance.",
              },
              {
                icon: <Clock className="w-12 h-12 text-blue-600" />,
                title: "Efficiency",
                description: "We value your time and work diligently to streamline processes and minimize delays.",
              },
              {
                icon: <Award className="w-12 h-12 text-blue-600" />,
                title: "Excellence",
                description:
                  "We maintain the highest standards of service quality and professional expertise in all that we do.",
              },
              {
                icon: <TrendingUp className="w-12 h-12 text-blue-600" />,
                title: "Innovation",
                description:
                  "We continuously improve our methods and embrace new technologies to better serve our clients.",
              },
            ].map((value, index) => (
              <div key={index} className="bg-white p-8 shadow-sm border border-gray-100 rounded-lg reveal">
                <div className="mb-6">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Team Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Leadership Team</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Meet the experts who guide our vision and ensure excellence in everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO & Founder",
                bio: "With over 20 years of experience in immigration law and policy.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Michael Chen",
                role: "Chief Operations Officer",
                bio: "Specializes in streamlining visa processes and client experience.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Priya Patel",
                role: "Head of Legal",
                bio: "Former immigration judge with extensive knowledge of global visa regulations.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "David Okafor",
                role: "Client Success Director",
                bio: "Dedicated to ensuring seamless experiences for all clients.",
                image: "/placeholder.svg?height=400&width=400",
              },
            ].map((member, index) => (
              <div key={index} className="text-center reveal">
                <div className="relative mb-6 mx-auto w-48 h-48 rounded-full overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-700">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Services Overview */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Services</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive visa and immigration solutions tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Work Visas",
                description: "Expert guidance for professionals seeking employment opportunities abroad.",
                image: "/placeholder.svg?height=300&width=500",
              },
              {
                title: "Student Visas",
                description: "Supporting educational journeys with streamlined application processes.",
                image: "/placeholder.svg?height=300&width=500",
              },
              {
                title: "Family Reunification",
                description: "Bringing loved ones together through family sponsorship programs.",
                image: "/placeholder.svg?height=300&width=500",
              },
              {
                title: "Business Immigration",
                description: "Strategic solutions for entrepreneurs and investors expanding globally.",
                image: "/placeholder.svg?height=300&width=500",
              },
              {
                title: "Permanent Residency",
                description: "Pathways to permanent settlement in your country of choice.",
                image: "/placeholder.svg?height=300&width=500",
              },
              {
                title: "Citizenship Applications",
                description: "Guidance through the naturalization process for eligible candidates.",
                image: "/placeholder.svg?height=300&width=500",
              },
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 reveal">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  <Link to="/visas" className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
                    Learn more →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Achievements Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Impact</h2>
            <div className="w-20 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              We measure our success by the success of our clients and the positive impact we make.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "15,000+", label: "Successful Applications" },
              { number: "98%", label: "Approval Rate" },
              { number: "120+", label: "Countries Served" },
              { number: "18", label: "Years of Excellence" },
            ].map((stat, index) => (
              <div key={index} className="text-center reveal">
                <div className="text-4xl md:text-5xl font-bold mb-3">{stat.number}</div>
                <p className="text-xl opacity-90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Testimonials Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Client Success Stories</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Hear from those who've achieved their immigration goals with our help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Global Visa Solutions made my dream of studying abroad a reality. Their guidance throughout the student visa process was invaluable.",
                name: "Elena Rodriguez",
                location: "Spain → Canada",
                image: "/placeholder.svg?height=200&width=200",
              },
              {
                quote:
                  "As a tech professional, I needed expert advice for my work visa. The team delivered beyond my expectations with their knowledge and efficiency.",
                name: "Raj Mehta",
                location: "India → United States",
                image: "/placeholder.svg?height=200&width=200",
              },
              {
                quote:
                  "Reuniting with my family seemed impossible until I found Global Visa Solutions. Their compassionate approach made all the difference.",
                name: "Amir Hassan",
                location: "Lebanon → Australia",
                image: "/placeholder.svg?height=200&width=200",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg reveal">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-blue-600 flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Contact/CTA Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden reveal">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 bg-gradient-to-br from-blue-600 to-indigo-700 p-8 md:p-12 text-white">
                <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
                <p className="text-white/90 mb-8">
                  Our team of experts is ready to guide you through every step of your visa or immigration process.
                </p>
                <div className="flex items-center mb-4">
                  <Mail className="w-5 h-5 mr-3" />
                  <span>contact@globalvisasolutions.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3" />
                  <span>
                    123 Global Avenue, Suite 500
                    <br />
                    New York, NY 10001
                  </span>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-8 md:p-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                <form>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
