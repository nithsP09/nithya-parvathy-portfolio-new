"use client"

import { useState, useEffect, useRef } from "react"
import { Sidebar } from "@/components/sidebar"
import { HomeSection } from "@/components/sections/home-section"
import { ObjectiveSection } from "@/components/sections/objective-section"
import { EducationSection } from "@/components/sections/education-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { ContactSection } from "@/components/sections/contact-section"

type SectionId = "home" | "objective" | "education" | "projects" | "skills" | "contact"

const sectionTitles: Record<SectionId, string> = {
  home: "Home",
  objective: "Objective",
  education: "Education",
  projects: "Projects",
  skills: "Skills",
  contact: "Contact",
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState<SectionId>("home")
  const [isTransitioning, setIsTransitioning] = useState(false)
  const mainRef = useRef<HTMLDivElement>(null)

  // Update document title when section changes
  useEffect(() => {
    document.title = `${sectionTitles[activeSection]} | Nithya Parvathy - Portfolio`
  }, [activeSection])

  const handleSectionChange = (section: SectionId) => {
    // Prevent double-clicks on same section
    if (section === activeSection || isTransitioning) return
    
    // Start smooth transition
    setIsTransitioning(true)
    
    // Small delay for fade-out effect
    setTimeout(() => {
      setActiveSection(section)
      
      // Scroll to top smoothly
      if (mainRef.current) {
        mainRef.current.scrollTop = 0
      }
      
      // End transition for fade-in
      setTimeout(() => {
        setIsTransitioning(false)
      }, 50) // Quick fade-in
    }, 200) // Fade-out duration
  }

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <HomeSection onNavigate={handleSectionChange} />
      case "objective":
        return <ObjectiveSection />
      case "education":
        return <EducationSection />
      case "projects":
        return <ProjectsSection />
      case "skills":
        return <SkillsSection />
      case "contact":
        return <ContactSection />
      default:
        return <HomeSection onNavigate={handleSectionChange} />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Sidebar 
        activeSection={activeSection} 
        onSectionChange={handleSectionChange} 
      />

      <main 
        ref={mainRef}
        className="md:ml-80 overflow-auto"
        style={{ height: '100vh' }}
      >
        <div
          className={`transition-opacity duration-200 ease-in-out ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
        >
          {renderSection()}
        </div>
      </main>
    </div>
  )
}