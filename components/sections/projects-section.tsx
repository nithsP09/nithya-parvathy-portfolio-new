import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "ElitE Cartons and Packaging – Premium Packaging Website",
      description:
        "A modern and responsive corporate website built for a premium packaging manufacturer and exporter. Showcases their services, product categories, trusted partners, and brand story with smooth animations and an elegant UI. Designed to highlight quality, eco-friendly values, and industry credibility.",
      image: "/elite_cartons.png",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "shadcn/ui",
        "SEO Optimization",
        "Lighthouse Audit",
        "v0 app - Vercel",
        "Responsive Web Design",
        "Jest",
        "React Testing Library",
        "Cross-Browser Testing",
        "Cypress"
      ],
      liveUrl: "https://elite-cartons.vercel.app/",
      hasLinks: true,
    },
    {
      title: "Modern Portfolio Website",
      description:
        'A multi-page portfolio showcasing 5 pages: Home, About Me, Resume, Projects, and Contact. Includes a tooltip that shows a welcoming message on hover: "Bonjour is how you say "Hello" 👋 in French".',
      image: "/nithulakshmi_softwaretester.png",
      technologies: ["HTML", "CSS", "Web3Forms API", "Jest", "React Testing Library", "Responsive Web Design", "Cross-Browser Testing"],
      liveUrl: "https://nithulakshmisoftwaretester.on.drv.tw/www.NithuPortfolio.com/",
      hasLinks: true,
    },
    {
      title: "E-Commerce Platform",
      description:
        "A modern e-commerce platform currently in development. Features include interactive product catalog with variants, shopping cart, search & filtering, responsive design, and planned integration with Firebase Authentication and APIs.",
      image: "/modern-ecommerce-interface.png",
      technologies: [
        "Next.js (App Router)",
        "React 19",
        "TypeScript",
        "Tailwind CSS",
        "v0 app - Vercel",
        "shadcn/ui",
        "Firebase Authentication",
        "React Context + useReducer",
        "LocalStorage Persistence",
        "REST API Integration",
        "Responsive & Mobile-First Design",
        "Accessibility (a11y)",
        "Code Splitting & Lazy Loading",
        "Static Generation & ISR",
        "Product Catalog & Variants",
        "Shopping Cart Logic",
        "Search & Filtering",
        "Error Handling & Form Validation",
        "Component Architecture & Atomic Design",
        "Testing Awareness (Unit, Integration, E2E)"
      ],
      liveUrl: null, // no actual URL yet
      hasLinks: true // button will still show
    },
    {
      title: "My Old Portfolio Website",
      description:
        'A simple and responsive 3-page portfolio (Home, Projects, Contact) built with HTML, CSS, and JavaScript. Includes smooth UI, clean layout, and Web3Forms integration for handling contact form submissions.',
      image: "/nithyaparvathy_old_portfolio.png",
      technologies: ["HTML", "CSS", "JavaScript", "Web3Forms API", "Jest", "React Testing Library", "Responsive Web Design", "Cross-Browser Testing"],
      liveUrl: "https://nithsp09.github.io/My-Personal-Portfolio/",
      hasLinks: true,
    },
  ]

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-6xl w-full space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">Projects</h2>
          <p className="text-xl text-muted-foreground text-balance">
            Showcasing my technical skills through real-world applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:border-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-primary">{project.title}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="bg-primary/10 text-primary">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {project.hasLinks && (
                  <div className="flex space-x-3 pt-2">
                    <Button
                      size="sm"
                      className="bg-primary text-primary-foreground hover:bg-primary/90"
                      onClick={() => {
                        if (project.liveUrl) {
                          window.open(project.liveUrl, "_blank")
                        } else {
                          alert("This project is currently in development.")
                        }
                      }}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
