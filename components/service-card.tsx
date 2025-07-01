"use client"
import Link from "next/link"
import { ChevronDown, ChevronUp, ChevronRight } from "lucide-react"
import {
  Palette,
  FileVideo,
  Video,
  Film,
  Plane,
  Sparkles,
  Camera,
  Monitor,
  Building,
  Users,
  Tv,
  Smartphone,
} from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  serviceId: string
  expandedDescription?: string
  isExpanded: boolean
  onToggle: () => void
}

export default function ServiceCard({
  title,
  description,
  icon,
  serviceId,
  expandedDescription,
  isExpanded,
  onToggle,
}: ServiceCardProps) {
  const getIcon = (): JSX.Element => {
    switch (icon) {
      case "Palette":
        return <Palette className="h-10 w-10" />
      case "FileVideo":
        return <FileVideo className="h-10 w-10" />
      case "Video":
        return <Video className="h-10 w-10" />
      case "Film":
        return <Film className="h-10 w-10" />
      case "Plane":
        return <Plane className="h-10 w-10" />
      case "Sparkles":
        return <Sparkles className="h-10 w-10" />
      case "Camera":
        return <Camera className="h-10 w-10" />
      case "Monitor":
        return <Monitor className="h-10 w-10" />
      case "Building":
        return <Building className="h-10 w-10" />
      case "Users":
        return <Users className="h-10 w-10" />
      case "Tv":
        return <Tv className="h-10 w-10" />
      case "Smartphone":
        return <Smartphone className="h-10 w-10" />
      default:
        return <Video className="h-10 w-10" />
    }
  }

  return (
    <div className="flex flex-col">
      <div
        className={`bg-zinc-900 p-6 rounded-lg transition-transform hover:-translate-y-1 hover:shadow-lg hover:shadow-red-900/20 cursor-pointer ${isExpanded ? "rounded-b-none" : ""}`}
        onClick={onToggle}
      >
        <div className="flex justify-between items-start">
          <div className="text-red-500 mb-4">{getIcon()}</div>
          <div className="text-gray-400">
            {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>

      {isExpanded && (
        <div className="bg-zinc-800 p-6 rounded-b-lg border-t border-zinc-700 animate-accordion-down">
          <p className="text-gray-300 mb-4">{expandedDescription || description}</p>
          <Link
            href={`/services?tab=${serviceId}`}
            className="inline-flex items-center text-red-500 hover:text-red-400 font-medium"
          >
            Learn more about {title}
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      )}
    </div>
  )
}
