"use client"

import React, { Suspense } from "react"

import type { ReactNode } from "react"

import { useEffect, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Video, Film, FileVideo, Plane, Camera, Palette, Play, CheckCircle, ChevronDown, ChevronUp } from "lucide-react"

/* ==========================================================================
   ORITE PRODUCTION — SERVICES PAGE
   ==========================================================================

   EVERYTHING YOU'LL WANT TO CHANGE IS IN THE BLOCKS BELOW, MARKED "EDIT".
   You should never need to scroll past EDIT 6 to change a video or a photo.

   HOW TO GET A YOUTUBE ID
   -----------------------
   From  https://youtu.be/p9d-1I4-1iY?si=s7Skx_-2zM-PX-6x
   the ID is  p9d-1I4-1iY
   (everything from "?si=" onwards is share tracking — delete it)

   From  https://www.youtube.com/watch?v=p9d-1I4-1iY
   the ID is also  p9d-1I4-1iY   (the bit after "v=")

   ========================================================================== */

/* --------------------------------------------------------------------------
   EDIT 1 — WHERE YOUR IMAGES LIVE
   -------------------------------------------------------------------------- */
const IMAGE_BASE = "https://raw.githubusercontent.com/oriteproduction/thumbnails/main"

/* --------------------------------------------------------------------------
   EDIT 2 — SERVICES: THE TABS, THEIR TEXT, AND THEIR VIDEOS

   Each service has TWO optional videos:
     videoId          → the big video at the top right (AUTOPLAYS, muted)
     showcaseVideoId  → a second video underneath it (does NOT autoplay)

   Leave showcaseVideoId out entirely if a service has no second video —
   the box simply won't appear. No more empty black rectangles.
   -------------------------------------------------------------------------- */
interface Service {
  id: string
  title: string
  description: string
  features: Array<{ title: string; description: string }>
  videoId: string
  showcaseVideoId?: string
  icon: ReactNode
}

