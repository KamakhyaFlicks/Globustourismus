
import { useState } from "react"

export default function WhatsAppChat() {
  const [isHovered, setIsHovered] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  // Replace with your actual WhatsApp number (include country code without + sign)
  const whatsappNumber = "+917827092409"
  const message = "Hi! I'm interested in your visa services. Can you help me?"

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <>
      {/* WhatsApp Button */}
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
        <div className="relative">
          {/* Tooltip */}
          {showTooltip && (
            <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg whitespace-nowrap animate-fade-in">
              Chat with us on WhatsApp
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
            </div>
          )}

          {/* Main Button */}
          <button
            onClick={handleWhatsAppClick}
            onMouseEnter={() => {
              setIsHovered(true)
              setShowTooltip(true)
            }}
            onMouseLeave={() => {
              setIsHovered(false)
              setShowTooltip(false)
            }}
            className={`
              relative group
              w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16
              bg-green-500 hover:bg-green-600
              rounded-full shadow-lg hover:shadow-xl
              flex items-center justify-center
              transition-all duration-300 ease-in-out
              transform hover:scale-110 active:scale-95
              ${isHovered ? "animate-bounce" : ""}
            `}
            aria-label="Chat on WhatsApp"
          >
            {/* Ripple Effect */}
            <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20"></div>
            <div className="absolute inset-0 rounded-full bg-green-400 animate-pulse opacity-30"></div>

            {/* WhatsApp Icon */}
            <svg
              className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white relative z-10"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
            </svg>
          </button>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        
        @media (max-width: 640px) {
          .group:hover .animate-bounce {
            animation: bounce 1s infinite;
          }
        }
        
        /* Pulse animation for attention */
        @keyframes pulse-ring {
          0% {
            transform: scale(0.8);
            opacity: 1;
          }
          100% {
            transform: scale(2.4);
            opacity: 0;
          }
        }
        
        .animate-pulse-ring {
          animation: pulse-ring 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite;
        }
      `}</style>
    </>
  )
}
