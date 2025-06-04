import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X, FileText, Globe, Users } from 'lucide-react';
import logo from "../../assets/images/logo.png"; // Adjust the path as necessary
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const visaServices = [
    { name: 'Student Visa', href: '/visa-services/student' },
    { name: 'Tourist Visa', href: '/visa-services/tourist' },
    { name: 'Business Visa', href: '/visa-services/business' },
    { name: 'Work Visa', href: '/visa-services/work' },
    { name: 'Family/Spouse Visa', href: '/visa-services/family' }
  ];

  const countries = [
    { name: 'Canada', href: '/countries/canada' },
    { name: 'USA', href: '/countries/usa' },
    { name: 'UK', href: '/countries/uk' },
    { name: 'Australia', href: '/countries/australia' },
    { name: 'Germany', href: '/countries/germany' },
    { name: 'Russia', href: '/countries/russia' },
    { name: 'Armenia', href: '/countries/armenia' }
  ];

  return (
    <nav className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 w-38">
            <a href="/" className="flex items-center space-x-2">
              <img src={logo} alt="GlobusTourisms Logo" className="w-full object-cover" />
            </a>
          </div> 

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8" ref={dropdownRef}>
            <a href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
              Home
            </a>

            {/* Visa Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('visa')}
                className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Visa Services
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${activeDropdown === 'visa' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'visa' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 animate-in fade-in-0 zoom-in-95 duration-200">
                  {visaServices.map((service) => (
                    <a
                      key={service.name}
                      href={service.href}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
                    >
                      {service.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Countries Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('countries')}
                className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Countries
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${activeDropdown === 'countries' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'countries' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2 animate-in fade-in-0 zoom-in-95 duration-200">
                  {countries.map((country) => (
                    <a
                      key={country.name}
                      href={country.href}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
                    >
                      {country.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="/document-checklist" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
              Document Checklist
            </a>

            <a href="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
              About
            </a>
          </div>

          {/* Book Consultation Button */}
          <div className="hidden lg:block">
            <a
              href="/book-visa-consultation"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-200 shadow-sm hover:shadow-md"
            >
              Book a Consultation
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2 rounded-lg transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 py-4 animate-in slide-in-from-top-2 duration-200">
            <div className="space-y-2">
              <a href="/" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150">
                Home
              </a>

              {/* Mobile Visa Services */}
              <div>
                <button
                  onClick={() => toggleDropdown('mobile-visa')}
                  className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
                >
                  <span>Visa Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'mobile-visa' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'mobile-visa' && (
                  <div className="bg-gray-50 py-2">
                    {visaServices.map((service) => (
                      <a
                        key={service.name}
                        href={service.href}
                        className="block px-8 py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors duration-150"
                      >
                        {service.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Countries */}
              <div>
                <button
                  onClick={() => toggleDropdown('mobile-countries')}
                  className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
                >
                  <span>Countries</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'mobile-countries' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'mobile-countries' && (
                  <div className="bg-gray-50 py-2">
                    {countries.map((country) => (
                      <a
                        key={country.name}
                        href={country.href}
                        className="block px-8 py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors duration-150"
                      >
                        {country.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a href="/document-checklist" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150">
                Document Checklist
              </a>

              <a href="/about" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150">
                About
              </a>

              <div className="px-4 pt-2">
              
                <a
                  href="/book-consultation"
                  className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors duration-200"
                >
                  Book a Consultation
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}