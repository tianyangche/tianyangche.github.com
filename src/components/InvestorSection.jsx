import './InvestorSection.css'

function InvestorSection() {
  const investments = [
    {
      name: "Anthropic",
      description: "AI safety and research company",
      type: "Private Investor"
    },
    {
      name: "W by Jake Paul",
      description: "Consumer brand and media company",
      type: "Private Investor"
    }
  ]

  const inspirations = [
    {
      name: "Warren Buffett",
      quote: "It's far better to buy a wonderful company at a fair price than a fair company at a wonderful price.",
      role: "Investment Philosophy"
    },
    {
      name: "Charlie Munger",
      quote: "The best thing a human being can do is to help another human being know more.",
      role: "Investment Philosophy"
    }
  ]

  return (
    <section className="investor-section" id="investor">
      <div className="container">
        <h2 className="section-title">Investor</h2>
        <p className="section-subtitle">
          Supporting innovative companies with long-term value
        </p>

        <div className="investor-content">
          <div className="investments-section">
            <h3>Current Investments</h3>
            <div className="investments-grid">
              {investments.map((investment, idx) => (
                <div key={idx} className="investment-card card">
                  <h4>{investment.name}</h4>
                  <p className="investment-type">{investment.type}</p>
                  <p className="investment-description">{investment.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="philosophy-section">
            <h3>Investment Philosophy</h3>
            <p className="philosophy-intro">
              Inspired by Warren Buffett and Charlie Munger's value investing principles.
            </p>
            <div className="quotes-grid">
              {inspirations.map((inspiration, idx) => (
                <div key={idx} className="quote-card card">
                  <p className="quote">"{inspiration.quote}"</p>
                  <p className="quote-author">— {inspiration.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InvestorSection