const SERVICES: Service[] = [
  {
    id: "video-production",
    title: "Video Production",
    description:
      "From concept to completion, our video production team delivers high-quality videos that captivate your audience. We handle every aspect of the production process, including scriptwriting, storyboarding, filming, and editing.",
    videoId: "LehSpll-XQs",
    showcaseVideoId: "0KpP3vsvzm8",// showcaseVideoId: "PUT_AN_ID_HERE",
    icon: <Video className="h-8 w-8 text-red-500" />,
    features: [
      {
        title: "Commercial & promotional videos",
        description:
          "High-impact videos designed to showcase your products and services with compelling storytelling and professional cinematography.",
      },
      {
        title: "Corporate films and documentaries",
        description:
          "Professional corporate content that communicates your brand values and tells your company's story with authenticity and impact.",
      },
      {
        title: "Event videography",
        description:
          "Comprehensive coverage of your special events, capturing key moments and creating lasting memories with cinematic quality.",
      },
      {
        title: "Product videos",
        description:
          "Detailed product showcases that highlight features and benefits, helping customers understand and connect with your offerings.",
      },
      {
        title: "Testimonial videos",
        description:
          "Authentic customer stories that build trust and credibility, featuring real experiences that resonate with your target audience.",
      },
      {
        title: "Studio Video Production",
        description:
          "Controlled environment filming with professional lighting and sound equipment for consistent, high-quality results.",
      },
    ],
  },
  {
    id: "post-production",
    title: "Post Production",
    description:
      "Our post-production services transform raw footage into polished, professional content. We offer comprehensive editing, color grading, sound design, and visual effects to enhance your visual content.",
    videoId: "VgWN4p1eVu4",
    showcaseVideoId: "Ccy20WdmNuU",
    icon: <Film className="h-8 w-8 text-red-500" />,
    features: [
      {
        title: "Video editing and color grading",
        description:
          "Professional editing with seamless transitions and color correction that enhances the visual appeal and maintains consistency throughout your content.",
      },
      {
        title: "Sound design and audio mixing",
        description:
          "Crystal-clear audio production including background music, sound effects, and voice-over integration for immersive viewing experiences.",
      },
      {
        title: "Motion graphics and animation",
        description:
          "Dynamic visual elements, animated logos, and graphic overlays that add professional polish and engage your audience effectively.",
      },
      {
        title: "Visual effects (VFX)",
        description:
          "Advanced digital effects and compositing that enhance storytelling and create stunning visual experiences that captivate viewers.",
      },
      {
        title: "3D animation",
        description:
          "Three-dimensional animated content for product demonstrations, architectural visualizations, and creative storytelling applications.",
      },
      {
        title: "Subtitling and captioning",
        description:
          "Accurate subtitle creation and closed captioning services to make your content accessible to wider audiences and improve engagement.",
      },
    ],
  },
  {
    id: "content-creation",
    title: "Content Creation",
    description:
      "Our content creation services focus on developing engaging and effective content that tells your story across multiple platforms. We craft compelling videos, graphics, and written content that resonate with your audience.",
    videoId: "PW_OqH_FVtI",
    showcaseVideoId: "y7ho5QMxX8g",
    icon: <FileVideo className="h-8 w-8 text-red-500" />,
    features: [
      {
        title: "Social media content creation",
        description:
          "Platform-specific content optimized for Instagram, Facebook, TikTok, and other social channels to maximize engagement and reach.",
      },
      {
        title: "Blog and article writing",
        description:
          "SEO-optimized written content that establishes thought leadership and drives organic traffic to your digital platforms.",
      },
      {
        title: "Graphic design for digital platforms",
        description:
          "Eye-catching visual designs for websites, social media, and marketing materials that align with your brand identity.",
      },
      {
        title: "Video content for multiple channels",
        description:
          "Versatile video content adapted for various platforms and audiences, ensuring consistent messaging across all touchpoints.",
      },
      {
        title: "Content strategy development",
        description:
          "Comprehensive planning and strategic approach to content creation that aligns with your business goals and target audience.",
      },
      {
        title: "Content calendar planning",
        description:
          "Organized scheduling and planning of content releases to maintain consistent brand presence and audience engagement.",
      },
    ],
  },
  {
    id: "aerial-videography",
    title: "Aerial Videography",
    description:
      "Capture breathtaking perspectives with our aerial videography services. Using state-of-the-art drone technology, we provide stunning aerial footage for real estate, events, landscapes, and more.",
    videoId: "VFr0TzEp4Bk", // ← NEW hero video (autoplays, muted)
    showcaseVideoId: "p9d-1I4-1iY", // 
    icon: <Plane className="h-8 w-8 text-red-500" />,
    features: [
      {
        title: "Aerial photography",
        description:
          "High-resolution aerial photographs that showcase properties, landscapes, and events from unique perspectives with professional quality.",
      },
      {
        title: "Drone videography",
        description:
          "Smooth, cinematic aerial footage captured with advanced stabilization technology for professional-grade video content.",
      },
      {
        title: "Real estate aerial tours",
        description:
          "Comprehensive property showcases that highlight location, surroundings, and architectural features from bird's-eye views.",
      },
      {
        title: "Event aerial coverage",
        description:
          "Dynamic overhead footage of events, festivals, and gatherings that captures scale, atmosphere, and memorable moments.",
      },
      {
        title: "Landscape and nature aerial footage",
        description:
          "Breathtaking natural scenery captured from above, perfect for tourism, environmental, and documentary projects.",
      },
      {
        title: "Architectural and construction progress documentation",
        description:
          "Time-lapse and progress monitoring of construction projects with detailed aerial documentation for stakeholders.",
      },
    ],
  },
  {
    id: "photography",
    title: "Photography",
    description:
      "Our photography services capture moments and tell stories through compelling visual imagery. We offer both studio and outdoor photography sessions tailored to your specific needs.",
    videoId: "TDdW2nJ0bw8",
    icon: <Camera className="h-8 w-8 text-red-500" />,
    features: [
      {
        title: "Studio Photoshoot",
        description:
          "Professional portraits in a controlled environment with expert lighting and backdrops for consistent, high-quality results.",
      },
      {
        title: "Outdoor Photoshoot",
        description:
          "Natural light photography in scenic locations for authentic and dynamic imagery that captures genuine moments and emotions.",
      },
      {
        title: "Product Photography",
        description:
          "Detailed product shots with professional lighting and styling that showcase your products in the best possible way for marketing.",
      },
      {
        title: "Event Photography",
        description:
          "Comprehensive event coverage capturing key moments, candid interactions, and important details throughout your special occasions.",
      },
      {
        title: "Corporate Headshots",
        description:
          "Professional business portraits that convey competence and approachability for websites, LinkedIn profiles, and marketing materials.",
      },
      {
        title: "Fashion and Portfolio Photography",
        description:
          "Creative fashion shoots and portfolio development for models, artists, and professionals seeking standout visual representation.",
      },
    ],
  },
  {
    id: "branding",
    title: "Branding",
    description:
      "We create compelling brand identities that resonate with your target audience. Our branding services include logo design, brand storytelling, visual identity development, and comprehensive brand guidelines.",
    videoId: "ywwFNXo4uUo",
    icon: <Palette className="h-8 w-8 text-red-500" />,
    features: [
      {
        title: "Logo design and visual identity",
        description:
          "Distinctive logo creation and comprehensive visual identity systems that represent your brand values and appeal to your target market.",
      },
      {
        title: "Brand strategy development",
        description:
          "Strategic planning that defines your brand positioning, messaging, and differentiation in the marketplace for competitive advantage.",
      },
      {
        title: "Brand guidelines creation",
        description:
          "Detailed documentation ensuring consistent brand application across all touchpoints, maintaining professional standards and recognition.",
      },
      {
        title: "Visual content creation",
        description:
          "Cohesive visual materials including marketing collateral, digital assets, and promotional content that reinforce brand identity.",
      },
      {
        title: "Brand storytelling",
        description:
          "Compelling narrative development that communicates your brand's mission, values, and unique value proposition to connect with audiences.",
      },
      {
        title: "Brand messaging and positioning",
        description:
          "Clear, consistent messaging framework that differentiates your brand and resonates with your target audience across all communications.",
      },
    ],
  },
]

