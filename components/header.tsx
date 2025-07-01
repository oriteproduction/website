"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

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
            <Link href="/services" className="text-white hover:text-red-500 transition-colors">
              Services
            </Link>
            <Link href="/portfolio" className="text-white hover:text-red-500 transition-colors">
              Portfolio
            </Link>
            <Link href="/about" className="text-white hover:text-red-500 transition-colors">
              About
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
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
                <Link href="/services" className="text-xl font-medium hover:text-red-500 transition-colors">
                  Services
                </Link>
                <Link href="/portfolio" className="text-xl font-medium hover:text-red-500 transition-colors">
                  Portfolio
                </Link>
                <Link href="/about" className="text-xl font-medium hover:text-red-500 transition-colors">
                  About
                </Link>
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
