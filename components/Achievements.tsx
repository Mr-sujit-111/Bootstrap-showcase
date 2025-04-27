import { Award, BookOpen, Code } from "lucide-react"

export default function Achievements() {
  const achievements = [
    {
      icon: <Award className="text-primary" size={40} />,
      title: "React.js Certification",
      description: "Completed advanced certification in React.js development and best practices.",
    },
    {
      icon: <Code className="text-primary" size={40} />,
      title: "Open Source Contributions",
      description: "Contributed to several open-source projects, improving documentation and fixing bugs.",
    },
    {
      icon: <BookOpen className="text-primary" size={40} />,
      title: "Technical Blog",
      description: "Published technical articles on frontend development and React best practices.",
    },
  ]

  return (
    <section id="achievements" className="achievements py-5 bg-light">
      <div className="container py-5">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <h6 className="text-primary fw-bold mb-3">RECOGNITION</h6>
            <h2 className="display-5 fw-bold mb-4">Achievements & Certifications</h2>
            <div className="divider bg-primary mx-auto mb-4" style={{ height: "3px", width: "60px" }}></div>
          </div>
        </div>

        <div className="row g-4">
          {achievements.map((achievement, index) => (
            <div className="col-md-4" key={index}>
              <div className="card h-100 border-0 shadow-sm text-center p-4">
                <div className="achievement-icon mx-auto mb-4">{achievement.icon}</div>
                <h4 className="fw-bold mb-3">{achievement.title}</h4>
                <p className="text-muted mb-0">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
