"use client"

import { useEffect, useState } from "react"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  type: "circle" | "star" | "dot"
  opacity: number
}

export function AnimatedBackground() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const initialParticles: Particle[] = []
    for (let i = 0; i < 15; i++) {
      initialParticles.push({
        id: i,
        x: 50 + Math.random() * 50, // Generate particles only on right half (50-100%)
        y: Math.random() * 100,
        size: Math.random() * 8 + 2,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        type: ["circle", "star", "dot"][Math.floor(Math.random() * 3)] as "circle" | "star" | "dot",
        opacity: Math.random() * 0.6 + 0.2,
      })
    }
    setParticles(initialParticles)

    // Animation loop
    const animateParticles = () => {
      setParticles((prev) =>
        prev.map((particle) => {
          let newX = particle.x + particle.speedX
          const newY = (particle.y + particle.speedY + 100) % 100

          if (newX < 50) {
            newX = 50
          }
          if (newX > 100) {
            newX = 100
          }

          return {
            ...particle,
            x: newX,
            y: newY,
          }
        }),
      )
    }

    const interval = setInterval(animateParticles, 50)
    return () => clearInterval(interval)
  }, [])

  const renderParticle = (particle: Particle) => {
    const style = {
      left: `${particle.x}%`,
      top: `${particle.y}%`,
      width: `${particle.size}px`,
      height: `${particle.size}px`,
      opacity: particle.opacity,
    }

    if (particle.type === "star") {
      return (
        <div key={particle.id} className="absolute animate-pulse flex items-center justify-center" style={style}>
          <div className="w-full h-full relative">
            <div className="absolute inset-0 border-2 border-primary rotate-45 transform origin-center"></div>
            <div className="absolute inset-0 border-2 border-primary -rotate-45 transform origin-center"></div>
          </div>
        </div>
      )
    }

    if (particle.type === "dot") {
      return <div key={particle.id} className="absolute bg-primary rounded-full animate-pulse" style={style} />
    }

    // Circle
    return <div key={particle.id} className="absolute border border-primary rounded-full animate-pulse" style={style} />
  }

  return <div className="absolute inset-0 overflow-hidden pointer-events-none">{particles.map(renderParticle)}</div>
}
