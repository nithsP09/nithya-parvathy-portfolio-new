"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Home, Target, GraduationCap, FolderOpen, Code, Mail, Menu, X } from "lucide-react"

type SectionId = "home" | "objective" | "education" | "projects" | "skills" | "contact"

interface SidebarProps {
  activeSection: string
  onSectionChange: (section: SectionId) => void
}

// ORIGINAL "sidebar" classes were dark. Now swapped to yellow.
const navigationItems = [
  { id: "home" as const, label: "Home", icon: Home },
  { id: "objective" as const, label: "Objective", icon: Target },
  { id: "education" as const, label: "Education", icon: GraduationCap },
  { id: "projects" as const, label: "Projects", icon: FolderOpen },
  { id: "skills" as const, label: "Skills", icon: Code },
  { id: "contact" as const, label: "Contact", icon: Mail },
]

export function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 right-4 z-50 md:hidden 
          bg-primary text-black hover:bg-black hover:text-primary"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Sidebar */}
      <div
        className={cn(
          "fixed top-0 h-full w-80 bg-primary border-r border-black z-40 transform transition-transform duration-300 ease-in-out",
          "md:left-0 md:translate-x-0",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
        )}
      >
        <div className="flex flex-col items-center p-8 space-y-8">
          {/* Profile Image */}
          <div className="relative">
            <Avatar className="w-32 h-32 border-4 border-black shadow-lg">
              <AvatarImage src="/userImage_1.png" alt="Nithya Parvathy Profile" />
              <AvatarFallback className="text-2xl font-bold bg-black text-primary">
                SE
              </AvatarFallback>
            </Avatar>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-black rounded-full border-4 border-primary"></div>
          </div>

          {/* Navigation Links */}
          <nav className="w-full space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon
              const isActive = activeSection === item.id

              return (
                <Button
                  key={item.id}
                  variant={isActive ? "default" : "ghost"}
                  className={cn(
                    "w-full justify-start text-left h-12 text-base font-medium transition-all duration-200",
                    isActive
                      ? "bg-black text-primary hover:bg-black/90 shadow"
                      : "text-black hover:bg-black hover:text-primary",
                  )}
                  onClick={() => {
                    onSectionChange(item.id)
                    setIsMobileMenuOpen(false)
                  }}
                >
                  <Icon className="mr-3 h-5 w-5" />
                  {item.label}
                </Button>
              )
            })}
          </nav>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  )
}
