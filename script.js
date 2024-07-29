document.querySelectorAll('.faq-section h2').forEach(section => {
    section.addEventListener('click', () => {
        const div = section.nextElementSibling;
        div.style.display = div.style.display === 'block' ? 'none' : 'block';
    });
});
