window.onload = () => {
    window.scrollTo(0, 0);
};
// Intersection Observer para animações
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade');
        }
    });
}, observerOptions);

// Observa todos os glass-cards
document.querySelectorAll('.glass-card').forEach((el, index) => {
    el.style.transitionDelay = `${index * 0.011}s`;
    observer.observe(el);
});

// Hero parallax effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroVideo = document.querySelector('.hero-video');
    if (heroVideo) {
        heroVideo.style.transform = `scale(1.1) translateY(${scrolled * 0.3}px)`;
    }
});

// Previne zoom em inputs mobile
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('focus', () => {
        document.body.style.fontSize = '16px';
    });
    input.addEventListener('blur', () => {
        document.body.style.fontSize = '';
    });
});
