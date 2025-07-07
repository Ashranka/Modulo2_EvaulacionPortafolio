// Smooth scrolling function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    const offset = 80; // Navbar height
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}

// Scroll animations
function animateOnScroll() {
    const elements = document.querySelectorAll('.fade-in');

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

// Navbar background change on scroll
function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    }
}

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const loadingSpinner = document.getElementById('loadingSpinner');
    const formData = new FormData(this);

    loadingSpinner.style.display = 'block';

    setTimeout(() => {
        loadingSpinner.style.display = 'none';

        alert('¡Mensaje enviado exitosamente! Te contactaré pronto.');
        this.reset();
    }, 2000);
});

// Skill progress bar animation
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress-bar');

    skillBars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            const width = bar.style.width;
            bar.style.width = '0%';
            setTimeout(() => {
                bar.style.width = width;
            }, 200);
        }
    });
}

// Event listeners
window.addEventListener('scroll', () => {
    animateOnScroll();
    handleNavbarScroll();
    animateSkillBars();
});


document.addEventListener('DOMContentLoaded', function() {
    animateOnScroll();

    // Smooth scrolling for navbar links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                scrollToSection(target.id);
            }
        });
    });
});

// jQuery animations and effects
$(document).ready(function() {
    $('.project-card').hover(
        function() {
            $(this).find('.project-image').css('transform', 'scale(1.05)');
        },
        function() {
            $(this).find('.project-image').css('transform', 'scale(1)');
        }
    );

    let text = "Desarrollador FullStack";
    let index = 0;
    let subtitle = $('.subtitle');

    function typeWriter() {
        if (index < text.length) {
            subtitle.text(text.substring(0, index + 1));
            index++;
            setTimeout(typeWriter, 100);
        }
    }

    setTimeout(typeWriter, 1000);
});
