"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Bell, Sun, Moon } from "lucide-react"

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false)
  const [showNotification, setShowNotification] = useState(false)

  useEffect(() => {
    // Only run in browser environment
    if (typeof window !== "undefined") {
      // Check if there's a saved theme preference
      const savedTheme = localStorage.getItem("theme")
      if (savedTheme === "dark") {
        setDarkMode(true)
        document.body.classList.add("dark-mode")
      }
    }
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)

    if (typeof window !== "undefined") {
      if (newDarkMode) {
        document.body.classList.add("dark-mode")
        localStorage.setItem("theme", "dark")
      } else {
        document.body.classList.remove("dark-mode")
        localStorage.setItem("theme", "light")
      }
    }
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm">
        <div className="container">
          <Link href="/" className="navbar-brand fw-bold">
            Sujit<span className="text-primary">Bhanderi</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#testimonials">
                  Testimonials
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#achievements">
                  Achievements
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </a>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#resumeModal">
                      View Resume
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#bootstrapFeatures"
                    >
                      Bootstrap Features
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#contact">
                      Hire Me
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item relative ms-2">
                <button
                  className="btn btn-link nav-link relative p-2"
                  onClick={() => setShowNotification(!showNotification)}
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  title="Notifications"
                >
                  <Bell size={24} className="text-dark" />
                  {/*  <span className="absolute -top-1 -right-2 bg-danger text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    2
                  </span> */}
                </button>
              </li>

              <li className="nav-item ms-2">
                <button
                  className="btn btn-link nav-link"
                  onClick={toggleDarkMode}
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                >
                  {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Toast Notification */}
      <div
        className={`position-fixed top-0 end-0 p-3 ${showNotification ? "show" : ""}`}
        style={{ zIndex: 1100, marginTop: "70px" }}
      >
        <div
          id="liveToast"
          className={`toast ${showNotification ? "show" : ""}`}
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-header">
            <strong className="me-auto">New Message</strong>
            <small>Just now</small>
            <button type="button" className="btn-close" onClick={() => setShowNotification(false)}></button>
          </div>
          <div className="toast-body">You have 2 new project inquiries. Check your inbox!</div>
        </div>
      </div>

      {/* Resume Modal */}
      <div className="modal fade" id="resumeModal" tabIndex={-1} aria-labelledby="resumeModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="resumeModalLabel">
                Sujit Bhanderi - Resume
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="container">
                <div className="row mb-4">
                  <div className="col-12">
                    <h2 className="fw-bold">Sujit Bhanderi</h2>
                    <p className="lead">Frontend Developer | Next.js | React.js | Tailwind CSS</p>
                    <p>sujitbhanderi331@gmail.com | +91 7359068984 | India</p>
                  </div>
                </div>

                <div className="row mb-4">
                  <div className="col-12">
                    <h4 className="fw-bold border-bottom pb-2">Professional Experience</h4>
                    <div className="mb-3">
                      <h5>Senior Frontend Developer</h5>
                      <p className="text-muted">Company Name | 2021 - Present</p>
                      <ul>
                        <li>Developed responsive web applications using React.js and Next.js</li>
                        <li>Implemented modern UI designs with Tailwind CSS and Framer Motion</li>
                        <li>Optimized application performance and improved load times by 40%</li>
                      </ul>
                    </div>
                    <div>
                      <h5>Frontend Developer</h5>
                      <p className="text-muted">Previous Company | 2019 - 2021</p>
                      <ul>
                        <li>Built interactive user interfaces with React.js</li>
                        <li>Collaborated with design team to implement pixel-perfect designs</li>
                        <li>Maintained and improved existing codebase</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12">
                    <h4 className="fw-bold border-bottom pb-2">Education</h4>
                    <h5>Bachelor of Computer Science</h5>
                    <p className="text-muted">University Name | 2015 - 2019</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bootstrap Features Offcanvas */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex={-1}
        id="bootstrapFeatures"
        aria-labelledby="bootstrapFeaturesLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="bootstrapFeaturesLabel">
            Bootstrap 5 Features
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <p>This portfolio showcases various Bootstrap 5 features:</p>
          <div className="accordion" id="bootstrapAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Layout Components
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#bootstrapAccordion"
              >
                <div className="accordion-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Responsive Grid System</li>
                    <li className="list-group-item">Containers</li>
                    <li className="list-group-item">Flexbox Utilities</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Content & Components
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#bootstrapAccordion"
              >
                <div className="accordion-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Cards</li>
                    <li className="list-group-item">Carousel</li>
                    <li className="list-group-item">Modal</li>
                    <li className="list-group-item">Navbar</li>
                    <li className="list-group-item">Progress Bars</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Interactive Elements
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#bootstrapAccordion"
              >
                <div className="accordion-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Tooltips</li>
                    <li className="list-group-item">Popovers</li>
                    <li className="list-group-item">Toasts</li>
                    <li className="list-group-item">Offcanvas</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <p>Current progress:</p>
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped progress-bar-animated"
                role="progressbar"
                style={{ width: "75%" }}
                aria-valuenow={75}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                75%
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
