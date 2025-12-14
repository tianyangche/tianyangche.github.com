import './Contact.css'

function Contact() {
  return (
    <div className="contact-page">
      <div className="container">
        <section className="contact-hero">
          <h1>Get in Touch</h1>
          <p className="contact-subtitle">
            I'd love to hear from you
          </p>
        </section>

        <section className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <h3>Email</h3>
              <p>
                <a href="mailto:tianyangche@gmail.com">tianyangche@gmail.com</a>
              </p>
            </div>
            <div className="contact-item">
              <h3>Location</h3>
              <p>Seattle, WA</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Contact
