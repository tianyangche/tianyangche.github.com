import './Contact.css'

const actions = [
  { label: 'Email', href: 'mailto:tianyangche@gmail.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tianyangche/' },
  { label: 'GitHub', href: 'https://github.com/tianyangche' },
]

function Contact() {
  return (
    <div className="contact-page">
      <div className="container">
        <section className="contact-hero reveal">
          <span className="section-label">Connect</span>
          <h1>Get in Touch</h1>
          <p className="contact-subtitle">Open to thoughtful collaborations, product ideas, and investment conversations.</p>
        </section>

        <section className="contact-content reveal">
          <article className="contact-card surface">
            <h3>Reach Out</h3>
            <p className="contact-email">
              <a href="mailto:tianyangche@gmail.com">tianyangche@gmail.com</a>
            </p>
            <p className="contact-location">Seattle, WA</p>

            <div className="contact-actions">
              {actions.map((action) => (
                <a
                  key={action.label}
                  className={`btn ${action.label === 'Email' ? 'btn-primary' : 'btn-secondary'}`}
                  href={action.href}
                  target={action.href.startsWith('http') ? '_blank' : undefined}
                  rel={action.href.startsWith('http') ? 'noreferrer' : undefined}
                >
                  {action.label}
                </a>
              ))}
            </div>
          </article>
        </section>
      </div>
    </div>
  )
}

export default Contact
