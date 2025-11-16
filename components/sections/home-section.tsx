"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Download } from "lucide-react"
import { AnimatedBackground } from "@/components/animated-background"

// Define the type (should match page.tsx)
type SectionId = "home" | "objective" | "education" | "projects" | "skills" | "contact"

interface HomeSectionProps {
  onNavigate: (section: SectionId) => void  // ✅ Changed from string to SectionId
}

export function HomeSection({ onNavigate }: HomeSectionProps) {
  const handleDownloadCV = () => {
    // Add your CV download logic here
    const link = document.createElement('a')
    link.href = '/Nithya%20Parvathy_Frontend%20Developer_Resume.pdf'
  link.download = 'Nithya_Parvathy_Frontend_Resume.pdf'
    link.click()
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-balance italic">
              Hello, I'm a <span className="text-primary">Software Engineer</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              I'm working as a Software Engineer in Frontend development
            </p>
          </div>

          <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20">
            <p className="text-lg leading-relaxed text-card-foreground">
              Frontend Developer with hands-on experience in building responsive, scalable, and user-friendly 
              web applications using React, Next.js, TypeScript, and modern UI frameworks. 
              Seeking to leverage strong skills in frontend development, API integration, and 
              performance optimization to contribute to innovative, high-quality software solutions.
            </p>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              onClick={() => onNavigate('projects')}  // ✅ Now uses onClick
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleDownloadCV}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <AnimatedBackground />
          <div className="relative w-full max-w-md mx-auto z-10">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl"></div>
            <img
              src="/userImage_2.png"
              alt="Nithy Parvathy Frontend Developer"
              loading="lazy"
              className="relative z-10 w-full h-auto rounded-2xl shadow-2xl border border-primary/20"
              onError={(e) => {
                e.currentTarget.src = '/placeholder.svg'
              }}
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-secondary rounded-full opacity-30 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  )
}