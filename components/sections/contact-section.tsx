"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export function ContactSection() {
  const contactInfo = [
    { icon: Mail, label: "Email", value: "nithyaparvathy9@gmail.com", href: "mailto:nithyaparvathy9@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 6282122482", href: "tel:+91 6282122482" },
    { icon: MapPin, label: "Location", value: "Srayicheril, Poozhikkadu, Kudassanad P O, Kurampala, Pathanamthitta, Kerala - 689501", href: "#" },
  ]

  const socialLinks = [
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/nithya-parvathy-8887b8201/", label: "LinkedIn" },
    { icon: FaGithub, href: "https://github.com/nithsP09", label: "GitHub" },
  ]

  const [loading, setLoading] = useState(false)
  const [popupMessage, setPopupMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const form = e.currentTarget
    const formData = new FormData(form)
    const data = Object.fromEntries(formData.entries())

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "f276ddc8-d1cc-4b24-addd-fd36ef3c8e3f",
          name: data.name,
          email: data.email,
          subject: data.subject || "New message from portfolio contact form",
          message: `Subject: ${data.subject || "(No subject)"}\n\nMessage:\n${data.message}`,
        }),
      })

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)

      const result = await response.json()

      if (result.success) {
        form.reset()
        setPopupMessage({ type: "success", text: "Message sent successfully!" })
      } else {
        setPopupMessage({ type: "error", text: result.message || "Failed to send message. Please try again." })
      }
    } catch (err) {
      console.error("Form submission error:", err)
      setPopupMessage({ type: "error", text: "Network error. Please check your connection and try again." })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-8 relative">
      <div className="max-w-6xl w-full space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-primary">Contact Me</h2>
          <p className="text-xl text-muted-foreground text-balance">Let's connect and discuss opportunities</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="hover:border-primary/90 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Get In Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{info.label}</p>
                        <a href={info.href} className="text-muted-foreground hover:text-primary transition-colors">
                          {info.value}
                        </a>
                      </div>
                    </div>
                  )
                })}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="hover:border-primary/90 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Follow Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon
                    return (
                      <Button
                        key={index}
                        variant="outline"
                        size="icon"
                        className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                        asChild
                      >
                        <a href={social.href} aria-label={social.label}>
                          <Icon className="h-5 w-5" />
                        </a>
                      </Button>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="hover:border-primary/90 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Send Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6 -mt-3" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Name</label>
                    <Input name="name" placeholder="Your name" required className="bg-input border-border" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email</label>
                    <Input name="email" type="email" placeholder="your.email@example.com" required className="bg-input border-border" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Subject</label>
                  <Input name="subject" placeholder="Message subject" className="bg-input border-border" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Message</label>
                  <Textarea name="message" placeholder="Your message here..." rows={6} required className="bg-input border-border resize-none" />
                </div>

                <Button type="submit" className="mt-2 w-full bg-primary text-primary-foreground hover:bg-primary/90 py-5 text-xl" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Popup Modal */}
      {popupMessage && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
            <h3 className={`text-lg font-semibold mb-4 ${popupMessage.type === "success" ? "text-green-600" : "text-red-600"}`}>
              {popupMessage.type === "success" ? "Success!" : "Error!"}
            </h3>
            <p className="mb-6 text-black">{popupMessage.text}</p> {/* <-- set text-black here */}
            <Button onClick={() => setPopupMessage(null)}>OK</Button>
          </div>
        </div>
      )}
    </div>
  )
}
