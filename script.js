document.addEventListener('DOMContentLoaded', () => {
    const getStartedButton = document.querySelector('#hero button');
    getStartedButton.addEventListener('click', () => {
        alert('Thank you for your interest! We will contact you soon.');
    });

    const contactForm = document.querySelector('#contact form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Your message has been sent!');
        contactForm.reset();
    });
}); 