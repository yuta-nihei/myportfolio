document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.header__hamburger');
    const navLinks = document.querySelector('.header__nav-links');
    const navItems = document.querySelectorAll('.header__nav-links a');
    const overlay = document.querySelector('.header__overlay');

    if (hamburger && navLinks && overlay) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
            overlay.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });

        overlay.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            this.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // ナビゲーションリンクのクリックイベント
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}); 