/* --------------------------------------------------------------------------
   EDIT 3 — "OUR WORK" PHOTO GALLERIES

   One list per service. To add a photo: upload it to your thumbnails repo,
   then add one line here. To give a service its own gallery, just fill in
   its (currently empty) list. An empty list hides the gallery for that tab.

   "title" is what shows when someone hovers over the photo — worth making
   these specific one day ("Pokhara Valley", "Boudhanath at dawn").
   -------------------------------------------------------------------------- */
const GALLERIES: Record<string, Array<{ file: string; title: string }>> = {
  "aerial-videography": [
    { file: "drone1.jpg", title: "Aerial Visuals" },
    { file: "drone2.jpg", title: "Aerial Visuals" },
    { file: "drone3.jpg", title: "Aerial Visuals" },
    { file: "drone4.jpg", title: "Aerial Visuals" },
    { file: "drone5.jpg", title: "Aerial Visuals" },
    { file: "drone6.jpg", title: "Aerial Visuals" },
    { file: "drone7.jpg", title: "Aerial Visuals" },
    { file: "drone8.jpg", title: "Aerial Visuals" },
    { file: "drone9.jpg", title: "Aerial Visuals" },
    { file: "drone10.jpg", title: "Aerial Visuals" },
    { file: "drone11.jpg", title: "Aerial Visuals" },
    { file: "drone12.jpg", title: "Aerial Visuals" },
  ],
  "video-production": [],
  "post-production": [],
  "content-creation": [],
  photography: [],
  branding: [],
}

/* --------------------------------------------------------------------------
   EDIT 4 — "BEHIND THE SCENES" (the two big alternating videos)
   Add or remove entries here; the layout alternates left/right by itself.
   -------------------------------------------------------------------------- */
