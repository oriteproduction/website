"use client"

/* ==========================================================================
   ORITE PRODUCTION — HOMEPAGE
   ==========================================================================

   HOW THIS FILE IS ORGANISED
   --------------------------
   The top half is CONTENT: every word, video, image and link on the page,
   in numbered "EDIT" blocks. That is the only part you normally touch.

   The bottom half (after the big "LAYOUT" line) is DESIGN. You shouldn't
   need to go there to change wording, videos or pictures.

   EDIT 1 — Hero (big video at the top)
   EDIT 2 — Services film strip
   EDIT 3 — Featured work
   EDIT 4 — Cinematic video band
   EDIT 5 — Our Clients (moving logo strip)
   EDIT 6 — Documentary section
   EDIT 7 — Final "Ready to roll camera?" section

   EDITING RULES THAT PREVENT ERRORS
   ---------------------------------
   • Only change text INSIDE the quote marks:  title: "Change only this bit",
   • Keep the comma at the end of each line.
   • If your text needs an apostrophe, that's fine inside "double quotes":
       "Let's go"  ✔
   • If your text needs a double quote, put a backslash before it:
       "The \"best\" shot"  ✔

   HOW TO GET A YOUTUBE ID
   -----------------------
   https://youtu.be/p9d-1I4-1iY?si=abc123        → ID is  p9d-1I4-1iY
   https://www.youtube.com/watch?v=p9d-1I4-1iY   → ID is  p9d-1I4-1iY

   HOW TO ADD A PICTURE
   --------------------
   1. Upload the picture to your GitHub repo: oriteproduction/thumbnails
   2. Type its exact file name where this file asks for one,
      e.g.  image: "service-branding.jpg",
   File names are case-sensitive: "Branding.JPG" is not "branding.jpg".
   Until the file exists, a neat placeholder shows instead of a broken image.

   GOING BACK TO THE OLD HERO
   --------------------------
   Your old hero (components/video-hero.tsx) was not changed. To use it
   again, swap the <ViewfinderHero .../> line near the bottom of this file for:
     <VideoHero landscapeVideoId="fZvXPYsBnz0" portraitVideoId="rC4804Ies4w" />
   and add this import at the top:
     import VideoHero from "@/components/video-hero"
   ========================================================================== */

import { useEffect, useRef, useState } from "react"
import type { CSSProperties, ReactNode } from "react"
import Link from "next/link"
import Image from "next/image"
import { Play } from "lucide-react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import ViewfinderHero from "@/components/viewfinder-hero"
import CinematicVideoSection from "@/components/cinematic-video-section"

import styles from "./ClientsSection.module.css"

/* --------------------------------------------------------------------------
   WHERE YOUR PICTURES LIVE
   Every picture file name below is looked up in this folder.
   -------------------------------------------------------------------------- */
const IMAGE_BASE = "https://raw.githubusercontent.com/oriteproduction/thumbnails/main"

/* --------------------------------------------------------------------------
   EDIT 1 — HERO (the full-screen video at the top)
   -------------------------------------------------------------------------- */
const HERO = {
  // Background videos (YouTube IDs)
  landscapeVideoId: "fZvXPYsBnz0", // computers and phones held sideways
  portraitVideoId: "rC4804Ies4w", // phones held upright

  // The big headline is split over two lines
  headlineLine1: "Every frame,",
  headlineLine2: "on purpose.",
  // (Your old headline was: "Bringing Your Vision to Life")

  subtext: "Professional video production and multimedia services — from Nepal to the world.",

  // Red button
  primaryButtonLabel: "Start a Project",
  primaryButtonHref: "/contact",

  // Outline button — opens the landscape video above, with sound, in a pop-up
  showreelButtonLabel: "Play Showreel",

  // Small camera labels in the four corners (decoration)
  hudTopLeft: "REC",
  hudTopRight: "4K · 25 FPS · 16:9",
  hudBottomLeft: "TC 00:00:12:04",
  hudBottomRight: "KATHMANDU · NEPAL",
}

