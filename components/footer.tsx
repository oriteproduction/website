import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1 - Branding */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">
              ORITE<span className="text-red-500">PRODUCTION</span>
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Professional multimedia production services in Nepal, delivering high-quality video, photography, and
              branding solutions.
            </p>
          </div>

          {/* Column 2 - Navigation Part 1 */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Navigation</h4>
            <nav className="space-y-3">
              <Link href="/" className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm">
                Home
              </Link>
              <Link
                href="/services"
                className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm"
              >
                Services
              </Link>
              <Link
                href="/portfolio"
                className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm"
              >
                Portfolio
              </Link>
            </nav>
          </div>

          {/* Column 3 - Navigation Part 2 */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">More Pages</h4>
            <nav className="space-y-3">
              <Link
                href="/about"
                className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm"
              >
                Contact Us
              </Link>
              <Link
                href="/aayushtiwari"
                className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm"
              >
                Meet Creative Director
              </Link>
            </nav>
          </div>

          {/* Column 4 - Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>Orchid Colony, Dhungeadda</p>
                  <p>Chandragiri -14, Kathmandu, Nepal</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-red-500 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+977 9843821246</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-red-500 flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@oriteproductions.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-zinc-800 mt-12 pt-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm">© 2025 Orite Production. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
