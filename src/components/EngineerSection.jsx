import './EngineerSection.css'

function EngineerSection() {
  const experiences = [
    {
      company: 'Meta',
      role: 'Software Engineer',
      period: 'Current',
      description: 'Building scalable systems and innovative products.',
      details: ['Scalable distributed systems', 'Product development', 'Performance optimization'],
      logo: '/assets/img/facebook.png',
    },
    {
      company: 'Amazon',
      role: 'Software Development Engineer',
      period: 'Previous',
      description: 'Worked across payments, delivery, AI, and retail innovation.',
      details: ['Payments Platform', 'Delivery Experience', 'Alexa AI', 'Amazon Go'],
      logo: '/assets/img/amazon.png',
    },
    {
      company: 'Coupang',
      role: 'Software Engineer',
      period: 'Previous',
      description: 'Focused on scale, reliability, and e-commerce infrastructure.',
      details: ['Platform scalability', 'System optimization', 'Distributed architecture'],
      logo: null,
    },
    {
      company: 'Auger',
      role: 'Software Engineer',
      period: 'Previous',
      description: 'Built product and platform capabilities from the ground up.',
      details: ['Full-stack development', 'System architecture', 'Technical leadership'],
      logo: null,
    },
  ]

  return (
    <section className="engineer-section" id="engineer">
      <div className="container">
        <div className="page-intro reveal">
          <span className="section-label">Career</span>
          <h2>Engineer</h2>
          <p>Building resilient software at high-scale companies with product-first execution.</p>
        </div>

        <div className="experience-list reveal">
          {experiences.map((exp, idx) => (
            <article key={idx} className={`experience-card surface ${!exp.logo ? 'no-logo' : ''}`}>
              <div className="experience-head">
                {exp.logo ? <img src={exp.logo} alt={exp.company} className="company-logo" /> : <div className="company-logo placeholder">{exp.company.slice(0, 2)}</div>}
                <div>
                  <h3>{exp.company}</h3>
                  <p className="role">{exp.role}</p>
                </div>
                <p className="period">{exp.period}</p>
              </div>

              <p className="description">{exp.description}</p>

              <ul className="experience-details">
                {exp.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EngineerSection