/* --------------------------------------------------------------------------
   EDIT 2 — SERVICES FILM STRIP

   Each service is one frame of the film strip. Clicking a frame opens that
   tab on your Services page.

   id      → must match the tab id on the Services page. Don't change these
             unless you also change them there.
   title   → the name under the frame
   blurb   → the short line under the name
   image   → the picture inside the frame. Upload a file with this exact
             name to your thumbnails repo and it will appear automatically.
             Pictures look best landscape, about 1200 × 800.
   -------------------------------------------------------------------------- */
const SERVICES = {
  sceneLabel: "SC 01 — SERVICES",
  title: "Six ways we roll camera",
  linkLabel: "Explore All Services",
  linkHref: "/services",
  items: [
    { id: "branding", title: "Branding", blurb: "Logo, identity, brand story.", image: "service-branding.jpg" },
    { id: "content-creation", title: "Content Creation", blurb: "Video, graphics and copy.", image: "service-content.jpg" },
    { id: "video-production", title: "Video Production", blurb: "Concept to final edit.", image: "service-video.jpg" },
    { id: "post-production", title: "Post Production", blurb: "Edit, colour, sound, animation.", image: "service-post.jpg" },
    { id: "aerial-videography", title: "Aerial Videography", blurb: "Drone work from above.", image: "service-aerial.jpg" },
    { id: "photography", title: "Photography", blurb: "Studio, outdoor, events.", image: "service-photography.jpg" },
  ],
}

/* --------------------------------------------------------------------------
   EDIT 3 — FEATURED WORK

   One big preview frame, with thumbnails underneath to switch between works.
   Hovering the big frame plays the short preview clip (on computers).
   "Watch Full Film" opens the full YouTube video in a pop-up.

   The FIRST item is the one shown when the page loads.

   image         → still picture (file name in your thumbnails repo)
   previewClip   → short silent .mp4 that plays on hover (file name in repo)
   fullVideoId   → YouTube ID of the full film
   -------------------------------------------------------------------------- */
const FEATURED = {
  sceneLabel: "SC 02 — SELECTED WORK",
  title: "Featured Work",
  watchButtonLabel: "Watch Full Film",
  allProjectsLabel: "View All Projects",
  allProjectsHref: "/portfolio",
  items: [
    {
      title: "Documentary Film",
      category: "Documentary",
      description: "Authentic human stories and social impact — shot and cut by our team.",
      image: "pic9.jpg",
      previewClip: "documentary-hover.mp4",
      fullVideoId: "GD0VFTc8Bac",
    },
    {
      title: "Commercial Project",
      category: "Commercial",
      description: "High-impact commercial content that drives engagement and brand awareness.",
      image: "pic2.jpg",
      previewClip: "commercial-hover.mp4",
      fullVideoId: "VgWN4p1eVu4",
    },
    {
      title: "Aerial Photography",
      category: "Aerial",
      description: "Breathtaking perspectives of Nepal, captured from above.",
      image: "pic3.jpg",
      previewClip: "aerial-hover.mp4",
      fullVideoId: "pJcnBuKA_gA",
    },
  ],
}

/* --------------------------------------------------------------------------
   EDIT 4 — CINEMATIC VIDEO BAND (the wide video across the whole screen)
   -------------------------------------------------------------------------- */
const CINEMATIC = {
  videoFile: "heroclip1.mp4", // file name in your thumbnails repo
  subtitle: "Every frame is an opportunity to tell a story.", // leave as "" to hide it
}

/* --------------------------------------------------------------------------
   EDIT 5 — OUR CLIENTS (the moving logo strip)

   To add a logo: upload it to your thumbnails repo, then add one line to
   "logos" below with its file name and the client's name.
   To remove one: delete its line.
   The scroll speed is set in ClientsSection.module.css (--scroll-speed).
   -------------------------------------------------------------------------- */
