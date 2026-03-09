import './Introduction.css'

const identities = [
  {
    title: 'Engineer',
    summary: 'Building scalable systems and practical products that ship with quality.',
    badge: 'Systems + Product',
  },
  {
    title: 'Investor',
    summary: 'Backing high-conviction opportunities with a long-term value lens.',
    badge: 'Long-Term Capital',
  },
  {
    title: 'Entrepreneur',
    summary: 'Creating ventures that deliver measurable value to real people.',
    badge: 'Tianyang LLC',
  },
]

function Introduction() {
  return (
    <div className="introduction-page">
      <div className="container">
        <section className="intro-hero reveal">
          <span className="section-label">Personal HQ</span>
          <h1>Tianyang Che</h1>
          <p className="intro-tagline">Engineer, investor, and entrepreneur focused on useful progress.</p>
          <p className="intro-description">
            I build robust technology, support ambitious teams, and launch ideas designed for long-term impact.
          </p>

          <div className="intro-actions">
            <a className="btn btn-primary" href="mailto:tianyangche@gmail.com">
              Email Me
            </a>
            <a className="btn btn-secondary" href="https://www.linkedin.com/in/tianyangche/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="btn btn-ghost" href="https://github.com/tianyangche" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </section>

        <section className="intro-identities reveal">
          <div className="identity-cards">
            {identities.map((identity) => (
              <article key={identity.title} className="identity-card surface">
                <p className="identity-badge">{identity.badge}</p>
                <h3>{identity.title}</h3>
                <p>{identity.summary}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Introduction
