import { useEffect, useState, useCallback } from 'react'
import { debounce } from 'lodash'
import '../styles/AITools.css'

const AITools = ({ searchQuery }) => {
  const [filteredTools, setFilteredTools] = useState([])
  const [isSearching, setIsSearching] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = {
    'Development & Code': [
      {
        name: "Same.new",
        description: "Clone and replicate websites with complete code generation.",
        url: "https://same.new/",
        icon: "🌐"
      },
      {
        name: "Google Notebook LM",
        description: "Collaborative machine learning notebooks for seamless AI development.",
        url: "https://notebooklm.google.com/",
        icon: "📓"
      },
      {
        name: "Zoo Dev",
        description: "Build and manage infrastructure for hardware design projects.",
        url: "https://zoo.dev/",
        icon: "🔧"
      },
      {
        name: "Firebase Studio",
        description: "Build and scale your applications with Google's development platform.",
        url: "https://studio.firebase.google.com/",
        icon: "🔥"
      },
      {
        name: "Websim AI",
        description: "Simulate and test web applications with AI-powered tools.",
        url: "https://websim.ai/",
        icon: "🌐"
      },
      {
        name: "Img to Code",
        description: "Convert images into clean, production-ready code instantly.",
        url: "https://imgtocode.vercel.app/",
        icon: "🎨"
      },
      {
        name: "LlamaCoder",
        description: "Transform your ideas into functional applications with AI assistance.",
        url: "https://llamacoder.together.ai/",
        icon: "💻"
      },
      {
        name: "Codeium",
        description: "Enhance your coding workflow with AI-powered assistance.",
        url: "https://www.codeium.com",
        icon: "💻"
      }
    ],
    'Image & Design': [
      {
        name: "PicFinder AI",
        description: "Advanced image search and discovery platform powered by AI.",
        url: "https://picfinder.ai/",
        icon: "🔍"
      },
      {
        name: "Recraft AI",
        description: "Generate stunning AI-powered images for your creative projects.",
        url: "https://www.recraft.ai/projects",
        icon: "🎨"
      },
      {
        name: "Arsturn",
        description: "Transform your creative ideas with AI-powered art generation.",
        url: "https://www.arsturn.com",
        icon: "🎨"
      },
      {
        name: "Looka",
        description: "Design professional logos and brand identity with AI.",
        url: "https://www.looka.com",
        icon: "🎨"
      }
    ],
    'Video & Motion': [
      {
        name: "Hera Video",
        description: "Create stunning motion designs in seconds with AI assistance.",
        url: "https://hera.video/",
        icon: "🎬"
      },
      {
        name: "Google AI Studio",
        description: "Create and edit videos with cutting-edge AI technology.",
        url: "https://aistudio.google.com/generate-video",
        icon: "🎥"
      },
      {
        name: "D-ID",
        description: "Generate AI-powered digital humans and animations.",
        url: "https://www.d-id.com",
        icon: "🎥"
      }
    ],
    'Audio & Music': [
      {
        name: "Suno AI",
        description: "Create AI-generated music and songs with advanced composition.",
        url: "https://suno.com/create",
        icon: "🎵"
      },
      {
        name: "Audioread",
        description: "Convert text to natural-sounding speech with AI technology.",
        url: "https://www.audioread.com",
        icon: "🎧"
      },
      {
        name: "Drumloop AI",
        description: "Create unique music beats with AI-powered drum generation.",
        url: "https://www.drumloopai.com",
        icon: "🎵"
      }
    ],
    'Chat & Communication': [
      {
        name: "Google Gemini",
        description: "Experience the next generation of AI with Google's advanced language model.",
        url: "https://gemini.google.com/app",
        icon: "🤖"
      },
      {
        name: "ChatGPT",
        description: "Experience state-of-the-art conversational AI by OpenAI.",
        url: "https://chatgpt.com/",
        icon: "💬"
      },
      {
        name: "Deepseek Chat",
        description: "Engage in intelligent conversations with advanced AI technology.",
        url: "https://www.deepseek.com/",
        icon: "🤝"
      },
      {
        name: "MiniMax Chat",
        description: "Experience advanced conversational AI with MiniMax's chat platform.",
        url: "https://chat.minimax.io/",
        icon: "🤖"
      },
      {
        name: "Google Bard",
        description: "Experience Google's advanced conversational AI model.",
        url: "https://www.bard.google.com",
        icon: "🤖"
      },
      {
        name: "ChatPDF",
        description: "Interact with PDF documents using conversational AI.",
        url: "https://www.chatpdf.com",
        icon: "📄"
      }
    ],
    'Business & Productivity': [
      {
        name: "Globe Explorer",
        description: "Explore the world with AI-enhanced geographic visualization.",
        url: "https://explorer.globe.engineer/",
        icon: "🌍"
      },
      {
        name: "AI-WRITER",
        description: "Create high-quality content with AI-powered writing assistance.",
        url: "https://www.ai-writer.com",
        icon: "✍️"
      },
      {
        name: "BlendNow",
        description: "Create seamless AI-powered content blending and editing.",
        url: "https://www.blendnow.com",
        icon: "🎭"
      },
      {
        name: "BrandBastion",
        description: "Protect and enhance your brand with AI-powered monitoring.",
        url: "https://www.brandbastion.com",
        icon: "🛡️"
      },
      {
        name: "Lovable",
        description: "Create delightful user experiences with AI-driven design.",
        url: "https://lovable.dev",
        icon: "❤️"
      },
      {
        name: "GitMind",
        description: "Create mind maps and diagrams with AI assistance.",
        url: "https://www.gitmind.com",
        icon: "🧠"
      }
    ]
  };

  const allTools = Object.values(categories).flat()

  const updateFilteredTools = useCallback(
    debounce((query) => {
      let filtered = [];
      if (selectedCategory === 'All') {
        filtered = allTools;
      } else {
        filtered = categories[selectedCategory] || [];
      }
      
      if (query) {
        filtered = filtered.filter(tool =>
          tool.name.toLowerCase().includes(query.toLowerCase()) ||
          tool.description.toLowerCase().includes(query.toLowerCase())
        );
        setIsSearching(true);
      } else {
        setIsSearching(false);
      }

      setFilteredTools(filtered);
    }, 300),
    [allTools, selectedCategory, categories]
  );

  useEffect(() => {
    updateFilteredTools(searchQuery);
  }, [searchQuery, updateFilteredTools, selectedCategory]);

  useEffect(() => {
    // Intersection Observer for fade-in animations
    const animatedElements = document.querySelectorAll('.tools-grid .card')

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
  })

  return (
    <main>
      <section className="hero-small">
        <div className="container">
          <h1>🛠️ AI Tools Collection</h1>
          <p>Explore our comprehensive collection of cutting-edge AI tools.</p>
        </div>
      </section>

      <section className="tools-section section-padding">
        <div className="category-filter">
          <button
            className={`category-button ${selectedCategory === 'All' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('All')}
          >
            All
          </button>
          {Object.keys(categories).map(category => (
            <button
              key={category}
              className={`category-button ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="container">
          <div className="tools-grid">
            {filteredTools.map((tool, index) => (
              <div className="card" key={index}>
                <h3>{tool.icon} {tool.name}</h3>
                <p>{tool.description}</p>
                <a href={tool.url} target="_blank" rel="noopener noreferrer" className="cta-button secondary">Try Now</a>
              </div>
            ))}
            {filteredTools.length === 0 && (
              <div className="no-results">
                <p>No tools found matching your search.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

export default AITools