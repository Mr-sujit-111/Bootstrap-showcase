import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="footer py-4 bg-dark text-white">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4 text-center text-md-start mb-3 mb-md-0">
            <h5 className="mb-0 fw-bold">
              Sujit<span className="text-primary">Bhanderi</span>
            </h5>
          </div>

          <div className="col-md-4 text-center mb-3 mb-md-0">
            <p className="mb-0">&copy; {new Date().getFullYear()} All rights reserved.</p>
          </div>

          <div className="col-md-4 text-center text-md-end">
            <div className="social-links">
              <a href="https://github.com/Mr-sujit-111" className="text-white me-3" aria-label="GitHub">
                <Github />
              </a>
              <a href="https://linkedin.com/in/sujit-bhanderi331" className="text-white me-3" aria-label="LinkedIn">
                <Linkedin />
              </a>
              <a href="mailto:sujitbhanderi331@gmail.com" className="text-white" aria-label="Email">
                <Mail />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
