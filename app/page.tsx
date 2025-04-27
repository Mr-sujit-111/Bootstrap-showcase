"use client"

import { useEffect, useState } from "react"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Achievements from "@/components/Achievements"
import Testimonials from "@/components/Testimonials"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import Script from "next/script"

export default function Portfolio() {
  const [bootstrapLoaded, setBootstrapLoaded] = useState(false)

  // Handle smooth scrolling for anchor links
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleAnchorClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement
        const anchor = target.closest('a[href^="#"]')

        if (anchor) {
          e.preventDefault()
          const targetId = anchor.getAttribute("href")
          if (targetId && targetId !== "#") {
            const targetElement = document.querySelector(targetId)
            if (targetElement) {
              window.scrollTo({
                top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
                behavior: "smooth",
              })
            }
          }
        }
      }

      document.addEventListener("click", handleAnchorClick)
      return () => document.removeEventListener("click", handleAnchorClick)
    }
  }, [])

  return (
    <div className="portfolio-app">
      {/* Bootstrap CSS and JS */}
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossOrigin="anonymous"
        strategy="afterInteractive"
        onLoad={() => setBootstrapLoaded(true)}
      />

      <Navbar bootstrapLoaded={bootstrapLoaded} />
      <Hero />
      <About />
      <Skills bootstrapLoaded={bootstrapLoaded} />
      <Projects />
      <Testimonials />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  )
}
