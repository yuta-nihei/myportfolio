document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.header__nav-links a');
    const bottomNavLinks = document.querySelectorAll('.bottom-nav__link');
    const currentPage = (() => {
        const path = window.location.pathname.split('/').pop();
        return path === '' ? 'index.html' : path;
    })();

    navItems.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('header__nav-link--active');
        } else {
            link.classList.remove('header__nav-link--active');
        }
    });

    bottomNavLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('bottom-nav__link--active');
        } else {
            link.classList.remove('bottom-nav__link--active');
        }
    });
});
