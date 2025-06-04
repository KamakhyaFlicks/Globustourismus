"use client"

import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import {
  ArrowLeft,
  MapPin,
  Clock,
  DollarSign,
  FileText,
  Users,
  Globe,
  Phone,
  Mail,
  AlertCircle,
  CheckCircle,
  Calendar,
  CreditCard,
} from "lucide-react"
import countryData from "../data/countrydata.json"

const CountryDetail = () => {
  const { id } = useParams()
  const [country, setCountry] = useState(null)
  const [activeTab, setActiveTab] = useState("overview")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const countryInfo = countryData.countries[id]
    if (countryInfo) {
      setCountry(countryInfo)
    }
    setLoading(false)
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (!country) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Country Not Found</h1>
          <p className="text-gray-600 mb-8">The   you're looking for doesn't exist in our database.</p>
          <Link
            to="/countries"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            View All Countries
          </Link>
        </div>
      </div>
    )
  }

  const tabs = [
    { id: "overview", label: "Overview", icon: Globe },
    { id: "visas", label: "Visa Types", icon: FileText },
    { id: "documents", label: "Documents", icon: CheckCircle },
    { id: "immigration", label: "Immigration", icon: Users },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link
            to="/countries"
            className="inline-flex items-center text-blue-100 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Countries
          </Link>

          <div className="flex items-center space-x-6">
            <div className="text-6xl">{country.flag}</div>
            <div>
              <h1 className="text-4xl font-bold mb-2">{country.name}</h1>
              <div className="flex items-center space-x-6 text-blue-100">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  {country.capital}
                </div>
                <div className="flex items-center">
                  <Globe className="w-5 h-5 mr-2" />
                  {country.continent}
                </div>
                <div className="flex items-center">
                  <DollarSign className="w-5 h-5 mr-2" />
                  {country.currency}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            {tabs.map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  <Icon className="w-5 h-5 mr-2" />
                  {tab.label}
                </button>
              )
            })}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* Description */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">About {country.name}</h2>
              <p className="text-gray-700 leading-relaxed text-lg">{country.description}</p>
            </div>

            {/* Key Facts */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Facts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {country.keyFacts.map((fact, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{fact}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Destinations */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Destinations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {country.popularDestinations.map((destination, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-gray-900">{destination.split(" - ")[0]}</h3>
                        <p className="text-gray-600 text-sm mt-1">{destination.split(" - ")[1]}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Embassy Information */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Embassy Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Globe className="w-5 h-5 text-blue-500 mr-3" />
                    <div>
                      <span className="font-medium text-gray-900">Website:</span>
                      <span className="text-gray-700 ml-2">{country.embassyInfo.website}</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-blue-500 mr-3" />
                    <div>
                      <span className="font-medium text-gray-900">Email:</span>
                      <span className="text-gray-700 ml-2">{country.embassyInfo.contactEmail}</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-blue-500 mr-3" />
                    <div>
                      <span className="font-medium text-gray-900">Emergency:</span>
                      <span className="text-gray-700 ml-2">{country.embassyInfo.emergencyContact}</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <FileText className="w-5 h-5 text-blue-500 mr-3" />
                    <div>
                      <span className="font-medium text-gray-900">Processing Center:</span>
                      <span className="text-gray-700 ml-2">{country.embassyInfo.processingCenter}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "visas" && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Visa Types</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {country.visaTypes.map((visa, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{visa.type}</h3>
                    <p className="text-gray-600 mb-4">{visa.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 text-gray-400 mr-2" />
                          <span className="text-sm text-gray-600">Duration:</span>
                        </div>
                        <span className="text-sm font-medium text-gray-900">{visa.duration}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                          <span className="text-sm text-gray-600">Processing:</span>
                        </div>
                        <span className="text-sm font-medium text-gray-900">{visa.processingTime}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <CreditCard className="w-4 h-4 text-gray-400 mr-2" />
                          <span className="text-sm text-gray-600">Fee:</span>
                        </div>
                        <span className="text-sm font-medium text-green-600">{visa.fee}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "documents" && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Required Documents</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {country.documentsRequired.map((document, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{document}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Important Notes */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <div className="flex items-start">
                <AlertCircle className="w-6 h-6 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-amber-800 mb-3">Important Notes</h3>
                  <ul className="space-y-2">
                    {country.importantNotes.map((note, index) => (
                      <li key={index} className="text-amber-700">
                        • {note}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "immigration" && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Immigration Programs</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {country.immigrationPrograms.map((program, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start">
                      <Users className="w-5 h-5 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{program}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey to {country.name}?</h3>
              <p className="text-blue-100 mb-6">
                Our expert consultants are here to guide you through every step of the process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/consultation"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Book Consultation
                </Link>
                <Link
                  to="/contact"
                  className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CountryDetail
