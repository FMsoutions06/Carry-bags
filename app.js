document.addEventListener('DOMContentLoaded', () => {
    // Add smooth scroll behavior to navigation links
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
