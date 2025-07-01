"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

type ServicesVideoHeroProps = {
  videoId?: string
}

export default function ServicesVideoHero({ videoId = "pJcnBuKA_gA" }: ServicesVideoHeroProps) {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 bg-black">
        <div className="absolute inset-0 w-full h-full">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&mute=1&loop=1&playlist=${videoId}&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Background Video"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.77vh] h-[100vh] max-w-none pointer-events-none opacity-60"
            style={{ border: "none" }}
          />
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black z-10" />

      {/* Foreground Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">
          What <span className="text-red-500">We Provide</span>
        </h1>

        <Link href="/contact">
          <Button size="lg" className="bg-red-600 hover:bg-red-700">
            Book Now
          </Button>
        </Link>
      </div>
    </section>
  )
}