const BEHIND_THE_SCENES = [
  {
    videoId: "cMFjniTQBBA",
    heading: "Our Creative Process",
    body: "Get an exclusive look at how we bring ideas to life. From initial concept development to final execution, witness the dedication and creativity that goes into every project we deliver.",
    points: [
      "Pre-production planning and storyboarding",
      "Professional equipment setup and testing",
      "Collaborative team approach to filmmaking",
    ],
  },
  {
    videoId: "A6aVMuG-Qyo",
    heading: "Production Excellence",
    body: "Experience the precision and attention to detail that defines our production standards.",
    points: [
      "Advanced cinematography techniques",
      "Real-time problem solving and adaptation",
      "Quality control and continuous improvement",
    ],
  },
]

/* --------------------------------------------------------------------------
   EDIT 5 — VERTICAL REELS
   Add or remove reels freely. Desktop shows them in a row; mobile pages
   through them two at a time and works out the number of pages itself.
   -------------------------------------------------------------------------- */
const REELS = [
  { videoId: "E8CGm2s2g_Q", title: "Behind the scenes at SecurityPal" },
  { videoId: "OD0gZ_HKheg", title: "Behind the scenes for BYD Contest" },
  { videoId: "P_-tHhkdojE", title: "Creative Process Behind the Scenes" },
  { videoId: "jJkanUwojYs", title: "Production Excellence" },
]

/* --------------------------------------------------------------------------
   EDIT 6 — TESTIMONIALS
   Flip SHOW_TESTIMONIALS_SECTION to true when you want this live again.
   -------------------------------------------------------------------------- */
const SHOW_TESTIMONIALS_SECTION = true

const TESTIMONIALS = [
  {
    name: "Divya Baliyan",
    company: "Communications Manager | Cure Blindness Project",
    quote:
      "I finally got a chance to watch the first cut, and I just have to say... its outstanding, Aayush. Even though I was there throughout the shoot and knew exactly what we had filmed, watching it come together gave me goosebumps. There were moments that genuinely made me emotional, which I honestly wasn't expecting. Aayush, you've done an incredible job. This is, without a doubt, some of the finest work I've ever seen. Every frame feels intentional, and the way you've brought the story together has exceeded all my and even our team's expectations. The emotions come through so naturally. I shared it with Harris Media and our communications team as well, and they all had the same reaction. Everyone was genuinely blown away. Seriously, congratulations to you and the entire team. You should all be incredibly proud of what you've created. It's exceptional.",
    image: `${IMAGE_BASE}/cureblindnessprojectlogo.png`,
  },
  {
    name: "Rijesh Uparkoti",
    company: "Gandaki Gaupalika",
    quote:
      "Throughout the project, Orite Production exhibited a high level of professionalism, creativity, and dedication. We collaborated on three informative short films aimed at raising awareness across Gandaki Gaupalika, and their contributions significantly enhanced both the impact and reach of our campaign. Their team's ability to translate complex messages into compelling visual stories was instrumental in the project's success.",
    image: `${IMAGE_BASE}/GON.png`,
  },
  {
    name: "Nimesh Sitaula",
    company: "Tapobhumi Travel and Tours",
    quote:
      "Working with Orite Production has been a game-changer for our brand. Their team brought our travel stories to life with visually stunning videos, seamless edits, and captivating animations. The creativity and professionalism they brought to the table made the entire process effortless and effective. We're proud to have partnered with Orite and look forward to creating more magic together.",
    image: `${IMAGE_BASE}/tapobhumi.png`,
  },
]

/* --------------------------------------------------------------------------
   EDIT 7 — PROCESS STEPS
   -------------------------------------------------------------------------- */
const PROCESS_STEPS = [
  {
    step: "01",
    title: "Consultation",
    description: "We begin with a thorough consultation to understand your needs, goals, and vision for the project.",
  },
  {
    step: "02",
    title: "Planning",
    description:
      "Our team develops a comprehensive plan including creative direction, timeline, and production requirements.",
  },
  {
    step: "03",
    title: "Execution",
    description: "We bring your vision to life with our technical expertise, creative talent, and professional equipment.",
  },
  {
    step: "04",
    title: "Delivery",
    description: "After careful review and refinement, we deliver the final product that meets your objectives.",
  },
]

