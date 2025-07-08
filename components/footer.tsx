import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - Branding */}
          <div className="text-left">
            <h3 className="text-2xl font-bold mb-4">
              ORITE<span className="text-red-500">PRODUCTION</span>
            </h3>
            <p className="text-gray-300 leading-relaxed text-sm">
              Professional multimedia production services in Nepal, delivering high-quality video, photography, and
              branding solutions.
            </p>
          </div>

          {/* Column 2 - Navigation Part 1 */}
          <div className="text-left">
            <h4 className="text-lg font-semibold mb-6 text-white">Navigation</h4>
            <nav className="space-y-3">
              <div>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  Home
                </Link>
              </div>
              <div>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Services
                </Link>
              </div>
              <div>
                <Link
                  href="/portfolio"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Portfolio
                </Link>
              </div>
            </nav>
          </div>

          {/* Column 3 - Navigation Part 2 */}
          <div className="text-left">
            <h4 className="text-lg font-semibold mb-6 text-white">More Pages</h4>
            <nav className="space-y-3">
              <div>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  About
                </Link>
              </div>
              <div>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                  Contact Us
                </Link>
              </div>
              <div>
                <Link
                  href="/aayushtiwari"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Meet Creative Director
                </Link>
              </div>
            </nav>
          </div>

          {/* Column 4 - Contact */}
          <div className="text-left">
            <h4 className="text-lg font-semibold mb-6 text-white">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 text-sm leading-relaxed">
                  Orchid Colony, Dhungeadda
                  <br />
                  Chandragiri -14, Kathmandu, Nepal
                </div>
              </div>

              <div className="flex items-center">
                <Phone className="h-4 w-4 text-red-500 mr-2 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+977 9843821246</span>
              </div>

              <div className="flex items-center">
                <Mail className="h-4 w-4 text-red-500 mr-2 flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@oriteproductions.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Base - Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">&copy; 2025 Orite Production. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
