import { useEffect } from 'react'
import '../styles/AINews.css'

const AINews = () => {
  useEffect(() => {
    // Animation for news cards
    const animatedElements = document.querySelectorAll('.news-card')

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
          <h1>Latest AI News & Developments</h1>
          <p>Stay informed about the latest breakthroughs, updates, and trends in artificial intelligence.</p>
        </div>
      </section>

      <section className="news-grid section-padding">
        <div className="container">
          <div className="card-container">
            <article className="news-card">
              <div className="news-content">
                <span className="news-category">OpenAI</span>
                <p className="news-date">April 14, 2025</p>
                <h2>OpenAI releases GPT 4.1 models with improved coding, lower prices, and extended context length</h2>
                <p>Kevin Weil 🇺🇸 shares insights on X about the latest GPT model release.</p>
                <a href="https://x.com/kevinweil/status/1911833354682401148" target="_blank" rel="noopener noreferrer" className="read-more">Read More</a>
              </div>
            </article>

            <article className="news-card">
              <div className="news-content">
                <span className="news-category">Entertainment</span>
                <p className="news-date">April 11, 2025</p>
                <h2>James Cameron Suggests AI May Be Necessary for Future Films Like Dune</h2>
                <p>Renowned director discusses the potential role of AI in future filmmaking.</p>
                <a href="https://kotaku.com/james-cameron-ai-terminator-dune-avatar-1851775691" target="_blank" rel="noopener noreferrer" className="read-more">Read More</a>
              </div>
            </article>

            <article className="news-card">
              <div className="news-content">
                <span className="news-category">Apple</span>
                <p className="news-date">April 11, 2025</p>
                <h2>Apple plans to launch delayed Siri intelligence features this fall</h2>
                <p>New AI-powered features coming to Siri in the upcoming update.</p>
                <a href="https://www.macworld.com/article/2684248/the-delayed-siri-apple-intelligence-features-are-now-coming-in-the-fall.html" target="_blank" rel="noopener noreferrer" className="read-more">Read More</a>
              </div>
            </article>

            <article className="news-card">
              <div className="news-content">
                <span className="news-category">Microsoft</span>
                <p className="news-date">April 11, 2025</p>
                <h2>Microsoft set to officially launch Recall feature for Windows users</h2>
                <p>New Windows feature aims to enhance user experience with advanced recall capabilities.</p>
                <a href="https://www.theverge.com/news/646911/microsoft-recall-windows-insiders-preview" target="_blank" rel="noopener noreferrer" className="read-more">Read More</a>
              </div>
            </article>

            <article className="news-card">
              <div className="news-content">
                <span className="news-category">DeepMind</span>
                <p className="news-date">April 10, 2025</p>
                <h2>DeepMind CEO says Google will eventually merge Gemini and Veo AI models</h2>
                <p>Google's AI division plans to combine its powerful language models for enhanced capabilities.</p>
                <a href="https://techcrunch.com/2025/04/10/deepmind-ceo-demis-hassabis-says-google-will-eventually-combine-its-gemini-and-veo-ai-models/" target="_blank" rel="noopener noreferrer" className="read-more">Read More</a>
              </div>
            </article>

            <article className="news-card">
              <div className="news-content">
                <span className="news-category">HubSpot</span>
                <p className="news-date">April 10, 2025</p>
                <h2>HubSpot Unveils 200+ New Features Including AI Agents at Spring Spotlight 2025</h2>
                <p>Major platform update introduces AI-powered tools for enhanced marketing and sales capabilities.</p>
                <a href="https://www.searchenginejournal.com/hubspot-announces-200-features-at-spring-spotlight-2025/544063/" target="_blank" rel="noopener noreferrer" className="read-more">Read More</a>
              </div>
            </article>

            <article className="news-card">
              <div className="news-content">
                <span className="news-category">Canva</span>
                <p className="news-date">April 10, 2025</p>
                <h2>Canva adds AI image generation, interactive coding, spreadsheets, and more to its platform</h2>
                <p>Popular design platform expands capabilities with AI-powered features and productivity tools.</p>
                <a href="https://techcrunch.com/2025/04/10/canva-is-adding-an-ai-assistant-coding-and-sheets-to-its-platform/" target="_blank" rel="noopener noreferrer" className="read-more">Read More</a>
              </div>
            </article>

            <article className="news-card">
              <div className="news-content">
                <span className="news-category">OpenAI</span>
                <p className="news-date">April 10, 2025</p>
                <h2>OpenAI updates ChatGPT to reference previous conversations</h2>
                <p>New feature enables ChatGPT to maintain context across multiple chat sessions.</p>
                <a href="https://techcrunch.com/2025/04/10/openai-updates-chatgpt-to-reference-your-other-chats/" target="_blank" rel="noopener noreferrer" className="read-more">Read More</a>
              </div>
            </article>

            <article className="news-card">
              <div className="news-content">
                <span className="news-category">YouTube</span>
                <p className="news-date">April 10, 2025</p>
                <h2>YouTube Launches Free AI Music-Making Tool for Creators</h2>
                <p>New AI-powered tool helps content creators generate original music for their videos.</p>
                <a href="https://techcrunch.com/2025/04/10/youtube-rolls-out-a-free-ai-music-making-tool-for-creators/" target="_blank" rel="noopener noreferrer" className="read-more">Read More</a>
              </div>
            </article>

            <article className="news-card">
              <div className="news-content">
                <span className="news-category">Microsoft</span>
                <p className="news-date">April 10, 2025</p>
                <h2>Microsoft celebrates 50th birthday with memorable event</h2>
                <p>Tech giant marks half-century milestone with special celebration and announcements.</p>
                <a href="https://www.theverge.com/notepad-microsoft-newsletter/646391/microsoft-50th-birthday-party-event-notepad" target="_blank" rel="noopener noreferrer" className="read-more">Read More</a>
              </div>
            </article>

            <article className="news-card">
              <div className="news-content">
                <span className="news-category">OpenAI</span>
                <p className="news-date">April 9, 2025</p>
                <h2>OpenAI Counter-Sues Musk, Seeks to Halt 'Unlawful and Unfair' Actions</h2>
                <p>Legal battle intensifies as OpenAI responds to Elon Musk's lawsuit with counter-claims.</p>
                <a href="https://techcrunch.com/2025/04/09/openai-attorneys-call-for-musk-to-be-enjoined-from-further-unlawful-and-unfair-action/" target="_blank" rel="noopener noreferrer" className="read-more">Read More</a>
              </div>
            </article>

            <article className="news-card">
              <div className="news-content">
                <span className="news-category">Google</span>
                <p className="news-date">April 9, 2025</p>
                <h2>Google DeepMind Adopts MCP Protocol for Gemini Models and SDK</h2>
                <p>DeepMind CEO announces adoption of new protocol for enhanced AI model integration.</p>
                <a href="https://x.com/demishassabis/status/1910107859041271977" target="_blank" rel="noopener noreferrer" className="read-more">Read More</a>
              </div>
            </article>

            <article className="news-card">
              <div className="news-content">
                <span className="news-category">Samsung</span>
                <p className="news-date">April 9, 2025</p>
                <h2>Samsung Finally Launches Ballie Home Robot with Gemini Upgrade</h2>
                <p>Long-awaited home robot debuts with enhanced AI capabilities powered by Google's Gemini.</p>
                <a href="https://www.theverge.com/news/645853/samsung-is-finally-releasing-ballie" target="_blank" rel="noopener noreferrer" className="read-more">Read More</a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AINews