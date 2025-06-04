"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  FileText,
  Download,
  CheckCircle,
  AlertCircle,
  Info,
  Search,
  Filter,
  ArrowLeft,
  User,
  GraduationCap,
  Briefcase,
  Heart,
  Plane,
  Building,
  Globe,
  Calendar,
  CreditCard,
  Shield,
  Camera,
  Award,
  Stethoscope,
  Home,
  Users,
  BookOpen,
  Banknote,
  Eye,
  EyeOff,
  Phone,
} from "lucide-react"

const visaTypes = [
  {
    id: "student",
    label: "Student Visa",
    icon: GraduationCap,
    color: "bg-blue-500",
    description: "For academic studies and educational programs",
  },
  {
    id: "work",
    label: "Work Visa",
    icon: Briefcase,
    color: "bg-green-500",
    description: "For employment and professional opportunities",
  },
  {
    id: "tourist",
    label: "Tourist Visa",
    icon: Plane,
    color: "bg-purple-500",
    description: "For leisure travel and sightseeing",
  },
  {
    id: "business",
    label: "Business Visa",
    icon: Building,
    color: "bg-orange-500",
    description: "For business meetings and conferences",
  },
  {
    id: "family",
    label: "Family Visa",
    icon: Heart,
    color: "bg-pink-500",
    description: "For family reunification and sponsorship",
  },
  {
    id: "immigration",
    label: "Immigration",
    icon: Globe,
    color: "bg-indigo-500",
    description: "For permanent residency and citizenship",
  },
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
  "All Countries",
]

