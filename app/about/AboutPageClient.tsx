"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPageClient() {
  return (
    <main className="min-h-screen bg-black text-white pt-24">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
        <div className="relative h-full container mx-auto px-4 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">About Orite Production</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            We are a creative multimedia production company based in Nepal, dedicated to bringing your vision to life
            through compelling visual storytelling.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-400 mb-4">
                Founded in Nepal with a passion for visual storytelling, Orite Production has grown into a full-service
                multimedia production company. Our journey began with a simple belief: every brand, every story,
                deserves to be told with creativity and precision.
              </p>
              <p className="text-gray-400 mb-4">
                Over the years, we've collaborated with businesses of all sizes, from local startups to international
                brands, helping them connect with their audiences through powerful visual content.
              </p>
              <p className="text-gray-400">
                Today, we continue to push creative boundaries, embracing new technologies and techniques to deliver
                exceptional multimedia experiences that captivate and inspire.
              </p>
            </div>
            <div className="relative h-80 md:h-96 overflow-hidden rounded-lg group">
              <div className="absolute inset-0 transition-transform duration-500 ease-in-out group-hover:scale-110">
                <Image
                  src="https://raw.githubusercontent.com/oriteproduction/thumbnails/main/Collage_Orite.jpg"
                  alt="Orite Production Team"
                  fill
                  className="object-cover"
                  style={{ aspectRatio: "16/9" }}
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1 relative h-80 md:h-96 overflow-hidden rounded-lg group">
              <div className="absolute inset-0 transition-transform duration-500 ease-in-out group-hover:scale-110">
                <Image
                  src="https://raw.githubusercontent.com/oriteproduction/thumbnails/main/Collage2_Orite.jpg"
                  alt="Our Mission"
                  fill
                  className="object-cover"
                  style={{ aspectRatio: "16/9" }}
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-400 mb-4">
                At Orite Production, our mission is to transform ideas into impactful visual experiences that resonate
                with audiences and achieve our clients' objectives.
              </p>
              <p className="text-gray-400 mb-4">
                We believe in the power of storytelling to connect, inspire, and drive action. Every project we
                undertake is approached with creativity, technical excellence, and a deep understanding of our clients'
                needs.
              </p>
              <p className="text-gray-400">
                We're committed to pushing creative boundaries while maintaining the highest standards of quality and
                professionalism in everything we do.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-10 text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Creativity",
                  description:
                    "We approach every project with fresh ideas and innovative thinking to create unique and impactful content.",
                },
                {
                  title: "Excellence",
                  description:
                    "We are committed to delivering the highest quality in everything we do, from concept to final delivery.",
                },
                {
                  title: "Collaboration",
                  description:
                    "We believe in working closely with our clients, understanding their vision and bringing it to life together.",
                },
                {
                  title: "Integrity",
                  description:
                    "We operate with honesty, transparency, and ethical practices in all our business relationships.",
                },
                {
                  title: "Adaptability",
                  description:
                    "We embrace change and continuously evolve our skills and techniques to stay at the forefront of the industry.",
                },
                {
                  title: "Passion",
                  description:
                    "We are driven by our love for visual storytelling and the impact it can have on audiences.",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="bg-zinc-900 p-6 rounded-lg hover:opacity-80 transition-opacity duration-300"
                >
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-6 text-center">Meet Our Team</h2>
            <p className="text-gray-400 mb-10 text-center max-w-2xl mx-auto">
              Behind every successful project is our team of passionate creatives, technical experts, and production
              professionals dedicated to bringing your vision to life.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Aayush Tiwari",
                  role: "Creative Director",
                  image:
                    "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/aayush3.png?height=400&width=400",
                  bio: "With a keen eye for visual storytelling and creative direction, Aayush leads our team with vision and expertise.",
                  link: "/aayushtiwari",
                },
                {
                  name: "Shishir Thapa",
                  role: "Lead Videographer",
                  image:
                    "https://raw.githubusercontent.com/oriteproduction/thumbnails/main/shishir.png?height=400&width=400",
                  bio: "Shishir's exceptional cinematography skills and attention to detail bring a unique visual style to every project.",
                },
                {
                  name: "Roshan Thapa",
                  role: "Post-Production Manager",
                  image: "/placeholder.svg?height=400&width=400",
                  bio: "Roshan's technical expertise and creative approach ensure that every project is polished to perfection.",
                },
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full">
                    {member.link ? (
                      <Link
                        href={member.link}
                        className="block w-full h-full cursor-pointer hover:opacity-80 transition-opacity duration-300"
                      >
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </Link>
                    ) : (
                      <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                    )}
                  </div>
                  {member.link ? (
                    <Link href={member.link} className="hover:text-red-500 transition-colors duration-300">
                      <h3 className="text-xl font-bold">{member.name}</h3>
                    </Link>
                  ) : (
                    <h3 className="text-xl font-bold">{member.name}</h3>
                  )}
                  <p className="text-red-500 mb-2">{member.role}</p>
                  <p className="text-gray-400 text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Equipment Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Equipment</h2>
            <p className="text-gray-400 mb-10 text-center max-w-2xl mx-auto">
              We use state-of-the-art equipment to ensure the highest quality production for all our projects.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  category: "Cameras",
                  items: ["Sony A7iii", "Sony A7iv", "Sony A7c2", "GoPro Hero 7", "Sony Alpha Series"],
                },
                {
                  category: "Aerial",
                  items: ["DJI Mavic Air 2S", "DJI Avata 2", "DJI Drone"],
                },
                {
                  category: "Audio",
                  items: ["Saramonic Blink500 B2", "Boya Boom Mic", "Zoom f5 Recorder", "Wireless Lavalier Systems"],
                },
                {
                  category: "Lighting",
                  items: ["Aputure 200d", "Aputure Tube t2c", "Godox Flash Series", "Aputure MC"],
                },
                {
                  category: "Support",
                  items: ["Zhiyun Weebil Lab", "Zhiyun Weebil S", "Video Tripods", "C Stands"],
                },
                {
                  category: "Post-Production",
                  items: ["Adobe Creative Suite", "DaVinci Resolve Studio", "Envato Elements", "Epidemic Sounds"],
                },
              ].map((category, index) => (
                <div
                  key={index}
                  className="bg-zinc-900 p-6 rounded-lg hover:opacity-80 transition-opacity duration-300"
                >
                  <h3 className="text-xl font-bold mb-3">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, i) => (
                      <li key={i} className="text-gray-400">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced with 3D Business Card */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - existing content */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
              <p className="text-lg mb-8 max-w-2xl lg:max-w-none">
                Let's create something amazing together. Contact us to discuss your vision.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-white text-red-700 hover:bg-gray-100">
                  Get in Touch
                </Button>
              </Link>
            </div>

            {/* Right side - 3D Business Card and Creative Director Button */}
            <div className="flex flex-col items-center space-y-6">
              {/* 3D Business Card */}
              <div className="relative w-[30rem] h-[15rem] perspective-100">
                <div className="flip-card w-full h-full">
                  <div className="flip-card-inner w-full h-full relative preserve-3d transition-transform duration-700 hover:rotate-y-180">
                    {/* Front */}
                    <div className="flip-card-front absolute inset-0 w-full h-full backface-hidden rounded-lg shadow-2xl overflow-hidden">
                      <Image
                        src="https://raw.githubusercontent.com/oriteproduction/thumbnails/main/cardfront.jpg"
                        alt="Business Card Front"
                        fill
                        className="object-cover"
                      />
                    </div>
                    {/* Back */}
                    <div className="flip-card-back absolute inset-0 w-full h-full backface-hidden rounded-lg shadow-2xl overflow-hidden rotate-y-180">
                      <Image
                        src="https://raw.githubusercontent.com/oriteproduction/thumbnails/main/cardback.jpg"
                        alt="Business Card Back"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Meet the Creative Director Button */}
              <Link href="/aayushtiwari">
                <Button size="lg" className="bg-white text-red-700 hover:bg-gray-100">
                  Meet the Creative Director
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .flip-card-inner:hover {
          transform: rotateY(180deg);
        }
        @media (max-width: 768px) {
          .flip-card-inner {
            cursor: pointer;
          }
          .flip-card-inner:active {
            transform: rotateY(180deg);
          }
        }
      `}</style>
    </main>
  )
}
