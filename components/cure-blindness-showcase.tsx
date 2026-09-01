"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Play } from "lucide-react"

const projects = [
  {
    id: "oJp8oA4GRew",
    title: "Cure Blindness Project — Field Story",
    url: "https://youtu.be/oJp8oA4GRew",
  },
  {
    id: "U5_govi42UQ",
    title: "Cure Blindness Project — Nepal",
    url: "https://youtu.be/U5_govi42UQ",
  },
]

function ShowcaseCard({ id, title, url }: (typeof projects)[number]) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [shouldLoad, setShouldLoad] = useState(false)
  const [embedFailed, setEmbedFailed] = useState(false)

  useEffect(() => {
    const card = cardRef.current
    if (!card) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      { rootMargin: "240px 0px" },
    )

    observer.observe(card)
    return () => observer.disconnect()
  }, [])

  const thumbnail = `https://img.youtube.com/vi/${id}/hqdefault.jpg`
  const embedUrl = `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&playsinline=1&loop=1&playlist=${id}&controls=0&rel=0&modestbranding=1`

  return (
    <div ref={cardRef} className="group min-w-0">
      <button
        type="button"
        onClick={() => window.open(url, "_blank", "noopener,noreferrer")}
        className="relative block aspect-video w-full cursor-pointer overflow-hidden rounded-2xl border-2 border-red-500/30 bg-zinc-950 text-left shadow-2xl transition-all duration-300 hover:border-red-500/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        aria-label={`Watch ${title} on YouTube`}
      >
        <img
          src={thumbnail}
          alt=""
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${shouldLoad && !embedFailed ? "opacity-0" : "opacity-100"}`}
        />
        {shouldLoad && !embedFailed && (
          <iframe
            src={embedUrl}
            title={`${title} muted preview`}
            allow="autoplay; encrypted-media; picture-in-picture"
            loading="lazy"
            onError={() => setEmbedFailed(true)}
            className="pointer-events-none absolute inset-0 h-full w-full border-0 opacity-100"
          />
        )}
        <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/35 text-white backdrop-blur-sm transition-transform duration-300 group-hover:scale-105 group-focus-visible:scale-105">
          <Play className="ml-0.5 h-6 w-6 fill-current" aria-hidden="true" />
        </span>
        <span className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-4 text-xs font-medium uppercase tracking-[0.18em] text-white/80">
          <span>Cure Blindness Project</span>
          <ExternalLink className="h-4 w-4 shrink-0" aria-hidden="true" />
        </span>
      </button>
    </div>
  )
}

export default function CureBlindnessShowcase() {
  return (
    <section className="bg-black py-16 sm:py-20 lg:py-24" aria-labelledby="cure-blindness-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-red-500">Featured Documentary Work</p>
          <h2 id="cure-blindness-heading" className="mb-6 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Production for Cure Blindness Project
          </h2>
          <p className="text-base leading-relaxed text-gray-400 sm:text-lg">
            Orite Production provided end-to-end video production support for Cure Blindness Project in Nepal, working in coordination with the organization&apos;s Communications Manager. The productions were directed and coordinated in Nepal by Aayush Tiwari, supported by freelance cinematographers and production crew to document impactful stories from the field.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {projects.map((project) => (
            <ShowcaseCard key={project.id} {...project} />
          ))}
        </div>

        <div className="mt-10 border-t border-red-500/20 pt-8 sm:mt-12 sm:pt-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-red-500">Full-Service Production in Nepal</p>
          <p className="max-w-4xl text-sm leading-relaxed text-gray-400 sm:text-base">
            Orite Production handled the Nepal-side video production in coordination with Cure Blindness Project&apos;s Communications Manager. Aayush Tiwari directed and coordinated the productions alongside freelance cinematographers and crew, using a Sony A7S III and professional Sony camera and lens system for lightweight, high-quality field storytelling.
          </p>
        </div>
      </div>
    </section>
  )
}
