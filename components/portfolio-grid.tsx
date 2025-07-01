"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Play, X } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"

interface PortfolioItem {
  id: number
  title: string
  category: string
  image: string
  videoUrl?: string
  isVideo: boolean
}

interface PortfolioGridProps {
  category: string
}

export default function PortfolioGrid({ category }: PortfolioGridProps) {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)
  const [isMounted, setIsMounted] = useState(false)
  const [hoveredVideoId, setHoveredVideoId] = useState<number | null>(null)

  // Set mounted state after component mounts
  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  // Handle item selection with safety check
  const handleItemClick = useCallback(
    (item: PortfolioItem) => {
      if (isMounted) {
        setSelectedItem(item)
      }
    },
    [isMounted],
  )

  // Handle dialog close with safety check
  const handleDialogClose = useCallback(() => {
    if (isMounted) {
      setSelectedItem(null)
    }
  }, [isMounted])

  // Helper function to extract YouTube video ID from URL
  const getYouTubeVideoId = (url: string): string | null => {
    const match = url.match(/(?:youtube\.com\/embed\/|youtu\.be\/)([^?&]+)/)
    return match ? match[1] : null
  }

  // Handle mouse enter for video items
  const handleVideoMouseEnter = useCallback(
    (item: PortfolioItem) => {
      if (isMounted && item.isVideo) {
        setHoveredVideoId(item.id)
      }
    },
    [isMounted],
  )

  // Handle mouse leave for video items
  const handleVideoMouseLeave = useCallback(() => {
    if (isMounted) {
      setHoveredVideoId(null)
    }
  }, [isMounted])

  // Sample portfolio data
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "The Journey- Daraz Nepal",
      category: "documentary",
      image: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/darazjourney.jpg?height=600&width=800",
      videoUrl: "https://www.youtube.com/embed/GD0VFTc8Bac",
      isVideo: true,
    },
    {
      id: 2,
      title: "Easy Fruits Commercial",
      category: "commercial",
      image: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/easyfruitsyt.jpg?height=600&width=800", // Using the same thumbnail for testing
      videoUrl: "https://www.youtube.com/embed/EhNAU3sN6Xw",
      isVideo: true,
    },
    {
      id: 3,
      title: "Daraz Like New Launch Video",
      category: "commercial",
      image: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/darazlikenew.jpg?height=600&width=800", // Using the same thumbnail for testing
      videoUrl: "https://www.youtube.com/embed/kwDbExN61eo",
      isVideo: true,
    },

    {
      id: 4,
      title: "Dopper",
      category: "documentary",
      image: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/anishadopper.jpg?height=600&width=800", // Using the same thumbnail for testing
      videoUrl: "https://www.youtube.com/embed/ZfDDcEOpR5A",
      isVideo: true,
    },
    {
      id: 5,
      title: "Gandaki Gaupalika",
      category: "shortfilm",
      image: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/gandaki1yt.jpg?height=600&width=800",
      videoUrl: "https://www.youtube.com/embed/lZvw6H0F4gs",
      isVideo: true,
    },
    {
      id: 6,
      title: "PlayBox Arena",
      category: "commercial",
      image: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/playboxyt.jpg?height=600&width=800",
      videoUrl: "https://www.youtube.com/embed/VgWN4p1eVu4",
      isVideo: true,
    },

    {
      id: 18,
      title: "Product Photography",
      category: "photography",
      image: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/sanphoto.jpg?height=600&width=800",
      isVideo: false,
    },

    {
      id: 7,
      title: "Daraz Naya Barsha Utsav Ad",
      category: "commercial",
      image: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/daraznew1.jpg?height=600&width=800",
      videoUrl: "https://www.youtube.com/embed/SejveTiiGzE",
      isVideo: true,
    },

    {
      id: 9,
      title: "Gandaki Gaupalika",
      category: "shortfilm",
      image: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/gandaki2yt.jpg?height=600&width=800",
      videoUrl: "https://www.youtube.com/embed/GB8RdpsvGE8",
      isVideo: true,
    },
    {
      id: 14,
      title: "The Beginning of Daraz 11.11 | Biggest Sale of the Year |",
      category: "corporate clients",
      image: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/daraz11a.jpg?height=600&width=800",
      videoUrl: "https://www.youtube.com/embed/8SEQDOjliyI",
      isVideo: true,
    },
    {
      id: 20,
      title: "How does Daraz Sellers prepare for 11.11?",
      category: "corporate clients",
      image: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/daraz11b.jpg?height=600&width=800",
      videoUrl: "https://www.youtube.com/embed/MEizJDelROI",
      isVideo: true,
    },
    {
      id: 21,
      title: "How does Daraz prepare for 11.11?",
      category: "corporate clients",
      image: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/daraz11c.jpg?height=600&width=800",
      videoUrl: "https://www.youtube.com/embed/_oiVSMmS8d0",
      isVideo: true,
    },
    {
      id: 22,
      title: "Sale is still on | Daraz 11.11",
      category: "corporate clients",
      image: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/daraz11d.jpg?height=600&width=800",
      videoUrl: "https://www.youtube.com/embed/o3PXFJOXcM8",
      isVideo: true,
    },
    {
      id: 23,
      title: "Delivering Happiness | Daraz 11.11",
      category: "corporate clients",
      image: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/daraz11e.jpg?height=600&width=800",
      videoUrl: "https://www.youtube.com/embed/_f-tuABEonw",
      isVideo: true,
    },
    {
      id: 30,
      title: "ShreePech Esports Commericial",
      category: "commercial",
      image: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/shreepech1.jpg?height=600&width=800",
      videoUrl: "https://www.youtube.com/embed/AvYXZbfr8IY",
      isVideo: true,
    },
    {
      id: 8,
      title: "Rayz Financial Services",
      category: "corporate clients",
      image: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/rayzyt.jpg?height=600&width=800",
      videoUrl: "https://www.youtube.com/embed/e9w2goCqaso",
      isVideo: true,
    },
    {
      id: 31,
      title: "SecurityPal Hackathon 3.0 Event Highlights Video",
      category: "corporate clients",
      image: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/secpalhack.jpg?height=600&width=800", // Using the same thumbnail for testing
      videoUrl: "https://www.youtube.com/embed/6OtIByKY8DM",
      isVideo: true,
    },
    {
      id: 32,
      title: "A doctor's story from Rupakot",
      category: "documentary",
      image: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/subhasdoctor.jpg?height=600&width=800",
      videoUrl: "https://www.youtube.com/embed//k4vpF9bhMQo",
      isVideo: true,
    },
    {
      id: 18,
      title: "Kathmandu during Tihar",
      category: "aerial",
      image: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/ktmtihar.jpg?height=600&width=800",
      videoUrl: "https://www.youtube.com/embed/pJcnBuKA_gA",
      isVideo: true,
    },
    {
      id: 11,
      title: "Gandaki Gaupalika",
      category: "shortfilm",
      image: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/gandaki3yt.jpg?height=600&width=800",
      videoUrl: "https://www.youtube.com/embed/Vm6hhuue1Uw",
      isVideo: true,
    },
    {
      id: 12,
      title: "SecurityPal Module Intro 1",
      category: "corporate clients",
      image: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/secpalmodule1.jpg?height=600&width=800",
      videoUrl: "https://www.youtube.com/embed/6rLmyfQX_XE",
      isVideo: true,
    },
    {
      id: 34,
      title: "Travel and Tours Video - DUBAI",
      category: "commercial",
      image: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/traveldubai.jpg?height=600&width=800",
      videoUrl: "https://www.youtube.com/embed/Z7UtdSWt1Ug",
      isVideo: true,
    },
    {
      id: 13,
      title: "SecurityPal Retreat",
      category: "corporate clients",
      image: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/secpalretreat.jpg?height=600&width=800",
      videoUrl: "https://www.youtube.com/embed/CCU7dZBFVZE",
      isVideo: true,
    },
    {
      id: 19,
      title: "Kairos Attendance App",
      category: "corporate clients",
      image: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/kairosyt.jpg?height=600&width=800",
      videoUrl: "https://www.youtube.com/embed/_U6eleGlAqw",
      isVideo: true,
    },
    {
      id: 15,
      title: "SecurityPal Module Intro 2",
      category: "corporate clients",
      image: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/secpalmodule2.jpg?height=600&width=800",
      videoUrl: "https://www.youtube.com/embed/W-mFCNqhghU",
      isVideo: true,
    },
    {
      id: 16,
      title: "SecurityPal Module Intro 3",
      category: "corporate clients",
      image: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/secpalmodule3.jpg?height=600&width=800",
      videoUrl: "https://www.youtube.com/embed/6cNS_2bmjDA",
      isVideo: true,
    },
    {
      id: 17,
      title: "FAO Nepal - Nepal Food Forum 2024",
      category: "corporate clients",
      image: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/faonepalyt.jpg?height=600&width=800",
      videoUrl: "https://www.youtube.com/embed/p3EcTIPs8c4",
      isVideo: true,
    },
    {
      id: 24,
      title: "11.11 | Biggest Sale Of The Year | Daraz Nepal | Sale Is Live",
      category: "commercial",
      image: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/darazad1.jpg?height=600&width=800",
      videoUrl: "https://www.youtube.com/embed/pmPi7uI3u0E",
      isVideo: true,
    },
    {
      id: 25,
      title: "Free Delivery Festival | Sale Is Live",
      category: "commercial",
      image: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/darazad2.jpg?height=600&width=800",
      videoUrl: "https://www.youtube.com/embed/Z9rfDjHdSjM",
      isVideo: true,
    },
    {
      id: 26,
      title: "Introducing Daraz Sellers: Titan Watch",
      category: "commercial",
      image: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/titan1.jpg?height=600&width=800",
      videoUrl: "https://www.youtube.com/embed/rdM2LYtoWnQ",
      isVideo: true,
    },
    {
      id: 27,
      title: "Introducing Daraz Sellers: Ultima Lifestyle",
      category: "commercial",
      image: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/ultima1.jpg?height=600&width=800",
      videoUrl: "https://www.youtube.com/embed/V3YO8aWrb7g",
      isVideo: true,
    },
    {
      id: 28,
      title: "Introducing Daraz Sellers: MuscleBlaze",
      category: "commercial",
      image: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/muscleblaze1.jpg?height=600&width=800",
      videoUrl: "https://www.youtube.com/embed/yuKoSTeDghk",
      isVideo: true,
    },
    {
      id: 29,
      title: "Nawa Barsha Utsav is LIVE | किनौँ सबै Daraz मै |",
      category: "commercial",
      image: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/daraznew2.jpg?height=600&width=800",
      videoUrl: "https://www.youtube.com/embed/bUaGpL9Qj2A",
      isVideo: true,
    },
    {
      id: 33,
      title: "Lhakpa's Chulo | Restaurant Ad |",
      category: "commercial",
      image: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/lhakpaschuloyt.jpg?height=600&width=800",
      videoUrl: "https://www.youtube.com/embed/EWqv3-IFawI",
      isVideo: true,
    },
    {
      id: 35,
      title: "Travel and Tours Video - THAILAND",
      category: "commercial",
      image: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/travelthailand.jpg?height=600&width=800",
      videoUrl: "https://www.youtube.com/embed/u7-DIRrGsI8",
      isVideo: true,
    },
    {
      id: 36,
      title: "Travel and Tours Video - SINGAPORE",
      category: "commercial",
      image: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/travelsingapore.jpg?height=600&width=800",
      videoUrl: "https://www.youtube.com/embed/V3akLJbc0a4",
      isVideo: true,
    },
    {
      id: 10,
      title: "Drone Footage: Kalinchwok",
      category: "aerial",
      image: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/kalinchowkyt.jpg?height=600&width=800",
      videoUrl: "https://www.youtube.com/embed/wiJSGb8egkQ",
      isVideo: true,
    },

  ]

  // Filter items based on selected category
  const filteredItems =
    category === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === category)

  // Don't render until component is mounted
  if (!isMounted) {
    return null // Return null or a loading state until component is mounted
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-lg cursor-pointer"
            onClick={() => handleItemClick(item)}
            onMouseEnter={() => handleVideoMouseEnter(item)}
            onMouseLeave={handleVideoMouseLeave}
          >
            {item.isVideo && hoveredVideoId === item.id ? (
              <div className="w-full h-64 relative">
                <iframe
                  src={`https://www.youtube.com/embed/${getYouTubeVideoId(item.videoUrl || "")}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&loop=1&playlist=${getYouTubeVideoId(item.videoUrl || "")}`}
                  title={item.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full object-cover"
                  style={{ border: "none" }}
                />
              </div>
            ) : (
              <>
                {/* Using regular img tag for SVG files to ensure proper rendering */}
                {item.image.endsWith(".svg") ? (
                  <div className="w-full h-64 relative">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={800}
                    height={600}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
              </>
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
              <span className="text-red-500 text-sm font-medium mb-1 capitalize">{item.category}</span>
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
            </div>
            {item.isVideo && hoveredVideoId !== item.id && (
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="rounded-full bg-red-500 p-3">
                  <Play className="h-6 w-6 fill-white" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Modal for viewing portfolio items */}
      <Dialog open={!!selectedItem} onOpenChange={handleDialogClose}>
        <DialogContent className="max-w-4xl p-0 bg-black border-zinc-800">
          {selectedItem?.isVideo ? (
            <div className="aspect-video w-full">
              <iframe
                width="100%"
                height="100%"
                src={selectedItem.videoUrl}
                title={selectedItem.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          ) : (
            <div className="relative">
              {selectedItem?.image.endsWith(".svg") ? (
                <img
                  src={selectedItem?.image || "/placeholder.svg"}
                  alt={selectedItem?.title || ""}
                  className="w-full"
                />
              ) : (
                <Image
                  src={selectedItem?.image || ""}
                  alt={selectedItem?.title || ""}
                  width={1200}
                  height={800}
                  className="w-full"
                />
              )}
              <button
                className="absolute top-4 right-4 bg-black/50 rounded-full p-1"
                onClick={() => handleDialogClose()}
              >
                <X className="h-6 w-6 text-white" />
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
