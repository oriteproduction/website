import type { Metadata } from "next"
import AboutPageClient from "./AboutPageClient"

export const metadata: Metadata = {
  title: "About Us | Orite Production",
  description:
    "Learn about Orite Production, a creative multimedia production company based in Nepal dedicated to bringing your vision to life.",
}

export default function AboutPage() {
  return <AboutPageClient />
}
