import './EngineerSection.css'

function EngineerSection() {
  const experiences = [
    {
      company: 'NVIDIA',
      role: 'AI Engineer',
      period: 'Present',
      description: 'Building applied AI systems and intelligent product experiences.',
      details: [
        'Designing and developing AI-powered solutions for real-world workflows',
      ],
      logo: '/assets/img/nvidia.png',
    },
    {
      company: 'Auger, Inc.',
      role: 'Senior Software Engineer',
      period: 'May 2025 – Present',
      description: 'Series A AI startup building the first AI-powered end-to-end supply chain OS.',
      details: [
        'Architected flagship LLM-powered agentic AI system with NL→SQL reasoning, RAG-based context retrieval, and Snowflake query generation',
        '0→1 built multi-tenancy data platform processing billions of supply chain events daily',
        'Tech Lead for 10+ engineer team, establishing sprint cadence and technical design review',
      ],
      logo: '/assets/img/auger.png',
    },
    {
      company: 'Coupang, Inc.',
      role: 'Staff Software Engineer II',
      period: 'Nov 2021 – May 2025',
      description: 'Founding engineer of Rocket Growth — a multi-billion business helping sellers with end-to-end fulfillment.',
      details: [
        'Tech Lead for Supply Chain Management (7 engineers): designed Reverse Logistics system from scratch',
        'Architected inventory loss/damage compensation system, reducing costs by 50% (~1% of GMV)',
        'Led development of logistics center storage fee system, contributing tens of millions in revenue; patent granted',
        'Mentored engineers across teams; facilitated promotions of 5 engineers',
      ],
      logo: '/assets/img/coupang.png',
    },
    {
      company: 'Meta Platforms, Inc.',
      role: 'Software Engineer',
      period: 'Jun 2020 – Nov 2021',
      description: 'Zero-regression privacy enforcement at billion-user scale across Ads Infrastructure.',
      details: [
        'Modernized three foundational Ads Infra data sources with full privacy constraint enforcement',
        'First production customer of Meta\'s company-wide privacy solution — established a blueprint followed by numerous teams',
      ],
      logo: '/assets/img/meta.png',
    },
    {
      company: 'Amazon.com, Inc.',
      role: 'Software Development Engineer II',
      period: 'Mar 2015 – Jun 2020',
      description: 'Worked across Amazon Go, Alexa AI, Prime, and Payments — delivering impact at global scale.',
      details: [
        'Amazon Go: cut infrastructure cost by 50% by re-architecting failure-resilient store tracking systems (99.99%+ uptime)',
        'Alexa AI: designed customer satisfaction metric system using ML-based logic across all global traffic',
        'Payments: reduced P100 payment query latency by 20%+ via cache layer on Payments Core Engine',
        'Contributed to Amazon Mexico Retail launch and Amazon Key launch',
      ],
      logo: '/assets/img/amazon.png',
    },
  ]

  const patents = [
    {
      id: 'KR10-2024-001478',
      title: 'Novel Inventory Age Calculation Algorithm for Multi-Warehouse Logistics',
      status: 'Granted 2025',
      country: 'South Korea',
    },
    {
      id: 'US18/942068',
      title: 'Inventory Management Method and System',
      status: 'Pending',
      country: 'United States',
    },
  ]

  return (
    <section className="engineer-section" id="engineer">
      <div className="container">
        <div className="page-intro reveal">
          <span className="section-label">Selected experience</span>
          <h1>Career</h1>
          <p>10+ years architecting large-scale distributed systems and shipping AI-powered products at NVIDIA, Meta, Amazon, Coupang, and Auger.</p>
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

        <div className="patents-section reveal">
          <h3>Patents</h3>
          <div className="patents-list">
            {patents.map((patent, idx) => (
              <article key={idx} className="patent-card surface">
                <div className="patent-head">
                  <span className="patent-status">{patent.status}</span>
                  <span className="patent-country">{patent.country}</span>
                </div>
                <p className="patent-title">{patent.title}</p>
                <p className="patent-id">{patent.id}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default EngineerSection
