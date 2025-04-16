import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import '../styles/Header.css'

const Header = ({ searchQuery, setSearchQuery }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate('/tools')
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset
      setIsScrolled(currentScrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className={`sticky-nav ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="container">
        <Link to="/" className="logo" onClick={closeMenu}>AI Pioneer</Link>
        
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <Link 
              to="/" 
              className={location.pathname === '/' ? 'active' : ''}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/tools" 
              className={location.pathname === '/tools' ? 'active' : ''}
              onClick={closeMenu}
            >
              AI Tools
            </Link>
          </li>
          <li>
            <Link 
              to="/glossary" 
              className={location.pathname === '/glossary' ? 'active' : ''}
              onClick={closeMenu}
            >
              AI Glossary
            </Link>
          </li>
          <li>
            <Link 
              to="/prompts" 
              className={location.pathname === '/prompts' ? 'active' : ''}
              onClick={closeMenu}
            >
              AI Prompts
            </Link>
          </li>
          <li>
            <Link 
              to="/ai-news" 
              className={location.pathname === '/ai-news' ? 'active' : ''}
              onClick={closeMenu}
            >
              AI News
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={location.pathname === '/about' ? 'active' : ''}
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
        </ul>

        <div className="nav-actions">
          <div className="search-container">
            <input
              type="search"
              placeholder="Search..."
              className="search-bar"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
            <button
              className="search-button"
              onClick={handleSearch}
              aria-label="Search"
            >
              🔍
            </button>
          </div>
          <button 
            className="cta-button secondary"
            onClick={() => navigate('/tools')}
          >
            Join Now
          </button>
        </div>

        <button 
          className="mobile-nav-toggle" 
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
          onClick={handleMenuToggle}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </nav>
    </header>
  )
}

export default Header