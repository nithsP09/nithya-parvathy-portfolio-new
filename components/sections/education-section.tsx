import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react"

export function EducationSection() {
  const education = [
    {
      degree: "B.Tech (AEI - Applied Electronics and Instrumentation)",
      institution: "RSET - Autonomous",
      location: "Kochi",
      period: "2018 - 2022",
      gpa: "",
      achievements: ["IoT-Based Home Automation - Best Project Award Certificate for the final year project"],
    },
    {
      degree: "12th Class CBSE - PCM",
      institution: "Mar Thoma Public School",
      location: "Kochi",
      period: "2017 - 2018",
      gpa: "",
      achievements: [],
    },
    {
      degree: "10th Class CBSE",
      institution: "Mar Thoma Public School",
      location: "Kochi",
      period: "2015 - 2016",
      gpa: "",
      achievements: [],
    },
  ]

  const certificates = [
    "Python Course for Beginners With Certification: Mastering the Essentials - SCALAR",
    "Java - HackerRank",
    "SQL - HackerRank",
    "Learn Complete Front-End Web Development Course - Udemy",
    "Software Testing Course - Rogersoft Technologies PVT LTD",
  ]

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-4xl w-full space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">Education</h2>
          <p className="text-xl text-muted-foreground text-balance">
            Academic foundation and continuous learning journey
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card key={index} className="hover:border-primary/90 transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="text-2xl text-primary">{edu.degree}</CardTitle>
                    <div className="flex flex-col space-y-2 text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <GraduationCap className="h-4 w-4" />
                        <span>{edu.institution}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                  </div>
                  {edu.gpa && (
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {edu.gpa}
                    </Badge>
                  )}
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-primary/90">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <Award className="h-8 w-8 text-primary" />
              <h3 className="text-3xl font-bold text-primary">Certificates</h3>
            </div>

            <Card className="border-primary/30 hover:border-primary/60 transition-all duration-300">
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {certificates.map((cert, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-primary font-bold mt-1">•</span>
                      <span className="text-muted-foreground">{cert}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
