"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"

interface HoverVideoCardProps {
  title: string
  category: string
  image: string
  videoSrc: string
  fullVideoUrl?: string
}

export default function HoverVideoCard({ title, category, image, videoSrc, fullVideoUrl }: HoverVideoCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  // Handle hover state
  const handleMouseEnter = () => {
    setIsHovered(true)
    if (videoRef.current && isVideoLoaded) {
      videoRef.current.play().catch((error) => {
        console.error("Video play failed:", error)
      })
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    if (videoRef.current) {
      videoRef.current.pause()
      // Don't reset the time to allow for a smooth transition when hovering again
    }
  }

  // Handle video loading
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener("loadeddata", () => {
        setIsVideoLoaded(true)
      })
    }
  }, [])

  return (
    <div
      className="relative rounded-lg overflow-hidden h-64 group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Video element (hidden until hovered) */}
      <video
        ref={videoRef}
        src={videoSrc}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${isHovered && isVideoLoaded ? "opacity-100" : "opacity-0"}`}
        muted
        playsInline
        loop
        preload="metadata"
      />

      {/* Image (shown by default, hidden on hover when video is loaded) */}
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${isHovered && isVideoLoaded ? "opacity-0" : "opacity-100"}`}
      >
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" priority />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 z-10">
        <span className="text-red-500 text-sm font-medium mb-1">{category}</span>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>

      {/* Play button overlay */}
      {fullVideoUrl && (
        <div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20"
          onClick={(e) => {
            e.preventDefault()
            setIsOpen(true)
          }}
        >
          <Button variant="outline" size="icon" className="rounded-full bg-red-500 border-0 hover:bg-red-600">
            <Play className="h-6 w-6 fill-white" />
          </Button>
        </div>
      )}

      {/* Modal for full video */}
      {fullVideoUrl && (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="max-w-4xl p-0 bg-black border-zinc-800">
            <div className="aspect-video w-full">
              <iframe
                src={fullVideoUrl}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
