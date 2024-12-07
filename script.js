// scripts/script.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form?.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Formulario enviado. ¡Gracias por contactarnos!');
    });
});
