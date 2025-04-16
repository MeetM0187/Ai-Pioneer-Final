// Utility function to handle scroll animations
const handleScrollAnimations = () => {
    const animationObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    if (entry.target.classList.contains('card')) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                    if (entry.target.classList.contains('value-item')) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                }
            });
        },
        { threshold: 0.1 }
    );

    // Observe elements with animation classes
    document.querySelectorAll('.fade-in, .slide-up, .card, .value-item').forEach(element => {
        animationObserver.observe(element);
    });

    // Clean up function
    return () => animationObserver.disconnect();
};

export default handleScrollAnimations;