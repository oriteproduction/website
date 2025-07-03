import Link from "next/link"
import { Facebook, Instagram, Youtube, Mail, MapPin, Phone, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              ORITE<span className="text-red-500">PRODUCTION</span>
            </h3>
            <p className="text-gray-400 mb-6">
              Professional multimedia production services in Nepal, delivering high-quality video, photography, and
              branding solutions.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/utdaayush/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.instagram.com/orite.production.np/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.youtube.com/@utdaayush"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/oriteproduction/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://linktr.ee/utdaayush"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.953 15.066c-.08.163-.08.324-.08.486.08.517.45.938.93.938.16 0 .32-.04.48-.12.08-.08.16-.12.24-.2.08-.08.16-.16.16-.24.08-.08.08-.16.08-.24.08-.16.08-.32.08-.44 0-.2-.08-.36-.16-.52-.08-.16-.24-.24-.4-.36-.16-.08-.32-.16-.48-.16-.08 0-.16.04-.24.04-.08 0-.16.04-.24.08-.08.04-.16.08-.16.12-.08.08-.16.12-.16.2-.08.12-.08.24-.08.36-.08.04-.08.12-.08.2.08.04.08.12.08.2zm8.5-10.562c-.08-.04-.16-.08-.32-.08-.08 0-.16.04-.24.04-.08.04-.16.04-.24.08-.08.04-.16.08-.16.16-.08.04-.08.12-.16.2-.08.08-.08.16-.08.24v.12c0 .08 0 .16.08.24 0 .08.08.16.08.24.08.08.08.16.16.2.08.08.16.12.24.16.08.04.16.08.24.08.08 0 .16.04.24.04.08 0 .16-.04.24-.04.08 0 .16-.04.24-.08.08-.04.16-.08.24-.16.08-.04.08-.12.16-.2.08-.08.08-.16.08-.24 0-.04.08-.12.08-.2 0-.08 0-.16-.08-.24 0-.08-.08-.16-.08-.24-.08-.08-.08-.16-.16-.2-.08-.08-.16-.12-.24-.16-.08.04-.16 0-.24 0zm-5.027-1.142c-.08 0-.16 0-.24.04-.08 0-.16.04-.24.08-.08.04-.16.08-.24.16-.08.08-.08.16-.16.24-.08.08-.08.16-.08.24-.08.08-.08.16-.08.24 0 .08 0 .16.08.24 0 .08.08.16.08.24.08.08.08.16.16.24.08.08.16.12.24.16.08.04.16.08.24.08.08 0 .16.04.24.04.08 0 .16 0 .24-.04.08 0 .16-.04.24-.08.08-.04.16-.08.24-.16.08-.08.08-.16.16-.24 0-.08.08-.16.08-.24.08-.08.08-.16.08-.24 0-.08 0-.16-.08-.24 0-.08-.08-.16-.08-.24-.08-.08-.08-.16-.16-.24-.08-.08-.16-.12-.24-.16-.08-.04-.16-.08-.24-.08-.08-.04-.16-.04-.24-.04zm-6.332 3.971c-.08 0-.16 0-.24.04-.08 0-.16.04-.24.08-.08.04-.16.08-.24.16-.08.08-.08.16-.16.24-.08.08-.08.16-.08.24-.08.08-.08.16-.08.24 0 .08 0 .16.08.24 0 .08.08.16.08.24.08.08.08.16.16.24.08.08.16.12.24.16.08.04.16.08.24.08.08 0 .16.04.24.04.08 0 .16 0 .24-.04.08 0 .16-.04.24-.08.08-.04.16-.08.24-.16.08-.08.08-.16.16-.24 0-.08.08-.16.08-.24.08-.08.08-.16.08-.24 0-.08 0-.16-.08-.24 0-.08-.08-.16-.08-.24-.08-.08-.08-.16-.16-.24-.08-.08-.16-.12-.24-.16-.08-.04-.16-.08-.24-.08-.08-.04-.16-.04-.24-.04zm11.36 3.971c-.08 0-.16 0-.24.04-.08 0-.16.04-.24.08-.08.04-.16.08-.24.16-.08.08-.08.16-.16.24-.08.08-.08.16-.08.24-.08.08-.08.16-.08.24 0 .08 0 .16.08.24 0 .08.08.16.08.24.08.08.08.16.16.24.08.08.16.12.24.16.08.04.16.08.24.08.08 0 .16.04.24.04.08 0 .16 0 .24-.04.08 0 .16-.04.24-.08.08-.04.16-.08.24-.16.08-.08.08-.16.16-.24 0-.08.08-.16.08-.24.08-.08.08-.16.08-.24 0-.08 0-.16-.08-.24 0-.08-.08-.16-.08-.24-.08-.08-.08-.16-.16-.24-.08-.08-.16-.12-.24-.16-.08-.04-.16-.08-.24-.08-.08-.04-.16-.04-.24-.04zm-5.666 0c-.08 0-.16 0-.24.04-.08 0-.16.04-.24.08-.08.04-.16.08-.24.16-.08.08-.08.16-.16.24-.08.08-.08.16-.08.24-.08.08-.08.16-.08.24 0 .08 0 .16.08.24 0 .08.08.16.08.24.08.08.08.16.16.24.08.08.16.12.24.16.08.04.16.08.24.08.08 0 .16.04.24.04.08 0 .16 0 .24-.04.08 0 .16-.04.24-.08.08-.04.16-.08.24-.16.08-.08.08-.16.16-.24 0-.08.08-.16.08-.24.08-.08.08-.16.08-.24 0-.08 0-.16-.08-.24 0-.08-.08-.16-.08-.24-.08-.08-.08-.16-.16-.24-.08-.08-.16-.12-.24-.16-.08-.04-.16-.08-.24-.08-.08-.04-.16-.04-.24-.04zm-5.666 0c-.08 0-.16 0-.24.04-.08 0-.16.04-.24.08-.08.04-.16.08-.24.16-.08.08-.08.16-.16.24-.08.08-.08.16-.08.24-.08.08-.08.16-.08.24 0 .08 0 .16.08.24 0 .08.08.16.08.24.08.08.08.16.16.24.08.08.16.12.24.16.08.04.16.08.24.08.08 0 .16.04.24.04.08 0 .16 0 .24-.04.08 0 .16-.04.24-.08.08-.04.16-.08.24-.16.08-.08.08-.16.16-.24 0-.08.08-.16.08-.24.08-.08.08-.16.08-.24 0-.08 0-.16-.08-.24 0-.08-.08-.16-.08-.24-.08-.08-.08-.16-.16-.24-.08-.08-.16-.12-.24-.16-.08-.04-.16-.08-.24-.08-.08-.04-.16-.04-.24-.04zm2.833-3.97c-.08 0-.16 0-.24.04-.08 0-.16.04-.24.08-.08.04-.16.08-.24.16-.08.08-.08.16-.16.24-.08.08-.08.16-.08.24-.08.08-.08.16-.08.24 0 .08 0 .16.08.24 0 .08.08.16.08.24.08.08.08.16.16.24.08.08.16.12.24.16.08.04.16.08.24.08.08 0 .16.04.24.04.08 0 .16 0 .24-.04.08 0 .16-.04.24-.08.08-.04.16-.08.24-.16.08-.08.08-.16.16-.24 0-.08.08-.16.08-.24.08-.08.08-.16.08-.24 0-.08 0-.16-.08-.24 0-.08-.08-.16-.08-.24-.08-.08-.08-.16-.16-.24-.08-.08-.16-.12-.24-.16-.08-.04-.16-.08-.24-.08-.08-.04-.16-.04-.24-.04zm0-3.971c-.08 0-.16 0-.24.04-.08 0-.16.04-.24.08-.08.04-.16.08-.24.16-.08.08-.08.16-.16.24-.08.08-.08.16-.08.24-.08.08-.08.16-.08.24 0 .08 0 .16.08.24 0 .08.08.16.08.24.08.08.08.16.16.24.08.08.16.12.24.16.08.04.16.08.24.08.08 0 .16.04.24.04.08 0 .16 0 .24-.04.08 0 .16-.04.24-.08.08-.04.16-.08.24-.16.08-.08.08-.16.16-.24 0-.08.08-.16.08-.24.08-.08.08-.16.08-.24 0-.08 0-.16-.08-.24 0-.08-.08-.16-.08-.24-.08-.08-.08-.16-.16-.24-.08-.08-.16-.12-.24-.16-.08-.04-.16-.08-.24-.08-.08-.04-.16-.04-.24-.04z" />
                </svg>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#services" className="text-gray-400 hover:text-red-500 transition-colors">
                  Branding
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-400 hover:text-red-500 transition-colors">
                  Content Creation
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-400 hover:text-red-500 transition-colors">
                  Video Production
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-400 hover:text-red-500 transition-colors">
                  Post Production
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-400 hover:text-red-500 transition-colors">
                  Aerial Videography
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Portfolio</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/portfolio?tab=commercial" className="text-gray-400 hover:text-red-500 transition-colors">
                  Commercial Projects
                </Link>
              </li>
              <li>
                <Link href="/portfolio?tab=documentary" className="text-gray-400 hover:text-red-500 transition-colors">
                  Documentary Films
                </Link>
              </li>
              <li>
                <Link href="/portfolio?tab=shortfilm" className="text-gray-400 hover:text-red-500 transition-colors">
                  Short Films
                </Link>
              </li>
              <li>
                <Link href="/portfolio?tab=photography" className="text-gray-400 hover:text-red-500 transition-colors">
                  Photography
                </Link>
              </li>
              <li>
                <Link href="/portfolio?tab=aerial" className="text-gray-400 hover:text-red-500 transition-colors">
                  Aerial Videography
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                <span className="text-gray-400">
                  Orchid Colony, Dhungeadda
                  <br />
                  Chandragiri -14, Kathmandu, Nepal
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-red-500 mr-3" />
                <span className="text-gray-400">+977 9843821246</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-red-500 mr-3" />
                <span className="text-gray-400">info@oriteproductions.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Orite Production. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
