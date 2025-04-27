"use client"

import Image from "next/image"
import { useState } from "react"

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "John Smith",
      position: "CTO, Tech Solutions",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
      quote:
        "Sujit is an exceptional frontend developer. His expertise in React.js and Next.js helped us deliver a complex project ahead of schedule. His attention to detail and problem-solving skills are outstanding.",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      position: "Product Manager, Digital Innovations",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3",
      quote:
        "Working with Sujit was a pleasure. He transformed our design concepts into beautiful, responsive interfaces with Tailwind CSS. His animations using Framer Motion brought our product to life.",
    },
    {
      id: 3,
      name: "Michael Chen",
      position: "Lead Developer, WebApp Inc",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      quote:
        "Sujit's implementation of AG Grid for our data-heavy application was impressive. His custom solutions and optimizations significantly improved our user experience and application performance.",
    },
  ]

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  return (
    <section id="testimonials" className="testimonials py-5 bg-light">
      <div className="container py-5">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <h6 className="text-primary fw-bold mb-3">TESTIMONIALS</h6>
            <h2 className="display-5 fw-bold mb-4">What Clients Say</h2>
            <div className="divider bg-primary mx-auto mb-4" style={{ height: "3px", width: "60px" }}></div>
          </div>
        </div>

        {/* Bootstrap Carousel */}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    data-bs-target="#testimonialCarousel"
                    data-bs-slide-to={index}
                    className={index === activeIndex ? "active" : ""}
                    aria-current={index === activeIndex ? "true" : "false"}
                    aria-label={`Slide ${index + 1}`}
                    onClick={() => setActiveIndex(index)}
                  ></button>
                ))}
              </div>

              <div className="carousel-inner">
                {testimonials.map((testimonial, index) => (
                  <div key={testimonial.id} className={`carousel-item ${index === activeIndex ? "active" : ""}`}>
                    <div className="testimonial-card bg-white p-4 p-md-5 rounded shadow-sm">
                      <div className="row align-items-center">
                        <div className="col-md-2 mb-4 mb-md-0">
                          <div className="testimonial-img flex-shrink-0 mx-auto w-[150px] h-[150px] rounded-full overflow-hidden border-4 border-light shadow">
                            <Image
                              src={testimonial.image || "/placeholder.svg"}
                              alt={testimonial.name}
                              width={150}
                              height={150}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <div className="col-md-8">
                          <div className="testimonial-content">
                            <div className="mb-3">
                              <i className="bi bi-quote fs-1 text-primary"></i>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="40"
                                height="40"
                                fill="#0d6efd"
                                className="bi bi-quote mb-3"
                                viewBox="0 0 16 16"
                              >
                                <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" />
                              </svg>
                            </div>
                            <p className="fs-5 mb-4">{testimonial.quote}</p>
                            <h5 className="fw-bold mb-1">{testimonial.name}</h5>
                            <p className="text-muted">{testimonial.position}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#testimonialCarousel"
                data-bs-slide="prev"
                onClick={handlePrev}
              >
                <span className="carousel-control-prev-icon bg-primary rounded-circle" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#testimonialCarousel"
                data-bs-slide="next"
                onClick={handleNext}
              >
                <span className="carousel-control-next-icon bg-primary rounded-circle" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
