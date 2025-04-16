import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import '../styles/Footer.css'

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

  return (
    <footer>
      <div className="footer-content container">
        <div className="footer-col">
          <h3>AI Pioneer</h3>
          <p>Navigate the frontier of artificial intelligence with our curated collection of AI tools and resources.</p>
        </div>
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/#featured-tools">AI Tools</Link></li>
            <li><Link to="/prompts">AI Prompts</Link></li>
            <li><Link to="/ai-news">AI News</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>Resources</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>Legal</h3>
          <ul>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      <div className="container copyright">
        <p>© {currentYear} AI Pioneer. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer