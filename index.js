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

heroSocials.forEach(function (icon) {
    icon.addEventListener('click', function () {
        heroAlert.classList.add('active');
        setTimeout(function () {
            heroAlert.classList.remove('active');
        }, 3000);
    });
});

// cv alert

const cvButton = document.querySelector('.about__cv-btn')
const cvAlert = document.querySelector('.about__cv-alert')

cvButton.addEventListener('click', () => {
    cvAlert.classList.add('active')

    setTimeout(() => {
        cvAlert.classList.remove('active')
    }, 5000);
})

// contact
var form = document.getElementById('contactForm');
var formSuccess = document.getElementById('formSuccess');

// Funcion para mostrar error en un campo
function showError(inputId, errorId, message) {
    var input = document.getElementById(inputId);
    var error = document.getElementById(errorId);
    input.classList.add('input--error');
    error.textContent = message;
}

// Funcion para limpiar error de un campo
function clearError(inputId, errorId) {
    var input = document.getElementById(inputId);
    var error = document.getElementById(errorId);
    input.classList.remove('input--error');
    error.textContent = '';
}

// Limpiar error cuando el usuario empieza a escribir
document.getElementById('name').addEventListener('input', function() {
    clearError('name', 'nameError');
});
document.getElementById('email').addEventListener('input', function() {
    clearError('email', 'emailError');
});
document.getElementById('subject').addEventListener('input', function() {
    clearError('subject', 'subjectError');
});
document.getElementById('message').addEventListener('input', function() {
    clearError('message', 'messageError');
});

// Submit del formulario
form.addEventListener('submit', function(event) {
    event.preventDefault();

    var isValid = true;

    // Validar nombre
    if (document.getElementById('name').value.trim() === '') {
        showError('name', 'nameError', 'Please enter your name.');
        isValid = false;
    }

    // Validar email
    var emailValue = document.getElementById('email').value.trim();
    if (emailValue === '') {
        showError('email', 'emailError', 'Please enter your email.');
        isValid = false;
    } else if (!emailValue.includes('@')) {
        showError('email', 'emailError', 'Enter a valid email address.');
        isValid = false;
    }

    // Validar subject
    if (document.getElementById('subject').value.trim() === '') {
        showError('subject', 'subjectError', 'Please enter a subject.');
        isValid = false;
    }

    // Validar message
    if (document.getElementById('message').value.trim() === '') {
        showError('message', 'messageError', 'Please write your message.');
        isValid = false;
    }

    // Si todo esta bien, mostrar exito
    if (isValid) {
        form.reset();
        formSuccess.classList.add('active');
        setTimeout(function() {
            formSuccess.classList.remove('active');
        }, 5000);
    }
});

// burger menu

var burger = document.getElementById('burger');
var burgerIcon = document.getElementById('burgerIcon');
var mobileMenu = document.getElementById('mobileMenu');
var mobileLinks = document.querySelectorAll('.mobile-menu a');

burger.addEventListener('click', function() {
    mobileMenu.classList.toggle('open');
    if (mobileMenu.classList.contains('open')) {
        burgerIcon.classList.remove('ri-menu-line');
        burgerIcon.classList.add('ri-close-line');
    } else {
        burgerIcon.classList.remove('ri-close-line');
        burgerIcon.classList.add('ri-menu-line');
    }
});

mobileLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        mobileMenu.classList.remove('open');
        burgerIcon.classList.remove('ri-close-line');
        burgerIcon.classList.add('ri-menu-line');
    });
});

