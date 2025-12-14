import './EngineerSection.css'

function EngineerSection() {
  const experiences = [
    {
      company: "Meta",
      role: "Software Engineer",
      period: "Current",
      description: "Building scalable systems and innovative products",
      details: [
        "Scalable distributed systems",
        "Product development",
        "Performance optimization"
      ],
      logo: "/assets/img/facebook.png"
    },
    {
      company: "Amazon",
      role: "Software Development Engineer",
      period: "Previous",
      description: "Multiple teams across payments, delivery, AI, and retail innovation",
      details: [
        "Payments Platform",
        "Delivery Experience",
        "Alexa AI",
        "Amazon Go"
      ],
      logo: "/assets/img/amazon.png"
    },
    {
      company: "Coupang",
      role: "Software Engineer",
      period: "Previous",
      description: "E-commerce platform engineering and infrastructure",
      details: [
        "Platform scalability",
        "System optimization",
        "Large-scale distributed systems"
      ],
      logo: null // Will need to add logo
    },
    {
      company: "Auger",
      role: "Software Engineer",
      period: "Previous",
      description: "Building innovative solutions and platforms",
      details: [
        "Full-stack development",
        "System architecture",
        "Technical leadership"
      ],
      logo: null // Will need to add logo
    }
  ]

  return (
    <section className="engineer-section" id="engineer">
      <div className="container">
        <h2 className="section-title">Engineer</h2>
        <p className="section-subtitle">
          Building scalable systems at leading tech companies
        </p>

        <div className="experience-list">
          {experiences.map((exp, idx) => (
            <div key={idx} className={`experience-card card ${!exp.logo ? 'no-logo' : ''}`}>
              {exp.logo && (
                <img src={exp.logo} alt={exp.company} className="company-logo" />
              )}
              <div className="experience-content">
                <h4>{exp.company}</h4>
                <p className="role">{exp.role}</p>
                <p className="period">{exp.period}</p>
                <p className="description">{exp.description}</p>
                {exp.details && (
                  <ul className="experience-details">
                    {exp.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EngineerSection
