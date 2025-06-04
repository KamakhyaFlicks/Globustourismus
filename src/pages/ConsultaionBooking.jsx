import { useState } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"
import ThreeBackground from "../components/home/components/ThreeBackground"
import {
  User,
  Mail,
  Phone,
  Calendar,
  Clock,
  Globe,
  Briefcase,
  GraduationCap,
  Heart,
  Plane,
  Building,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  Loader2,
  ArrowLeft,
} from "lucide-react"
// import { Button } from "@/components/ui/button"

const visaTypes = [
  { value: "student", label: "Student Visa", icon: GraduationCap },
  { value: "work", label: "Work Visa", icon: Briefcase },
  { value: "tourist", label: "Tourist Visa", icon: Plane },
  { value: "business", label: "Business Visa", icon: Building },
  { value: "family", label: "Family Visa", icon: Heart },
  { value: "immigration", label: "Immigration", icon: Globe },
]

const countries = [
  "United States",
  "Canada",
  "United Kingdom",
  "Australia",
  "Germany",
  "France",
  "Netherlands",
  "Sweden",
  "Norway",
  "Denmark",
  "Switzerland",
  "New Zealand",
  "Ireland",
  "Italy",
  "Spain",
  "Other",
]

const timeframes = ["Within 1 month", "1-3 months", "3-6 months", "6-12 months", "More than 1 year", "Not sure yet"]

const consultationMethods = [
  { value: "video", label: "Video Call", icon: "📹" },
  { value: "phone", label: "Phone Call", icon: "📞" },
  { value: "in-person", label: "In-Person", icon: "🏢" },
  { value: "email", label: "Email Consultation", icon: "📧" },
]

