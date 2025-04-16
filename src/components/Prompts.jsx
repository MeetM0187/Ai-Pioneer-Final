import { useState, useEffect, useMemo } from 'react'
import '../styles/Prompts.css'

const Prompts = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [prompts, setPrompts] = useState([
    {
      id: 24,
      category: 'Writing',
      title: 'Target-Audience Headline Hunter',
      prompt: '#CONTEXT:\nAdopt the role of an AI business ideas generator with deep knowledge of cutting-edge technologies, business models, and market trends. Your task is to help a solopreneur with limited resources brainstorm innovative, low-cost business ideas.\n\n#ROLE:\nYou are an AI business ideas generator specializing in ideating innovative, low-cost business ideas tailored for solopreneurs.\n\n#RESPONSE GUIDELINES:\nReturn a table with 5 rows and 5 columns:\n- Business Idea\n- Description\n- Cost-Efficiency (1-5, where 5 is the most cost-efficient)\n- Key Skills Required\n- Time to Market\n\nProvide a list of credible sources to support your ideas and analysis.\n\n#TASK CRITERIA:\n1. Focus on AI-powered business ideas suitable for a solopreneur with limited resources.\n2. Evaluate each idea\'s cost-efficiency, required skills, and estimated time to market.\n3. Cite credible sources to support your ideas and analysis.\n\n#INFORMATION ABOUT ME:\n- My expertise: [INSERT YOUR RELEVANT EXPERTISE]\n- My available resources: [DESCRIBE YOUR AVAILABLE RESOURCES]\n- My time constraints: [DESCRIBE YOUR TIME CONSTRAINTS]',
      description: 'AI-powered headline analysis and curation tool for targeted content strategy.'
    },
    {
      id: 23,
      category: 'AI Images',
      title: 'Toy Box Mockup Generator',
      prompt: 'Create a hyper-realistic, front-facing toy box mockup using the uploaded full-body character image on the left side inside clear blister packaging. The figure must be fully visible from head to toe, and the 3D face should exactly match the uploaded photo. On the right side, neatly place the uploaded accessories, all inside the same box. Show the box standing upright against a wall, front view only. Use a clean background matching the theme, add a hanging hook on top, and realistic lighting. At the top, show a logo on the left and the name \'YOUR NAME\' on the right. Style must look like a premium action figure product',
      description: 'Generate professional toy packaging mockups with realistic 3D rendering.'
    },
    {
      id: 22,
      category: 'AI Images',
      title: 'Filmmaker Studio Portrait',
      prompt: 'Create a scene featuring a young filmmaker with a smile on his face, sitting on a black studio chair at his workstation. He is wearing a white cap, oversized tangy orange (Brand name) t-shirt, white shorts, and matching tangy orange Nike shoes. The workstation has a MacBook Pro, dual monitors with Adobe Premiere Pro open, and other filmmaker gear like a mic, SSDs, headphones, and a camera setup with gimbal and tripod. The background includes acoustic foam panels, a neon sign that says "Brand name," framed photos, a director\'s chair labeled "Brand name," and other aesthetic details like a rug with a film reel pattern, potted plants, and shelves of camera lenses. The room is lit with soft daylight through a frosted studio window.',
      description: 'Generate detailed filmmaker studio portraits with specific branding and equipment setup.'
    },
    {
      id: 21,
      category: 'AI Images',
      title: '3D Studio Diorama Creator',
      prompt: 'Create an isometric-style, highly detailed 3D-modeled diorama of a filmmaker\'s creative studio, displayed on a matte dark grey acrylic base, approximately 6cm tall. The base should have an embossed "Brand Name" logo in cinematic style. The room should be shown from a front-facing cutaway perspective (ceiling removed) like a collectible diorama model.',
      description: 'Create detailed 3D diorama models of creative spaces with branding elements.'
    },
    {
      id: 20,
      category: 'AI Images',
      title: 'Retro Gaming Scene Generator',
      prompt: 'Grungy analog photo of [character name] playing [game title] on a PlayStation 1, displayed on a 90s CRT TV in a dimly lit bedroom. They\'re sitting on the floor in front of the TV, holding a PlayStation 1 controller in one hand, with [signature item or accessory] beside them. The character is looking back at the camera mid-action while the game is visible in the background. Candid paparazzi flash photography, raw and unedited.',
      description: 'Create nostalgic retro gaming scenes with authentic 90s atmosphere.'
    },
    {
      id: 19,
      category: 'Business',
      title: 'Solopreneur Business Ideator',
      prompt: '#CONTEXT:\nAdopt the role of an AI business ideas generator with deep knowledge of cutting-edge technologies, business models, and market trends. Your task is to help a solopreneur with limited resources brainstorm innovative, low-cost business ideas.\n\n#ROLE:\nYou are an AI business ideas generator specializing in ideating innovative, low-cost business ideas tailored for solopreneurs.\n\n#RESPONSE GUIDELINES:\nReturn a table with 5 rows and 5 columns:\n- Business Idea\n- Description\n- Cost-Efficiency (1-5, where 5 is the most cost-efficient)\n- Key Skills Required\n- Time to Market\n\nProvide a list of credible sources to support your ideas and analysis.\n\n#TASK CRITERIA:\n1. Focus on AI-powered business ideas suitable for a solopreneur with limited resources.\n2. Evaluate each idea\'s cost-efficiency, required skills, and estimated time to market.\n3. Cite credible sources to support your ideas and analysis.\n\n#INFORMATION ABOUT ME:\n- My expertise: [INSERT YOUR RELEVANT EXPERTISE]\n- My available resources: [DESCRIBE YOUR AVAILABLE RESOURCES]\n- My time constraints: [DESCRIBE YOUR TIME CONSTRAINTS]',
      description: 'Generate innovative, low-cost business ideas tailored for solopreneurs with AI integration.'
    },
    {
      id: 1,
      category: 'Writing',
      title: 'Creative Story Generator',
      prompt: 'Write a short story about [theme] that takes place in [setting] and includes a character who [character trait].',
      description: 'Perfect for generating creative writing ideas and short stories.'
    },
    {
      id: 2,
      category: 'Writing',
      title: 'Blog Post Outline Creator',
      prompt: 'Create a detailed blog post outline about [topic] targeting [audience]. Include key sections, potential subheadings, and important points to cover.',
      description: 'Streamline your blog writing process with structured outlines.'
    },
    {
      id: 3,
      category: 'Writing',
      title: 'Email Sequence Writer',
      prompt: 'Write a [number]-part email sequence for [purpose] that guides subscribers from [starting point] to [desired outcome]. Include subject lines and calls-to-action.',
      description: 'Create engaging email campaigns that convert.'
    },
    {
      id: 4,
      category: 'Writing',
      title: 'Social Media Content Calendar',
      prompt: "Generate a week's worth of social media content ideas for [platform] focusing on [theme/industry]. Include post types, hashtags, and engagement questions.",
      description: "Plan your social media content strategy effectively."
    },
    {
      id: 5,
      category: 'Business',
      title: 'Startup Validator',
      prompt: "Please analyze my startup idea: [idea description]. Evaluate it across 8 dimensions: market size, competitive landscape, differentiation, target customers, monetization, execution requirements, scalability, and risks. Provide a viability score and actionable next steps.",
      description: 'Comprehensive validation framework for startup ideas.'
    },
    {
      id: 6,
      category: 'Business',
      title: 'Business Model Canvas Generator',
      prompt: 'Create a Business Model Canvas for [business idea]. Detail the value proposition, customer segments, revenue streams, key resources, and other essential components.',
      description: 'Structure your business model systematically.'
    },
    {
      id: 7,
      category: 'Business',
      title: 'Competitive Analysis Framework',
      prompt: 'Conduct a detailed competitive analysis for [product/service] in the [industry]. Compare key players, strengths, weaknesses, market positioning, and opportunities for differentiation.',
      description: 'Understand your competitive landscape thoroughly.'
    },
    {
      id: 8,
      category: 'Business',
      title: 'Sales Pitch Generator',
      prompt: 'Create a compelling sales pitch for [product/service] targeting [ideal customer profile]. Include value proposition, pain points addressed, and key benefits.',
      description: 'Craft persuasive sales presentations that resonate.'
    },
    {
      id: 9,
      category: 'Education',
      title: 'Lesson Plan Creator',
      prompt: 'Design a lesson plan for teaching [subject] to [grade level] students, focusing on [specific topic] and including interactive activities.',
      description: 'Helps educators create engaging and effective lesson plans.'
    },
    {
      id: 10,
      category: 'Education',
      title: 'Student Assessment Designer',
      prompt: 'Create a comprehensive assessment for [subject/topic] suitable for [grade level]. Include various question types, rubric criteria, and learning objectives being evaluated.',
      description: 'Design effective student assessments and evaluations.'
    },
    {
      id: 11,
      category: 'Education',
      title: 'Learning Module Outline',
      prompt: 'Develop a detailed outline for a learning module about [topic] for [audience level]. Include learning objectives, key concepts, activities, and assessment methods.',
      description: 'Structure educational content effectively.'
    },
    {
      id: 12,
      category: 'Education',
      title: 'Educational Game Designer',
      prompt: 'Design an educational game to teach [concept] to [age group]. Include game mechanics, learning objectives, progression system, and assessment components.',
      description: 'Create engaging educational games and activities.'
    },
    {
      id: 13,
      category: 'Education',
      title: 'Differentiated Instruction Planner',
      prompt: 'Create differentiated instruction strategies for teaching [topic] to a diverse classroom. Include modifications for different learning styles, abilities, and needs.',
      description: 'Adapt teaching methods for diverse learners.'
    },
    {
      id: 14,
      category: 'AI Images',
      title: 'Character Portrait Creator',
      prompt: 'Create a [style] portrait of a [gender] character with [distinctive features] wearing [clothing/accessories]. The lighting should be [lighting style] and the background should feature [background description].',
      description: 'Generate detailed character portraits for games, stories, or concept art.'
    },
    {
      id: 15,
      category: 'AI Images',
      title: 'Fantasy Landscape Generator',
      prompt: 'Generate a [time of day] landscape of a [landscape type] with [key features]. Include [atmospheric elements] and [unique details]. Style should be [art style] with [color palette] colors.',
      description: 'Create stunning fantasy landscapes and environments.'
    },
    {
      id: 16,
      category: 'AI Images',
      title: 'Product Visualization Designer',
      prompt: 'Create a professional product image of a [product type] in a [setting/context]. The product should feature [key design elements] with [lighting setup] and [composition style]. Include [additional details] for enhanced realism.',
      description: 'Generate professional product visualizations and mockups.'
    },
    {
      id: 17,
      category: 'AI Images',
      title: 'Abstract Art Composer',
      prompt: 'Create an abstract [art style] composition featuring [main elements] with [texture description]. Use a palette of [color scheme] and incorporate [dynamic elements]. The mood should be [emotional quality].',
      description: 'Generate unique abstract artworks with specific styles and moods.'
    },
    {
      id: 18,
      category: 'AI Images',
      title: 'Concept Art Generator',
      prompt: 'Design a [genre] concept art piece featuring [main subject]. Include [key design elements] and [environmental details]. The style should be [artistic style] with [specific technique] techniques. Add [special effects/elements] for visual impact.',
      description: 'Create professional concept art for games, films, or illustrations.'
    }
  ])

  const filteredPrompts = useMemo(() => {
    return activeFilter === 'All' 
      ? prompts 
      : prompts.filter(prompt => prompt.category === activeFilter)
  }, [prompts, activeFilter])

  const handleCopyPrompt = async (event, promptText) => {
    try {
      await navigator.clipboard.writeText(promptText)
      const button = event.currentTarget
      button.classList.add('copy-animation')
      button.classList.add('copied')
      setTimeout(() => {
        button.classList.remove('copy-animation')
        button.classList.remove('copied')
      }, 1000)
    } catch (err) {
      console.error('Failed to copy prompt:', err)
    }
  }

  useEffect(() => {
    // Animation for prompt cards
    const animatedElements = document.querySelectorAll('.prompt-card')

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
          <h1>AI Prompts Library</h1>
          <p>Discover and use our collection of carefully crafted prompts to get the most out of AI tools.</p>
        </div>
      </section>

      <section className="prompts-grid section-padding">
        <div className="container">
          <div className="filters">
            <button 
              className={`filter-button ${activeFilter === 'All' ? 'active' : ''}`}
              onClick={() => setActiveFilter('All')}
            >
              All
            </button>
            <button 
              className={`filter-button ${activeFilter === 'Writing' ? 'active' : ''}`}
              onClick={() => setActiveFilter('Writing')}
            >
              Writing
            </button>
            <button 
              className={`filter-button ${activeFilter === 'Business' ? 'active' : ''}`}
              onClick={() => setActiveFilter('Business')}
            >
              Business
            </button>
            <button 
              className={`filter-button ${activeFilter === 'Education' ? 'active' : ''}`}
              onClick={() => setActiveFilter('Education')}
            >
              Education
            </button>
            <button 
              className={`filter-button ${activeFilter === 'AI Images' ? 'active' : ''}`}
              onClick={() => setActiveFilter('AI Images')}
            >
              AI Images
            </button>
          </div>

          <div className="prompt-cards">
            {filteredPrompts.map(prompt => (
              <article key={prompt.id} className="prompt-card">
                <span className="prompt-category">{prompt.category}</span>
                <h2>{prompt.title}</h2>
                <p className="prompt-description">{prompt.description}</p>
                <div className="prompt-text">
                  <p>{prompt.prompt}</p>
                </div>
                <button 
                  className="copy-prompt-button"
                  onClick={(e) => handleCopyPrompt(e, prompt.prompt)}
                >
                  Copy Prompt
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section section-padding highlight-bg">
        <div className="container text-center">
          <h2>Want to Contribute?</h2>
          <p>Share your effective prompts with our community and help others achieve better results.</p>
          <button className="cta-button primary large">Submit a Prompt</button>
        </div>
      </section>
    </main>
  )
}

export default Prompts