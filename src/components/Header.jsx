import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <Link to="/" className="logo">
            Tianyang Che
          </Link>
          <ul className="nav-links">
            <li><Link to="/">Introduction</Link></li>
            <li><Link to="/career">Career</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact Me</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