export default function ConsultationBooking() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    visaType: "",
    destinationCountry: "",
    timeframe: "",
    consultationMethod: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
    hasPassport: "",
    previousApplications: "",
    englishProficiency: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid"
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
    if (!formData.visaType) newErrors.visaType = "Please select a visa type"
    if (!formData.destinationCountry) newErrors.destinationCountry = "Please select a destination country"
    if (!formData.timeframe) newErrors.timeframe = "Please select a timeframe"
    if (!formData.consultationMethod) newErrors.consultationMethod = "Please select a consultation method"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      setSubmitStatus("error")
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // EmailJS configuration
      const templateParams = {
        to_name: "Visa Services Team",
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone,
        country: formData.country,
        city: formData.city,
        visa_type: formData.visaType,
        destination_country: formData.destinationCountry,
        timeframe: formData.timeframe,
        consultation_method: formData.consultationMethod,
        preferred_date: formData.preferredDate,
        preferred_time: formData.preferredTime,
        message: formData.message,
        has_passport: formData.hasPassport,
        previous_applications: formData.previousApplications,
        english_proficiency: formData.englishProficiency,
        submission_date: new Date().toLocaleString(),
      }

      // Replace these with your actual EmailJS credentials
      await emailjs.send(
        "service_x0dp88b", // Replace with your EmailJS service ID
        "template_41oj4r7", // Replace with your EmailJS template ID
        templateParams,
        "ImKxXi2IEhdadZbOd", // Replace with your EmailJS public key
      )

      setSubmitStatus("success")
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        country: "",
        city: "",
        visaType: "",
        destinationCountry: "",
        timeframe: "",
        consultationMethod: "",
        preferredDate: "",
        preferredTime: "",
        message: "",
        hasPassport: "",
        previousApplications: "",
        englishProficiency: "",
      })
    } catch (error) {
      console.error("EmailJS Error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen  py-8 sm:py-12 z-1">
    <ThreeBackground/>
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="mb-6">
            {/* <Button
              variant="ghost"
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button> */}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Book Your Free Consultation</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Take the first step towards your visa journey. Our expert consultants will guide you through the entire
            process.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Expert Guidance</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Same Day Response</span>
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10"
        >
          {submitStatus === "success" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-8 p-6 bg-green-50 border border-green-200 rounded-xl"
            >
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <div>
                  <h3 className="text-lg font-semibold text-green-800">Consultation Booked Successfully!</h3>
                  <p className="text-green-600">
                    Thank you for your submission. Our team will contact you within 24 hours to confirm your
                    consultation.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {submitStatus === "error" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-8 p-6 bg-red-50 border border-red-200 rounded-xl"
            >
              <div className="flex items-center gap-3">
                <AlertCircle className="w-6 h-6 text-red-600" />
                <div>
                  <h3 className="text-lg font-semibold text-red-800">Submission Failed</h3>
                  <p className="text-red-600">
                    There was an error submitting your form. Please check your information and try again.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <User className="w-5 h-5 text-blue-600" />
                Personal Information
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                      errors.firstName ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Enter your first name"
                  />
                  {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                      errors.lastName ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Enter your last name"
                  />
                  {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="your.email@example.com"
                    />
                  </div>
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                        errors.phone ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Current Country</label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Enter your current country"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Enter your city"
                  />
                </div>
              </div>
            </div>

            {/* Visa Information */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <Globe className="w-5 h-5 text-blue-600" />
                Visa Information
              </h2>

              <div className="space-y-6">
                {/* Visa Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Visa Type <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {visaTypes.map((type) => (
                      <motion.label
                        key={type.value}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`relative flex items-center p-4 border rounded-lg cursor-pointer transition-all ${
                          formData.visaType === type.value
                            ? "border-blue-500 bg-blue-50"
                            : "border-gray-300 hover:border-gray-400"
                        }`}
                      >
                        <input
                          type="radio"
                          name="visaType"
                          value={type.value}
                          checked={formData.visaType === type.value}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <type.icon className="w-5 h-5 text-blue-600 mr-3" />
                        <span className="text-sm font-medium">{type.label}</span>
                      </motion.label>
                    ))}
                  </div>
                  {errors.visaType && <p className="mt-2 text-sm text-red-600">{errors.visaType}</p>}
                </div>

                {/* Destination Country */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Destination Country <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="destinationCountry"
                    value={formData.destinationCountry}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                      errors.destinationCountry ? "border-red-500" : "border-gray-300"
                    }`}
                  >
                    <option value="">Select destination country</option>
                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                  {errors.destinationCountry && (
                    <p className="mt-1 text-sm text-red-600">{errors.destinationCountry}</p>
                  )}
                </div>

                {/* Timeframe */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    When do you plan to travel? <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="timeframe"
                    value={formData.timeframe}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                      errors.timeframe ? "border-red-500" : "border-gray-300"
                    }`}
                  >
                    <option value="">Select timeframe</option>
                    {timeframes.map((timeframe) => (
                      <option key={timeframe} value={timeframe}>
                        {timeframe}
                      </option>
                    ))}
                  </select>
                  {errors.timeframe && <p className="mt-1 text-sm text-red-600">{errors.timeframe}</p>}
                </div>
              </div>
            </div>

            {/* Consultation Preferences */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-600" />
                Consultation Preferences
              </h2>

              <div className="space-y-6">
                {/* Consultation Method */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Preferred Consultation Method <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {consultationMethods.map((method) => (
                      <motion.label
                        key={method.value}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`relative flex flex-col items-center p-4 border rounded-lg cursor-pointer transition-all ${
                          formData.consultationMethod === method.value
                            ? "border-blue-500 bg-blue-50"
                            : "border-gray-300 hover:border-gray-400"
                        }`}
                      >
                        <input
                          type="radio"
                          name="consultationMethod"
                          value={method.value}
                          checked={formData.consultationMethod === method.value}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <span className="text-2xl mb-2">{method.icon}</span>
                        <span className="text-sm font-medium text-center">{method.label}</span>
                      </motion.label>
                    ))}
                  </div>
                  {errors.consultationMethod && (
                    <p className="mt-2 text-sm text-red-600">{errors.consultationMethod}</p>
                  )}
                </div>

                {/* Date and Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="date"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time</label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <select
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      >
                        <option value="">Select time</option>
                        <option value="09:00">9:00 AM</option>
                        <option value="10:00">10:00 AM</option>
                        <option value="11:00">11:00 AM</option>
                        <option value="12:00">12:00 PM</option>
                        <option value="13:00">1:00 PM</option>
                        <option value="14:00">2:00 PM</option>
                        <option value="15:00">3:00 PM</option>
                        <option value="16:00">4:00 PM</option>
                        <option value="17:00">5:00 PM</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-blue-600" />
                Additional Information
              </h2>

              <div className="space-y-6">
                {/* Quick Questions */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Do you have a passport?</label>
                    <select
                      name="hasPassport"
                      value={formData.hasPassport}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                      <option value="expired">Expired</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Previous visa applications?</label>
                    <select
                      name="previousApplications"
                      value={formData.previousApplications}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select</option>
                      <option value="none">None</option>
                      <option value="approved">Yes - Approved</option>
                      <option value="rejected">Yes - Rejected</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">English proficiency</label>
                    <select
                      name="englishProficiency"
                      value={formData.englishProficiency}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Select level</option>
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                      <option value="native">Native</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Details or Questions
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us more about your specific situation, questions, or any additional information that might help us prepare for your consultation..."
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="pt-6 border-t border-gray-200"
            >
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Book Free Consultation
                    <Calendar className="w-5 h-5 ml-2" />
                  </>
                )}
              </button>

              <p className="mt-4 text-sm text-gray-500">
                By submitting this form, you agree to our{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Terms of Service
                </a>
                .
              </p>
            </motion.div>
          </form>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <Clock className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Quick Response</h3>
            <p className="text-sm text-gray-600">We'll contact you within 24 hours to confirm your consultation</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Expert Guidance</h3>
            <p className="text-sm text-gray-600">Get personalized advice from certified immigration consultants</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg text-center">
            <Globe className="w-8 h-8 text-purple-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Global Experience</h3>
            <p className="text-sm text-gray-600">Successfully processed visas for 50+ countries worldwide</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
