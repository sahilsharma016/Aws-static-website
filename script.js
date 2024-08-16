document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('nav-menu_visible');
    });
});
