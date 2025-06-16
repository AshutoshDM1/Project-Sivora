"use client"

import { Button } from "./ui/button"
import { Github, Linkedin, MessageCircle } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main heading with profile image */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span >I'm</span> <span >Shivam Gupta</span>{" "}
            <div className="inline-block w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-4 border-black ml-2 align-middle">
              <img
                src="https://images.unsplash.com/photo-1648218943004-5ec604ef627a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGElMjBwZXJzb24lMjBtYW58ZW58MHx8MHx8fDA%3D"
                alt="Eric Augusto profile"
                width={96}
                height={96}
                className="w-full h-full object-cover"
              />
            </div>
            <span >,</span>
          </h1>
        </div>

        {/* Second line with car image */}
        <div className="mb-8">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span >Full Stack</span>{" "}
            <div className="inline-block w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-4 border-blue-500 mx-2 align-middle">
              <img
                src="https://images.unsplash.com/photo-1581276879432-15e50529f34b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJvbnRlbmR8ZW58MHx8MHx8fDA%3D"
                alt="Car illustration"
                width={96}
                height={96}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-gray-500">Developer</span>
          </h2>
        </div>

        {/* Third line with Brazil/toucan image */}
        <div className="mb-12">
          <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span >based in</span> <span >India</span>{" "}
            <div className="inline-block w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-4 border-orange-600 ml-2 align-middle">
              <img
                src="https://plus.unsplash.com/premium_photo-1661962542692-4fe7a4ad6b54?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5kaWF8ZW58MHx8MHx8fDA%3D"
                alt="Brazil toucan"
                width={96}
                height={96}
                className="w-full h-full object-cover"
              />
            </div>
          </h3>
        </div>

        {/* Description */}
        <div className="mb-12">
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            I have 5 years of experience as a coding enthusiast and 3 years as a professional developer working mostly
            with Angular.
          </p>
        </div>

        {/* Action buttons and social links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          {/* Primary actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="px-8 py-3 rounded-full text-lg font-medium cursor-pointer hover:bg-foreground/90 bg-foreground"
            >
              Let's talk
            </Button>
            <Button variant="ghost" size="lg" className="px-8 py-3 text-lg font-medium cursor-pointer hover:bg-foreground/20 bg-foreground/10">
              <span>Open CV</span>
            </Button>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4 ml-0 sm:ml-8">
            <a href="#" className="p-3 transition-colors hover:bg-foreground/10 rounded-full" aria-label="GitHub">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="p-3 transition-colors hover:bg-foreground/10 rounded-full" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="p-3 transition-colors hover:bg-foreground/10 rounded-full" aria-label="WhatsApp">
              <MessageCircle className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
