// --- Sticky Navbar with Blur Effect ---
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// --- Slow Staggered Intersection Observer ---
const observerOptions = {
    threshold: 0.2, // Triggers when 20% is in view for better visibility
    rootMargin: "0px 0px -50px 0px"
};

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Stop observing once animated to maintain performance
            revealObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Target all tabs, side-entries, and reveal sections
document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .glow-tab').forEach(el => {
    revealObserver.observe(el);
});

// --- Smooth Scrolling for Navigation Links ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const headerOffset = 80;
            const elementPosition = targetElement.offsetTop;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});
