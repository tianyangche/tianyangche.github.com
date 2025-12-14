import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Tianyang Che. All rights reserved.</p>
        <p className="footer-subtitle">
          <a href="mailto:tianyangche@gmail.com">tianyangche@gmail.com</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
