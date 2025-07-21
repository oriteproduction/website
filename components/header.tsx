"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false)
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      setIsScrolled(window.scrollY > 10)
    })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-white font-bold text-2xl">
            ORITE<span className="text-red-500">PRODUCTION</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-red-500 transition-colors">
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button className="flex items-center text-white hover:text-red-500 transition-colors">
                Services
                <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-zinc-900 border border-zinc-800 rounded-lg shadow-xl py-2 z-50">
                  <Link
                    href="/services"
                    className="block px-4 py-2 text-white hover:text-red-500 hover:bg-zinc-800 transition-colors"
                  >
                    Services
                  </Link>
                  <Link
                    href="/documentaryproduction"
                    className="block px-4 py-2 text-white hover:text-red-500 hover:bg-zinc-800 transition-colors"
                  >
                    Documentary Production
                  </Link>
                </div>
              )}
            </div>

            <Link href="/portfolio" className="text-white hover:text-red-500 transition-colors">
              Portfolio
            </Link>

            {/* About Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <button className="flex items-center text-white hover:text-red-500 transition-colors">
                About
                <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>

              {aboutDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-zinc-900 border border-zinc-800 rounded-lg shadow-xl py-2 z-50">
                  <Link
                    href="/about"
                    className="block px-4 py-2 text-white hover:text-red-500 hover:bg-zinc-800 transition-colors"
                  >
                    Orite Production
                  </Link>
                  <Link
                    href="/aayushtiwari"
                    className="block px-4 py-2 text-white hover:text-red-500 hover:bg-zinc-800 transition-colors"
                  >
                    Creative Director
                  </Link>
                </div>
              )}
            </div>

            <Link href="/contact">
              <Button
                variant="outline"
                className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white bg-transparent"
              >
                Contact Us
              </Button>
            </Link>
          </nav>

          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-zinc-900 text-white border-zinc-800">
              <nav className="flex flex-col space-y-6 mt-12">
                <Link href="/" className="text-xl font-medium hover:text-red-500 transition-colors">
                  Home
                </Link>

                {/* Mobile Services Section */}
                <div className="space-y-2">
                  <Link href="/services" className="text-xl font-medium hover:text-red-500 transition-colors block">
                    Services
                  </Link>
                  <Link
                    href="/documentaryproduction"
                    className="text-lg font-medium hover:text-red-500 transition-colors block pl-4 text-gray-300"
                  >
                    Documentary Production
                  </Link>
                </div>

                <Link href="/portfolio" className="text-xl font-medium hover:text-red-500 transition-colors">
                  Portfolio
                </Link>

                {/* Mobile About Section */}
                <div className="space-y-2">
                  <Link href="/about" className="text-xl font-medium hover:text-red-500 transition-colors block">
                    Orite Production
                  </Link>
                  <Link
                    href="/aayushtiwari"
                    className="text-lg font-medium hover:text-red-500 transition-colors block pl-4 text-gray-300"
                  >
                    Creative Director
                  </Link>
                </div>

                <Link href="/contact" className="text-xl font-medium hover:text-red-500 transition-colors">
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
