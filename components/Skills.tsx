"use client"

import { useEffect, useRef } from "react"

declare global {
  interface Window {
    bootstrap: any
  }
}

interface SkillsProps {
  bootstrapLoaded?: boolean
}

export default function Skills({ bootstrapLoaded = false }: SkillsProps) {
  const tooltipsInitialized = useRef(false)

  const frontendSkills = [
    { name: "React.js", percentage: 95 },
    { name: "Next.js", percentage: 90 },
    { name: "JavaScript (ES6+)", percentage: 90 },
    { name: "HTML5 & CSS3", percentage: 100 },
    { name: "Tailwind CSS", percentage: 98 },
    { name: "Bootstrap 5", percentage: 95 },
  ]

  const otherSkills = [
    { name: "Framer Motion", percentage: 85 },
    { name: "AG Grid", percentage: 90 },
    { name: "Redux & State Management", percentage: 90 },
    { name: "Git & GitHub", percentage: 95 },
    { name: "Vercel, Netlify", percentage: 90 },
    { name: "Node.js & Express.js (Basic)", percentage: 75 },
  ]

  // Initialize tooltips only after Bootstrap is fully loaded
  useEffect(() => {
    if (bootstrapLoaded && !tooltipsInitialized.current && typeof window !== "undefined" && window.bootstrap) {
      try {
        // Wait a bit to ensure DOM is ready
        const timer = setTimeout(() => {
          const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
          if (tooltipTriggerList.length > 0) {
            Array.from(tooltipTriggerList).forEach((tooltipTriggerEl) => {
              new window.bootstrap.Tooltip(tooltipTriggerEl)
            })
            tooltipsInitialized.current = true
          }
        }, 500)

        return () => clearTimeout(timer)
      } catch (error) {
        console.error("Failed to initialize tooltips:", error)
      }
    }
  }, [bootstrapLoaded])

  return (
    <section id="skills" className="skills py-5 bg-light">
      <div className="container py-5">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <h6 className="text-primary fw-bold mb-3">MY SKILLS</h6>
            <h2 className="display-5 fw-bold mb-4">Technical Expertise</h2>
            <div className="divider bg-primary mx-auto mb-4" style={{ height: "3px", width: "60px" }}></div>
            <p className="lead mb-5">
              I specialize in frontend technologies with a focus on modern JavaScript frameworks and responsive design.
            </p>
          </div>
        </div>

        {/* Bootstrap Tabs */}
        <div className="row mb-5">
          <div className="col-12">
            <ul className="nav nav-pills mb-4 justify-content-center" id="skillsTabs" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active px-4 py-2 mx-1"
                  id="frontend-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#frontend"
                  type="button"
                  role="tab"
                  aria-controls="frontend"
                  aria-selected="true"
                >
                  Frontend
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link px-4 py-2 mx-1"
                  id="other-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#other"
                  type="button"
                  role="tab"
                  aria-controls="other"
                  aria-selected="false"
                >
                  Other Skills
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link px-4 py-2 mx-1"
                  id="tools-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#tools"
                  type="button"
                  role="tab"
                  aria-controls="tools"
                  aria-selected="false"
                >
                  Tools & Methods
                </button>
              </li>
            </ul>

            <div className="tab-content" id="skillsTabContent">
              {/* Frontend Skills Tab */}
              <div className="tab-pane fade show active" id="frontend" role="tabpanel" aria-labelledby="frontend-tab">
                <div className="row">
                  <div className="col-md-6">
                    {frontendSkills.slice(0, 3).map((skill, index) => (
                      <div className="skill-item mb-4" key={index}>
                        <div className="d-flex justify-content-between mb-1">
                          <span className="fw-bold">{skill.name}</span>
                          <span>{skill.percentage}%</span>
                        </div>
                        <div className="progress" style={{ height: "10px" }}>
                          <div
                            className="progress-bar bg-primary"
                            role="progressbar"
                            style={{ width: `${skill.percentage}%` }}
                            aria-valuenow={skill.percentage}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            title={`${skill.percentage}% proficiency`}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="col-md-6">
                    {frontendSkills.slice(3, 6).map((skill, index) => (
                      <div className="skill-item mb-4" key={index}>
                        <div className="d-flex justify-content-between mb-1">
                          <span className="fw-bold">{skill.name}</span>
                          <span>{skill.percentage}%</span>
                        </div>
                        <div className="progress" style={{ height: "10px" }}>
                          <div
                            className="progress-bar bg-primary"
                            role="progressbar"
                            style={{ width: `${skill.percentage}%` }}
                            aria-valuenow={skill.percentage}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            title={`${skill.percentage}% proficiency`}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Other Skills Tab */}
              <div className="tab-pane fade" id="other" role="tabpanel" aria-labelledby="other-tab">
                <div className="row">
                  <div className="col-md-6">
                    {otherSkills.slice(0, 3).map((skill, index) => (
                      <div className="skill-item mb-4" key={index}>
                        <div className="d-flex justify-content-between mb-1">
                          <span className="fw-bold">{skill.name}</span>
                          <span>{skill.percentage}%</span>
                        </div>
                        <div className="progress" style={{ height: "10px" }}>
                          <div
                            className="progress-bar bg-primary"
                            role="progressbar"
                            style={{ width: `${skill.percentage}%` }}
                            aria-valuenow={skill.percentage}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="col-md-6">
                    {otherSkills.slice(3, 6).map((skill, index) => (
                      <div className="skill-item mb-4" key={index}>
                        <div className="d-flex justify-content-between mb-1">
                          <span className="fw-bold">{skill.name}</span>
                          <span>{skill.percentage}%</span>
                        </div>
                        <div className="progress" style={{ height: "10px" }}>
                          <div
                            className="progress-bar bg-primary"
                            role="progressbar"
                            style={{ width: `${skill.percentage}%` }}
                            aria-valuenow={skill.percentage}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tools & Methods Tab */}
              <div className="tab-pane fade" id="tools" role="tabpanel" aria-labelledby="tools-tab">
                <div className="row">
                  <div className="col-md-6 mx-auto">
                    <div className="card border-0 shadow-sm">
                      <div className="card-body p-4">
                        <h5 className="card-title fw-bold mb-4">Development Tools & Methodologies</h5>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item d-flex justify-content-between align-items-center">
                            Git & GitHub
                            <span className="badge bg-primary rounded-pill">Advanced</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center">
                            VS Code
                            <span className="badge bg-primary rounded-pill">Advanced</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center">
                            Agile/Scrum
                            <span className="badge bg-primary rounded-pill">Intermediate</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center">
                            CI/CD
                            <span className="badge bg-primary rounded-pill">Intermediate</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center">
                            Responsive Design
                            <span className="badge bg-primary rounded-pill">Advanced</span>
                          </li>
                          <li className="list-group-item d-flex justify-content-between align-items-center">
                            Performance Optimization
                            <span className="badge bg-primary rounded-pill">Advanced</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bootstrap Skill Cards */}
        <div className="row mt-5">
          <div className="col-12 text-center mb-4">
            <h4 className="fw-bold">Bootstrap 5 Features Showcase</h4>
            <p className="text-muted">Demonstrating various Bootstrap 5 components and utilities</p>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-header bg-primary text-white">Layout & Grid</div>
              <div className="card-body">
                <h5 className="card-title">Responsive Grid System</h5>
                <p className="card-text">Utilizing Bootstrap's powerful mobile-first flexbox grid.</p>
                <div className="row g-2 mb-3">
                  <div className="col-4">
                    <div className="p-2 bg-light border">Col</div>
                  </div>
                  <div className="col-4">
                    <div className="p-2 bg-light border">Col</div>
                  </div>
                  <div className="col-4">
                    <div className="p-2 bg-light border">Col</div>
                  </div>
                </div>
                <button type="button" className="btn btn-sm btn-outline-primary" title="Grid System">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-header bg-primary text-white">Components</div>
              <div className="card-body">
                <h5 className="card-title">Interactive Elements</h5>
                <p className="card-text">Using Bootstrap's JavaScript components for enhanced interactivity.</p>
                <div className="d-grid gap-2">
                  <button className="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#demoModal">
                    Modal Demo
                  </button>
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    Collapse Demo
                  </button>
                </div>
                <div className="collapse mt-3" id="collapseExample">
                  <div className="card card-body">
                    This is a collapsible content example using Bootstrap's collapse component.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-header bg-primary text-white">Utilities</div>
              <div className="card-body">
                <h5 className="card-title">Helper Classes</h5>
                <p className="card-text">Leveraging Bootstrap's utility classes for spacing, colors, and more.</p>
                <div className="d-flex justify-content-between mb-3">
                  <span className="badge bg-primary">Primary</span>
                  <span className="badge bg-secondary">Secondary</span>
                  <span className="badge bg-success">Success</span>
                  <span className="badge bg-danger">Danger</span>
                </div>
                <div className="alert alert-info" role="alert">
                  <i className="bi bi-info-circle me-2"></i>
                  Bootstrap includes dozens of utilities for showing, hiding, aligning, and spacing content.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Modal */}
      <div className="modal fade" id="demoModal" tabIndex={-1} aria-labelledby="demoModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="demoModalLabel">
                Bootstrap Modal
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>This is a demonstration of Bootstrap's modal component.</p>
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <div className="spinner-grow text-primary ms-2" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
