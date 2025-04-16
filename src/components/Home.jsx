import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Home.css'

const Home = () => {
  useEffect(() => {
    // Intersection Observer for fade-in animations
    const animatedElements = document.querySelectorAll('.value-item, .card, #cta-final .container > *')

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver((entries, observerInstance) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observerInstance.unobserve(entry.target)
          }
        })
      }, {
        threshold: 0.1
      })

      animatedElements.forEach(el => {
        el.classList.add('fade-in')
        observer.observe(el)
      })
    } else {
      animatedElements.forEach(el => {
        el.classList.add('visible')
        el.classList.remove('fade-in')
      })
    }
  }, [])

  return (
    <main>
      <section id="hero">
        <div className="container hero-content">
          <h1>🚀 Navigate the Frontier of Artificial Intelligence</h1>
          <p className="hero-subtitle">Discover and master cutting-edge AI tools, prompts, and resources to enhance your productivity and creativity.</p>
          <div className="hero-cta">
            <Link to="/tools" className="cta-button primary large">Explore AI Tools</Link>
            <Link to="/prompts" className="cta-button secondary large">Browse Prompts</Link>
          </div>
        </div>
      </section>



      <section id="why-us" className="section-padding highlight-bg">
        <div className="container">
          <h2 className="section-title">✨ Why Choose AI Pioneer?</h2>
          <div className="values-grid">
            <div className="value-item">
              <h3>🎯 Curated Selection</h3>
              <p>We carefully select and review the best AI tools to ensure quality and reliability.</p>
            </div>
            <div className="value-item">
              <h3>📚 Expert Guidance</h3>
              <p>Get detailed tutorials and tips from AI experts to maximize tool effectiveness.</p>
            </div>
            <div className="value-item">
              <h3>👥 Community Driven</h3>
              <p>Join a thriving community of AI enthusiasts and share experiences.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="cta-final" className="section-padding">
        <div className="container text-center">
          <h2>🌟 Ready to Start Your AI Journey?</h2>
          <p>Join our community and unlock the full potential of artificial intelligence.</p>
          <Link to="/about" className="cta-button primary large">Get Started</Link>
        </div>
      </section>
    </main>
  )
}

export default Home