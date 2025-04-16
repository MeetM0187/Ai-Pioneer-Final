import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import { useState } from 'react'
import './App.css'

// Components
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import AINews from './components/AINews'
import Prompts from './components/Prompts'
import About from './components/About'
import AITools from './components/AITools'
import AIGlossary from './components/AIGlossary'

function App() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <Router>
      <div className="app">
        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ai-news" element={<AINews />} />
          <Route path="/prompts" element={<Prompts />} />
          <Route path="/glossary" element={<AIGlossary />} />
          <Route path="/about" element={<About />} />
          <Route path="/tools" element={<AITools searchQuery={searchQuery} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
