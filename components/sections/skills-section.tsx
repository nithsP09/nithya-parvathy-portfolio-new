import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function SkillsSection() {
  const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript (ES6+)",
    "TypeScript",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Material UI",
    "Responsive Web Design",
  ]

  const stateManagement = ["Redux Toolkit", "React Query", "Context API", "REST API Integration"]

  const testingOptimization = ["Jest", "React Testing Library", "Cypress", "Performance Optimization", "SEO Best Practices"]

  const toolsDeployment = ["Git", "GitHub", "Vite", "Babel", "NPM/Yarn", "Chart.js", "Recharts", "Vercel"]

  const additional = ["Java", "Python", "SQL Server"]

  const professionalSkills = [
    "Problem Solving",
    "Critical Thinking",
    "Communication",
    "Team Collaboration",
    "Attention to Detail",
    "Adaptability",
    "Quick Learner",
  ]

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: frontendSkills,
    },
    {
      title: "State Management & Data Handling",
      skills: stateManagement,
    },
    {
      title: "Testing & Optimization",
      skills: testingOptimization,
    },
    {
      title: "Tools & Deployment",
      skills: toolsDeployment,
    },
    {
      title: "Additional",
      skills: additional,
    },
    {
      title: "Professional & Soft Skills",
      skills: professionalSkills,
    },
  ]

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-6xl w-full space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">Skills</h2>
          <p className="text-xl text-muted-foreground text-balance">
            Technical expertise and professional competencies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-primary">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="bg-primary/10 text-primary text-sm py-2 px-3 hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