/* ==========================================================================
   BELOW THIS LINE IS LAYOUT — you shouldn't need to touch it for content edits
   ========================================================================== */

// Builds the YouTube embed URL. Change these settings once, applies everywhere.
function embedUrl(videoId: string, { autoplay = false, loop = false } = {}) {
  const params = new URLSearchParams({
    rel: "0", // don't suggest other channels' videos at the end
    modestbranding: "1", // smaller YouTube logo
    playsinline: "1", // plays in place on iPhone instead of going fullscreen
  })
  if (autoplay) {
    params.set("autoplay", "1")
    params.set("mute", "1") // REQUIRED — browsers block autoplay with sound
  }
  if (loop) {
    params.set("loop", "1")
    params.set("playlist", videoId) // YouTube needs this for a single video to loop
    params.set("controls", "0")
  }
  return `https://www.youtube.com/embed/${videoId}?${params.toString()}`
}

function ServiceContent({ id, title, description, features, videoId, showcaseVideoId, icon }: Service) {
  const gallery = GALLERIES[id] ?? []

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-red-500/10 rounded-full border border-red-500/20">{icon}</div>
        </div>
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto">{description}</p>
      </div>

      {/* Features + videos */}
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* What We Offer */}
        <div className="bg-zinc-900/50 rounded-2xl p-8 border border-zinc-800">
          <h3 className="text-2xl font-semibold mb-8 flex items-center">
            <CheckCircle className="h-6 w-6 text-red-500 mr-3" />
            What We Offer
          </h3>
          <div className="space-y-6">
            {features.map((feature, i) => (
              <div key={i} className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-white mb-2">{feature.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-zinc-800">
            <Link href="/contact">
              <Button className="bg-red-600 hover:bg-red-700 w-full">
                <Play className="h-4 w-4 mr-2" />
                Request This Service
              </Button>
            </Link>
          </div>
        </div>

        {/* Videos */}
        <div className="space-y-6">
          {/* Main video — autoplays muted */}
          <div className="aspect-video w-full rounded-2xl overflow-hidden border border-zinc-800">
            <iframe
              src={embedUrl(videoId, { autoplay: true })}
              title={`${title} - Orite Production`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
              style={{ border: "none" }}
            ></iframe>
          </div>

          {/* Second video — only appears if this service has a showcaseVideoId */}
          {showcaseVideoId && (
            <div className="aspect-video w-full rounded-2xl overflow-hidden border border-zinc-800">
              <iframe
                src={embedUrl(showcaseVideoId, { autoplay: true, loop: true })}
                title={`${title} showcase - Orite Production`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                style={{ border: "none" }}
              ></iframe>
            </div>
          )}
        </div>
      </div>

      {/* Our Work gallery — hidden when this service has no photos yet */}
      {gallery.length > 0 && (
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-center">Our Work</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((item, index) => (
              <div
                key={index}
                className="relative rounded-xl overflow-hidden h-64 group transition-all duration-300 hover:scale-[1.02] border border-zinc-800"
              >
                <Image
                  src={`${IMAGE_BASE}/${item.file}`}
                  alt={`${item.title} — ${title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white font-medium">{item.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/portfolio">
              <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                View Full Portfolio
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

function ReelCard({
  videoId,
  title,
  size = "desktop",
}: {
  videoId: string
  title: string
  size?: "desktop" | "mobile"
}) {
  const isMobile = size === "mobile"

  return (
    <button
      type="button"
      onClick={() => window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank")}
      aria-label={`Watch: ${title}`}
      className={`relative aspect-[9/16] rounded-2xl overflow-hidden border-2 border-yellow-500/30 shadow-2xl group cursor-pointer transition-transform duration-300 hover:scale-105 text-left ${isMobile ? "w-1/2" : "w-full"
        }`}
    >
      <iframe
        src={embedUrl(videoId, { autoplay: true, loop: true })}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={title}
        className="w-full h-full pointer-events-none"
        style={{ border: "none" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className={`absolute left-3 right-3 ${isMobile ? "bottom-2" : "bottom-3"}`}>
          <h4 className={`text-white font-semibold ${isMobile ? "text-xs" : "text-sm"}`}>{title}</h4>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div
            className={`bg-yellow-500/20 rounded-full flex items-center justify-center backdrop-blur-sm ${isMobile ? "w-8 h-8" : "w-12 h-12"
              }`}
          >
            <Play className={`text-yellow-500 fill-current ${isMobile ? "h-4 w-4" : "h-6 w-6"}`} />
          </div>
        </div>
      </div>
    </button>
  )
}

function ServicesPageContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState(SERVICES[0].id)
  const [showTestimonials, setShowTestimonials] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  // Group reels into pages of two for the mobile carousel
  const reelSlides: Array<typeof REELS> = []
  for (let i = 0; i < REELS.length; i += 2) {
    reelSlides.push(REELS.slice(i, i + 2))
  }

  // Open the right tab when someone arrives at /services?tab=aerial-videography
  useEffect(() => {
    const tabParam = searchParams.get("tab")
    if (tabParam && SERVICES.some((service) => service.id === tabParam)) {
      setActiveTab(tabParam)
    }
  }, [searchParams])

  const handleTabChange = (value: string) => {
    setActiveTab(value)
    router.push(`/services?tab=${value}`, { scroll: false })
  }

  const activeService = SERVICES.find((service) => service.id === activeTab) ?? SERVICES[0]

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We offer a comprehensive range of multimedia production services to help you tell your story and connect
            with your audience through powerful visual experiences.
          </p>
        </div>

        {/* Tab navigation */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {SERVICES.map((service) => (
              <button
                key={service.id}
                onClick={() => handleTabChange(service.id)}
                aria-current={activeTab === service.id ? "true" : undefined}
                className={`group relative px-4 py-3 rounded-xl border transition-all duration-300 hover:scale-105 text-sm font-medium ${activeTab === service.id
                  ? "bg-red-600 border-red-500 text-white shadow-lg shadow-red-500/25"
                  : "bg-zinc-900/50 border-zinc-700 text-gray-300 hover:border-red-500/50 hover:bg-zinc-800/50"
                  }`}
              >
                <div className="flex items-center space-x-2">
                  <div
                    className={`transition-colors duration-300 ${activeTab === service.id ? "text-white" : "text-red-500"
                      }`}
                  >
                    {React.cloneElement(service.icon as React.ReactElement, { className: "h-4 w-4" })}
                  </div>
                  <span className="whitespace-nowrap">{service.title}</span>
                </div>

                {activeTab === service.id && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Only the open tab is rendered, so only one video is ever playing */}
        <div className="min-h-[600px]">
          <ServiceContent key={activeService.id} {...activeService} />
        </div>
      </div>

      {/* Process */}
      <section className="py-16 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Service Process</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We follow a structured approach to ensure every project meets our high standards of quality and exceeds
              client expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((process, index) => (
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

      {/* Behind the Scenes */}
      <section className="py-12 sm:py-16 lg:py-20 relative bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-12 sm:mb-16">
            Behind the Scenes
          </h2>

          <div className="space-y-12 sm:space-y-16 lg:space-y-20">
            {BEHIND_THE_SCENES.map((item, index) => {
              const textFirst = index % 2 === 0 // alternates the layout automatically

              const textBlock = (
                <div className={`space-y-4 sm:space-y-6 ${textFirst ? "" : "order-1 lg:order-2"}`}>
                  <h3 className="text-2xl sm:text-3xl font-bold text-red-500">{item.heading}</h3>
                  <p className="text-base sm:text-lg text-gray-300">{item.body}</p>
                  <div className="space-y-2">
                    {item.points.map((point, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                        <span className="text-sm sm:text-base text-gray-300">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )

              const videoBlock = (
                <button
                  type="button"
                  onClick={() => window.open(`https://www.youtube.com/watch?v=${item.videoId}`, "_blank")}
                  aria-label={`Watch: ${item.heading}`}
                  className={`aspect-video w-full rounded-2xl overflow-hidden border-2 border-red-500/30 shadow-2xl cursor-pointer ${textFirst ? "" : "order-2 lg:order-1"
                    }`}
                >
                  <iframe
                    src={embedUrl(item.videoId, { autoplay: true, loop: true })}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={`Behind the Scenes - ${item.heading}`}
                    className="w-full h-full pointer-events-none"
                    style={{ border: "none" }}
                  />
                </button>
              )

              return (
                <div key={index} className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                  {textFirst ? (
                    <>
                      {textBlock}
                      {videoBlock}
                    </>
                  ) : (
                    <>
                      {videoBlock}
                      {textBlock}
                    </>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Reels */}
      <section className="py-12 sm:py-16 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold mb-4">Dive into Behind the Scenes at Orite Production</h3>
            <p className="text-gray-400 text-base max-w-2xl mx-auto">
              A glimpse into the passion, process, and creativity that drive our work every day.
            </p>
          </div>

          {/* Desktop: all reels in a row */}
          <div className="hidden md:grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {REELS.map((reel) => (
              <ReelCard key={reel.videoId} videoId={reel.videoId} title={reel.title} />
            ))}
          </div>

          {/* Mobile: two reels per page */}
          <div className="md:hidden">
            <div className="relative max-w-lg mx-auto">
              <div className="overflow-hidden rounded-2xl">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {reelSlides.map((slide, slideIndex) => (
                    <div key={slideIndex} className="w-full flex-shrink-0 flex space-x-4 px-4">
                      {slide.map((reel) => (
                        <ReelCard key={reel.videoId} videoId={reel.videoId} title={reel.title} size="mobile" />
                      ))}
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
                  disabled={currentSlide === 0}
                  aria-label="Previous reels"
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-11 h-11 bg-yellow-500/80 rounded-full flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110 transition-all duration-300 z-10"
                >
                  <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  onClick={() => setCurrentSlide(Math.min(reelSlides.length - 1, currentSlide + 1))}
                  disabled={currentSlide === reelSlides.length - 1}
                  aria-label="Next reels"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-11 h-11 bg-yellow-500/80 rounded-full flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110 transition-all duration-300 z-10"
                >
                  <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                <div className="flex justify-center mt-6 space-x-2">
                  {reelSlides.map((_, slide) => (
                    <button
                      key={slide}
                      onClick={() => setCurrentSlide(slide)}
                      aria-label={`Go to reel page ${slide + 1}`}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === slide ? "bg-yellow-500 scale-125" : "bg-white/20"
                        }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {SHOW_TESTIMONIALS_SECTION && (
        <section className="py-16 relative bg-black">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-gray-400 mb-8">
                Don't just take our word for it. Here's what our clients have to say about our services.
              </p>

              {!showTestimonials && (
                <button
                  onClick={() => setShowTestimonials(true)}
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-300"
                >
                  <span>See more</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
              )}
            </div>

            {showTestimonials && (
              <div className="space-y-8">
                <div className="grid md:grid-cols-3 gap-8">
                  {TESTIMONIALS.map((testimonial, index) => (
                    <div key={index} className="bg-black p-6 rounded-lg border border-zinc-800">
                      <div className="flex items-center mb-4">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={60}
                          height={60}
                          className="rounded-full mr-4"
                        />
                        <div>
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-gray-400">{testimonial.company}</p>
                        </div>
                      </div>
                      <p className="text-gray-300 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <button
                    onClick={() => setShowTestimonials(false)}
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold rounded-lg transition-all duration-300"
                  >
                    <span>See less</span>
                    <ChevronUp className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-red-900 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let&apos;s create something amazing together. Contact us to discuss your vision.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-red-700 hover:bg-gray-100">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}

// useSearchParams needs a Suspense boundary or the Next.js production build fails.
export default function ServicesPage() {
  return (
    <Suspense fallback={<main className="min-h-screen bg-black" />}>
      <ServicesPageContent />
    </Suspense>
  )
}