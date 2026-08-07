import './Introduction.css'

function Introduction() {
  return (
    <div className="introduction-page">
      <div className="container">
        <section className="intro-hero reveal">
          <span className="section-label">Independent engineer · investor · builder</span>
          <h1>Tianyang Che</h1>
          <p className="intro-tagline">I build systems that make ambitious ideas real.</p>
          <p className="intro-description">
            An AI engineer focused on thoughtful systems, durable products, and the teams that bring them to life.
          </p>

          <div className="intro-actions">
            <a className="btn btn-primary" href="/career">
              View career
            </a>
            <a className="btn btn-ghost" href="/blog">
              Read notes
            </a>
          </div>
        </section>

        <section className="intro-identities reveal">
          <p className="current-label">Currently</p>
          <p className="current-role">NVIDIA <span>—</span> AI Engineer</p>
        </section>
      </div>
    </div>
  )
}

export default Introduction
