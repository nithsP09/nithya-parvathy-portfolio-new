import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Lightbulb, Rocket, Users } from "lucide-react"

export function ObjectiveSection() {
  const objectives = [
    {
      icon: Target,
      title: "Career Goals",
      description:
        "To become a leading frontend developer specializing in modern web technologies and user experience design.",
    },
    {
      icon: Lightbulb,
      title: "Innovation Focus",
      description:
        "Continuously learning and implementing cutting-edge technologies to create innovative web solutions.",
    },
    {
      icon: Rocket,
      title: "Growth Mindset",
      description: "Seeking challenging opportunities that push boundaries and contribute to meaningful projects.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Building strong relationships with cross-functional teams to deliver exceptional user experiences.",
    },
  ]

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-4xl w-full space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">My Objective</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Driven by passion for technology and commitment to excellence in software development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {objectives.map((objective, index) => {
            const Icon = objective.icon
            return (
              <Card
                key={index}
                className="group hover:border-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/50 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{objective.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{objective.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}
