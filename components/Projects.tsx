import Image from "next/image"
import { ExternalLink, Github, Info } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Responsive Data Table in React",
      description: "A highly customizable data table with sorting, filtering, custom UI, and full responsiveness.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      features: ["Sorting", "Filtering", "Custom UI", "Full Responsiveness"],
      techStack: ["React.js", "Tailwind CSS", "Framer Motion"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Custom AG Grid Implementation",
      description:
        "Advanced implementation of AG Grid with role-based grouping, row-span, and advanced filtering capabilities.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3",
      features: ["Role-based Grouping", "Row-span", "Advanced Filtering"],
      techStack: ["React.js", "AG Grid", "Next.js"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Modern UI Components Library",
      description: "A collection of reusable UI components with animations, including buttons, modals, and loaders.",
      image:
        "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3",
      features: ["Reusable Components", "Animations", "Theming Support"],
      techStack: ["React.js", "Tailwind CSS", "Framer Motion"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Animated Time Entry UI",
      description: "A grid-based layout for time entry with inline time selection, validation, and smooth animations.",
      image:
        "https://images.unsplash.com/photo-1555421689-3f034debb7a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      features: ["Grid-based Layout", "Inline Time Selection", "Validation"],
      techStack: ["React.js", "Tailwind CSS", "Framer Motion"],
      demoLink: "#",
      githubLink: "#",
    },
  ]

  return (
    <section id="projects" className="projects py-5">
      <div className="container py-5">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <h6 className="text-primary fw-bold mb-3">MY WORK</h6>
            <h2 className="display-5 fw-bold mb-4">Recent Projects</h2>
            <div className="divider bg-primary mx-auto mb-4" style={{ height: "3px", width: "60px" }}></div>
            <p className="lead mb-5">Here are some of my recent projects showcasing my skills and expertise.</p>
          </div>
        </div>

        {/* Project Filter Buttons */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <div className="btn-group" role="group" aria-label="Project filters">
              <input
                type="radio"
                className="btn-check"
                name="projectFilter"
                id="all"
                autoComplete="off"
                defaultChecked
              />
              <label className="btn btn-outline-primary" htmlFor="all">
                All Projects
              </label>

              <input type="radio" className="btn-check" name="projectFilter" id="react" autoComplete="off" />
              <label className="btn btn-outline-primary" htmlFor="react">
                React.js
              </label>

              <input type="radio" className="btn-check" name="projectFilter" id="next" autoComplete="off" />
              <label className="btn btn-outline-primary" htmlFor="next">
                Next.js
              </label>

              <input type="radio" className="btn-check" name="projectFilter" id="tailwind" autoComplete="off" />
              <label className="btn btn-outline-primary" htmlFor="tailwind">
                Tailwind CSS
              </label>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="row g-4">
          {projects.map((project, index) => (
            <div className="col-md-6" key={index}>
              <div className="card h-100 border-0 shadow-sm">
                <div className="project-img position-relative">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={350}
                    className="card-img-top"
                  />
                  <div className="project-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                    <div className="d-flex gap-2">
                      <a
                        href={project.demoLink}
                        className="btn btn-sm btn-primary"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="View Live Demo"
                      >
                        <ExternalLink size={16} />
                      </a>
                      <a
                        href={project.githubLink}
                        className="btn btn-sm btn-dark"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="View Code on GitHub"
                      >
                        <Github size={16} />
                      </a>
                      <button
                        type="button"
                        className="btn btn-sm btn-light"
                        data-bs-toggle="modal"
                        data-bs-target={`#projectModal${index}`}
                        data-bs-tooltip="tooltip"
                        data-bs-placement="top"
                        title="Project Details"
                      >
                        <Info size={16} />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <h5 className="card-title fw-bold mb-0">{project.title}</h5>
                    <div className="project-badge">
                      <span className="badge rounded-pill bg-primary">Featured</span>
                    </div>
                  </div>
                  <p className="card-text text-muted">{project.description}</p>

                  <h6 className="fw-bold mt-3 mb-2">Features:</h6>
                  <ul className="list-unstyled">
                    {project.features.map((feature, i) => (
                      <li key={i} className="mb-1">
                        <span className="text-primary me-2">•</span> {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="d-flex gap-2 mb-3">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="badge bg-light text-dark">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="d-grid gap-2 mt-3">
                    <a
                      href={project.demoLink}
                      className="btn btn-primary d-flex align-items-center justify-content-center gap-2"
                    >
                      View Project <ExternalLink size={16} />
                    </a>
                  </div>
                </div>

                {/* Project Progress */}
                <div className="card-footer bg-white border-0 pt-0">
                  <div className="d-flex justify-content-between text-muted small mb-1">
                    <span>Project Completion</span>
                    <span>100%</span>
                  </div>
                  <div className="progress" style={{ height: "5px" }}>
                    <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      style={{ width: "100%" }}
                      aria-valuenow={100}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Project Modal */}
              <div
                className="modal fade"
                id={`projectModal${index}`}
                tabIndex={-1}
                aria-labelledby={`projectModalLabel${index}`}
                aria-hidden="true"
              >
                <div className="modal-dialog modal-lg modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id={`projectModalLabel${index}`}>
                        {project.title}
                      </h5>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-md-6 mb-3 mb-md-0">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            width={600}
                            height={350}
                            className="img-fluid rounded"
                          />
                        </div>
                        <div className="col-md-6">
                          <h5 className="fw-bold mb-3">Project Overview</h5>
                          <p>{project.description}</p>

                          <h6 className="fw-bold mt-4 mb-2">Key Features</h6>
                          <ul>
                            {project.features.map((feature, i) => (
                              <li key={i}>{feature}</li>
                            ))}
                          </ul>

                          <h6 className="fw-bold mt-4 mb-2">Technology Stack</h6>
                          <div className="d-flex flex-wrap gap-2 mb-3">
                            {project.techStack.map((tech, i) => (
                              <span key={i} className="badge bg-primary">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="row mt-4">
                        <div className="col-12">
                          <h5 className="fw-bold mb-3">Development Process</h5>
                          <div className="accordion" id={`accordionProcess${index}`}>
                            <div className="accordion-item">
                              <h2 className="accordion-header" id={`headingPlanning${index}`}>
                                <button
                                  className="accordion-button"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target={`#collapsePlanning${index}`}
                                  aria-expanded="true"
                                  aria-controls={`collapsePlanning${index}`}
                                >
                                  Planning & Design
                                </button>
                              </h2>
                              <div
                                id={`collapsePlanning${index}`}
                                className="accordion-collapse collapse show"
                                aria-labelledby={`headingPlanning${index}`}
                                data-bs-parent={`#accordionProcess${index}`}
                              >
                                <div className="accordion-body">
                                  Started with wireframing and prototyping to establish the core functionality and user
                                  experience. Collaborated with designers to create a modern, intuitive interface.
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item">
                              <h2 className="accordion-header" id={`headingDevelopment${index}`}>
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target={`#collapseDevelopment${index}`}
                                  aria-expanded="false"
                                  aria-controls={`collapseDevelopment${index}`}
                                >
                                  Development
                                </button>
                              </h2>
                              <div
                                id={`collapseDevelopment${index}`}
                                className="accordion-collapse collapse"
                                aria-labelledby={`headingDevelopment${index}`}
                                data-bs-parent={`#accordionProcess${index}`}
                              >
                                <div className="accordion-body">
                                  Implemented the frontend using React.js with a focus on component reusability and
                                  performance. Used modern JavaScript practices and state management techniques.
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item">
                              <h2 className="accordion-header" id={`headingTesting${index}`}>
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target={`#collapseTesting${index}`}
                                  aria-expanded="false"
                                  aria-controls={`collapseTesting${index}`}
                                >
                                  Testing & Deployment
                                </button>
                              </h2>
                              <div
                                id={`collapseTesting${index}`}
                                className="accordion-collapse collapse"
                                aria-labelledby={`headingTesting${index}`}
                                data-bs-parent={`#accordionProcess${index}`}
                              >
                                <div className="accordion-body">
                                  Conducted thorough testing across different browsers and devices to ensure
                                  compatibility and responsiveness. Deployed using CI/CD pipeline for seamless updates.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                        Close
                      </button>
                      <a href={project.demoLink} className="btn btn-primary">
                        View Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

