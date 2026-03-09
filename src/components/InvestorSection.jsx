import './InvestorSection.css'

function InvestorSection() {
  const investments = [
    {
      name: 'Anthropic',
      description: 'AI safety and research company.',
      type: 'Private Investor',
    },
    {
      name: 'W by Jake Paul',
      description: 'Consumer brand and media company.',
      type: 'Private Investor',
    },
  ]

  const inspirations = [
    {
      name: 'Warren Buffett',
      quote: 'Buy a wonderful company at a fair price, not the other way around.',
    },
    {
      name: 'Charlie Munger',
      quote: 'Keep learning faster than the world changes around you.',
    },
  ]

  return (
    <section className="investor-section" id="investor">
      <div className="container">
        <div className="page-intro reveal">
          <span className="section-label">Capital</span>
          <h2>Investor</h2>
          <p>Supporting ambitious teams with patient, long-term conviction.</p>
        </div>

        <div className="investor-content reveal">
          <div className="investments-section">
            <h3>Current Investments</h3>
            <div className="investments-grid">
              {investments.map((investment, idx) => (
                <article key={idx} className="investment-card surface">
                  <h4>{investment.name}</h4>
                  <p className="investment-type">{investment.type}</p>
                  <p className="investment-description">{investment.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="philosophy-section">
            <h3>Investment Philosophy</h3>
            <p className="philosophy-intro">Rooted in business quality, margin of safety, and long-term compounding.</p>
            <div className="quotes-grid">
              {inspirations.map((inspiration, idx) => (
                <article key={idx} className="quote-card surface">
                  <p className="quote">“{inspiration.quote}”</p>
                  <p className="quote-author">{inspiration.name}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InvestorSection
