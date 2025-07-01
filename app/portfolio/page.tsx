"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PortfolioGrid from "@/components/portfolio-grid"
import Image from "next/image"
import { X, ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"

interface Client {
  id: string
  name: string
  logo: string
  photos: string[]
}

interface SelectedPhoto {
  url: string
  alt: string
  clientId: string
  photoIndex: number
}

const behindScenesImages = [
  "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/pic6.jpg",
  "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/pic5.jpg",
  "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/pic7.jpg",
  "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/pic8.jpg",
  "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/pic9.jpg",
  "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/pic10.jpg",
  "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/pic11.jpg",
  "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/pic12.jpg",
  "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/pic4.jpg",
  "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/pic3.jpg",
]

function PhotographyContent() {
  const [expandedClient, setExpandedClient] = useState<string | null>(null)
  const [selectedPhoto, setSelectedPhoto] = useState<SelectedPhoto | null>(null)

  const clients: Client[] = [
    {
      id: "vantuff",
      name: "Vantuff",
      logo: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/vantuff.png",
      photos: [
        "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/vantuffphoto1.jpg",
        "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/vantuffphoto2.jpg",
        "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/vantuffphoto3.jpg",
        "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/vantuffphoto4.jpg",
        "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/vantuffphoto5.jpg",
        "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/vantuffphoto6.jpg",
        "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/vantuffphoto7.jpg",
        "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/vantuffphoto8.jpg",
        "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/vantuffphoto9.jpg",
        "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/vantuffphoto10.jpg",
        "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/vantuffphoto11.jpg",
      ],
    },
    {
      id: "secpal",
      name: "SecurityPal",
      logo: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/secpal.png",
      photos: [
        "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/secpalphoto1.jpg",
        "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/secpalphoto2.jpg",
        "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/secpalphoto3.jpg",
        "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/secpalphoto4.jpg",
        "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/secpalphoto5.jpg",
        "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/secpalphoto6.jpg",
        "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/secpalphoto7.jpg",
        "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/secpalphoto8.jpg",
        "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/secpalphoto10.jpg",
      ],
    },
  ]

  const handleClientClick = (clientId: string) => {
    if (expandedClient === clientId) {
      setExpandedClient(null)
    } else {
      setExpandedClient(clientId)
    }
  }

  const handlePhotoClick = (photoUrl: string, clientName: string, clientId: string, photoIndex: number) => {
    setSelectedPhoto({
      url: photoUrl,
      alt: `${clientName} Photography`,
      clientId,
      photoIndex,
    })
  }

  const handleClosePhoto = () => {
    setSelectedPhoto(null)
  }

  const navigatePhoto = (direction: "prev" | "next") => {
    if (!selectedPhoto) return

    const currentClient = clients.find((client) => client.id === selectedPhoto.clientId)
    if (!currentClient) return

    const currentIndex = selectedPhoto.photoIndex
    let newIndex: number

    if (direction === "next") {
      newIndex = currentIndex + 1 >= currentClient.photos.length ? 0 : currentIndex + 1
    } else {
      newIndex = currentIndex - 1 < 0 ? currentClient.photos.length - 1 : currentIndex - 1
    }

    setSelectedPhoto({
      url: currentClient.photos[newIndex],
      alt: `${currentClient.name} Photography`,
      clientId: selectedPhoto.clientId,
      photoIndex: newIndex,
    })
  }

  return (
    <>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Photography</h2>
        <p className="text-gray-400 mb-6">
          Professional photography showcasing our expertise in capturing still images across various subjects and
          clients.
        </p>
      </div>

      {/* Client Logos Grid */}
      <div className="space-y-8 mb-12">
        {clients.map((client) => (
          <div key={client.id} className="w-full">
            {/* Client Logo */}
            <div
              className={`bg-zinc-900 rounded-lg p-6 cursor-pointer transition-all duration-300 hover:bg-zinc-800 border ${
                expandedClient === client.id ? "border-red-500 bg-zinc-800" : "border-zinc-800 hover:border-red-500/50"
              }`}
              onClick={() => handleClientClick(client.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 relative">
                    <Image src={client.logo || "/placeholder.svg"} alt={client.name} fill className="object-contain" />
                  </div>
                  <h3 className="text-xl font-semibold">{client.name}</h3>
                </div>
                <div className="text-red-500">
                  {expandedClient === client.id ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </div>
              </div>
            </div>

            {/* Expanded Photo Grid */}
            {expandedClient === client.id && (
              <div className="mt-4 bg-zinc-900/50 rounded-lg p-6 border border-zinc-700 animate-accordion-down">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-lg font-semibold text-red-500">{client.name} Photography</h4>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      setExpandedClient(null)
                    }}
                    className="text-gray-400 hover:text-white transition-colors p-1 hover:bg-zinc-800 rounded"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                  {client.photos.map((photo, index) => (
                    <div
                      key={index}
                      className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group border border-zinc-700 hover:border-red-500/50 transition-all duration-300"
                      onClick={() => handlePhotoClick(photo, client.name, client.id, index)}
                    >
                      <Image
                        src={photo || "/placeholder.svg"}
                        alt={`${client.name} Photo ${index + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-red-500 rounded-full p-2">
                          <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Enhanced Lightbox Modal */}
      <Dialog open={!!selectedPhoto} onOpenChange={handleClosePhoto}>
        <DialogContent className="max-w-5xl p-0 bg-black border-zinc-800 overflow-hidden">
          <div className="relative">
            {selectedPhoto && (
              <>
                <Image
                  src={selectedPhoto.url || "/placeholder.svg"}
                  alt={selectedPhoto.alt}
                  width={1200}
                  height={800}
                  className="w-full h-auto max-h-[90vh] object-contain"
                />

                {/* Close Button */}
                <button
                  className="absolute top-4 right-4 bg-black/70 hover:bg-black/90 rounded-full p-2 transition-colors duration-300 z-10"
                  onClick={handleClosePhoto}
                >
                  <X className="h-6 w-6 text-white" />
                </button>

                {/* Navigation Arrows */}
                <button
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 rounded-full p-3 transition-colors duration-300 z-10"
                  onClick={() => navigatePhoto("prev")}
                >
                  <ChevronLeft className="h-6 w-6 text-white" />
                </button>

                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 rounded-full p-3 transition-colors duration-300 z-10"
                  onClick={() => navigatePhoto("next")}
                >
                  <ChevronRight className="h-6 w-6 text-white" />
                </button>

                {/* Photo Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 px-3 py-1 rounded-full text-white text-sm">
                  {selectedPhoto.photoIndex + 1} /{" "}
                  {clients.find((c) => c.id === selectedPhoto.clientId)?.photos.length || 0}
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our diverse range of projects across various categories. Each project represents our commitment to
            quality and creativity.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8 overflow-x-auto pb-2">
            <TabsList className="bg-zinc-900">
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="commercial">Commercial</TabsTrigger>
              <TabsTrigger value="documentary">Documentary</TabsTrigger>
              <TabsTrigger value="shortfilm">Short Films</TabsTrigger>
              <TabsTrigger value="corporate clients">Corporate Clients</TabsTrigger>
              <TabsTrigger value="aerial">Aerial</TabsTrigger>
              <TabsTrigger value="photography">Photography</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Featured Projects</h2>
              <p className="text-gray-400 mb-6">A selection of our best work across all categories.</p>
            </div>
            <PortfolioGrid category="all" />
          </TabsContent>

          <TabsContent value="commercial">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Commercial Projects</h2>
              <p className="text-gray-400 mb-6">
                Promotional videos, advertisements, and brand films designed to showcase products and services.
              </p>
            </div>
            <PortfolioGrid category="commercial" />
          </TabsContent>

          <TabsContent value="documentary">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Documentary Films</h2>
              <p className="text-gray-400 mb-6">
                In-depth storytelling that captures real events, people, and places with authenticity and emotion.
              </p>
            </div>
            <PortfolioGrid category="documentary" />
          </TabsContent>

          <TabsContent value="shortfilm">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Short Films</h2>
              <p className="text-gray-400 mb-6">
                Creative narratives that showcase our storytelling abilities and production quality.
              </p>
            </div>
            <PortfolioGrid category="shortfilm" />
          </TabsContent>

          <TabsContent value="corporate clients">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Corporate Clients</h2>
              <p className="text-gray-400 mb-6">
                Corporate style videos for various clients across the Globe. Videos to show brand identity or any
                events/ campaigns.
              </p>
            </div>
            <PortfolioGrid category="corporate clients" />
          </TabsContent>

          <TabsContent value="aerial">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Aerial Videography</h2>
              <p className="text-gray-400 mb-6">Breathtaking drone footage capturing unique perspectives from above.</p>
            </div>
            <PortfolioGrid category="aerial" />
          </TabsContent>

          <TabsContent value="photography">
            <PhotographyContent />
          </TabsContent>
        </Tabs>
      </div>

      {/* Process Section */}
      <section className="py-16 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Creative Process</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Every project follows our proven creative process to ensure exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "We begin by understanding your vision, goals, and target audience to establish a solid foundation for your project.",
              },
              {
                step: "02",
                title: "Planning",
                description:
                  "Our team develops a comprehensive plan including creative direction, timeline, and production requirements.",
              },
              {
                step: "03",
                title: "Production",
                description:
                  "We execute the plan with precision, capturing high-quality footage and assets using state-of-the-art equipment.",
              },
              {
                step: "04",
                title: "Delivery",
                description:
                  "After meticulous post-production, we deliver the final product and ensure it meets your expectations.",
              },
            ].map((process, index) => (
              <div key={index} className="relative p-6">
                <div className="text-5xl font-bold text-red-500/20 absolute top-0 left-0">{process.step}</div>
                <div className="pt-10">
                  <h3 className="text-xl font-bold mb-3">{process.title}</h3>
                  <p className="text-gray-400">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Behind the Scenes Auto-Scrolling Slider */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Behind the Scenes</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Get a glimpse of our team in action — from set prep to the final shot. This is where the magic happens.
            </p>
          </div>

          <div className="overflow-hidden relative">
            <div className="flex animate-marquee space-x-6">
              {[...behindScenesImages, ...behindScenesImages].map((src, index) => (
                <div
                  key={index}
                  className="shrink-0 w-80 md:w-[400px] lg:w-[500px] h-64 md:h-80 lg:h-96 relative rounded-lg overflow-hidden"
                >
                  <Image
                    src={src || "/placeholder.svg"}
                    alt={`Behind the Scenes ${index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          width: 200%;
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </main>
  )
}
