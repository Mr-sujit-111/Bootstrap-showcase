"use client"

import { useEffect } from "react"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Achievements from "@/components/Achievements"
import Testimonials from "@/components/Testimonials"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import * as bootstrap from "bootstrap"

export default function Portfolio() {
  // Smooth scrolling for anchor links
  useEffect(() => {
    // Only run client-side code in the browser
    if (typeof window !== "undefined") {
      // Smooth scrolling for anchor links
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

      // Initialize Bootstrap tooltips and popovers
      const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
      tooltipTriggerList.map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl))

      const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
      popoverTriggerList.map((popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl))

      return () => document.removeEventListener("click", handleAnchorClick)
    }
  }, [])

  return (
    <div className="portfolio-app">
      {/* Bootstrap CSS */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
        crossOrigin="anonymous"
      />

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Achievements />
      <Contact />
      <Footer />

      {/* Bootstrap JS */}
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossOrigin="anonymous"
      ></script>
    </div>
  )
}
