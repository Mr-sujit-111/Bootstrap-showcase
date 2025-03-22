import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="about py-5">
      <div className="container py-5">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <h6 className="text-primary fw-bold mb-3">ABOUT ME</h6>
            <h2 className="display-5 fw-bold mb-4">Get to know me</h2>
            <div className="divider bg-primary mx-auto mb-4" style={{ height: "3px", width: "60px" }}></div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-5 mb-5 mb-lg-0">
            <div className="about-img-container rounded overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="About Sujit Bhanderi"
                width={400}
                height={500}
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-lg-7 ps-lg-5">
            <h3 className="fw-bold mb-3">Frontend Developer based in India</h3>
            <p className="lead mb-4">
              I'm a passionate Frontend Developer with 4+ years of experience creating modern, responsive, and scalable
              web applications. I specialize in Next.js, React.js, and Tailwind CSS with a strong focus on UI/UX design
              and performance optimization.
            </p>
            <p className="mb-4">
              My approach to web development focuses on creating fast, accessible, and visually appealing experiences. I
              enjoy collaborating with teams to bring ideas to life and solve complex problems through clean, efficient
              code.
            </p>
            <div className="row mb-4">
              <div className="col-md-6 mb-3 mb-md-0">
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <strong>Name:</strong> Sujit Bhanderi
                  </li>
                  <li className="mb-2">
                    <strong>Email:</strong> sujitbhanderi331@gmail.com
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <strong>Location:</strong> India
                  </li>
                  <li className="mb-2">
                    <strong>Experience:</strong> 4+ years
                  </li>
                </ul>
              </div>
            </div>
            <a href="#contact" className="btn btn-primary px-4 py-2">
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

