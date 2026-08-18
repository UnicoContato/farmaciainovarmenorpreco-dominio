document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('site-header');
    const menuButton = document.getElementById('menu-button');
    const mainNav = document.getElementById('main-nav');
    const privacyOpen = document.getElementById('privacy-open');
    const privacyModal = document.getElementById('privacy-modal');
    const closeModalControls = privacyModal.querySelectorAll('[data-close-modal]');

    const updateHeader = () => {
        header.classList.toggle('is-scrolled', window.scrollY > 20);
    };

    updateHeader();
    window.addEventListener('scroll', updateHeader, { passive: true });

    menuButton.addEventListener('click', () => {
        const isOpen = mainNav.classList.toggle('is-open');
        menuButton.setAttribute('aria-expanded', String(isOpen));
    });

    mainNav.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('is-open');
            menuButton.setAttribute('aria-expanded', 'false');
        });
    });

    const openModal = () => {
        privacyModal.classList.add('is-open');
        privacyModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        privacyModal.classList.remove('is-open');
        privacyModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    };

    privacyOpen.addEventListener('click', openModal);
    closeModalControls.forEach((control) => control.addEventListener('click', closeModal));

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && privacyModal.classList.contains('is-open')) {
            closeModal();
        }
    });
});
