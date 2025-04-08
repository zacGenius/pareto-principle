 // Adiciona animação de scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Adiciona efeito de parallax ao background
window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset;
    const gradientBg = document.querySelector('.gradient-bg');
    gradientBg.style.backgroundPosition = `0% ${scrollPosition * 0.5}px`;
});

// Animação para os cards quando entram na viewport
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
        }
    });
}, observerOptions);

document.querySelectorAll('.card').forEach(card => {
    observer.observe(card);
});