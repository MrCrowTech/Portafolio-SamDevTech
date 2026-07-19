// navbar scroll effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// social icons disclaimer
const heroSocials = document.querySelectorAll('.hero__socials i');
const heroAlert = document.querySelector('.hero__alert');

heroSocials.forEach((icon) => {
    icon.addEventListener('click', () => {
        heroAlert.classList.add('active');
        setTimeout(function () {
            heroAlert.classList.remove('active');
        }, 3000);
    });
});

// cv alert
const cvButton = document.querySelector('.about__cv-btn');
const cvAlert = document.querySelector('.about__cv-alert');

cvButton.addEventListener('click', () => {
    cvAlert.classList.add('active');
    setTimeout(() => {
        cvAlert.classList.remove('active');
    }, 5000);
});

// contact form
const form = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

function showError(inputId, errorId, message) {
    var input = document.getElementById(inputId);
    var error = document.getElementById(errorId);
    input.classList.add('input--error');
    error.textContent = message;
}

function clearError(inputId, errorId) {
    var input = document.getElementById(inputId);
    var error = document.getElementById(errorId);
    input.classList.remove('input--error');
    error.textContent = '';
}

document.getElementById('name').addEventListener('input', () => {
    clearError('name', 'nameError');
});
document.getElementById('email').addEventListener('input', () => {
    clearError('email', 'emailError');
});
document.getElementById('subject').addEventListener('input', () => {
    clearError('subject', 'subjectError');
});
document.getElementById('message').addEventListener('input', () => {
    clearError('message', 'messageError');
});

form.addEventListener('submit', function (event) {
    event.preventDefault();

    let isValid = true;

    if (document.getElementById('name').value.trim() === '') {
        showError('name', 'nameError', 'Please enter your name.');
        isValid = false;
    }

    var emailValue = document.getElementById('email').value.trim();
    if (emailValue === '') {
        showError('email', 'emailError', 'Please enter your email.');
        isValid = false;
    } else if (!emailValue.includes('@')) {
        showError('email', 'emailError', 'Enter a valid email address.');
        isValid = false;
    }

    if (document.getElementById('subject').value.trim() === '') {
        showError('subject', 'subjectError', 'Please enter a subject.');
        isValid = false;
    }

    if (document.getElementById('message').value.trim() === '') {
        showError('message', 'messageError', 'Please write your message.');
        isValid = false;
    }

    if (isValid) {
        form.reset();
        formSuccess.classList.add('active');
        setTimeout(() => {
            formSuccess.classList.remove('active');
        }, 5000);
    }
});

// burger menu
const burger = document.getElementById('burger');
const burgerIcon = document.getElementById('burgerIcon');
const mobileMenu = document.getElementById('mobileMenu');
const mobileLinks = document.querySelectorAll('.mobile-menu a');

burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    if (mobileMenu.classList.contains('open')) {
        burgerIcon.classList.remove('ri-menu-line');
        burgerIcon.classList.add('ri-close-line');
    } else {
        burgerIcon.classList.remove('ri-close-line');
        burgerIcon.classList.add('ri-menu-line');
    }
});

mobileLinks.forEach((link) => {
    link.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
        burgerIcon.classList.remove('ri-close-line');
        burgerIcon.classList.add('ri-menu-line');
    });
});

// reveal on scroll
const revealElements = document.querySelectorAll('[data-reveal]');

// no motion
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReduced) {
    revealElements.forEach((el) => {
        el.classList.add('is-visible');
    });
} else {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

    revealElements.forEach(function (el) {
        observer.observe(el);
    });
}