const CLIENTS = {
  sceneLabel: "SC 03 — OUR CLIENTS",
  title: "Our Clients",
  line1: "Trusted by businesses and organizations across the world.",
  line2: "Our Founder / Director has proudly worked with them.",
  logos: [
    { file: "GON.png", name: "Government of Nepal" },
    { file: "dopper.png", name: "Dopper" },
    { file: "daraz.png", name: "Daraz" },
    { file: "secpal.png", name: "SecurityPal" },
    { file: "easyfruits.png", name: "Easy Fruits" },
    { file: "playbox.png", name: "Playbox" },
    { file: "shreepech.png", name: "Shreepech" },
    { file: "tapobhumi.png", name: "Tapobhumi" },
    { file: "vantuff.png", name: "Vantuff" },
    { file: "rayzlogo.png", name: "Rayz" },
    { file: "auroravpn.png", name: "Aurora VPN" },
    { file: "scaefnepal.png", name: "SCAEF Nepal" },
    { file: "callidream.png", name: "Calli Dream" },
    { file: "shubhavani.png", name: "Shubhavani" },
    { file: "cureblindnessprojectlogo.png", name: "Cure Blindness Project" },
    { file: "floralogo.png", name: "Flora" },
    { file: "nettvlogo.png", name: "NET TV" },
  ],
}

/* --------------------------------------------------------------------------
   EDIT 6 — DOCUMENTARY SECTION
   -------------------------------------------------------------------------- */
const DOCUMENTARY = {
  sceneLabel: "SC 04 — ON LOCATION",
  title: "Filming a documentary in Nepal?",
  body: "Trusted by NGOs, development partners and local government across Nepal. We take care of permits, crew and post-production so your team can focus on the film.",
  buttonLabel: "Documentary Production",
  buttonHref: "/documentaryproduction",
  image: "documentary-location.jpg", // upload this to your repo to replace the placeholder
}

/* --------------------------------------------------------------------------
   EDIT 7 — FINAL CALL TO ACTION (red section at the bottom)
   -------------------------------------------------------------------------- */
const FINAL_CTA = {
  sceneLabel: "NEXT SCENE — YOURS",
  title: "Ready to roll camera?",
  primaryButtonLabel: "Get in Touch",
  primaryButtonHref: "/contact",
  secondaryButtonLabel: "Meet the Creative Director",
  secondaryButtonHref: "/aayushtiwari",
}

/* ==========================================================================
   ==========================================================================
   LAYOUT — everything below is design. You shouldn't need to edit it to
   change wording, videos or pictures.
   ==========================================================================
   ========================================================================== */

const imageUrl = (file: string) => `${IMAGE_BASE}/${file}`

// Striped placeholder used wherever a picture hasn't been uploaded yet
const PLACEHOLDER_STYLE: CSSProperties = {
  backgroundColor: "#111114",
  backgroundImage: "repeating-linear-gradient(135deg, #141418 0px, #141418 12px, #0f0f12 12px, #0f0f12 24px)",
}

/* Shows a picture from the repo. If the file doesn't exist yet, shows a
   striped placeholder with the expected file name instead of a broken image. */
function RepoImage({ file, alt, className = "" }: { file: string; alt: string; className?: string }) {
  const [failed, setFailed] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    setFailed(false)
    // Catches images that failed before the page finished loading
    const img = imgRef.current
    if (img && img.complete && img.naturalWidth === 0) setFailed(true)
  }, [file])

  if (!file || failed) {
    return (
      <div className={`absolute inset-0 flex items-end p-2 ${className}`} style={PLACEHOLDER_STYLE}>
        <span className="font-mono text-[10px] text-zinc-500 break-all">{file || "no image set"}</span>
      </div>
    )
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={imgRef}
      src={imageUrl(file)}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`absolute inset-0 h-full w-full object-cover ${className}`}
    />
  )
}

