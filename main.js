// Header Toggle
let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function(e) {
   document.querySelector('body').classList.toggle('movile-nav-active');
   this.classList.toggle('fa-xmark')
})

// Typing Effect
let typed = new Typed('#auto-input', {
    strings: ['Front-End Developer!', 'Web Designer!','Youtuber!' ],
    typeSpeed: 90,
    backSpeed: 90,
    backDelay: 100,
    loop: true,
})

// Add intersection observer for scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

// Animate all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(20px)';
    observer.observe(section);
});

// Smooth scroll for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

