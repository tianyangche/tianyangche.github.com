import { NavLink } from 'react-router-dom'
import './Header.css'

const links = [
  { to: '/', label: 'About' },
  { to: '/career', label: 'Career' },
  { to: '/blog', label: 'Writing' },
  { to: '/contact', label: 'Contact' },
]

function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <NavLink to="/" className="logo">
            <span className="logo-mark" aria-hidden="true" />
            Tianyang Che
          </NavLink>

          <ul className="nav-links">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? 'is-active' : ''}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
