"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Check, AlertCircle } from "lucide-react"

export default function Contact() {
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      if (Math.random() > 0.3) {
        // 70% chance of success
        setFormStatus("success")
      } else {
        setFormStatus("error")
      }
    }, 1500)
  }

  return (
    <section id="contact" className="contact py-5">
      <div className="container py-5">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <h6 className="text-primary fw-bold mb-3">GET IN TOUCH</h6>
            <h2 className="display-5 fw-bold mb-4">Contact Me</h2>
            <div className="divider bg-primary mx-auto mb-4" style={{ height: "3px", width: "60px" }}></div>
            <p className="lead mb-5">
              Have a project in mind or want to discuss a potential collaboration? Feel free to reach out using the form
              below.
            </p>
          </div>
        </div>

        <div className="row g-5">
          <div className="col-lg-5">
            <div className="contact-info p-4 bg-light rounded shadow-sm h-100">
              <h3 className="fw-bold mb-4">Contact Information</h3>

              <div className="d-flex align-items-center mb-4">
                <div className="contact-icon bg-primary-subtle p-3 rounded me-3">
                  <Mail className="text-primary" />
                </div>
                <div>
                  <h6 className="fw-bold mb-0">Email</h6>
                  <p className="mb-0">sujitbhanderi331@gmail.com</p>
                </div>
              </div>

              <div className="d-flex align-items-center mb-4">
                <div className="contact-icon bg-primary-subtle p-3 rounded me-3">
                  <Phone className="text-primary" />
                </div>
                <div>
                  <h6 className="fw-bold mb-0">Phone</h6>
                  <p className="mb-0">+91 7359068984</p>
                </div>
              </div>

              <div className="d-flex align-items-center mb-4">
                <div className="contact-icon bg-primary-subtle p-3 rounded me-3">
                  <MapPin className="text-primary" />
                </div>
                <div>
                  <h6 className="fw-bold mb-0">Location</h6>
                  <p className="mb-0">India</p>
                </div>
              </div>

              <h5 className="fw-bold mb-3">Portfolio & Profiles</h5>
              <div className="d-flex flex-column gap-2">
                <a
                  href="https://github.com/Mr-sujit-111"
                  className="d-flex align-items-center text-decoration-none text-dark"
                >
                  <Github className="me-2" size={20} />
                  github.com/Mr-sujit-111
                </a>
                <a
                  href="https://linkedin.com/in/sujit-bhanderi331"
                  className="d-flex align-items-center text-decoration-none text-dark"
                >
                  <Linkedin className="me-2" size={20} />
                  linkedin.com/in/sujit-bhanderi331
                </a>
                <a
                  href="https://sujit-cv.vercel.app"
                  className="d-flex align-items-center text-decoration-none text-dark"
                >
                  <ExternalLink className="me-2" size={20} />
                  sujit-cv.vercel.app
                </a>
              </div>

              {/* Bootstrap Card with List Group */}
              <div className="card mt-4 border-0 shadow-sm">
                <div className="card-header bg-primary text-white">
                  <h6 className="mb-0 fw-bold">Availability</h6>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Freelance Projects
                    <span className="badge bg-success rounded-pill">Available</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Full-time Position
                    <span className="badge bg-success rounded-pill">Available</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Response Time
                    <span className="badge bg-primary rounded-pill">24 hours</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="contact-form p-4 bg-white rounded shadow-sm">
              {formStatus === "success" && (
                <div className="alert alert-success d-flex align-items-center" role="alert">
                  <Check className="me-2" size={20} />
                  <div>Your message has been sent successfully! I'll get back to you soon.</div>
                </div>
              )}

              {formStatus === "error" && (
                <div className="alert alert-danger d-flex align-items-center" role="alert">
                  <AlertCircle className="me-2" size={20} />
                  <div>There was an error sending your message. Please try again later.</div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="needs-validation" noValidate>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label">
                      Your Name
                    </label>
                    <div className="input-group has-validation">
                      <span className="input-group-text">
                        <i className="bi bi-person"></i>
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                      />
                      <div className="invalid-feedback">Please enter your name.</div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">
                      Your Email
                    </label>
                    <div className="input-group has-validation">
                      <span className="input-group-text">@</span>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                      />
                      <div className="invalid-feedback">Please enter a valid email address.</div>
                    </div>
                  </div>

                  <div className="col-12">
                    <label htmlFor="subject" className="form-label">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Enter subject"
                      required
                    />
                    <div className="invalid-feedback">Please enter a subject.</div>
                  </div>

                  <div className="col-12">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Enter your message"
                      required
                    ></textarea>
                    <div className="invalid-feedback">Please enter your message.</div>
                  </div>

                  <div className="col-12">
                    <div className="form-check mb-3">
                      <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                      <label className="form-check-label" htmlFor="invalidCheck">
                        I agree to the terms and conditions
                      </label>
                      <div className="invalid-feedback">You must agree before submitting.</div>
                    </div>
                  </div>

                  <div className="col-12">
                    <button type="submit" className="btn btn-primary px-4 py-2" disabled={formStatus !== "idle"}>
                      {formStatus === "idle" ? (
                        "Send Message"
                      ) : (
                        <>
                          <span
                            className="spinner-border spinner-border-sm me-2"
                            role="status"
                            aria-hidden="true"
                          ></span>
                          Sending...
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

