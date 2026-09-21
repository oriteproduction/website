"use client"

/* ==========================================================================
   VIEWFINDER HERO — the full-screen video at the top of the homepage
   ==========================================================================

   You should NOT need to edit this file to change any wording or videos.
   All the text and video IDs are passed in from app/page.tsx (look for
   the "EDIT 1 — HERO" block there).

   What this file does:
   - Plays your showreel as a muted, looping background video
     (landscape version on computers, portrait version on phones held upright)
   - Draws the camera "viewfinder" on top: corner brackets, REC dot, timecode
   - Shows your headline, a line of text and two buttons
   - "Play Showreel" opens the full showreel with sound in a pop-up

   Your old hero (components/video-hero.tsx) is left untouched. To go back
   to it, see the note at the top of app/page.tsx.
   ========================================================================== */

import { useEffect, useState } from "react"
import Link from "next/link"
import { Play } from "lucide-react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"

export type ViewfinderHeroProps = {
  landscapeVideoId: string
  portraitVideoId: string
  headlineLine1: string
  headlineLine2: string
  subtext: string
  primaryButtonLabel: string
  primaryButtonHref: string
  showreelButtonLabel: string
  hudTopLeft: string
  hudTopRight: string
  hudBottomLeft: string
  hudBottomRight: string
}

export default function ViewfinderHero({
  landscapeVideoId,
  portraitVideoId,
  headlineLine1,
  headlineLine2,
  subtext,
  primaryButtonLabel,
  primaryButtonHref,
  showreelButtonLabel,
  hudTopLeft,
  hudTopRight,
  hudBottomLeft,
  hudBottomRight,
}: ViewfinderHeroProps) {
  const [isPortrait, setIsPortrait] = useState(false)
  const [isShowreelOpen, setIsShowreelOpen] = useState(false)

  // Same logic as your old hero: phones held upright get the portrait video
  useEffect(() => {
    const updateOrientation = () => {
      setIsPortrait(window.matchMedia("(orientation: portrait)").matches)
    }
    updateOrientation()
    window.addEventListener("resize", updateOrientation)
    return () => window.removeEventListener("resize", updateOrientation)
  }, [])

  const backgroundVideoId = isPortrait ? portraitVideoId : landscapeVideoId

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black text-white">
      {/* ---------- Background video (same settings as your old hero) ---------- */}
      <div className="absolute inset-0 z-0">
        <iframe
          src={`https://www.youtube.com/embed/${backgroundVideoId}?autoplay=1&controls=0&mute=1&loop=1&playlist=${backgroundVideoId}&playsinline=1&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Background showreel"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.77vh] h-[100vh] min-w-full min-h-[56.25vw] max-w-none pointer-events-none opacity-60"
          style={{ border: "none" }}
        />
      </div>

      {/* Darkens the video so the text is readable */}
      <div className="absolute inset-0 z-10 bg-black/55" />

      {/* ---------- Viewfinder overlay (decoration only) ---------- */}
      {/* top-28 keeps everything below your fixed header */}
      <div className="pointer-events-none absolute inset-x-4 md:inset-x-12 top-24 md:top-28 bottom-8 md:bottom-12 z-20">
        {/* Four corner brackets */}
        <div className="absolute top-0 left-0 w-8 h-8 md:w-12 md:h-12 border-t-2 border-l-2 border-white" />
        <div className="absolute top-0 right-0 w-8 h-8 md:w-12 md:h-12 border-t-2 border-r-2 border-white" />
        <div className="absolute bottom-0 left-0 w-8 h-8 md:w-12 md:h-12 border-b-2 border-l-2 border-white" />
        <div className="absolute bottom-0 right-0 w-8 h-8 md:w-12 md:h-12 border-b-2 border-r-2 border-white" />

        {/* Corner labels */}
        <div className="absolute top-4 left-10 md:top-5 md:left-16 flex items-center gap-2 font-mono text-xs md:text-sm tracking-widest">
          <span className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-600 animate-pulse" />
          {hudTopLeft}
        </div>
        <div className="hidden sm:block absolute top-5 right-16 font-mono text-sm tracking-widest text-zinc-300">
          {hudTopRight}
        </div>
        <div className="hidden sm:block absolute bottom-5 left-16 font-mono text-sm tracking-widest text-zinc-300">
          {hudBottomLeft}
        </div>
        <div className="absolute bottom-4 right-10 md:bottom-5 md:right-16 font-mono text-xs md:text-sm tracking-widest text-zinc-300">
          {hudBottomRight}
        </div>
      </div>

      {/* ---------- Headline, text and buttons ---------- */}
      <div className="relative z-30 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold leading-[0.98] tracking-tighter">
          {headlineLine1}
          <br />
          {headlineLine2}
        </h1>
        <p className="mt-6 md:mt-8 max-w-xl text-base sm:text-lg md:text-xl leading-relaxed text-zinc-300">{subtext}</p>
        <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
          <Link
            href={primaryButtonHref}
            className="inline-flex h-14 items-center justify-center rounded-lg bg-red-600 px-8 font-semibold text-white transition-colors hover:bg-red-700"
          >
            {primaryButtonLabel}
          </Link>
          <button
            type="button"
            onClick={() => setIsShowreelOpen(true)}
            className="inline-flex h-14 items-center justify-center gap-3 rounded-lg border border-zinc-400 px-7 font-medium text-white transition-colors hover:bg-white/10"
          >
            <Play className="h-4 w-4 fill-white" />
            {showreelButtonLabel}
          </button>
        </div>
      </div>

      {/* ---------- Showreel pop-up (with sound) ---------- */}
      <Dialog open={isShowreelOpen} onOpenChange={setIsShowreelOpen}>
        <DialogContent className="max-w-5xl p-0 bg-black border-zinc-800 overflow-hidden">
          <DialogTitle className="sr-only">Showreel</DialogTitle>
          <div className="aspect-video w-full">
            {isShowreelOpen && (
              <iframe
                src={`https://www.youtube.com/embed/${landscapeVideoId}?autoplay=1&rel=0&modestbranding=1`}
                title="Orite Production showreel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}