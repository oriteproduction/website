"use client"

import type React from "react"

import { useState } from "react"
import { useRef, useEffect } from "react"
import { MapPin, Phone, Mail, Send, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const isMounted = useRef(true)

  useEffect(() => {
    isMounted.current = true
    return () => {
      isMounted.current = false
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()

  const { name, email, phone, subject, service, message } = formData

  const whatsappMessage = `
Hello, I'm ${name}.

📧 Email: ${email}
📞 Phone: ${phone}
📌 Service: ${service}
📝 Subject: ${subject}

${message}
  `.trim()

  const encodedMessage = encodeURIComponent(whatsappMessage)
  const whatsappURL = `https://wa.me/9779843821246?text=${encodedMessage}`

  window.open(whatsappURL, "_blank")
}


  return (
    <main className="min-h-screen bg-black text-white pt-24">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900 to-red-700"></div>
        <div className="relative h-full container mx-auto px-4 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Have a project in mind? Get in touch with us to discuss how we can bring your vision to life.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-red-500 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Our Locations</h3>
                    <p className="font-medium text-gray-300">Main Office:</p>
                    <p className="text-gray-400">Orchid Colony, Dhungeadda</p>
                    <p className="text-gray-400 mb-2">Chandragiri -14, Kathmandu, Nepal</p>

                    <p className="font-medium text-gray-300">Orite Studios:</p>
                    <p className="text-gray-400">Shop number 5151, NBTC Mall</p>
                    <p className="text-gray-400">Khasibazar, Kathmandu, Nepal</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-red-500 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-gray-400">+977 9843821246</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-red-500 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-400">info@oriteproductions.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-red-500 mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Working Hours</h3>
                    <p className="text-gray-400">Sunday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-400">Saturday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Follow Us</h2>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/utdaayush/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-zinc-800 hover:bg-red-600 transition-colors p-3 rounded-full"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/orite.production.np/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-zinc-800 hover:bg-red-600 transition-colors p-3 rounded-full"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.youtube.com/@utdaayush"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-zinc-800 hover:bg-red-600 transition-colors p-3 rounded-full"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/utdaayush/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-zinc-800 hover:bg-red-600 transition-colors p-3 rounded-full"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="https://linktr.ee/utdaayush"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-zinc-800 hover:bg-red-600 transition-colors p-3 rounded-full"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7.953 15.066c-.08.163-.08.324-.08.486.08.517.45.938.93.938.16 0 .32-.04.48-.12.08-.08.16-.12.24-.2.08-.08.16-.16.16-.24.08-.08.08-.16.08-.24.08-.16.08-.32.08-.44 0-.2-.08-.36-.16-.52-.08-.16-.24-.24-.4-.36-.16-.08-.32-.16-.48-.16-.08 0-.16.04-.24.04-.08 0-.16.04-.24.08-.08.04-.16.08-.16.12-.08.08-.16.12-.16.2-.08.12-.08.24-.08.36-.08.04-.08.12-.08.2.08.04.08.12.08.2zm8.5-10.562c-.08-.04-.16-.08-.32-.08-.08 0-.16.04-.24.04-.08.04-.16.04-.24.08-.08.04-.16.08-.16.16-.08.04-.08.12-.16.2-.08.08-.08.16-.08.24v.12c0 .08 0 .16.08.24 0 .08.08.16.08.24.08.08.08.16.16.2.08.08.16.12.24.16.08.04.16.08.24.08.08 0 .16.04.24.04.08 0 .16-.04.24-.04.08 0 .16-.04.24-.08.08-.04.16-.08.24-.16.08-.04.08-.12.16-.2.08-.08.08-.16.08-.24 0-.04.08-.12.08-.2 0-.08 0-.16-.08-.24 0-.08-.08-.16-.08-.24-.08-.08-.08-.16-.16-.2-.08-.08-.16-.12-.24-.16-.08.04-.16 0-.24 0zm-5.027-1.142c-.08 0-.16 0-.24.04-.08 0-.16.04-.24.08-.08.04-.16.08-.24.16-.08.08-.08.16-.16.24-.08.08-.08.16-.08.24-.08.08-.08.16-.08.24 0 .08 0 .16.08.24 0 .08.08.16.08.24.08.08.08.16.16.24.08.08.16.12.24.16.08.04.16.08.24.08.08 0 .16.04.24.04.08 0 .16 0 .24-.04.08 0 .16-.04.24-.08.08-.04.16-.08.24-.16.08-.08.08-.16.16-.24 0-.08.08-.16.08-.24.08-.08.08-.16.08-.24 0-.08 0-.16-.08-.24 0-.08-.08-.16-.08-.24-.08-.08-.08-.16-.16-.24-.08-.08-.16-.12-.24-.16-.08-.04-.16-.08-.24-.08-.08-.04-.16-.04-.24-.04zm-6.332 3.971c-.08 0-.16 0-.24.04-.08 0-.16.04-.24.08-.08.04-.16.08-.24.16-.08.08-.08.16-.16.24-.08.08-.08.16-.08.24-.08.08-.08.16-.08.24 0 .08 0 .16.08.24 0 .08.08.16.08.24.08.08.08.16.16.24.08.08.16.12.24.16.08.04.16.08.24.08.08 0 .16.04.24.04.08 0 .16 0 .24-.04.08 0 .16-.04.24-.08.08-.04.16-.08.24-.16.08-.08.08-.16.16-.24 0-.08.08-.16.08-.24.08-.08.08-.16.08-.24 0-.08 0-.16-.08-.24 0-.08-.08-.16-.08-.24-.08-.08-.08-.16-.16-.24-.08-.08-.16-.12-.24-.16-.08-.04-.16-.08-.24-.08-.08-.04-.16-.04-.24-.04zm11.36 3.971c-.08 0-.16 0-.24.04-.08 0-.16.04-.24.08-.08.04-.16.08-.24.16-.08.08-.08.16-.16.24-.08.08-.08.16-.08.24-.08.08-.08.16-.08.24 0 .08 0 .16.08.24 0 .08.08.16.08.24.08.08.08.16.16.24.08.08.16.12.24.16.08.04.16.08.24.08.08 0 .16.04.24.04.08 0 .16 0 .24-.04.08 0 .16-.04.24-.08.08-.04.16-.08.24-.16.08-.08.08-.16.16-.24 0-.08.08-.16.08-.24.08-.08.08-.16.08-.24 0-.08 0-.16-.08-.24 0-.08-.08-.16-.08-.24-.08-.08-.08-.16-.16-.24-.08-.08-.16-.12-.24-.16-.08-.04-.16-.08-.24-.08-.08-.04-.16-.04-.24-.04zm-5.666 0c-.08 0-.16 0-.24.04-.08 0-.16.04-.24.08-.08.04-.16.08-.24.16-.08.08-.08.16-.16.24-.08.08-.08.16-.08.24-.08.08-.08.16-.08.24 0 .08 0 .16.08.24 0 .08.08.16.08.24.08.08.08.16.16.24.08.08.16.12.24.16.08.04.16.08.24.08.08 0 .16.04.24.04.08 0 .16 0 .24-.04.08 0 .16-.04.24-.08.08-.04.16-.08.24-.16.08-.08.08-.16.16-.24 0-.08.08-.16.08-.24.08-.08.08-.16.08-.24 0-.08 0-.16-.08-.24 0-.08-.08-.16-.08-.24-.08-.08-.08-.16-.16-.24-.08-.08-.16-.12-.24-.16-.08-.04-.16-.08-.24-.08-.08-.04-.16-.04-.24-.04zm-5.666 0c-.08 0-.16 0-.24.04-.08 0-.16.04-.24.08-.08.04-.16.08-.24.16-.08.08-.08.16-.16.24-.08.08-.08.16-.08.24-.08.08-.08.16-.08.24 0 .08 0 .16.08.24 0 .08.08.16.08.24.08.08.08.16.16.24.08.08.16.12.24.16.08.04.16.08.24.08.08 0 .16.04.24.04.08 0 .16 0 .24-.04.08 0 .16-.04.24-.08.08-.04.16-.08.24-.16.08-.08.08-.16.16-.24 0-.08.08-.16.08-.24.08-.08.08-.16.08-.24 0-.08 0-.16-.08-.24 0-.08-.08-.16-.08-.24-.08-.08-.08-.16-.16-.24-.08-.08-.16-.12-.24-.16-.08-.04-.16-.08-.24-.08-.08-.04-.16-.04-.24-.04zm2.833-3.97c-.08 0-.16 0-.24.04-.08 0-.16.04-.24.08-.08.04-.16.08-.24.16-.08.08-.08.16-.16.24-.08.08-.08.16-.08.24-.08.08-.08.16-.08.24 0 .08 0 .16.08.24 0 .08.08.16.08.24.08.08.08.16.16.24.08.08.16.12.24.16.08.04.16.08.24.08.08 0 .16.04.24.04.08 0 .16 0 .24-.04.08 0 .16-.04.24-.08.08-.04.16-.08.24-.16.08-.08.08-.16.16-.24 0-.08.08-.16.08-.24.08-.08.08-.16.08-.24 0-.08 0-.16-.08-.24 0-.08-.08-.16-.08-.24-.08-.08-.08-.16-.16-.24-.08-.08-.16-.12-.24-.16-.08-.04-.16-.08-.24-.08-.08-.04-.16-.04-.24-.04zm0-3.971c-.08 0-.16 0-.24.04-.08 0-.16.04-.24.08-.08.04-.16.08-.24.16-.08.08-.08.16-.16.24-.08.08-.08.16-.08.24-.08.08-.08.16-.08.24 0 .08 0 .16.08.24 0 .08.08.16.08.24.08.08.08.16.16.24.08.08.16.12.24.16.08.04.16.08.24.08.08 0 .16.04.24.04.08 0 .16 0 .24-.04.08 0 .16-.04.24-.08.08-.04.16-.08.24-.16.08-.08.08-.16.16-.24 0-.08.08-.16.08-.24.08-.08.08-.16.08-.24 0-.08 0-.16-.08-.24 0-.08-.08-.16-.08-.24-.08-.08-.08-.16-.16-.24-.08-.08-.16-.12-.24-.16-.08-.04-.16-.08-.24-.08-.08-.04-.16-.04-.24-.04z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-zinc-900 border-zinc-800"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-zinc-900 border-zinc-800"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-zinc-900 border-zinc-800"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-1">
                      Service You're Interested In
                    </label>
                    <Select value={formData.service} onValueChange={handleServiceChange}>
                      <SelectTrigger className="bg-zinc-900 border-zinc-800">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="branding">Branding</SelectItem>
                        <SelectItem value="content">Content Creation</SelectItem>
                        <SelectItem value="video">Video Production</SelectItem>
                        <SelectItem value="post">Post Production</SelectItem>
                        <SelectItem value="aerial">Aerial Videography</SelectItem>
                        <SelectItem value="photography">Photography</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-zinc-900 border-zinc-800"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="bg-zinc-900 border-zinc-800"
                  />
                </div>

                <Button type="submit" className="bg-red-600 hover:bg-red-700 w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2 h-4 w-4" /> Send Message
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
<section className="py-16 bg-zinc-900">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold mb-4">Find Us</h2>
      <p className="text-gray-400 max-w-2xl mx-auto">Visit our office in Kathmandu, Nepal</p>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      {/* Main Office Map */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Main Office</h3>
        <div className="h-96 bg-zinc-800 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=Orite%20Production%2C%20Kathmandu%2C%20Nepal&maptype=roadmap"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Main Office"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>

      {/* Orite Studios Map */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Orite Studios</h3>
        <div className="h-96 bg-zinc-800 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1766.4545596540358!2d85.28558269472!3d27.68920362208147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198e85e70f7f%3A0x2d36f5f14d21ef6f!2sOrite%20Studios!5e0!3m2!1sen!2snp!4v1744223184763!5m2!1sen!2snp"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Orite Studios"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</section>

    </main>
  )
}
