import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/About.css'

const About = () => {
  useEffect(() => {
    // Animation for content sections
    const animatedElements = document.querySelectorAll('.about-section, .team-member')

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
      <section className="hero-small">
        <div className="container">
          <h1>🚀 About AI Pioneer</h1>
          <p>Your trusted guide in the world of artificial intelligence.</p>
        </div>
      </section>

      <section className="about-content section-padding">
        <div className="container">
          <div className="about-section">
            <h2>🎯 Our Mission</h2>
            <p>At AI Pioneer, we're dedicated to making artificial intelligence accessible and understandable for everyone. We curate and review the latest AI tools, provide expert guidance, and foster a community of AI enthusiasts.</p>
          </div>

          <div className="about-section">
            <h2>🎁 What We Offer</h2>
            <div className="services-grid">
              <div className="service-item">
                <h3>🛠️ Curated AI Tools</h3>
                <p>We carefully select and review the most effective AI tools to help you enhance your productivity and creativity.</p>
              </div>
              <div className="service-item">
                <h3>📚 Expert Guidance</h3>
                <p>Our team of AI experts provides detailed tutorials and best practices to help you make the most of AI technology.</p>
              </div>
              <div className="service-item">
                <h3>👥 Community Support</h3>
                <p>Join our growing community of AI enthusiasts to share experiences, learn from others, and stay updated on the latest developments.</p>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h2>👨‍💻 Our Team</h2>
            <div className="team-grid">
              <div className="team-member">
                <div className="member-image">
                  <img src="/images/met.jpg" alt="Meet - Creator" />
                </div>
                <h3>Meet</h3>
                <p>Creator</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section section-padding highlight-bg">
        <div className="container text-center">
          <h2>🌟 Join Our Community</h2>
          <p>Be part of the AI revolution and help shape the future of technology.</p>
          <Link to="/#featured-tools" className="cta-button primary large">Get Started</Link>
        </div>
      </section>
    </main>
  )
}

export default About