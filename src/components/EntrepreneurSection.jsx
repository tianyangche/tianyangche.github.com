import './EntrepreneurSection.css'

function EntrepreneurSection() {
  return (
    <section className="entrepreneur-section" id="entrepreneur">
      <div className="container">
        <div className="page-intro reveal">
          <span className="section-label">Venture</span>
          <h2>Entrepreneur</h2>
          <p>Building meaningful products through Tianyang LLC.</p>
        </div>

        <article className="company-card surface reveal">
          <div className="company-content">
            <h3>Tianyang LLC</h3>
            <p className="company-description">
              Focused on practical solutions that create measurable value for users, teams, and communities.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default EntrepreneurSection
