"use client"

import { Users, Award, Globe, CheckCircle } from "lucide-react"
import ceo from "../assets/images/CEO.jpg"
const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Global Visa Solutions</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Helping people achieve their global mobility dreams since 2005
          </p>
        </div>
      </section>

      {/* Story & Mission */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                Founded in 2005, we make the complex visa application process accessible and stress-free for everyone.
              </p>
              <p className="text-lg text-gray-700">
                Our commitment to excellence and personalized service has helped thousands achieve their immigration
                goals.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <Globe className="w-8 h-8 text-blue-600" />, title: "Global Expertise" },
                { icon: <Users className="w-8 h-8 text-blue-600" />, title: "Client-Focused" },
                { icon: <CheckCircle className="w-8 h-8 text-blue-600" />, title: "Trusted Process" },
                { icon: <Award className="w-8 h-8 text-blue-600" />, title: "Proven Results" },
              ].map((item, index) => (
                <div key={index} className="text-center p-4">
                  <div className="mb-3 flex justify-center">{item.icon}</div>
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "15,000+", label: "Successful Applications" },
              { number: "98%", label: "Approval Rate" },
              { number: "120+", label: "Countries Served" },
              { number: "18", label: "Years of Excellence" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <p className="text-gray-700">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src={ceo}
                alt="CEO Portrait"
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Leadership Message</h2>
              <div className="w-16 h-1 bg-blue-600 mb-6"></div>
              <p className="text-lg text-gray-700 mb-6">
                "At Global Visa Solutions, we believe that everyone deserves the opportunity to pursue their dreams,
                regardless of borders. Our dedicated team works tirelessly to make the complex immigration process
                simple and accessible."
              </p>
              <p className="text-lg text-gray-700 mb-6">
                "With over 18 years of experience, we've helped thousands of families and individuals achieve their
                global mobility goals. Our commitment to excellence and personalized service remains unwavering."
              </p>
              <div className="border-l-4 border-blue-600 pl-4">
                <p className="font-semibold text-gray-900">Sarah Johnson</p>
                <p className="text-gray-600">CEO & Founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-white/90 mb-8">
              Our team of experts is ready to guide you through every step of your visa process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-md hover:bg-gray-100 transition-colors">
                Get Consultation
              </button>
              <button className="border-2 border-white text-white font-semibold py-3 px-8 rounded-md hover:bg-white hover:text-blue-600 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