const documentCategories = {
  personal: {
    title: "Personal Documents",
    icon: User,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  financial: {
    title: "Financial Documents",
    icon: CreditCard,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  educational: {
    title: "Educational Documents",
    icon: BookOpen,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  professional: {
    title: "Professional Documents",
    icon: Award,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
  medical: {
    title: "Medical Documents",
    icon: Stethoscope,
    color: "text-red-600",
    bgColor: "bg-red-50",
  },
  additional: {
    title: "Additional Documents",
    icon: FileText,
    color: "text-gray-600",
    bgColor: "bg-gray-50",
  },
}

const documentDatabase = {
  student: {
    personal: [
      {
        name: "Valid Passport",
        description: "Must be valid for at least 6 months beyond intended stay",
        required: true,
        icon: Shield,
        tips: ["Check expiration date", "Ensure blank pages available", "Make copies of all pages"],
      },
      {
        name: "Passport Photos",
        description: "Recent passport-sized photographs (usually 2-6 photos)",
        required: true,
        icon: Camera,
        tips: ["Follow specific country requirements", "White background", "No glasses or headwear unless religious"],
      },
      {
        name: "Birth Certificate",
        description: "Official birth certificate with apostille/legalization",
        required: true,
        icon: FileText,
        tips: ["Get certified translation if not in English", "Apostille required for some countries"],
      },
      {
        name: "Police Clearance Certificate",
        description: "Criminal background check from home country",
        required: false,
        icon: Shield,
        tips: ["Valid for 6 months", "May need from multiple countries if lived abroad"],
      },
    ],
    financial: [
      {
        name: "Bank Statements",
        description: "Last 3-6 months of bank statements showing sufficient funds",
        required: true,
        icon: Banknote,
        tips: ["Show consistent balance", "Avoid large deposits before application", "Include all accounts"],
      },
      {
        name: "Scholarship Letter",
        description: "Official scholarship award letter if applicable",
        required: false,
        icon: Award,
        tips: ["Include scholarship amount", "Duration of scholarship", "Renewal conditions"],
      },
      {
        name: "Financial Sponsorship",
        description: "Sponsor's financial documents and affidavit of support",
        required: false,
        icon: Users,
        tips: ["Sponsor's bank statements", "Employment letter", "Tax returns"],
      },
      {
        name: "Education Loan Documents",
        description: "Loan approval letter and terms from financial institution",
        required: false,
        icon: CreditCard,
        tips: ["Loan amount should cover tuition and living expenses", "Include repayment terms"],
      },
    ],
    educational: [
      {
        name: "Academic Transcripts",
        description: "Official transcripts from all previous educational institutions",
        required: true,
        icon: BookOpen,
        tips: ["Sealed envelopes from institution", "Certified translations required", "Include grading scale"],
      },
      {
        name: "Degree Certificates",
        description: "Original degree/diploma certificates",
        required: true,
        icon: Award,
        tips: [
          "Apostille may be required",
          "Certified translations",
          "Include provisional certificates if final not available",
        ],
      },
      {
        name: "Letter of Acceptance",
        description: "Official acceptance letter from educational institution",
        required: true,
        icon: FileText,
        tips: ["Must be from recognized institution", "Include course details", "Start date and duration"],
      },
      {
        name: "English Proficiency Test",
        description: "IELTS, TOEFL, PTE, or other accepted test scores",
        required: true,
        icon: BookOpen,
        tips: ["Check minimum score requirements", "Valid for 2 years", "Some institutions may waive requirement"],
      },
      {
        name: "Statement of Purpose",
        description: "Personal statement explaining study goals and career plans",
        required: true,
        icon: FileText,
        tips: ["Be specific about career goals", "Explain choice of country/institution", "Keep within word limit"],
      },
    ],
    medical: [
      {
        name: "Medical Examination",
        description: "Health checkup from approved panel physician",
        required: true,
        icon: Stethoscope,
        tips: ["Use only approved doctors", "Valid for 12 months", "Include chest X-ray and blood tests"],
      },
      {
        name: "Vaccination Records",
        description: "Immunization history and required vaccinations",
        required: false,
        icon: Shield,
        tips: ["Check country-specific requirements", "COVID-19 vaccination may be required"],
      },
    ],
    additional: [
      {
        name: "Study Plan",
        description: "Detailed plan of studies and future career goals",
        required: false,
        icon: Calendar,
        tips: ["Include semester-wise course plan", "Career objectives", "Return plans to home country"],
      },
      {
        name: "Accommodation Proof",
        description: "Dormitory booking or rental agreement",
        required: false,
        icon: Home,
        tips: ["University accommodation preferred", "Include address and contact details"],
      },
    ],
  },
  work: {
    personal: [
      {
        name: "Valid Passport",
        description: "Must be valid for at least 6 months beyond intended stay",
        required: true,
        icon: Shield,
        tips: ["Check expiration date", "Ensure blank pages available", "Make copies of all pages"],
      },
      {
        name: "Passport Photos",
        description: "Recent passport-sized photographs",
        required: true,
        icon: Camera,
        tips: ["Follow specific country requirements", "Professional appearance"],
      },
      {
        name: "Police Clearance Certificate",
        description: "Criminal background check from home country",
        required: true,
        icon: Shield,
        tips: ["Valid for 6 months", "May need from multiple countries"],
      },
    ],
    professional: [
      {
        name: "Job Offer Letter",
        description: "Official employment offer from sponsoring employer",
        required: true,
        icon: Briefcase,
        tips: ["Include salary details", "Job description", "Start date"],
      },
      {
        name: "Employment Contract",
        description: "Signed employment agreement",
        required: true,
        icon: FileText,
        tips: ["Include terms and conditions", "Duration of employment", "Benefits package"],
      },
      {
        name: "Resume/CV",
        description: "Updated professional resume",
        required: true,
        icon: User,
        tips: ["Highlight relevant experience", "Include all employment history", "Professional format"],
      },
      {
        name: "Work Experience Letters",
        description: "Employment verification from previous employers",
        required: true,
        icon: Award,
        tips: ["Include job title and duration", "Salary information", "Company letterhead"],
      },
      {
        name: "Professional Qualifications",
        description: "Certificates, licenses, and professional credentials",
        required: false,
        icon: Award,
        tips: ["Include professional licenses", "Certification from professional bodies", "Skills assessments"],
      },
    ],
    educational: [
      {
        name: "Educational Certificates",
        description: "Degree certificates and academic transcripts",
        required: true,
        icon: BookOpen,
        tips: ["Apostille may be required", "Certified translations", "Include all relevant qualifications"],
      },
      {
        name: "Skills Assessment",
        description: "Professional skills evaluation by recognized authority",
        required: false,
        icon: Award,
        tips: ["Required for certain professions", "Valid assessment authority", "Include all supporting documents"],
      },
    ],
    financial: [
      {
        name: "Bank Statements",
        description: "Recent bank statements showing financial stability",
        required: true,
        icon: Banknote,
        tips: ["Last 3-6 months", "Show sufficient funds", "Include all accounts"],
      },
      {
        name: "Tax Returns",
        description: "Income tax returns from previous years",
        required: false,
        icon: FileText,
        tips: ["Last 2-3 years", "Show income history", "Include all sources of income"],
      },
    ],
    medical: [
      {
        name: "Medical Examination",
        description: "Health checkup from approved panel physician",
        required: true,
        icon: Stethoscope,
        tips: ["Use only approved doctors", "Valid for 12 months", "Include required tests"],
      },
    ],
  },
  tourist: {
    personal: [
      {
        name: "Valid Passport",
        description: "Must be valid for at least 6 months beyond travel dates",
        required: true,
        icon: Shield,
        tips: ["Check expiration date", "Ensure blank pages available"],
      },
      {
        name: "Passport Photos",
        description: "Recent passport-sized photographs",
        required: true,
        icon: Camera,
        tips: ["Follow embassy requirements", "Recent photos only"],
      },
    ],
    financial: [
      {
        name: "Bank Statements",
        description: "Last 3 months bank statements",
        required: true,
        icon: Banknote,
        tips: ["Show sufficient funds for trip", "Consistent balance", "Include all accounts"],
      },
      {
        name: "Employment Letter",
        description: "Letter from employer confirming employment and leave",
        required: true,
        icon: Briefcase,
        tips: ["Include salary details", "Confirm return date", "Company letterhead"],
      },
    ],
    additional: [
      {
        name: "Travel Itinerary",
        description: "Detailed travel plan including flights and accommodation",
        required: true,
        icon: Plane,
        tips: ["Include all destinations", "Hotel bookings", "Return flight tickets"],
      },
      {
        name: "Travel Insurance",
        description: "Comprehensive travel insurance coverage",
        required: true,
        icon: Shield,
        tips: ["Minimum coverage amount", "Valid for entire trip", "Include medical coverage"],
      },
      {
        name: "Invitation Letter",
        description: "Letter from host or tour operator",
        required: false,
        icon: FileText,
        tips: ["Include host details", "Purpose of visit", "Accommodation arrangements"],
      },
    ],
  },
  business: {
    personal: [
      {
        name: "Valid Passport",
        description: "Must be valid for at least 6 months",
        required: true,
        icon: Shield,
        tips: ["Check expiration date", "Ensure blank pages available"],
      },
      {
        name: "Passport Photos",
        description: "Recent passport-sized photographs",
        required: true,
        icon: Camera,
        tips: ["Professional appearance", "Follow embassy requirements"],
      },
    ],
    professional: [
      {
        name: "Business Invitation Letter",
        description: "Invitation from business partner or conference organizer",
        required: true,
        icon: Building,
        tips: ["Include meeting purpose", "Duration of visit", "Host company details"],
      },
      {
        name: "Company Registration",
        description: "Business registration documents",
        required: true,
        icon: FileText,
        tips: ["Current registration certificate", "Company profile", "Business license"],
      },
      {
        name: "Employment Verification",
        description: "Letter confirming employment and business purpose",
        required: true,
        icon: Briefcase,
        tips: ["Include job title", "Company authorization", "Business trip approval"],
      },
    ],
    financial: [
      {
        name: "Bank Statements",
        description: "Personal and/or company bank statements",
        required: true,
        icon: Banknote,
        tips: ["Last 3-6 months", "Show financial stability", "Company accounts if applicable"],
      },
      {
        name: "Business Financial Records",
        description: "Company financial statements and tax returns",
        required: false,
        icon: CreditCard,
        tips: ["Annual financial statements", "Tax compliance certificates", "Audited accounts"],
      },
    ],
    additional: [
      {
        name: "Conference Registration",
        description: "Registration confirmation for business events",
        required: false,
        icon: Calendar,
        tips: ["Include event details", "Registration receipt", "Event schedule"],
      },
      {
        name: "Travel Insurance",
        description: "Business travel insurance coverage",
        required: true,
        icon: Shield,
        tips: ["Adequate coverage amount", "Business activity coverage", "Medical insurance"],
      },
    ],
  },
  family: {
    personal: [
      {
        name: "Valid Passport",
        description: "Must be valid for at least 6 months",
        required: true,
        icon: Shield,
        tips: ["Check expiration date", "Ensure blank pages available"],
      },
      {
        name: "Passport Photos",
        description: "Recent passport-sized photographs",
        required: true,
        icon: Camera,
        tips: ["Family photos may be required", "Follow specific requirements"],
      },
      {
        name: "Birth Certificate",
        description: "Official birth certificate",
        required: true,
        icon: FileText,
        tips: ["Apostille required", "Certified translation", "Original document"],
      },
      {
        name: "Marriage Certificate",
        description: "Official marriage certificate if applicable",
        required: false,
        icon: Heart,
        tips: ["Apostille required", "Certified translation", "Recent certificate"],
      },
    ],
    additional: [
      {
        name: "Relationship Proof",
        description: "Evidence of family relationship",
        required: true,
        icon: Users,
        tips: ["Photos together", "Communication records", "Joint documents"],
      },
      {
        name: "Sponsor Documents",
        description: "Sponsoring family member's documents",
        required: true,
        icon: User,
        tips: ["Sponsor's passport copy", "Residence proof", "Financial documents"],
      },
      {
        name: "Affidavit of Support",
        description: "Legal commitment to provide financial support",
        required: true,
        icon: FileText,
        tips: ["Notarized document", "Include financial commitment", "Legal format required"],
      },
    ],
    financial: [
      {
        name: "Sponsor's Financial Documents",
        description: "Bank statements and income proof of sponsor",
        required: true,
        icon: Banknote,
        tips: ["Last 6 months statements", "Employment letter", "Tax returns"],
      },
    ],
  },
  immigration: {
    personal: [
      {
        name: "Valid Passport",
        description: "Must be valid for processing period",
        required: true,
        icon: Shield,
        tips: ["Check expiration date", "Ensure blank pages available"],
      },
      {
        name: "Birth Certificate",
        description: "Official birth certificate with apostille",
        required: true,
        icon: FileText,
        tips: ["Apostille required", "Certified translation", "Original document"],
      },
      {
        name: "Police Clearance Certificate",
        description: "From all countries lived in for 6+ months",
        required: true,
        icon: Shield,
        tips: ["Valid for 12 months", "All countries of residence", "FBI clearance if applicable"],
      },
      {
        name: "Medical Examination",
        description: "Comprehensive medical exam by panel physician",
        required: true,
        icon: Stethoscope,
        tips: ["Approved panel physician only", "Valid for 12 months", "Include all required tests"],
      },
    ],
    educational: [
      {
        name: "Educational Credentials",
        description: "All educational certificates and transcripts",
        required: true,
        icon: BookOpen,
        tips: ["Credential evaluation required", "Apostille certificates", "Include all qualifications"],
      },
      {
        name: "Language Test Results",
        description: "English/French proficiency test scores",
        required: true,
        icon: BookOpen,
        tips: ["IELTS, CELPIP, TEF accepted", "Valid for 2 years", "Meet minimum requirements"],
      },
    ],
    professional: [
      {
        name: "Work Experience Letters",
        description: "Employment verification from all employers",
        required: true,
        icon: Briefcase,
        tips: ["Include job duties", "Duration of employment", "Salary information"],
      },
      {
        name: "Professional Licenses",
        description: "Professional certifications and licenses",
        required: false,
        icon: Award,
        tips: ["Relevant to occupation", "Current and valid", "Professional body certification"],
      },
    ],
    financial: [
      {
        name: "Proof of Funds",
        description: "Evidence of sufficient settlement funds",
        required: true,
        icon: Banknote,
        tips: ["Meet minimum requirements", "Liquid funds", "Source of funds explanation"],
      },
    ],
  },
}

export default function DocumentChecklist() {
  const [selectedVisa, setSelectedVisa] = useState("student")
  const [selectedCountry, setSelectedCountry] = useState("All Countries")
  const [searchTerm, setSearchTerm] = useState("")
  const [checkedDocuments, setCheckedDocuments] = useState({})
  const [expandedCategories, setExpandedCategories] = useState({
    personal: true,
    financial: true,
    educational: true,
    professional: true,
    medical: true,
    additional: true,
  })
  const [showOnlyRequired, setShowOnlyRequired] = useState(false)

  const currentDocuments = documentDatabase[selectedVisa] || {}

  const toggleDocument = (category, docName) => {
    const key = `${category}-${docName}`
    setCheckedDocuments((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  const toggleCategory = (category) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }))
  }

  const getProgress = () => {
    let total = 0
    let checked = 0

    Object.entries(currentDocuments).forEach(([category, documents]) => {
      documents.forEach((doc) => {
        total++
        if (checkedDocuments[`${category}-${doc.name}`]) {
          checked++
        }
      })
    })

    return total > 0 ? Math.round((checked / total) * 100) : 0
  }

  const filteredDocuments = (documents) => {
    if (!documents) return []

    return documents.filter((doc) => {
      const matchesSearch =
        doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesFilter = !showOnlyRequired || doc.required

      return matchesSearch && matchesFilter
    })
  }

  const downloadChecklist = () => {
    const visaType = visaTypes.find((v) => v.id === selectedVisa)?.label || selectedVisa
    let content = `DOCUMENT CHECKLIST - ${visaType.toUpperCase()}\n`
    content += `Country: ${selectedCountry}\n`
    content += `Generated on: ${new Date().toLocaleDateString()}\n\n`

    Object.entries(currentDocuments).forEach(([category, documents]) => {
      const categoryInfo = documentCategories[category]
      content += `${categoryInfo.title.toUpperCase()}\n`
      content += "=".repeat(categoryInfo.title.length) + "\n\n"

      documents.forEach((doc) => {
        content += `□ ${doc.name} ${doc.required ? "(REQUIRED)" : "(OPTIONAL)"}\n`
        content += `   ${doc.description}\n`
        if (doc.tips && doc.tips.length > 0) {
          content += `   Tips: ${doc.tips.join(", ")}\n`
        }
        content += "\n"
      })
      content += "\n"
    })

    const blob = new Blob([content], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `${visaType.replace(/\s+/g, "_")}_Document_Checklist.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-8 sm:py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="mb-6">
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </button>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Document Checklist</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Complete guide to all documents required for your visa application. Select your visa type and get a
            personalized checklist.
          </p>
        </motion.div>

        {/* Visa Type Selection */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-8"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Select Visa Type</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {visaTypes.map((visa) => (
              <motion.button
                key={visa.id}
                onClick={() => setSelectedVisa(visa.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                  selectedVisa === visa.id
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300 bg-white"
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-10 h-10 ${visa.color} rounded-lg flex items-center justify-center`}>
                    <visa.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900">{visa.label}</h3>
                </div>
                <p className="text-sm text-gray-600">{visa.description}</p>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Filters and Controls */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-start lg:items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search documents..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Country Filter */}
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>

              {/* Required Only Filter */}
              <button
                onClick={() => setShowOnlyRequired(!showOnlyRequired)}
                className={`px-4 py-3 rounded-lg border transition-colors flex items-center gap-2 ${
                  showOnlyRequired
                    ? "bg-blue-50 border-blue-500 text-blue-700"
                    : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                <Filter className="w-4 h-4" />
                Required Only
              </button>
            </div>

            {/* Progress and Download */}
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">{getProgress()}%</div>
                <div className="text-xs text-gray-500">Complete</div>
              </div>

              <button
                onClick={downloadChecklist}
                className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Download className="w-4 h-4" />
                Download
              </button>
            </div>
          </div>
        </motion.div>

        {/* Document Categories */}
        <div className="space-y-6">
          {Object.entries(currentDocuments).map(([categoryKey, documents], categoryIndex) => {
            const category = documentCategories[categoryKey]
            const filteredDocs = filteredDocuments(documents)

            if (filteredDocs.length === 0) return null

            return (
              <motion.div
                key={categoryKey}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + categoryIndex * 0.1 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                {/* Category Header */}
                <button
                  onClick={() => toggleCategory(categoryKey)}
                  className={`w-full p-6 sm:p-8 ${category.bgColor} border-b border-gray-200 text-left transition-colors hover:opacity-80`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 bg-white rounded-lg flex items-center justify-center`}>
                        <category.icon className={`w-5 h-5 ${category.color}`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                        <p className="text-sm text-gray-600">
                          {filteredDocs.length} document{filteredDocs.length !== 1 ? "s" : ""}
                          {filteredDocs.filter((doc) => doc.required).length > 0 &&
                            ` • ${filteredDocs.filter((doc) => doc.required).length} required`}
                        </p>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedCategories[categoryKey] ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {expandedCategories[categoryKey] ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </motion.div>
                  </div>
                </button>

                {/* Documents List */}
                <AnimatePresence>
                  {expandedCategories[categoryKey] && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 sm:p-8 space-y-6">
                        {filteredDocs.map((document, docIndex) => (
                          <motion.div
                            key={document.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: docIndex * 0.1 }}
                            className="border border-gray-200 rounded-xl p-4 sm:p-6 hover:shadow-md transition-shadow"
                          >
                            <div className="flex items-start gap-4">
                              {/* Checkbox */}
                              <button
                                onClick={() => toggleDocument(categoryKey, document.name)}
                                className="mt-1 flex-shrink-0"
                              >
                                <div
                                  className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-colors ${
                                    checkedDocuments[`${categoryKey}-${document.name}`]
                                      ? "bg-blue-600 border-blue-600"
                                      : "border-gray-300 hover:border-blue-400"
                                  }`}
                                >
                                  {checkedDocuments[`${categoryKey}-${document.name}`] && (
                                    <CheckCircle className="w-4 h-4 text-white" />
                                  )}
                                </div>
                              </button>

                              {/* Document Info */}
                              <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between gap-4 mb-2">
                                  <div className="flex items-center gap-3">
                                    <document.icon className="w-5 h-5 text-gray-600 flex-shrink-0" />
                                    <h4 className="font-semibold text-gray-900">{document.name}</h4>
                                  </div>

                                  <div className="flex items-center gap-2 flex-shrink-0">
                                    {document.required ? (
                                      <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-full">
                                        Required
                                      </span>
                                    ) : (
                                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                                        Optional
                                      </span>
                                    )}
                                  </div>
                                </div>

                                <p className="text-gray-600 mb-3">{document.description}</p>

                                {/* Tips */}
                                {document.tips && document.tips.length > 0 && (
                                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                                    <div className="flex items-start gap-2">
                                      <Info className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                      <div>
                                        <h5 className="text-sm font-medium text-blue-900 mb-1">Tips:</h5>
                                        <ul className="text-sm text-blue-800 space-y-1">
                                          {document.tips.map((tip, tipIndex) => (
                                            <li key={tipIndex} className="flex items-start gap-1">
                                              <span className="text-blue-600 mt-1">•</span>
                                              <span>{tip}</span>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

        {/* Important Notes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 bg-yellow-50 border border-yellow-200 rounded-2xl p-6 sm:p-8"
        >
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-yellow-900 mb-2">Important Notes</h3>
              <ul className="text-yellow-800 space-y-2 text-sm">
                <li>• Document requirements may vary by country and individual circumstances</li>
                <li>• Always verify current requirements with the relevant embassy or consulate</li>
                <li>• Processing times and additional documents may be required</li>
                <li>• Ensure all documents are translated and apostilled as required</li>
                <li>• Keep original documents safe and submit only certified copies when possible</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-6 sm:p-8 text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-4">Need Help with Your Documents?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Our expert consultants can help you prepare and review all your documents to ensure a successful visa
            application.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/consultation"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Free Consultation
            </a>
            <button className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
              <Phone className="w-5 h-5 mr-2" />
              Call Expert Now
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
