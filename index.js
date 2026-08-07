// navbar
const navbar = document.getElementById('navbar');
if (navbar) {
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 30);
    });
}

// mobile
const burger = document.getElementById('burger');
const burgerIcon = document.getElementById('burgerIcon');
const mobileMenu = document.getElementById('mobileMenu');
if (burger && mobileMenu) {
    burger.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
        if (burgerIcon) {
            burgerIcon.className = mobileMenu.classList.contains('open')
                ? 'ri-close-line'
                : 'ri-menu-line';
        }
    });
    mobileMenu.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            if (burgerIcon) burgerIcon.className = 'ri-menu-line';
        });
    });
}

// contact
const form = document.getElementById('contactForm');
const success = document.getElementById('formSuccess');

function showError(id, msg) {
    const el = document.getElementById(id);
    if (el) el.textContent = msg;
    const inputId = id.replace('Error', '');
    const input = document.getElementById(inputId);
    if (input) input.classList.add('input--error');
}

function clearError(id) {
    const el = document.getElementById(id);
    if (el) el.textContent = '';
    const inputId = id.replace('Error', '');
    const input = document.getElementById(inputId);
    if (input) input.classList.remove('input--error');
}

if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let valid = true;
        ['name', 'email', 'subject', 'message'].forEach(f => clearError(f + 'Error'));

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const subject = form.subject.value.trim();
        const message = form.message.value.trim();

        if (!name) { showError('nameError', 'Name is required'); valid = false; }
        if (!email) { showError('emailError', 'Email is required'); valid = false; }
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            showError('emailError', 'Enter a valid email'); valid = false;
        }
        if (!subject) { showError('subjectError', 'Subject is required'); valid = false; }
        if (!message) { showError('messageError', 'Message is required'); valid = false; }

        if (valid) {
            const data = new FormData(form);
            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: data
            }).then(r => r.json()).then(() => {
                if (success) success.classList.add('active');
                form.reset();
                setTimeout(() => success && success.classList.remove('active'), 5000);
            }).catch(() => {
                if (success) success.classList.add('active');
                form.reset();
            });
        }
    });
}
