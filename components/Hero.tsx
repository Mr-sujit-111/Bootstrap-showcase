import Image from "next/image"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="hero d-flex align-items-center min-vh-100 py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <span className="badge bg-primary mb-3 px-3 py-2">Frontend Developer</span>
            <h1 className="display-4 fw-bold mb-3">Hi, I'm Sujit Bhanderi</h1>
            <p className="lead text-secondary mb-4">
              Passionate Frontend Developer with expertise in creating modern, responsive, and scalable web
              applications. Skilled in Next.js, React.js, Tailwind CSS, and Framer Motion.
            </p>
            <div className="d-flex gap-3">
              <a href="#projects" className="btn btn-primary px-4 py-2">
                View My Work
              </a>
              <a href="#contact" className="btn btn-outline-secondary px-4 py-2">
                Contact Me
              </a>
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <div
              className="hero-img-container rounded-circle overflow-hidden mx-auto"
              style={{ maxWidth: "350px", maxHeight: "350px" }}
            >
              <Image
                src="https://www.upwork.com/profile-portraits/c1O6pxemEFFufOsDRLEya_4L17PnxMY6s8viZ_LYw-WUCCtegL99U833QhBpqCYEhe"
                alt="Sujit Bhanderi"
                width={350}
                height={350}
                className="img-fluid"
              />
            </div>
          </div>
        </div>
        <div className="scroll-down text-center mt-5">
          <a href="#about" className="text-dark text-decoration-none">
            <span className="d-block mb-2">Scroll Down</span>
            <ChevronDown className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  )
}

