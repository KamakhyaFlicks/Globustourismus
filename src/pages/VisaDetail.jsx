"use client"

import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import {
  ArrowLeft,
  Clock,
  Calendar,
  TrendingUp,
  MapPin,
  CheckCircle,
  XCircle,
  FileText,
  DollarSign,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Star,
  Globe,
  Shield,
} from "lucide-react"
import visaData from "../data/VisaData.json"

const VisaDetail = () => {
  const { id } = useParams()
  const [visa, setVisa] = useState(null)
  const [activeTab, setActiveTab] = useState("overview")
  const [expandedFaq, setExpandedFaq] = useState(null)
  const [expandedDocCategory, setExpandedDocCategory] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading and find visa data
    const foundVisa = visaData.visaTypes.find((v) => v.id === id)
    setVisa(foundVisa)
    setLoading(false)
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading visa information...</p>
        </div>
      </div>
    )
  }

  if (!visa) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Visa Not Found</h1>
          <p className="text-gray-600 mb-6">The visa type you're looking for doesn't exist.</p>
          <Link
            to="/visas"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Visas
          </Link>
        </div>
      </div>
    )
  }

  const getColorClasses = (color) => {
    const colorMap = {
      blue: "from-blue-600 to-blue-800",
      green: "from-green-600 to-green-800",
      purple: "from-purple-600 to-purple-800",
      orange: "from-orange-600 to-orange-800",
      pink: "from-pink-600 to-pink-800",
      indigo: "from-indigo-600 to-indigo-800",
    }
    return colorMap[color] || "from-blue-600 to-blue-800"
  }

  const tabs = [
    { id: "overview", label: "Overview", icon: Globe },
    { id: "documents", label: "Documents", icon: FileText },
    { id: "pricing", label: "Pricing", icon: DollarSign },
    { id: "faq", label: "FAQ", icon: HelpCircle },
  ]

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  const toggleDocCategory = (category) => {
    setExpandedDocCategory(expandedDocCategory === category ? null : category)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className={`bg-gradient-to-r ${getColorClasses(visa.color)} text-white`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-6">
            <Link to="/visas" className="inline-flex items-center text-white/80 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Visas
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">{visa.name}</h1>
              <p className="text-xl text-white/90 mb-8">{visa.shortDescription}</p>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <Clock className="w-8 h-8 mx-auto mb-2 text-white/80" />
                  <div className="text-sm text-white/80">Processing Time</div>
                  <div className="font-semibold">{visa.processingTime}</div>
                </div>
                <div className="text-center">
                  <Calendar className="w-8 h-8 mx-auto mb-2 text-white/80" />
                  <div className="text-sm text-white/80">Validity</div>
                  <div className="font-semibold">{visa.validity}</div>
                </div>
                <div className="text-center">
                  <TrendingUp className="w-8 h-8 mx-auto mb-2 text-white/80" />
                  <div className="text-sm text-white/80">Success Rate</div>
                  <div className="font-semibold">{visa.successRate}</div>
                </div>
                <div className="text-center">
                  <MapPin className="w-8 h-8 mx-auto mb-2 text-white/80" />
                  <div className="text-sm text-white/80">Destinations</div>
                  <div className="font-semibold">{visa.popularDestinations.length}+</div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-4">Quick Start</h3>
                <p className="text-white/90 mb-6">Ready to begin your {visa.name.toLowerCase()} application?</p>
                <a href="/book-visa-consultation" className="block">
                <button className="w-full bg-white text-gray-800 py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer">
                  Start Application
                </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors ${
                    activeTab === tab.id
                      ? "border-blue-600 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {activeTab === "overview" && (
          <div className="space-y-12">
            {/* Description */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About {visa.name}</h2>
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <p className="text-gray-700 leading-relaxed text-lg">{visa.longDescription}</p>
              </div>
            </section>

            {/* Popular Destinations */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Popular Destinations</h2>
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {visa.popularDestinations.map((destination, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <span className="font-medium text-gray-800">{destination}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Eligibility, Benefits, Restrictions */}
            <div className="grid lg:grid-cols-3 gap-8">
              <section>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-2" />
                  Eligibility
                </h3>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <ul className="space-y-3">
                    {visa.eligibility.map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Star className="w-6 h-6 text-yellow-600 mr-2" />
                  Benefits
                </h3>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <ul className="space-y-3">
                    {visa.benefits.map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Star className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Shield className="w-6 h-6 text-red-600 mr-2" />
                  Restrictions
                </h3>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <ul className="space-y-3">
                    {visa.restrictions.map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            </div>
          </div>
        )}

        {activeTab === "documents" && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Required Documents</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Ensure you have all the necessary documents before starting your application. Click on each category to
                see detailed requirements.
              </p>
            </div>

            <div className="space-y-4">
              {Object.entries(visa.requiredDocuments).map(([category, documents]) => (
                <div key={category} className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <button
                    onClick={() => toggleDocCategory(category)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <FileText className="w-5 h-5 text-blue-600" />
                      <h3 className="text-lg font-semibold text-gray-900 capitalize">{category} Documents</h3>
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                        {documents.length} items
                      </span>
                    </div>
                    {expandedDocCategory === category ? (
                      <ChevronUp className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </button>

                  {expandedDocCategory === category && (
                    <div className="px-6 pb-6">
                      <div className="space-y-4">
                        {documents.map((doc, index) => (
                          <div key={index} className="border-l-4 border-blue-200 pl-4 py-2">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <h4 className="font-semibold text-gray-900 flex items-center">
                                  {doc.name}
                                  {doc.required && (
                                    <span className="ml-2 bg-red-100 text-red-800 text-xs font-medium px-2 py-0.5 rounded">
                                      Required
                                    </span>
                                  )}
                                </h4>
                                <p className="text-gray-600 mt-1">{doc.description}</p>
                                {doc.tips && doc.tips.length > 0 && (
                                  <div className="mt-2">
                                    <p className="text-sm font-medium text-gray-700 mb-1">Tips:</p>
                                    <ul className="text-sm text-gray-600 space-y-1">
                                      {doc.tips.map((tip, tipIndex) => (
                                        <li key={tipIndex} className="flex items-start space-x-2">
                                          <span className="text-blue-600 mt-1">•</span>
                                          <span>{tip}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "pricing" && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Packages</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Choose the service level that best fits your needs. All packages include our satisfaction guarantee.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {Object.entries(visa.pricing).map(([tier, details]) => (
                <div
                  key={tier}
                  className={`bg-white rounded-xl shadow-sm border-2 ${
                    tier === "standard" ? "border-blue-600 relative" : "border-gray-200"
                  } overflow-hidden`}
                >
                  {tier === "standard" && (
                    <div className="bg-blue-600 text-white text-center py-2 text-sm font-medium">Most Popular</div>
                  )}

                  <div className="p-6">
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-gray-900 capitalize mb-2">{tier}</h3>
                      <div className="text-3xl font-bold text-gray-900">
                        ${details.price}
                        <span className="text-lg font-normal text-gray-600"> {details.currency}</span>
                      </div>
                      <p className="text-gray-600 mt-2">{details.description}</p>
                    </div>

                    <ul className="space-y-3 mb-6">
                      {details.includes.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                        tier === "standard"
                          ? "bg-blue-600 text-white hover:bg-blue-700"
                          : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                      }`}
                    >
                      Choose {tier}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "faq" && (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Find answers to common questions about {visa.name.toLowerCase()} applications.
              </p>
            </div>

            <div className="space-y-4">
              {visa.faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="font-semibold text-gray-900 pr-4">{faq.question}</h3>
                    {expandedFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>

                  {expandedFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your {visa.name} Application?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Our expert team is here to guide you through every step of the process. Get started today and take the
              first step towards your journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Start Application
              </button>
              <button className="border border-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VisaDetail
