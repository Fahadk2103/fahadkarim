import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function Profile() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden" id="home">
      <div className="absolute inset-0 bg-[url('/circuit-board.svg')] opacity-5 animate-pulse"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background to-background"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-secondary rounded-full animate-bounce">
              <span className="text-primary font-medium">Remote Sensing/GIS Specialist & Developer</span>
            </div>
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Fahad Karim 
            </h1>
            <p className="text-lg leading-relaxed max-w-2xl text-foreground/80">
              GIS and Remote Sensing Analyst & Developer | Analyzing Geographic Data and Making Them Dynamic through Web-GIS .
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-primary text-background rounded-full font-medium hover:bg-highlight transition-colors duration-300"
            >
              Get in touch <ArrowRight className="ml-2" />
            </a>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 rounded-full overflow-hidden ring-4 ring-primary/20 animate-float">
              <Image
                src="/pf.png"
                alt="prfilepic"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

