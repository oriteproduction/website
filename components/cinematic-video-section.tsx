"use client"

import { useRef, useEffect, useState } from "react"

interface CinematicVideoSectionProps {
  videoUrl: string
}

export default function CinematicVideoSection({ videoUrl }: CinematicVideoSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Ensure video plays when component mounts
    if (videoRef.current) {
      videoRef.current.addEventListener("loadeddata", () => {
        setIsLoaded(true)
        videoRef.current?.play().catch((error) => {
          console.error("Video autoplay failed:", error)
        })
      })
    }
  }, [])

  return (
    <div className="relative w-full overflow-hidden" style={{ paddingBottom: "41.84%" }}>
      {/* The paddingBottom value of 41.84% maintains the 2.39:1 aspect ratio (1/2.39 ≈ 0.4184) */}

      {/* Loading state */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-zinc-900 flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-zinc-700 border-t-red-500 rounded-full animate-spin"></div>
        </div>
      )}

      <video
        ref={videoRef}
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}
