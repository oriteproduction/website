"use client"

import { useEffect, useState } from "react"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import Link from "next/link"

type VideoHeroProps = {
  landscapeVideoId: string
  portraitVideoId: string
}

export default function VideoHero({ landscapeVideoId, portraitVideoId }: VideoHeroProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isPortrait, setIsPortrait] = useState(false)

  useEffect(() => {
    const updateOrientation = () => {
      const mq = window.matchMedia("(orientation: portrait)")
      setIsPortrait(mq.matches)
    }

    updateOrientation()
    window.addEventListener("resize", updateOrientation)
    return () => window.removeEventListener("resize", updateOrientation)
  }, [])

  const selectedVideoId = isPortrait ? portraitVideoId : landscapeVideoId

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 bg-black">
        <div className="absolute inset-0 w-full h-full">
          <iframe
            src={`https://www.youtube.com/embed/${selectedVideoId}?autoplay=1&controls=0&mute=1&loop=1&playlist=${selectedVideoId}&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1`}
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
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Bringing Your <span className="text-red-500">Vision</span> to Life
        </h1>
        <p className="text-base sm:text-lg md:text-2xl max-w-xl mb-8">
          Professional Video Production and Multimedia Services from Nepal to the World
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/services" passHref>
            <Button size="lg" className="bg-red-600 hover:bg-red-700">
              Our Services
            </Button>
          </Link>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white/10"
            onClick={() => setIsOpen(true)}
          >
            <Play className="mr-2 h-5 w-5 fill-white" /> Watch Showreel
          </Button>
        </div>
      </div>

      {/* Modal Showreel Video */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl p-0 bg-black border-zinc-800">
          <div className="aspect-video w-full">
            <iframe
              src={`https://www.youtube.com/embed/${selectedVideoId}?autoplay=1`}
              title="Showreel Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
