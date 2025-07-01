import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

import "keen-slider/keen-slider.min.css"
import "./globals.css" // if you're using Tailwind/global styles


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Orite Production - Multimedia Production Company in Nepal",
  description: "Professional video production, photography, and multimedia services in Nepal",
  icons: {
    icon: "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/favicon.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
