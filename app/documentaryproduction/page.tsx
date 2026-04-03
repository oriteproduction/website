"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  MapPin,
  Camera,
  FileText,
  Users,
  Settings,
  Film,
  Play,
  ChevronLeft,
  ChevronRight,
  Mail,
  Phone,
} from "lucide-react"

export default function DocumentaryProductionPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const nepalVideos = [
    {
      id: "pJcnBuKA_gA",
      title: "Kathmandu Valley",
      region: "Central Nepal",
      thumbnail: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/ktmtihar.jpg",
    },
    {
      id: "wiJSGb8egkQ",
      title: "Kalinchowk",
      region: "East Nepal",
      thumbnail: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/kalinchowkyt.jpg",
    },
    {
      id: "LR_SjW0YyR0",
      title: "Chandragiri Hills",
      region: "Kathmandu",
      thumbnail: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/drone8.jpg",
    },
    {
      id: "LrgqHFF6MGw",
      title: "Pokhara",
      region: "Gandaki Region",
      thumbnail: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/drone4.jpg",
    },
    {
      id: "59D0A7C0SUY",
      title: "Rara Lake",
      region: "Mugu District",
      thumbnail: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/rarathumbnail.png",
    },
    {
      id: "H2SkHAVj7ho",
      title: "Janaki Mandir",
      region: "Janakpur",
      thumbnail: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/drone2.jpg",
    },
  ]

  const services = [
    {
      icon: <MapPin className="h-8 w-8 text-red-500" />,
      title: "Location Scouting",
      description:
        "Expert guidance to Nepal's most cinematic locations, from hidden valleys to iconic peaks. We know the terrain and can access places others can't.",
    },
    {
      icon: <FileText className="h-8 w-8 text-red-500" />,
      title: "Filming Permits & Authorizations",
      description:
        "Navigate Nepal's bureaucracy with ease. We handle all permits, government approvals, and legal requirements for hassle-free filming.",
    },
    {
      icon: <Camera className="h-8 w-8 text-red-500" />,
      title: "Camera Gears & Crew",
      description:
        "Professional equipment and experienced local crew members who understand both international standards and local conditions.",
    },
    {
      icon: <Settings className="h-8 w-8 text-red-500" />,
      title: "Pre-Production & Research Support",
      description:
        "Comprehensive research, cultural consultation, and pre-production planning to ensure your story is told authentically and effectively.",
    },
    {
      icon: <Film className="h-8 w-8 text-red-500" />,
      title: "Full Production & Post-Production",
      description:
        "End-to-end production services from filming to final edit, with international quality standards and local expertise.",
    },
    {
      icon: <Users className="h-8 w-8 text-red-500" />,
      title: "Local Expertise & Cultural Bridge",
      description:
        "Our team serves as your cultural bridge, ensuring respectful storytelling while accessing authentic local perspectives and stories.",
    },
  ]

  const whyChoosePoints = [
    {
      title: "End-to-End Support",
      description:
        "From initial concept to final delivery, we handle every aspect of your documentary production in Nepal.",
    },
    {
      title: "International Standard Workflows",
      description: "We follow global production standards while leveraging local knowledge and connections.",
    },
    {
      title: "Experienced Local Crew",
      description:
        "Our team combines international experience with deep local knowledge of Nepal's culture and terrain.",
    },
    {
      title: "Access to Hidden Locations",
      description: "Reach remote and spectacular locations that are inaccessible to most production companies.",
    },
    {
      title: "Smooth Permission Process",
      description:
        "Navigate complex bureaucracy effortlessly with our established government and local authority relationships.",
    },
    {
      title: "Cultural Authenticity",
      description: "Ensure your documentary respects local customs while capturing genuine, compelling stories.",
    },
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full cursor-pointer"
            onClick={() => window.open("https://www.youtube.com/watch?v=y7ho5QMxX8g", "_blank")}
          >
            <iframe
              src="https://www.youtube.com/embed/y7ho5QMxX8g?autoplay=1&controls=0&mute=1&loop=1&playlist=y7ho5QMxX8g&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&hd=1&vq=hd1080"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Nepal Documentary Production"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.77vh] h-[100vh] max-w-none pointer-events-none opacity-40"
              style={{ border: "none" }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white">
            Documentary Production in Nepal
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
            Your trusted partner for documentary filmmaking in the Himalayas
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
            From the peaks of Everest to the jungles of Chitwan, we provide comprehensive production services for
            filmmakers, producers, and directors seeking to tell authentic stories in Nepal.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold px-8 py-4 text-lg"
              >
                Start Your Project
              </Button>
            </Link>
            <Link href="/aayushtiwari">
              <Button
                size="lg"
                variant="outline"
                className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 py-4 text-lg bg-transparent"
              >
                Meet Creative Director
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-red-500 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-red-500 to-red-600 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
              Your Complete Filmmaking Partner in Nepal
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              We provide end-to-end documentary production services, combining international standards with deep local
              expertise to bring your vision to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            {/* Services List */}
            <div className="space-y-8">
              {services.map((service, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 p-3 bg-red-500/10 rounded-xl border border-red-500/20 group-hover:bg-red-500/20 transition-all duration-300">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Visual Content */}
            <div className="space-y-6">
              <div className="aspect-video rounded-2xl overflow-hidden border-2 border-red-500/30 shadow-2xl">
                <div
                  className="w-full h-full cursor-pointer"
                  onClick={() => window.open("https://www.youtube.com/watch?v=Cq-E0IamIVI", "_blank")}
                >
                  <iframe
                    src="https://www.youtube.com/embed/Cq-E0IamIVI?autoplay=1&controls=0&mute=1&loop=1&playlist=Cq-E0IamIVI&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&hd=1&vq=hd1080"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Documentary Production Services"
                    className="w-full h-full"
                    style={{ border: "none" }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-xl overflow-hidden border border-red-500/20">
                  <Image
                    src="/images/design-mode/drone12.jpg"
                    alt="Nepal Production"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden border border-red-500/20">
                  <Image
                    src="/images/design-mode/drone6.jpg"
                    alt="Nepal Filming"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nepal Visual Showcase */}
      <section className="hidden md:block py-16 sm:py-20 lg:py-24 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
              Discover Nepal's Cinematic Landscapes
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              From the world's highest peaks to ancient cultural sites, Nepal offers unparalleled diversity for
              documentary storytelling across all regions.
            </p>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {nepalVideos.map((video, index) => (
              <div
                key={index}
                className="group relative aspect-video rounded-2xl overflow-hidden border-2 border-red-500/30 shadow-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:border-red-500/60"
                onClick={() => window.open(`https://www.youtube.com/watch?v=${video.id}`, "_blank")}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}?autoplay=1&controls=0&mute=1&loop=1&playlist=${video.id}&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&hd=1&vq=hd1080`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={video.title}
                  className="w-full h-full"
                  style={{ border: "none" }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-lg mb-1">{video.title}</h3>
                    <p className="text-red-500 text-sm font-medium">{video.region}</p>
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Play className="h-8 w-8 text-red-500 fill-current" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden">
            <div className="relative">
              <div className="overflow-hidden rounded-2xl">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {nepalVideos.map((video, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-2">
                      <div
                        className="group relative aspect-video rounded-2xl overflow-hidden border-2 border-red-500/30 shadow-2xl cursor-pointer"
                        onClick={() => window.open(`https://www.youtube.com/watch?v=${video.id}`, "_blank")}
                      >
                        <iframe
                          src={`https://www.youtube.com/embed/${video.id}?autoplay=1&controls=0&mute=1&loop=1&playlist=${video.id}&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&hd=1&vq=hd1080`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          title={video.title}
                          className="w-full h-full"
                          style={{ border: "none" }}
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-4 left-4 right-4">
                            <h3 className="text-white font-bold text-lg mb-1">{video.title}</h3>
                            <p className="text-red-500 text-sm font-medium">{video.region}</p>
                          </div>
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                              <Play className="h-6 w-6 text-red-500 fill-current" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Navigation */}
              <button
                onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
                disabled={currentSlide === 0}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-red-500/80 rounded-full flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110 transition-all duration-300 z-10"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>

              <button
                onClick={() => setCurrentSlide(Math.min(nepalVideos.length - 1, currentSlide + 1))}
                disabled={currentSlide === nepalVideos.length - 1}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-red-500/80 rounded-full flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110 transition-all duration-300 z-10"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>

              {/* Mobile Pagination */}
              <div className="flex justify-center mt-6 space-x-2">
                {nepalVideos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === index ? "bg-red-500 scale-125" : "bg-white/20"
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Orite Production */}
      <section className="py-16 sm:py-20 lg:py-24 bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
              Why Film with Orite Production in Nepal?
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              We bridge the gap between international filmmaking standards and authentic local storytelling, ensuring
              your documentary captures the true essence of Nepal.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {whyChoosePoints.map((point, index) => (
              <div key={index} className="group">
                <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-red-500/20 hover:border-red-500/50 transition-all duration-300 hover:transform hover:scale-105 h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors duration-300">
                      {point.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed">{point.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "5+", label: "Documentaries Produced" },
              { number: "3+", label: "International Clients" },
              { number: "7+", label: "Years Experience" },
              { number: "100%", label: "Permit Success Rate" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-red-500 mb-2">{stat.number}</div>
                <div className="text-sm sm:text-base text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aston Band Advertisement */}
      <section className="py-8 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="w-full max-w-[1536px] h-[50px] sm:h-[200px] lg:h-[200px] relative overflow-hidden">
              <video autoPlay muted loop playsInline className="w-full h-full object-cover" style={{ border: "none" }}>
                <source
                  src="https://raw.githubusercontent.com/oriteproduction/thumbnails/main/astonband2.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-black via-zinc-900 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Film in Nepal?</h2>
            <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
              Let's bring your documentary vision to life in one of the world's most spectacular and culturally rich
              countries. Contact us to start planning your Nepal production today.
            </p>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-12">
              {/* Contact Information */}
              <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-red-500/20">
                <h3 className="text-2xl font-bold text-red-500 mb-6">Get in Touch</h3>
                <div className="space-y-4 text-left">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-red-500 mt-1" />
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <p className="text-gray-400">info@oriteproductions.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-red-500 mt-1" />
                    <div>
                      <p className="text-white font-medium">Phone</p>
                      <p className="text-gray-400">+977 9843821246</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-red-500 mt-1" />
                    <div>
                      <p className="text-white font-medium">Location</p>
                      <p className="text-gray-400">Kathmandu, Nepal</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact Form */}
              <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-red-500/20">
                <h3 className="text-2xl font-bold text-red-500 mb-6">Quick Inquiry</h3>
                <p className="text-gray-400 mb-6">
                  Tell us about your documentary project and we'll get back to you within 24 hours.
                </p>
                <div className="space-y-4">
                  <Link href="/contact">
                    <Button className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-bold py-3">
                      Contact Us for Filming
                    </Button>
                  </Link>
                  <Link href="/aayushtiwari">
                    <Button
                      variant="outline"
                      className="w-full border-red-500 text-red-500 hover:bg-red-500 hover:text-white py-3 bg-transparent"
                    >
                      Contact Creative Director
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Additional CTA */}
            <div className="text-center">
              <p className="text-gray-400 mb-6">
                Join filmmakers from around the world who have chosen Nepal as their documentary destination.
              </p>
              <Link href="/portfolio">
                <Button
                  variant="outline"
                  className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 py-3 bg-transparent"
                >
                  View Our Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
