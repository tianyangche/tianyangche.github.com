import './EntrepreneurSection.css'

function EntrepreneurSection() {
  const projects = [
    {
      name: 'Smart Waste Classifier',
      type: 'iOS App · 2025 – Present',
      description: 'AI-powered iOS app for waste classification (recycle / compost / landfill) via camera.',
      details: [
        'Owned full product lifecycle from UX design to App Store submission',
        'Integrated Apple Vision framework with an LLM-based reasoning pipeline',
        'Leveraged OpenAI APIs to improve edge-case accuracy',
      ],
    },
  ]

  return (
    <section className="entrepreneur-section" id="entrepreneur">
      <div className="container">
        <div className="page-intro reveal">
          <span className="section-label">Venture</span>
          <h2>Entrepreneur</h2>
          <p>Building meaningful products through Tianyang LLC and independent projects.</p>
        </div>

        <article className="company-card surface reveal">
          <div className="company-content">
            <h3>Tianyang LLC</h3>
            <p className="company-description">
              Focused on practical solutions that create measurable value for users, teams, and communities.
            </p>
          </div>
        </article>

        <div className="projects-section reveal">
          <h3>Independent Projects</h3>
          <div className="projects-list">
            {projects.map((project, idx) => (
              <article key={idx} className="project-card surface">
                <div className="project-head">
                  <h4>{project.name}</h4>
                  <span className="project-type">{project.type}</span>
                </div>
                <p className="project-description">{project.description}</p>
                <ul className="project-details">
                  {project.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default EntrepreneurSection
