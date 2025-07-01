"use client"

import React from "react"

import type { ReactNode } from "react"

import { useEffect, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import ServicesVideoHero from "@/components/services-video-hero"
import { Video, Film, FileVideo, Plane, Camera, Palette, Play, CheckCircle } from "lucide-react"

interface ServiceContentProps {
  id: string
  title: string
  description: string
  features: Array<{ title: string; description: string }>
  videoId: string
  icon: ReactNode
}

// Helper function to get image name based on service ID
function getImageName(serviceId: string): string {
  const imageMap: Record<string, string> = {
    "video-production": "video-production-showcase",
    "post-production": "post-production-showcase",
    "content-creation": "content-creation-showcase",
    "aerial-videography": "aerial-showcase",
    photography: "photography-showcase",
    branding: "branding-showcase",
  }
  return imageMap[serviceId] || "default-showcase"
}

const exampleService = [
  {
    id: "video-production",
    title: "Video Production",
    description: "We create compelling brand identities",
    features: ["abc", "def", "ghi"],
    videoId: "ywwFNXo4uUo",
    image: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/shoot1.jpg?height=600&width=800",
  },
  {
    id: "video-production",
    title: "Video Production",
    description: "We create compelling brand identities",
    features: ["abc", "def", "ghi"],
    videoId: "ywwFNXo4uUo",
    image: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/shoot2.jpg?height=600&width=800",
  },
  {
    id: "video-production",
    title: "Video Production",
    description: "We create compelling brand identities",
    features: ["abc", "def", "ghi"],
    videoId: "ywwFNXo4uUo",
    image: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/shoot3.jpg?height=600&width=800",
  },
  {
    id: "post-production",
    title: "Post Production",
    description: "We create compelling brand identities",
    features: ["abc", "def", "ghi"],
    videoId: "ywwFNXo4uUo",
    image: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/edit1.jpg?height=600&width=800",
  },
  {
    id: "post-production",
    title: "Post Production",
    description: "We create compelling brand identities",
    features: ["abc", "def", "ghi"],
    videoId: "ywwFNXo4uUo",
    image: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/edit2.jpg?height=600&width=800",
  },
  {
    id: "post-production",
    title: "Post Production",
    description: "We create compelling brand identities",
    features: ["abc", "def", "ghi"],
    videoId: "ywwFNXo4uUo",
    image: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/edit3.jpg?height=600&width=800",
  },
  {
    id: "content-creation",
    title: "Content Creation",
    description: "We create compelling brand identities",
    features: ["abc", "def", "ghi"],
    videoId: "ywwFNXo4uUo",
    image: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/content1.jpg?height=600&width=800",
  },
  {
    id: "content-creation",
    title: "Content Creation",
    description: "We create compelling brand identities",
    features: ["abc", "def", "ghi"],
    videoId: "ywwFNXo4uUo",
    image: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/content2.jpg?height=600&width=800",
  },
  {
    id: "content-creation",
    title: "Content Creation",
    description: "We create compelling brand identities",
    features: ["abc", "def", "ghi"],
    videoId: "ywwFNXo4uUo",
    image: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/content3.jpg?height=600&width=800",
  },
  {
    id: "content-creation",
    title: "Content Creation",
    description: "We create compelling brand identities",
    features: ["abc", "def", "ghi"],
    videoId: "ywwFNXo4uUo",
    image: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/content4.jpg?height=600&width=800",
  },
  {
    id: "content-creation",
    title: "Content Creation",
    description: "We create compelling brand identities",
    features: ["abc", "def", "ghi"],
    videoId: "ywwFNXo4uUo",
    image: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/content5.jpg?height=600&width=800",
  },
  {
    id: "content-creation",
    title: "Content Creation",
    description: "We create compelling brand identities",
    features: ["abc", "def", "ghi"],
    videoId: "ywwFNXo4uUo",
    image: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/content6.jpg?height=600&width=800",
  },
  {
    id: "aerial-videography",
    title: "Aerial Visuals",
    description: "We create compelling brand identities",
    features: ["abc", "def", "ghi"],
    videoId: "ywwFNXo4uUo",
    image: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/drone1.jpg?height=600&width=800",
  },
  {
    id: "aerial-videography",
    title: "Aerial Visuals",
    description: "We create compelling brand identities",
    features: ["abc", "def", "ghi"],
    videoId: "ywwFNXo4uUo",
    image: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/drone2.jpg?height=600&width=800",
  },
  {
    id: "aerial-videography",
    title: "Aerial Visuals",
    description: "We create compelling brand identities",
    features: ["abc", "def", "ghi"],
    videoId: "ywwFNXo4uUo",
    image: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/drone3.jpg?height=600&width=800",
  },
  {
    id: "aerial-videography",
    title: "Aerial Visuals",
    description: "We create compelling brand identities",
    features: ["abc", "def", "ghi"],
    videoId: "ywwFNXo4uUo",
    image: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/drone4.jpg?height=600&width=800",
  },
  {
    id: "aerial-videography",
    title: "Aerial Visuals",
    description: "We create compelling brand identities",
    features: ["abc", "def", "ghi"],
    videoId: "ywwFNXo4uUo",
    image: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/drone5.jpg?height=600&width=800",
  },
  {
    id: "aerial-videography",
    title: "Aerial Visuals",
    description: "We create compelling brand identities",
    features: ["abc", "def", "ghi"],
    videoId: "ywwFNXo4uUo",
    image: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/drone6.jpg?height=600&width=800",
  },
  {
    id: "aerial-videography",
    title: "Aerial Visuals",
    description: "We create compelling brand identities",
    features: ["abc", "def", "ghi"],
    videoId: "ywwFNXo4uUo",
    image: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/drone7.jpg?height=600&width=800",
  },
  {
    id: "aerial-videography",
    title: "Aerial Visuals",
    description: "We create compelling brand identities",
    features: ["abc", "def", "ghi"],
    videoId: "ywwFNXo4uUo",
    image: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/drone8.jpg?height=600&width=800",
  },
  {
    id: "aerial-videography",
    title: "Aerial Visuals",
    description: "We create compelling brand identities",
    features: ["abc", "def", "ghi"],
    videoId: "ywwFNXo4uUo",
    image: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/drone9.jpg?height=600&width=800",
  },
  {
    id: "aerial-videography",
    title: "Aerial Visuals",
    description: "We create compelling brand identities",
    features: ["abc", "def", "ghi"],
    videoId: "ywwFNXo4uUo",
    image: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/drone10.jpg?height=600&width=800",
  },
  {
    id: "aerial-videography",
    title: "Aerial Visuals",
    description: "We create compelling brand identities",
    features: ["abc", "def", "ghi"],
    videoId: "ywwFNXo4uUo",
    image: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/drone11.jpg?height=600&width=800",
  },
  {
    id: "aerial-videography",
    title: "Aerial Visuals",
    description: "We create compelling brand identities",
    features: ["abc", "def", "ghi"],
    videoId: "ywwFNXo4uUo",
    image: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/drone12.jpg?height=600&width=800",
  },
  {
    id: "photography",
    title: "Photography",
    description: "We create compelling brand identities",
    features: ["abc", "def", "ghi"],
    videoId: "ywwFNXo4uUo",
    image: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/sanphoto.jpg?height=600&width=800",
  },
  {
    id: "branding",
    title: "Branding",
    description: "We create compelling brand identities",
    features: ["abc", "def", "ghi"],
    videoId: "ywwFNXo4uUo",
    image: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/branding1.jpg?height=600&width=800",
  },
  {
    id: "branding",
    title: "Branding",
    description: "We create compelling brand identities",
    features: ["abc", "def", "ghi"],
    videoId: "ywwFNXo4uUo",
    image: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/branding2.jpg?height=600&width=800",
  },
  {
    id: "branding",
    title: "Branding",
    description: "We create compelling brand identities",
    features: ["abc", "def", "ghi"],
    videoId: "ywwFNXo4uUo",
    image: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/branding3.jpg?height=600&width=800",
  },
  {
    id: "branding",
    title: "Branding",
    description: "We create compelling brand identities",
    features: ["abc", "def", "ghi"],
    videoId: "ywwFNXo4uUo",
    image: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/branding4.jpg?height=600&width=800",
  },
  {
    id: "branding",
    title: "Branding",
    description: "We create compelling brand identities",
    features: ["abc", "def", "ghi"],
    videoId: "ywwFNXo4uUo",
    image: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/branding5.jpg?height=600&width=800",
  },
  {
    id: "branding",
    title: "Branding",
    description: "We create compelling brand identities",
    features: ["abc", "def", "ghi"],
    videoId: "ywwFNXo4uUo",
    image: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/branding6.jpg?height=600&width=800",
  },
]

function ServiceContent({ id, title, description, features, videoId, icon }: ServiceContentProps) {
  return (
    <div className="space-y-12">
      {/* Header Section */}
      <div className="text-center">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-red-500/10 rounded-full border border-red-500/20">{icon}</div>
        </div>
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto">{description}</p>
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* What We Offer Section */}
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

        {/* Video Section */}
        <div className="space-y-6">
          <div className="aspect-video w-full rounded-2xl overflow-hidden border border-zinc-800">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoId}`}
              title={`${title} - Orite Production`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>

          {/* Image below video */}
          <div className="aspect-video w-full rounded-2xl overflow-hidden border border-zinc-800">
            <Image
              src={`https://raw.githubusercontent.com/oriteproduction/thumbnails/main/${getImageName(id)}.jpg`}
              alt={`${title} showcase`}
              width={800}
              height={450}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
        </div>
      </div>

      {/* Image Gallery Section */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-center">Our Work</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exampleService
            .filter((item) => item.id === id)
            .map((item, index) => (
              <div
                key={index}
                className="relative rounded-xl overflow-hidden h-64 group transition-all duration-300 hover:scale-[1.02] border border-zinc-800"
              >
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={`${item.title} example`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white font-medium">{item.title} Project</h4>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default function ServicesPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("video-production")

  const services = [
    {
      id: "video-production",
      title: "Video Production",
      description:
        "From concept to completion, our video production team delivers high-quality videos that captivate your audience. We handle every aspect of the production process, including scriptwriting, storyboarding, filming, and editing.",
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
      videoId: "TDdW2nJ0bw8",
      icon: <Video className="h-8 w-8 text-red-500" />,
    },
    {
      id: "post-production",
      title: "Post Production",
      description:
        "Our post-production services transform raw footage into polished, professional content. We offer comprehensive editing, color grading, sound design, and visual effects to enhance your visual content.",
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
      videoId: "TDdW2nJ0bw8",
      icon: <Film className="h-8 w-8 text-red-500" />,
    },
    {
      id: "content-creation",
      title: "Content Creation",
      description:
        "Our content creation services focus on developing engaging and effective content that tells your story across multiple platforms. We craft compelling videos, graphics, and written content that resonate with your audience.",
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
      videoId: "TDdW2nJ0bw8",
      icon: <FileVideo className="h-8 w-8 text-red-500" />,
    },
    {
      id: "aerial-videography",
      title: "Aerial Videography",
      description:
        "Capture breathtaking perspectives with our aerial videography services. Using state-of-the-art drone technology, we provide stunning aerial footage for real estate, events, landscapes, and more.",
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
      videoId: "pJcnBuKA_gA",
      icon: <Plane className="h-8 w-8 text-red-500" />,
    },
    {
      id: "photography",
      title: "Photography",
      description:
        "Our photography services capture moments and tell stories through compelling visual imagery. We offer both studio and outdoor photography sessions tailored to your specific needs.",
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
      videoId: "TDdW2nJ0bw8",
      icon: <Camera className="h-8 w-8 text-red-500" />,
    },
    {
      id: "branding",
      title: "Branding",
      description:
        "We create compelling brand identities that resonate with your target audience. Our branding services include logo design, brand storytelling, visual identity development, and comprehensive brand guidelines.",
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
      videoId: "ywwFNXo4uUo",
      icon: <Palette className="h-8 w-8 text-red-500" />,
    },
  ]

  // Handle URL parameter for tab selection
  useEffect(() => {
    const tabParam = searchParams.get("tab")
    if (tabParam && services.some((service) => service.id === tabParam)) {
      setActiveTab(tabParam)
    }
  }, [searchParams])

  // Handle tab change and update URL
  const handleTabChange = (value: string) => {
    setActiveTab(value)
    router.push(`/services?tab=${value}`, { scroll: false })
  }

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

        {/* Compact Tab Navigation */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => handleTabChange(service.id)}
                className={`group relative px-4 py-3 rounded-xl border transition-all duration-300 hover:scale-105 text-sm font-medium ${
                  activeTab === service.id
                    ? "bg-red-600 border-red-500 text-white shadow-lg shadow-red-500/25"
                    : "bg-zinc-900/50 border-zinc-700 text-gray-300 hover:border-red-500/50 hover:bg-zinc-800/50"
                }`}
              >
                <div className="flex items-center space-x-2">
                  <div
                    className={`transition-colors duration-300 ${
                      activeTab === service.id ? "text-white" : "text-red-500"
                    }`}
                  >
                    {React.cloneElement(service.icon as React.ReactElement, { className: "h-4 w-4" })}
                  </div>
                  <span className="whitespace-nowrap">{service.title}</span>
                </div>

                {/* Active indicator */}
                {activeTab === service.id && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Service Content */}
        <div className="min-h-[600px]">
          {services.map((service) => (
            <div
              key={service.id}
              className={`transition-all duration-500 ${
                activeTab === service.id ? "opacity-100 block" : "opacity-0 hidden"
              }`}
            >
              <ServiceContent
                id={service.id}
                title={service.title}
                description={service.description}
                features={service.features}
                videoId={service.videoId}
                icon={service.icon}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Process Section */}
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
            {[
              {
                step: "01",
                title: "Consultation",
                description:
                  "We begin with a thorough consultation to understand your needs, goals, and vision for the project.",
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
                description:
                  "We bring your vision to life with our technical expertise, creative talent, and professional equipment.",
              },
              {
                step: "04",
                title: "Delivery",
                description:
                  "After careful review and refinement, we deliver the final product that meets your objectives.",
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

      {/* Services Hero After Process Section */}
      <section>
        <ServicesVideoHero videoId="cMFjniTQBBA" />
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-400">
              Don't just take our word for it. Here's what our clients have to say about our services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Saurav Dhungana",
                company: "Playbox Arena",
                quote:
                  "\"Partnering with Orite Production for our TV commercial and Aston ad was an outstanding experience. Their team brought a sharp creative vision, technical excellence, and a strong understanding of our brand. The final outputs were dynamic, high-impact, and perfectly aligned with our marketing goals. We're thrilled with the results and confident in Orite as a go-to creative partner for future campaigns",
                image:
                  "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/playbox.png?height=600&width=800?height=100&width=100",
              },
              {
                name: "Rijesh Uparkoti",
                company: "Gandaki Gaupalika",
                quote:
                  "Throughout the project, Orite Production exhibited a high level of professionalism, creativity, and dedication. We collaborated on three informative short films aimed at raising awareness across Gandaki Gaupalika, and their contributions significantly enhanced both the impact and reach of our campaign. Their team's ability to translate complex messages into compelling visual stories was instrumental in the project's success.",
                image:
                  "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/GON.png?height=600&width=800?height=100&width=100",
              },
              {
                name: "Nimesh Sitaula",
                company: "Tapobhumi Travel and Tours",
                quote:
                  "Working with Orite Production has been a game-changer for our brand. Their team brought our travel stories to life with visually stunning videos, seamless edits, and captivating animations. The creativity and professionalism they brought to the table made the entire process effortless and effective. We're proud to have partnered with Orite and look forward to creating more magic together.",
                image:
                  "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/tapobhumi.png?height=600&width=800?height=100&width=100",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-zinc-900 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
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
                <p className="text-gray-300 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-900 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Contact us to discuss your vision.
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
