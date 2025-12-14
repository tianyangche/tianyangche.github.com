import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Introduction from './pages/Introduction'
import Career from './pages/Career'
import Blog from './pages/Blog'
import Contact from './pages/Contact'

function App() {
  return (
    <Router basename="/">
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Introduction />} />
            <Route path="/career" element={<Career />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
