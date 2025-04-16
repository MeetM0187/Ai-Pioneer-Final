import React, { useEffect } from 'react';
import '../styles/Home.css';
import handleScrollAnimations from '../utils/animations';

const Home = () => {
    useEffect(() => {
        const cleanup = handleScrollAnimations();
        return cleanup;
    }, []);

    return (
        <main>
            <div id="hero" className="fade-in-delay-1">
                <div className="hero-content">
                    <h1>Welcome to AI Pioneer</h1>
                    <p className="hero-subtitle">Discover the future of AI technology and innovation with our comprehensive tools and resources.</p>
                    <div className="hero-cta">
                        <a href="#tools" className="cta-button primary large">Explore Tools</a>
                        <a href="#about" className="cta-button secondary large">Learn More</a>
                    </div>
                </div>
            </div>

            <section id="tools" className="section-padding">
                <h2 className="section-title fade-in">Featured Tools</h2>
                <div className="tools-grid fade-in-delay-2">
                    <div className="card">
                        <h3>AI Assistant</h3>
                        <p>Your personal AI-powered assistant for everyday tasks and queries.</p>
                        <a href="#" className="cta-button primary">Try Now</a>
                    </div>
                    <div className="card">
                        <h3>Data Analysis</h3>
                        <p>Advanced AI algorithms for comprehensive data analysis and insights.</p>
                        <a href="#" className="cta-button primary">Analyze</a>
                    </div>
                    <div className="card">
                        <h3>Image Recognition</h3>
                        <p>State-of-the-art image recognition and processing capabilities.</p>
                        <a href="#" className="cta-button primary">Start</a>
                    </div>
                </div>
            </section>

            <section id="values" className="highlight-bg section-padding">
                <h2 className="section-title fade-in">Why Choose Us</h2>
                <div className="values-grid fade-in-delay-3">
                    <div className="value-item">
                        <h3>Innovation</h3>
                        <p>Cutting-edge AI solutions for modern challenges.</p>
                    </div>
                    <div className="value-item">
                        <h3>Reliability</h3>
                        <p>Trusted by thousands of users worldwide.</p>
                    </div>
                    <div className="value-item">
                        <h3>Simplicity</h3>
                        <p>User-friendly interface for seamless experience.</p>
                    </div>
                </div>
            </section>

            <section id="cta-final" className="slide-up">
                <h2>Ready to Get Started?</h2>
                <p>Join thousands of users already benefiting from our AI tools.</p>
                <a href="#" className="cta-button primary large">Start Free Trial</a>
            </section>
        </main>
    );
};

export default Home;