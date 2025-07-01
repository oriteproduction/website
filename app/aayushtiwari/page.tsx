"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Award, Film, Eye, Calendar, MapPin, Play, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AayushTiwariPage() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredReel, setHoveredReel] = useState<number | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  // Refs for color grading sections with manual sliders
  const colorGrading1Ref = useRef<HTMLDivElement>(null)
  const colorGrading2Ref = useRef<HTMLDivElement>(null)
  const colorGrading3Ref = useRef<HTMLDivElement>(null)
  const colorGrading4Ref = useRef<HTMLDivElement>(null)
  const colorGrading5Ref = useRef<HTMLDivElement>(null)

  const [colorGrading1Position, setColorGrading1Position] = useState(50)
  const [colorGrading2Position, setColorGrading2Position] = useState(50)
  const [colorGrading3Position, setColorGrading3Position] = useState(50)
  const [colorGrading4Position, setColorGrading4Position] = useState(50)
  const [colorGrading5Position, setColorGrading5Position] = useState(50)

  const [isDragging1, setIsDragging1] = useState(false)
  const [isDragging2, setIsDragging2] = useState(false)
  const [isDragging3, setIsDragging3] = useState(false)
  const [isDragging4, setIsDragging4] = useState(false)
  const [isDragging5, setIsDragging5] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Mouse down handlers for each frame
  const handleMouseDown1 = () => setIsDragging1(true)
  const handleMouseDown2 = () => setIsDragging2(true)
  const handleMouseDown3 = () => setIsDragging3(true)
  const handleMouseDown4 = () => setIsDragging4(true)
  const handleMouseDown5 = () => setIsDragging5(true)

  // Generic mouse move handler (already correct)
  const handleMouseMove = (
    e: React.MouseEvent,
    frameRef: React.RefObject<HTMLDivElement>,
    setPosition: (pos: number) => void,
    isDragging: boolean,
  ) => {
    if (!isDragging || !frameRef.current) return

    const rect = frameRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setPosition(percentage)
  }

  // Mouse up handler to stop dragging on any frame
  useEffect(() => {
    const handleMouseUp = () => {
      setIsDragging1(false)
      setIsDragging2(false)
      setIsDragging3(false)
      setIsDragging4(false)
      setIsDragging5(false)
    }

    window.addEventListener("mouseup", handleMouseUp)
    return () => {
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [])

  const reelsData = [
    { id: "TDdW2nJ0bw8", title: "Commercial Showcase" },
    { id: "VgWN4p1eVu4", title: "Brand Storytelling" },
    { id: "GD0VFTc8Bac", title: "Documentary Style" },
  ]

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-black">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <iframe
            src="https://www.youtube.com/embed/fZvXPYsBnz0?autoplay=1&controls=0&mute=1&loop=1&playlist=fZvXPYsBnz0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&hd=1&vq=hd1080"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Background Video"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.77vh] h-[100vh] max-w-none pointer-events-none opacity-30"
            style={{ border: "none" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90"></div>
        </div>

        {/* Hero Content */}
        <div
          className={`relative z-10 text-center px-4 transition-all duration-2000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="mb-8">
            <div className="w-56 h-56 mx-auto rounded-full overflow-hidden border-4 shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#6E3D1B] via-[#F7BD3A] to-[#FCE2A6] rounded-full p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-black">
                  <Image
                    src="https://raw.githubusercontent.com/oriteproduction/thumbnails/main/aayush4.png"
                    alt="Aayush Tiwari"
                    width={520}
                    height={520}
                    className="w-full h-full object-cover object-center scale-1000"
                  />
                </div>
              </div>
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#6E3D1B] via-[#F7BD3A] to-[#FCE2A6] bg-clip-text text-transparent">
            AAYUSH TIWARI
          </h1>
          <p className="text-2xl md:text-3xl bg-gradient-to-r from-[#F7BD3A] to-[#FCE2A6] bg-clip-text text-transparent font-light mb-4">
            Creative Director • Video Editor • Visual Storyteller
          </p>
          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Over 7 years of experience in directing, editing, and producing high-end commercial and narrative content.
            Strong focus on storytelling, visual emotion, and impactful editing that resonates with audiences worldwide.
          </p>
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-[#F7BD3A]" />
              <span>Kathmandu, Nepal</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-[#F7BD3A]" />
              <span>7+ Years Experience</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-[#F7BD3A] rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-[#F7BD3A] to-[#FCE2A6] rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Creative Vision Section */}
      <section className="py-20 relative bg-[#0A0A0A]">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#6E3D1B] via-[#F7BD3A] to-[#FCE2A6] bg-clip-text text-transparent mb-8">
              Creative Vision
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-12">
              As Creative Director at Orite Production, I lead a team of passionate storytellers in creating compelling
              visual narratives that resonate with audiences worldwide. My expertise spans from conceptualization to
              final delivery, ensuring every project meets the highest standards of cinematic excellence.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-[#F7BD3A]/20">
                  <h3 className="text-xl font-bold text-[#F7BD3A] mb-3">Core Expertise</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Direction & Creative Vision Development</li>
                    <li>• Cinematography & Visual Composition</li>
                    <li>• Video Editing (Premiere Pro, DaVinci Resolve)</li>
                    <li>• Color Grading & Post-Production</li>
                    <li>• Script Writing & Narrative Structure</li>
                  </ul>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-[#F7BD3A]/20">
                  <h3 className="text-xl font-bold text-[#F7BD3A] mb-3">Specializations</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Commercial & Brand Storytelling</li>
                    <li>• Documentary Filmmaking</li>
                    <li>• Music Videos & Creative Content</li>
                    <li>• Corporate Communications</li>
                    <li>• Social Media Content Strategy</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden border-2 border-[#F7BD3A]/30 shadow-2xl">
                <iframe
                  src="https://www.youtube.com/embed/TDdW2nJ0bw8?autoplay=1&controls=0&mute=1&loop=1&playlist=TDdW2nJ0bw8&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&hd=1&vq=hd1080"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Creative Showcase"
                  className="w-full h-full"
                  style={{ border: "none" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Major Projects Showcase */}
      <section className="py-20 relative bg-[#121212]">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-[#6E3D1B] via-[#F7BD3A] to-[#FCE2A6] bg-clip-text text-transparent mb-16">
            Featured Projects
          </h2>

          <div className="space-y-20">
            {/* Project 1 - Daraz Campaign */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-[#F7BD3A]">Daraz Nepal Campaign Series</h3>
                <p className="text-gray-300 text-lg">
                  Led the creative direction for Daraz Nepal's major campaign series, including the 11.11 sale campaign
                  and brand storytelling videos. Managed a team of 8+ creatives to deliver high-impact commercial
                  content that drove significant engagement and sales.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#F7BD3A] rounded-full"></div>
                    <span className="text-gray-300">Creative Direction & Concept Development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#F7BD3A] rounded-full"></div>
                    <span className="text-gray-300">Multi-platform Content Strategy</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#F7BD3A] rounded-full"></div>
                    <span className="text-gray-300">Team Leadership & Production Management</span>
                  </div>
                </div>
              </div>
              <div className="aspect-video rounded-2xl overflow-hidden border-2 border-[#F7BD3A]/30 shadow-2xl">
                <iframe
                  src="https://www.youtube.com/embed/_oiVSMmS8d0?autoplay=1&controls=0&mute=1&loop=1&playlist=_oiVSMmS8d0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&hd=1&vq=hd1080"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Daraz Campaign"
                  className="w-full h-full"
                  style={{ border: "none" }}
                />
              </div>
            </div>

            {/* Project 2 - Documentary Work */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 aspect-video rounded-2xl overflow-hidden border-2 border-[#F7BD3A]/30 shadow-2xl">
                <iframe
                  src="https://www.youtube.com/embed/GD0VFTc8Bac?autoplay=1&controls=0&mute=1&loop=1&playlist=GD0VFTc8Bac&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&hd=1&vq=hd1080"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Documentary Work"
                  className="w-full h-full"
                  style={{ border: "none" }}
                />
              </div>
              <div className="order-1 lg:order-2 space-y-6">
                <h3 className="text-3xl font-bold text-[#F7BD3A]">Documentary Storytelling</h3>
                <p className="text-gray-300 text-lg">
                  Directed and produced documentary content focusing on authentic human stories and social impact.
                  Specialized in capturing genuine emotions and creating compelling narratives that drive meaningful
                  conversations and awareness.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#F7BD3A] rounded-full"></div>
                    <span className="text-gray-300">Authentic Storytelling & Interview Direction</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#F7BD3A] rounded-full"></div>
                    <span className="text-gray-300">Social Impact Content Creation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#F7BD3A] rounded-full"></div>
                    <span className="text-gray-300">Narrative Structure & Emotional Arc Development</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 3 - Commercial Excellence */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-[#F7BD3A]">Commercial Excellence</h3>
                <p className="text-gray-300 text-lg">
                  Created high-impact commercial content for various brands, focusing on visual storytelling that drives
                  engagement and conversion. Expertise in brand identity translation through cinematic language and
                  compelling narratives.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#F7BD3A] rounded-full"></div>
                    <span className="text-gray-300">Brand Identity & Visual Language Development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#F7BD3A] rounded-full"></div>
                    <span className="text-gray-300">High-Impact Commercial Production</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#F7BD3A] rounded-full"></div>
                    <span className="text-gray-300">Multi-format Content Optimization</span>
                  </div>
                </div>
              </div>
              <div className="aspect-video rounded-2xl overflow-hidden border-2 border-[#F7BD3A]/30 shadow-2xl">
                <iframe
                  src="https://www.youtube.com/embed/VgWN4p1eVu4?autoplay=1&controls=0&mute=1&loop=1&playlist=VgWN4p1eVu4&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&hd=1&vq=hd1080"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Commercial Work"
                  className="w-full h-full"
                  style={{ border: "none" }}
                />
              </div>
            </div>

            {/* Project 4 - Informative Video Journalism */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 aspect-video rounded-2xl overflow-hidden border-2 border-[#F7BD3A]/30 shadow-2xl">
                <iframe
                  src="https://www.youtube.com/embed/lZvw6H0F4gs?autoplay=1&controls=0&mute=1&loop=1&playlist=lZvw6H0F4gs&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&hd=1&vq=hd1080"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Informative Video Journalism"
                  className="w-full h-full"
                  style={{ border: "none" }}
                />
              </div>
              <div className="order-1 lg:order-2 space-y-6">
                <h3 className="text-3xl font-bold text-[#F7BD3A]">Informative Video Journalism</h3>
                <p className="text-gray-300 text-lg">
                  Video shot at Gandaki Gaupalika. Project fully done by Aayush Tiwari — scriptwriter, director,
                  cinematographer, editor. A comprehensive approach to informative storytelling that combines
                  journalistic integrity with cinematic excellence.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#F7BD3A] rounded-full"></div>
                    <span className="text-gray-300">Complete Solo Production & Direction</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#F7BD3A] rounded-full"></div>
                    <span className="text-gray-300">Script Writing & Narrative Development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#F7BD3A] rounded-full"></div>
                    <span className="text-gray-300">Cinematography & Post-Production</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative bg-[#0F0F0F]">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#6E3D1B] via-[#F7BD3A] to-[#FCE2A6] bg-clip-text text-transparent mb-6">
              Color Grading Showcase
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Witness the transformation from raw footage to cinematic masterpiece. Drag the slider to reveal the magic
              of color grading.
            </p>
          </div>

          {/* Horizontal Scrollable Container */}
          <div className="overflow-x-auto pb-4" id="colorGradingContainer">
            <div className="flex space-x-8 min-w-max">
              {[1, 2, 3, 4, 5].map((i) => {
                const ref = [colorGrading1Ref, colorGrading2Ref, colorGrading3Ref, colorGrading4Ref, colorGrading5Ref][
                  i - 1
                ]
                const pos = [
                  colorGrading1Position,
                  colorGrading2Position,
                  colorGrading3Position,
                  colorGrading4Position,
                  colorGrading5Position,
                ][i - 1]
                const isDragging = [isDragging1, isDragging2, isDragging3, isDragging4, isDragging5][i - 1]
                const handleMouseDown = [
                  handleMouseDown1,
                  handleMouseDown2,
                  handleMouseDown3,
                  handleMouseDown4,
                  handleMouseDown5,
                ][i - 1]

                const beforeUrl = `https://raw.githubusercontent.com/oriteproduction/thumbnails/main/pic${i}-before.jpg`
                const afterUrl = `https://raw.githubusercontent.com/oriteproduction/thumbnails/main/pic${i}-after.jpg`

                const labels = [
                  "Commercial Project",
                  "Documentary Style",
                  "Aerial Footage",
                  "Portrait Work",
                  "Night Scene",
                ]
                const captions = [
                  "Enhanced warmth and contrast",
                  "Natural color enhancement",
                  "Cinematic sky treatment",
                  "Skin tone perfection",
                  "Low light enhancement",
                ]

                return (
                  <div key={i} className="flex-shrink-0 w-96">
                    <div
                      ref={ref}
                      className="aspect-video rounded-2xl overflow-hidden border-2 border-[#F7BD3A]/30 shadow-2xl relative cursor-pointer select-none"
                      onMouseMove={(e) =>
                        handleMouseMove(
                          e,
                          ref,
                          (val) => {
                            const setters = [
                              setColorGrading1Position,
                              setColorGrading2Position,
                              setColorGrading3Position,
                              setColorGrading4Position,
                              setColorGrading5Position,
                            ]
                            setters[i - 1](val)
                          },
                          isDragging,
                        )
                      }
                    >
                      {/* BEFORE IMAGE */}
                      <Image
                        src={beforeUrl || "/placeholder.svg"}
                        alt={`Before Color Grading - Frame ${i}`}
                        fill
                        className="object-cover"
                      />

                      {/* AFTER IMAGE */}
                      <div
                        className="absolute inset-0 overflow-hidden"
                        style={{
                          clipPath: `inset(0 ${100 - pos}% 0 0)`,
                        }}
                      >
                        <Image
                          src={afterUrl || "/placeholder.svg"}
                          alt={`After Color Grading - Frame ${i}`}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* SLIDER BAR */}
                      <div
                        className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-[#6E3D1B] via-[#F7BD3A] to-[#FCE2A6] shadow-lg cursor-ew-resize"
                        style={{ left: `${pos}%` }}
                        onMouseDown={handleMouseDown}
                      >
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-[#F7BD3A] to-[#FCE2A6] rounded-full flex items-center justify-center cursor-ew-resize">
                          <div className="w-4 h-4 bg-white rounded-full"></div>
                        </div>
                      </div>

                      {/* LABELS */}
                      <div className="absolute top-4 left-4 bg-black/70 px-3 py-1 rounded-full text-sm">RAW</div>
                      <div className="absolute top-4 right-4 bg-black/70 px-3 py-1 rounded-full text-sm">Graded</div>
                    </div>
                    <div className="mt-4 text-center">
                      <h4 className="text-lg font-bold text-[#F7BD3A] mb-1">{labels[i - 1]}</h4>
                      <p className="text-gray-400 text-sm">{captions[i - 1]}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Custom Scrollbar */}
            <style jsx>{`
        #colorGradingContainer::-webkit-scrollbar {
          height: 12px;
          margin-top: 16px;
        }
        #colorGradingContainer::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 6px;
          margin: 0 20px;
        }
        #colorGradingContainer::-webkit-scrollbar-thumb {
          background: linear-gradient(to right, #6E3D1B, #F7BD3A, #FCE2A6);
          border-radius: 6px;
          border: 2px solid rgba(0, 0, 0, 0.2);
        }
        #colorGradingContainer::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to right, #FCE2A6, #F7BD3A, #6E3D1B);
          transform: scale(1.1);
        }
      `}</style>
          </div>
        </div>
      </section>

      {/* Reels Section */}
      <section className="py-20 relative bg-[#1A1A1A]">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-[#6E3D1B] via-[#F7BD3A] to-[#FCE2A6] bg-clip-text text-transparent mb-16">
            Reels
          </h2>

          {/* Horizontal Slideshow Container */}
          <div className="max-w-7xl mx-auto">
            <div className="relative">
              {/* Slideshow Wrapper */}
              <div className="overflow-hidden rounded-2xl">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {/* Slide 1 */}
                  <div className="w-full flex-shrink-0 flex justify-center space-x-8 px-4">
                    {[
                      { id: "3GD8AX6l0mw", title: "Electronics Showcase" },
                      { id: "5TbFq_22jVk", title: "Aesthetic Corner" },
                      { id: "0KySQrt3jog", title: "Fashion Styling" },
                    ].map((reel, index) => (
                      <div
                        key={index}
                        className="relative aspect-[9/16] w-80 rounded-2xl overflow-hidden border-2 border-[#F7BD3A]/30 shadow-2xl group cursor-pointer transition-transform duration-300 hover:scale-105"
                        onMouseEnter={() => setHoveredReel(index)}
                        onMouseLeave={() => setHoveredReel(null)}
                      >
                        <iframe
                          src={`https://www.youtube.com/embed/${reel.id}?${hoveredReel === index ? "autoplay=1&" : ""}controls=0&mute=1&loop=1&playlist=${reel.id}&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&hd=1&vq=hd1080`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          title={reel.title}
                          className="w-full h-full"
                          style={{ border: "none" }}
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-4 left-4 right-4">
                            <h3 className="text-white font-semibold text-sm">{reel.title}</h3>
                          </div>
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div className="w-12 h-12 bg-[#F7BD3A]/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                              <Play className="h-6 w-6 text-[#F7BD3A] fill-current" />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Slide 2 */}
                  <div className="w-full flex-shrink-0 flex justify-center space-x-8 px-4">
                    {[
                      { id: "cjgHAlRMsJk", title: "Himalayas" },
                      { id: "Tq7_CQjI64c", title: "Camera Roll" },
                      { id: "jw69BdTThwI", title: "Welcome to Nepal" },
                    ].map((reel, index) => (
                      <div
                        key={index + 3}
                        className="relative aspect-[9/16] w-80 rounded-2xl overflow-hidden border-2 border-[#F7BD3A]/30 shadow-2xl group cursor-pointer transition-transform duration-300 hover:scale-105"
                        onMouseEnter={() => setHoveredReel(index + 3)}
                        onMouseLeave={() => setHoveredReel(null)}
                      >
                        <iframe
                          src={`https://www.youtube.com/embed/${reel.id}?${hoveredReel === index + 3 ? "autoplay=1&" : ""}controls=0&mute=1&loop=1&playlist=${reel.id}&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&hd=1&vq=hd1080`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          title={reel.title}
                          className="w-full h-full"
                          style={{ border: "none" }}
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-4 left-4 right-4">
                            <h3 className="text-white font-semibold text-sm">{reel.title}</h3>
                          </div>
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div className="w-12 h-12 bg-[#F7BD3A]/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                              <Play className="h-6 w-6 text-[#F7BD3A] fill-current" />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Slide 3 */}
                  <div className="w-full flex-shrink-0 flex justify-center space-x-8 px-4">
                    {[
                      { id: "OD0gZ_HKheg", title: "Behind the Scenes" },
                      { id: "ykDCqKcU9tg", title: "Vivid Janakpurdham" },
                      { id: "zhI46-nV_0c", title: "Year Review" },
                    ].map((reel, index) => (
                      <div
                        key={index + 6}
                        className="relative aspect-[9/16] w-80 rounded-2xl overflow-hidden border-2 border-[#F7BD3A]/30 shadow-2xl group cursor-pointer transition-transform duration-300 hover:scale-105"
                        onMouseEnter={() => setHoveredReel(index + 6)}
                        onMouseLeave={() => setHoveredReel(null)}
                      >
                        <iframe
                          src={`https://www.youtube.com/embed/${reel.id}?${hoveredReel === index + 6 ? "autoplay=1&" : ""}controls=0&mute=1&loop=1&playlist=${reel.id}&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&hd=1&vq=hd1080`}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          title={reel.title}
                          className="w-full h-full"
                          style={{ border: "none" }}
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-4 left-4 right-4">
                            <h3 className="text-white font-semibold text-sm">{reel.title}</h3>
                          </div>
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div className="w-12 h-12 bg-[#F7BD3A]/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                              <Play className="h-6 w-6 text-[#F7BD3A] fill-current" />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
                disabled={currentSlide === 0}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-[#F7BD3A] to-[#FCE2A6] rounded-full flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110 transition-all duration-300 z-10"
              >
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={() => setCurrentSlide(Math.min(2, currentSlide + 1))}
                disabled={currentSlide === 2}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-[#F7BD3A] to-[#FCE2A6] rounded-full flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110 transition-all duration-300 z-10"
              >
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Progress Indicator */}
            <div className="flex justify-center mt-12 space-x-4">
              {[0, 1, 2].map((slide) => (
                <button
                  key={slide}
                  onClick={() => setCurrentSlide(slide)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    currentSlide === slide
                      ? "bg-gradient-to-r from-[#F7BD3A] to-[#FCE2A6] scale-125"
                      : "bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            {/* Progress Bar */}
            <div className="mt-6 max-w-md mx-auto">
              <div className="w-full bg-white/10 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-[#F7BD3A] to-[#FCE2A6] h-2 rounded-full transition-all duration-500 ease-in-out"
                  style={{ width: `${((currentSlide + 1) / 3) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Creative Journey Section */}
      <section className="py-20 relative bg-[#0D0D0D]">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#6E3D1B] via-[#F7BD3A] to-[#FCE2A6] bg-clip-text text-transparent mb-6">
              My Creative Journey
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              A comprehensive timeline of professional growth, creative milestones, and industry impact
            </p>
            <div className="flex justify-center mb-8">
              <Link
                href="https://raw.githubusercontent.com/oriteproduction/thumbnails/main/aayushcv1.jpg"
                target="_blank"
              >
                <Button className="bg-gradient-to-r from-[#6E3D1B] via-[#F7BD3A] to-[#FCE2A6] hover:from-[#FCE2A6] hover:via-[#F7BD3A] hover:to-[#6E3D1B] text-black font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105">
                  <Download className="h-4 w-4 mr-2" />
                  Download Full CV
                </Button>
              </Link>
            </div>
          </div>

          {/* Professional Timeline */}
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#6E3D1B] via-[#F7BD3A] to-[#FCE2A6] hidden md:block"></div>

              {/* Experience Items */}
              <div className="space-y-12">
                {/* Founder - Orite Production */}
                <div className="relative flex items-start group">
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-[#F7BD3A] to-[#FCE2A6] rounded-full border-4 border-black group-hover:scale-125 transition-transform duration-300 hidden md:block"></div>
                  <div className="md:ml-16 w-full bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-[#F7BD3A]/20 hover:border-[#F7BD3A]/50 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-[#F7BD3A] mb-2">Founder</h3>
                        <p className="text-xl text-gray-300 font-medium">Orite Production – Self-employed</p>
                      </div>
                      <div className="text-sm text-gray-400 bg-[#F7BD3A]/10 px-4 py-2 rounded-full mt-2 lg:mt-0 w-fit">
                        Aug 2024 – Present
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      Founder and creative lead of a production company specializing in cinematic storytelling for
                      commercials, documentaries, and branded content.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="text-xs bg-gradient-to-r from-[#6E3D1B] to-[#F7BD3A] text-white px-3 py-1 rounded-full">
                        Leadership
                      </span>
                      <span className="text-xs bg-gradient-to-r from-[#6E3D1B] to-[#F7BD3A] text-white px-3 py-1 rounded-full">
                        Business Development
                      </span>
                      <span className="text-xs bg-gradient-to-r from-[#6E3D1B] to-[#F7BD3A] text-white px-3 py-1 rounded-full">
                        Creative Direction
                      </span>
                    </div>
                  </div>
                </div>

                {/* Videographer - Daraz */}
                <div className="relative flex items-start group">
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-[#F7BD3A] to-[#FCE2A6] rounded-full border-4 border-black group-hover:scale-125 transition-transform duration-300 hidden md:block"></div>
                  <div className="md:ml-16 w-full bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-[#F7BD3A]/20 hover:border-[#F7BD3A]/50 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-[#F7BD3A] mb-2">Videographer</h3>
                        <p className="text-xl text-gray-300 font-medium">Daraz (Full-time)</p>
                        <p className="text-gray-400">Kathmandu, Nepal</p>
                      </div>
                      <div className="text-sm text-gray-400 bg-[#F7BD3A]/10 px-4 py-2 rounded-full mt-2 lg:mt-0 w-fit">
                        Mar 2023 – Mar 2024
                      </div>
                    </div>
                    <div className="space-y-3 text-gray-300 leading-relaxed">
                      <p>• Produced major campaigns (Daraz 11.11, Nepali New Year, Free Delivery Festival)</p>
                      <p>• Directed/shot a brand documentary "The Journey"</p>
                      <p>• Shot over 100 videos for Daraz Nepal's social media platforms</p>
                      <p>• Created paid promotional content for Instagram, Facebook, and YouTube</p>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="text-xs bg-gradient-to-r from-[#6E3D1B] to-[#F7BD3A] text-white px-3 py-1 rounded-full">
                        Campaign Production
                      </span>
                      <span className="text-xs bg-gradient-to-r from-[#6E3D1B] to-[#F7BD3A] text-white px-3 py-1 rounded-full">
                        Social Media
                      </span>
                      <span className="text-xs bg-gradient-to-r from-[#6E3D1B] to-[#F7BD3A] text-white px-3 py-1 rounded-full">
                        Documentary
                      </span>
                    </div>
                  </div>
                </div>

                {/* Freelance Filmmaker - Dopper */}
                <div className="relative flex items-start group">
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-[#F7BD3A] to-[#FCE2A6] rounded-full border-4 border-black group-hover:scale-125 transition-transform duration-300 hidden md:block"></div>
                  <div className="md:ml-16 w-full bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-[#F7BD3A]/20 hover:border-[#F7BD3A]/50 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-[#F7BD3A] mb-2">Freelance Filmmaker</h3>
                        <p className="text-xl text-gray-300 font-medium">Dopper</p>
                        <p className="text-gray-400">Kathmandu, Nepal</p>
                      </div>
                      <div className="text-sm text-gray-400 bg-[#F7BD3A]/10 px-4 py-2 rounded-full mt-2 lg:mt-0 w-fit">
                        Dec 2019 – Feb 2020
                      </div>
                    </div>
                    <div className="space-y-3 text-gray-300 leading-relaxed">
                      <p>• Cinematographer for 3+ documentary-style videos</p>
                      <p>• Changemaker Challenge Winner videos (Nepal and Germany)</p>
                      <p>• Documentary shoot at Excelsior School in association with Karkhana</p>
                      <p>• Event photography at Himalayan Climate Initiative for Dopper meetup</p>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="text-xs bg-gradient-to-r from-[#6E3D1B] to-[#F7BD3A] text-white px-3 py-1 rounded-full">
                        Cinematography
                      </span>
                      <span className="text-xs bg-gradient-to-r from-[#6E3D1B] to-[#F7BD3A] text-white px-3 py-1 rounded-full">
                        Documentary
                      </span>
                      <span className="text-xs bg-gradient-to-r from-[#6E3D1B] to-[#F7BD3A] text-white px-3 py-1 rounded-full">
                        Event Photography
                      </span>
                    </div>
                  </div>
                </div>

                {/* Videographer - Paradygm TV */}
                <div className="relative flex items-start group">
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-[#F7BD3A] to-[#FCE2A6] rounded-full border-4 border-black group-hover:scale-125 transition-transform duration-300 hidden md:block"></div>
                  <div className="md:ml-16 w-full bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-[#F7BD3A]/20 hover:border-[#F7BD3A]/50 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-[#F7BD3A] mb-2">Videographer</h3>
                        <p className="text-xl text-gray-300 font-medium">Paradygm TV (Part-time)</p>
                        <p className="text-gray-400">Kathmandu, Nepal</p>
                      </div>
                      <div className="text-sm text-gray-400 bg-[#F7BD3A]/10 px-4 py-2 rounded-full mt-2 lg:mt-0 w-fit">
                        Jan 2019 – Apr 2019
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      Shot and edited the first episode of "We Asked: Season 1"
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="text-xs bg-gradient-to-r from-[#6E3D1B] to-[#F7BD3A] text-white px-3 py-1 rounded-full">
                        Video Production
                      </span>
                      <span className="text-xs bg-gradient-to-r from-[#6E3D1B] to-[#F7BD3A] text-white px-3 py-1 rounded-full">
                        Editing
                      </span>
                      <span className="text-xs bg-gradient-to-r from-[#6E3D1B] to-[#F7BD3A] text-white px-3 py-1 rounded-full">
                        TV Production
                      </span>
                    </div>
                  </div>
                </div>

                {/* Assistant Director - The Monk */}
                <div className="relative flex items-start group">
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-[#F7BD3A] to-[#FCE2A6] rounded-full border-4 border-black group-hover:scale-125 transition-transform duration-300 hidden md:block"></div>
                  <div className="md:ml-16 w-full bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-[#F7BD3A]/20 hover:border-[#F7BD3A]/50 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-[#F7BD3A] mb-2">Assistant Director</h3>
                        <p className="text-xl text-gray-300 font-medium">Short Film: The Monk</p>
                        <p className="text-gray-400">Kathmandu, Nepal</p>
                      </div>
                      <div className="text-sm text-gray-400 bg-[#F7BD3A]/10 px-4 py-2 rounded-full mt-2 lg:mt-0 w-fit">
                        2019
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      Assistant cinematographer for the short film "The Monk", directed by Roel van
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="text-xs bg-gradient-to-r from-[#6E3D1B] to-[#F7BD3A] text-white px-3 py-1 rounded-full">
                        Assistant Direction
                      </span>
                      <span className="text-xs bg-gradient-to-r from-[#6E3D1B] to-[#F7BD3A] text-white px-3 py-1 rounded-full">
                        Cinematography
                      </span>
                      <span className="text-xs bg-gradient-to-r from-[#6E3D1B] to-[#F7BD3A] text-white px-3 py-1 rounded-full">
                        Short Film
                      </span>
                    </div>
                  </div>
                </div>

                {/* Videographer - Red Circle Creative Solutions */}
                <div className="relative flex items-start group">
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-[#F7BD3A] to-[#FCE2A6] rounded-full border-4 border-black group-hover:scale-125 transition-transform duration-300 hidden md:block"></div>
                  <div className="md:ml-16 w-full bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-[#F7BD3A]/20 hover:border-[#F7BD3A]/50 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-[#F7BD3A] mb-2">Videographer</h3>
                        <p className="text-xl text-gray-300 font-medium">Red Circle Creative Solutions (Part-time)</p>
                        <p className="text-gray-400">Kathmandu, Nepal</p>
                      </div>
                      <div className="text-sm text-gray-400 bg-[#F7BD3A]/10 px-4 py-2 rounded-full mt-2 lg:mt-0 w-fit">
                        2019
                      </div>
                    </div>
                    <div className="space-y-3 text-gray-300 leading-relaxed">
                      <p>• Shot an episode of "The Next Venture Corp"</p>
                      <p>• Covered an interview highlighting Nepal's Intersex Community</p>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="text-xs bg-gradient-to-r from-[#6E3D1B] to-[#F7BD3A] text-white px-3 py-1 rounded-full">
                        Interview Production
                      </span>
                      <span className="text-xs bg-gradient-to-r from-[#6E3D1B] to-[#F7BD3A] text-white px-3 py-1 rounded-full">
                        Social Impact
                      </span>
                      <span className="text-xs bg-gradient-to-r from-[#6E3D1B] to-[#F7BD3A] text-white px-3 py-1 rounded-full">
                        Documentary
                      </span>
                    </div>
                  </div>
                </div>

                {/* Professional Photographer - Silk Group */}
                <div className="relative flex items-start group">
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-[#F7BD3A] to-[#FCE2A6] rounded-full border-4 border-black group-hover:scale-125 transition-transform duration-300 hidden md:block"></div>
                  <div className="md:ml-16 w-full bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-[#F7BD3A]/20 hover:border-[#F7BD3A]/50 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-[#F7BD3A] mb-2">Professional Photographer</h3>
                        <p className="text-xl text-gray-300 font-medium">Silk Group (Freelance)</p>
                        <p className="text-gray-400">Kathmandu, Nepal</p>
                      </div>
                      <div className="text-sm text-gray-400 bg-[#F7BD3A]/10 px-4 py-2 rounded-full mt-2 lg:mt-0 w-fit">
                        2018 – 2019
                      </div>
                    </div>
                    <div className="space-y-3 text-gray-300 leading-relaxed">
                      <p>• Event photography for the "Key-handing Ceremony" between EICHER and Silk Group</p>
                      <p>• Captured corporate meetings and branding moments</p>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="text-xs bg-gradient-to-r from-[#6E3D1B] to-[#F7BD3A] text-white px-3 py-1 rounded-full">
                        Event Photography
                      </span>
                      <span className="text-xs bg-gradient-to-r from-[#6E3D1B] to-[#F7BD3A] text-white px-3 py-1 rounded-full">
                        Corporate
                      </span>
                      <span className="text-xs bg-gradient-to-r from-[#6E3D1B] to-[#F7BD3A] text-white px-3 py-1 rounded-full">
                        Branding
                      </span>
                    </div>
                  </div>
                </div>

                {/* Professional Photographer - Silk Transport */}
                <div className="relative flex items-start group">
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-[#F7BD3A] to-[#FCE2A6] rounded-full border-4 border-black group-hover:scale-125 transition-transform duration-300 hidden md:block"></div>
                  <div className="md:ml-16 w-full bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-[#F7BD3A]/20 hover:border-[#F7BD3A]/50 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-[#F7BD3A] mb-2">Professional Photographer</h3>
                        <p className="text-xl text-gray-300 font-medium">Silk Transport (Freelance)</p>
                        <p className="text-gray-400">Kathmandu, Nepal</p>
                      </div>
                      <div className="text-sm text-gray-400 bg-[#F7BD3A]/10 px-4 py-2 rounded-full mt-2 lg:mt-0 w-fit">
                        2018 – 2019
                      </div>
                    </div>
                    <div className="space-y-3 text-gray-300 leading-relaxed">
                      <p>• Photographed Silk Transport x MUSA Logistics meeting at Tatopani Customs Office</p>
                      <p>
                        • Captured agreement signing event at Hotel Radisson between Silk Transport and MUSA Logistics
                        (China)
                      </p>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="text-xs bg-gradient-to-r from-[#6E3D1B] to-[#F7BD3A] text-white px-3 py-1 rounded-full">
                        Corporate Photography
                      </span>
                      <span className="text-xs bg-gradient-to-r from-[#6E3D1B] to-[#F7BD3A] text-white px-3 py-1 rounded-full">
                        Business Events
                      </span>
                      <span className="text-xs bg-gradient-to-r from-[#6E3D1B] to-[#F7BD3A] text-white px-3 py-1 rounded-full">
                        International
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Philosophy Section */}
      <section className="py-20 relative bg-[#161616]">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#6E3D1B] via-[#F7BD3A] to-[#FCE2A6] bg-clip-text text-transparent">
                Creative Philosophy
              </h2>
              <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-gray-300">
                  "Every frame is an opportunity to tell a story. Every cut is a chance to evoke emotion. In the world
                  of visual storytelling, I believe that authenticity and innovation must work hand in hand."
                </p>
                <p className="text-gray-300">
                  My approach to filmmaking is rooted in understanding the human experience. Whether it's a commercial
                  campaign or a documentary piece, the goal remains the same: to create content that resonates on a
                  deeper level and drives meaningful engagement.
                </p>
                <p className="text-gray-300">
                  Technology evolves, trends change, but the fundamental power of storytelling remains constant. I
                  strive to push creative boundaries while staying true to the core message and emotion of each project.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden border-2 border-[#F7BD3A]/30 shadow-2xl">
                <iframe
                  src="https://www.youtube.com/embed/pJcnBuKA_gA?autoplay=1&controls=0&mute=1&loop=1&playlist=pJcnBuKA_gA&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&hd=1&vq=hd1080"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Creative Philosophy"
                  className="w-full h-full"
                  style={{ border: "none" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements & Recognition */}
      <section className="py-20 relative bg-[#0B0B0B]">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-[#6E3D1B] via-[#F7BD3A] to-[#FCE2A6] bg-clip-text text-transparent mb-16">
            Achievements & Impact
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { number: "150+", label: "Projects Directed", icon: <Film className="h-8 w-8" /> },
              { number: "75+", label: "Satisfied Clients", icon: <Award className="h-8 w-8" /> },
              { number: "7+", label: "Years Experience", icon: <Calendar className="h-8 w-8" /> },
              { number: "2M+", label: "Views Generated", icon: <Eye className="h-8 w-8" /> },
            ].map((stat, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="text-[#F7BD3A] flex justify-center">{stat.icon}</div>
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#F7BD3A] to-[#FCE2A6] bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-lg text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-[#F7BD3A]/20">
            <h3 className="text-2xl font-bold text-[#F7BD3A] mb-6 text-center">Key Accomplishments</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#F7BD3A] rounded-full mt-2"></div>
                  <span className="text-gray-300">Led creative direction for major brand campaigns across Nepal</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#F7BD3A] rounded-full mt-2"></div>
                  <span className="text-gray-300">Established Orite Production as a leading creative agency</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#F7BD3A] rounded-full mt-2"></div>
                  <span className="text-gray-300">Mentored emerging filmmakers and content creators</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#F7BD3A] rounded-full mt-2"></div>
                  <span className="text-gray-300">Pioneered innovative storytelling techniques in Nepal</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#F7BD3A] rounded-full mt-2"></div>
                  <span className="text-gray-300">Built lasting partnerships with international clients</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#F7BD3A] rounded-full mt-2"></div>
                  <span className="text-gray-300">Contributed to Nepal's growing creative industry</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Collaboration */}
      <section className="py-20 relative bg-[#131313]">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#6E3D1B] via-[#F7BD3A] to-[#FCE2A6] bg-clip-text text-transparent mb-8">
            Let's Create Together
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Ready to bring your vision to life? Let's collaborate on your next cinematic project and create something
            extraordinary that resonates with your audience and drives meaningful impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-[#6E3D1B] via-[#F7BD3A] to-[#FCE2A6] hover:from-[#FCE2A6] hover:via-[#F7BD3A] hover:to-[#6E3D1B] text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
                Start a Project
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button
                variant="outline"
                className="border-[#F7BD3A] text-[#F7BD3A] hover:bg-gradient-to-r hover:from-[#6E3D1B] hover:via-[#F7BD3A] hover:to-[#FCE2A6] hover:text-black px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 bg-transparent"
              >
                View Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Connect with Me Section */}
      <section className="py-16 relative bg-[#080808]">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#6E3D1B] via-[#F7BD3A] to-[#FCE2A6] bg-clip-text text-transparent mb-8">
            Connect with Me
          </h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
            Follow my creative journey and stay updated with the latest projects, behind-the-scenes content, and
            industry insights.
          </p>

          <div className="flex justify-center items-center space-x-6 flex-wrap gap-3">
            <Link
              href="https://www.facebook.com/utdaayush/"
              target="_blank"
              className="group flex flex-col items-center space-y-2 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-[#F7BD3A]/20 hover:border-[#F7BD3A]/50 transition-all duration-300 hover:scale-110"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-[#F7BD3A] to-[#FCE2A6] group-hover:from-[#FCE2A6] group-hover:to-[#F7BD3A] transition-all duration-300">
                <svg className="h-5 w-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
              <span className="text-xs text-gray-400 group-hover:text-[#F7BD3A] transition-colors duration-300">
                Facebook
              </span>
            </Link>

            <Link
              href="https://www.instagram.com/utdaayush_/"
              target="_blank"
              className="group flex flex-col items-center space-y-2 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-[#F7BD3A]/20 hover:border-[#F7BD3A]/50 transition-all duration-300 hover:scale-110"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-[#F7BD3A] to-[#FCE2A6] group-hover:from-[#FCE2A6] group-hover:to-[#F7BD3A] transition-all duration-300">
                <svg className="h-5 w-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323C5.902 8.198 7.053 7.708 8.35 7.708s2.448.49 3.323 1.297c.897.875 1.387 2.026 1.387 3.323s-.49 2.448-1.297 3.323c-.875.897-2.026 1.387-3.323 1.387zm7.718 0c-1.297 0-2.448-.49-3.323-1.297-.897-.875-1.387-2.026-1.387-3.323s.49-2.448 1.297-3.323c.875-.897 2.026-1.387 3.323-1.387s2.448.49 3.323 1.297c.897.875 1.387 2.026 1.387 3.323s-.49 2.448-1.297 3.323c-.875.897-2.026 1.387-3.323 1.387z" />
                </svg>
              </div>
              <span className="text-xs text-gray-400 group-hover:text-[#F7BD3A] transition-colors duration-300">
                Instagram
              </span>
            </Link>

            <Link
              href="https://www.linkedin.com/in/utdaayush/"
              target="_blank"
              className="group flex flex-col items-center space-y-2 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-[#F7BD3A]/20 hover:border-[#F7BD3A]/50 transition-all duration-300 hover:scale-110"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-[#F7BD3A] to-[#FCE2A6] group-hover:from-[#FCE2A6] group-hover:to-[#F7BD3A] transition-all duration-300">
                <svg className="h-5 w-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <span className="text-xs text-gray-400 group-hover:text-[#F7BD3A] transition-colors duration-300">
                LinkedIn
              </span>
            </Link>

            <Link
              href="https://www.youtube.com/@utdaayush"
              target="_blank"
              className="group flex flex-col items-center space-y-2 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-[#F7BD3A]/20 hover:border-[#F7BD3A]/50 transition-all duration-300 hover:scale-110"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-[#F7BD3A] to-[#FCE2A6] group-hover:from-[#FCE2A6] group-hover:to-[#F7BD3A] transition-all duration-300">
                <svg className="h-5 w-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </div>
              <span className="text-xs text-gray-400 group-hover:text-[#F7BD3A] transition-colors duration-300">
                YouTube
              </span>
            </Link>

            <Link
              href="https://www.tiktok.com/@utdaayush"
              target="_blank"
              className="group flex flex-col items-center space-y-2 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-[#F7BD3A]/20 hover:border-[#F7BD3A]/50 transition-all duration-300 hover:scale-110"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-[#F7BD3A] to-[#FCE2A6] group-hover:from-[#FCE2A6] group-hover:to-[#F7BD3A] transition-all duration-300">
                <svg className="h-5 w-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </div>
              <span className="text-xs text-gray-400 group-hover:text-[#F7BD3A] transition-colors duration-300">
                TikTok
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
