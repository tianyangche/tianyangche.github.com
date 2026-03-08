import './Footer.css'

const actions = [
  { label: 'Email', href: 'mailto:tianyangche@gmail.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tianyangche/' },
  { label: 'GitHub', href: 'https://github.com/tianyangche' },
]

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-title">Open to meaningful collaborations.</p>
        <div className="footer-actions">
          {actions.map((action) => (
            <a
              key={action.label}
              href={action.href}
              target={action.href.startsWith('http') ? '_blank' : undefined}
              rel={action.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              {action.label}
            </a>
          ))}
        </div>
        <p className="footer-copy">&copy; {new Date().getFullYear()} Tianyang Che</p>
      </div>
    </footer>
  )
}

export default Footer
