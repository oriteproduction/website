"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import ServiceCard from "@/components/service-card"
import VideoHero from "@/components/video-hero"
import HoverVideoCard from "@/components/hover-video-card"
import CinematicVideoSection from "@/components/cinematic-video-section"

import styles from "./ClientsSection.module.css"

export default function Home() {
  const [expandedService, setExpandedService] = useState<string | null>(null)

  const clients = [
    { key: 1, imgSrc: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/GON.png" },
    { key: 2, imgSrc: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/dopper.png" },
    { key: 3, imgSrc: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/daraz.png" },
    { key: 4, imgSrc: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/secpal.png" },
    { key: 5, imgSrc: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/easyfruits.png" },
    { key: 6, imgSrc: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/playbox.png" },
    { key: 7, imgSrc: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/shreepech.png" },
    { key: 8, imgSrc: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/tapobhumi.png" },
    { key: 9, imgSrc: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/vantuff.png" },
    { key: 10, imgSrc: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/iapb.png" },
  ]

  const services = [
    {
      id: "branding",
      title: "Branding",
      description:
        "Logo design, brand storytelling, and visual content creation to help your brand stand out and connect with your audience.",
      expandedDescription:
        "Our branding services help establish a strong, recognizable identity for your business. We create comprehensive brand packages including logo design, color palettes, typography, and brand guidelines that ensure consistency across all platforms.",
      icon: "Palette",
    },
    {
      id: "content-creation",
      title: "Content Creation",
      description:
        "Compelling videos, graphics, and written content that resonate with your audience and align with your brand's voice",
      expandedDescription:
        "Our content creation team develops engaging material tailored to your target audience. From social media posts to blog articles and video content, we ensure your message is delivered effectively across all channels.",
      icon: "FileVideo",
    },
    {
      id: "video-production",
      title: "Video Production",
      description:
        "End-to-end video production services from initial concept development to the final edit for corporate videos, commercials, and events.",
      expandedDescription:
        "Our video production process covers everything from concept development and scriptwriting to filming and post-production. We use professional equipment and creative techniques to produce high-quality videos that achieve your objectives",
      icon: "Video",
    },
    {
      id: "post-production",
      title: "Post Production",
      description:
        "Meticulous editing, color correction, sound design, and special effects to enhance your visual content.",
      expandedDescription:
        "Our post-production team transforms raw footage into polished final products. We provide professional editing, color grading, sound design, and visual effects to ensure your content looks and sounds its best.",
      icon: "Film",
    },
    {
      id: "aerial-videography",
      title: "Aerial Videography",
      description:
        "State-of-the-art drone services to capture breathtaking footage from above, ideal for real estate, events, and unique perspectives.",
      expandedDescription:
        "Our aerial videography services use advanced drone technology to capture stunning perspectives from above. Perfect for real estate, events, landscapes, and promotional videos that require a unique viewpoint.",
      icon: "Plane",
    },
    {
      id: "animation",
      title: "Animation",
      description:
        "Dynamic animation and motion graphics services that tell your story in a captivating and engaging way.",
      expandedDescription:
        "Our animation services bring concepts to life through motion graphics, 2D and 3D animation. We create engaging animated content for explainer videos, product demonstrations, and brand storytelling.",
      icon: "Sparkles",
    },
  ]

  const featuredWorks = [
    {
      title: "Commercial Project",
      category: "Commercial",
      image: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/pic2.jpg?height=400&width=600",
      videoSrc: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/commercial-hover.mp4",
      fullVideoUrl: "https://www.youtube.com/embed/VgWN4p1eVu4",
    },
    {
      title: "Documentary Film",
      category: "Documentary",
      image: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/pic9.jpg?height=400&width=600",
      videoSrc: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/documentary-hover.mp4",
      fullVideoUrl: "https://www.youtube.com/embed/GD0VFTc8Bac",
    },
    {
      title: "Aerial Photography",
      category: "Aerial",
      image: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/pic3.jpg?height=400&width=600",
      videoSrc: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/aerial-hover.mp4",
      fullVideoUrl: "https://www.youtube.com/embed/pJcnBuKA_gA",
    },
  ]

  const toggleService = (id: string) => {
    setExpandedService((prev) => (prev === id ? null : id))
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <VideoHero landscapeVideoId="fZvXPYsBnz0" portraitVideoId="rC4804Ies4w" />

      {/* Services Section */}
      <section id="services" className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Professional multimedia production services tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                expandedDescription={service.expandedDescription}
                icon={service.icon}
                serviceId={service.id}
                isExpanded={expandedService === service.id}
                onToggle={() => toggleService(service.id)}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button className="bg-red-600 hover:bg-red-700">Explore All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-16 bg-zinc-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Featured Work</h2>
            <Link href="/portfolio" className="group flex items-center text-red-500 hover:text-red-400 mt-4 md:mt-0">
              View All Projects
              <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredWorks.map((work, index) => (
              <HoverVideoCard
                key={index}
                title={work.title}
                category={work.category}
                image={work.image}
                videoSrc={work.videoSrc}
                fullVideoUrl={work.fullVideoUrl}
              />
            ))}
          </div>
        </div>
      </section>

      
      {/* Clients Section */}
      <section className="bg-black text-white">
        <div className="text-center mb-12 mt-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Clients</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Trusted by businesses and organizations across the world</p>
          <p className="text-gray-500 max-w-1xl mx-auto">Our Founder/ Director has proudly worked with them.</p>
        </div>

        <div className={styles.carouselWrapper}>
          <div className={styles.carouselTrack}>
            {[...clients, ...clients].map((client, idx) => (
              <div key={`${client.key}-${idx}`} className={styles.carouselItem}>
                <Image
                  src={client.imgSrc || "/placeholder.svg"}
                  alt={`Client ${client.key}`}
                  width={100}
                  height={50}
                  style={{ objectFit: "contain", width: "160px", height: "80px" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* First Cinematic Video Section */}
      <section className="bg-black">
        <CinematicVideoSection videoUrl="https://raw.githubusercontent.com/oriteproduction/thumbnails/main/clips1.mp4" />
      </section>

      {/* Elegant Divider Section */}
      <section className="py-16 bg-black text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="inline-block relative">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent mb-4">
                Experience the Beauty of Nepal
              </h2>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 rounded-full"></div>
            </div>
            <p className="text-gray-400 text-lg md:text-xl mt-8 max-w-2xl mx-auto leading-relaxed">
              Discover the breathtaking landscapes and rich culture of Nepal through our cinematic lens
            </p>
          </div>
        </div>

        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 border border-red-500 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 border border-red-500 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-red-500 rounded-full"></div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-900 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Contact us to discuss your vision.
          </p>
          <div className="flex flex-col items-center space-y-4">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-red-700 hover:bg-gray-100">
                Get in Touch
              </Button>
            </Link>
            <Link href="/aayushtiwari">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-red-700 bg-transparent"
              >
                Meet the Creative Director
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
