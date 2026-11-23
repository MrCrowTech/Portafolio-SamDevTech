// theme toggle
const lightButton = document.getElementById('light_btn');
const darkButton = document.getElementById('dark_btn');
const body = document.querySelector('.bd');

darkButton.addEventListener('click', () => {
    body.classList.add('dark');
});

lightButton.addEventListener('click', () => {
    body.classList.remove('dark');
});

// contact form
const form = document.getElementById('contactForm');
const success = document.getElementById('formSuccess');

function showError(id, msg) {
    const el = document.getElementById(id);
    if (el) el.textContent = msg;
    const input = document.getElementById(id.replace('Error', ''));
    if (input) input.classList.add('input--error');
}

function clearError(id) {
    const el = document.getElementById(id);
    if (el) el.textContent = '';
    const input = document.getElementById(id.replace('Error', ''));
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
