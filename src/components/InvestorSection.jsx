import './InvestorSection.css'

function InvestorSection() {
  const currentInvestments = [
    {
      name: 'World Labs',
      description: 'Spatial intelligence company building world models. Invested via an SPV.',
      type: 'Investor · via SPV',
      period: 'Feb 2026 – Present',
    },
    {
      name: 'W',
      description: 'Smell good. Feel ready. Every damn day. Invested via an SPV.',
      type: 'Investor · via SPV',
      period: 'Apr 2024 – Present',
    },
    {
      name: 'UpHonest Capital',
      description: 'Helping UpHonest Capital find promising startups.',
      type: 'Venture Scout',
      period: 'Sep 2023 – Present',
    },
  ]

  const pastInvestments = [
    {
      name: 'Anthropic',
      description: 'A cat cares about his fellow cats, so he studies Meowlogy. I care about my fellow humans, so I invested in Anthropic. Invested via an SPV. Exited.',
      type: 'Investor · via SPV · Exited',
      period: 'Mar 2024 – Sep 2025',
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
            <h3>Current</h3>
            <div className="investments-grid">
              {currentInvestments.map((investment, idx) => (
                <article key={idx} className="investment-card surface">
                  <h4>{investment.name}</h4>
                  <p className="investment-type">{investment.type} · {investment.period}</p>
                  <p className="investment-description">{investment.description}</p>
                </article>
              ))}
            </div>

            <h3 className="past-investments-heading">Past</h3>
            <div className="investments-grid">
              {pastInvestments.map((investment, idx) => (
                <article key={idx} className="investment-card surface past">
                  <h4>{investment.name}</h4>
                  <p className="investment-type">{investment.type} · {investment.period}</p>
                  <p className="investment-description">{investment.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="philosophy-section">
            <h3>Investment Philosophy</h3>
            <p className="philosophy-intro">Rooted in business quality, margin of safety, and long-term compounding. A smart person invests in people who are much smarter than him.</p>
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