// Small red monospace label above each section, e.g. "SC 01 — SERVICES"
function SceneLabel({ children }: { children: ReactNode }) {
  return <span className="font-mono text-xs md:text-sm tracking-[0.14em] text-red-500">{children}</span>
}

// A row of film sprocket holes
function Sprockets() {
  return (
    <div className="flex h-7 items-center gap-5 overflow-hidden" aria-hidden="true">
      {Array.from({ length: 60 }).map((_, i) => (
        <span key={i} className="h-2.5 w-4 flex-shrink-0 rounded-sm bg-zinc-800" />
      ))}
    </div>
  )
}

/* ---------------------------- SERVICES STRIP ---------------------------- */
function ServicesStrip() {
  return (
    <section id="services" className="bg-black py-28 md:py-40 text-white">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-6 md:flex-row md:items-end md:justify-between md:px-20 pb-10 md:pb-14">
        <div className="flex flex-col gap-3 md:gap-4">
          <SceneLabel>{SERVICES.sceneLabel}</SceneLabel>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">{SERVICES.title}</h2>
        </div>
        <Link href={SERVICES.linkHref} className="font-semibold text-red-500 hover:text-red-400">
          {SERVICES.linkLabel} →
        </Link>
      </div>

      {/* The strip scrolls sideways on phones, sits in one row on computers */}
      <div className="overflow-x-auto border-y border-zinc-900 bg-zinc-950 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="mx-auto min-w-[960px] max-w-[1440px] px-6 md:px-20">
          <Sprockets />
          <div className="grid grid-cols-6 gap-3">
            {SERVICES.items.map((service, i) => (
              <Link
                key={service.id}
                href={`/services?tab=${service.id}`}
                aria-label={service.title}
                className="group relative block h-36 md:h-40 overflow-hidden rounded border-2 border-transparent transition-colors hover:border-red-600"
              >
                <RepoImage
                  file={service.image}
                  alt={service.title}
                  className="transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute bottom-2 left-2 font-mono text-[11px] text-white/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </Link>
            ))}
          </div>
          <Sprockets />
        </div>
      </div>

      <div className="overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="mx-auto grid min-w-[960px] max-w-[1440px] grid-cols-6 gap-3 px-6 pt-7 md:px-20">
          {SERVICES.items.map((service) => (
            <Link key={service.id} href={`/services?tab=${service.id}`} className="group flex flex-col gap-1.5">
              <span className="text-base md:text-lg font-bold text-white transition-colors group-hover:text-red-500">
                {service.title}
              </span>
              <span className="text-sm leading-relaxed text-zinc-400">{service.blurb}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ----------------------------- FEATURED WORK ---------------------------- */
function FeaturedWork() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPreviewPlaying, setIsPreviewPlaying] = useState(false)
  const [isFilmOpen, setIsFilmOpen] = useState(false)
  const previewRef = useRef<HTMLVideoElement>(null)

  const work = FEATURED.items[activeIndex]

  const startPreview = () => {
    previewRef.current?.play().catch(() => {})
  }
  const stopPreview = () => {
    previewRef.current?.pause()
    setIsPreviewPlaying(false)
  }

  return (
    <section id="work" className="border-t border-zinc-900 bg-black py-28 md:py-36 text-white">
      <div className="mx-auto max-w-[1440px] px-6 md:px-20">
        <div className="flex flex-col gap-3 md:gap-4 pb-10 md:pb-12">
          <SceneLabel>{FEATURED.sceneLabel}</SceneLabel>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">{FEATURED.title}</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-14">
          {/* Big preview frame */}
          <div
            className="relative aspect-video overflow-hidden rounded-lg bg-zinc-900 lg:aspect-auto lg:h-[400px]"
            onMouseEnter={startPreview}
            onMouseLeave={stopPreview}
          >
            <RepoImage key={`img-${activeIndex}`} file={work.image} alt={work.title} />
            <video
              key={`clip-${activeIndex}`}
              ref={previewRef}
              src={imageUrl(work.previewClip)}
              muted
              loop
              playsInline
              preload="none"
              onPlaying={() => setIsPreviewPlaying(true)}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
                isPreviewPlaying ? "opacity-100" : "opacity-0"
              }`}
            />
            {/* Progress line along the bottom edge (decoration) */}
            <span className="absolute inset-x-0 bottom-0 h-1 bg-white/20" />
            <span className="absolute bottom-0 left-0 h-1 w-[38%] bg-red-600" />
          </div>

          {/* Text next to the frame */}
          <div className="flex flex-col gap-4 lg:pt-2">
            <span className="text-sm font-semibold uppercase tracking-[0.14em] text-red-500">{work.category}</span>
            <h3 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight">{work.title}</h3>
            <p className="text-base leading-relaxed text-zinc-400">{work.description}</p>
            <button
              type="button"
              onClick={() => setIsFilmOpen(true)}
              className="mt-2 inline-flex h-12 items-center gap-3 self-start rounded-lg bg-red-600 px-6 font-semibold text-white transition-colors hover:bg-red-700"
            >
              <Play className="h-4 w-4 fill-white" />
              {FEATURED.watchButtonLabel}
            </button>
            <Link href={FEATURED.allProjectsHref} className="font-semibold text-red-500 hover:text-red-400">
              {FEATURED.allProjectsLabel} →
            </Link>
          </div>
        </div>

        {/* Thumbnails to switch between works */}
        <div className="grid grid-cols-3 gap-3 pt-8 sm:max-w-[700px] md:gap-4">
          {FEATURED.items.map((item, i) => {
            const isActive = i === activeIndex
            return (
              <button
                key={item.title}
                type="button"
                onClick={() => {
                  setIsPreviewPlaying(false)
                  setActiveIndex(i)
                }}
                aria-label={item.title}
                aria-current={isActive ? "true" : undefined}
                className={`relative h-20 sm:h-28 overflow-hidden rounded-md border-2 transition-colors ${
                  isActive ? "border-red-600" : "border-zinc-700 hover:border-zinc-500"
                }`}
              >
                <RepoImage file={item.image} alt="" className={isActive ? "" : "opacity-60"} />
                <span className="absolute bottom-2 left-2.5 text-xs sm:text-sm font-semibold text-white drop-shadow">
                  {item.category}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Full film pop-up */}
      <Dialog open={isFilmOpen} onOpenChange={setIsFilmOpen}>
        <DialogContent className="max-w-5xl p-0 bg-black border-zinc-800 overflow-hidden">
          <DialogTitle className="sr-only">{work.title}</DialogTitle>
          <div className="aspect-video w-full">
            {isFilmOpen && (
              <iframe
                src={`https://www.youtube.com/embed/${work.fullVideoId}?autoplay=1&rel=0&modestbranding=1`}
                title={work.title}
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

/* ------------------------------ CINEMATIC BAND -------------------------- */
function CinematicBand() {
  return (
    <section className="relative bg-black">
      {/* Your existing component — unchanged, same 2.39:1 widescreen shape */}
      <CinematicVideoSection videoUrl={imageUrl(CINEMATIC.videoFile)} />
      {CINEMATIC.subtitle && (
        <p className="pointer-events-none absolute bottom-4 md:bottom-10 left-1/2 -translate-x-1/2 max-w-[90%] bg-black/75 px-3 py-1.5 md:px-4 md:py-2 text-center text-sm md:text-2xl font-medium text-white">
          {CINEMATIC.subtitle}
        </p>
      )}
    </section>
  )
}

/* ------------------------------- CLIENTS -------------------------------- */
function Clients() {
  return (
    <section className="bg-black py-28 md:py-36 text-white">
      <div className="flex flex-col items-center gap-4 px-6 text-center">
        <SceneLabel>{CLIENTS.sceneLabel}</SceneLabel>
        <h2 className="mt-2 text-4xl md:text-5xl font-extrabold tracking-tight">{CLIENTS.title}</h2>
        <p className="text-base md:text-lg text-zinc-300">{CLIENTS.line1}</p>
        <p className="text-sm md:text-base text-zinc-400">{CLIENTS.line2}</p>
      </div>

      {/* Same moving strip as your current site — styles come from ClientsSection.module.css.
          The list is repeated twice so the loop has no gap. */}
      <div className={`${styles.carouselWrapper} mt-8 md:mt-10`}>
        <div className={styles.carouselTrack}>
          {[...CLIENTS.logos, ...CLIENTS.logos].map((logo, idx) => (
            <div key={`${logo.file}-${idx}`} className={styles.carouselItem}>
              <Image
                src={imageUrl(logo.file)}
                alt={logo.name}
                width={100}
                height={50}
                style={{ objectFit: "contain", width: "160px", height: "80px" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ----------------------------- DOCUMENTARY ------------------------------ */
function Documentary() {
  return (
    <section className="border-t border-zinc-900 bg-black py-28 md:py-36 text-white">
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-6 md:px-20 lg:grid-cols-2 lg:gap-24">
        <div className="relative aspect-video overflow-hidden rounded-lg lg:aspect-auto lg:h-[360px]">
          <RepoImage file={DOCUMENTARY.image} alt={DOCUMENTARY.title} />
          {/* Viewfinder corners */}
          <span className="pointer-events-none absolute left-4 top-4 h-7 w-7 border-l-2 border-t-2 border-white" />
          <span className="pointer-events-none absolute bottom-4 right-4 h-7 w-7 border-b-2 border-r-2 border-white" />
        </div>
        <div className="flex flex-col gap-6">
          <SceneLabel>{DOCUMENTARY.sceneLabel}</SceneLabel>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-[1.05] tracking-tight">{DOCUMENTARY.title}</h2>
          <p className="text-base md:text-lg leading-relaxed text-zinc-400">{DOCUMENTARY.body}</p>
          <Link
            href={DOCUMENTARY.buttonHref}
            className="inline-flex min-h-[52px] items-center self-start rounded-lg bg-red-600 px-7 font-semibold text-white transition-colors hover:bg-red-700"
          >
            {DOCUMENTARY.buttonLabel}
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------ FINAL CTA ------------------------------- */
function FinalCta() {
  return (
    <section className="bg-red-800 px-6 py-24 md:py-32 text-center text-white">
      <div className="flex flex-col items-center gap-6 md:gap-7">
        <span className="font-mono text-xs md:text-sm tracking-[0.14em] text-red-200">{FINAL_CTA.sceneLabel}</span>
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">{FINAL_CTA.title}</h2>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-1">
          <Link
            href={FINAL_CTA.primaryButtonHref}
            className="inline-flex h-14 items-center justify-center rounded-lg bg-white px-8 font-bold text-red-800 transition-colors hover:bg-zinc-100"
          >
            {FINAL_CTA.primaryButtonLabel}
          </Link>
          <Link
            href={FINAL_CTA.secondaryButtonHref}
            className="inline-flex h-14 items-center justify-center rounded-lg border border-white px-7 font-semibold text-white transition-colors hover:bg-white hover:text-red-800"
          >
            {FINAL_CTA.secondaryButtonLabel}
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------ THE PAGE -------------------------------- */
// This is the order sections appear in. To move a section, move its line.
// To hide a section, wrap its line in curly brackets and a comment, e.g.
//     {/* <Clients /> */}
// Remove the brackets and comment marks again to bring it back.
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <ViewfinderHero {...HERO} />
      <ServicesStrip />
      <FeaturedWork />
      <CinematicBand />
      <Clients />
      <Documentary />
      <FinalCta />
    </main>
  )
}