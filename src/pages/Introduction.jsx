import './Introduction.css'

function Introduction() {
  return (
    <div className="introduction-page">
      <div className="container">
        <section className="intro-hero">
          <h1>Tianyang Che</h1>
          <p className="intro-tagline">
            Engineer • Investor • Entrepreneur
          </p>
        </section>

        <section className="intro-identities">
          <div className="identity-cards">
            <div className="identity-card">
              <h3>Engineer</h3>
              <p>Building scalable systems</p>
            </div>
            <div className="identity-card">
              <h3>Investor</h3>
              <p>Value investing</p>
            </div>
            <div className="identity-card">
              <h3>Entrepreneur</h3>
              <p>Tianyang LLC</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Introduction
